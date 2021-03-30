'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '✔ Correct number';

// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

//******************** */ For repet code we use function ***********/

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    // document.querySelector('.message').textContent = '✔ Correct';
    // console.log(guess, typeof guess);

    //!  ******* When ther is no input  ********************************/
    if (!guess) {
        // document.querySelector('.message').textContent =
        //     '📛 No number please!enter number';

        displayMessage('📛 No number please!enter number');
        document.querySelector('.message').style.color = '#961111';

        //** ************** When player wins **************************/
    } else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = '🎉 Correct number';
        displayMessage('🎉 Correct number');

        document.querySelector('.message').style.borderBottom = '2px solid';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        // This if condition is for store high score
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //? **************  When number guess is wrong **************/
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     guess > secretNumber ? '🐱‍🏍 Too high' : '😬 Too low';

            displayMessage(guess > secretNumber ? '🐱‍🏍 Too high' : '😬 Too low');
            // score = score - 1;
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '🤦‍♂️ You lost the game';
            // displayMessage('🤦‍♂️ You lost the game');
            document.querySelector('.guess_nu').textContent =
                '🤦‍♂️Ohh! You lost the game';
            document.querySelector('.again').textContent = 'Try Again';
            document.querySelector('body').style.backgroundColor = '#961111';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Now Start guessing...';
    displayMessage('Now Start guessing...');
    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').style.borderBottom = 'none';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.again').textContent = 'Again';
});

//*************************** Modal script ********************/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.addEventListener('click', function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// ? **************  When number guess is two high **************/
// } else if (guess > secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = '🐱‍🏍 Too high';
//         // score = score - 1;
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = '🤦‍♂️ You lost the game';
//         document.querySelector('body').style.backgroundColor = '#961111';
//         document.querySelector('.score').textContent = 0;
//     }

//? ********************* When number guess is two low *************/
// } else if (guess < secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = '😬 Too low';
//         score--;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = '🤦‍♂️ You lost the game';
//         document.querySelector('.score').textContent = 0;

//         document.querySelector('body').style.backgroundColor = '#961111';
//     }
// }