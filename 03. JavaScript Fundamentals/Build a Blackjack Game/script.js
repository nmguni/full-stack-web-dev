const firstCard = Math.floor(Math.random() * 11) + 2
const secondCard = Math.floor(Math.random() * 11) + 2

let sum = firstCard + secondCard


const blackJack = (sum) => {
   if (sum < 21) {
      return "Do you want to draw a new card"
   } else if (sum === 21) {
      return "You've got Blackjack!"
   } else if (sum > 21) {
      return "You're out of the game!"
   }
}

blackJack(sum)