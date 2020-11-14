// Your code here

const dodger = document.querySelector('#dodger')


function moveDodgerLeft(e) {
    // drop the px
    let leftNumbers = dodger.style.left.replace("px","")

    // convert string value to number
    let left = parseInt(leftNumbers, 10)

    // now set the amount for movement

    if(left > 0) {

        dodger.style.left=`${left - 1}px`
    }
}

function moveDodgerRight(e) {
    // drop the px

    let leftNumbers = dodger.style.left.replace("px","")

    // convert the number
    let left = parseInt(leftNumbers, 10)

    // set the dogdger movement right , if right <parentElement.clientWidth


    dodger.style.left = `${left + 1}px`


}

// add event listner for keydown event
dodger.addEventListener('keydown', function(e){
    if(e.key === 'ArrowLeft'){

        moveDodgerLeft()
    } else if(e.key === 'ArrowRight'){
        moveDodgerRight()
    }
} )
