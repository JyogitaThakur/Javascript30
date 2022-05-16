## Day-25 - Event Capture, Propagation and Bubbling

In this Exercise, we learned about Event Capture, Propagation, Bubbling and Once.

### Steps:

- First we Selected the three nested divs.
  ```
      const divs = document.querySelectorAll('div')
  ```
- Logged an event on divs using Event Listener

  ```
      function logText(e){
          console.log(this.classList.value)
      }

      divs.forEach(div => div.addEventListener('click', logText,{
          capture : false // Event capturing Top-bottom
      }))

  ```

- There are two ways of event propagation in the HTML DOM, bubbling and capturing.
- In bubbling the inner most element's event is handled first and then the outer :If you click on the innermost div, all three divs will log a click event.
- In capturing the outer most element's event is handled first and then the inner : It will start from the browser to the innermost div.
- Event Listener method contains capture argument. By default the value is false, if we set it to true then the first capture triggers the event, that is from the outermost container first.

  ```
      divs.forEach(div => div.addEventListener('click', logText,{
          capture : true // Event capturing outer to inner
      }))
  ```

- If we run the stopPropagation method, only clicking on the innermost container will trigger a click event.

  ```
      e.stopPropagation();
  ```

- Once Concept :The user can only click on the element once. This feature is useful in an online store checkout app where you only want the user to click on a button one time.

  ```
      button.addEventListener('click', () =>{
          console.log("This is going to click only once!!!")
      } ,{
          once:true
      })

  ```
