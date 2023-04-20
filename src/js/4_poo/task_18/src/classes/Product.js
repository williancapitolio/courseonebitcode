export default class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    };

    addToStock(quantity) {
        if (!quantity) {
            return console.log("Error: Enter the quantity you want to add to the stock!");
        };

        const onlyNumbers = new RegExp('^[0-9]+$');
        if (!onlyNumbers.test(quantity)) {
            return console.log("Error: Enter a numerical value!");
        };

        if (quantity <= 0) {
            return console.log("Error: Quantity cannot be 0 or less than 0!");
        };

        this.inStock += quantity;

        return console.log(`Success: Added ${quantity} products to stock!`);
    };

    calculateDiscount(discount) {
        if (!discount) {
            return console.log("Error: Enter the amount you want to calculate the discount!");
        };

        const onlyNumbers = new RegExp('^[0-9]+$');
        if (!onlyNumbers.test(discount)) {
            return console.log("Error: Enter a numerical value!");
        };

        if (discount >= 100) {
            return console.log("Error: Discount cannot be 100 or more than 100!");
        };

        if (discount <= 0) {
            return console.log("Error: Discount cannot be 0 or less than 0!");
        };

        const discountPrice = this.price - (this.price * (discount / 100));
        
        return console.log(`Success: The discounted product price will be ${discountPrice.toFixed(2)}.`);
    };
};
