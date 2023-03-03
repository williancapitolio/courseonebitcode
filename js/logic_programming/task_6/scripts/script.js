/*

## Robô da Tabuada

Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20).
O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de
multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa
deve exibir esses resultados e finalizar.

## Procurando Palíndromos

Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo
é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar
pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não
um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita
e da direita para esquerda.

*/

"use strict";

let op;

do {
    op = parseFloat(
        prompt(
            "Exercício 6\n" +
            "\nDigite 1 - Para Robô da Tabuada" +
            "\nDigite 2 - Para Procurando Palíndromos" +
            "\nDigite 3 - Para Encerrar"
        )
    );
    let result = "";
    switch (op) {
        case 1:
            let number = parseFloat(prompt("Digite um número:"));
            for (let i = 1; i <= 20; i++) {
                result += number + " * " + i + " = " + number * i + "\n";
            };
            alert(
                "Tabuada de 20 do número " + number + ":" +
                "\n" + result
            );
            break;
        case 2:
            break;
        case 3:
            alert("Encerrando...");
            break;
        default:
            alert("Opção inválida!");
    };
} while (op !== 3);
