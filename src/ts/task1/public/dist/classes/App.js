import Spaceship from "./entities/Spaceship.js";
import Member from "./entities/Member.js";
class App {
    static get listSpaceships() {
        return App.spaceships;
    }
    static findSpaceshipByName(spaceshipName) {
        return App.spaceships.find((spacechip) => spacechip.name === spaceshipName);
    }
    static createSpaceship(name, pilot, crewLimit) {
        if (App.findSpaceshipByName(name)) {
            const err = "Erro: Essa espaçonave já existe!";
            return err;
        }
        const newSpaceship = new Spaceship(name, pilot, crewLimit);
        App.spaceships.push(newSpaceship);
    }
    static addMemberToCrew(name, memberName) {
        if (!App.findSpaceshipByName(name)) {
            const err = "Erro: Essa espaçonave não existe!";
            return err;
        }
        const spacechip = App.findSpaceshipByName(name);
        if (!spacechip) {
            const err = "Erro: espaçonave não existe!";
            return err;
        }
        if (spacechip.crew.length >= spacechip.crewLimit) {
            const err = "Erro: Essa espaçonave já possui o número máximo de tripulantes!";
            return err;
        }
        const member = new Member(memberName);
        spacechip.crew.push(member);
    }
    static sendSpaceshiptToMission(name) {
        if (!App.findSpaceshipByName(name)) {
            const err = "Erro: Essa espaçonave não existe!";
            return err;
        }
        const spacechip = App.findSpaceshipByName(name);
        if (!spacechip) {
            const err = "Erro: espaçonave não existe!";
            return err;
        }
        if (spacechip.crew.length === 0) {
            const err = "Erro: Nenhum tripulante na espaçonave!";
            return err;
        }
        if (Math.floor(spacechip.crewLimit / 3) >= spacechip.crew.length) {
            const err = `Erro: É necessário que tenha pelo menos ${Math.floor(spacechip.crewLimit / 3 + 1)} tripulantes para sair em missão!`;
            return err;
        }
        spacechip.inMission = true;
    }
}
App.spaceships = [];
export default App;
