const Installment = require("./Installment.js");

module.exports = class Loan {
    static #interestRate = 5;

    constructor(value, numberInstallments) { 
        this.value = value;
        this.numberInstallments = numberInstallments;
        this.valueInstallment = this.valueEachInstallment;
        this.installments = this.InstallmentArrayFunction;
        this.createdAd = new Date();
    };

    get interestRate() {
        return Loan.#interestRate;
    };

    static interestRate(newPercentage) {
        this.#interestRate = newPercentage;
    };

    get valueEachInstallment() {
        return ((this.interestRate / 100) * this.value) + this.value;
    };

    get InstallmentArrayFunction() {
        const InstallmentArray = [];

        for (let i = 1; i <= this.numberInstallments; i++) {
            InstallmentArray.push(new Installment(this.valueEachInstallment, i, "pending"));
        };

        return InstallmentArray;
    };
};
