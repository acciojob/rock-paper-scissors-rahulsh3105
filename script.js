//your code here
// Define variables for tracking game state
let numTurns = 0;
let userPoints = 0;
let computerPoints = 0;
let roundsLeft = 0;
let gameResult = '';

// Define mapping for computer choice
const computerChoice = {
0: 'ROCK',
1: 'PAPER',
2: 'SCISSORS'
};

// Get DOM elements
const gameNumber = document.getElementById('game-number');
const playButton = document.getElementById('play-game');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const roundsLeftDisplay = document.querySelector('[data-ns-test="rounds-left"]');
const userPointsDisplay = document.querySelector('[data-ns-test="user-points"]');
const computerPointsDisplay = document.querySelector('[data-ns-test="computer-points"]');
const roundResultDisplay = document.querySelector('[data-ns-test="round-result"]');
const gameResultDisplay = document.querySelector('[data-ns-test="game-result"]');

// Helper function to generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to determine winner of a round
function getRoundResult(userChoice, computerChoice) {
if (userChoice === computerChoice) {
return 'TIE';
} else if (
(userChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
(userChoice === 'PAPER' && computerChoice === 'ROCK') ||
(userChoice === 'SCISSORS' && computerChoice === 'PAPER')
) {
return 'WON';
} else {
return 'LOSE';
}
}

// Function to update game state and display results
function updateGame(userChoice) {
const computerChoiceNum = getRandomInt(0, 2);
const computerChoiceText = computerChoice[computerChoiceNum];
const roundResult = getRoundResult(userChoice, computerChoiceText);

// Update game state based on round result
if (roundResult === 'WON') {
userPoints++;
} else if (roundResult === 'LOSE') {
computerPoints++;
}
roundsLeft--;

// Update display of game state and round result
roundsLeftDisplay.innerText = Rounds left: ${roundsLeft};
userPointsDisplay.innerText = Your points: ${userPoints};
computerPointsDisplay.innerText = Computer points: ${computerPoints};
roundResultDisplay.innerText = Round result: ${roundResult};

// Check if game is over and update game result
if (roundsLeft === 0) {
if (userPoints > computerPoints) {
gameResult = 'WON';
} else if (userPoints === computerPoints) {
gameResult = 'TIE';
} else {
gameResult = 'LOSE';
}
gameResultDisplay.innerText = Game result: ${gameResult};
}
}

// Add event listener to play button to start game
playButton.addEventListener('click', function() {
numTurns = parseInt(gameNumber.value);
roundsLeft = numTurns;
userPoints = 0;
computerPoints = 0;
gameResult = '';
roundsLeftDisplay.innerText = Rounds left: ${roundsLeft};
userPointsDisplay.innerText = Your points: ${userPoints};
computerPointsDisplay.innerText = Computer points: ${computerPoints};
roundResultDisplay.innerText = Round result: ;
gameResultDisplay.innerText = Game result: ;
});