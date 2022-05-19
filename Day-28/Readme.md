## Day-28 - Video Speed Controller

In this Exercise, we build an experimental video speed controller UI.

### Steps:
- Create variables speed,bar and video which selects the speed, speed-bar and video classes.
    ```
        const speed = document.querySelector('.speed')
        const bar = document.querySelector('.speed-bar')
        const video = document.querySelector('.flex')
    ```
- Listen a mousemove event on bar which will first find the position of the mouse on the speed-bar and calculate the height and the playbackRate. Then linked the playbackRate to the position, calculate and displayed a value representing the speed.
    ```
        function handleMouse(e) {
        const y = e.pageY - this.offsetTop
        
        // Calculate the height
        const percent = y / this.offsetHeight
        const min = 0.4
        const max = 4

        // Adjust the Height of the bar
        const height = Math.round(percent * 100) + '%'
        bar.style.height = height

        // playbackRate
        const playbackRate = percent * (max-min) + min
        bar.textContent = playbackRate.toFixed(1) + 'x'
        video.playbackRate = playbackRate;
        }
    ```
- Note : playbackRate was both a variable and a method attached to the video object.