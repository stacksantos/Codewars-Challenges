/*
Simple, remove the spaces from the string, then return the resultant string.

*/

function noSpace(x){
    //use replace with regex.  the \s targets all whitespace, the '' replaces it with nothing
    return x.replace(/\s/g, '')
    }