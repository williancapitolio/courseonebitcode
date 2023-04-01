import { calculate } from "./calculate.js";

export function keyDownValue(ev) {
    ev.preventDefault();
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];
    if (allowedKeys.includes(ev.key)) {
        document.getElementById("input").value += ev.key;
        return;
    };
    if (ev.key === "Backspace") {
        document.getElementById("input").value = document.getElementById("input").value.slice(0, -1);
    };
    if (ev.key === "Enter") {
        calculate();
    };
};
