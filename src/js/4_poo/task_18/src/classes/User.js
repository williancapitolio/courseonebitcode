export default class User {
    constructor(fullname, email, password) {
        this.fullname = fullname,
        this.email = email,
        this.password = password
    };

    login(email, password) {
        if (!email || !password) {
            return console.log("Error: Fill in the email and password!");
        };

        if (this.email === email && this.password === password) {
            return console.log("Success: Logged in!");
        } else {
            return console.log("Error: Incorrect email or password");
        };
    };
};
