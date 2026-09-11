const startGameBtn = document.querySelector('#startGame')
const messageEl = document.querySelector('#message-el')
const sumEl = document.querySelector('#sum-el')
const cardsEl = document.querySelector('#cards-el')
const newCardBtn = document.querySelector('#newcard-el')
const playerEl = document.querySelector('#player-el')


const player = {
   name: 'Per',
   chips: 145
}



playerEl.textContent = `${player.name}  $${player.chips}`

startGameBtn.addEventListener('click', startGame)
newCardBtn.addEventListener('click', newCards)


let sum = 0;
let cards = []
let hasBlackJack = false;
let isAlive = true;
let message = "";



function getRandomCard() {
   let randomNumer = Math.floor(Math.random() * 13) + 1
   if (randomNumer > 10) {
      return 10
   } else if (randomNumer === 1) {
      return 11
   } else {
      return randomNumer
   }
}


function startGame() {
   isAlive = true
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards = [firstCard, secondCard]
   sum = firstCard + secondCard
   renderGame()

}

function renderGame() {

   cardsEl.textContent = "Cards: "
   for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
   }

   sumEl.textContent = "Sum: " + sum

   if (sum <= 20) {
      message = "Do you want to draw a new card?"

   } else if (sum === 21) {
      message = "You've got Blackjack!"
      hasBlackJack = true
   } else {
      message = "You're out of the game!"
      isAlive = false
   }

   messageEl.classList.add('focus')
   messageEl.textContent = message
}



function newCards() {
   // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
   let card = getRandomCard()
   sum += card
   cards.push(card)
   renderGame()

}

