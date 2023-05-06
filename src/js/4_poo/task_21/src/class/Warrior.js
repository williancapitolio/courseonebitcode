import Character from "./Character.js";

export default class Warrior extends Character {
    constructor(fullName, lifePoints, attackPoints, defensePoints, shieldPoints) {
        super(fullName, lifePoints, attackPoints, defensePoints);

        this.shieldPoints = shieldPoints;
        this.position = "Ataque";
    };

    attack(target) {
        if (!target instanceof Character) {
            return console.log("O ataque falhou!");
        };

        if (this.position === "Defesa") {
            const attakerData = `- Atacante - \n\nNome: ${this.fullName}\nPontos de Vida: ${this.lifePoints}\nPontos de Ataque: ${this.attackPoints}\nPontos de Defesa: ${this.defensePoints}\nPontos de Escudo: ${this.shieldPoints}\nPontos de Defesa Total: ${this.defensePoints + this.shieldPoints}\nPosição: ${this.position}`;
            const defensorData = `- Defensor - \n\nNome: ${target.fullName}\nPontos de Vida: ${target.lifePoints}\nPontos de Defesa: ${target.defensePoints}`;

            console.log(attakerData, `\n`, `\n`, `\n`, defensorData, `\n`, `\n`, `\n`);

            return console.log("Não é possível atacar em modo de defesa!");
        };

        if (this.position === "Ataque") {
            const attakerData = `- Atacante - \n\nNome: ${this.fullName}\nPontos de Vida: ${this.lifePoints}\nPontos de Ataque: ${this.attackPoints}\nPontos de Defesa: ${this.defensePoints}\nPontos de Escudo: ${this.shieldPoints}\nPosição: ${this.position}`;
            const defensorData = `- Defensor - \n\nNome: ${target.fullName}\nPontos de Vida: ${target.lifePoints}\nPontos de Defesa: ${target.defensePoints}`;

            console.log(attakerData, `\n`, `\n`, `\n`, defensorData, `\n`, `\n`, `\n`);

            if (this.attackPoints <= target.defensePoints) {
                return console.log("O ataque não surtiu efeito!");
            };

            const damageGiven = this.attackPoints - target.defensePoints;

            target.lifePoints = target.lifePoints - damageGiven;

            const resultAttack = `${this.fullName} atacou ${target.fullName} com um dano de ${damageGiven} e restaram ${target.lifePoints} pontos de vida.`;

            return console.log(resultAttack);
        };
    };

    togglePosition() {
        if (this.position === "Ataque") {
            this.position = "Defesa";
            this.defensePoints += this.shieldPoints;
        } else {
            this.position = "Ataque";
            this.defensePoints -= this.shieldPoints;
        };
    };
};
