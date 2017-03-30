/**
 * URLify: Write a method to replace all spaces in a string with "%20". You may
 * assume that the string has sufficient space at the end to hold the additional
 * characters, and that you are given the "true" length of the string. 
 **/
 
 //length is only included to match the declaration in the book, unused
 module.exports = function URLify(string, length) { 
     var newString = string.replace(/\s/g, "%20"); 
     //Kinda cheeky, but reinventing the wheel isn't my forte
     return newString;
 }