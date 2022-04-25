// Codewars kata: Convert Number to Reversed Array of Digits

/*

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example:

348597 => [7,9,5,8,4,3]
0 => [0]

*/


/*
This was the original format for the question

function digitize(n) {
  //your code here
}
*/

// I converted it to an arrow function to make it more streamline

const digitize = n => n.toString(10).split("").map(Number).reverse();

//first I used the toString method to convert the number into a string
//then the split method separates them into individual strings
//the map method will iterate for each item in the string and turn it back into a Number
//and finally the whole thing is reversed