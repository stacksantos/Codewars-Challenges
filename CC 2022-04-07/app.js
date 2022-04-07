//Codewars kata: Personalized message

/*

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
case 	                 return
name    equals owner 	'Hello boss'
otherwise 	            'Hello guest'

*/

//This is a fairly simple kata involving an if/else statement.
//If the name is equal to 'owner' then it will return 'Hello boss'.
//All other cases will return 'Hello guest'

function greet (name, owner) {
    if (name === owner) {
      return 'Hello boss'
      }
      else
      return 'Hello guest' 
  }