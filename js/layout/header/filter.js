export function filter(event, interactive) {
    const section = document.querySelector(".interactive-section");

    interactive = [...interactive].filter(el => el.dataset.category === event.target.dataset.category);

    section.innerHTML = "";
    
    interactive.forEach(el => {
        section.appendChild(el);
    });
}