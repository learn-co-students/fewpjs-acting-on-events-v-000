// Your code here
let dodger = document.getElementById('dodger');
let left_beginning_str = dodger.style.left.replace("px", "");
let left_beginning_num = parseInt(left_beginning_str, 10);

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

  if (left < left_beginning_num * 2) {
    dodger.style.left = `${left + 1}px`;
  }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key == "ArrowRight") {
    moveDodgerRight();
  }
});

