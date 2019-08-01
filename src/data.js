import store from './store.js';
import products from './products.js';

export function updateProductViews(option) {
   
    let productViews = store.getProductViews();

    // if(!productViews.includes(option)) {
    //     productViews.push(option);
    // } else {
    //     let i = 0;
    //     for(i = 0; i < productViews.length; i++) {
    //         if(productViews[i].name === option.name) {
    //             productViews[i].views++;
    //         }
    //     }
    // }

    // return productViews;

    let i = 0;
    for(i = 0; i < productViews.length; i++) {
        if(productViews[i].name === option.name) {
            productViews[i].views++;
            return productViews;
        } else {
            productViews.push(option);
        }
    }
    return productViews;
}
