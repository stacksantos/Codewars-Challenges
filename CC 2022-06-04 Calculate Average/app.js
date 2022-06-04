/*

Add Kata: Calculate Average

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/


function find_average(array) {
    //first we need to reduce the array. Set the initial value to 0
    let sum = 0;
    let reduced = array.reduce((a,b) => a + b, sum);
    //then we need to find the average, so we divide the sum by the number of items in the array
    let result = (reduced / array.length);
    //we need to make sure the array isn't empty
    if (array !== "") {
      return result
      //otherwise we return 0
    } else return 0;
  }