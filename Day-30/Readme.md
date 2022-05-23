## Day-30 - Whack A Mole

In this Exercise, we build a fun and interesting Whack-A-Mole game.

### Steps:
- create variables holes, scoreBoard, moles which select the respective classes and  lastHole, timeUp set to false and score = 0
    ```
        const holes = document.querySelectorAll('.hole');
        const scoreBoard = document.querySelector('.score');
        const moles = document.querySelectorAll('.mole');
        let lastHole
        let timeUp = false
        let score = 0
    ```
- Create a random function which randomize the time each mole stuck its head out.
    ```
        function randomTime(min, max){
            return Math.round(Math.random()* (max-min) + min)
        }
    ```
- Create a random function, which hole the mole stuck its head out of.
    ```
        function randomHole(holes){
            const idx = Math.floor(Math.random() * holes.length)
            const hole = holes[idx]
            if(hole == lastHole){
            console.log('Ah thats the same number')
            return randomHole(holes)
            }
            lastHole = hole
            return hole
        }
    ```
- Create function peep which give the svg image to peep out of the hole by toggling of the class and with setTimeout.
    ```
        function peep(){
            const time = randomTime(200,1000)
            const hole = randomHole(holes)
            hole.classList.add('up')
            setTimeout(()=>{
            hole.classList.remove('up')
            if(!timeUp) peep()
            }, time)
        }
    ```
- Create function startGame on clicking it resets the game.
    ```
        function startGame(){
            scoreBoard.textContent = 0
            let timeUp = false
            peep()
            score = 0
            setTimeout(()=> timeUp = true, 100000)
        }
    ```
- Listen an click event with function bonk which gives the score which the user clicked the mole.
    ```
        function bonk(e){
            if(!e.isTrusted) return
            score++
            this.classList.remove('up')
            scoreBoard.textContent = score
        }

        moles.forEach(mole => mole.addEventListener('click', bonk))
    ```