/*

### Escalação do Time

Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

- Escalar um jogador
    - Informar a posição do jogador a ser escalado para o time.
    - Informar o nome do jogador.
    - Informar o número da camisa do jogador.
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e
então insere as informações em uma lista na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e
então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

Dica: lembrando que é possível acessar o texto de um input através da propriedade value.

*/

"use strict";

const players = [];

function selectPlayer() {
    const player = {};

    player.position = document.getElementById("player-position").value;
    player.name = document.getElementById("player-name").value;
    player.number = document.getElementById("player-number").value;

    if (!player.position || !player.name || !player.number) {
        alert(
            "Erro: Preencha todos os campos!"
        );
        document.getElementById("player-position").focus();
        return;
    };

    const verifyNumber = players.find(function (playerNumber) {
        return playerNumber.number === player.number;
    });

    if (verifyNumber) {
        alert(
            "Erro: Este número já está sendo utilizado!"
        );
        document.getElementById("player-number").focus();
        return;
    };

    const confirmSelectPlayer = confirm(
        "Confirmação: Confirme a escalação: " +
        "\n" +
        "\nPosição: " + player.position +
        "\nNome: " + player.name +
        "\nNúmero: " + player.number
    );

    if (!confirmSelectPlayer) {
        alert(
            "Não confirmado: Jogador não escalado!"
        );
        return;
    };

    players.push(player);

    alert(
        "Sucesso: Jogador escalado!"
    );

    document.getElementById("player-position").value = "";
    document.getElementById("player-name").value = "";
    document.getElementById("player-number").value = "";

    listPlayers();
};

function removePlayer() {
    if (!players.length > 0) {
        alert(
            "Erro: Nenhum jogador escalado!"
        );
        document.getElementById("player-position").focus();
        return;
    };

    const numberToDelete = document.getElementById("player-number-remove").value;

    if (!numberToDelete) {
        alert(
            "Erro: Preencha o número do jogador que deseja remover!"
        );
        document.getElementById("player-number-remove").focus();
        return;
    };

    const playerToDelete = players.findIndex(function (index) {
        return index.number === numberToDelete;
    });

    if (!players[playerToDelete]) {
        alert(
            "Erro: Jogador com número '" +
            numberToDelete +
            "' não encontrado!"
        );
        document.getElementById("player-number-remove").focus();
        return;
    };

    const confirmDelete = confirm(
        "Confirmação: Realmente deseja remover o jogador " +
        players[playerToDelete].name +
        "?"
    );

    if (!confirmDelete) {
        alert(
            "Não confirmado: Jogador " +
            players[playerToDelete].name +
            " não removido!"
        );
        document.getElementById("player-number-remove").focus();
        return;
    };

    players.splice(playerToDelete, 1);

    const formListSection = document.getElementById("players-list");
    const ul = document.getElementsByTagName("ul");

    formListSection.removeChild(ul[playerToDelete]);

    alert(
        "Sucesso: Jogador removido!"
    );

    document.getElementById("player-number-remove").value = "";
};

function listPlayers() {
    const formListSection = document.getElementById("players-list");

    const ul = document.createElement("ul");

    let liPlayer = "";

    players.forEach(function (player) {
        liPlayer = document.createElement("li");
        liPlayer.textContent = "Posição: " + player.position +
            ", Nome: " + player.name +
            ", Número: " + player.number;
    });

    ul.appendChild(liPlayer);

    formListSection.append(ul);
};
