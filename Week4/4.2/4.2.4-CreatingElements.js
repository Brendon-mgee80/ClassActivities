// create a new unordered list (ul) element
const newNav = document.createElement("ul");
// remove the paragraph element in the nav-bar

const navBar = document.querySelector(".nav-bar");
const navP = navBar.querySelector(".nav-bar");
navBar.removeChild(navP);

// add your new ul element to the nav-bar

const newNavItem1 = document.createElement("li");
const newNavItem2 = document.createElement("li");

// create two new list item (li) elements, and add some text to them

newNavItem1.textContent = "home";
newNavItem2.textContent = "about";

// add the li elements to the ul in the nav-bar

newNav.appendChild(newNavItem1);
newNav.appendChild(newNavItem2);
