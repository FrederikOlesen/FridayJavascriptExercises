var randomNumber = Math.round(Math.random() * 100 + 1)
var numberOfGuesses = 1
function amIRight(guess) {
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
        alert("Too high")
        document.guessTheNumber.myGuess.focus()
        numberOfGuesses++
        return
    }
    if (guess < randomNumber) {
        alert("Too Low")
        document.guessTheNumber.myGuess.focus()
        numberOfGuesses++
        return
    }
}
function newGame() {
    randomNumber = Math.round(Math.random() * 99 + 1)
    numberOfGuesses = 1
    document.guessTheNumber.myGuess.value = ""
}/**
 * Created by frederikolesen on 10/10/14.
 */
