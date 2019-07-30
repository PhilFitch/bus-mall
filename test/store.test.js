import store from '../src/store';


const test = QUnit.test;

QUnit.module('Module Name');

store.storage = window.sessionStorage;

QUnit.testStart(() =>{
    store.storage.clear();
});

test('storage is sessionStorage', assert => {
    assert.equal(store.storage === window.sessionStorage, true);
});
