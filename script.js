let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


function generateTarget() {
  return Math.floor(Math.random() * 9);
}
function compareGuesses(userGuess, computerGuess, targetNumber) {
  if (Math.abs(targetNumber - userGuess) < Math.abs(targetNumber - computerGuess)) {
    return true;
  }
  if (Math.abs(targetNumber - computerGuess) < Math.abs(targetNumber - userGuess)) {
    return false;
  }
  if (Math.abs(targetNumber - userGuess) === Math.abs(targetNumber - computerGuess)) {
    return true;
  }
  if (userGuess < 1 || userGuess > 9) {
    console.alert('Not a valid guess.\n');
  }
}
function updateScore(winner) {
  if (compareGuesses() === true) {
    winner = 'human';
    humanScore = humanScore + 1;
  }
  if (compareGuesses() === false) {
    winner = 'computer';
    computerScore = computerScore + 1;
  }
  }
function advanceRound() {
  currentRoundNumber = currentRoundNumber + 1;
}
