import  {openFooterModal, closeFooterModal, onCloseBackdropClick, onCloseEscapeClick} from "./modals/footer-modal.js";
const backdrop = document.querySelector(".backdrop");
const btnFooterModalOpen = document.querySelector(".subscription-button");
const btnFooterModalClose = document.querySelector(".footer-modal-close-btn");

btnFooterModalOpen.addEventListener("click", openFooterModal);
btnFooterModalClose.addEventListener("click", closeFooterModal);
backdrop.addEventListener("click", onCloseBackdropClick);
document.addEventListener("keydown", onCloseEscapeClick);


import './games/yearCheck.js';
import './games/guessNumber.js';
import './games/calculator.js';
import './games/timeCalculator.js';
import './games/slider.js';
import './games/game-rps.js';
import  './games/dinosaur.js';
import './games/game-rps.js';
import './games/footbal.js';
import './games/scientists.js';
import './modals/footer-modal.js';

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

initSlider();
