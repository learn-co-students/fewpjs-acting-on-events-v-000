// Your code here
const DODGER = document.querySelector("#dodger")
let DODGERLEFT = parseInt(DODGER.style.left)


function moveDodgerLeft() {
    const newPosition = DODGERLEFT - 1
    DODGER.style.left = `${newPosition}px`
}

function moveDodgerRight() {
    const newPosition = DODGERLEFT + 1
    DODGER.style.left = `${newPosition}px`
}