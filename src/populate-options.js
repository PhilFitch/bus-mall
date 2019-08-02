import products from './products.js';
import store from './store.js';


let bagViews = 0;
let bananaViews = 0;
let bathroomViews = 0;
let bootsViews = 0;
let breakfastViews = 0;
let bubblegumViews = 0;
let chairViews = 0;
let cthulhuViews = 0;
let dogDuckViews = 0;
let dragonViews = 0;
let penViews = 0;
let petSweepViews = 0;
let scissorsViews = 0;
let sharkViews = 0;
let sweepViews = 0;
let tauntaunViews = 0;
let unicornViews = 0;
let usbViews = 0;
let waterCanViews = 0;
let wineGlassViews = 0;






function getRandomProduct() {
    let index = Math.floor(Math.random() * 20);
    return products[index];
}

export function populateOptions() {
    let previousOptions = store.getOptions(); //previous 3 products
    let newOptions = [];
    while(newOptions.length < 3) {
        let product = getRandomProduct();
        
        if(!newOptions.includes(product) && !previousOptions.includes(product)) {
            newOptions.push(product);
        }
            
        switch(product.code) {
            case ('bag'): 
                bagViews++;
                break;
            case ('banana'):
                bananaViews++;
                break;
            case ('bathroom'):
                bathroomViews++;
                break;
            case ('boots'):
                bootsViews++;
                break;
            case ('breakfast'):
                breakfastViews++;
                break;
            case ('bubblegum'):
                bubblegumViews++;
                break;
            case ('chair'):
                chairViews++;
                break;
            case ('cthulhu'):
                cthulhuViews++;
                break;
            case ('dog-duck'):
                dogDuckViews++;
                break;
            case ('dragon'):
                dragonViews++;
                break;
            case ('pen'):
                penViews++;
                break;
            case ('pet-sweep'):
                petSweepViews++;
                break;
            case ('scissors'):
                scissorsViews++;
                break;
            case ('shark'):
                sharkViews++;
                break;
            case ('sweep'):
                sweepViews++;
                break;
            case ('tauntaun'):
                tauntaunViews++;
                break;
            case ('unicorn'):
                unicornViews++;
                break;
            case ('usb'):
                usbViews++;
                break;
            case ('water-can'):
                waterCanViews++;
                break;
            case ('wine-glass'):
                wineGlassViews++;
                break;
        }
            
    }
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

    console.log(productViews);
    store.save('Options', newOptions);
    return newOptions;
}

export default populateOptions;