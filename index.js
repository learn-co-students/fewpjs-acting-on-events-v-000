// Your code here
// Diagram of this workspace is available here:
// https://i.imgur.com/DCwP5pu.jpg
const dodger = document.querySelector("#dodger")

function moveDodgerLeft() {
    let position = parseInt(dodger.style.left.replace('px', '')) - 10
    if (position >= 0){
        dodger.style.left = `${position}px`
    }
}

function moveDodgerRight() {
    let position = parseInt(dodger.style.left.replace('px', '')) + 10
    if (position <= 360){
        dodger.style.left = `${position}px`
    }
}

const handleKeyDown = x => {
    if (x.key == "ArrowLeft"){
        moveDodgerLeft();
    } else if (x.key == "ArrowRight") {
        moveDodgerRight();
    }
}

document.addEventListener("keydown", x => handleKeyDown(x))
