// Challenge: Create a function greet() that takes two parameters: firstName and lastName. The function should return a string that says, "Hello, [firstName] [lastName]!"

function greet(firstName, lastName) {
  return `Hello ${firstName} ${lastName}`;
}
console.log(greet("Brendon", "McGee"));

// Challenge: Write a function doubleNumber that takes a number and returns twice its value.

function doubleNumber(num) {
  return num * 2;
}
console.log(doubleNumber(2));

// Challenge: Write a function isPositive that returns true if a number is positive, and immediately returns false if the number is zero or negative.

function isPositive(num) {
  if (num <= 0) {
    return false;
  }
}
console.log(isPositive(5));

// Challenge: Create an array colors containing three strings: "red", "green", and "blue". Log the second element to the console.

const myArray = ["red", "green", "blue", ["black", "white"]];
console.log(myArray[3][1]);

// Challenge: Create an array numbers containing the numbers 1 to 5. Log the last array item using .length to the console.

const numberArray = [1, 2, 3, 4, 5];
console.log(numberArray[numberArray.length - 1]);

// Challenge: Create an array students containing two objects, each representing a student with properties name and age. Log the name of the first student.

const students = [
  { name: "Harry", age: "17" },
  { name: "Teona", age: "18" }
];
console.log(students[0].name);
// Challenge: Create an array fruits containing "apple", "banana", and "cherry". Use a for...of loop to add each item to a new array.

// final Level!!!
const librarySystem = {
  branches: {
    mainBranch: {
      books: [
        {
          title: "1984",
          author: "George Orwell",
          publisher: "Secker & Warburg"
        },
        { title: "Brave New World", author: "Aldous Huxley" }
      ],
      manager: { name: "Alice Smith", email: "alice@library.com" }
    },
    westBranch: {
      books: [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { title: "Moby Dick", author: "Herman Melville" },
        { title: "The Catcher in the Rye", author: "J.D. Salinger" },
        { title: "Crime and Punishment", author: "Fyodor Dostoevsky" }
      ],
      manager: { name: "Bob Johnson" }
    },
    eastBranch: {
      books: [
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
        {
          title: "Harry Potter and the Sorcerer's Stone",
          author: "J.K. Rowling"
        },
        { title: "The Hobbit", author: "J.R.R. Tolkien" },
        { title: "The Alchemist", author: "Paulo Coelho" }
      ],
      manager: { name: "Sarah Thompson", email: "sarah@library.com" }
    }
  },
  systemInfo: {
    establishedYear: 1985
  }
};

console.log("publisher" in librarySystem.branches.mainBranch.books[0]);
let branchName = "mainBranch";
console.log("publisher" in librarySystem.branches[branchName].books[0]);

// Check if the manager of mainBranch has an email property

// Check if the first book in mainBranch has a publisher property
console.log("publisher" in librarySystem.branches.mainBranch.books[0]);

// Verify if systemInfo has the certification property

// Add a function listBooks to the librarySystem object.
// The function should take the name of a branch (mainBranch or westBranch or eastbranch)
// as an argument and log the titles of the books in that branch.
