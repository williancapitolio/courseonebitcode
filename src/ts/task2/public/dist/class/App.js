class App {
    static checkParameter(parameter, parameterType) {
        if (!parameter) {
            return alert(`Erro: Não foi possível concluir, pois o campo "${parameterType}" estava vazio.`);
        }
    }
    static findPlanetByName(planetName) {
        return App.planets.find((planet) => planet.name === planetName);
    }
    static updateSituation(planetName, option) {
        const planet = App.findPlanetByName(planetName);
        if (!planet) {
            return alert("Erro: Nenhum Planeta com o nome informado!");
        }
        App.checkParameter(option, "Opção");
        planet.situation = option;
        return alert(`A situação do planeta ${planet.name} foi atualizada para: ${planet.situation}.`);
    }
    static addSatellite(planetName, satellite) {
        const planet = App.findPlanetByName(planetName);
        if (!planet) {
            return alert("Erro: Nenhum Planeta com o nome informado!");
        }
        App.checkParameter(satellite, "Satélite");
        planet.satellites.push(satellite);
    }
}
App.planets = [];
export default App;
