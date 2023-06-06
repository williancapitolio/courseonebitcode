import App from "./classes/App.js";

/* App.createSpaceship("Teste0", "Teste0", 10);
App.createSpaceship("Teste1", "Teste1", 10);
App.createSpaceship("Teste2", "Teste2", 10);
App.createSpaceship("Teste3", "Teste3", 10); */

document.querySelector("#list-spaceship")?.addEventListener("click", () => {
  App.listSpaceships;
});

document.querySelector("#add-spaceship")?.addEventListener("click", () => {
  const name = prompt("Qual o nome da espaçonave?");
  const pilot = prompt("Qual o nome do piloto da espaçonave?");
  const crewLimit = Number(prompt("Qual a capacidade máxima da espaçonave?"));

  if (!name || !pilot || !crewLimit) {
    return alert("Erro: É necessário preencher todos os campos!");
  }

  App.createSpaceship(name, pilot, crewLimit);
});

document.querySelector("#add-crew")?.addEventListener("click", () => {
  const name = prompt("Qual o nome da espaçonave?");

  if (!name) {
    return alert("Erro: Nome da espaçonave é obrigatório!");
  };

  const crewName = prompt("Qual o nome do tripulante?");

  if (!crewName) {
    return alert("Erro: Nome do tripulante é obrigatório!");
  };

  App.addMemberToCrew(name, crewName);
});

document.querySelector("#send-spaceship")?.addEventListener("click", () => {
  const name = prompt("Qual o nome da espaçonave?");

  if (!name) {
    return alert("Erro: Nome da espaçonave é obrigatório!");
  };

  App.sendSpaceshiptToMission(name);
})
