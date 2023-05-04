import Character from "./class/Character.js";

const atacante = new Character("atacante", 1000, 250, 250);
const defensor = new Character("defensor", 900, 100, 100);

atacante.attack(defensor);