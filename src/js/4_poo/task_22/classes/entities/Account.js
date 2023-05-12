const Deposit = require("./Deposit.js");
const Loan = require("./Loan.js");

module.exports = class Account {
    #balance = 0;

    constructor(owner) {
        this.deposits = [];
        this.loans = [];
        this.transfers = [];
        this.owner = owner;
    };

    get balance() {
        return this.#balance;
    };

    newDeposit(value) {
        this.#balance += value;
        this.deposits.push(new Deposit(value));
    };

    newLoan(value, numberInstallments) {
        this.#balance += value;
        this.loans.push(new Loan(value, numberInstallments));
    };
};
