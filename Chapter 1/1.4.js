/** 
 * Palindrome Permutation: Given a string, write a function to check if it a
 * permutation of a palindrome... The palindrome does not need to be limited
 * to dictionary words
 **/
 
 //Runs in O(N) time and O(1) space
module.exports = function palindromePermutationCheck(toCheck) {
    var lettersInString = new Object();
    for(var i = 0; i < toCheck.length; i++) {
        var char = toCheck.charAt(i);
        if(char in lettersInString) {
            delete lettersInString[char];
        } else {
            lettersInString[char] = true;
        }
    }
    return (Object.keys(lettersInString).length <= 1);
}