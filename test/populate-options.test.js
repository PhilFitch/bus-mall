import populateOptions from '../src/populate-options.js';

const test = QUnit.test;

QUnit.module('render-options');

test('puts three products in the options array', assert => {
    let options = populateOptions();
    assert.equal(options.length, 3);
});

