const number = document.querySelector('.number__holder');
const button = document.querySelector('.button');
const done = document.querySelectorAll('.done');
let initNum = 0;

number.innerHTML = initNum;
number.style.color = 'red';
const switcher = () => {
    initNum++;
    number.innerHTML = initNum;
    if (initNum < 10) {
        number.style.color = 'red';
    } else if (initNum >= 10 && initNum <= 20) {
        number.style.color = 'orange';
    } else if (initNum >= 20 && initNum <= 30) {
        number.style.color = 'yellow';
    } else if (initNum >= 30 && initNum < 48) {
        number.style.color = 'blue';
    } else {
        done.forEach((item, index) => {
            if (index == 1) {
                // item.classList.remove('hide');
                item.style.opacity = '1';
            }
        });
    }
};

button.addEventListener('click', switcher);
