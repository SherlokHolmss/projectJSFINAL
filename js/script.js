// Перевірка року
function checkYearCallback(event) {
    if (event) event.preventDefault();
    const input = document.getElementById("year-input");
    const result = document.getElementById("year-result");
    const year = parseInt(input.value);
    if (isNaN(year) || year < 1 || year > 2024) {
        result.textContent = "Введіть число в діапазоні від 1 до 2024!";
        result.style.color = "rgba(153, 0, 0, 1)";
        return;
    }
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        result.textContent = `Ви народилися у високосний рік!`;
        result.style.color = "rgba(3, 153, 0, 1)";
    } else {
        result.textContent = `Ви народилися не у високосний рік!`;
        result.style.color = "rgba(153, 0, 0, 1)";
    }
}

// Вгадування числа
function guessNumberCallback(event) {
    if (event) event.preventDefault();
    const computerNumber = Math.floor(Math.random() * 10) + 1;
    const userInput = parseInt(document.getElementById("game-input").value);
    const resultElement = document.getElementById("game-result");
    if (userInput < 1 || userInput > 10 || isNaN(userInput)) {
        resultElement.textContent = "Введіть число в діапазоні від 1 до 10!";
        resultElement.style.color = "rgba(153, 0, 0, 1)";
    } else if (userInput === computerNumber) {
        resultElement.textContent = `Вітаю, ви вгадали число (${computerNumber})`;
        resultElement.style.color = "rgba(3, 153, 0, 1)";
    } else {
        resultElement.textContent = `Ви програли, комп'ютер загадав (${computerNumber})`;
        resultElement.style.color = "rgba(153, 0, 0, 1)";
    }
}

// Калькулятор
let operation = null;

function setOperationCallback(op) {
    operation = op;
}

function calculateCallback(event) {
    if (event) event.preventDefault();
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const resultElement = document.getElementById('calculator-result');
    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = 'Введіть числа';
        return;
    }
    if (!operation) {
        resultElement.textContent = 'Виберіть знак!';
        return;
    }
    let result;
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number2 === 0 ? 0 : number1 / number2;
            break;
        default:
            resultElement.textContent = 'Помилка';
            return;
    }
    result = result.toFixed(2);
    resultElement.textContent = `${result}`;
}

// Калькулятор часу
function calculateTimeCallback(event) {
    if (event) event.preventDefault();
    const inputField = document.getElementById('time-input');
    const resultElement = document.getElementById('time-result');
    const inputMinutes = parseInt(inputField.value, 10);
    if (isNaN(inputMinutes) || inputMinutes < 0) {
        resultElement.textContent = 'Введіть коректне число хвилин!';
        return;
    }
    const days = Math.floor(inputMinutes / 1440);
    const hours = Math.floor((inputMinutes % 1440) / 60);
    const minutes = inputMinutes % 60;
    const seconds = 0;
    const formattedTime = `${days}дн. ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    resultElement.textContent = `${formattedTime}`;
}

// Введіть три числа
function findMaxNumberCallback() {
    const number1 = document.getElementById('number-input1').value;
    const number2 = document.getElementById('number-input2').value;
    const number3 = document.getElementById('number-input3').value;
    const resultElement = document.getElementById('number-result');
    if (number1 === '' || number2 === '' || number3 === '') {
        resultElement.textContent = 'Введіть усі числа';
        return;
    }
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    const num3 = parseFloat(number3);
    const maxNumber = Math.max(num1, num2, num3);
    resultElement.textContent = `Найбільше число, яке ви ввели - (${maxNumber})`;
}

// Наша команда
const slides = document.querySelectorAll('.slide');
const lines = document.querySelectorAll('.line');  // зміна тут
const sliderLines = document.querySelectorAll('.slider-line');  // додано
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentIndex = 0;

function updateSliderCallback(index) {
    slides.forEach((slide, i) => {
        if (slide) {
            slide.classList.toggle('active', i === index);
        }
    });
    lines.forEach((line, i) => {  // зміна тут
        if (line) {
            line.classList.toggle('active', i === index);
        }
    });
    sliderLines.forEach((sliderLine, i) => {  // зміна тут
        if (sliderLine) {
            sliderLine.classList.toggle('active', i === index);
        }
    });
    prev.disabled = index === 0;
    next.disabled = index === slides.length - 1;
}

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderCallback(currentIndex);
    }
});

next.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSliderCallback(currentIndex);
    }
});

lines.forEach((line, i) => {  // зміна тут
    line.addEventListener('click', () => {  // зміна тут
        currentIndex = i;
        updateSliderCallback(currentIndex);
    });
});

sliderLines.forEach((sliderLine, i) => {  // зміна тут
    sliderLine.addEventListener('click', () => {  // зміна тут
        currentIndex = i;
        updateSliderCallback(currentIndex);
    });
});

updateSliderCallback(currentIndex);

// Додавання подій
document.getElementById('year-form').addEventListener('submit', checkYearCallback);
document.getElementById('check-year-button').addEventListener('click', checkYearCallback);

document.getElementById('guess-number-form').addEventListener('submit', guessNumberCallback);
document.getElementById('guess-number-button').addEventListener('click', guessNumberCallback);

document.getElementById('calculator-form').addEventListener('submit', calculateCallback);
document.getElementById('plus-button').addEventListener('click', () => setOperationCallback('+'));
document.getElementById('multiply-button').addEventListener('click', () => setOperationCallback('*'));
document.getElementById('minus-button').addEventListener('click', () => setOperationCallback('-'));
document.getElementById('divide-button').addEventListener('click', () => setOperationCallback('/'));

document.getElementById('time-form').addEventListener('submit', calculateTimeCallback);
document.getElementById('calculate-time-button').addEventListener('click', calculateTimeCallback);

document.querySelectorAll('.number-input').forEach(input => {
    input.addEventListener('input', findMaxNumberCallback);
});
