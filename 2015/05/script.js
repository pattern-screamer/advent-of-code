const fs = require('node:fs');
const input = fs.readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' });
const splitInput = input.split('\n');

// Part 1
let niceStrings = 0;
stringLoop: for (const string of splitInput) {
  if (
    string.includes('ab') ||
    string.includes('cd') ||
    string.includes('pq') ||
    string.includes('xy')
  ) {
    continue stringLoop;
  }

  const vowels = string.split('').filter((char) => {
    return char === 'a' || 
    char === 'e' || 
    char === 'i' || 
    char === 'o' ||
    char === 'u';
  });
  if (vowels.length < 3) {
    continue stringLoop;
  }

  for (let charIndex = 0; charIndex < string.length - 1; charIndex++) {
    if (string[charIndex] === string[charIndex + 1]) {
      break;
    }
    if (charIndex === string.length - 2) {
      continue stringLoop;
    }
  }
  
  niceStrings++;
}

console.log(`Nice string amount according to rules in Part 1: ${niceStrings}`);

// Part 2
niceStrings = 0;
stringLoop: for (const string of splitInput) {
  for (let charIndex = 0; charIndex < string.length - 1; charIndex++) {
    const startRestOfString = string.slice(charIndex + 2);
    if (startRestOfString.includes(string[charIndex] + string[charIndex + 1])) {
      break;
    }
    if (charIndex === string.length - 2) {
      continue stringLoop;
    }
  }

  for (let charIndex = 0; charIndex < string.length - 2; charIndex++) {
    if (string[charIndex] === string[charIndex + 2]) {
      break;
    }
    if (charIndex === string.length - 3) {
      continue stringLoop;
    }
  }
  
  niceStrings++;
}

console.log(`Nice string amount according to rules in Part 2: ${niceStrings}`);