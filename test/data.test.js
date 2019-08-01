import { updateProductViews } from '../src/data.js';
import store from '../src/store.js';

const test = QUnit.test;

QUnit.module('data');

store.storage = window.sessionStorage;

QUnit.testStart(() =>{
    store.storage.clear();
});

test('adds item to productViews', assert => {
    const option = { name: 'Chair', views: 1 };
    const expected = [{ name: 'Chair', views: 1 }];
    let productViews = updateProductViews(option);

    assert.deepEqual(productViews, expected);
});

// test('increments item views', assert => {
//     const option = { name: 'Chair', views: 1 };
//     const expected = [{ name: 'Chair', views: 2 }];
//     let productViews = [{ name: 'Chair', views: 1 }];
    
//     if(!productViews.includes(option)) {
//         productViews.push(option);
//         console.log(productViews, option);
//     // } else {
//     //     let i = 0;
//     //     for(i = 0; i < productViews.length; i++) {
//     //         if(productViews[i].name === option.name) {
//     //             productViews[i].views++;
//     //         }
//     //     }
//     }

//     assert.deepEqual(expected, productViews);
// });