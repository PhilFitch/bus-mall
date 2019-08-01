import products from '../src/products.js';
import store from '../src/store.js';
import { populateOptions } from '../src/render-options.js';

const test = QUnit.test;

QUnit.module('render-options');

test('puts three products in the options array', assert => {
    let options = populateOptions();
    assert.equal(options.length, 3);
});

