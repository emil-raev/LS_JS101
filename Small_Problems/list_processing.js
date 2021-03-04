//1
// function sum(num) {
//   return [...`${num}`].reduce((acc, nxt) => acc + Number(nxt), 0);
// }

//2
// const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// function alphabeticNumberSort(array) {
//   return array.sort((a, b) => NUMBERS[a].localeCompare(NUMBERS[b]));
// }

//3
// function multiplyAllPairs(arr1, arr2) {
//   return arr1.reduce((acc, nxt) => {
//     acc = acc.concat(arr2.map(elem => elem * nxt));
//     return acc;
//   }, []).sort((a, b) => a - b);
// }

//4
// function leadingSubstrings(string) {
//   return [...string].map((char, idx) => string.slice(0, idx) + char);
// }

// //5
// function substrings(string) {
//   //   // let result = [];
//   //   // for (let idx = 0; idx < string.length; idx++) {
//   //   //   result.push(...leadingSubstrings(string.slice(idx)));
//   //   // }
//   //   // return result;
//   return [...string].map((_, idx) => string.slice(idx)).flatMap(leadingSubstrings);
// }

// //6
// function isPalindrome(string) {
//   return [...string].reverse().join('') === string && string.length > 1;
// }

// function palindromes(string) {
//   return substrings(string).filter(isPalindrome);
// }

//7
// function sumOfSums(array) {
//   return array.reduce((acc, nxt) => {
//     acc.push((acc[acc.length - 1] + nxt) || nxt);
//     return acc;
//   }, []).reduce((acc, nxt) => acc + nxt);
// }

// function sumOfSums(arr) {
//   let sum = 0;
//   return arr.reduce((acc, current) => {
//       sum = sum + current;
//       return acc + sum;
//   }, 0);
// }

//8
// function buyFruit(array) {
//   // return array.reduce((acc, nxt) => {
//   //   acc.push(...Array(nxt[1]).fill(nxt[0]));
//   //   return acc;
//   // }, []);
//   return array.flatMap(elem => Array(elem[1]).fill(elem[0]));
// }
//const buyFruit = (fruitsList) => fruitsList.flatMap(([fruit, quantity]) => Array(quantity).fill(fruit));

//9
// function transactionsFor(itemId, transactions) {
//   return transactions.filter(item => item.id === itemId);
// }
// let transactions = [{ id: 101, movement: 'in', quantity: 5 },
// { id: 105, movement: 'in', quantity: 10 },
// { id: 102, movement: 'out', quantity: 17 },
// { id: 101, movement: 'in', quantity: 12 },
// { id: 103, movement: 'out', quantity: 20 },
// { id: 102, movement: 'out', quantity: 15 },
// { id: 105, movement: 'in', quantity: 25 },
// { id: 101, movement: 'out', quantity: 18 },
// { id: 102, movement: 'in', quantity: 22 },
// { id: 103, movement: 'out', quantity: 15 },];

// function isItemAvailable(itemId, transactions) {
//   const inOut = { in: 1, out: -1 };
//   return transactionsFor(itemId, transactions).reduce((acc, nxt) => acc + inOut[nxt.movement] * nxt.quantity, 0) > 0;
// }
