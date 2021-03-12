const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];
const CHOICE_ALIAS = { r: 'rock', p: 'paper', s: 'scissors', l: 'lizard', S: 'Spock' };
const WIN_LIMIT = 3;
const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'Spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'Spock'],
  Spock: ['rock', 'scissors']
};
const score = { player: 0, computer: 0, draw: 0 };

function prompt(message) {
  console.log(`=> ${message}`);
}

function getWinner(playerChoice, computerChoice) {

  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);

  if (WINNING_COMBOS[playerChoice].includes(computerChoice)) {
    return 'player';
  } else if (playerChoice === computerChoice) {
    return 'draw';
  } else {
    return 'computer';
  }
}

function displayWinner(winner) {

  if (winner === 'draw') {
    prompt("It's a tie!");
  } else if (winner === 'player') {
    prompt('You win!');
  } else {
    prompt('Computer wins!');
  }
  prompt(`Score is: player - ${score.player} : computer - ${score.computer}`);

}

function updateScore(winner) {
  score[winner] += 1;
}

while (true) {
  prompt(`Choose one by entering first letter: ${VALID_CHOICES.join(', ')}`);
  let playerChoice = CHOICE_ALIAS[readline.question().toLowerCase];

  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt("That's not a valid choice");
    playerChoice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  let winner = getWinner(playerChoice, computerChoice);

  updateScore(winner);
  displayWinner(winner);

  if (score.player < WIN_LIMIT && score.computer < WIN_LIMIT) {
    prompt(`Win ${WIN_LIMIT} to win the match!`);
    continue;
  }
  prompt(`The match winner is ${winner}!`);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question();
  while (/^[^ny]/i.test(answer[0])) {
    prompt('Please enter "y" or "n".');
    answer = readline.question();
  }

  if (/^n/i.test(answer)) break;
  console.clear();
}