const form = document.getElementById('form');
const oldPassword = document.getElementById('oldPassword');
const newPassword = document.getElementById('newPassword');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateInputs = () => {
    const oldPasswordValue = oldPassword.value.trim();
    const newPasswordValue = newPassword.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(oldPasswordValue === '') {
        setError(oldPassword, 'Password is required');
    } else if (oldPasswordValue.length < 8 ) {
        setError(oldPassword, 'Password must be at least 8 character.')
    } else {
        setSuccess(oldPassword);
    }

    if(newPasswordValue === '') {
        setError(newPassword, 'Password is required');
    } else if (newPasswordValue.length < 8 ) {
        setError(newPassword, 'Password must be at least 8 character.')
    } else {
        setSuccess(newPassword);
    }

    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password');
    } else if (confirmPasswordValue !== newPasswordValue) {
        setError(confirmPassword, "Passwords doesn't match");
    } else {
        setSuccess(confirmPassword);
    }

};
