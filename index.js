// Your code here
let dodger = document.getElementById("dodger");
let game = document.getElementById("game");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = 0;

// This will log the name of the key pressed to the console
document.addEventListener("keydown", function(e) {
  console.log(e.key);
});

// This will move the 'dodger' block 5px to the left each time the left arrow is pressed

// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowLeft") {
//     let leftNumbers = dodger.style.left.replace("px", "");
//     let left = parseInt(leftNumbers, 10);
 
//     dodger.style.left = `${left - 5}px`;
//   }
// });

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// This will move the 'dodger' block 5px to the right each time the right arrow is pressed
// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowRight") {
//     let leftNumbers = dodger.style.left.replace("px", "");
//     let left = parseInt(leftNumbers, 10);
 
//     dodger.style.left = `${left + 5}px`;
//   }
// });

function moveDodgerRight() {
	let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  // if (left <= (game.width - dodger.width)){
  	dodger.style.left = `${left + 5}px`;
  // }
};

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});





// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowUp") {
//     let bottomNumbers = dodger.style.bottom.replace("px", "");
//     let bottom = parseInt(bottomNumbers, 10);
 
//     dodger.style.botttom = `${bottom - 5}px`;
//   }
// });
