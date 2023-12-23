// to generate a random number between 1 to 100

const theRandomNum = ( parseInt(Math.random()*100) + 1);

// for the submit input button
const theSubmit = document.querySelector("#subt")

//for the input field or guess field
const theInput = document.querySelector("#guessField")


const guessSlot = document.querySelector(".guesses")

const lastRes = document.querySelector(".lastRsult")

const lowHigh = document.querySelector(".lowOrHi")


const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = [] // for storing the value

let numOfGuess = 1  // for the number of guess

let playGame = true // true value makes the user to play continuously


// first the user is available to play the game or not
if(playGame){
    theSubmit.addEventListener("click" , (e) => {
      e.preventDefault()
      const guess = parseInt(theInput.value)
      validateGuess(guess)
      console.log(guess);
    })
}
// let us take a function to check validation of user's guess.
function validateGuess(guess){
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 to 100.');
      } else {
        prevGuess.push(guess);
        if (numOfGuess === 11) {
          displayGuess(guess);
          displayMessage(`Game Over. Random number was ${randomNumber}`);
          endGame();
        } else {
          displayGuess(guess);
          checkGuess(guess);
        }
      }
}

// Let us take a function to check the guess is right or not
function checkGuess(){

}

// Display the guess using a function
function displayGuess(){

}

// ending the game 
function endGame(){

}

// restarting the game
function startGame(){

}


// displaying the message using a function 

function displayMessage (){

}



