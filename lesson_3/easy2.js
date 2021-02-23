//1.
let advice = "Few things in life are as important as house training your pet dinosaur.";
advice.replace('important', 'urgent');
advice.replace(/important/g, 'urgent');

//2.
let numbers = [1, 2, 3, 4, 5];
let reversed = numbers.slice().reverse();
let reversed2 = [...numbers].sort((num1, num2) => num2 - num1);

//3.
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
numbers.includes(number);

//4.
let famousWords = "seven years ago...";
'Four score and ' + famousWords;
`Four score and ${famousWords}`;
'Four score and '.concat(famousWords);

//5.
[1, 2, 3, 4, 5].splice(2, 1);

//6.
flintstones = [].concat(...flintstones);

//7.
Object.entries(flintstones).filter(elem => elem[0] === 'Barney')[0];

//8.
Array.isArray(numbers);

//9.
let title = "Flintstone Family Members";
title.padStart(20 + Math.floor(title.length / 2));

//10.
statement1.split('').filter(char => char === 't').length;
statement1.replace(/[^t]/g, '').length;