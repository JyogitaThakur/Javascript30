## Day-27 - Click and Drag to Scroll

In this Exercise, we learned to make a pretty neat click and drag to scroll interface where we will use a whole lot about JavaScript events!

## Steps:
- First Set up Some Variables.
    ```
        const slider = document.querySelector('.items')
        let isDown = false
        let startX 
        let scrollLeft;
    ```
- isDown is a flag variable set to true or false on clicking and StartX variable is use to keep a track of the user's initial click.

- Add EventListener on `mousedown` event to activate the slider.

    ```
        slider.addEventListener('mousedown', (e) =>{
            isDown = true
            slider.classList.add('active')
            startX = e.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
        })
    ```

- To turn off the slider we use `mouseleave` and `mouseup` events.
    ```
        slider.addEventListener('mouseleave', () =>{
            isDown = false
            slider.classList.remove('active')
        })

        slider.addEventListener('mouseup', () =>{
            isDown = false
            slider.classList.remove('active')
        })

    ```

- create a `mousemove` event which makes the slider scroll.

    ```
        slider.addEventListener('mousemove', (e) =>{

            if(!isDown) return // false : stop the function from running
            e.preventDefault()
            const x = e.pageX - slider.offsetLeft
            const walk = (x - startX) * 3 // moves 3pixels
            slider.scrollLeft = scrollLeft - walk

        })
    ```