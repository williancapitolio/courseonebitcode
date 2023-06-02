const url = "http://localhost:3000/transactions";

const formTransaction = document.querySelector("#form-transaction");

const typeTransaction = document.querySelector("#type-transactions");

const btnAction = document.querySelector("#btn-save-transaction");

let id;

const renderTransaction = (transactionData) => {
    const transaction = document.createElement("div");
    transaction.classList.add("transaction");
    transaction.id = `transaction-${transactionData.id}`;

    const name = document.createElement("span");
    name.classList.add("name-transaction");
    name.textContent = transactionData.name;
    name.id = `name-transaction-${transactionData.id}`;

    const value = document.createElement("span");
    value.classList.add("value-transaction");
    value.textContent = transactionData.value;
    value.id = `value-transaction-${transactionData.id}`;

    const btnEdit = document.createElement("button");
    btnEdit.setAttribute("type", "button");
    btnEdit.setAttribute("class", "btn-edit");
    btnEdit.setAttribute("onClick", "editTransaction(this)");
    btnEdit.textContent = "Editar";
    btnEdit.id = `edit-transaction-${transactionData.id}`;

    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("class", "btn-delete");
    btnDelete.setAttribute("onClick", "deleteTransaction(this)");
    btnDelete.textContent = "Apagar";
    btnDelete.id = `delete-transaction-${transactionData.id}`;

    transaction.append(name, document.createElement("br"), value, document.createElement("br"), btnEdit, btnDelete, document.createElement("br"), document.createElement("br"));
    document.querySelector("#list-transactions-div").appendChild(transaction);
};

const fetchTransactions = async () => {
    const response = await fetch(url);

    const transactions = await response.json();

    transactions.forEach(renderTransaction);
};

document.addEventListener("DOMContentLoaded", () => {
    fetchTransactions();
});

const getTransactionById = async btn => {
    const id = btn.id.split("-").at(-1);

    const response = await fetch(`${url}/${id}`).then(res => res.json());

    return response;
};

formTransaction.addEventListener("submit", async ev => {
    ev.preventDefault();

    const transactionData = {
        name: document.querySelector("#name-transaction").value,
        value: document.querySelector("#value-transaction").value
    };

    if (!transactionData.name || !transactionData.value) {
        return alert("Preencha todos os campos!");
    };

    if (!Number(transactionData.value)) {
        return alert("O valor precisa ser um número!")
    }

    if (typeTransaction.innerText === "Editar Transação") {
        const transactionData = {
            name: document.querySelector("#name-transaction").value,
            value: document.querySelector("#value-transaction").value
        };

        const response = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transactionData)
        });

        const editedTransaction = await response.json();

        renderTransaction(editedTransaction);

        typeTransaction.innerText = "Adicionar Transação";
        btnAction.innerText = "Salvar";

        return formTransaction.reset();
    };

    postTransaction();
});

const postTransaction = async () => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transactionData)
    });

    const savedTransaction = await response.json();

    renderTransaction(savedTransaction);

    formTransaction.reset();
};

const editTransaction = async (btn) => {
    typeTransaction.innerText = "Editar Transação";
    btnAction.innerText = "Salvar Edição";

    const transactionId = btn.id.split("-").at(-1);

    const inputNameToEdit = btn.parentElement.children[`name-transaction-${transactionId}`].innerText;
    const inputValueToEdit = btn.parentElement.children[`value-transaction-${transactionId}`].innerText;

    document.querySelector("#name-transaction").value = inputNameToEdit;
    document.querySelector("#value-transaction").value = inputValueToEdit;

    id = transactionId;
};

const deleteTransaction = async (btn) => {
    const idToDelete = btn.id.split("-").at(-1);

    const response = await fetch(`${url}/${idToDelete}`, {
        method: "DELETE",
    });

    const deletedTransaction = await response.json();

    if (!deletedTransaction) {
        return alert("Não foi possível remover a transação!")
    };

    btn.parentElement.remove();
};
