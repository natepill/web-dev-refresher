'use strict';

// // "." for class selector "#" for id
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'TEST TEST';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 100;

// // Value property for input fields
// document.querySelector('.guess').value = 23;

// Event listener
// passing event handler as second arg to addEventListener

// random num between 0-20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`Secret number:  ${secretNumber}`);
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //   console.log(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = 'Correct number';

  if (!guess) {
    //   command cntrl space for emojis
    document.querySelector('.message').textContent = '🔴 No number entered';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too high';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You LOST!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
