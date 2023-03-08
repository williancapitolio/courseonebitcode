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
let pi = 3.14;
let ray;

function chosenOption(op) {
    switch (op) {

        case 1:
            base = parseFloat(prompt("Digite o valor da base:"));
            heigth = parseFloat(prompt("Digite o valor da altura:"));
            alert("Área do Triangulo: " + triangleArea(base, heigth));
            break;

        case 2:
            base = parseFloat(prompt("Digite o valor da base:"));
            heigth = parseFloat(prompt("Digite o valor da altura:"));
            alert("Área do Retangulo: " + rectangleArea(base, heigth));
            break;

        case 3:
            side = parseFloat(prompt("Digite o valor do lado:"));
            alert("Área do Quadrado: " + squareArea(side, side));
            break;

        case 4:
            biggerBase = parseFloat(prompt("Digite o valor da base maior:"));
            minorBase = parseFloat(prompt("Digite o valor da base menor:"));
            heigth = parseFloat(prompt("Digite o valor da altura:"));
            alert("Área do Trapézio: " + trapezedArea(biggerBase, minorBase, heigth));
            break;

        case 5:
            ray = parseFloat(prompt("Digite o valor do raio:"));
            alert("Área do Círculo: " + circleArea(ray));
            break;

        case 6:
            alert("Saindo...");
            break;

        default:
            alert("Opção inválida!");

    };
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

function trapezedArea(biggerBase, minorBase, heigth) {
    return (biggerBase + minorBase) * heigth / 2;
};

function circleArea(ray) {
    return pi * (ray * ray);
};

do {

    op = parseFloat(
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

    chosenOption(op);

} while (op !== 6);
