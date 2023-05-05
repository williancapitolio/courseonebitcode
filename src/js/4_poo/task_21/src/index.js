import Character from "./class/Character.js";
import Thief from "./class/Thief.js";

const atacante = new Character("atacante", 1000, 250, 250);
const defensor = new Character("defensor", 1000, 100, 100);
const ladrao = new Thief("ladrão", 500, 51, 50);

atacante.attack(defensor);
ladrao.attack(defensor);