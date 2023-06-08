import App from "./class/App.js";

let op: number;

const op1 = "\n1. Criar um Planeta";
const op2 = "\n2. Atualizar situação de um Planeta";
const op3 = "\n3. Adicionar Satélite em um Planeta";
const op4 = "\n4. Remover Satélite de um Planeta";
const op5 = "\n5. Listar Planetas";
const op6 = "\n6. Finalizar";

do {
  op = Number(prompt(`Escolha uma opção:${op1}${op2}${op3}${op4}${op5}${op6}`));

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

      let situationOp: number;

      situationOp = Number(
        prompt(
          "Digite o número da situação do Planeta:\n1. Habitado\n2. Habitável\n3. Inabitável\n4. Inexplorado"
        )
      );

      let situation: "Habitado" | "Habitável" | "Inabitável" | "Inexplorado";

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
      break;

    case 3:
      break;

    case 4:
      break;

    case 5:
      break;

    case 6:
      alert("Finalizando...");
      break;

    default:
      alert("Opção inválida!");
  }
} while (op !== 6);
