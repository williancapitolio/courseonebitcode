import App from "./class/App";

let op: string;

do {
  op = prompt(
    "- Menu -\nEnter the option to interact\n1. Search username\n2. List user information\n3. List all users\n4. Calcute sum all repositories\n5. Top 5 users with higher number of public repositories\n6. Finalize"
  );

  switch (op) {
    case "1":
      const username = prompt("Enter usarname:");
      await App.fetchUser(username);
      break;

    case "2":
      App.showUserInfo();
      break;

    case "3":
      App.listAllUsers();
      break;

    case "4":
      break;

    case "5":
      break;

    case "6":
      alert("Finishing...");
      break;

    default:
      alert("Invalid option! Try again.");
  }
} while (op !== "6");
