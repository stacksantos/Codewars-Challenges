/*

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

function removeChar(str){
    //there are many ways to finish this.  slice would be less lines of code
    //but takes a deeper understanding of array methods
    const newStr = str.split('')
    //pop takes off the last element of the array
     newStr.pop()
     //shift takes off the first
      newStr.shift()
      //and then join brings all the elements back together as a string
       return newStr.join('')
   };
