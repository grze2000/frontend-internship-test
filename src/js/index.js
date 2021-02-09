const validateForm = form => {
    // Simple manual JS validation using Constraint validation API
    const email = form.elements['email'];
    const password = form.elements['password'];
    const rules = form.elements['rules-checkbox'];

    if(!/^.+@.+\..+$/.test(email.value)) {
        email.setCustomValidity("It isn't a valid email :(");
    } else {
        email.setCustomValidity('');
    }
    if(password.value.length < 8) {
        password.setCustomValidity('Password is too weak (⌐■_■)');
    } else {
        password.setCustomValidity('');
    }
    if(!rules.checked) {
        rules.setCustomValidity("You have to accept the terms");
    } else {
        rules.setCustomValidity("");
    }
    form.reportValidity();
}

document.addEventListener('DOMContentLoaded', (event) => {
    const showPopupBtn = document.querySelector('#show-popup-form');
    const popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.popup__close-btn');
    const form = document.querySelector('#login-form');

    showPopupBtn.addEventListener('click', function() {
        popup.classList.add('popup--open');
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('popup--open');
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        validateForm(form);
        if(form.checkValidity()) {
            console.log(`Email: ${form.email.value}, Password: ${form.password.value}`);
        }
    });
});