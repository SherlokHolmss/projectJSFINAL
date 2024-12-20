export function changeThemeOnPage() {
    let theme = "light";
    const changeThemeSpan = document.querySelector(".theme-toggle-switch");
    const body = document.querySelector("body");
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");

    if (changeThemeSpan.classList[1] === "light-mode-switch") {
        theme = "dark";
    }

    body.className = `${theme}-theme`;
    dropdownBtns.forEach(el => {
        el.className = `dropdown-btn ${theme}`;
    });
}