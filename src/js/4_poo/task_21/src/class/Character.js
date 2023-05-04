export default class Character {
    constructor(fullName, lifePoints, attackPoints, defensePoints) {
        this.fullName = fullName;
        this.lifePoints = lifePoints;
        this.attackPoints = attackPoints;
        this.defensePoints = defensePoints;
    };

    attack(target) {
        if (!target instanceof Character) {
            return console.log("Ataque falhou!");
        };

        if (this.attackPoints <= target.defensePoints) {
            return console.log("O ataque não surtiu efeito!");
        };

        //target.lifePoints = target.lifePoints - (this.attackPoints - target.defensePoints);
        return console.log(`
            - Atacante -
            Nome: ${this.fullName}
            Pontos de Vida: ${this.lifePoints}
            Pontos de Ataque: ${this.attackPoints}
            Pontos de Defesa: ${this.defensePoints}

            - Defensor -
            Nome: ${target.fullName}
            Pontos de Vida: ${target.lifePoints}
            Pontos de Ataque: ${target.attackPoints}
            Pontos de Defesa: ${target.defensePoints}

            ${this.fullName} atacou ${target.fullName} e restaram ${target.lifePoints = target.lifePoints - (this.attackPoints - target.defensePoints)} pontos de vida.
        `);
    };
};
