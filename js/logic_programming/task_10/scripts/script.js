/*

## Sistema de Vagas de Emprego

Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar
as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
    - Listar vagas disponíveis
    - Criar um nova vaga
    - Visualizar uma vaga
    - Inscrever um candidato em uma vaga
    - Excluir uma vaga
    - Sair
- A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas
as vagas.
- A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também
deve pedir que o usuário confirme as informações antes de salvá-las.
- A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice,
nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
- A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma
confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
- A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário
confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora
sempre que possível, como os objetos, arrays e funções.

*/

"use strict";

function loopMenu() {
    let op;
    do {
        op = getOp();
        loopActions(op);
    } while (op !== 6);
};

function getOp() {
    return parseFloat(
        prompt(
            "Exercício 10 - Sistema de Vagas de Emprego" +
            "\n" +
            "\nDigite 1 - Para Listar Vagas Disponíveis" +
            "\nDigite 2 - Para Criar Um Nova Vaga" +
            "\nDigite 3 - Para Visualizar Uma Vaga" +
            "\nDigite 4 - Para Inscrever Um Candidato Em Uma Vaga" +
            "\nDigite 5 - Para Excluir Uma Vaga" +
            "\nDigite 6 - Para Sair"
        )
    );
};

function loopActions(op) {
    switch (op) {
        case 1:
            listAvailableJobs();
            break;
        case 2:
            createNewVacancy();
            break;
        case 3:
            viewVacancy();
            break;
        case 4:
            registerCandidateForVacancy();
            break;
        case 5:
            deleteVacancy();
            break;
        case 6:
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida!");
    };
};

function listAvailableJobs() {};

function createNewVacancy() {};

function viewVacancy() {};

function registerCandidateForVacancy() {};

function deleteVacancy() {};

loopMenu();
