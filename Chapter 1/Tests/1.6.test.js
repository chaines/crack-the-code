var vows = require('vows'),
    assert = require('assert'),
    compressString = require('../1.6.js')
    
vows.describe("Simple String Compression").addBatch({
    "Example string: 'aabcccccaaa'": {
        topic: function() { return compressString('aabcccccaaa') },
        "expect 'a2b1c5a3'": function(topic) { assert.equal(topic, 'a2b1c5a3') }
    },
    "String that shouldn't be compresed: 'abcdef'": {
        topic: function() { return compressString('abcdef') },
        "expect uncompressed 'abcdef'": function(topic) { assert.equal(topic, 'abcdef') }
    },
    "String with the same character in multiple spots: 'aaaabbbbaaaa'": {
        topic: function() { return compressString('aaaabbbbaaaa') },
        "expect: 'a4b4a4'": function(topic) { assert.equal(topic, 'a4b4a4') }
    }
}).export(module)