import Planet from "./entities/Planet";

export default class App {
  private static readonly planets: Planet[] = [];

  static checkParameter(parameter: any, parameterType: string) {
    if (!parameter) {
      return alert(
        `Erro: Não foi possível concluir, pois o campo "${parameterType}" estava vazio.`
      );
    }
  }

  static findPlanetByName(planetName: string) {
    return App.planets.find((planet) => planet.name === planetName);
  }

  static updateSituation(
    planetName: string,
    option: "Habitado" | "Habitável" | "Inabitável" | "Inexplorado"
  ) {
    const planet = App.findPlanetByName(planetName);

    if (!planet) {
      return alert("Erro: Nenhum Planeta com o nome informado!");
    }

    App.checkParameter(option, "Opção");

    planet.situation = option;

    return alert(
      `A situação do planeta ${planet.name} foi atualizada para: ${planet.situation}.`
    );
  }

  static addSatellite(planetName: string, satellite: string) {
    const planet = App.findPlanetByName(planetName);

    if (!planet) {
      return alert("Erro: Nenhum Planeta com o nome informado!");
    }

    App.checkParameter(satellite, "Satélite");

    planet.satellites.push(satellite);
  }
}
