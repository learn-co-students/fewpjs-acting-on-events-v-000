let dodger = document.getElementById('dodger');
let game = document.getElementById('game');

function findLeftPosition() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  return left;
}

function moveDodgerLeft() {
  let left = findLeftPosition();

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let left = findLeftPosition();

  if (left >= 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
})
