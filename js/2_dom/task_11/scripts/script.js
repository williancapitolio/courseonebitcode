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

    const confirmSelectPlayer = confirm(
        "Confirme a escalação: " +
        "\nPosição: " + player.position +
        "\nNome: " + player.name +
        "\nNúmero: " + player.number
    );

    if (!confirmSelectPlayer) {
        alert("Escalação cancelada!");
        return;
    };

    players.push(player);
    alert("Escalação confirmada!");

    document.getElementById("player-position").value = "";
    document.getElementById("player-name").value = "";
    document.getElementById("player-number").value = "";

    listPlayers();
};

function removePlayer() {
    const numberToDelete = document.getElementById("player-number-remove").value;

    const playerToDelete = players.findIndex(function (index) {
        return index.number === numberToDelete;
    });

    document.getElementById("player-number-remove").value = "";
};

function listPlayers() {
    const formListSection = document.getElementById("players-list");

    const ul = document.createElement("ul");

    let liPlayer = ""

    players.forEach(function (player, i) {
        liPlayer = document.createElement("li");
        liPlayer.textContent = "# " + (i + 1) +
            " - Posição: " + player.position +
            ", Nome: " + player.name +
            ", Número: " + player.number;
    });

    ul.appendChild(liPlayer);

    formListSection.append(ul);
};
