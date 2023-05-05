import Character from "./Character.js";

export default class Thief extends Character {
    constructor(fullName, lifePoints, attackPoints, defensePoints) {
        super(fullName, lifePoints, attackPoints, defensePoints);
    };

    attack(target) {
        if (!target instanceof Character) {
            return console.log("O ataque falhou!");
        };

        this.attackerAndDefensorData(target);

        if ((this.attackPoints * 2) <= target.defensePoints) {
            return console.log("O ataque não surtiu efeito!");
        };

        const damageGiven = (this.attackPoints * 2) - target.defensePoints;

        target.lifePoints = target.lifePoints - damageGiven;

        const resultAttack = `${this.fullName} atacou ${target.fullName} com um dano de ${damageGiven} e restaram ${target.lifePoints} pontos de vida.`;

        return console.log(resultAttack);
    };
};
