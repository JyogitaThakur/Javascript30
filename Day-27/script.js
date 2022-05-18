const slider = document.querySelector('.items')
let isDown = false 
let startX;
let scrollLeft;

// e.pageX tells where we exactly clicked on the viewport
// StartX : is use to keep a track of the user's initial click
// x : after clicking it tracks the left and right pixels have the mouse has moved 
//scrollLeft property sets or returns the number of pixels an element's content is scrolled horizontally

slider.addEventListener('mousedown', (e) =>{
    isDown = true
    slider.classList.add('active')
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
})

slider.addEventListener('mouseleave', () =>{
    isDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mouseup', () =>{
    isDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mousemove', (e) =>{
    if(!isDown) return // false : stop the function from running
    // console.count(isDown)
    e.preventDefault()
    // console.log('Do Work!!!')
    const x = e.pageX - slider.offsetLeft
    const walk = (x - startX) * 3 // moves 3pixels
    slider.scrollLeft = scrollLeft - walk
    // console.log(` ${scrollLeft} - ${walk} = ${slider.scrollLeft} `)
})