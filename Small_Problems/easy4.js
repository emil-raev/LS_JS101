//1
// function randomInRange(min, max) {
//   return min + Math.floor(Math.random() * (max - min + 1));
// }
// console.log(`Teddy is ${randomInRange(20, 120)} years old!`);

//2
// const readline = require('readline-sync');
// const choicesOrder = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
// let choicesNumbers = [];

// for (const choice of choicesOrder) {
//   choicesNumbers.push(readline.question(`Enter the ${choice} number: `));
// }
// let last = choicesNumbers.pop();
// let appearance = choicesNumbers.includes(last) ? 'appears' : 'does not appear';

// console.log(`The number ${last} ${appearance} in ${choicesNumbers}.`);

//3
// const readline = require('readline-sync');

// let age = readline.questionInt('What is your age? ');
// let retireAge = readline.questionInt('At what age would you like to retire? ');
// let yearsToRetire = retireAge - age;
// let currentYear = new Date().getFullYear();

// console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsToRetire}.`);
// console.log(`You have only ${yearsToRetire} years of work to go!`);

//4
// function isPalindrome(string) {
//   return string.split('').reverse().join('') === string;
// }

//5
// function isRealPalindrome(string) {
//   return isPalindrome(string.toLowerCase().replace(/[\W_]/g), '');
// }

//6
// function isPalindromicNumber(num) {
//   return isPalindrome(String(num));
// }

//7
// function runningTotal(array) {
//   return array.reduce((acc, nxt) => {
//     acc.push(nxt + (acc[acc.length - 1] || 0));
//     return acc;
//   }, []);
// }

// function runningTotal(numbers) {
//   let sum = 0;
//   return numbers.map(number => sum += number);
// }

//8
// function wordSizes(phrase) {
//   return phrase.split(/\s+/).reduce((acc, nxt) => {
//     if (nxt.length) {
//       acc[nxt.length] = acc[nxt.length] + 1 || 1;
//     }
//     return acc;
//   }, {});
// }

//9

// function wordSizes(phrase) {
//   return phrase.split(/\s+/).reduce((acc, nxt) => {
//     nxt = nxt.replace(/[^a-z]/ig, '');
//     if (nxt.length) {
//       acc[nxt.length] = acc[nxt.length] + 1 || 1;
//     }
//     return acc;
//   }, {});
// }

//10
// function swap(string) {
//   return string.replace(/\b(\w)(\w*)(\w)\b/g, '$3$2$1');
// }

// console.log(swap('Oh what a wonderful day it is'));