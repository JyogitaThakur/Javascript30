## Day-26 - Stripe Follow Along Nav

In this Exercise, we learned about the dropdown element that followed along a navigation bar.

## Steps:

- We had three list items inside an unordered list that made up the navigation bar. It included the dopdown class which contained the properties, `display:none` and Opacity:`0`.
- There is `will-change` property that tells the browser to except an element change later on.
- Create three variables which contains all the li tags, dropdownBackground and the nav.

  ````
  const triggers = document.querySelectorAll('.cool > li')
  const background = document.querySelector('.dropdownBackground')
  const nav = document.querySelector('.top')

  ````

- Create two functions handleEnter() and handleLeave() which will handle the mouseleave and mouseenter events.
- In function handleEnter, we will add class `trigger-enter` which makes the element display block and using setTimeout will add class `trigger-enter-active` which sets its opacity to 1. And also add the class `open` to background which sets its opacity to 1.

  ```
  function handleEnter(){
      this.classList.add('trigger-enter')

      setTimeout(() =>
      this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active') , 150);

      background.classList.add('open')
  }

  ```

- CSS Classes

  ```
        .trigger-enter .dropdown {
            display: block;
        }

        .trigger-enter-active .dropdown {
            opacity: 1;
        }

        .dropdownBackground.open {
            opacity: 1;
        }
  ```

- To get the height and width of dropdown and nav elements we are using getBoundingClientRect() function.
    ```
        const dropdown = this.querySelector('.dropdown')
        const dropdownCoords = dropdown.getBoundingClientRect()
        const navCoords = nav.getBoundingClientRect()
        console.log(navCoords)

        const coords = {
            width : dropdownCoords.width,
            height : dropdownCoords.height,
            top : dropdownCoords.top - navCoords.top,
            left : dropdownCoords.left - navCoords.left
        }

    ```
- Now resize the element using setProperty().
    ```
        background.style.setProperty('width', `${coords.width}px`)
        background.style.setProperty('height', `${coords.height}px`)
        background.style.setProperty('transform' ,`translate(${coords.left}px, ${coords.top}px)`)
    ```
- The function handleLeave() remove the 'trigger-enter','trigger-enter-active' and open class when the mouseleave event occurs.
    ```
        function handleLeave(){
            // console.log('Leave')
            console.log(this)
            this.classList.remove('trigger-enter', 'trigger-enter-active')
            background.classList.remove('open')
        }
    ```
- Last the Event Listeners.
    ```
    triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
    triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))
    ```
````
