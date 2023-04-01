export function charkeyClickBtn(charKeyBtn) {
    charKeyBtn.addEventListener("click", function () {
        const value = charKeyBtn.dataset.value;
        document.getElementById("input").value += value;
    });
};
