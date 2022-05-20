let countDown
let displayTime = document.querySelector('.display__time-left')
let endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

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
        if(secondsLeft < 0){
            clearInterval(countDown)
            return
        }
        // display it
        displayTimeLeft(secondsLeft)
    },1000)
}

function displayTimeLeft(seconds){
    const minutes = Math.round(seconds/60)
    const remainderseconds = seconds % 60
    const display = `${minutes}:${remainderseconds < 10 ? '0' : ''}${remainderseconds}`
    displayTime.textContent = display
    document.title = display
    // console.log(minutes, remainderseconds)
}

// display End Time
function displayEndTime(timestamp){
    const end = new Date(timestamp)
    const hour = end.getHours()
    console.log(hour)
    const minutes = end.getMinutes()
    const adjustedHour = hour > 12 ? hour - 12 : hour
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0': ''}${minutes}`
}

function startTimer(){
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTimer))

//custom minutes
document.customForm.addEventListener('submit', function(e){
    e.preventDefault()
    const mins = this.minutes.value
    console.log(mins)
    timer(mins * 60)
    this.reset()
})