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
    const vacancies = [];
    let op;
    do {
        op = getOp();
        loopActions(op, vacancies);
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

function loopActions(op, vacancies) {
    switch (op) {
        case 1:
            listAvailableJobs(vacancies);
            break;
        case 2:
            createNewVacancy(vacancies);
            break;
        case 3:
            viewVacancy(vacancies);
            break;
        case 4:
            registerCandidateForVacancy(vacancies);
            break;
        case 5:
            deleteVacancy(vacancies);
            break;
        case 6:
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida!");
    };
};

function listAvailableJobs(vacancies) {
    if (vacancies.length > 0) {
        alert("Vagas disponíveis");
        vacancies.forEach(function (vacancy, i) {
            alert(
                "Vaga número: " + (i + 1) +
                "\nNome da vaga: " + vacancy.name +
                "\nQuantidade de candidatos inscritos: " + vacancy.candidates.length
            );
        });
    } else {
        alert("Nenhuma vaga disponível!");
    };
};

function createNewVacancy(vacancies) {
    const vacancy = {};
    vacancy.name = prompt("Digite o nome da vaga:");
    vacancy.desc = prompt("Digite a descrição da vaga:");
    vacancy.deadline = prompt("Digite a data limite da vaga:")
    vacancy.candidates = [];
    confirm(
        "Confirme as informações" +
        "\n" +
        "\nNome da vaga: " + vacancy.name +
        "\nDescrição da vaga: " + vacancy.desc +
        "\nData limite para inscrição a vaga:: " + vacancy.deadline
    ) ? vacancies.push(vacancy) : alert(
        "Criação de nova vaga cancelada!"
    );
};

function viewVacancy(vacancies) {
    const index = getIndexOfVacancy(vacancies);
    if (index || index === 0) {
        if (vacancies[index]) {
            vacancies[index].candidates.length > 0 ? alert(
                "Informações da vaga" +
                "\n" +
                "\nNome: " + vacancies[index].name +
                "\nDescrição: " + vacancies[index].desc +
                "\nData limite para inscrição: " + vacancies[index].deadline +
                "\nQuantidade de candidatos inscritos: " + vacancies[index].candidates.length +
                "\nNome dos candidatos inscritos: " + vacancies[index].candidates
            ) : alert(
                "Informações da vaga" +
                "\n" +
                "\nNome: " + vacancies[index].name +
                "\nDescrição: " + vacancies[index].desc +
                "\nData limite para inscrição: " + vacancies[index].deadline +
                "\nQuantidade de candidatos inscritos: 0"
            );
        } else {
            alert("Digite um número válido!");
        };
    };
};

function registerCandidateForVacancy(vacancies) {
    if (vacancies.length > 0) {
        const candidate = prompt("Digite o nome do candidato:");
        if (candidate) {
            const index = getIndexOfVacancy(vacancies);
            if (vacancies[index]) {
                const confirmRegister = confirm(
                    "Deseja cadastrar o candidato " + candidate +
                    " na vaga número " + (index + 1) +
                    " - " + vacancies[index].name + "?"
                );
                if (confirmRegister) {
                    vacancies[index].candidates.push(candidate);
                    alert(
                        "Candidato " + candidate +
                        " registrado com sucesso na vaga número " + (index + 1) +
                        " - " + vacancies[index].name
                    );
                } else {
                    alert(
                        "Registro de candidato cancelado!"
                    );
                };
            } else {
                alert("Digite um número válido!");
            };
        } else {
            alert("Digite um nome válido!");
        };
    } else {
        alert("Nenhuma vaga disponível!");
    };
};

function deleteVacancy(vacancies) {
    const index = getIndexOfVacancy(vacancies);
    if (index || index === 0) {
        if (vacancies[index]) {
            const confirmDelete = confirm(
                "Deseja realmente excluir a vaga número " + (index + 1) +
                " - " + vacancies[index].name + "?"
            );
            if (confirmDelete) {
                vacancies.splice(index, 1);
                alert(
                    "Vaga número " + (index + 1) + " excluída com sucesso!"
                );
            } else {
                alert(
                    "Exclusão de vaga cancelada!"
                );
            };
        } else {
            alert("Digite um número válido!");
        };
    };
};

function getIndexOfVacancy(vacancies) {
    if (vacancies.length > 0) {
        let getIndexes = "";
        let indexVacancy = "";
        getIndexes = vacancies.map(function (vacancy, i) {
            return getIndexes = "Vaga número " + (i + 1) + " - " + vacancy.name + "\n";
        });
        indexVacancy = prompt(
            "Lista de vagas" +
            "\n" + getIndexes +
            "\nDigite o número da vaga"
        );
        indexVacancy -= 1;
        parseFloat(indexVacancy);
        return indexVacancy;
    } else {
        alert("Nenhuma vaga disponível!");
        return false;
    };
};

loopMenu();
