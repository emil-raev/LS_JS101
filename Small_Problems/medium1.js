/* eslint-disable max-lines-per-function */
//1
// function rotateArray(array) {
//   if (!Array.isArray(array)) return undefined;
//   return array.slice(1).concat(array.slice(0, 1));
// }

//2
// function rotateRightmostDigits(number, count) {
//   return Number(`${number}`.replace(new RegExp(`(\\d)(\\d{${count - 1}})$`), '$2$1'));
// }

//3
// function maxRotation(number) {
//   let digitNumber = `${number}`.length;
//   for (let count = digitNumber; count > 1; count--) {
//     number = rotateRightmostDigits(number, count);
//   }
//   return number;
// }

//4
// function minilang(code) {
//   let stack = [];
//   let register = 0;
//   const operations = {
//     PUSH: () => stack.push(register),
//     ADD: () => register += stack.pop(),
//     SUB: () => register -= stack.pop(),
//     MULT: () => register *= stack.pop(),
//     DIV: () => register = Math.floor(register / stack.pop()),
//     MOD: () => register = Math.floor(stack.pop()),
//     POP: () => register = stack.pop(),
//     PRINT: () => console.log(register),
//   };

//   for (let token of code.split(' ')) {
//     if (Number(token)) {
//       register = Number(token);
//     } else {
//       operations[token]();
//     }
//   }
// }

//5
// const NUMBERS = {
//   'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
//   'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
// };

// function wordToDigit(string) {
//   return string.split(/\b/).map(word => NUMBERS[word] || word).join('');
// }

//6
// function fibonacci(n) {
//   return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
// }

//7
// function fibonacci(n) {

//   let [beforeLast, last] = [1, 1];
//   while (n - 2 > 0) {
//     [beforeLast, last] = [last, beforeLast + last];
//     n--;
//   }
//   return last;
// }

//8

// function fibonacci(nth, cache = { 1: 1, 2: 1 }) {
//   if (cache[nth]) {
//     return cache[nth];
//   } else {
//     return cache[nth] = fibonacci(nth - 1, cache) + cache[nth - 2];

//   }
// }
