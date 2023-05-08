module.exports = class Loan {
    static #interestRate = 10;

    constructor(value, installments) {
        this.value = value;
        this.installments = installments;
        this.total = installments * (value + Loan.interestRate);
        this.createdAd = new Date();
    }

    static get interestRate() {
        return this.#interestRate;
    };

    static set interestRate(value) {
        this.#interestRate = value;
    };
};
