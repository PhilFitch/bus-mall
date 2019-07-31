import products from './products.js';
import store from './store.js';

export function getRandomProduct() {
    let index = Math.floor(Math.random() * 20);
    
    return products[index];
}

export function populateOptions() {
    let options = store.getOptions();
    let duplicates = store.getDuplicates();
    let loops = 0;
    while(loops < 3) {
        let product = getRandomProduct();
        
        if(!options.includes(product) && !duplicates.includes(product)) {
            options.push(product);
            loops++;
        }
    }
    store.save('Options', options);
    return options;
}