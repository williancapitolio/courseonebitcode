export default class User {
    constructor() {
        this.fullname = document.getElementById("fullname");
        this.email = document.getElementById("email");
        this.password = document.getElementById("password");
    };

    validateFullname() {
        const validFullname = /^([a-zA-Z]{3,})+ ([a-zA-Z]{3,})/;

        if (!this.fullname.value.match(validFullname)) {
            const err = new Error("Error: Invalid name!");
            err.input = "fullname";
            throw err;
        };
    };

    validateEmail() {
        const validEmail = /^([a-z0-9?_.]{2,})+@([a-z]{2,})+.([a-z]{2,})$/i;

        if (!this.email.value.match(validEmail)) {
            const err = new Error("Error: Invalid email!");
            err.input = "email";
            throw err;
        };
    };

    validatePassword() {
        const validPassword = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[-+_!@#$%^&*.,?]).+$/;

        if (!this.password.value.match(validPassword)) {
            const err = new Error("Error: Invalid password!");
            err.input = "password";
            throw err;
        };
    };
};
