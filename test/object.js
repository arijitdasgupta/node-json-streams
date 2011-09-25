var ParseStream = require('../lib/ParseStream');
var assert = require('assert');

var json = JSON.stringify({
    coucou: "salut",
    number: 8,
    bool: true,
    meh: null,
    nested_array: [
        {
            float: 1000.1,
            string: "a long string ? \" coucou 'oui oui non non' \n\r",
            nothingmuch: null
        },
        5,
        8,
        "yet another string"
    ]
});
/*
json = JSON.stringify([
    'coucou',
    'salut',
    8,
    true,
    [
        10,
        false
    ]
]);
*/
console.log('parsing %s\n\n', json);

var p = new ParseStream();
p.on('end', function(o) {
    console.log('\nresult object', o);
    var res = JSON.stringify(o);
    assert.equal(res, json, "the objects are not identical");
    console.log('ignored', this._ignored);
    console.log('queue', this._queue);
});
p.end(json);
