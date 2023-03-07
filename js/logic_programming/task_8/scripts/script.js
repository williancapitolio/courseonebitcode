/*

## Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.

*/

"use strict";

let op;
let immobilesArray = [];
let immobles;
let owner;
let numberOfRooms;
let numberOfBathrooms;
let hasGarage;
let imobleDelete;
let imobleDeleteArray;

do {
    immobles = "";

    for (let i = 0; i < immobilesArray.length; i++) {
        immobles += "Imóvel " + (i + 1) +
            " - Proprietário(a): " + immobilesArray[i].owner +
            ", Quantidade de quartos: " + immobilesArray[i].numberOfRooms +
            ", Quantidade de banheiros: " + immobilesArray[i].numberOfBathrooms +
            ", Possui garagem: " + immobilesArray[i].hasGarage + "." +
            "\n" +
            "\n"
    };

    op = parseFloat(
        prompt(
            "Exercício 8" +
            "\n" +
            "\nQuantidade de imóveis cadastrados: " + immobilesArray.length +
            "\n" +
            "\nDigite 1 - Para Cadastrar Imóvel" +
            "\nDigite 2 - Para Listar Imóveis" +
            "\nDigite 3 - Para Exluir Imóvel" +
            "\nDigite 4 - Para Sair"
        )
    );

    switch (op) {
        case 1:
            owner = prompt("Digite o nome do prorprietário:");
            numberOfRooms = parseFloat(prompt("Digite a quantidade de quartos:"));
            numberOfBathrooms = parseFloat(prompt("Digite a quantidade de banheiros:"));
            hasGarage = confirm("Possui garagem?");
            hasGarage ? hasGarage = "Sim" : hasGarage = "Não";
            owner && numberOfRooms && numberOfBathrooms ? immobilesArray.push(
                {
                    owner,
                    numberOfRooms,
                    numberOfBathrooms,
                    hasGarage
                }
            ) : alert("Prencha todos os campos!");
            break;

        case 2:
            immobilesArray.length > 0 ? alert(
                "Imóveis cadastrados:" +
                "\n" +
                "\n" + immobles
            ) : alert("Nenhum imóvel cadastrado!");
            break;

        case 3:
            if (immobilesArray.length > 0) {
                imobleDelete = parseFloat(
                    prompt(
                        "Digite o número do imóvel que deseja excluir:" +
                        "\n" +
                        "\n" + immobles
                    )
                );
                imobleDelete -= 1;
                imobleDeleteArray = immobilesArray[imobleDelete];
                if (imobleDeleteArray) {
                    immobilesArray.splice(imobleDelete, 1);
                    alert("Imóvel " + (imobleDelete + 1) + " apagado com sucesso!");
                } else {
                    alert("Nenhum imóvel com esse número!");
                };
            } else {
                alert("Nenhum imóvel cadastrado!");
            };
            break;

        case 4:
            alert("Saindo...");
            break;

        default:
            alert("Opção inválida!");

    };


} while (op !== 4);
