'use strict';

const userPassword = document.getElementById('user_password');
const confirmPassword = document.getElementById('confirm_password');
const passwordCheck = document.getElementById('password-check');
const createAccountButton = document.getElementById('create-account');

confirmPassword.addEventListener('input', passwordMatchValidation);
userPassword.addEventListener('input', passwordMatchValidation);

function passwordMatchValidation() {
    if (userPassword.value !== confirmPassword.value) {
        confirmPassword.classList.add('error');
        createAccountButton.disabled = true;
        createAccountButton.style.opacity = 0.4;
        passwordCheck.style.color = 'red';
    } else {
        confirmPassword.classList.remove('error');
        createAccountButton.disabled = false;
        createAccountButton.style.opacity = 1;
        passwordCheck.style.color = 'var(--secondary-color)';
    }
}