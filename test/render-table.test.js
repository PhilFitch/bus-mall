// import choices from '../src/app.js';
// import productViews from'../src/populate-options.js';
import products from '../src/products.js';
import { renderTable, collectTableData } from '../src/render-table.js';


const test = QUnit.test;

QUnit.module('render-table');



let choices = [{ name: 'Bag', count: 3 }];
let productViews = [5];

test('returns table data', assert => {
    const expected = [{ image: 'assets/products/bag.jpg', name: 'Bag', views: 5, clicks: 3 }];
    const data = collectTableData(choices, productViews);
    
    assert.deepEqual(data, expected);
});


test('renders a table', assert => {
    const tableData = collectTableData(choices, productViews);
    let resultsTable = '<tbody id="results-table"></tbody>';
    const bagTable = renderTable(tableData, resultsTable).outerHTML;
    const expected = '<tr><td scope="row"><img src="assets/products/bag.jpg" alt="Bag"></td><td>5</td><td>3</td><td>⭐⭐⭐</td></tr>';
    
    assert.deepEqual(bagTable, expected);
});



// test('renders a table row', assert => {
//     let tableData = collectTableData(choices, productViews);
//     const expected = '<tr><td scope="row"><img src="assets/products/bag.jpg" alt="Bag"></td><td>5</td><td>3</td><td>⭐⭐⭐</td></tr>';
    
//     const exampleRow = renderTableRows(tableData);
    
//     assert.deepEqual(exampleRow, expected);
// });