// Kata: Opposites Attract

/*

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

*/

function lovefunc(flower1, flower2) {
    //first check if the flowers are even and store them in another variable
  let flowerEven = flower1 % 2 === 0;
  let flowerAlsoEven = flower2 % 2 === 0;
  //then if they equal each other (which they should not) return false
  if (flowerEven === flowerAlsoEven) {
    return false;
    //otherwise return true
  } else return true;
}
