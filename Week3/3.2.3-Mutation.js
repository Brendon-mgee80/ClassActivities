/* eslint-disable no-const-assign */
let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values

// eslint-disable-next-line no-unused-vars
x = 0;
y = "";
z = undefined;

// print x, y, and z

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
a = "";
b = null;
c = undefined;

console.log(a);
console.log(b);
console.log(c);

console.log(x);
console.log(y);
console.log(z);

// using BRACKET NOTATION, assign a value to b

// using DOT NOTATION, assign a PROPERTY to c

// using DOT NOTATION, assign a METHOD to c

// using BRACKET NOTATION, call the method in c

// print a, b, and c
