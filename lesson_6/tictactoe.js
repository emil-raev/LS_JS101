/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WIN_LIMIT = 3;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];
const STARTS_FIRST = 'Computer';

function prompt(message) {
  console.log(`==> ${message} `);
}

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  let boardArr = Object.values(board).reduce((acc, nxt, idx) => {
    if (idx % 3) {
      acc[acc.length - 1].push(nxt);
    } else {
      acc.push([nxt]);
    }
    return acc;
  }, []);

  const lineBuilder = (filler, joiner) => Array(3).fill(filler.repeat(5)).join(joiner) + '\n';
  const midline = lineArr => lineArr.map(middle => `  ${middle}  `).join('|') + '\n';

  let padding = lineBuilder(' ', '|');
  let border = lineBuilder('-', '+');

  console.log(boardArr.map(lineArr => padding + midline(lineArr) + padding).join(border));
}

function initializeBoard() {
  return Object.fromEntries(Array.from(Array(9), (_, idx) => [idx + 1, ' ']));
}

function emptySquares(board) {
  return Object.keys(board).filter(square => board[square] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function joinOr(array, delim = ', ', conj = 'or') {
  return array.join(delim).replace(/\s(?=\S+$)/, ` ${conj} `);
}

function playerChosesSquare(board) {
  prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
  let square = readline.question().trim();

  while (!emptySquares(board).includes(square)) {
    prompt('Sorry, that`s not a valid choice.');
    square = readline.question().trim();
  }
  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let unusedSquare;
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
  }
  return unusedSquare || null;
}

function computerChosesSquare(board) {
  let square;

  for (let line of WINNING_LINES) {
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let line of WINNING_LINES) {
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (!square) {
    if (board['5'] === INITIAL_MARKER) {
      square = '5';
    }
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }
  board[square] = COMPUTER_MARKER;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line of WINNING_LINES) {
    let markersInLine = line.map(sq => board[sq]);
    if (markersInLine.every(marker => marker === HUMAN_MARKER)) return 'Player';
    if (markersInLine.every(marker => marker === COMPUTER_MARKER)) return 'Computer';
  }
  return null;
}

function capitalize(string) {
  return string.toLowerCase().replace(/./, char => char.toUpperCase());
}

function getStartingPlayer() {
  if (STARTS_FIRST === 'choose') {
    prompt('Choose who starts first: Computer or Player');
    let startingPlayer = capitalize(readline.question().trim());

    while (!/Computer|Player/.test(startingPlayer)) {
      prompt(`"${startingPlayer}" is not a valid answer! Enter Computer or Player`);
      startingPlayer = capitalize(readline.question().trim());
    }
    return startingPlayer;
  } else {
    return STARTS_FIRST;
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'Computer' ? 'Player' : 'Computer';
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'Computer') {
    computerChosesSquare(board);
  } else {
    playerChosesSquare(board);
  }
}

while (true) { //match loop
  let score = { Player: 0, Computer: 0 };

  while (true) { //game loop

    let board = initializeBoard();
    let currentPlayer = getStartingPlayer();

    while (true) { //turn loop
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
      score[detectWinner(board)] += 1;
      prompt(`Score is: Player - ${score.Player} : Computer - ${score.Computer}`);
      if (score.Player < WIN_LIMIT && score.Computer < WIN_LIMIT) {
        prompt(`Win ${WIN_LIMIT} to win the match!`);
      } else {
        prompt(`The match winner is ${detectWinner(board)}!`);
        break;
      }
    } else {
      prompt("It's a tie!");
    }

    prompt('Play next game? (y or n)');
    let playNextGame = readline.question().trim().toLowerCase();
    while (/[^yn]/.test(playNextGame)) {
      prompt(`"${playNextGame}" is not a valid answer! Enter y or n.`);
      playNextGame = readline.question().trim().toLowerCase();
    }
    if (playNextGame === 'n') break;
  }

  prompt('Play another match? (y or n)');
  let playAnotherMatch = readline.question().trim().toLowerCase();
  while (/[^yn]/.test(playAnotherMatch)) {
    prompt(`"${playAnotherMatch}" is not a valid answer! Enter y or n.`);
    playAnotherMatch = readline.question().trim().toLowerCase();
  }
  if (playAnotherMatch === 'n') break;
}
prompt('Thanks for playing Tic Tac Toe!');
