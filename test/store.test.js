import store from '../src/store.js';
import products from '../src/products.js';


const test = QUnit.test;

QUnit.module('Store');

store.storage = window.sessionStorage;

QUnit.testStart(() =>{
    store.storage.clear();
});

test('storage is sessionStorage', assert => {
    assert.equal(store.storage === window.sessionStorage, true);
});

test('saves and gets', assert => {
    const dog = { breed: 'schnauzer' };
    const key = 'dog';

    store.save(key, dog);
    const gotDog = store.get('dog');

    assert.deepEqual(dog, gotDog);
});

test('gets bootstrapped default products', assert => {
    const gotProducts = store.listProducts();
    const expected = products;

    assert.deepEqual(gotProducts, expected);
});

test('returns empty array for options', assert => {
    const gotOptions = store.getOptions();

    assert.deepEqual(gotOptions, []);
});


test('returns product by index', assert => {
    const index = 0
    const product = store.getProduct(index);

    assert.deepEqual(products[0], product);
});