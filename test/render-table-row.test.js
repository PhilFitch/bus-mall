// import choices from '../src/app.js';
// import productViews from'../src/populate-options.js';
// import products from '../src/products.js';
import { renderTableRows, collectTableData } from '../src/render-table-row.js';


const test = QUnit.test;

QUnit.module('render-table-row');



let choices = [{ name: 'Bag', count: 3 }];
let productViews = [5];

test('returns table data', assert => {
    const expected = [{ image: 'assets/products/bag.jpg', name: 'Bag', views: 5, clicks: 3 }];
    const data = collectTableData(choices, productViews);
    
    assert.deepEqual(data, expected);
});



test('renders a table row', assert => {
    
    const expected = '<tr><td scope="row"><img src="assets/products/bag.jpg" alt="Bag"></td><td>5</td><td>3</td><td>⭐⭐⭐</td></tr>';
    
    const exampleRow = renderTableRows(choices, productViews);

    assert.equal(exampleRow, expected);
});