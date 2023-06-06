var _a, _b, _c, _d;
import App from "./classes/App.js";
/* App.createSpaceship("Teste0", "Teste0", 10);
App.createSpaceship("Teste1", "Teste1", 10);
App.createSpaceship("Teste2", "Teste2", 10);
App.createSpaceship("Teste3", "Teste3", 10); */
(_a = document.querySelector("#list-spaceship")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    App.listSpaceships;
});
(_b = document.querySelector("#add-spaceship")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    const name = prompt("Qual o nome da espaçonave?");
    const pilot = prompt("Qual o nome do piloto da espaçonave?");
    const crewLimit = Number(prompt("Qual a capacidade máxima da espaçonave?"));
    if (!name || !pilot || !crewLimit) {
        return alert("Erro: É necessário preencher todos os campos!");
    }
    App.createSpaceship(name, pilot, crewLimit);
});
(_c = document.querySelector("#add-crew")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    const name = prompt("Qual o nome da espaçonave?");
    if (!name) {
        return alert("Erro: Nome da espaçonave é obrigatório!");
    }
    ;
    const crewName = prompt("Qual o nome do tripulante?");
    if (!crewName) {
        return alert("Erro: Nome do tripulante é obrigatório!");
    }
    ;
    App.addMemberToCrew(name, crewName);
});
(_d = document.querySelector("#send-spaceship")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    const name = prompt("Qual o nome da espaçonave?");
    if (!name) {
        return alert("Erro: Nome da espaçonave é obrigatório!");
    }
    ;
    App.sendSpaceshiptToMission(name);
});
