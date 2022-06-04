// Codewars Kata: Counting sheep

/*

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined


*/

function countSheeps(arrayOfSheep) {
  //first I created a variable to hold the number of sheep that will later accumulate
  let numSheep = 0;
  //then I created a for loop to check every iteration of the array
  for (let i = 0; i <= arrayOfSheep.length; i++) {
    //when checking every iteration, if that iteration was true then it would
    if (arrayOfSheep[i] === true) {
      //add 1 to the sheep until the array was finished
      numSheep++
    }
  }
  //always remember to return or you wont get a value back
  return numSheep
  }