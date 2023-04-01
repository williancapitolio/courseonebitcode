import { input } from "./variables.js";

export function charkeyClickBtn(charKeyBtn) {
    charKeyBtn.addEventListener("click", function () {
        const value = charKeyBtn.dataset.value;
        input.value += value;
    });
};
