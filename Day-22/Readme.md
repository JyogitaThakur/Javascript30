## Day-22 -  Follow Along Link Highlighter

In this Exercise, we learned how to make those cool follow along links in JavaScript. As you moved the mouse across the bar, the tabs will highlight. The size of the highlight changes to fit the word as the mouse moves to a different tab. 

### Steps :
- Create two variables one which select all the links and other to add Highlight.
    ```
        const triggers = document.querySelectorAll('a')
        const highlight = document.createElement('span')
        highlight.classList.add('highlight')
        document.body.appendChild(highlight)
    ```
- Then create a function highlightLink() which obtains the bounding co-ordinates and matched them up with the target to be highlighted. The getBoundingClientRect() method returns the size of an element and its position relative to the viewport
    ```
        function highlightLink(){
                const linkCoords = this.getBoundingClientRect()
                // console.log(this, linkCoords)

                const coords ={
                width : linkCoords.width,
                height : linkCoords.height,
                top : linkCoords.top + window.scrollY,
                left : linkCoords.left + window.scrollX
                }
            }
    ```
- Add the co-ordinates using template literals to get the height,width of an element.
    ```
        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;
        highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
    ```
- Add Event Listener on 'mouseenter' event to detect the mouse hovering over the link element and highlight the element.
    ```
        triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))
    ```