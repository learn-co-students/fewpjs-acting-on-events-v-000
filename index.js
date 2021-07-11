let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

// Move dodger left
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

// Move dodger right
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left < 360) {
    dodger.style.left = `${left + 10}px`;
  }
}

// Move dodger down
function moveDodgerDown() {
  let bottomNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(bottomNumbers, 10);
 
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 10}px`;
  }
}

// Move dodger up
function moveDodgerUp() {
  let bottomNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(bottomNumbers, 10);
 
  if (bottom < 380) {
    dodger.style.bottom = `${bottom + 10}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  } else if (e.key === "ArrowDown") {
    moveDodgerDown();
  } else {
    moveDodgerUp();
  }
});
