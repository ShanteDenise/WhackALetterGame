const holes = document.querySelectorAll('.hole')
const score = document.querySelector('.score')
const alphabet = document.querySelectorAll('.alphabet')
let lastHole;
let timeUp = false;
let userScore = 0;
let lastLetter;


holes.forEach(hole => {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let randLetter;
    function rand (){
        randLetter = Math.floor(Math.random() * 26) + 1
    }
    while (lastLetter === letters[randLetter]) {
        rand()
    }
    setTimeout(function(){
        hole.childNodes[1].className = "alphabet " + letters[randLetter]
        lastLetter = letters[randLetter]
    }, 10)
    console.log(hole.childNodes[1])

})


