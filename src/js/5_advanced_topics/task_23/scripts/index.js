const validateEmail = (email) => {
    const validEmail = /^([a-z0-9?_.]{2,})+@([a-z]{2,})+.([a-z]{2,})$/i;
    if (!validEmail.test(email)) {
        return false;
    };

    return true;
};

const validatePassword = (password) => {
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/;
    if (!validPassword.test(password)) {
        return false;
    };

    return true;
};

const setInputStatusMessage = (inputStatus, message) => {
    inputStatus.value = message;
};

document.getElementById("form-register").addEventListener("submit", e => {
    try {
        e.preventDefault();

        const inputStatus = e.target.children["status-response"];

        const fullname = e.target.children["fullname"];
        const email = e.target.children["email"];
        const password = e.target.children["password"];

        if (!fullname.value || !email.value || !password.value) {
            return setInputStatusMessage(inputStatus, "Error: Fill all fields!");
        };

        if (!validateEmail(email.value)) {
            return setInputStatusMessage(inputStatus, "Error: Invalid email! Try: xx@xx.xx");
        };

        if (!validatePassword(password.value)) {
            return setInputStatusMessage(inputStatus, "Error: Invalid password!");
        };

        fullname.value = "";
        email.value = "";
        password.value = "";

        setInputStatusMessage(inputStatus, "Sucess: Registration done!");
    } catch (e) {
        console.log(e.message);
        setInputStatusMessage(document.getElementById("status-response"), "Error: A system error occurred, please try again later.");
    };
});

