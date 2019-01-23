
const holes = document.querySelectorAll('.hole')
const score = document.querySelector('.score')
const alphabet = document.querySelectorAll('.alphabet')
let lastHole;
let timeUp = true;
let userScore = 0;
let lastLetter;
let timer;

//Get a random letter on each hole. 
holes.forEach(hole => {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let randLetter;
    function rand (){
        randLetter = Math.floor(Math.random() * 26) + 1
    }
    //While last letter is equal to a random letter run rand function
    while (lastLetter === letters[randLetter]) {
        rand()
    }
    //Add random letter to hole
    setTimeout(function(){
        hole.childNodes[1].classList.add(letters[randLetter])
        lastLetter = letters[randLetter]
    }, 50)

})
//Get random hole
function randomHole(holes){
    const randomNum = Math.floor(Math.random() * 8) + 1
    const hole = holes[randomNum]
    return hole; 
}
//Show letter for random hole 
function peep() {
    const time = Math.floor(Math.random() * 1500 ) + 500;
    const hole = randomHole(holes)
    hole.classList.add('up')
    setTimeout(() => {
        hole.classList.remove('up')
        // if(!timeUp) peep()
    }, time)
}

function startGame(){
    //When you start game time up is set to false
    timeUp = false;
    //Call function peep
    //Game lasts 20 seconds, users score is equal to 0 on the start of the game
    timer = window.setInterval(() => {
        peep() 
    }, 1500)
   
}

function scoreIncrease(hole){
    //if timeUp is false and the letter is up add to userScore on click
    if(timeUp === false && hole.classList[2] === 'up'){
        userScore++
        score.textContent = userScore
        hole.classList.remove('up')
    }
    // console.log(userScore)
    if(userScore == 26){
        alert("Yaaaaay! You win! " + "Your Score is " + userScore)
        userScore = 0;
        score.textContent = userScore
        window.clearInterval(timer);
    }  

   
    console.log(timer)
}



//Loop through holes adding on click function and increase score
holes.forEach(hole => hole.addEventListener('click', () => scoreIncrease(hole) ))
