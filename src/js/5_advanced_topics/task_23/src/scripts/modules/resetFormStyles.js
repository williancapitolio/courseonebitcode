export const resetFormStyles = (inputs) => {
    Object.entries(inputs).forEach(([key, value]) => {
        document.getElementById(`${key}-error`).textContent = "";
        value.classList.remove("success", "error");
    });
};
