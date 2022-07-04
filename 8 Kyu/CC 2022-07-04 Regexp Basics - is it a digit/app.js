/*

Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

*/

//this kata is not for beginners.  And also it is structured poorly. And also I hate regex.
String.prototype.digit = function() {
    const regex = /^\d$/g;
    return regex.test(this)
  };