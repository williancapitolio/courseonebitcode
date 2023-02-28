/*

## Teste de Velocidade

Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

--//--

## Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

*/

"use strict";

let choice = prompt(
    "Exercício 2\n" +
    "\nDigite 1 - Para Teste de Velocidade" +
    "\nDigite 2 - Para Cálculo de Dano" +
    "\nDigite 3 - Para Finalizar\n" +
    "\nDigite a sua opção:"
);

switch (choice) {
    case "1":
        let nameCarOne = prompt("Digite o nome do primeiro carro:");
        let speedCarOne = prompt("Digite a velocidade do " + nameCarOne + ":");
        let nameCarTwo = prompt("Digite o nome do segundo carro:");
        let speedCarTwo = prompt("Digite a velocidade do " + nameCarTwo + ":");
        if (speedCarOne > speedCarTwo) {
            alert(nameCarOne + " é mais rápido que " + nameCarTwo);
        } else if (speedCarTwo > speedCarOne) {
            alert(nameCarTwo + " é mais rápido que " + nameCarOne);
        } else {
            alert("As velocidades de " + nameCarOne + " e " + nameCarTwo + " são iguais.");
        };
        break;

    case "2":
        let attackerName = prompt("Digite o nome do personagem atacante:");
        let attackerPowerPrompt = prompt("Digite o poder de ataque do " + attackerName + ":");
        let defensorName = prompt("Digite o nome do personagem defensor:");
        let defensorHealthPointsPrompt = prompt("Digite a quantidade de pontos de vida do " + defensorName + ":");
        let defensorPowerPrompt = prompt("Digite o poder de defesa do " + defensorName + ":");
        let defensorHaveShild = confirm("O defensor possui um escudo? (S/N)");
        let attackerPower = parseFloat(attackerPowerPrompt);
        let defensorHealthPoints = parseFloat(defensorHealthPointsPrompt);
        let defensorPower = parseFloat(defensorPowerPrompt);
        let damageDone = 0;
        if (attackerPower > defensorPower && !defensorHaveShild) {
            damageDone = attackerPower - defensorPower;
        } else if (attackerPower > defensorPower && defensorHaveShild) {
            damageDone = attackerPower - defensorPower;
            damageDone /= 2;
        } else if (attackerPower <= defensorPower) {
            damageDone = 0;
        };
        let defensorHealthPointsLeft = defensorHealthPoints - damageDone;
        let verifyShield = defensorHaveShild ? " e possui um escudo" : " e não possui um escudo";
        alert(
            "O dano causado foi de " + damageDone + " pontos.\n" +
            "\n" + attackerName + ", o atacante, possui " + attackerPower + " pontos de poder de ataque" +
            "\n" + defensorName + ", o defensor, possui " +
            defensorHealthPointsLeft + " pontos de vida sobrando, " +
            defensorPower + " pontos de poder de defesa" + verifyShield
        );
        break;

    case "3":
        alert("Programa finalizado!");
        break;

    default:
        alert("Digite uma opção válida!");
        location.reload();
};
