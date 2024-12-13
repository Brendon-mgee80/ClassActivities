// add an event listener to the dog picture that listens for a "click" and gives an alert

const dogPicture = document.getElementById("dog-picture");
dogPicture.addEventListener("click, function() {
  alert("you clicked a dog")});

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color

const classWeekItems = document.querySelectorAll(".class-week");
classWeekItems.forEach(item =>
  item.addEventListener("mouseover", function(event) {
event.target.style.backgroundColor = "red";
  }))

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed

document.addEventListener("keydown", function( {
  console.log(`keydown was pressed:, event )
}))
