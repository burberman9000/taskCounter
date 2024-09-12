const number = document.querySelector('.number__holder');
const button = document.querySelector('.button');
let initNum = 0;

number.innerHTML = initNum;

const switcher = () => {
    initNum++;
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

button.addEventListener('click', switcher);
