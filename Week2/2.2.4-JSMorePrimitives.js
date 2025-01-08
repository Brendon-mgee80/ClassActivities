// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let thing1;
let thing2 = "Happy Days";
let thing3 = 44;
let thing4 = true;
let blankSpace = null;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(
  typeof thing2,
  typeof thing3,
  typeof thing4,
  typeof thing1,
  typeof blankSpace
);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let temp = "I am fascinated with ${blankSpace} and ${thing1}";
// reassign the value of the variable that references "null"
blankSpace = "The moon";
// print the value and its type
console.log(blankSpace, typeof blankSpace);
// print a variable that causes a ReferenceError
let thing5 = false;
console.log(thing5);
// alter the previous line to no longer cause a ReferenceError
