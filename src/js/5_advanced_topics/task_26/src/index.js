const renderTransaction = (transactionData) => {
    const transaction = document.createElement("div");
    transaction.classList.add("transaction");
    transaction.id = `transaction-${transactionData.id}`;

    const name = document.createElement("span");
    name.classList.add("name-transaction");
    name.textContent = transactionData.name;

    const value = document.createElement("span");
    value.classList.add("value-transaction");
    value.textContent = transactionData.value;

    transaction.append(name, value);
    document.querySelector("#list-transactions-div").appendChild(transaction);
};

const fetchTransactions = async () => {
    const response = await fetch("http://localhost:3000/transactions");

    const transactions = await response.json();

    transactions.forEach(renderTransaction);
};

document.addEventListener("DOMContentLoaded", () => {
    fetchTransactions();
});
