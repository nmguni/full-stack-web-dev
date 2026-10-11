const playerOneScore = document.querySelector('#player-one-Score')
const playerTwoScore = document.querySelector('#player-two-Score')
const dropDown = document.querySelector('#quantity')
const playerOne = document.querySelector('#player-one')
const playerTwo = document.querySelector('#player-two')
const reset = document.querySelector('#reset')
const quantity = document.querySelector('#quantity')
const selectedIndex = quantity.options



reset.addEventListener("click", resetScore)




let p1Score = 0
let p2Score = 0
let winningScore = 5
let isGameOver = false

playerOne.addEventListener("click", function p1Button() {
   if (!isGameOver) {
      p1Score += 1
      if (p1Score === winningScore) {
         isGameOver = true
         playerOneScore.classList.add('winner')
      }
      playerOneScore.textContent = p1Score
   }
})



playerTwo.addEventListener("click", function p2Button() {
   if (!isGameOver) {
      p2Score += 1
      if (p2Score === winningScore) {
         isGameOver = true
      }
      playerTwoScore.textContent = p2Score
   }
})



quantity.addEventListener('change', function () {
   winningScore = parseInt(this.value)

   resetScore()


})





function resetScore() {

   isGameOver = false

   let p1Score = 0
   let p2Score = 0

   playerOneScore.textContent = 0
   playerTwoScore.textContent = 0
}


