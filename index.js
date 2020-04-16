// Your code here
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if(left + dodger.offsetWidth < 400) { // 400px is the width of the (parent) #game element.
    dodger.style.left = `${left + 1}px`;
  }

  /* This actually works in the browser, but for some reason it doesn't pass the tests.
     Somehow, when tested, the dodger won't move right.

  let game = document.getElementById('game');

  if(left + dodger.offsetWidth < game.offsetWidth) { // The dodger is not at the right edge.
    dodger.style.left = `${left + 1}px`;
  } */
}

/* For future reference, this event listener helps:

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if (e.key == "ArrowRight") {
    moveDodgerRight();
  }
});

*/