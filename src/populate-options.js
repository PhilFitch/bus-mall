import products from './products.js';
import store from './store.js';


let bagViews = [];
let bananaViews = [];
let bathroomViews = [];
let bootsViews = [];
let breakfastViews = [];
let bubblegumViews = [];
let chairViews = [];
let cthulhuViews = [];
let dogDuckViews = [];
let dragonViews = [];
let penViews = [];
let petSweepViews = [];
let scissorsViews = [];
let sharkViews = [];
let sweepViews = [];
let tauntaunViews = [];
let unicornViews = [];
let usbViews = [];
let waterCanViews = [];
let wineGlassViews = [];

let productViews = [
    bagViews,
    bananaViews,
    bathroomViews,
    bootsViews,
    breakfastViews,
    bubblegumViews,
    chairViews,
    cthulhuViews,
    dogDuckViews,
    dragonViews,
    penViews,
    petSweepViews,
    scissorsViews,
    sharkViews,
    sweepViews,
    tauntaunViews,
    unicornViews,
    usbViews,
    waterCanViews,
    wineGlassViews,
];


function getRandomProduct() {
    let index = Math.floor(Math.random() * 20);
    return products[index];
}

export function populateOptions() {
    let previousOptions = store.getOptions(); //previous 3 options
    let newOptions = [];
    while(newOptions.length < 3) {
        let product = getRandomProduct();
        
        if(!newOptions.includes(product) && !previousOptions.includes(product)) {
            newOptions.push(product);
            
            switch(product.code) {
                case ('bag'): 
                    bagViews.push('view');
                    break;
                case ('banana'):
                    bananaViews.push('view');
                    break;
                case ('bathroom'):
                    bathroomViews.push('view');
                    break;
                case ('boots'):
                    bootsViews.push('view');
                    break;
                case ('breakfast'):
                    breakfastViews.push('view');
                    break;
                case ('bubblegum'):
                    bubblegumViews.push('view');
                    break;
                case ('chair'):
                    chairViews.push('view');
                    break;
                case ('cthulhu'):
                    cthulhuViews.push('view');
                    break;
                case ('dog-duck'):
                    dogDuckViews.push('view');
                    break;
                case ('dragon'):
                    dragonViews.push('view');
                    break;
                case ('pen'):
                    penViews.push('view');
                    break;
                case ('pet-sweep'):
                    petSweepViews.push('view');
                    break;
                case ('scissors'):
                    scissorsViews.push('view');
                    break;
                case ('shark'):
                    sharkViews.push('view');
                    break;
                case ('sweep'):
                    sweepViews.push('view');
                    break;
                case ('tauntaun'):
                    tauntaunViews.push('view');
                    break;
                case ('unicorn'):
                    unicornViews.push('view');
                    break;
                case ('usb'):
                    usbViews.push('view');
                    break;
                case ('water-can'):
                    waterCanViews.push('view');
                    break;
                case ('wine-glass'):
                    wineGlassViews.push('view');
                    break;
            }
        }
    }
    console.log(productViews);
    store.save('Options', newOptions);
    return newOptions;
}

export default populateOptions;