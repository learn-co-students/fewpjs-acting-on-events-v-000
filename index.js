let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "hotpink";
dodger.style.bottom = "100px";
dodger.style.bottom = "0px";

// document.addEventListener("keydown", function (e) {
//     console.log(e.key);
// });

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        let leftNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);

        dodger.style.left = `${left - 1}px`; }
    
    else if (e.key === "ArrowRight") {
        let rightNumbers = dodger.style.right.replace("px", "");
        let right = parseInt(rightNumbers, 10);

        dodger.style.right = `${left + 1}px`;
    }
});

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let rightNumbers = dodger.style.right.replace("px", "");
    let right = parseInt(rightNumbers, 10);

    if (right > 179) {
        dodger.style.right = `${left + 1}px`;
    }
}