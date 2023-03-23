/*

## Tic-Tac-Toe / Jogo da Velha

Construa um jogo tic-tac-toe, conhecido em português como jogo da velha, utilizando HTML, CSS e Javascript.
Você pode desenvolver com liberdade, da forma que preferir, mas o jogo precisa atender aos seguintes requisitos:

- Deve ser possível incluir os nomes dos dois jogadores;

- O nome do jogador da vez deve ser mostrado na tela e alterado a medida que os turnos vão se alternando;

- Um tabuleiro deve ser mostrado na tela e ser atualizado quando o jogador clicar na região que ele quer marcar;

- Quando um jogador clicar no tabuleiro deve ser marcado um “X” ou “O” de acordo com o jogador da vez e não
deve ser possível clicar naquela região novamente;

- Quando um jogador ganhar seu nome deve ser mostrado na tela e as regiões da vitória devem ser destacadas de
alguma forma;

- Em caso de empate, uma mensagem de empate deve ser mostrada na tela;

- Deve ser possível reiniciar o jogo para jogar novamente.

*/

"use strict";

function flashMsg(status, text) {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.border = "1px solid " + status;
    div.style.top = "1rem";
    div.style.right = "1rem";
    div.style.height = "3rem";
    div.style.width = "30%";
    div.style.textAlign = "center";
    div.id = "flashMsg";
    div.innerText = text;

    setTimeout(function () {
        document.getElementById("flashMsg").remove();
    }, 2000);

    return div;
};

function startAndRestartGame(
    oneValue = "",
    oneDisabled = false,
    twoValue = "",
    twoDisabled = false,
    sgDisabled = false,
    btn = true,
    boardDisabled = false,
    boardText = ""
) {
    playerOne.value = oneValue;
    playerOne.disabled = oneDisabled;
    playerTwo.value = twoValue;
    playerTwo.disabled = twoDisabled;
    startGame.disabled = sgDisabled;
    btnRestart.disabled = btn;
    gameBoard.forEach(function (board) {
        board.disabled = boardDisabled;
        board.innerText = boardText;
    });
};

const main = document.getElementById("main");

const players = document.getElementById("players");

const currentPlayer = document.getElementById("currentPlayer");

const playerOne = document.getElementById("playerOne");

const playerTwo = document.getElementById("playerTwo");

const startGame = document.getElementById("startGame");

const ticTacToe = document.getElementById("ticTacToe");

const gameBoard = document.querySelectorAll(".gameBoard");

const winnerPlayer = document.getElementById("winnerPlayer");

const btnRestart = document.getElementById("btnRestart");

const statusSuccess = "#198754";
const statusDanger = "#dc3545";
const statusOK = "#0d6efd";

let playerGaming = "X";
let valueGaming = "";

startGame.addEventListener("click", function (event) {
    const playerOneName = playerOne.value;
    if (!playerOneName) {
        main.appendChild(flashMsg(statusDanger, "Preencha o nome do primeiro jogador!"));
        playerOne.focus();
        return;
    };

    const playerTwoName = playerTwo.value;
    if (!playerTwoName) {
        main.appendChild(flashMsg(statusDanger, "Preencha o nome do segundo jogador!"));
        playerTwo.focus();
        return;
    };

    if (playerOneName === playerTwoName) {
        main.appendChild(flashMsg(statusDanger, "O nome dos jogadores não podem ser iguais!"));
        return;
    };

    startAndRestartGame(playerOneName, true, playerTwoName, true, true, false);

    main.appendChild(flashMsg(statusSuccess, "O jogo irá iniciar!"));
});

gameBoard.forEach(function (board) {
    board.addEventListener("click", function () {
        if (!playerOne.value || !playerTwo.value) {
            main.appendChild(flashMsg(statusDanger, "Preencha o nome dos jogadores para iniciar a partida!"));
            return;
        };
        if (playerGaming === "X") {
            board.innerText = playerGaming;
            playerGaming = "O";
            board.disabled = true;
        } else {
            board.innerText = playerGaming;
            playerGaming = "X";
            board.disabled = true;
        };
    });
});

btnRestart.addEventListener("click", function (event) {
    startAndRestartGame();

    main.appendChild(flashMsg(statusSuccess, "O jogo irá reiniciar!"));
});
