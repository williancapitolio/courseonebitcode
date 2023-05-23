const formRegister = document.getElementById("form-register");
const btnSubmit = document.getElementById("btn-submit");
const fullname = document.getElementById("fullname")
const email = document.getElementById("email");
const password = document.getElementById("password");
let statusResponse = "";

formRegister.addEventListener("submit", e => {
    e.preventDefault();

    console.log(fullname.value);
    console.log(email.value);
    console.log(password.value);

    fullname.value = "";
    email.value = "";
    password.value = "";
});

const validateEmail = (email) => {
    const validEmail = /^[a-z0-9?_.]{2,}+@[a-z]{2,}+.[a-z]{2,}$/i;
    if (!validEmail.test(email)) {
        return statusResponse = "Error: Invalid email! Try: xx@xx.xx";
    };

    return statusResponse = "Success: The email was accepted";
};

const validatePassword = (password) => {
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/;
    if (!validPassword.test(password)) {
        return statusResponse = "Invalid password! You need at leat 8 characters containing: 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character";
    };

    return statusResponse = "Success: The password was accepted";
};
