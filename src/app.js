import store from './store.js';
import populateOptions from './populate-options.js';

const leftImage = document.getElementById('left-image');
const centerImage = document.getElementById('center-image');
const rightImage = document.getElementById('right-image');

let options = populateOptions();
console.log(options);
function loadImages() {
    leftImage.src = options[0].img;
    centerImage.src = options[1].img;
    rightImage.src = options[2].img;
}

window.onload = loadImages();
