export function calculateTimeCallback(event) {
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
    resultElement.textContent = formattedTime;
}
