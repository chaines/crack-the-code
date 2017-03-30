var vows = require('vows'),
    assert = require('assert'),
    palindromePermutationCheck = require('../1.4.js')
    
vows.describe("Checking if a string is a permutation of a palindrome").addBatch({
    "When checking an even length palindrome: 'abccba'": {
        topic: function() { return palindromePermutationCheck('abccba') },
        "expect true": function(topic) { assert(topic) }
    },
    "When checking an odd length palindrome: 'abcba'": {
        topic: function() { return palindromePermutationCheck('abcba') },
        "expect true": function(topic) { assert(topic) }
    },
    "When checking an even length palindrome permutation: 'aabbccdd'": {
        topic: function() { return palindromePermutationCheck('aabbccdd') },
        "expect true": function(topic) { assert(topic) }
    },
    "When checking an odd length palindrome permutation: 'abbccdd'": {
        topic: function() { return palindromePermutationCheck('abbccdd') },
        "expect true": function(topic) { assert(topic) }
    },
    "When checking an even length almost palindrome: 'abcdccba'": {
        topic: function() { return palindromePermutationCheck('abcdccba') },
        "expect false": function(topic) { assert(!topic) }
    },
    "When checking an odd length almost palindrome: 'abcdeba'": {
        topic: function() { return palindromePermutationCheck('abcdeba') },
        "expect false": function(topic) { assert(!topic) }
    }
}).export(module)