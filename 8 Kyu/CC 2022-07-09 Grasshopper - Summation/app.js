// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


var summation = function (num) {
    //initialize at 0
    let result = 0
    //iterate through
    for(let i = 0; i <= num; i++) {
    //add the iteration to the result
      result += i
    }
    return result
  }
