var drumLength = document.querySelectorAll(".drum").length;

// DETECT CLICKS FOR SOUND
for (var i = 0; i < drumLength; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  })

}

// DETECT KEYBOARD PRESSES FOR SOUND
document.addEventListener("keydown", function(event) {

makeSound(event.key);
buttonAnimation(event.key);

});

// FUNCTION TO MAKE THE SOUND TO BE APPLIED ABAOVE ^^

function makeSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;


    default:
      console.log(this.buttonInnerHTML);
  }

}


// FUNCTION TO MAKE ANIMATION

function buttonAnimation (currentkey) {

var key = document.querySelector("."+currentkey);
key.classList.add("pressed");
setTimeout(function(){key.classList.remove("pressed")}, 100);

}
