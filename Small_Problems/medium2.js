//1
// function toPercent(decimal) {
//   return (decimal * 100).toFixed(2);
// }

// function letterPercentages(string) {

//   let totalChars = string.length;
//   let lowerCase = string.match(/[a-z]/g)?.length || 0;
//   let upperCase = string.match(/[A-Z]/g)?.length || 0;
//   let neither = totalChars - lowerCase - upperCase;

//   return {
//     lowercase: toPercent(lowerCase / totalChars),
//     uppercase: toPercent(upperCase / totalChars),
//     neither: toPercent(neither / totalChars)
//   };
// }

//2
// function triangle(a, b, c) {
//   if (Math.min(a, b, c) <= 0 || a + b + c < 2 * Math.max(a, b, c)) return 'invalid';
//   if (a === b && a === c) return 'equilateral';
//   if (a === b || b === c || a === c) return 'isosceles';
//   return 'scalene';
// }

//3
// function triangle(...args) {
//   if (args.some(angle => angle <= 0) || args.reduce((acc, nxt) => acc + nxt) !== 180) return 'invalid';
//   if (args.some(angle => angle === 90)) return 'right';
//   if (args.some(angle => angle > 90)) return 'obtuse';
//   return 'acute';
// }

//4
// function fridayThe13ths(year) {
//   let count = 0;
//   for (let month = 0; month < 12; month++) {
//     if (new Date(year, month, 13).getDay() === 5)
//       count++;
//   }
//   return count;
// }

//5
// const MAX_FEATURED = 9876543201;

// function hasUniqueDigits(number) {
//   return !/(\d)\d*(?=\1)/.test(String(number));
// }

// function featured(number) {
//   let minMultiplier = Math.ceil(number / 7);
//   for (let multiplier = minMultiplier; multiplier <= MAX_FEATURED / 7; multiplier += 2) {
//     if (hasUniqueDigits(multiplier * 7)) {
//       return multiplier * 7;
//     }
//   }
//   return "There is no possible number that fulfills those requirements.";
// }

//6
// function sumSquareDifference(num) {
//   let sum = 0;
//   let sumSqares = 0;
//   for (let member = 1; member <= num; member++) {
//     sum += member;
//     sumSqares += member ** 2;
//   }
//   return sum ** 2 - sumSqares;
// }

//7
// function bubbleSort(array) {
//   let sorted;
//   let limit = array.length - 1;
//   do {
//     sorted = true;
//     for (let index = 0; index < limit; index++) {
//       if (array[index] > array[index + 1]) {
//         [array[index], array[index + 1]] = [array[index + 1], array[index]];
//         sorted = false;
//       }
//     }
//     limit--;
//   } while (!sorted);
//   return array;
// }

//8
// function longestSentence(text) {
//   let sentenceArray = text.match(/\w.*?[.!?]/g);
//   let longestCount = Math.max(...sentenceArray.map(elem => elem.split(' ').length));
//   let longestSentence = sentenceArray.find(elem => elem.split(' ').length === longestCount);

//   console.log(longestCount);
//   console.log(longestSentence);
// }
