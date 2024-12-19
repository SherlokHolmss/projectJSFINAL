const field = document.querySelector('.football-game-field');
const ball = document.querySelector('.ball');
field.addEventListener('click', (event) => {
  const fieldRect = field.getBoundingClientRect();
  const ballDiameter = ball.offsetWidth;
  let ballX = event.clientX - fieldRect.left - ballDiameter / 2;
  let ballY = event.clientY - fieldRect.top - ballDiameter / 2;
  if (ballX < 0) ballX = 0;
  if (ballY < 0) ballY = 0;
  if (ballX > fieldRect.width - ballDiameter) ballX = fieldRect.width - ballDiameter;
  if (ballY > fieldRect.height - ballDiameter) ballY = fieldRect.height - ballDiameter;
  ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
});