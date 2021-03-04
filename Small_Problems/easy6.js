//1
// function repeater(string) {
//   return string.replace(/(.)/g, '$1$1');
// }

//2
// function doubleConsonants(string) {
//   return string.replace(/([^aeiou\W])/gi, '$1$1');
// }

//3
// function reverseNumber(number) {
//   return Number([...String(number)].reverse().join(''));
// }

//4
// function centerOf(string) {
//   let l = string.length;
//   return string.slice((l - 1) / 2, l / 2 + 1);
// }

//5
// function negative(number) {
//   return -Math.abs(number);
// }

//6
// function sequence(num) {
//   return Array.from(Array(num), (_, i) => i + 1);
// }

//7
// function swapName(name) {
//   //return name.split(' ').reverse().join(', ');
//   return name.replace(/(.+ )(\w+)/i, '$2, $1');
// }

//8
// function sequence(count, start) {
//   return Array.from(Array(count), (_, idx) => start * (idx + 1));
// }

//9
// function reverseSentence(string) {
//   return string.split(' ').reverse().join(' ');
// }

//10
// function reverseWord(string) {
//   return string.split('').reverse().join('');
// }

// function reverseWords(string) {
//   return string.split(' ').map(word => word.length > 4 ? reverseWord(word) : word).join(' ');
// }

//11
// function reverse(array) {
//   for (let index = 0; index < array.length / 2; index++) {
//     [array[index], array[array.length - 1 - index]] = [array[array.length - 1 - index], array[index]];
//   }
//   return array;
// }

//12
// const PAIRS = { '(': ')', '[': ']', '{': '}'};

// function isBalanced(string) {
//   let stack = [];
//   for (const char of string) {
//     if (isOpening(char)) {
//       stack.push(PAIRS[char]);
//     } else if (isClosing(char) && char !== stack.pop()) {
//       return false;
//     }
//   }
//   return !stack.length;
// }

// function isOpening(char) {
//   return Object.keys(PAIRS).includes(char);
// }
// function isClosing(char) {
//   return Object.values(PAIRS).includes(char);
// }

// const NON_PAIRS_REGEX = /[^[\]{}()'"]/g;
// const PAIRS_REGEX = /\[\]|{}|\(\)|''|""/g;
// const isBalanced = (input) => {
//   let pairsOnly = input.replace(NON_PAIRS_REGEX, '');
//   while (PAIRS_REGEX.test(pairsOnly)) {
//     pairsOnly = pairsOnly.replace(PAIRS_REGEX, '');
//   }
//   return !pairsOnly;
// };
