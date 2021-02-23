const readline = require('readline-sync');
const MESSAGES = require('./calc_messages.json');
const LANGUAGE = 'es';

let repeat, output;

function prompt(question, lang = LANGUAGE) {
  return console.log(`=>${MESSAGES[lang][question]}`);
}

function isInvalidNum(input) {
  return input.trim() === '' || Number.isNaN(Number(input));
}

function isInvalidOperation(operation) {
  return !['1', '2', '3', '4'].includes(operation);
}

prompt('greeting');

do {
  prompt('firstQ');
  let number1 = readline.question();

  while (isInvalidNum(number1)) {
    prompt('invalidNumber');
    number1 = readline.question();
  }

  prompt('secondQ');
  let number2 = readline.question();

  while (isInvalidNum(number2)) {
    prompt('invalidNumber');
    number2 = readline.question();
  }

  prompt('operation');
  let operation = readline.question();

  while (isInvalidOperation(operation)) {
    prompt('opResponse');
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
      output = prompt('badOp');
  }

  prompt('result');
  console.log(output);
  prompt('repeat');
  repeat = readline.question();

} while (repeat === 'y');