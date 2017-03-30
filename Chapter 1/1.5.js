/** 
 * One Away: There are three types of edits that can be performed on strings:
 * insert a character, remove a character, or replace a character. Given two 
 * strings, write a function to check if they are one edit (or zero edits) away.
 **/
 
function oneAway(string1, string2) {
    var s1length = string1.length,
        s2length = string2.length;
    
    if(s1length = s2.length) {
        return oneReplace(string1, string2);
    } else if (s1length - s2length == 1) {
        return oneDeletion(string1, string2);
    } else if (s2length - s1length == 1) {
        return oneDeletion(string2, string1);
    } else {
        return false;
    }
}

function oneReplace(string1, string2) {
    for(var i = 0, editted = false; i < string1.length; i++) {
        if(string1.charAt(i) != string2.charAt(i)) {
            if(editted) {
                return false;
            } else {
                editted = true;
            }
        }
    }
    return true;
}

//string1.length == string2.length + 1
function oneDeletion(string1, string2) {
    for(var i = 0, editted = false; i < string1.length; i++) {
        if(editted && string1.charAt(i) != string2.charAt(i-1)) {
            return false;
        }
        if(!editted && string1.charAt(i) != string2.charAt(i)) {
            editted = true;
        }
    }
    return true;
}

module.exports = oneAway;
