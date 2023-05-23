const formRegister = document.getElementById("form-register");

let statusResponse = "";

formRegister.addEventListener("submit", e => {
    try {
        e.preventDefault();

        const inputStatus = e.target.children["status-response"];

        const fullname = e.target.children["fullname"];
        const email = e.target.children["email"];
        const password = e.target.children["password"];

        if (!fullname.value || !email.value || !password.value) {
            statusResponse = "Error: Fill all fields!";
            return inputStatus.value = statusResponse;
        };

        if (!validateEmail(email.value)) {
            statusResponse = "Error: Invalid email! Try: xx@xx.xx";
            return inputStatus.value = statusResponse;
        };

        if (!validatePassword(password.value)) {
            statusResponse = "Error: Invalid password!";
            return inputStatus.value = statusResponse;
        };

        fullname.value = "";
        email.value = "";
        password.value = "";

        statusResponse = "Sucess: Registration done!";
        inputStatus.value = statusResponse;
    } catch (e) {
        console.log(e.message);
        statusResponse = "Error: A system error occurred, please try again later.";
        document.getElementById("status-response").value = statusResponse;
    };
});

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
