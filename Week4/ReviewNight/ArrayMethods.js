// Challenge 1: String Manipulation Basics
// Write a function that takes a string as input and returns the string in uppercase.
const str = "My new string";
console.log(str.toUpperCase());

//  Find both indices of the word "fox" in the sentence "The quick brown fox jumps over the lazy fox."
const find = "fox";
// const index

//  Combine ["apple", "banana"] and ["cherry", "date"] into a single array, and join the array into a string separated by commas.

let str1 = ["apple", "banana"];
let str2 = ["cherry", "date"];
let combine = str1.concat(str2);
console.log(combine);
console.log(combine.join());

// Grab the first three months of the year from an array of months ["Jan", "Feb", "Mar", "Apr", "May"]. Then, replace "Mar" with "March" in the original array.

let months = ["Jan", "Feb", "Mar", "Apr", "May"];
let newArray = months.splice(0, 3, "March");
console.log(newArray);
console.log(months);

// Add "grape" and "orange" to the array ["apple", "banana"].
// Then, remove the second element and reverse the array.

let n1 = ["apple", "banana"];
n1.push("grape", "orange");
console.log(n1);

n1.splice(1, 1);
console.log(n1);

n1.reverse();
console.log(n1);
