const readline = require('readline-sync');
const MONTHS_PER_YEAR = 12;

function prompt(question) {
  return console.log(`=>${question}`);
}

function isInvalidNum(input) {
  return input.trim() === '' || Number.isNaN(Number(input));
}

prompt('Welcome to loan calculator!');

while (true) {

  prompt('-------------------------------');

  prompt('Enter loan amount:');
  let loanAmount = readline.question();

  while (isInvalidNum(loanAmount) || loanAmount <= 0) {
    prompt('Loan amount needs to be a positive number!');
    loanAmount = readline.question();
  }
  loanAmount = Number(loanAmount);

  prompt('Enter the Annual Percentage Rate (APR):');
  let annualInterest = readline.question();

  while (isInvalidNum(annualInterest)) {
    prompt('Loan APR needs to be a number!');
    annualInterest = readline.question();
  }
  let monthlyInterest = annualInterest / MONTHS_PER_YEAR / 100;

  prompt('Enter loan duration in months:');
  let loanTerm = readline.question();

  while (isInvalidNum(loanTerm) || loanTerm <= 0) {
    prompt('Loan duration needs to be a positive number!');
    loanTerm = readline.question();
  }
  loanTerm = Number(loanTerm);

  let monthlyPayment =
    monthlyInterest === 0 ? loanAmount / loanTerm : loanAmount *
      (monthlyInterest / (1 - Math.pow((1 + monthlyInterest), (-loanTerm))));

  prompt(`Your monthly payment will be: $${monthlyPayment.toFixed(2)}`);

  prompt('Another calculation?\n y/n?');
  let answer = readline.question().toLowerCase();
  while (/[^yn]/.test(answer[0])) {
    prompt('y or n ?');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] === 'n') break;
  console.clear();
}