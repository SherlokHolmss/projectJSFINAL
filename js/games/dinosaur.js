const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startButton = document.getElementById("start-button");
let gameInterval;

startButton.addEventListener("click", () => {
    startButton.style.display = "none"; 
    cactus.style.animationPlayState = "running"; 
    gameInterval = setInterval(checkCollision, 20); 
});


cactus.style.animationPlayState = "paused";

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        e.preventDefault(); 
        jumpDino();
    }
});

function jumpDino() {
    if (!dino.classList.contains("jump-dino")) {
        dino.classList.add("jump-dino");
        setTimeout(() => {
            dino.classList.remove("jump-dino");
        }, 1000);
    }
}

function checkCollision() {
    let dinoTop = parseInt(window.getComputedStyle(dino).top);
    let cactusLeft = parseInt(window.getComputedStyle(cactus).left);

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 180) {
        clearInterval(gameInterval);
        alert("Game Over!");
        resetGame();
    }
}

function resetGame() {
    cactus.style.animationPlayState = "paused"; 
    cactus.style.left = "680px"; 
    startButton.style.display = "block";
}
