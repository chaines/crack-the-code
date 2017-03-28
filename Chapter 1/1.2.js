/**
 * Check Permutations: Given two strings, write a method to decide if one is 
 * a permutation of the other.
 **/
 
module.exports = function arePermutations(s1, s2) {
    if(s1.length != s2.length) {
        return false;
    }
    var inString = [];
    for(var i = 0; i < s1.length; i++) {
        if(s1[i] != s2[i]) {
            inString[s1[i]] ? inString[s1[i]] += 1 : inString[s1[i]] = 1;
            inString[s2[i]] ? inString[s2[i]] -= 1 : inString[s2[i]] = -1;
        }
    }
    for(var char in inString) {
        if(inString[char] != 0)
            return false;
    }
    return true;
}
