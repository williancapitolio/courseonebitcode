import App from "./class/App";

let op: number;

const op1 = "\n1. Criar um Planeta";
const op2 = "\n2. Atualizar situação de um Planeta";
const op3 = "\n3. Adicionar Satélite em um Planeta";
const op4 = "\n4. Remover Satélite de um Planeta";
const op5 = "\n5. Listar Planetas";
const op6 = "\n6. Finalizar";

do {
  op = Number(prompt(`Escolha uma opção:${op1}${op2}${op3}${op4}${op5}${op6}`));
  let situationOp: number;
  let situation: "Habitado" | "Habitável" | "Inabitável" | "Inexplorado";

  switch (op) {
    case 1:
      const name = prompt("Digite o nome do Planeta:");
      if (!name) {
        alert("Erro: Nome do Planeta não informado!");
        break;
      }

      if (App.findPlanetByName(name)) {
        alert(`Erro: Já existe um Planeta com o nome ${name}`);
        break;
      }

      const coord1 = Number(prompt("Digite a Primeira Coordenada:"));
      if (!coord1) {
        alert("Erro: Primeira Coordenada não informada!");
        break;
      }

      const coord2 = Number(prompt("Digite a Segunda Coordenada:"));
      if (!coord2) {
        alert("Erro: Segunda Coordenada não informada!");
        break;
      }

      const coord3 = Number(prompt("Digite a Terceira Coordenada:"));
      if (!coord3) {
        alert("Erro: Terceira Coordenada não informada!");
        break;
      }

      const coord4 = Number(prompt("Digite a Quarta Coordenada:"));
      if (!coord4) {
        alert("Erro: Quarta Coordenada não informada!");
        break;
      }

      situationOp = Number(
        prompt(
          "Digite o número da situação do Planeta:\n1. Habitado\n2. Habitável\n3. Inabitável\n4. Inexplorado"
        )
      );

      if (situationOp === 1) situation = "Habitado";
      else if (situationOp === 2) situation = "Habitável";
      else if (situationOp === 3) situation = "Inabitável";
      else if (situationOp === 4) situation = "Inexplorado";
      else {
        alert("Erro: Opção escolhida não registrada!");
        break;
      }

      App.createPlanet(name, [coord1, coord2, coord3, coord4], situation);

      alert(`Sucesso: Planeta ${name} foi criado!`);
      break;

    case 2:
      const plaUpdate = prompt(
        "Digite o nome do Planeta para situação ser mudada:"
      );
      if (!plaUpdate) {
        if (!name) {
          alert("Erro: Nome do Planeta não informado!");
          break;
        }
      }

      const planet = App.findPlanetByName(plaUpdate);

      if (!planet) {
        alert(`Erro: Nenhum Planeta com o nome ${plaUpdate}!`);
        break;
      }

      situationOp = Number(
        prompt(
          "Digite o número da situação do Planeta:\n1. Habitado\n2. Habitável\n3. Inabitável\n4. Inexplorado"
        )
      );

      if (situationOp === 1) situation = "Habitado";
      else if (situationOp === 2) situation = "Habitável";
      else if (situationOp === 3) situation = "Inabitável";
      else if (situationOp === 4) situation = "Inexplorado";
      else {
        alert("Erro: Opção escolhida não registrada!");
        break;
      }

      if (planet.situation === situation) {
        alert(
          `Erro: O Planeta ${plaUpdate} já possui a situação ${situation}!`
        );
        break;
      }

      App.updateSituation(plaUpdate, situation);

      alert(
        `Sucesso: Situação do planeta ${plaUpdate} foi atualizada para ${situation}!`
      );
      break;

    case 3:
      const planetName = prompt("Digite o nome do Planeta:");
      if (!planetName) {
        alert("Erro: Nenhum nome digitado!");
        break;
      }

      const planetToAddSatellite = App.findPlanetByName(planetName);
      if (!planetToAddSatellite) {
        alert(`Erro: Nenhum Planeta com o nome ${planetToAddSatellite}!`);
        break;
      }

      const satellite = prompt("Digite o nome do Satélite:");
      if (!satellite) {
        alert("Erro: Nenhum satélite digitado!");
        break;
      }

      if (planetToAddSatellite.satellites.find((sat) => sat === satellite)) {
        alert(
          `Erro: no Planeta ${planetName} já existe um Satélite com o nome ${satellite}!`
        );
        break;
      }

      App.addSatellite(planetName, satellite);

      alert(
        `Sucesso: Adicionado no Planeta ${planetName} o Satélite ${satellite}!`
      );
      break;

    case 4:
      const namePlanet = prompt("Digite o nome do planeta");
      if (!namePlanet) {
        alert("Erro: Nenhum nome informado!");
        break;
      }

      const planetToRemoveSatellite = App.findPlanetByName(namePlanet);
      if (!planetToRemoveSatellite) {
        alert(`Erro: Nenhum Planeta com o nome ${namePlanet}!`);
        break;
      }

      if (planetToRemoveSatellite.satellites.length < 0) {
        alert(`Erro: No Planeta ${namePlanet} não existe nenhum Satélite!`);
        break;
      }

      const listSatellites = planetToRemoveSatellite.satellites.reduce(
        (acc, sat, i) => acc + (i + 1 + ". " + sat + "\n"),
        ""
      );

      let idx = Number(
        prompt(
          `Digite o número do Satélite que deseja remover: \n${listSatellites}`
        )
      );
      if (!idx) {
        alert("Erro: Opção escolhida não registrada!");
        break;
      }
      idx -= 1;

      const conf = confirm(
        `Deseja realmente remover o Satélite ${planetToRemoveSatellite.satellites[idx]} do Planeta ${namePlanet}?`
      );

      if (!conf) {
        alert("Satélite não removido!")
        break;
      }

      App.removeSatellite(namePlanet, idx);
      alert("Sucesso: Removido!")
      break;

    case 5:
      App.listPlanets();
      break;

    case 6:
      alert("Finalizando...");
      break;

    default:
      alert("Opção inválida!");
  }
} while (op !== 6);
