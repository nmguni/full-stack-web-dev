let num1 = 8
let num2 = 2

document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

const addButton = document.getElementById("addButton")
const subtractButton = document.getElementById("subtractButton")
const divideButton = document.getElementById("divideButton")
const multiplyButton = document.getElementById("multiplyButton")
const total = document.getElementById("total")



addButton.addEventListener('click', add)
subtractButton.addEventListener('click', subtract)
divideButton.addEventListener('click', divide)
multiplyButton.addEventListener('click', multiply)

function add() {
   let result = total.textContent = num1 + num2
}
function subtract() {
   total.textContent = num1 - num2
}
function divide() {
   total.textContent = num1 / num2
}
function multiply() {
   total.textContent = num1 * num2
}