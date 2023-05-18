const Deposit = require("./Deposit.js");
const Loan = require("./Loan.js");
const Transfer = require("./Transfer.js");

module.exports = class Account {
    #balance = 0;

    constructor(owner) {
        this.owner = owner;
        this.deposits = [];
        this.loans = [];
        this.transfers = [];
    };

    get balance() {
        return this.#balance;
    };

    newDeposit(value) {
        this.#balance += value;

        this.deposits.push(new Deposit(value));

        console.log("Success: Deposit made!");
    };

    newLoan(value, numberInstallments) {
        this.#balance += value;

        this.loans.push(new Loan(value, numberInstallments));

        console.log("Success: Loan made!");
    };

    newTransfer(userSender, userRecipient, value) {
        if (userSender === this.owner && userRecipient === this.owner) {
            return console.log("Error: It is not possible to make transfers with the same account!");
        } else if (userSender === this.owner && this.balance >= value) {
            this.#balance -= value;

            this.transfers.push(new Transfer(userSender, userRecipient, value));

            return console.log("Success: Transfer done!");
        } else if (userRecipient === this.owner) {
            this.#balance += value;

            this.transfers.push(new Transfer(userSender, userRecipient, value));

            return console.log("Success: Transfer done!");
        } else {
            return console.log("Error: The transfer could not be performed!");
        };
    };
};
