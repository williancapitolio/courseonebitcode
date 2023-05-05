export default class Character {
    constructor(fullName, lifePoints, attackPoints, defensePoints) {
        this.fullName = fullName[0].toUpperCase() + fullName.substring(1);
        this.lifePoints = lifePoints;
        this.attackPoints = attackPoints;
        this.defensePoints = defensePoints;
    };

    attackerAndDefensorData(target) {
        const attakerData = `- Atacante - \n\nNome: ${this.fullName}\nPontos de Vida: ${this.lifePoints}\nPontos de Ataque: ${this.attackPoints}`;
        const defensorData = `- Defensor - \n\nNome: ${target.fullName}\nPontos de Vida: ${target.lifePoints}\nPontos de Defesa: ${target.defensePoints}`;

        console.log(attakerData, `\n`, `\n`, `\n`, defensorData, `\n`, `\n`, `\n`);
    };

    attack(target) {
        if (!target instanceof Character) {
            return console.log("Ataque falhou!");
        };

        this.attackerAndDefensorData(target);

        if (this.attackPoints <= target.defensePoints) {
            return console.log("O ataque não surtiu efeito!");
        };

        const damageGiven = this.attackPoints - target.defensePoints;

        target.lifePoints = target.lifePoints - damageGiven;

        const resultAttack = `${this.fullName} atacou ${target.fullName} com um dano de ${damageGiven} e restaram ${target.lifePoints} pontos de vida.`;

        return console.log(resultAttack);
    };
};
