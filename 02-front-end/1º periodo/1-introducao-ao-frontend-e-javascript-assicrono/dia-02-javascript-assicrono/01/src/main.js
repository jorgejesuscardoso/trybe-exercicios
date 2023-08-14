const firstNumber = 9;
const secondNumber = 3;
let thirdNumber = firstNumber + secondNumber;

console.log(thirdNumber);

const n = 2000;

setTimeout(() => {
  thirdNumber = firstNumber - secondNumber;
  console.log(thirdNumber);
}, n);

console.log(thirdNumber);
