//Codewars problem: Convert boolean values to strings 'Yes' or 'No'

/*

Complete the method that takes a boolean value and return
a "Yes" string for true, or a "No" string for false.

*/

//First create the function and insert the bool param because that's
//what you'll be testing

function boolToWord(bool) {
    //create an "if/else" statement to check whether the bool is
    //true or false so that you can assign the correct "word" to it
    if (bool === true) {
        //use the .toString method to convert the boolean to a string
        //and return the value "Yes" for true
        boolToWord.toString(true)
        return "Yes"
    } else {
        //And with the boolean false return "No"
        boolToWord.toString(false)
        return "No"
    }
}

//If you call boolToWord() without a boolean inserted it will
//return false and "No" by default.

//Codewars solution:

function boolToWord( bool ){
    if (bool === true) {
      boolToWord.toString(true)
      return "Yes"
    } else {
      boolToWord.toString(false)
      return "No"
    }
  }