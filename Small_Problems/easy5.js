//1
// const DEGREE_MINUTES = 60;
// const DEGREE_SECONDS = 3600;
// const TOTAL_DEGREES = 360;

// function dms(degreesFloat) {
//   let degreesInt = Math.floor(degreesFloat);
//   let degreesNormalized = (TOTAL_DEGREES + (degreesInt % TOTAL_DEGREES)) % TOTAL_DEGREES;
//   let minutes = Math.floor((degreesFloat % 1) * DEGREE_MINUTES);
//   let seconds = Math.floor(((degreesFloat % 1) * DEGREE_SECONDS) % DEGREE_MINUTES);

//   return `${degreesNormalized}°${String(minutes).padStart(2, '0')}'${String(seconds).padStart(2, '0')}"`;
// }

//2
// function union(array1, array2) {
//   return [...new Set([...array1, ...array2])];
// }

//3
// function halvsies(array) {
//   return [array.slice(0, Math.ceil(array.length / 2)), array.slice(Math.ceil(array.length / 2))];
// }

//4
// function findDup(array) {
//   for (const elem of array) {
//     if (array.indexOf(elem) === array.lastIndexOf(elem)) {
//       continue;
//     }
//     return elem;
//   }
// }
// function findDup(array) {
//   return array.find((el, idx) => array.lastIndexOf(el) !== idx);
// }

// function findDup(array) {
//   return array.join().match(/\b(\d+)(?=,.*\b\1\b)/);
// }

//5
// function interleave(array1, array2) {
//   let result = [];
//   for (let index = 0; index < array1.length; index++) {
//     result.push(array1[index], array2[index]);
//   }
//   return result;
// }

// function interleave(array1, array2) {
//   return array1.flatMap((el, idx) => [el, array2[idx]]);
// }

//6
// function multiplicativeAverage(array) {
//   return (array.reduce((acc, nxt) => acc * nxt) / array.length).toFixed(3);
// }

//7
// function multiplyList(array1, array2) {
//   return array1.map((elem, idx) => elem * array2[idx]);
// }

//8
// function digitList(number) {
//   return String(number).split('').map(Number);
// }

//9
// function countOccurrences(array) {
//   let occurrences = {};
//   for (const elem of array) {
//     occurrences[elem] = (occurrences[elem] || 0) + 1;
//   }

//   for (const [key, value] of Object.entries(occurrences)) {
//     console.log(`${key} => ${value}`);
//   }
// }

//10
// function average(array) {
//   return Math.floor(array.reduce((acc, nxt) => acc + nxt) / array.length);
// }

//11
const HOUR_MINUTES = 60;
const DAY_HOURS = 24;
const DAY_MINUTES = HOUR_MINUTES * DAY_HOURS;

// function timeOfDay(minutesOffset) {
//   let minutesNormalized = (DAY_MINUTES + (minutesOffset % DAY_MINUTES)) % DAY_MINUTES;
//   let hours = Math.floor(minutesNormalized / HOUR_MINUTES);
//   let minutes = Math.floor(minutesNormalized % HOUR_MINUTES);

//   return `${formatTime(hours)}:${formatTime(minutes)}`;
// }

// function formatTime(time) {
//   return String(time).padStart(2, '0');
// }
// let day = new Date('2/14/21 00:00');
// day.setMinutes(minutesOffset);

//12
// function afterMidnight(timeString) {
//   let [hours, minutes] = timeString.split(':').map(Number);
//   return (hours * HOUR_MINUTES + minutes) % DAY_MINUTES;
// }

// function beforeMidnight(timeString) {
//   return (DAY_MINUTES - afterMidnight(timeString)) % DAY_MINUTES;
// }

// const DATE_STRING = '2020-02-20T';
// function afterMidnight(timeString) {
//   let date = new Date(DATE_STRING + timeString);
//   let [hours, minutes] = [date.getHours(), date.getMinutes()];
//   return (hours * HOUR_MINUTES + minutes) % DAY_MINUTES;
// }

