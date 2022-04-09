//Codewars Kata: Even or Odd

/*

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/

//To solve this problem a simple if/else method can be used
function even_or_odd(number) {
  //first check to see if the number given is divisible by an even number like 2
  // using the % character will give us the remainder of 2 numbers being divided
  if (number % 2 === 0) {
      //if it is divisible by 2 then it is even
      return "Even"}
      //otherwise it will return odd
      else
      return "Odd"
  }
  // we could use an else if method as well for all other edge cases but it's not necessary