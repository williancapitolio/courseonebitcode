const formRegister = document.getElementById("form-register");
const btnSubmit = document.getElementById("btn-submit");
const fullname = document.getElementById("fullname")
const email = document.getElementById("email");
const password = document.getElementById("password");

formRegister.addEventListener("submit", e => {
    e.preventDefault();

    console.log(fullname.value);
    console.log(email.value);
    console.log(password.value);

    fullname.value = "";
    email.value = "";
    password.value = "";
});

const validations = (email, password) => {
    const validEmail = /^[a-z0-9?_.]{2,}+@[a-z]{2,}+.[a-z]{2,}$/i;
    if (!validEmail.test(email)) {
        return "Invalid email! Try: xx@xx.xx";
    };

    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/;
    if (!validPassword.test(password)) {
        return "Invalid password! You need at leat 8 characters containing: 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character";
    };

    return true;
};
