module.exports = class Loan {
    static #interestRate = 10;

    constructor(value, numberInstallments, installment) { 
        this.value = value;
        this.numberInstallments = numberInstallments;
        this.installment = installment;
        this.createdAd = new Date();
    }

    static get interestRate() {
        return this.#interestRate;
    };

    static set interestRate(value) {
        this.#interestRate = value;
    };
};
