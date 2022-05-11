const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

// To get the video being piped into that video element
function getVideo() {
  //getUserMedia() to get access to audio and video input from the user
  navigator.mediaDevices
    .getUserMedia({ video: false, audio: false }) // gives a promise
    .then((localMediaStream) => {
      console.log(localMediaStream);

      //localMediaStream is an object. In order for our video to work, it actually needs to be converted into some sort of URL.
      // .createObjectURL convert that media stream into something that this video player can understand.
      
      video.srcObject = localMediaStream;
      // since it is a media stream and is not going to update unless we actually play it. To Solve we use video.play()
      video.play();
    })
    .catch((err) => {
      // When user denied for the access.
      console.error("OH NO !!!!", err);
    });
}

// To Paint the video on the canvas screen
function paintToCanvas() {
  // resize the canvas according to the video length
  const width = video.videoWidth;
  const height = video.videoHeight;
  console.log(width, height);
  canvas.width = width;
  canvas.height = height;

  // drawImage works is that you pass it an image, or a video element, and it will paint it right to it.
  return setInterval(() => {
    // resized the canvas
    ctx.drawImage(video, 0, 0, width, height);

    // Filters
    // Take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);

    pixels = redEffect(pixels); // gives the red filter
    // pixels = rgbSplit(pixels);
     // pixels = greenScreen(pixels);

    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

//The Complete take photo function
function takePhoto() {
  // Sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas and pass to 'image/jpeg'
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  //The image is in text-based representation so we need to convert into a link
  link.href = data;
  link.setAttribute("download", "photo"); // download attribute to download the image
  link.innerHTML = `<img src="${data}" alt="photo" /> `;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 500; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i - 150] = pixels.data[i + 0]; // RED
      pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
      pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};
  
    document.querySelectorAll(".rgb input").forEach((input) => {
      levels[input.name] = input.value;
    });
  
    for (i = 0; i < pixels.data.length; i = i + 4) {
      red = pixels.data[i + 0];
      green = pixels.data[i + 1];
      blue = pixels.data[i + 2];
      alpha = pixels.data[i + 3];
  
      if (
        red >= levels.rmin &&
        green >= levels.gmin &&
        blue >= levels.bmin &&
        red <= levels.rmax &&
        green <= levels.gmax &&
        blue <= levels.bmax
      ) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }
  
    return pixels;
}

// canplay event occurs when the browser can start playing the specified audio/video
video.addEventListener("canplay", paintToCanvas);
getVideo();
