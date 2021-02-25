// Your code here

let dodger = document.querySelector("#dodger")
dodger.style.backgroundColor = "purple"
function moveDodgerLeft() {
  let pos = getIntFromPosition(dodger.style.left)
  if (pos > 0) {
    dodger.style.left = `${pos -= 1}px`
  }
}

function moveDodgerRight() {
  let pos = getIntFromPosition(dodger.style.left)
  const parentStyle = getComputedStyle(dodger.parentElement)
  const style = getComputedStyle(dodger)

  dodger.style.left = `${pos += 1}px`
  // if (pos > (parentStyle.width - style.width)) {
  //   dodger.style.left = `${pos += 10}px`
  // }
}

function getIntFromPosition(position) {
  let pos = position.replace("px", "")
  return parseInt(pos)
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
})