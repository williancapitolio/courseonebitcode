const Deposit = require("./Deposit.js");

module.exports = class Account {
    #balance = 0;

    constructor(loans, transfers, owner) {
        this.deposits = [];
        this.loans = loans;
        this.transfers = transfers;
        this.owner = owner;
    };

    get balance() {
        return this.#balance;
    };

    newDeposit(value) {
        this.#balance += value;
        this.deposits.push(new Deposit(value));
    };
};
