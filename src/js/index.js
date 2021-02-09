document.addEventListener('DOMContentLoaded', (event) => {
    const showPopupBtn = document.querySelector('#show-popup-form');
    const popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.popup__close-btn');

    showPopupBtn.addEventListener('click', function() {
        popup.classList.add('popup--open');
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('popup--open');
    });
});