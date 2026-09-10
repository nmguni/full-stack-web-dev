const increaseScoreOne = document.getElementById("increaseScoreOne")
const increaseScoreTwo = document.getElementById("increaseScoreTwo")
const increaseScoreThree = document.getElementById("increaseScoreThree")

const increaseScoreOneGuest = document.getElementById("increaseScoreOneGuest")
const increaseScoreTwoGuest = document.getElementById("increaseScoreTwoGuest")
const increaseScoreThreeGuest = document.getElementById("increaseScoreThreeGuest")

const reSetScore = document.getElementById("reSetScore")

const guestScore = document.getElementById("guestScore")
const homeScore = document.getElementById("homeScore")


const home = document.querySelectorAll("button")






increaseScoreOne.addEventListener("click", addOne)
increaseScoreTwo.addEventListener("click", addTwo)
increaseScoreThree.addEventListener("click", addThree)

increaseScoreOneGuest.addEventListener("click", addOneGuest)
increaseScoreTwoGuest.addEventListener("click", addTwoGuest)
increaseScoreThreeGuest.addEventListener("click", addThreeGuest)

reSetScore.addEventListener("click", resetScore)

let homeCount = 0;
let guestCount = 0;

function addOne() {
   homeScore.textContent = 0;
   homeCount++
   homeScore.textContent = homeCount
}
function addTwo() {
   homeScore.textContent = 0;
   homeCount += 2
   homeScore.textContent = homeCount
}
function addThree() {
   homeScore.textContent = 0;
   homeCount += 3
   homeScore.textContent = homeCount
}

//  GUEST

function addOneGuest() {
   guestScore.textContent = 0;
   guestCount++
   guestScore.textContent = guestCount
}
function addTwoGuest() {
   guestScore.textContent = 0;
   guestCount += 2
   guestScore.textContent = guestCount
}
function addThreeGuest() {
   guestScore.textContent = 0;
   guestCount += 3
   guestScore.textContent = guestCount
}



function resetScore() {
   guestScore.textContent = 0
   homeScore.textContent = 0
}



// addOne()