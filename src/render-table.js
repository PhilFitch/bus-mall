
import products from './products.js';

let resultsTable = document.getElementById('results-table');


export function collectTableData(choices, productViews) {
    let tableData = [];
    for(let i = 0; i < choices.length; i++) {
        let name = choices[i].name;
        let clicks = choices[i].count;
        for(let j = 0; j < products.length; j++) {
            if(name === products[j].name) {
                let image = products[j].img;
                let views = productViews[j];
                let rowData = { image: image, name: name, views: views, clicks: clicks };
                tableData.push(rowData);
            }
        }
    }
    return tableData;
}

// console.log(tableData);


export function renderTable(tableData, resultsTable) {
    
    for(let i = 0; i < tableData.length; i++) {
        let newRow = resultsTable.insertRow(-1);
        let cell1 = newRow.insertCell(-1);
        let cell2 = newRow.insertCell(-1);
        let cell3 = newRow.insertCell(-1);
        let cell4 = newRow.insertCell(-1);
        cell1.innerHTML = tableData[i].img;
        cell2.innerHTML = tableData[i].views;
        cell3.innerHTML = tableData[i].clicks;
        let percent = (tableData[i].clicks / tableData[i].views);
        if(percent < .25) {
            cell4.innerHTML = '⭐';
        }
        else if(.25 <= percent < .5) {
            cell4.innerHTML = '⭐⭐';
        }
        else if(.5 <= percent < .75) {
            cell4.innerHTML = '⭐⭐⭐';
        }
        else {
            cell4.innerHTML = '⭐⭐⭐⭐';
        } 
    }
    return resultsTable;
}


// export function renderTableRows(tableData) {
//     let tableRows = [];
    
//     for(let i = 0; i < tableData.length; i++) {
        
//         const tr = document.createElement('tr');
        
//         const tda = document.createElement('td');
//         tda.scope = 'row';
        
//         const img = document.createElement('img');
//         img.src = tableData[i].image;
//         img.alt = tableData[i].name;
//         tda.appendChild(img);
        
//         tr.appendChild(tda);
        
//         const tdb = document.createElement('td');
//         tdb.textContent = tableData[i].views;
//         tr.appendChild(tdb);
        
//         const tdc = document.createAttribute('td');
//         tdc.textContent = tableData[i].clicks;
//         tr.appendChild(tdc);
        
//         const percent = (tableData[i].clicks / tableData[i].views);
        
//         const tdd = document.createElement('td');
//         if(percent < .25) {
//             tdd.textContent = '⭐';
//         }
//         else if(.25 <= percent < .5) {
//             tdd.textContent = '⭐⭐';
//         }
//         else if(.5 <= percent < .75) {
//             tdd.textContent = '⭐⭐⭐';
//         }
//         else {
//             tdd.textContent = '⭐⭐⭐⭐';
//         }
//         tr.appendChild(tdd);
//         tableRows.push(tr);
//     }
//     return tableRows;
// }


// export function renderTable() {
//     renderTableRows();
// }