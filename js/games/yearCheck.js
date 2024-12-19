export function checkYearCallback(event) {
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
