export function calculate() {
    document.getElementById("result").value = "ERROR";
    document.getElementById("result").classList.add("error");
    const result = eval(document.getElementById("input").value);
    document.getElementById("result").value = result;
    document.getElementById("result").classList.remove("error");
};
