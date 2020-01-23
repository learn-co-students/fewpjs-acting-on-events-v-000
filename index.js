// Your code here

let dodger = document.getElementById("dodger");
const offset = 1;

function leftInt (dodger){
  let leftString = dodger.style.left.replace("px","");
  return parseInt(leftString, 10);
}

function getRightGameBoundary(){
  let gameRightBoundary = document.getElementById("game");
  
  return gameRightBoundary.offsetWidth;
}

function moveDodgerLeft(){
  let left = leftInt(dodger);
  
  if (left > 0){
    dodger.style.left = `${left - offset}px`;
  }
}

function moveDodgerRight(){
  let left = leftInt(dodger);
  let gameRightBoundary = getRightGameBoundary();
  console.log(left);
  
  if(left < (gameRightBoundary - dodger.offsetWidth)){
    dodger.style.left = `${left + offset}px`;
  }
  
}

document.addEventListener("keydown", 
  function(e){
    if (e.key === "ArrowLeft"){
      moveDodgerLeft();
    }
  }
)

document.addEventListener("keydown", 
  function(e){
    if (e.key === "ArrowRight"){
      moveDodgerRight();
    }
  }
)