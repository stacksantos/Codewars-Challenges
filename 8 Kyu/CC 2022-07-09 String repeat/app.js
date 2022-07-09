/*

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"


*/

function repeatStr (n, s) {
    //the repeat method takes a string and repeats it plus concatenates it together
    //you pass in how many times you want it to repeat inside the method, which is n in this case
    return s.repeat(n);
  }