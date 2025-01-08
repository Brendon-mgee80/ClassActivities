const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable

const lastNum = nums.pop();
const lastSecNum = nums.pop();

// remove each of the first two items with shift(), saving each item to a variable

const first2 = nums.shift();
const secNum = nums.shift();
console.log(nums);

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(first2, secNum);
nums.unshift(lastNum, lastSecNum);
console.log(nums);
