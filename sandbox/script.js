// const exerciseTimeMins = 70


// if (exerciseTimeMins < 30) {
//    message = 'You need to try harder!'
// } else {
//    message = "Doing Good!"

// }
// const message = exerciseTimeMins < 30 ? 'You need to try harder!' : "Doing Good!"
// ---------------------------------------------------


// if (exerciseTimeMins < 30) {
//    message = 'You need to try harder!';
// } else if (exerciseTimeMins < 60) {
//    message = "Doing Good!"
// } else {
//    message = 'Excellent!!'
// }

// ******* convert into a ternary operator *******
// condition ? expression : expression 

// const message = exerciseTimeMins < 30 ? 'You need to try harder!'
//    : exerciseTimeMins < 60 ? "Doing Good!"
//       : 'Excellent!!'



// const playerGuess = 7
// const correctAnswer = 6

/*

Challenge 
1. Refactor the if else statement to use a ternary operator 

condition ? expression_if_true : expression_if_false;

*/

// let message = ''
// if (playerGuess === correctAnswer) {
//    message = 'correct'
// } else {
//    message = 'wrong'
// }

// const message = playerGuess === correctAnswer ? 'Correct' 
// : playerGuess > correctAnswer ? 'Guess is too high' 
// : 'Too Low'

// console.log(message);

/*

- price List - 
coffie $2
sandwitchs $5
Salad $4
lemon cake $3
*/


function selectItem(item) {
   let price = 0;

   switch (item) {
      case 'Coffie':
         price = 2
      case 'Sandwiths':
         price = 5
      case 'salad':
         price = 4
      case 'Lemon Cake':
         price = 3
         break

   }

   return `You selected ${item}. That will be $${price}`
}
console.log(selectItem('Salad'));
