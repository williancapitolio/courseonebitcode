const Loan = require("./entities/Loan.js");
const User = require("./entities/User.js");

module.exports = class App {
    static #users = [];

    static listUsers() {
        return console.log(App.#users);
    };

    static findUserByEmail(findEmail) {
        return App.#users.find(e => e.email === findEmail);
    };

    static createUser(fullname, email) {
        if (!App.findUserByEmail(email)) {
            const user = new User(fullname, email);
            App.#users.push(user);
        } else {
            return console.log("Error: Email already exists!");
        };
    };

    static executeDeposit(email, value) {
        const user = App.findUserByEmail(email);
        user.account.newDeposit(value);
    };

    static executeTransfer(email, emailSender, emailRecipient, value) {
        const user = App.findUserByEmail(email);
        const userSenderr = App.findUserByEmail(emailSender);
        const userRecipientt = App.findUserByEmail(emailRecipient);

        user.account.newTransfer(userSenderr.account.owner, userRecipientt.account.owner, value);
    };

    static executeLoan(email, value, numberInstallments) {
        const user = App.findUserByEmail(email);
        user.account.newLoan(value, numberInstallments);
    };

    static changeInterestRate(newPercentage) {
        Loan.interestRate(newPercentage);
        console.log("Success: Interest rate has changed!");
    };
};
