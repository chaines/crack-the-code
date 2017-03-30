var vows = require('vows'), 
    assert = require('assert'),
    URLify = require('../1.3.js')
    
vows.describe("URLifying strings").addBatch({
    "When URLifying a string with no spaces: 'abcdefgh'": {
        topic: function() { return URLify('abcdefgh') },
        "expect the same string in return": function(topic) {
            assert.equal(topic, "abcdefgh")
        }
    },
    "When URLifying a string with multiple consecutive spaces: 'a  bcd'": {
        topic: function() { return URLify('a  bcd') },
        "expect the function to urlify both spaces: 'a%20%20bcd'": 
            function(topic) {
                assert.equal(topic, "a%20%20bcd")
            }
    },
    "When URLifying a string already URLified: 'a%20%20bcd'": {
        topic: function() { return URLify('a%20%20bcd') },
        "expect the same string in return: 'a%20%20bcd'": 
            function(topic) {
                assert.equal(topic, "a%20%20bcd")
            }
    },
    "When URLifying a string with multiple spaces: 'a b c d'": {
        topic: function() { return URLify('a b c d') },
        "expect properly escaped string: 'a%20b%20c%20d'": 
            function(topic) {
                assert.equal(topic, "a%20b%20c%20d")
            }
    }
}).export(module)