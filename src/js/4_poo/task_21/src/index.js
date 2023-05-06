import Character from "./class/Character.js";
import Mage from "./class/Mage.js";
import Thief from "./class/Thief.js";
import Warrior from "./class/Warrior.js";

const atacante = new Character("atacante", 1000, 250, 250);
const defensor = new Character("defensor", 1000, 100, 100);
const ladrao = new Thief("ladrão", 500, 51, 50);
const mago = new Mage("mago", 300, 100, 150, 250);
const guerreiro = new Warrior("guerreiro", 1500, 250, 250, 300);

//atacante.attack(defensor);

//ladrao.attack(defensor);

//mago.attack(defensor);
//mago.heal(ladrao);

/* guerreiro.attack(defensor);
guerreiro.togglePosition();
guerreiro.attack(defensor); */

console.table({atacante, defensor, ladrao, mago, guerreiro})
