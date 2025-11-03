document.addEventListener('DOMContentLoaded', funcion () {
    const loginForm = document.getElementById('loginform');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');


    loginForm.addEventListener('submit', funcion (event) {
        event.preventDefault();


        if (validadeForm()) {

            alert('Login realizado com sucesso!');


        }
    });


    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('blur', validatePassword);

    function validadeForm() {
        const ifEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        return isEmailValid && isPasswordValid
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@^]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            showError(emailInput, 'E-mail é obrigatório');
            return false;
        } else if (!emailRegex.test(email)) {
            showError(emailInput, 'E-mail inválido');
            return false;
        } else {
            showSucess(emailInput);
            return true;
        }
    }

    function validadePassword() {
        const password = passwordInput.value.trim();

        if (password === '') {
            showError(passwordInput, 'Senha é obrigatória');
            return false;
        } else if (password.length < 6) {
            showError(passwordInput, 'Senha deve ter pelo menos 6 caracteres');
            return false;
        } else {
            showSucess(passwordInput);
            return true;
        }
    }

    function showError(input, message) {
        const inputGroup = input.parentElement;


        input.classList.remove('sucess');


        input.classList('error');


        const existingError = inputGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }
}
