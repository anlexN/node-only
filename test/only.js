const only = require('..');
const assert = require('assert').strict;

const obj = {
    name: 'tobi',
    last: 'holowaychuk',
    email: 'tobi@learnboost.com',
    _id: '12345'
};

const expected = {
    name: 'tobi',
    last: 'holowaychuk',
    email: 'tobi@learnboost.com'
};

describe('only(obj, keys)', function () {

    it('given an array', function () {
        assert(only(obj, ['name', 'email', 'last']), expected);
    })

    it('given an string', function () {
        assert(only(obj, 'name email last'), expected);
    })

    it('should omit undefineds', function () {
        assert(only({}, 'foo bar baz'), expected);
    })
})
