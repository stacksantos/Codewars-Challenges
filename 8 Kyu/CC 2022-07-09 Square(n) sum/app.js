/*

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


*/


function squareSum(numbers){
    //initial the result at 0
    let result = 0;
    //iterate through the numbers
    for(let i = 0; i < numbers.length; i++) {
    //use Math.pow to get the iteration squared
    //and add it to the result
     result += Math.pow(numbers[i], 2)  
    }
    return result
  }