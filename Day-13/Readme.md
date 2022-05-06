## Day-13 - Slide in on Scroll

In this Exercise, we learned to make a Slide-in-on-Scroll, that is when you slide down, the image sort of slide themselves in form left or right. The images are hidden by default using CSS.

### Properties used : 
-  To get the width and height of the window
    ```
        console.log(window.innerHeight)
        console.log(window.innerWidth)
    ```    
- To get the page and image position
    ```
        pagePosition = window.scrollY + window.innerHeight
        imagePosition = sliderImage.height / 2
    ```    
- Here window.scrollY gives how far we have scrolled down from the top of the browser window, but it gives the distance only upto the the top of the viewport and we want to know the distance upto the bottom of our window so we add window.innerHeight to it. Substract it with silderImage height and divide it by 2 (beacuse we want animation to happen halfway)