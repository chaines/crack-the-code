function isUnique(string) {
    var inString = [];
    for(var i = 0; i < string.length; i++) {
        var c = string.charAt(i);
        if(inString[c])
            return false;
        else
            inString[c] = true;
    }
    return true
}

function isUniqueNoBuffer(string) {
    for(var i = 0; i < string.length; i++) {
        for(var k = i+1; k < string.length; k++){
            if(string.charAt(i) == string.charAt(k))
                return false;
        }
    }
    return true;
}

module.exports.isUnique = isUnique;
module.exports.isUniqueNoBuffer = isUniqueNoBuffer;
