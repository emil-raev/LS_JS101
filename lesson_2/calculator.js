const readline = require('readline-sync');
const MESSAGES = require('./calc_messages.json');

let repeat, output;

function prompt(question) {
  return console.log(`=>${question}`);
}

function isInvalidNum(input) {
  return input.trim() === '' || Number.isNaN(Number(input));
}

function isInvalidOperation(operation) {
  return !['1', '2', '3', '4'].includes(operation);
}

prompt(MESSAGES.greeting);

do {
  prompt(MESSAGES.firstQ);
  let number1 = readline.question();

  while (isInvalidNum(number1)) {
    prompt(MESSAGES.invalidNumber);
    number1 = readline.question();
  }

  prompt(MESSAGES.secondQ);
  let number2 = readline.question();

  while (isInvalidNum(number2)) {
    prompt(MESSAGES.invalidNumber);
    number2 = readline.question();
  }

  prompt(MESSAGES.operation);
  let operation = readline.question();

  while (isInvalidOperation(operation)) {
    prompt(MESSAGES.opResponse);
    operation = readline.question();
  }

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = number1 - number2;
      break;
    case '3':
      output = number1 * number2;
      break;
    case '4':
      output = number1 / number2;
      break;
    default:
      output = MESSAGES.badOp;
  }

  prompt(`${MESSAGES.result} ${output}\n`);
  prompt(MESSAGES.repeat);
  repeat = readline.question();

} while (repeat === 'y');