// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked!");
// });


// function onClick() {
//   alert("I got clicked!");
// }


// Detects button press with a mouse

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);


});
}


// Detects keyboard press

document.addEventListener("keydown", function(event) {
makeSound(event.key);
buttonAnimation(event.key);
});


function makeSound(key) {
// switch is like a railroad and it breaks off each time kind of like an if else but better in this situation
  switch (key) {
    case "w":
    var tom1 = new Audio('tom-1.mp3');
    tom1.play();
      break;
// plays each drum sound with the corresponding keypress which i got from the event listener keydown
  case "a":

  var tom2= new Audio('tom-2.mp3');
  tom2.play();
  break;
  case "s":

  var tom3 = new Audio('tom-3.mp3');
  tom3.play();
  break;

  case "d":

  var tom4 = new Audio('tom-4.mp3');
  tom4.play();
  break;

  case "j":

  var kick = new Audio('kick-bass.mp3');
  kick.play();
  break;

  case "k":

  var snare = new Audio('snare.mp3');
  snare.play();
  break;

  case "l":

  var crash = new Audio('crash.mp3');
  crash.play();
  break;
    default:
    //good practice to put something in default i guess lol
    console.log(key);

  }
}


function buttonAnimation(currentKey){
  //each time the key is pressed or clicked it changes the css class of it and the 100 is the timeout in ms
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}


// for (var i = 0; i < array.length; i++) {
//   array[i].addEventListener("click", onClick);
// }
