var vows = require('vows'),
    assert = require('assert'),
    arePermutations = require('../1.2.js')
    
vows.describe("Checking if strings are permutations of each other").addBatch({
    "When comparing strings of unequal length": {
        topic: function() { return arePermutations("a", "aa") },
        "we should get false": function(topic) { assert(!topic) }
    },
    "When comparing strings of the same length, but different characters ['abc, 'ddd']": {
        topic: function() { return arePermutations("abc", "ddd") },
        "we should get false": function(topic) { assert(!topic) }
    },
    "When comparing the same string twice ['abcdef', 'abcdef']": {
        topic: function() { return arePermutations('abcdef', 'abcdef') },
        "we should get true": function(topic) { assert(topic) }
    },
    "When comparing strings that are almost permutations ['abcdefghi'], ['ihhfedcba']": {
        topic: function() { return arePermutations('abcdefghi', 'ihhfedcba') },
        "we should get false": function(topic) { assert(!topic) }
    },
    "When comparing a string reversed on itself ['abcdefdef','fedfedcba']": {
        topic: function() { return arePermutations('abcdefdef', 'fedfedcba') },
        "we should get true": function(topic) { assert(topic) }
    }
}).run()