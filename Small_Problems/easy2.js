//1.
// function greetings(name, job) {
//   return `Hello, ${name.join(' ')}! Nice to have a ${Object.values(job).join(' ')} around.`;
// }

//2.
// const readline = require('readline-sync');
// let name = readline.question('What is your name? ');
// if (name.endsWith('!')) {
//   console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
// } else {
//   console.log(`Hello ${name}.`);
// }

//3.
// function multiply(a, b) {
//   return a * b;
// }

//4.
// const square = num => multiply(num, num);

// const toPower = (num, power) => power === 1 ? num : multiply(num, toPower(num, power - 1));

//5.
// const readline = require('readline-sync');

// const operations = {
//   '+': (num1, num2) => num1 + num2,
//   '-': (num1, num2) => num1 - num2,
//   '*': (num1, num2) => num1 * num2,
//   '/': (num1, num2) => Math.floor(num1 / num2),
//   '%': (num1, num2) => num1 % num2,
//   '**': (num1, num2) => num1 ** num2
// };

// let firstNumber = Number(readline.question('Enter the first number:\n'));
// let secondNumber = Number(readline.question('Enter the second number:\n'));

// for (const operation in operations) {
//   console.log(`${firstNumber} ${operation} ${secondNumber} = ${operations[operation](firstNumber, secondNumber)}`);
// }

//6.
// function penultimate(string) {
//   let wordsArray = string.split(' ');
//   return wordsArray[wordsArray.length - 2];
// }

// function middleWord(phrase) {
//   let wordsArray = phrase.match(/w+/gi) || [''];

//   return wordsArray[Math.floor(wordsArray.length / 2)];
// }

//7.
// function xor(op1, op2) {
//   return Boolean((op1 && !op2) || (!op1 && op2));
// }

//8.
// function oddities(inputArray) {
//   return inputArray.filter((_, idx) => !(idx % 2));
// }

//9.
// const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// function stringToInteger(numberString) {
//   return numberString.split('').reduce((sum, digit) => (sum * 10) + DIGITS[digit]);
// }

// const DIGITS = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };
// const BASE = 16;

// function hexadecimalToInteger(numberString) {
//   return numberString.toLowerCase().split('').reduce((sum, digit) => (sum * BASE) + DIGITS[digit]);
// }

//10.
// function stringToSignedInteger(numberString) {
//   let number = stringToInteger(numberString.replace(/^[-+]/, ''));
//   return numberString[0] === '-' ? -number : number;
// }
//11.
// const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// function integerToString(number) {
//   let result = '';

//   do {
//     result = DIGITS[number % 10] + result;
//     number = Math.floor(number / 10);
//   } while (number);

//   return result;
// }

// //12.
// const SIGN = { '1': '+', '0': '', '-1': '-' };

// function signedIntegerToString(number) {
//   let sign = SIGN[Math.sign(number)];
//   return sign + integerToString(Math.abs(number));
// }
// console.log(signedIntegerToString(0));