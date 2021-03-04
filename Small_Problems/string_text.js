//1
// function isUppercase(string) {
//   return string === string.toUpperCase();
// }

//2
// function removeVowels(array) {
//   return array.map(elem => elem.replace(/[aeoui]/gi, ''));
// }

//3
// function letterCaseCount(string) {
//   let lowercase = string.match(/[a-z]/g)?.length || 0;
//   let uppercase = string.match(/[A-Z]/g)?.length || 0;
//   let neither = string.length - lowercase - uppercase;
//   return { lowercase, uppercase, neither };
// }

//4
// function wordCap(string) {
//   return string.replace(/(\S)(\S*)/g, (_, first, rest) => first.toUpperCase() + rest.toLowerCase());
// }

//5
// function swapCase(string) {
//   return string.replace(/./g, char => {
//     if (/[a-z]/.test(char)) return char.toUpperCase();
//     return char.toLowerCase();
//   });
// }

//6
// function staggeredCase(string) {
//   return string.replace(/./g, (char, offset) => offset % 2 ? char.toLowerCase() : char.toUpperCase());
// }

//7
// function staggeredCase(string, countNonAlpha = false) {
//   let toCaps = true;
//   return string.split('').map(char => {
//     if (/[a-z]/i.test(char) && toCaps) {
//       toCaps = !toCaps;
//       return char.toUpperCase();
//     } else if (/[a-z]/i.test(char) && !toCaps) {
//       toCaps = !toCaps;
//       return char.toLowerCase();
//     } else {
//       if (countNonAlpha) {
//         toCaps = !toCaps;
//       }
//       return char;
//     }
//   }).join('');
// }

//8
// function wordLengths(string) {
//   return string ? string.split(' ').map(str => `${str} ${str.length}`) : [];
// }

//9
//const text = 'Sed ut perspsediciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

// function searchword(word, text) {
//   return text.match(new RegExp(`\\b${word}\\s`, 'gi'))?.length || 0;
// }
//10
// function searchWord(word, text) {
//   return text.replace(new RegExp(`\\b${word}(?=\\s)`, 'gi'), match => `**${match.toUpperCase()}**`);
// }
