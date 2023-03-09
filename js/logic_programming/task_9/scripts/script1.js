/*

### Calculadora Geométrica

Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve
iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa
também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

*/

"use strict";

function loopMenu() {
    let op;
    do {
        op = getOption();
        chosenOption(op);
    } while (op !== 6);
};

function getOption() {
    return parseFloat(
        prompt(
            "Exercício 9 - Calculadora Geométrica" +
            "\n" +
            "\nDigite 1 - Para cálculo da Área do Triangulo" +
            "\nDigite 2 - Para cálculo da Área do Retangulo" +
            "\nDigite 3 - Para cálculo da Área do Quadrado" +
            "\nDigite 4 - Para cálculo da Área do Trapézio" +
            "\nDigite 5 - Para cálculo da Área do Círculo" +
            "\nDigite 6 - Para Sair"
        )
    );
};

function chosenOption(op) {
    let result;
    switch (op) {
        case 1:
            result = triangleArea();
            break;
        case 2:
            result = rectangleArea();
            break;
        case 3:
            result = squareArea();
            break;
        case 4:
            result = trapezeArea();
            break;
        case 5:
            result = circleArea();
            break;
        case 6:
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida!");
    };
    result && alert("Resultado: " + result);
};

function triangleArea() {
    let base = parseFloat(prompt("Digite o valor da base:"));
    base = validateData(base);
    let heigth = parseFloat(prompt("Digite o valor da altura:"));
    heigth = validateData(heigth);
    return base * heigth / 2;
};

function rectangleArea() {
    let base = parseFloat(prompt("Digite o valor da base:"));
    base = validateData(base);
    let heigth = parseFloat(prompt("Digite o valor da altura:"));
    heigth = validateData(heigth);
    return base * heigth;
};

function squareArea() {
    let side = parseFloat(prompt("Digite o valor do lado:"));
    side = validateData(side);
    return side * side;
};

function trapezeArea() {
    let biggerBase = parseFloat(prompt("Digite o valor da base maior:"));
    biggerBase = validateData(biggerBase);
    let minorBase = parseFloat(prompt("Digite o valor da base menor:"));
    minorBase = validateData(minorBase);
    let heigth = parseFloat(prompt("Digite o valor da altura:"));
    heigth = validateData(heigth);
    return (biggerBase + minorBase) * heigth / 2;
};

function circleArea() {
    let radius = parseFloat(prompt("Digite o valor do raio:"));
    radius = validateData(radius);
    return 3.14 * (radius * radius);
};

function validateData(data) {
    do {
        if (isNaN(data)) {
            data = parseFloat(prompt("Campo não preenchido!" + "\n\nNova tentativa:"));
        };
    } while (isNaN(data));
    return data;
};

loopMenu();
