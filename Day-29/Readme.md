## Day-29 - Countdown Timer

In this Exercise, We build a custom JavaScript countdown timer from scratch with Vanilla JavaScript including interesting features. A display below the timer shows what time it will be when the timer runs out. A menu at the top of the page contained several selections to set the timer, as well as an input area to select a unique time. Also a EndTime is displayed.

### Steps:
- Create a variables countDown, displayTime, endTime and buttons which select the respective classes.
    ```
        let countDown
        let displayTime = document.querySelector('.display__time-left')
        let endTime = document.querySelector('.display__end-time')
        const buttons = document.querySelectorAll('[data-time]')
    ```
- Create a function timer which calculates the seconds and gives the start and endTime value.  
    ```
        function timer(seconds){
            // clear the existing timers
            clearInterval(countDown)

            const now = Date.now()
            const then = now + seconds * 1000
            displayTimeLeft(seconds)
            displayEndTime(then)

            countDown = setInterval(() => {
                const secondsLeft = Math.round((then-Date.now()) / 1000)
                // check if we should stop it
                if(secondsLeft <= 0){
                    clearInterval(countDown)
                    return
                }
                // display it
                displayTimeLeft(secondsLeft)
            },1000)
        }
    ```
- displayTimeLeft function calculates the seconds Left and display in the DOM.
    ```
        function displayTimeLeft(seconds){
            const minutes = Math.round(seconds/60)
            const remainderseconds = seconds % 60
            const display = `${minutes}:${remainderseconds < 10 ? '0' : ''}${remainderseconds}`
            displayTime.textContent = display
            document.title = display
            // console.log(minutes, remainderseconds)
        }
    ```
- displayEndTime function calculate and displays the endTime in the DOM.
    ```
        function displayEndTime(timestamp){
            const end = new Date(timestamp)
            const hour = end.getHours()
            console.log(hour)
            const minutes = end.getMinutes()
            const adjustedHour = hour > 12 ? hour - 12 : hour
            endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0': ''}${minutes}`
        }
    ```
- Create function startTimer which selects the time from the navbar and display Time in the DOM.
    ```
        function startTimer(){
            const seconds = parseInt(this.dataset.time)
            timer(seconds)
        }
    ```


- Add EventListener which listens event on buttons.
    ```
        buttons.forEach(button => button.addEventListener('click', startTimer))

        //custom minutes
        document.customForm.addEventListener('submit', function(e){
            e.preventDefault()
            const mins = this.minutes.value
            console.log(mins)
            timer(mins * 60)
            this.reset()
        })
    ```