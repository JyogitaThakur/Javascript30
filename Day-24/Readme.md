## Day-24 - Sticky Nav

In this Exercise, we learned to make a sicky navbar to the top of the page as the user scrolls down. Also, when scrolled down by the user the logo slides in from the top-left corner.

### Steps:
- we have some content and the navbar on the web Page, to make sticky navbar when user scrolls down we need to calculate the offsetTop to get the value from the top.
- Create two variables which is containing nav Element and the nav OffsetTop.
    ```
        const nav = document.querySelector('#main')
        const topOfNav = nav.offsetTop;
    ```

- Listen an event on window on scroll which fixs Nav.

    ```
        window.addEventListener('scroll', fixNav)

    ```

- Create a function fixNav that helps to make the sticky navbar using if condition which checks if the nav position is on the top during scrolling using window.scrollY and nav.offsetTop and sets the navbar on top using JS and CSS.
    ```
        function fixNav(){
        // console.log(topOfNav, window.scrollY)
            if(window.scrollY >= topOfNav){
                document.body.style.paddingTop = nav.offsetHeight + 'px'
                document.body.classList.add('fixed-nav')
            }
            else{
                document.body.style.paddingTop = 0
                document.body.classList.remove('fixed-nav')
            }
    }

    ```

- The CSS Styling Added for sticky navigation bar

```
    .fixed-nav nav{
        position: fixed;
        box-shadow: 0 5px rgba(0, 0, 0, 0.1);
    }

```

- After user scrolls down the Logo slides in from the top-left corner using CSS styling.

    ```
        .fixed-nav li.logo{
            max-width: 700px;
        }
    ```

- Add Some styling and transitions after the user scrolls down.

    ```
        .fixed-nav .site-wrap{
            transform: scale(1);
        }
    ```