function displayTitle() {
    alert('Welcome to the Guess the Number Game.');
}

function playGame() {
    let number = Math.floor(Math.random() * 10 + 1);
    let count = 1;
    let guess;

    alert('I\'m guessing a number between 1 and 10');

    while (true) {
        guess = Number(prompt('Enter your guess'));
        if (number > guess) {
            alert('Too low!');
            count++;
        } else if (number < guess) {
            alert('Too high!');
            count++;
        } else if (number === guess) {
            alert(`You guessed it! It took you ${count} tries.`);
            return;
        }
    }
}

function main() {
    displayTitle();
    let playAgain = 'y';
    while (playAgain === 'y') {
        playGame();
        playAgain = prompt('Do you want to play again? (y or n)');
    }
    alert('Thanks for playing the game!');
}
main();