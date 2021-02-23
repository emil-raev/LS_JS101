const readline = require('readline-sync');
const MONTHS_PER_YEAR = 12;

function prompt(question) {
  return console.log(`=>${question}`);
}

function isInvalidNum(input) {
  return input.trim() === '' || input < 0 || Number.isNaN(Number(input));
}

prompt('Welcome to loan calculator!');

while (true) {

  prompt('-------------------------------');

  prompt('Enter loan amount:');
  let loanAmount = readline.question();

  while (isInvalidNum(loanAmount)) {
    prompt('Loan amount needs to be a positive number!');
    loanAmount = readline.question();
  }
  loanAmount = Number(loanAmount);

  prompt('Enter the Annual Percentage Rate (APR):');
  let annualInterest = readline.question();

  while (isInvalidNum(annualInterest)) {
    prompt('Loan APR needs to be a positive number!');
    annualInterest = readline.question();
  }
  let monthlyInterest = annualInterest / MONTHS_PER_YEAR / 100;

  prompt('Enter loan duration in months:');
  let loanTerm = readline.question();

  while (isInvalidNum(loanTerm)) {
    prompt('Loan duration needs to be a number!');
    loanTerm = readline.question();
  }
  loanTerm = Number(loanTerm);

  let monthlyPayment = loanAmount *
    (monthlyInterest / (1 - Math.pow((1 + monthlyInterest), (-loanTerm))));

  prompt(`Your monthly payment will be: $${monthlyPayment.toFixed(2)}`);

  prompt('Another calculation?\n y/n?');
  let answer = readline.question();
  if (answer === 'n') break;

}