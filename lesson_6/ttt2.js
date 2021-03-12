const readline = require('readline-sync');

const BOARD_SIZE = 3;
const SQUARE_SIZE = [6, 3];
const BLANK = ' ';
const HORIZONTAL_LINE = '~';
const LINE_CROSS = '+';
const VERTICAL_LINE = ':';
const HUMAN_MARKER = '\u274c';//'X';
const COMPUTER_MARKER = '\u2b55';//'O';
const WIN_LIMIT = 3;
const CENTER_SQUARE = 4;
const SQ_CENTERS = /(?<= {2}) {2}(?= {2})/g;
const SQ_CORNERS = / (?= {5})/g;
const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];
const STARTS_FIRST = 'Player'; //Computer|Player|choose

function prompt(message) {
  console.log(`==> ${message} `);
}

function displayUI(board, score) {
  console.clear();
  console.log('WELCOME TO TIC-TAC-TOE!\n');
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}\n`);

  boardBuilder(board);

  console.log(`Win ${WIN_LIMIT} games to win the match!\n`);
  console.log(
    `Score:     Player - Computer
              ${score.Player}   :    ${score.Computer}\n`);
}
function getTopLeftOffsets() {
  let firstColumnOffsets = Array.from(Array(3), (_, idx) => {
    return idx * ((SQUARE_SIZE[1] + 1) * ((BOARD_SIZE * SQUARE_SIZE[0]) + 3));
  });
  return firstColumnOffsets.map(offset => Array.from(Array(3), (_, idx) => {
    return offset + (idx * (SQUARE_SIZE[0] + 1));
  })).flat();
}

function getCenterOffsets() {
  return getTopLeftOffsets().map(offset => {
    return offset + (3 * SQUARE_SIZE[0]) + 2 + Math.ceil(SQUARE_SIZE[0] / 2);
  });
}

function boardBuilder(board) {
  let blankLine = lineBuilder(BLANK, VERTICAL_LINE, SQUARE_SIZE[0]);
  let borderLine = lineBuilder(HORIZONTAL_LINE, LINE_CROSS, SQUARE_SIZE[0]);
  let blankBoard = lineBuilder(blankLine, borderLine, SQUARE_SIZE[1]);

  let blankSquares = getBlankSquares(board);
  let topLeftOffsets = getTopLeftOffsets();
  let centerOffsets = getCenterOffsets();

  let indexedBlankBoard = blankBoard.replace(SQ_CORNERS, (_, offset) => {
    if (blankSquares.includes(topLeftOffsets.indexOf(offset) + 1)) {
      return topLeftOffsets.indexOf(offset) + 1;
    }
    return BLANK;
  });

  console.log(indexedBlankBoard.replace(SQ_CENTERS, (_, offset) => {
    return board[centerOffsets.indexOf(offset)]?.trim() || (BLANK + BLANK); //double blank to account for emoji taking two spaces
  }));
}

function lineBuilder(filler, delim, size) {
  return Array(BOARD_SIZE).fill(filler.repeat(size)).join(delim) + '\n';
}

function initializeBoard() {
  return Array(BOARD_SIZE ** 2).fill(BLANK);
}

function getBlankSquares(board) {
  return board.reduce((acc, nxt, idx) => {
    if (nxt === BLANK) acc.push(idx + 1);//+1 to account for array 0 start index
    return acc;
  }, []);
}

function boardFull(board) {
  return getBlankSquares(board).length === 0;
}

function joinOr(array, delim = ', ', conj = 'or') {
  return array.join(delim).replace(/\s(?=\S+$)/, ` ${conj} `);
}

function playerChosesSquare(board) {
  prompt(`Choose a square: ${joinOr(getBlankSquares(board))}`);
  let square = readline.question().trim();
  board[validateInput(square, getBlankSquares(board)) - 1] = HUMAN_MARKER; //-1 to account for array 0 start index
}

function findAtRiskSquare(board, marker) {
  for (let line of WINNING_LINES) {
    let markersInLine = line.map(square => board[square]);
    let blankSquare = line.find(square => board[square] === BLANK);
    if ((markersInLine.filter(val => val === marker).length === 2)
      && blankSquare) {
      return blankSquare;
    }
  }
  return null;
}

function emptyCenterSq(board) {
  if (board[CENTER_SQUARE] === BLANK) {
    return CENTER_SQUARE;
  }
  return null;
}

function computerChosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * getBlankSquares(board).length);

  let square = findAtRiskSquare(board, COMPUTER_MARKER) ||
    findAtRiskSquare(board, HUMAN_MARKER) ||
    emptyCenterSq(board) ||
    getBlankSquares(board)[randomIndex] - 1;

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

function getStartingPlayer() {
  if (STARTS_FIRST === 'choose') {
    prompt('Choose who starts first: Computer or Player. Enter c or p!');
    let startingPlayer = readline.question().trim();
    validateInput(startingPlayer, ['c', 'p']);
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

function validateInput(input, options) {
  let regex = new RegExp(`[^${options.join('')}]`, 'i');
  while (regex.test(input)) {
    prompt(`'${input}' is not a valid answer! Enter ${joinOr(options)}.`);
    input = readline.question().trim();
  }
  return input;
}

while (true) { //match loop
  let score = { Player: 0, Computer: 0 };

  while (true) { //games loop

    let board = initializeBoard();
    let currentPlayer = getStartingPlayer();

    while (!someoneWon(board) && !boardFull(board)) { //play loop
      displayUI(board, score);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
    }

    displayUI(board, score);

    if (boardFull(board)) {
      prompt('It\'s a tie!\n');
    } else {
      let gameWinner = detectWinner(board);
      prompt(`${gameWinner} won this game!`);
      score[gameWinner] += 1;
      displayUI(board, score);

      if (score[gameWinner] === WIN_LIMIT) {
        prompt(`The match winner is ${gameWinner}!\n`);
        break; //out of games loop
      }
    }
    prompt('Play next game? (y or n)');
    let playNextGame = readline.question().trim();
    if (validateInput(playNextGame, ['y', 'n']) === 'n') break;

  }
  prompt('Play another match? (y or n)');
  let playAnotherMatch = readline.question().trim();
  if (validateInput(playAnotherMatch, ['y', 'n']) === 'n') break;
}
console.log('Thanks for playing Tic Tac Toe!');
