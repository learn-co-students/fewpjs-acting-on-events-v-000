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
    let leftPosition = dodger.style.left.replace("px", "");
    let leftPositionNumber = parseInt(leftPosition, 10);


    if (leftPositionNumber > 0) {
        dodger.style.left = `${leftPositionNumber + 1}px`;
    }
}
