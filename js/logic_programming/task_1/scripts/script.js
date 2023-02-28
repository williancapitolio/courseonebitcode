/*
## Cadastro de Recrutas

Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

- o primeiro nome
- o sobrenome
- o campo de estudo
- o ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).

--//--

## Calculadora de 4 Operações

Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los na tela.

*/

"use strict";

let choice = prompt(
    "Exercício 1\n" +
    "\nDigite 1 - Para Cadastro de Recrutas" +
    "\nDigite 2 - Para Calculadora de 4 Operações" +
    "\nDigite 3 - Para finalizar o programa" +
    "\n\nDigite sua opção:"
);

switch (choice) {
    case "1":
        let firstName = prompt("Insira seu nome:");
        let secondName = prompt("Insira seu sobrenome:");
        let studyField = prompt("Insira seu campo de estudo:");
        let yearBirth = prompt("Insira seu ano de nascimento:");
        if (!firstName && !secondName && !studyField && !yearBirth) {
            alert("Digite em todos os campos!");
            location.reload();
        } else {
            alert(
                "Recruta cadastrado com sucesso!\n" +
                "\nNome completo: " + firstName + " " + secondName +
                "\n" + "Campo de estudos: " + studyField +
                "\n" + "Idade: " + (2023 - yearBirth)
            );
            location.reload();
        };
        break;

    case "2":
        let firstNumber = prompt("Insira o primeiro número:");
        let secondNumber = prompt("Insira o segundo número:");
        if (!firstNumber && !secondNumber) {
            alert("Digite em todos os campos!");
            location.reload();
        } else {
            alert(
                "Quatro operações" +
                "\n" + "Soma: " + (parseFloat(firstNumber) + parseFloat(secondNumber)) +
                "\n" + "Subtração: " + (firstNumber - secondNumber) +
                "\n" + "Multiplicação: " + (firstNumber * secondNumber) +
                "\n" + "Divisão: " + (firstNumber / secondNumber)
            );
            location.reload();
        };
        break;

    case "3":
        alert("Programa finalizado!");
        break;

    default:
        alert("Digite uma opção válida!");
        location.reload();
};
