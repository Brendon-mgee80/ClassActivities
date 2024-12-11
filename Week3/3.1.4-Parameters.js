// Named Parameters
// write a function that takes two named parameters:
function Music(param1, param2) {
  console.log(param1);
  console.log(param2);
}

// print each named parameter,
console.log(param1);
console.log(param2);

// then return the parameters added together
Music(param1, param2) {
  console.log(param1, param2);
return param1 + param2
}

// invoke the function and pass in two numbers
console.log(Music(2, 3));

// invoke the function and pass in more than two numbers
console.log(Music(2, 3, 8, 11));

// invoke the function and pass in only one number
console.log(Music(2));

// change the function to set default values for the parameters
function MusicwithSound(param1 = 0, param2 = 8) {
  console.log(param1, param2);
return param1 + param2
}

// again, invoke the function and pass in only one number
console.log(MusicwithSound(2));

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function MusicwithSound(param1 = 0, param2 = 8, ...param3) {
  console.log(param1, param2);
  console.log(param3);
return param1 + param2
}
// again, invoke the function and pass in more than two numbers
console.log(MusicwithSound(10, 11, 12 , 25));
