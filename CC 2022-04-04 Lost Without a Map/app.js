//Codewars problem: Lost Without a Map

/*

Given an array of integers, return a new array with each value doubled.

//For example:

[1, 2, 3] --> [2, 4, 6]

*/

//Q: Is it always going to be integers? are we going to be given any special characters? Are empty arrays ever given?

//First create the function and insert a value for arr (which is short for arr but you can call it anything)

function doubled(arr){
    //This "if" is optional if you want to test for undefined arrays
    if(arr.length === 0 || arr.length === undefined) {
        console.log('There is no array')
    } else {
        //This is the only code needed inside of the function "doubled"
        //We use map to iterate for each value inside the array
        //Then create an arrow function with arr and multiply it by 2.
        return arr.map(arr => arr*2)
    }
}

/* 

The basic function would be written as

    function doubled(arr){
        return arr.map(arr => arr*2)
    }

When arr = [1,2,3] it will return [2,4,6]

*/
//Answer to Codewars kata "Lost Without a Map"
function maps(x){
    return x.map(x => x*2)
  }