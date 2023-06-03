const url = "http://localhost:3000/transactions";

const formTransaction = document.querySelector("#form-transaction");

const typeTransaction = document.querySelector("#type-transactions");

const btnAction = document.querySelector("#btn-save-transaction");

const btnCancel = document.querySelector("#btn-cancel");

let id;

let balance;

const findById = async (id) => {
    const response = await fetch(`${url}/${id}`).then(res => res.json());
    return response;
};

const findAll = async () => {
    const transactions = await fetch(url).then(res => res.json());
    return transactions;
};

const setBalance = (balance) => {
    document.querySelector("#balance-span").innerText = balance.toFixed(2);
};

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
    value.textContent = transactionData.value.toFixed(2);
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

    transaction.append(
        name,
        document.createElement("br"),
        value, document.createElement("br"),
        btnEdit,
        btnDelete,
        document.createElement("br"),
        document.createElement("br")
    );

    document.querySelector("#list-transactions-div").appendChild(transaction);
};

const fetchTransactions = async () => {
    const transactions = await findAll();

    balance = transactions.reduce((total, { value }) => total + value, 0);

    setBalance(balance);

    transactions.forEach(renderTransaction);
};


document.addEventListener("DOMContentLoaded", () => {
    fetchTransactions();
});

formTransaction.addEventListener("submit", async ev => {
    ev.preventDefault();

    const transactionData = {
        name: document.querySelector("#name-transaction").value,
        value: parseFloat(document.querySelector("#value-transaction").value)
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
            value: parseFloat(document.querySelector("#value-transaction").value)
        };

        const response = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transactionData)
        });

        const editedTransaction = await response.json();

        if (!editedTransaction) {
            return alert("Não foi possível editar a transação!")
        };

        document.querySelector(`#name-transaction-${id}`).innerText = editedTransaction.name;
        document.querySelector(`#value-transaction-${id}`).innerText = editedTransaction.value.toFixed(2);

        const transactions = await findAll();

        balance = transactions.reduce((total, { value }) => total + value, 0);

        setBalance(balance);

        typeTransaction.innerText = "Adicionar Transação";
        btnAction.innerText = "Salvar";

        formTransaction.reset();

        btnCancel.style.display = "none";

        return alert("Editado com sucesso!");
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transactionData)
    });

    const savedTransaction = await response.json();

    renderTransaction(savedTransaction);

    const { value } = await findById(savedTransaction.id);

    balance -= value;

    setBalance(balance);

    formTransaction.reset();
});

const editTransaction = async (item) => {
    typeTransaction.innerText = "Editar Transação";
    btnAction.innerText = "Salvar Edição";

    const transactionId = item.id.split("-").at(-1);

    const inputNameToEdit = item.parentElement.children[`name-transaction-${transactionId}`].innerText;
    const inputValueToEdit = item.parentElement.children[`value-transaction-${transactionId}`].innerText;

    document.querySelector("#name-transaction").value = inputNameToEdit;
    document.querySelector("#value-transaction").value = inputValueToEdit;

    id = transactionId;

    btnCancel.style.display = "";
};

const deleteTransaction = async (item) => {
    if (!confirm("Tem certeza que deseja apagar?")) {
        return;
    };

    const idToDelete = item.id.split("-").at(-1);

    const { value } = await findById(idToDelete);

    balance -= value;

    setBalance(balance);

    const response = await fetch(`${url}/${idToDelete}`, {
        method: "DELETE",
    });

    const deletedTransaction = await response.json();

    if (!deletedTransaction) {
        return alert("Não foi possível remover a transação!")
    };

    item.parentElement.remove();
};

btnCancel.addEventListener("click", () => {
    typeTransaction.innerText = "Adicionar Transação";

    btnAction.innerText = "Salvar";

    formTransaction.reset();

    btnCancel.style.display = "none";
});
