const firstCard = Math.floor(Math.random() * 11) + 2
const secondCard = Math.floor(Math.random() * 11) + 2



const startGameBtn = document.querySelector('#startGame')
const messageEl = document.querySelector('#message-el')
const sumEl = document.querySelector('#sum-el')
const cardsEl = document.querySelector('#cards-el')
const newCardBtn = document.querySelector('#newcard-el')


startGameBtn.addEventListener('click', startGame)
newCardBtn.addEventListener('click', newCards)

// let firstCard = 10;
// let secondCard = 4;
let sum = firstCard + secondCard;
// let thirdCardSum = sum + thirdCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";






function startGame() {

   sumEl.textContent = `Sum: ${sum}`
   cardsEl.textContent = `Cards: ${firstCard} • ${secondCard}`


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
   // console.log("Drawing a new card from the deck!")


   // const newCard = Math.floor(Math.random() * 11) + 2

   sum += newCard
   // cardsEl.textContent = `Cards: ${firstCard} • ${secondCard}  • ${newCard}`

   startGame()




}

