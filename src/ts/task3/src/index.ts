import App from "./class/App";

let op: string;

do {
  op = prompt(
    "- Menu -\nEnter the option to interact\n1. Search username\n2. List information\n3. Finalize"
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
      alert("Finishing...");
      break;

    default:
      alert("Invalid option! Try again.");
  }
} while (op !== "3");
