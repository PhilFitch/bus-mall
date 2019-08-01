import store from './store.js';
import populateOptions from './populate-options.js';

const leftImage = document.getElementById('left-image');
const centerImage = document.getElementById('center-image');
const rightImage = document.getElementById('right-image');
const leftButton = document.getElementsByName('left-button');
const centerButton = document.getElementsByName('center-button');
const rightButton = document.getElementsByName('right-button');
const optionButtons = document.getElementsByClassName('button');

let turns = 0;
let choices = [];
let options = populateOptions();

function loadImages() {
    leftImage.src = options[0].img;
    centerImage.src = options[1].img;
    rightImage.src = options[2].img;
}
window.onload = loadImages();


optionButtons.addEventListener('click', () => {

});

leftButton.addEventListener('click', () => {
    console.log('left!');
});

centerButton.addEventListener('click', () => {
    console.log('center!');
    
});

rightButton.addEventListener('click', () => {
    console.log('right!');

});