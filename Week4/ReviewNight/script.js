const { text } = require("stream/consumers");

// Challenge 3: Interactive Page
let alertMes = document.getElementById("alert-button");

alertMes.addEventListener("click", function() {
  alert("Here I |am");
});

// <p>Use media queries to adjust the layout of the cards so that they stack vertically on smaller screens (less than 600px width).</p>

// Challenge 5: DOM Manipulation
let newMes = document.getElementById("change-text-button");

newMes.addEventListener("click", function() {
  document.getElementById("dynamic-text").textContent = "Congrats";
});

// Challenge 7: Dynamic List Generation
