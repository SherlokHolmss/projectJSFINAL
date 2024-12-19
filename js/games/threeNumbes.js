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
document.getElementById('number-input1').addEventListener('input', findMaxNumberCallback);
document.getElementById('number-input2').addEventListener('input', findMaxNumberCallback);
document.getElementById('number-input3').addEventListener('input', findMaxNumberCallback);