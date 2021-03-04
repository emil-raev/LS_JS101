//1
// let arr = ['10', '11', '9', '7', '8'].sort((a, b) => b - a);
// console.log(arr);

//2
// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];
//console.log(books.sort((a, b) => a.published - b.published));

//3
//arr1[2][1][3]; arr2[1]['third'][0] arr3[2]['third'][0][0] obj1.b[1] Object.keys(obj2.third)[0]

//4
//arr1[1][1] arr2[2] obj1.first[2][0] obj2.a.a[2]

//5
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female' }
// };

// // console.log(Object.values(munsters).reduce((acc, nxt) => { if (nxt.gender === 'male') { acc += nxt.age; } return acc; }, 0));

// //6
// for (let member in munsters) {
//   console.log(`${member} is a ${munsters[member].age}-year-old ${munsters[member].gender}`);
// }

//8
// const vowels = 'aeoui';
// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };
// Object.values(obj).forEach(array => {
//   array.forEach(elem => {
//     [...elem].forEach(char => {
//       if (vowels.includes(char)) {
//         console.log(char);
//       }
//     });
//   });
// });

//9
// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
// console.log(arr.map(array => {
//   return typeof array[0] === 'string' ? [...array].sort() : [...array].sort((a, b) => a - b);
// }));

// console.log(arr.map(array => {
//   return array.sort((a, b) => {
//     return typeof array[0] === 'string' ? a.localeCompare(b) : a - b;
//   });
// }));

//let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

//12
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
// console.log(arr.map(subArr => {
//   return subArr.filter(elem => elem % 3 === 0);
// }));

//13
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// console.log(arr.sort((a, b) => sumOdd(a) - sumOdd(b)));

// function sumOdd(array) {
//   return array.reduce((acc, nxt) => {
//     if (nxt % 2) {
//       acc += nxt;
//     }
//     return acc;
//   }, 0);
// }

//14
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };
// console.log(Object.values(obj).map(obj => {
//   return obj.type === 'fruit' ? obj.colors.map(color => color[0].toUpperCase() + color.slice(1)) : obj.size.toUpperCase();
// }));

//11
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// console.log(arr.map(obj => {
//   return valuePlusOne(obj);
// }));

// function valuePlusOne(object) {
//   let copy = { ...object };
//   for (const key in copy) {
//     copy[key]++;
//   }
//   return copy;
// }

//15
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// console.log(arr.filter(obj => {
//   return Object.values(obj).every(subArr => subArr.every(elem => elem % 2 === 0));
// }));

//16
// let arr = [['a', 1], ['b', 'two'], ['sea', { 'c': 3 }], ['D', ['a', 'b', 'c']]];

// console.log(Object.fromEntries(arr));

//17
// function generateRandomHex(length) {
//   let result = '';
//   for (let counter = 0; counter < length; counter++) {
//     result += Math.floor(Math.random() * 16).toString(16);
//   }
//   return result;
// }
