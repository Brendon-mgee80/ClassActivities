/* eslint-disable no-unused-vars */
// refactor the functions below into arrow syntax
// function myNumberFunction() {
//   return ((2 ** 2 + 3) % 4) * 14;
// }

const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;

// function greet(name) {
//   return `Hello, ${name}`;
// }

const greet = name => `Hello, ${name}`;

greet("Sunshine");

// const timeOfDayGreet = function(name, timeOfDay) {
//   return `Hello, ${name}, good ${timeOfDay}`;
// };

const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;

// function tripleAndHalf(num) {
//   let triple = num * 3;
//   return triple / 2;
// }

const tripleAndHalf = num => {
  let triple = num * 3;
  return triple / 2;
};

// function sumTwoNumbers(num1, num2) {
//   let sum = num1 + num2;
//   console.log(`The sum of your numbers is ${sum}.`);
//   return sum;
// }

const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};
