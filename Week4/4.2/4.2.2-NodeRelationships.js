// select the root node
const root = document.querySelector("html");
// select the last child of the root node

// eslint-disable-next-line no-unused-vars
const getlastchild = root.lastElementChild;

// select all the children of the body element

const getbodychild = document.querySelector("body").children;
console.log(getbodychild.children);

// select the next sibling of the h2 node

console.log(document.querySelector("h2").nextElementSibling);

// select the parent element of the h1 node

console.log(document.querySelector("h1").parentElement);
