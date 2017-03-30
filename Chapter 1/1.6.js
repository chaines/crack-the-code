/**
 * String Compression: Implement a method to perform basic string compression 
 * using the counts of repeated characters. For example, the string 
 * "aabcccccaaa" would become "a2b1c5a3". If the "compressed" string would not
 * be shorter than the original string, your method should return the original
 * string. You can assume the string has only uppercase and lowercase letters.
 **/
 
 
module.exports = function compressString(toCompress) {
    var output = "",
        count = 0,
        charIndex = 0,
        stop = toCompress.length -1;
        
    while(charIndex < stop) {
        if(toCompress.charAt(charIndex) == toCompress.charAt(charIndex + 1)) {
            count++;
        } else {
            output += toCompress.charAt(charIndex) + (count + 1);
            count = 0;
        }
        charIndex++;
    }
    output += toCompress.charAt(charIndex) + (count + 1);
    return (output.length >= toCompress.length) ? toCompress : output;
}