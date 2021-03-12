//1
// function lightsOn(count) {
//   let lightsArray = Array(count).fill(false);

//   for (let pass = 1; pass <= count; pass++) {
//     lightsArray.forEach((_, index) => {
//       if ((index + 1) % pass === 0) {
//         lightsArray[index] = !lightsArray[index];
//       }
//     });
//   }
//   return lightsArray.reduce((acc, nxt, idx) => {
//     if (nxt) acc.push(idx + 1);
//     return acc;
//   }, []);
// }

//3
// const letterMap = {
//   B: 'O', X: 'K', D: 'Q', C: 'P', N: 'A',
//   G: 'T', R: 'E', F: 'S', J: 'W', H: 'U',
//   V: 'I', L: 'Y', Z: 'M'
// };

// function isBlockWord(word) {
//   word = word.toUpperCase();
//   for (const char of word) {
//     if (word.includes(letterMap[char]) || word.indexOf(char) !== word.lastIndexOf(char)) {
//       return false;
//     }
//   }
//   return true;
// }

//2
// function diamond(n) {
//   let linesArray = [];
//   for (let line = 0; line < n / 2; line++) {
//     linesArray[line] = linesArray[n - 1 - line] = ' '.repeat((n - 2 * line - 1) / 2) + '*'.repeat(2 * line + 1).replace(/(?<=\*)\*(?=\*)/g, ' ');
//   }
//   console.log(linesArray.join('\n'));
// }
// function hollowDiamond(n) {
//   let increment = 2;

//   for (let idx = 1; idx > 0; idx += increment) {
//     if (idx === 1) {
//       console.log(' '.repeat((n - idx) / 2) + '*');
//     } else {
//       console.log(' '.repeat((n - idx) / 2) + '*' + ' '.repeat(idx - 2) + '*');
//     }

//     if (idx === n) increment = -2;
//   }
// }

//4
// function star(n) {
//   let linesArray = [];
//   for (let line = 0; line < (n - 1) / 2; line++) {
//     linesArray[line] = linesArray[n - 1 - line] = ' '.repeat(line) + ['*', '*', '*'].join(' '.repeat((n - 3) / 2 - line));
//   }
//   linesArray[(n - 1) / 2] = '*'.repeat(n);
//   console.log(linesArray.join('\n'));
// }
