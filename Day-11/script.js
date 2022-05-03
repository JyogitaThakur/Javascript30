// Get all the elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const screen = player.querySelector(".screen");

// Build Functions

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.innerText = icon;
  console.log(icon);
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}
function handleRange() {
  console.log(this.name, this.value);
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  console.log(scrubTime);
  video.currentTime = scrubTime;
}

function handleFullScreen(){
    if(document.fullscreenElement == null){
        const elem = document.getElementById("player");
            elem.requestFullscreen()
            screen.innerText = '🗙︎'
            console.log("full screen")
            console.log(document.fullscreenElement)
    }
    else{
            document.exitFullscreen()
            screen.innerText = '⛶'
            console.log("Exit screen")
            console.log(document.fullscreenElement)
    }
}

// Event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("click", handleRange));
progress.addEventListener("click", scrub);

let mousedown = false;
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

screen.addEventListener("click", handleFullScreen);
