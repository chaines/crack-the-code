var vows = require('vows'),
    assert = require('assert'),
    oneAway = require('../1.5.js')
    
vows.describe("The One Away function").addBatch({
    "When comparing the same string: 'abcdef', 'abcdef'": {
        topic: function() { return oneAway('abcdef', 'abcdef') },
        "expect true": function(topic) { assert(topic) }
    },
    "When comparing strings of wildly different length: 'a', 'abcd'": {
        topic: function() { return oneAway('a', 'abcd') },
        "expect false": function(topic) { assert(!topic) }
    },
    "When comparing strings one edit away: 'abcd', 'accd'": {
        topic: function() { return oneAway('abcd', 'accd') },
        "expect true": function(topic) { assert(topic) }
    },
    "When comparing strings 2 edits away: 'abbd', 'accd'": {
        topic: function() { return oneAway('abbd', 'accd') },
        "expect false": function(topic) { assert(!topic) }
    },
    "When comparing strings one deletion away: 'abccde', 'abcde'": {
        topic: function() { return oneAway('abccde', 'abcde') },
        "expect true": function(topic) { assert(topic) }
    },
    "When comparing strings one insertion away: 'abcde', 'aabcde'": {
        topic: function() { return oneAway('abcde', 'aabcde') },
        "expect true": function(topic) { assert(topic) }
    },
    "When comparing strings two insertions away: 'abcde', 'aabcdee'": {
        topic: function() { return oneAway('abcde', 'aabcdee') },
        "expect false": function(topic) { assert(!topic) }
    }
})