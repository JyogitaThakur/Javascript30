## Day-18 -  Adding Up Times with Reduce

In this Exercise, we learned Array.prototype.map and Array.prototype.reduce to figure out the total runtime of given videos in hours, minutes and seconds.

- We are given list of video items and each one has a data-time attribute whose value is length of the video in the format of minutes and seconds. We have to pull them out of DOM and convert them into numbers.
- using split(":") we will get minutes and seconds, add the minutes and seconds to get the seconds.
- Using Reduce get the total seconds.
- Using total seconds, calculate the hours,minutes and seconds.

```
    // To calculate total seconds into hours, minutes and seconds.
    let seconds = totalSeconds
    // Hours
    const hours = Math.floor(seconds/3600)
    console.log(hours)
    seconds = seconds % 3600
    // Minutes
    const minutes = Math.floor(seconds / 60)
    //Seconds
    seconds = seconds % 60

    console.log(`${hours} : ${minutes} : ${seconds}`)

```