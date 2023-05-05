import Character from "./Character.js";

export default class Mage extends Character {
    constructor(fullName, lifePoints, attackPoints, defensePoints, magicPoints) {
        super(fullName, lifePoints, attackPoints, defensePoints);

        this.magicPoints = magicPoints;
    };

    attack(target) {
        if (!target instanceof Character) {
            return console.log("O ataque falhou!");
        };

        const attakerData = `- Atacante - \n\nNome: ${this.fullName}\nPontos de Vida: ${this.lifePoints}\nPontos de Ataque: ${this.attackPoints}\nPontos de Defesa: ${this.defensePoints}\nPontos de Magia: ${this.magicPoints}`;
        const defensorData = `- Defensor - \n\nNome: ${target.fullName}\nPontos de Vida: ${target.lifePoints}\nPontos de Ataque: ${target.attackPoints}\nPontos de Defesa: ${target.defensePoints}`;

        console.log(attakerData, `\n`, `\n`, `\n`, defensorData, `\n`, `\n`, `\n`);

        if ((this.attackPoints + this.magicPoints) <= target.defensePoints) {
            return console.log("O ataque não surtiu efeito!");
        };

        const damageGiven = (this.attackPoints * this.magicPoints) - target.defensePoints;

        target.lifePoints = target.lifePoints - damageGiven;

        const resultAttack = `${this.fullName} atacou ${target.fullName} com um dano de ${damageGiven} e restaram ${target.lifePoints} pontos de vida.`;

        return console.log(resultAttack);
    };

    heal(target) {
        const curedValue = this.magicPoints * 2;

        target.lifePoints += curedValue;

        return console.log(`${this.fullName} curou ${target.fullName} em ${curedValue} e seus pontos de vida foram para ${target.lifePoints}!`);
    };
};
