//1
// const words = {
//   adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
//   noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
//   verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
//   adverb: ['easily', 'lazily', 'noisily', 'excitedly']
// };

// const template2 = 'The %{noun} %{verb} the %{noun}\'s %{noun}.';

// function randomIndex(length) {
//   return Math.floor(Math.random() * length);
// }

// function madlibs(template) {
//   return template.replace(/%\{(\w+)\}/g, (_, word) => words[word][randomIndex(words[word].length)]);
// }

//2
// function transpose(matrix) {
//   return matrix[0].map((_, idx) => matrix.map(row => row[idx]));
// }

function divisorSum(num) {
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      sum += num / i;
    }
  }
  return sum;
}

console.log(divisorSum(48));