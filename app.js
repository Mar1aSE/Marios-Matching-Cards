let flipped, matches, firstClick, secondClick;

const cardsEls = document.querySelectorAll('.back') 

const scoreEl = document.querySelector('.scoreBoard')

const cardEl = document.querySelectorAll('.card')

const resetBtnEl = document.querySelector('button').addEventListener("click", init)

function init() {

    flipped = false
    matches = 0 
    scoreEl.innerHTML = `Matches: ${matches}`
    setTimeout (() => {
        cardsEls.forEach((c) => {
            c.classList.remove('back')
            c.setAttribute('src', '') 
        }) 

    }, 2000)
setTimeout (() => {
cardsEls.forEach((c) => {
        c.classList.add('back')
        c.setAttribute('src', './imgs/back-card.png')
    }) 
},4000)
    cardsEls.forEach((c => c.addEventListener('click', clicked)))
}
init()

function clicked(event) {

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
}}

function check() {
    if (firstClick.id === secondClick.id) {
      firstClick.removeEventListener('clicked', clicked)
      secondClick.removeEventListener('clicked', clicked)
      matches++ 
      scoreEl.innerHTML = `Matches: ${matches}`
      if (matches === 6) {
        ALERT('YOU ARE A WINNER')
      }
    }else if (firstClick.id !== secondClick.id) {

    setTimeout (() => {
        firstClick.classList.add('back')
        secondClick.classList.add('back')
        firstClick.setAttribute('src' , './imgs/back-card.png')
        secondClick.setAttribute('src', './imgs/back-card.png')

    }, 1500)
}
}