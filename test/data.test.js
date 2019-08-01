//import { updateProductViews } from '../src/data.js';
import store from '../src/store.js';

const test = QUnit.test;

QUnit.module('data');

store.storage = window.sessionStorage;

QUnit.testStart(() =>{
    store.storage.clear();
});
