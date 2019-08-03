import store from './store.js';
import populateOptions from './populate-options.js';

const leftImage = document.getElementById('left-image');
const centerImage = document.getElementById('center-image');
const rightImage = document.getElementById('right-image');
const leftButton = document.getElementById('left-button');
const centerButton = document.getElementById('center-button');
const rightButton = document.getElementById('right-button');
const gameSection = document.getElementById('choices');
const resultsSection = document.getElementById('results');
const startOver = document.getElementById('refresh');
const leftFig = document.getElementById('left-fig');
const centerFig = document.getElementById('center-fig');
const rightFig = document.getElementById('right-fig');

let turns = 0;
let choices = [];
let options = populateOptions();
// console.log(resultsSection);
resultsSection.classList.add('hidden');

function loadImages(options) {
    leftImage.src = options[0].img;
    leftImage.alt = options[0].name;
    leftFig.textContent = options[0].name;
    centerImage.src = options[1].img;
    centerImage.alt = options[1].name;
    centerFig.textContent = options[1].name;
    rightImage.src = options[2].img;
    rightImage.alt = options[2].name;
    rightFig.textContent = options[2].name;
}
window.onload = loadImages(options);



leftButton.addEventListener('click', () => {
    event.preventDefault();
    turns++;
    const option = options[0];
    trackChoices(option);
    if(turns < 5) {
        options = populateOptions();
        loadImages(options);
    } else {
        gameSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
    }
    console.log(choices);
});

centerButton.addEventListener('click', () => {
    event.preventDefault();
    turns++;
    const option = options[1];
    trackChoices(option);
    if(turns < 5) {
        options = populateOptions();
        loadImages(options);
    } else {
        gameSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
    }
    console.log(choices);
});

rightButton.addEventListener('click', () => {
    event.preventDefault();
    turns++;
    const option = options[2];
    trackChoices(option);
    if(turns < 5) {
        options = populateOptions();
        loadImages(options);
    } else {
        gameSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
    }
    console.log(choices);
});


function trackChoices(option) {
    for(let i = 0; i < choices.length; i++) {
        if(option.name === choices[i].name) {
            choices[i].count++;
            return;
        } 
    }
    const choice = { name: option.name, count: 1 };
    choices.push(choice);
}

// export default choices;

startOver.addEventListener('click', () => {
    window.location.reload(true);
});


