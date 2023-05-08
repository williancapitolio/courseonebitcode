module.exports = class Loan {
    static #interestRate;

    constructor(value, installments) {
        this.value = value;
        this.installments = installments;
        this.createdAd = new Date();
    }

    get interestRate() {
        return this.#interestRate;
    };

    set interestRate(value) {
        this.#interestRate = value;
    };
};
