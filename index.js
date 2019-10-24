// Your code here

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}


function moveDodgerRight(){
  let rightNum = dodger.style.left.replace("px", "");
  let right  = parseInt(rightNum, 10);
    if (right > 0) {
      dodger.style.left = `${right + 1}px`;
    }
  }
