import store from './store.js';
import populateOptions from './populate-options.js';

const leftImage = document.getElementById('left-image');
const centerImage = document.getElementById('center-image');
const rightImage = document.getElementById('right-image');
const leftButton = document.getElementById('left-button');
const centerButton = document.getElementById('center-button');
const rightButton = document.getElementById('right-button');

let turns = 0;
let choices = [];
let options = populateOptions();

function loadImages() {
    leftImage.src = options[0].img;
    centerImage.src = options[1].img;
    rightImage.src = options[2].img;
}
window.onload = loadImages();


leftButton.addEventListener('click', () => {
    event.preventDefault();
    console.log('left!');
});

centerButton.addEventListener('click', () => {
    event.preventDefault();
    console.log('center!');
    
});

rightButton.addEventListener('click', () => {
    event.preventDefault();
    console.log('right!');

});