//1.
for (let i = 1; i <= 10; i++) {
  console.log('The Flintstones Rock!'.padStart(i + 'The Flintstones Rock!'.length));
}

//2.
let munstersDescription = "The Munsters are creepy and spooky.";
munstersDescription.replace(/./g, char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());
