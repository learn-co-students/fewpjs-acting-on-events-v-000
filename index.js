let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let position = parseInt(leftNumbers, 10);
 
  if (position > 0) {
    dodger.style.left = `${position - 1}px`;
  }
}

function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace("px", "");
  let position = parseInt(rightNumbers, 10);
 
  if (position < 360) {
    dodger.style.left = `${position + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});


