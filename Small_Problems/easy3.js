//1
// function crunch(string) {
//   return string.replace(/(.)\1+/g, '$1');
// }
//const crunch = string => string.split('').filter((char, idx) => char !== string[idx + 1]).join('');

//2
// function logInBox(string, maxWidth = 80) {
//   string = string.slice(0, maxWidth - 4);
//   let width = string.length + 2;
//   let border = `+${'-'.repeat(width)}+`;
//   let padding = `|${' '.repeat(width)}|`;
//   let text = `| ${string} |`;

//   console.log(border);
//   console.log(padding);
//   console.log(text);
//   console.log(padding);
//   console.log(border);
// }

// function logInBoxWrap(message, maxWidth = 80) {
//   let textWidth = maxWidth - 4;
//   let regex = new RegExp(`.{1,${textWidth}}(?=\\s|$)`, "g");

//   let splitMessage = message.match(regex);
//   let borderLine = `+-${'-'.repeat(textWidth)}-+`;
//   let paddingLine = `| ${' '.repeat(textWidth)} |`;

//   console.log(borderLine);
//   console.log(paddingLine);

//   for (let line of splitMessage) {
//     line = line.padStart((textWidth + line.length) / 2).padEnd(textWidth);
//     console.log(`| ${line} |`);
//   }
//   console.log(paddingLine);
//   console.log(borderLine);
// }

//3
// function stringy(length) {
//   return ''.padStart(length, '10');
// }

//4
// function findFibonacciIndexByLength(digits) {
//   let idx = 2;
//   let first = 1n;
//   let second = 1n;

//   while (`${second}`.length < digits) {
//     [first, second] = [second, first + second];
//     idx++;
//   }
//   return idx;
// }

//5
// function triangle(sideLength) {
//   for (let count = 1; count <= sideLength; count++) {
//     let line = ' '.repeat(sideLength - count) + '*'.repeat(count);
//     console.log(line);
//   }
// }

//6
// const readline = require('readline-sync');
// const inputs = { 'a noun': '', 'a verb': '', 'an adjective': '', 'an adverb': '' };

// for (const input in inputs) {
//   inputs[input] = readline.question(`Enter ${input}: `);
// }

// console.log(`Do you ${inputs['a verb']} your ${inputs['an adjective']} ${inputs['a noun']} ${inputs['an adverb']}? That's hilarious!
// The ${inputs['an adjective']} ${inputs['a noun']} ${inputs['a verb']}s ${inputs['an adverb']} over the lazy ${inputs['a noun']}.
// The ${inputs['a noun']} ${inputs['an adverb']} ${inputs['a verb']}s up ${inputs['a verb']} Joe's turtle.`);

//7
// function twice(number) {
//   if (/^(\d+)\1$/.test(`${number}`)) {
//     return number;
//   }
//   return number * 2;
// }

//8
// function getGrade(...grades) {
//   let meanGrade = grades.reduce((acc, nxt) => acc + nxt) / grades.length;

//   switch (true) {
//     case meanGrade < 60:
//       return 'F';
//     case meanGrade < 70:
//       return 'D';
//     case meanGrade < 80:
//       return 'C';
//     case meanGrade < 90:
//       return 'B';
//     default:
//       return 'A';
//   }
// }

//9
// function cleanUp(string) {
//   return string.replace(/[^a-z]+/ig, ' ');
// }

//10
// const suffixes = { 1: 'st', 2: 'nd', 3: 'rd' };

// function century(year) {
//   let century = Math.ceil(year / 100);
//   let lastDigit = century % 10;
//   let penultimateDigit = ((century % 100) - lastDigit) / 10;

//   if (suffixes[lastDigit]) {
//     if (penultimateDigit !== 1) {
//       return century + suffixes[lastDigit];
//     }
//     return century + 'th';
//   }
// }