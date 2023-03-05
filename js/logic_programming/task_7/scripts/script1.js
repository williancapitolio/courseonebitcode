/*

## Fila de Espera

Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa
deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em
ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir
escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome
do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do
paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso
contrário deve voltar ao menu.

## Pilha de Cartas

Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na
tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de
“Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve
perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve
retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado
ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

*/

"use strict";

let op;

let op1;
let patients;
let patientsArray = [];
let patientAdd;
let patientRemoved;

let op2;
let cardsArray = [];
let cardName;
let cardRemoved;

do {
    op = parseFloat(
        prompt(
            "Exercício 7" +
            "\n" +
            "\nDigite 1 - Para Fila de Espera" +
            "\nDigite 2 - para Pilha de Cartas" +
            "\nDigite 3 - para Encerrar"
        )
    );

    switch (op) {

        case 1:
            do {
                patients = "";
                
                for (let i = 0; i < patientsArray.length; i++) {
                    patients += (i + 1) + "º - " + patientsArray[i] + "\n";
                };

                patientsArray.length > 0 ? op1 = parseFloat(
                    prompt(
                        "Fila de Espera" +
                        "\n" +
                        "\nPacientes na fila de espera:" +
                        "\n" + patients +
                        "\nDigite 1 - Para Novo Paciente" +
                        "\nDigite 2 - Para Consultar Paciente" +
                        "\nDigite 3 - Para Sair"
                    )
                ) : op1 = parseFloat(
                    prompt(
                        "Fila de Espera" +
                        "\n" +
                        "\nNenhum paciente na fila de espera!" +
                        "\n" +
                        "\nDigite 1 - Para Novo Paciente" +
                        "\nDigite 2 - Para Consultar Paciente" +
                        "\nDigite 3 - Para Sair"
                    )
                );

                switch (op1) {
                    case 1:
                        patientAdd = prompt("Digite o nome do paciente:");
                        patientAdd ? patientsArray.push(patientAdd) : alert("Não foi digitado nenhum nome!");
                        break;

                    case 2:
                        patientRemoved = patientsArray.shift();
                        patientRemoved ? alert("Paciente consultado: " + patientRemoved) : alert("Nenhum paciente na fila de espera!");
                        break;

                    case 3:
                        alert("Saindo...");
                        break;

                    default:
                        alert("Opção inválida!");

                };
            } while (op1 !== 3);
            break;

        case 2:
            do {
                cardsArray.length > 0 ? op2 = parseFloat(
                    prompt(
                        "Pilha de cartas" +
                        "\n" +
                        "\nQuantidade de cartas no baralho: " + cardsArray.length +
                        "\n-" + cardsArray +
                        "\n" +
                        "\nDigite 1 - Para Adicionar Carta" +
                        "\nDigite 2 - Para Puxar Carta" +
                        "\nDigite 3 - Para Sair"
                    )
                ) : op2 = parseFloat(
                    prompt(
                        "Pilha de cartas" +
                        "\n" +
                        "\nQuantidade de cartas no baralho: " + cardsArray.length +
                        "\n" +
                        "\nDigite 1 - Para Adicionar Carta" +
                        "\nDigite 2 - Para Puxar Carta" +
                        "\nDigite 3 - Para Sair"
                    )
                );
                
                switch (op2) {
                    case 1:
                        cardName = prompt("Digite o nome da carta:");
                        cardName ? cardsArray.push(" " + cardName) : alert("Nenhuma carta digitada!");
                        break;

                    case 2:
                        cardRemoved = cardsArray.pop();
                        cardRemoved ? alert("Carta removida:" + cardRemoved) : alert("O baralho está vazio!");
                        break;

                    case 3:
                        alert("Saindo...");
                        break;

                    default:
                        alert("Opção inválida!");

                };
            } while (op2 !== 3);
            break;

        case 3:
            alert("Encerrando...");
            break;

        default:
            alert("Opção inválida!");

    };
} while (op !== 3);
