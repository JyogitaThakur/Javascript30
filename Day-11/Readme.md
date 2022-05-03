## Day-10 - Custom Video Player

In this Exercise,we made a custom video player in HTML5 and using JavaScript and CSS added a lot of features and functionalities to the video player.

### Challenge : Add Full Screen
- Added the open Fullscreen and Exit Fullscreen functionality.
- The Document.fullscreenElement read-only property returns the Element that is currently being presented in fullscreen mode in this document, or null if fullscreen mode is not currently in use.
- The solution used is 
    ```
        function handleFullScreen(){
                if(document.fullscreenElement == null){
                    const elem = document.getElementById("player");
                        elem.requestFullscreen()
                }
                else{
                        document.exitFullscreen()
                }
        }

    ```     