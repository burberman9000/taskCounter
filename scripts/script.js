const number = document.querySelector('.counter__number');
const increaseButton = document.querySelector('.counter__button--increase');
const themeSwitcher = document.querySelector('.counter__button--theme-switcher');
const resetButton = document.querySelector('.counter__button--reset');
const body = document.querySelector('body');
let initNum = 0;
let lightMode = false;

number.innerHTML = initNum;

const switcher = () => {
    initNum++;
    localStorage.setItem('score', initNum);
    number.innerHTML = initNum;
    if (initNum < 10) {
        number.style.color = 'red';
    } else if (initNum >= 10 && initNum <= 20) {
        number.style.color = 'orange';
    } else if (initNum >= 20 && initNum <= 30) {
        number.style.color = 'yellow';
    } else if (initNum >= 30 && initNum <= 48) {
        number.style.color = 'blue';
    } else {
        number.style.color = 'lightblue';
    }
};

increaseButton.addEventListener('click', switcher);

const themeApplier = () => {
    lightMode = !lightMode;
    if (lightMode) {
        body.style.backgroundColor = 'white';
        localStorage.setItem('lightMode', true);
    } else {
        body.style.backgroundColor = '#0d1117';
        localStorage.setItem('lightMode', false);
    }
};

const initGame = () => {
    let currentScore = localStorage.getItem('score');
    if (currentScore) {
        initNum = currentScore;
        number.innerHTML = initNum;

        switcher();
    }
    let currentTheme = localStorage.getItem('lightMode');
    lightMode = currentTheme === 'true';

    if (lightMode) {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = '#0d1117';
    }
};

const scoreReseter = () => {
    localStorage.removeItem('score');
    number.style.color = 'white';
    initNum = 0;
    number.innerHTML = initNum;
};

initGame();
themeSwitcher.addEventListener('click', themeApplier);
resetButton.addEventListener('click', scoreReseter);
