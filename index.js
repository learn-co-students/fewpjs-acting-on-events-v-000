let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumber = parseInt(dodger.style.left.replace("px",""));
    dodger.style.left = `${leftNumber-10}px`;
}

function moveDodgerRight() {
   let leftNumber = parseInt(dodger.style.left.replace("px",""));
   dodger.style.left = `${leftNumber+10}px`;
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
})



document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
})