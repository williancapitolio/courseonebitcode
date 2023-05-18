const App = require("./classes/App.js");

App.listUsers();

App.createUser("Willian Silva", "willian@email.com");

App.listUsers();

App.createUser("Willian Silva", "willian@email.com");

App.listUsers();

App.createUser("John Doe", "john@email.com");

App.listUsers();

App.changeInterestRate(10);

App.createUser("Willian Silva", "willian@email.com");
App.createUser("John Doe", "john@email.com");

App.executeDeposit("willian@email.com", 1000);

App.executeLoan("willian@email.com", 1500, 10);

App.listUsers();

App.executeTransfer("willian@email.com", "willian@email.com", "john@email.com", 100);

App.listUsers();
