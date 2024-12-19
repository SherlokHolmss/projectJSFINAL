export function guessNumberCallback(event) {
    if (event) event.preventDefault();
    const computerNumber = Math.floor(Math.random() * 10) + 1;
    const userInput = parseInt(document.getElementById("game-input").value);
    const resultElement = document.getElementById("game-result");
    if (isNaN(userInput) || userInput < 1 || userInput > 10) {
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
