import User from "./classes/User.js";

const admin = new User("admin", "admin@email.com", "admin123");
console.log(admin);

admin.login("admin@email.com", "admin123");