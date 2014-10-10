/**
 * Created by frederikolesen on 10/10/14.
 */

var fs = require('fs')
var data = fs.readFileSync('./textfile.txt', 'utf8');
var array = data.toString().split('\n')

rand = array[Math.floor(Math.random() * array.length)];


function guessWord(word) {


    console.log("Rand:" + rand);

    if (word == "") {
        alert("You did not make a guess")
        document.guessTheWord.guess.focus();
        return
    }

    if (word == rand) {
        alert("Great guess\nYou had tries")
        return

    } else(word != rand)
    {
        alert("You guessed wrong faggot!");
    }

};