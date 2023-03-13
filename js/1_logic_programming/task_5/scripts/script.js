/*

## Menu Interativo

Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes.
O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam
de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em
alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção
escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar
acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que
o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.

## Controle Financeiro

Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro
disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e
remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa
deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e
então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover
dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.

*/

"use strict";

const opPrompt = prompt(
    "Exercício 5\n" +
    "\nDigite 1 - Para Menu Interativo" +
    "\nDigite 2 - Para Controle Financeiro" +
    "\nDigite 3 - Para Encerrar"
);

let op = parseFloat(opPrompt);

switch (op) {
    case 1:
        let opt;
        do {
            const optPrompt = prompt(
                "Menu Interativo\n" +
                "\nOpção 1 - Ação primeira opção" +
                "\nOpção 2 - Ação segunda opção" +
                "\nOpção 3 - Ação terceira opção" +
                "\nOpção 4 - Ação quarta opção" +
                "\nOpção 5 - Encerrar"
            );
            opt = parseFloat(optPrompt);
            switch (opt) {
                case 1:
                    alert("Opção 1 selecionada");
                    break;
                case 2:
                    alert("Opção 2 selecionada");
                    break;
                case 3:
                    alert("Opção 3 selecionada");
                    break;
                case 4:
                    alert("Opção 4 selecionada");
                    break;
                case 5:
                    alert("Encerrando...");
                    break;
                default:
                    alert("Opção inválida!");
            };
        } while (opt !== 5);
        break;
    case 2:
        let opti;
        let moneyPrompt = prompt("Controle Financeiro\n" +
            "\nDigite a quantidade inicial de dinheiro: ");
        let money = parseFloat(moneyPrompt);
        do {
            const optiPrompt = prompt(
                "Quantidade atual: " + money + " R$\n" +
                "\nDigite 1 - para adicionar dinheiro" +
                "\nDigite 2 - para remover dinheiro" +
                "\nDigite 3 - para encerrar"
            );
            opti = parseFloat(optiPrompt);
            switch (opti) {
                case 1:
                    let moneyAddPrompt = prompt("Quantos R$ deseja adicionar?");
                    let moneyAdd = parseFloat(moneyAddPrompt);
                    money += moneyAdd;
                    break;
                case 2:
                    let moneyRemovePrompt = prompt("Quantos R$ deseja remover?");
                    let moneyRemove = parseFloat(moneyRemovePrompt);
                    money -= moneyRemove;
                    break;
                case 3:
                    alert("Encerrando...");
                    break;
                default:
                    alert("Opção inválida!");
            };
        } while (opti !== 3);
        money < 0 ? alert(
            "Não restou dinheiro e está negativado em: R$ " + money
        ) : alert(
            "A quantidade de dinheiro restante é de: R$ " + money
        );
        break;
    case 3:
        alert("Encerrando...");
        break;
    default:
        alert("Opção inválida!");
        location.reload();
};
