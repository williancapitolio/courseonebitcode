import { charkeyClickBtn } from "./modules/charkeyClickBtn.js";
import { clearClickBtn } from "./modules/clearClickBtn.js";
import { keyDownValue } from "./modules/keyDownValue.js";
import { calculate } from "./modules/calculate.js";
import { copyToClipboard } from "./modules/copyToClipboard.js";
import { themeSwitcher } from "./modules/themeSwitcher.js";

document.querySelectorAll(".charKey").forEach(charkeyClickBtn);

document.getElementById("clear").addEventListener("click", clearClickBtn);

document.querySelector('#input').addEventListener("keydown", keyDownValue);

document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard);

document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher);
