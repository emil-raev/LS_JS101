function substrings(str) {
  let result = [];

  for (let startIndex = 0; startIndex < str.length - 1; startIndex++) {
    for (let endIndex = startIndex + 1; endIndex < str.length; endIndex++) {
      result.push(str.slice(startIndex, endIndex + 1));
    }
  }
  console.log(result);
  return result;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });
  return result;
}

// function palindromeSubstrings(str) {
//   let result = [];

//   for (let midIndex = 0; midIndex < str.length; midIndex += 0.5) {
//     let midOffset = 1;
//     while (str[Math.ceil(midIndex - midOffset)] === str[Math.floor(midIndex + midOffset)]) {
//       result.push(str.slice(Math.ceil(midIndex - midOffset), Math.floor(midIndex + midOffset) + 1));
//       midOffset++;
//     }
//   }
//   return result;
// }

console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")); // []
console.log(palindromeSubstrings(""));           // []