/**
 * Created by frederikolesen on 10/10/14.
 */

var randomNumber = Math.round(Math.random() * 100 + 1);
var numberOfGuesses = 1;

function amIRight(guess) {
    if (numberOfGuesses >= 6) {
        alert("You have no guesses left")
    } else {
        if (guess == "") {
            alert("You did not make a guess")
            document.guessTheNumber.myGuess.focus()
            return
        }
        if (isNaN(guess)) {
            alert("You must enter a valid number")
            document.guessTheNumber.myGuess.value = ""
            document.guessTheNumber.myGuess.focus()
            return
        }
        if (guess == randomNumber) {
            alert("Great guess\nYou had " + numberOfGuesses + " tries")
            return
        }
        if (guess > randomNumber) {
            alert("Too high"  + "\n You have " + (5 - numberOfGuesses) + " guesses left left")
            document.guessTheNumber.myGuess.focus()
            numberOfGuesses++
            return
        }
        if (guess < randomNumber) {
            alert("Too Low"  + "\n You have " + (5 - numberOfGuesses) + " guesses left")
            document.guessTheNumber.myGuess.focus()
            numberOfGuesses++
            return
        }
    }
}
function newGame() {
    randomNumber = Math.round(Math.random() * 99 + 1)
    numberOfGuesses = 1
    document.guessTheNumber.myGuess.value = ""
}

