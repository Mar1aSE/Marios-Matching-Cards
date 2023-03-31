let flipped, matches, firstClick, secondClick;

const cardsEls = document.querySelectorAll('.back') 

const scoreEl = document.querySelector('.scoreBoard')

const cardEl = document.querySelectorAll('.card')

const resetBtnEl = document.querySelector('button').addEventListener("click", init)

function init() {
    flipped = false
    matches = 0 
    scoreEl.innerHTML = `Matches: ${matches}`

    cardsEls.forEach((c) => {
        c.classList.add('back')
        c.setAttribute('src', './imgs/back-card.png')

    }) 

   cardsEls.forEach((c => c.addEventListener('click', clicked)))
}
init()


function clicked(event) {
// let clickedCArd = event.target
if (flipped === false){
    firstClick = event.target
    firstClick.classList.remove('back')
    firstClick.setAttribute('src', '')
    flipped = true 
} else if (flipped === true) {
    secondClick = event.target
    secondClick.classList.remove('back')
    secondClick.setAttribute('src', '')
    flipped = false
check()
}
}


function check() {
if (firstClick.id === secondClick.id) {
    firstClick.removeEventListener('clicked', clicked)
    secondClick.removeEventListener('clicked', clicked)
    matches++ 
    scoreEl.innerHTML = `Matches: ${matches}`
}else if (firstClick.id !== secondClick.id) {
    setTimeout (() => {
        firstClick.classList.add('back')
        secondClick.classList.add('back')
        firstClick.setAttribute('src' , './imgs/back-card.png')
        secondClick.setAttribute('src', './imgs/back-card.png')

    }, 1500)
}




    // if (!board.includes(clickedCArd.parentElement.firstElementChild.id)){
    //     board.push(clickedCArd.parentElement.firstElementChild.id )
    //     if (board.length !== 1 ) {
    //         // init()
    //         setTimeout(() => {
    //             showBack()
    //         }, 1000)
    //         function showBack(click){  
    //             clickedCArd.setAttribute('src', './imgs/back-card.png')
    //             clickedCArd.classList.add('back')
    //         }
    //         board= []
    //     } 
    // } 
    // else if (board.includes(clickedCArd.parentElement.firstElementChild.id)) {
    //     console.log('it is a match')
    //     board =[]
    // } 
    
}
