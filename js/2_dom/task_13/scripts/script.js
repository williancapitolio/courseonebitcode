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

function callFlashMsg(status, text) {
    main.appendChild(flashMsg(status, text));
};

function startAndRestartGame(
    oneValue = "",
    oneDisabled = false,
    twoValue = "",
    twoDisabled = false,
    sgDisabled = false,
    btn = true,
    boardDisabled = true,
    boardText = "",
    playerGaming = "Inicie e partida!",
    winner = "Quem vai vencer?"
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
    setPlayerGaming.innerText = playerGaming;
    winnerPlayer.innerText = winner;
};

function validateGame(result, playerName) {
    const winningPlays = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5]
    ];
    winningPlays.forEach(function (play) {
        if (gameBoard[play[0]].innerText === result &&
            gameBoard[play[1]].innerText === result &&
            gameBoard[play[2]].innerText === result) {
            return winnerPlayer.innerText = playerName + " ganhou!";
        };
    });
};

function validateWinnerPlayer(value, playerName) {
    validateGame(value, playerName);
    if (winnerPlayer.innerText === playerName + " ganhou!") {
        gameBoard.forEach(function (board) {
            board.disabled = true;
        });
        callFlashMsg(statusSuccess, "Jogador " + playerName + " ganhou a partida!");
        return;
    };
};

const main = document.getElementById("main");

const players = document.getElementById("players");

const currentPlayer = document.getElementById("currentPlayer");

const setPlayerGaming = document.getElementById("setPlayerGaming");

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

let valueGaming = "X";

startGame.addEventListener("click", function (event) {
    const playerOneName = playerOne.value;
    if (!playerOneName) {
        callFlashMsg(statusDanger, "Preencha o nome do primeiro jogador!");
        playerOne.focus();
        return;
    };

    const playerTwoName = playerTwo.value;
    if (!playerTwoName) {
        callFlashMsg(statusDanger, "Preencha o nome do segundo jogador!");
        playerTwo.focus();
        return;
    };

    if (playerOneName === playerTwoName) {
        callFlashMsg(statusDanger, "O nome dos jogadores não podem ser iguais!");
        return;
    };

    startAndRestartGame(
        playerOneName,
        true,
        playerTwoName,
        true,
        true,
        false,
        false,
        "",
        "Vez do jogador: " + playerOneName
    );

    callFlashMsg(statusSuccess, "O jogo irá iniciar!");
});

gameBoard.forEach(function (board, index) {
    board.addEventListener("click", function () {
        if (!playerOne.value || !playerTwo.value) {
            callFlashMsg(statusDanger, "Preencha o nome dos jogadores para iniciar a partida!");
            return;
        };

        if (valueGaming === "X") {
            board.innerText = valueGaming;
            valueGaming = "O";
            board.disabled = true;
            setPlayerGaming.innerText = "Vez do jogador: " + playerTwo.value;;
        } else {
            board.innerText = valueGaming;
            valueGaming = "X";
            board.disabled = true;
            setPlayerGaming.innerText = "Vez do jogador: " + playerOne.value;
        };

        if (gameBoard[0].innerText &&
            gameBoard[1].innerText &&
            gameBoard[2].innerText &&
            gameBoard[3].innerText &&
            gameBoard[4].innerText &&
            gameBoard[5].innerText &&
            gameBoard[6].innerText &&
            gameBoard[7].innerText &&
            gameBoard[8].innerText) {
            callFlashMsg(statusOK, "Deu velha!");
            return winnerPlayer.innerText = "Deu velha!";
        };

        validateWinnerPlayer("X", playerOne.value);

        validateWinnerPlayer("O", playerTwo.value);
    });
});

btnRestart.addEventListener("click", function (event) {
    startAndRestartGame();

    callFlashMsg(statusOK, "O jogo irá reiniciar!");
});
