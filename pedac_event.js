/*
-create object to store letter-count
- iterate over input string
  -update letter counts in object
-init result to empty string
-iterate over alphabet
  -add letter count or zero if letter absent to result

  */
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function decrypt(input) {
  let result = '';
  let letterCounts = {};

  for (const char of input) {
    if (ALPHABET.includes(char)) {
      letterCounts[char] = letterCounts[char] + 1 || 1;
    }
  }

  for (const letter of ALPHABET) {
    result += letterCounts[letter] || 0;
  }
  return result;
}
console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');