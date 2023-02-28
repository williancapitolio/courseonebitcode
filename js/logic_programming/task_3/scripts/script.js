/*

## Conversor de Medidas

Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)

*/

"use strict";

const value = prompt(
    "Exercício 3" +
    "\n\nDigite um valor um metros:"
);

let valueNumeric = parseFloat(value);

const choice = prompt(
    "Deseja converter " + valueNumeric + " metros (m) para qual medida?\n" +
    "\nDigite 1 - para milímetro (mm)" +
    "\nDigite 2 - para centímetro (cm)" +
    "\nDigite 3 - para decímetro (dm)" +
    "\nDigite 4 - para decâmetro (dam)" +
    "\nDigite 5 - para hectômetro (hm)" +
    "\nDigite 6 - para quilômetro (km)" +
    "\nDigite 7 - para finalizar"
);

const choiceNumeric = parseFloat(choice);

switch (choiceNumeric) {
    case 1:
        alert("A conversão de " + valueNumeric + " metros(m) resultou em " + valueNumeric * 1000 + " milímetros (mm).");
        break;
    case 2:
        alert("A conversão de " + valueNumeric + " metros(m) resultou em " + valueNumeric * 100 + " centímetros (cm).");
        break;
    case 3:
        alert("A conversão de " + valueNumeric + " metros(m) resultou em " + valueNumeric * 10 + " decímetros (dm).");
        break;
    case 4:
        alert("A conversão de " + valueNumeric + " metros(m) resultou em " + valueNumeric / 10 + " decâmetros (dam).");
        break;
    case 5:
        alert("A conversão de " + valueNumeric + " metros(m) resultou em " + valueNumeric / 100 + " hectômetros (hm).");
        break;
    case 6:
        alert("A conversão de " + valueNumeric + " metros(m) resultou em " + valueNumeric / 1000 + " quilômetros (km).");
        break;
    case 7:
        alert("Finalizando...");
        break;
    default:
        alert("Opção inválida!");
        location.reload();
};
