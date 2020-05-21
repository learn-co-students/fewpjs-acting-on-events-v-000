// Your code here

let dodger = document.getElementById("dodger");


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
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

// function moveDodgerUp() {
//   let topNumbers = dodger.style.top.replace("px", "");
//   let top = parseInt(topNumbers, 10);
//
//   if (top < 360) {
//     dodger.style.top = `${top + 1}px`;
//   }
// }
//
// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowUp") {
//     moveDodgerUp();
//   }
// });




















// let dodger = document.getElementById("dodger");
//
// dodger.style.backgroundColor = "#FF69B4";
// // dodger.style.bottom = "100px";
// // dodger.style.bottom = "0px";
//
// // lab example code:
// // document.addEventListener("keydown", function(e) {
// //   console.log(e.key);
// // });
// //
// // document.addEventListener("keydown", function(e) {
// //   if (e.key === "ArrowLeft") {
// //     let leftNumbers = dodger.style.left.replace("px", "");
// //     let left = parseInt(leftNumbers, 10);
// //
// //     dodger.style.left = `${left - 1}px`;
// //   }
// // });
//
// function moveDodgerLeft() {
//   let leftNumbers = dodger.style.left.replace("px", "");
//   let left = parseInt(leftNumbers, 10);
//
//   if (left > 0) {
//     dodger.style.left = `${left - 1}px`;
//   }
// }
//
// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowLeft") {
//     moveDodgerLeft();
//   }
// });
//
// function moveDodgerRight() {
//   let leftNumbers = dodger.style.left.replace("px", "");
//   let left = parseInt(leftNumbers, 10);
//
//   if (left < 360) {
//     dodger.style.left = `${left + 1}px`;
//   }
// }
//
// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowRight") {
//     moveDodgerRight();
//   }
// });
