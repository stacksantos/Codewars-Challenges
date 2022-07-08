/*

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

    if x > y: 3 points
    if x < y: 0 point
    if x = y: 1 point

Notes:

    there are 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4

*/
//the hardest part about this was figuring out how to get the match values out of 1:2

function points(games) {
    //initialize the total to 0
    let total = 0;
    // then create a for loop to iterate through each game
    for (const game of games) {
        //split the game with : and assign each number a value
      const [a,b] = game.split(":");
      //then it's a simple if/else statement to add up the matches
      if(a > b) {
        total += 3
      } else if (a === b) {
        total += 1
      }
    }
    //return the total and you're done.
    return total
    
  }