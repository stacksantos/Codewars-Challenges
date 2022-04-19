//Codewars kata: Sum of Positive

/* 

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/


function positiveSum(arr) {
    //first we create a variable to hold the sum of the positive integers
    let sum = 0;
    //then we create a forEach function to iterate through each number and check
    //to see if it is positive (greater than 0).  && if it is add it to the sum.
    arr.forEach(num => (num > 0) && (sum += num));
    //lastly we return the sum.
    return sum;
  }