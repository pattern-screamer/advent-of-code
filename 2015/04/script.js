const md5 = require('js-md5')

// Part 1
const key = "ckczppom";
let number = 0;
while (true) {
  const hash = md5(key + number);
  if (hash.slice(0, 5) === "00000") {
    break;
  }
  number++;
}
console.log(`The solution is: ${number}`);

// Part 2
number = 0;
while (true) {
  const hash = md5(key + number);
  if (hash.slice(0, 6) === "000000") {
    break;
  }
  number++;
}
console.log(`The solution is: ${number}`);