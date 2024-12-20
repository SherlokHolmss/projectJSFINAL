import { openFooterModal, closeFooterModal, onCloseBackdropClick, onCloseEscapeClick } from "./modals/footer-modal.js";
const backdrop = document.querySelector(".backdrop");
const btnFooterModalOpen = document.querySelector(".subscription-button");
const btnFooterModalClose = document.querySelector(".footer-modal-close-btn");

btnFooterModalOpen.addEventListener("click", openFooterModal);
btnFooterModalClose.addEventListener("click", closeFooterModal);
backdrop.addEventListener("click", onCloseBackdropClick);
document.addEventListener("keydown", onCloseEscapeClick);

import { checkYearCallback } from './games/yearCheck.js';
import { guessNumberCallback } from './games/guessNumber.js';
import { setOperationCallback, calculateCallback } from './games/calculator.js';
import { calculateTimeCallback } from './games/timeCalculator.js';
import {changeTheme, dropdownOpen} from "./layout/header/header.js";
import {filter} from "./layout/header/filter.js";

// import './games/findMaxNumber.js'; 
import './games/slider.js';
import './games/game-rps.js';
import './games/dinosaur.js';
import './games/footbal.js';
import './games/scientists.js';

// хедер
const changeThemeBtn = document.querySelector(".theme-toggle-button");
changeThemeBtn.addEventListener("click", changeTheme);

const openDropdown = document.querySelector(".open-dropdown");
openDropdown.addEventListener("click", dropdownOpen);

// фільтрація
const dropdownList = document.querySelector(".dropdown-list");
const interactive = document.querySelectorAll(".block");

dropdownList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        filter(event, interactive);
    }
});

document.getElementById('year-form').addEventListener('submit', checkYearCallback);
document.getElementById('check-year-button').addEventListener('click', checkYearCallback);

document.getElementById('guess-number-form').addEventListener('submit', guessNumberCallback);
document.getElementById('guess-number-button').addEventListener('click', guessNumberCallback);

document.getElementById('calculator-form').addEventListener('submit', calculateCallback);
document.getElementById('plus-button').addEventListener('click', function () {
    setOperationCallback('+');
});
document.getElementById('multiply-button').addEventListener('click', function () {
    setOperationCallback('*');
});
document.getElementById('minus-button').addEventListener('click', function () {
    setOperationCallback('-');
});
document.getElementById('divide-button').addEventListener('click', function () {
    setOperationCallback('/');
});
document.getElementById('calculate-button').addEventListener('click', calculateCallback);

// document.getElementById('number-input1').addEventListener('input', findMaxNumberCallback);
// document.getElementById('number-input2').addEventListener('input', findMaxNumberCallback);
// document.getElementById('number-input3').addEventListener('input', findMaxNumberCallback);

document.getElementById('time-form').addEventListener('submit', calculateTimeCallback);
document.getElementById('calculate-time-button').addEventListener('click', calculateTimeCallback);
