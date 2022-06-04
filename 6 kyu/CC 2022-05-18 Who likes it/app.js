
/*
Kata: Who likes it


You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

*/



// for this function we'll have to use if/else and concatenate strings
function likes(names) {
    if (names.length === 0) {
      return "no one likes this"
    } else if (names.length === 1) {
      return names[0] + " likes this"
    } else if (names.length === 2) {
        //don't forget to add the spaces so normal sentence structure is obtained
      return names[0] + " and " + names[1] + " like this"
    } else if (names.length === 3) {
      return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    } else {
        //for the last one to get the number you use names.length - 2 because we're including 2 names already so we need whatever is left after that
      return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this"
    }
  }