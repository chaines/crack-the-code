var vows = require('vows'),
    assert = require('assert'),
    compressString = require('../1.6.js')
    
vows.describe("Simple String Compression").addBatch({
    "Example string: 'aabcccccaaa'": {
        topic: function() { return compressString('aabcccccaaa') },
        "expect 'a2b1c5a3'": function(topic) { assert.equal(topic, 'a2b1c5a3') }
    }
}).export(module)