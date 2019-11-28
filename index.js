// Your code here
const DODGER = document.querySelector("#dodger")


function moveDodgerLeft() {
    const newPosition = parseInt(DODGER.style.left.replace('px', '')) - 10
    if (newPosition >= 0){
        DODGER.style.left = `${newPosition}px`
    }
}

function moveDodgerRight() {
    const newPosition = parseInt(DODGER.style.left.replace('px', '')) + 10
    if (newPosition <= 360){
        DODGER.style.left = `${newPosition}px`
    }
}


document.addEventListener("keydown", e => handleKeydown(e))

const handleKeydown = e => {
    if (e.key == "ArrowLeft"){
        moveDodgerLeft();
    } else if (e.key == "ArrowRight") {
        moveDodgerRight();
    }
}