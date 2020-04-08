// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

function moveDodgerRight() {
//    let rightNumbers = dodger.style.right.replace("px", "");
//    let right = parseInt(rightNumbers, 10);
   
//     if (right < 400) {
//      dodger.style.right = `${right - 1}px`;
//     }
// cmd ? is commenting multiple lines at once
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
    dodger.style.left = `${left + 1}px`;
}

// dodger doesn't have a right margin defined, or the left margin defined only for the tests
  }

  document.addEventListener("keydown", function(e) {
      console.log("Arrow",e.key) // console is log is like puts, debugger is like pry is it shows up in console
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });

 