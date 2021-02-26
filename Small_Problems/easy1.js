//1.

// function isOdd(num) {
//   return Boolean(num % 2);
// }
// const isOdd = num => Boolean(num % 2);

//2.

// for (let num = 1; num <= 99; num += 2) {
//   console.log(num);
// }

// function logOddInRange(start, end) {
//   let current = start;
//   while (current <= end) {
//     if (current % 2) {
//       console.log(current);
//     }
//     current += 1;
//   }
// }

//4.
// const readlineSync = require('readline-sync');
// const METER_TO_FEET = 3.28084;

// console.log('Enter the measurement unit: (m/ft)');
// let unit = readlineSync.prompt();

// console.log('Enter the length of the room:');
// let length = readlineSync.prompt();
// length = toMeters(length, unit);

// console.log('Enter the width of the room in meters:');
// let width = readlineSync.prompt();
// width = toMeters(width, unit);

// let areaInMeters = length * width;
// let areaInFeet = areaInMeters * (METER_TO_FEET ** 2);

// console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`);

// function toMeters(input, unit) {
//   return unit === 'm' ? parseInt(input, 10) : parseInt(input, 10) / METER_TO_FEET;
// }

//5.
// const readlineSync = require('readline-sync');

// let bill = readlineSync.question('What is the bill? ');
// let tipPercent = readlineSync.question('What is the tip percentage? ');

// bill = parseFloat(bill, 10);
// tipPercent = parseFloat(tipPercent, 10);

// let tipAmount = bill * tipPercent / 100;
// let billTotal = bill + tipAmount;

// console.log(`The tip is $${tipAmount.toFixed(2)}`);
// console.log(`The total is $${billTotal.toFixed(2)}`);

//6.
// const readlineSync = require('readline-sync');

// let number = readlineSync.question('Please enter an integer greater than 0:');
// number = Number(number);

// let operation = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product.');

// let operations = {
//   s: function sum(number) {
//     return (number + 1) * number / 2;
//   },
//   p: function product(number) {
//     return number === 1 ? 1 : number * product(number - 1);
//   }
// };

// console.log(`The ${operations[operation].name} of the integers between 1 and ${number} is ${operations[operation](number)}.`);

//7.
// function shortLongShort(stringA, stringB) {
//   if (stringA.length > stringB.length) {
//     return stringB + stringA + stringB;
//   }
//   return stringA + stringB + stringA;
// }

//8.
// function isLeapYear(year) {
//   return isDivisible(year, 4) &&
//     (!isDivisible(year, 100) || isDivisible(year, 400));
// }

// function isDivisible(divident, divisor) {
//   return !(divident % divisor);
// }

//9.
// function isLeapYear(year) {
//   if (year <= 1752) {
//     return isDivisible(year, 4);
//   }
//   return isDivisible(year, 4) &&
//     (!isDivisible(year, 100) || isDivisible(year, 400));
// }

// function isDivisible(divident, divisor) {
//   return !(divident % divisor);
// }

//10.
// function multisum(number) {
//   let sum = 0;
//   for (let currentNum = 1; currentNum <= number; currentNum++) {
//     if (currentNum % 3 && currentNum % 5) continue;
//     sum += currentNum;
//   }
//   return sum;
// }

//11.
// function asciiValue(string) {
//   //return string.split('').reduce((sum, char) => sum + char.codePointAt(0), 0);
//   let sum = 0;
//   // for (const char of string) {
//   //   sum += char.codePointAt(0);
//   // }
//   for (let index = 0; index < string.length; index++) {
//     sum += string.codePointAt(index);
//   }
//   return sum;
// }