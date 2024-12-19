const footerModal = document.querySelector('.footer-modal');
const backdrop = document.querySelector(".backdrop");

export function openFooterModal(e) {
    e.preventDefault();
    footerModal.style.display = "block";
    backdrop.style.display = "block";
    
    setTimeout(() => {
        footerModal.style.opacity = "1";
        backdrop.style.opacity = "1";
    }, 200); 
}

export function closeFooterModal() {
    footerModal.style.opacity = "0";
    backdrop.style.opacity = "0";

    setTimeout(() => {
        footerModal.style.display = "none";
        backdrop.style.display = "none";
    }, 400);
}

export function onCloseBackdropClick(e) {
    if (e.currentTarget === e.target) {
        closeFooterModal();
    }
}

export function onCloseEscapeClick(e) {
    if (e.key === "Escape") {
        closeFooterModal();
    }
}


