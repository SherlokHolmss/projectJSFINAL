
const modal = document.getElementById('modal');
const closeModalButton = document.querySelector('.close');
const saveButton = document.querySelector('.modal-btn');
const inputUserName = document.getElementById('inputUserName');
const userNameElement = document.getElementById('userName'); 

export function openModal() {
    modal.style.display = 'flex';
}


function closeModal() {
    modal.style.display = 'none';
}
closeModalButton.addEventListener('click', closeModal);

saveButton.addEventListener('click', () => {
    const userName = inputUserName.value.trim();
    if (userName) {
        userNameElement.textContent = userName; 
        closeModal(); 
    } else {
        alert('Будь ласка, введіть своє ім\'я.');
    }
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
document.addEventListener('DOMContentLoaded', openModal);