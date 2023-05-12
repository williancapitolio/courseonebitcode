const Installment = require("./Installment.js");

module.exports = class Loan {
    static #interestRate = 5;

    constructor(value, numberInstallments) { 
        this.value = value;
        this.numberInstallments = numberInstallments;
        this.valueEachInstallment = new Installment();
        this.createdAd = new Date();
    }

    static get interestRate() {
        return this.#interestRate;
    };

    static set interestRate(value) {
        this.#interestRate = value;
    };
};
