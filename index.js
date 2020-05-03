// Your code here

let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";


console.log(dodger.style.left); // "180px"

console.log(dodger.style.bottom); // "0px"


dodger.style.bottom = "0px";

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10); 
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  

function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", ""); //take out the px and make it blank for integer convert
    let right = parseInt(rightNumbers, 10);
    if (right < 360) { //400 -40 (border - width of block)
        dodger.style.left = `${right + 1}px`; //backtick bc its a string, right is not the style, left is
    }

}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });