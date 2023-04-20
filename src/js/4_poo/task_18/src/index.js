import User from "./classes/User.js";
import Product from "./classes/Product.js";

const admin = new User("admin", "admin@email.com", "admin123");

admin.login("admin@email.com", "admin123");

console.log(admin);

const bookEragon = new Product("Eragon", "Eragon um livro escrito por Christopher Paolini.", 50.00)

bookEragon.addToStock(3);

bookEragon.addToStock(5);

bookEragon.addToStock("cinco");

bookEragon.calculateDiscount(10)

bookEragon.calculateDiscount(100)

bookEragon.calculateDiscount("cem")

console.log(bookEragon);
