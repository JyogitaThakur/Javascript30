## Day-21 -  Geolocation

In this Exercise, we learned to use Geolocation API to show a user’s speed/direction on screen. Here the instructor has used the x-code app to create a geolocation app. The x-code app is exclusive to the Mac.

### Steps:
- Here we are using geolocation API. There are two methods we could access Geolocation.getCurrentPosition() or Geolocation.watchPosition().
- we will create two variables to access the HTML elements.
    ```
        const arrow = document.querySelector('.arrow');
        const speed = document.querySelector('.speed-value');
    ```
- we are going to use watchPosition()
    ```
        navigator.geolocation.watchPosition((data) => {
            console.log(data)
        }
    ```
- Using watchPosition() get the values whenever location changes and update the speed and arrow.
    ```
        navigator.geolocation.watchPosition((data) => {
            console.log(data)
            speed.textContent = data.coords.speed // speed of the device moves 
            arrow.style.transform = `rotate(${data.coords.heading}deg)`
        }
    ```
- And if the user won't allow the access the location then we can callback error function

    ```
        (err) => {
            console.log(err)
            alert('Hey!! You GOTTA Allow ')
        }
    ```