import User from "./entities/User.js";

import { resetFormStyles } from "./modules/resetFormStyles.js";

document.getElementById("form-register").addEventListener("submit", ev => {
    ev.preventDefault();

    const userInputs = new User();

    resetFormStyles(userInputs);

    try {
        const { fullname, email, password } = userInputs;

        userInputs.validateFullname();
        fullname.classList.add("success");

        userInputs.validateEmail();
        email.classList.add("success");

        userInputs.validatePassword();
        password.classList.add("success");
    } catch (err) {
        userInputs[err.input].classList.add("error");
        document.getElementById(`${err.input}-error`).textContent = err.message;
    };
});
