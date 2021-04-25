// Your code here
let dodger = document.getElementById("dodger");
let gameRightBorder = document.getElementById("game").offsetWidth;

function moveDodgerLeft(){
    let left = getLeftNumbers();
    if (left > 0){
        dodger.style.left = `${left -1}px`;
    }
}

function moveDodgerRight(){
    let dodgerWidth = dodger.offsetWidth;
    let left = getLeftNumbers();
    let right = left + dodgerWidth;

    if (right < 181){
        dodger.style.left = `${left +1}px`;
    }
}

function getLeftNumbers(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    return left
}

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft" || e.key === "h"){
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight" || e.key === "l"){
        moveDodgerRight();
    }
});

