'use strict';

let num;
let highScore = 0;
let score = document.querySelector('.score').textContent;

//starting fn
function guess() {
  num = Math.trunc(Math.random() * 20) + 1;
}
guess();

//display message fn
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

//again button fn
document.querySelector('.again').addEventListener('click', function () {
  guess();
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').textContent = '?';
});

//check button fn
document.querySelector('.check').addEventListener('click', () => {
  const guessNum = Number(document.querySelector('.guess').value);

  if (guessNum >= 1 && guessNum <= 20) {
    if (guessNum === num && score > 1) {
      document.querySelector('.number').textContent = num;
      displayMessage('YOU WON !');
      document.querySelector('body').style.backgroundColor = '#26c910';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (score > 1) {
      displayMessage(guessNum > num ? 'Too High' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 1) {
      displayMessage('You Lost, Game Over !');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '❌';
      document.querySelector('body').style.backgroundColor = '#ca0000';
    }
  } else {
    document.querySelector('.message').textContent =
      'Enter a number between 1 and 20';
  }
});
