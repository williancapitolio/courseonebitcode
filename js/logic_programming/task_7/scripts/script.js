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
let patientsArray = [];
let patientName;
let patientPosition = 0;
let patientRemoved;

let op2;


do {
    op = parseFloat(
        prompt(
            "Exercício 7\n" +
            "\nDigite 1 - Para Fila de Espera" +
            "\nDigite 2 - para Pilha de Cartas" +
            "\nDigite 3 - para Encerrar"
        )
    );

    switch (op) {

        case 1:
            do {
                patientsArray.length > 0 ? op1 = parseFloat(
                    prompt(
                        "Fila de Espera" +
                        "\n" +
                        "\nPacientes na fila de espera:" +
                        "\n-" + patientsArray +
                        "\n" +
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
                        patientName = prompt("Digite o nome do paciente:");
                        if (patientName) {
                            patientPosition++;
                            patientsArray.push(" " + patientPosition + "º " + patientName);
                            alert("Paciente: " + patientName + " adicionado na fila de espera!");
                        } else {
                            alert("Não foi digitado nenhum nome!");
                        };
                        break;

                    case 2:
                        patientRemoved = patientsArray.shift()//.slice(4);
                        console.log(patientRemoved)
                        if (patientRemoved) {
                            patientRemoved = patientRemoved.slice(4);
                            console.log(patientRemoved)
                            alert("Paciente consultado: " + patientRemoved);
                        } else {
                            alert("Nenhum paciente na fila de espera!");
                        };
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
            break;

        case 3:
            alert("Encerrando...");
            break;

        default:
            alert("Opção inválida!");

    };
} while (op !== 3);
