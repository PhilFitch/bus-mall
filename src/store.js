import products from '../src/products.js';

const store = {
    storage: window.localStorage,
   
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    
    get(key) {
        const json = store.storage.getItem(key);
        const gotItem = JSON.parse(json);
        return gotItem;
    },
    
    listProducts() {
        let gotProducts = store.get('products');
        if(!gotProducts) {
            store.save('products', products);
            gotProducts = products;
        }
        return products;
    },
    
    getOptions() {
        let gotOptions = store.get('Options');
        if(!gotOptions) {
            gotOptions = [];
        }
        return gotOptions;
    },
   
    getProductViews() {
        let productViews = store.get('productViews');
        if(!productViews) {
            productViews = [];
        }
        return productViews;
    },

    getProduct(index) {
        let gotProduct = this.listProducts();
        return gotProduct[index];
    }
};

export default store;