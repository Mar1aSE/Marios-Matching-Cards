let board, flipped, matches;

const cardsEls = document.querySelectorAll('.back') 
// console.log(cardsEls)
const scoreEl = document.querySelector('.scoreBoard')

const resetBtnEl = document.querySelector('button').addEventListener("click", init)
function init() {
    board = []
    flipped = false
    matches = 0 
cardsEls.forEach((c => c.addEventListener('click', firstCard)))
}
init()


//clickedCArd.parentElement.firstElementChild.id 

function firstCard(event) {
let clickedCArd = event.target

console.dir(clickedCArd)
clickedCArd.classList.remove('back')
clickedCArd.setAttribute('src', '')

check()
function check() {
   if (!board.includes(clickedCArd.parentElement.firstElementChild.id)){
        board.push(clickedCArd.parentElement.firstElementChild.id )
        if (board.length !== 1 ) {
            // init()
         setTimeout(() => {
            showBack()
         }, 1000)
         function showBack(click){  
            clickedCArd.setAttribute('src', './imgs/back-card.png')
         clickedCArd.classList.add('back')
          }
         board= []
        } 
    } 
    else if (board.includes(clickedCArd.parentElement.firstElementChild.id)) {
        console.log('it is a match')
        board =[]
    } 

}
} 