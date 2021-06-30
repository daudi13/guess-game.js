const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const guessNumber = document.querySelector('.guess').value;
const numbre = document.querySelector('.number');
const theScore = document.querySelector('.score');
const theMessage = document.querySelector('.message').textContent;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0



checkBtn.addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, secretNumber)


    if (!guess) {
        displayMessage('No number!');
    }

    else if (guess === secretNumber) {
        displayMessage('correct Number');
        numbre.innerHTML = secretNumber;
        document.querySelector('body').style.backgroundColor = `green`;
        numbre.style.width = `15rem`;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').innerHTML = highscore
        }
    }

    else if (guess !== secretNumber) {

        if (score > 1) {
            displayMessage(guess > secretNumber ? `too high!!` : `too low!!`);
            score--;
            document.querySelector('.score').innerHTML = score;
        }
        else {
            displayMessage('you lost, try again');
            theScore = 0;
        }
    }
})

function displayMessage(message) {
    document.querySelector('.message').textContent = message
}