/*

Some new animals have arrived at the zoo. 
The zoo keeper is concerned that perhaps the animals do not have the right tails. 
To help her, you must correct the broken function to make sure that the second argument (tail), 
is the same as the last letter of the first argument (body) - 
otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.

*/

//There were a lot of fundamental syntax errors that needed to be corrected.
//otherwise the function itself worked once they were fixed.
function correctTail(bod, tail) {
    sub = bod.substr(bod.length - tail.length)
    
    if (sub === tail) {
      return true
    }
    else 
      return false
    };