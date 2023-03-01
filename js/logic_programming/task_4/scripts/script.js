/*

## Visitando Novas Cidades

Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade.
Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue
perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa
deve exibir o nome do turista, quantas e quais cidades ele visitou.

*/

"use strict";

const touristName = prompt("Exerício 3 - Visitando Novas Cidades\n\nDigite o nome do turista:");
let count = 0;
let visited = true;
let cityName = "";
let citiesVisited = "";
let helper = ", "

while (visited) {
    cityName = prompt("Digite o nome de uma cidade:");
    if (cityName) {
        cityName = cityName + helper;
        visited = confirm("Você já visitou essa cidade?");
        if (!visited) break;
        count++;
        citiesVisited += cityName;
    } else {
        alert("Nome da cidade não poder estar em branco!");
    };
};

//citiesVisited = citiesVisited.slice(0, citiesVisited.length -2);
citiesVisited = citiesVisited.replace(/..$/, '.');

citiesVisited.length === 0 ? alert(
    "O turista " + touristName +
    " não visitou nenhuma cidade."
) : alert(
    "O turista " + touristName +
    " visitou as seguintes cidades: " + citiesVisited +
    "\nUm total de " + count + " cidades."
);
