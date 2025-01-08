// Challange 1
// Given an array of user objects, each with an isActive property, write a function that filters out only the active users.

const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
  { id: 4, name: "David", isActive: false }
];

let isActiveUser = users.filter(user => user.isActive == true);

console.log(isActiveUser);

// Challange 2
// Given an array of products, filter out those that cost less than or equal to a specified amount of the budget 500.

const products = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Headphones", price: 200 },
  { id: 4, name: "Monitor", price: 300 }
];

const budget = 500;

let money = products.filter(product => product.price <= budget);

console.log(money);

// Challange 3
// calculate the total cost for each item in the cart.

const cart = [
  { item: "Laptop", price: 1200, quantity: 1 },
  { item: "Smartphone", price: 800, quantity: 2 },
  { item: "Headphones", price: 200, quantity: 3 }
];

let totalCost = 0;

cart.forEach(product => {
  const itemTotal = product.price * product.quantity;
  totalCost += itemTotal;
});

console.log(itemTotal);
