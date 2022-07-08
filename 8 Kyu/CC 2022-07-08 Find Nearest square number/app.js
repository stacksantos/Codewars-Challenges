/*

kata: Find nearest square number

Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

disclaimer: this kata is poorly explained but I will attempt to complete it.

*/

function nearestSq(n){
    //to get what the kata is asking you have to use math... which I'm not fond of but here we are
    //First you have to get the square root of n and round it to the nearest integer
    //then simply multiply it by itself to get the squared.  that's the answer.  on to the next one.
    return  Math.round(Math.sqrt(n)) * Math.round(Math.sqrt(n));
  }