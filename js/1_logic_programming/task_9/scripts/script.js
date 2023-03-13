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

let op;
let base;
let heigth;
let side;
let biggerBase;
let minorBase;
let radius;

function loopMenu() {
    do {
        getOption();
        chosenOption(op);
    } while (op !== 6);
};

function getOption() {
    return op = parseFloat(
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
    switch (op) {

        case 1:
            base = parseFloat(prompt("Digite o valor da base:"));
            base = validateData(base);
            heigth = parseFloat(prompt("Digite o valor da altura:"));
            heigth = validateData(heigth);
            alert("Área do Triangulo: " + triangleArea(base, heigth));
            break;

        case 2:
            base = parseFloat(prompt("Digite o valor da base:"));
            base = validateData(base);
            heigth = parseFloat(prompt("Digite o valor da altura:"));
            heigth = validateData(heigth);
            alert("Área do Retangulo: " + rectangleArea(base, heigth));
            break;

        case 3:
            side = parseFloat(prompt("Digite o valor do lado:"));
            side = validateData(side);
            alert("Área do Quadrado: " + squareArea(side, side));
            break;

        case 4:
            biggerBase = parseFloat(prompt("Digite o valor da base maior:"));
            biggerBase = validateData(biggerBase);
            minorBase = parseFloat(prompt("Digite o valor da base menor:"));
            minorBase = validateData(minorBase);
            heigth = parseFloat(prompt("Digite o valor da altura:"));
            heigth = validateData(heigth);
            alert("Área do Trapézio: " + trapezeArea(biggerBase, minorBase, heigth));
            break;

        case 5:
            radius = parseFloat(prompt("Digite o valor do raio:"));
            radius = validateData(radius);
            alert("Área do Círculo: " + circleArea(radius));
            break;

        case 6:
            alert("Saindo...");
            break;

        default:
            alert("Opção inválida!");

    };
};

function validateData(data) {
    do {
        if (isNaN(data)) {
            data = parseFloat(prompt("Campo não preenchido!" + "\n\nNova tentativa:"));
        };
    } while (isNaN(data));
    return data;
};

function triangleArea(base, heigth) {
    return base * heigth / 2;
};

function rectangleArea(base, heigth) {
    return base * heigth;
};

function squareArea(side) {
    return side * side;
};

function trapezeArea(biggerBase, minorBase, heigth) {
    return (biggerBase + minorBase) * heigth / 2;
};

function circleArea(radius) {
    return 3.14 * (radius * radius);
};

loopMenu();
