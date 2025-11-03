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
    }
}
