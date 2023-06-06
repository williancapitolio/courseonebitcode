import Spaceship from "./entities/Spaceship.js";
import Member from "./entities/Member.js";
class App {
    static get listSpaceships() {
        if (App.spaceships.length === 0) {
            const err = "Erro: Nenhuma espaçonave existente!";
            return alert(err);
        }
        return App.spaceships.forEach((spaceship, index) => {
            let mission;
            if (spaceship.inMission) {
                mission = "Sim";
            }
            else {
                mission = "Não";
            }
            alert(`Espaçonave ${index + 1}
      Nome: ${JSON.stringify(spaceship.name)}
      Piloto: ${JSON.stringify(spaceship.pilot)}
      Capacidade: ${JSON.stringify(spaceship.crewLimit)}
      Tripulação: ${JSON.stringify(spaceship.crew)}
      Em missão: ${mission}`);
        });
    }
    static findSpaceshipByName(spaceshipName) {
        return App.spaceships.find((spacechip) => spacechip.name === spaceshipName);
    }
    static createSpaceship(name, pilot, crewLimit) {
        if (App.findSpaceshipByName(name)) {
            const err = "Erro: Essa espaçonave já existe!";
            return alert(err);
        }
        const newSpaceship = new Spaceship(name, pilot, crewLimit);
        App.spaceships.push(newSpaceship);
        alert("Sucesso: Espaçonave criada com sucesso!");
    }
    static addMemberToCrew(name, memberName) {
        if (!App.findSpaceshipByName(name)) {
            const err = "Erro: Essa espaçonave não existe!";
            return alert(err);
        }
        const spacechip = App.findSpaceshipByName(name);
        if (!spacechip) {
            const err = "Erro: espaçonave não existe!";
            return alert(err);
        }
        if (spacechip.crew.length >= spacechip.crewLimit) {
            const err = "Erro: Essa espaçonave já possui o número máximo de tripulantes!";
            return alert(err);
        }
        const member = new Member(memberName);
        spacechip.crew.push(member);
        alert("Sucesso: Tripulante adicionado à espaçonave!");
    }
    static sendSpaceshiptToMission(name) {
        const spacechip = App.findSpaceshipByName(name);
        if (!spacechip) {
            const err = "Erro: Espaçonave informada não existe!";
            return alert(err);
        }
        if (spacechip.crew.length === 0) {
            const err = "Erro: Nenhum tripulante na espaçonave!";
            return alert(err);
        }
        if (Math.floor(spacechip.crewLimit / 3) >= spacechip.crew.length) {
            const err = `Erro: É necessário que tenha pelo menos ${Math.floor(spacechip.crewLimit / 3 + 1)} tripulantes para sair em missão!`;
            return alert(err);
        }
        spacechip.inMission = true;
        alert("Sucesso: Espaçonave enviada em missão!");
    }
}
App.spaceships = [];
export default App;
