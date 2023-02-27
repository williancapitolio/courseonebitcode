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

alert("Exercício 1");
alert("Para Cadastro de Recrutas - Digite 1 \nPara Calculadora de 4 Operações - Digite 2");


let number = prompt("Insira o número 1 ou número 2:");

switch (number) {
    case "1":
        let firstName = prompt("Insira seu nome:")
        let secondName = prompt("Insira seu sobrenome:")
        let studyField = prompt("Insira seu campo de estudo:")
        let yearBirth = prompt("Insira seu ano de nascimento:")
        alert(
            "Nome completo:" + firstName + " " + secondName +
            "\n" + "Campo de estudos: " + studyField +
            "\n" + "Idade: " + (2023 - yearBirth)
        );
        break;

    case "2":
        let firstNumber = prompt("Insira o primeiro número:");
        let secondNumber = prompt("Insira o segundo número:");
        alert(
            "Quatro operações" +
            "\n" + "Soma: " + (parseInt(firstNumber) + parseInt(secondNumber)) +
            "\n" + "Subtração: " + (firstNumber - secondNumber) +
            "\n" + "Multiplicação: " + (firstNumber * secondNumber) +
            "\n" + "Divisão: " + (firstNumber / secondNumber)
        );
        break;

    default:
        alert("Opção inválida!")
    break;
}
