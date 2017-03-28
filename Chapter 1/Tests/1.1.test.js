var vows = require('vows'),
    assert = require('assert'),
    testFuncs = require('../1.1.js'),
    isUnique = testFuncs.isUnique,
    isUniqueNoBuffer = testFuncs.isUniqueNoBuffer
    
    
exports.isunique = vows.describe("String Uniqueness").addBatch({
    "when checking uniqueness of \"abcdefdef\"": {
        topic: function() { return isUnique("abcdefdef") },
        
        "we get false": function(topic) { assert(!topic) }
    },
    
    "when checking uniqueness of \"abcdefghi\"": {
        topic: function() { return isUnique("abcdefghi") },
        
        "we get true": function(topic) { assert(topic) }
    }
})
    
exports.isuniquenobuffer = vows.describe("String Uniqueness Without Buffer").addBatch({
    "when checking uniqueness of \"abcdefdef\"": {
        topic: function() { return isUniqueNoBuffer("abcdefdef") },
        
        "we get false": function(topic) { assert(!topic) }
    },
    
    "when checking uniqueness of \"abcdefghi\"": {
        topic: function() { return isUniqueNoBuffer("abcdefghi") },
        
        "we get true": function(topic) { assert(topic) }
    }
})