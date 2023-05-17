const Installment = require("./Installment.js");

module.exports = class Loan {
    static #interestRate = 5;

    constructor(value, numberInstallments) { 
        this.value = value;
        this.numberInstallments = numberInstallments;
        //this.valueInstallment = this.valueEachInstallment;
        //this.valueInstallment = new Installment(((this.interestRate / 100) * value) + value, 1, "pending");
        this.valueInstallment = new Installment(((this.interestRate / 100) * value) + value);
        this.installment = this.InstallmentArrayFunction;
        this.createdAd = new Date();
    };

    static get interestRate() {
        return this.#interestRate;
    };

    static set interestRate(newPercentage) {
        this.#interestRate = newPercentage;
    };

    static get valueEachInstallment() {
        return ((this.interestRate() / 100) * this.value) + this.value;
    };

    get InstallmentArrayFunction() {
        const InstallmentArray = [];
        for (let i = 1; i <= this.numberInstallments; i++) {
            InstallmentArray.push(new Installment(this.valueEachInstallment, i, "pending"));
        };
        return InstallmentArray;
    };
};
