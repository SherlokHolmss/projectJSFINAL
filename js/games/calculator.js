let operation = null;

export function setOperationCallback(op) {
    operation = op;
}

export function calculateCallback(event) {
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
    resultElement.textContent = result.toFixed(2);
}
