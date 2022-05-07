// Kata: sum without highest and lowest number

/* 

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
Example

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

*/


function sumArray(array) {
    //First we have to check whether the array is valid or not.  So we'll check see 1) it is an array && 2) that array is more than 1 item.
    if (array && array.length > 1) {
        // then we have to sort the array and remove the first and last items.  Slice works best in this case because there are only 2 items to remove.
        // do NOT forget to add the function within the sort or you'll get an error.
        let sortedArr = array.sort((a, b) => a - b).slice(1, -1);
        // then you have to ask for the array back with RETURN otherwise you'll get nothing back.
        // now in order to add all of the array items together you'll use the reduce method.
        // again DONT FORGET to use the function within reduce or you'll get an error.
        return sortedArr.reduce((a, b) => a + b, 0);
        // then everything ELSE we return 0;
      } else
        
        return 0;
  };