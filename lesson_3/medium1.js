//1.
for (let index = 1; index <= 10; index++) {
  console.log('The Flintstones Rock!'.padStart(index + 'The Flintstones Rock!'.length));
}

//2.
let munstersDescription = "The Munsters are creepy and spooky.";
munstersDescription.replace(/./g, char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());
