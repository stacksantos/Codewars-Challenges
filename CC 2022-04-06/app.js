//Codewars problem: Rock Paper Scissors!

/*

Let's play! You have to return which player won! In case of a draw return Draw!.
Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

*/

//First you have to create a function and define which outcomes are for each case.

//Define your players inside of the function. An "if/else" statement works good in this case.
//First I would define parameters where only p1 would win.

const rps = (p1, p2) => {
    if (p1 === 'rock' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock') {
        return "Player 1 wins!"}
        //then create the scenario that would call a draw.
         else if (p1 === p2) {
            return "It's a draw!" }
            //then all that's left is every other scenario where player 2 would have won.
             else {  return "Player 2 wins!"}
        };

//Solution submitted to codewars

const rps = (p1, p2) => {
    if (p1 === 'scissors' && p2 === 'paper' || p1 === 'rock' && p2 === 'scissors' || p1 === 'paper' && p2 === 'rock') {
        return 'Player 1 won!' } else if (p1 === p2) {
            return 'Draw!'} else {
                return 'Player 2 won!'}
  };