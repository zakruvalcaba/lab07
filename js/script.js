/*eslint-env browser*/

function displayTitle() {
    "use strict";
    window.alert("Welcome to the Guess the Number Game!");
}

function playGame() {
    "use strict";
    var number, count, guess;
    number = Math.floor(Math.random() * 10 + 1);
    window.alert("I\'m guessing a number between 1 and 10");
    count = 1;
    while (true) {
        guess = Number(window.prompt("Enter your guess:"));
        if (number < guess) {
            window.alert("Too high!");
            count += 1;
        } else if (number > guess) {
            window.alert("Too low!");
            count += 1;
        } else if (number === guess) {
            window.alert("You guessed it in " + String(count) + " tries!");
            return;
        }
    }
}

function main() {
    "use strict";
    displayTitle();
    var playAgain = "y";
    while (playAgain === "y") {
        playGame();
        playAgain = window.prompt("Do you want to play the game again? (y/n)");
    }
    window.alert("Thanks for playing the game!");
}

main();