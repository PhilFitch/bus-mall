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

function loadImages(options) {
    leftImage.src = options[0].img;
    centerImage.src = options[1].img;
    rightImage.src = options[2].img;
}
window.onload = loadImages(options);


leftButton.addEventListener('click', () => {
    event.preventDefault();
    turns++;
    const option = options[0];
    trackChoices(option);
    options = populateOptions();
    loadImages(options);
    console.log(turns);
});

centerButton.addEventListener('click', () => {
    event.preventDefault();
    turns++;
    const option = options[1];
    trackChoices(option);
    options = populateOptions();
    loadImages(options);
    console.log(turns);
    
});

rightButton.addEventListener('click', () => {
    event.preventDefault();
    turns++;
    const option = options[2];
    trackChoices(option);
    options = populateOptions();
    loadImages(options);
    console.log(turns);

});

function trackChoices(option) {
    for(let i = 0; i < choices.length; i++) {
        // const choice = choices[i];
        if(option.name === choices[i].name) {
            choices[i].count++;
            return;
        } 
    }
    const choice = { name: option.name, count: 1};
    choices.push(choice);
}




