import Planet from "./entities/Planet.js";

export default class App {
  private static readonly planets: Planet[] = [];

  /* static checkPlanet(planet: Planet) {
    if (!planet) {
      return alert("Erro: Nenhum Planeta com o nome informado!");
    }
  } */

  /* static checkParameter(parameter: any, parameterType: string) {
    if (!parameter) {
      return alert(
        `Erro: Não foi possível concluir, pois o campo "${parameterType}" estava vazio!`
      );
    }
  } */

  static findPlanetByName(planetName: string): Planet {
    return App.planets.find((planet) => planet.name === planetName);
  }

  static createPlanet(
    name: string,
    coordinates: [number, number, number, number],
    situation: "Habitado" | "Habitável" | "Inabitável" | "Inexplorado"
  ) {
    App.planets.push(new Planet(name, coordinates, situation));
  }

  static updateSituation(
    planetName: string,
    option: "Habitado" | "Habitável" | "Inabitável" | "Inexplorado"
  ) {
    const planet = App.findPlanetByName(planetName);

    if (!planet) {
      return alert("Erro: Nenhum Planeta com o nome informado!");
    }

    if (!option) {
      return alert(
        `Erro: Não foi possível concluir, pois o campo "Opção" estava vazio!`
      );
    }

    if (planet.situation === option) {
      return alert(
        `Erro: O Planeta ${planet.name} já possui a situação ${planet.situation}!`
      );
    }

    planet.situation = option;

    return alert(
      `A situação do Planeta ${planet.name} foi atualizada para: ${planet.situation}!`
    );
  }

  static addSatellite(planetName: string, satellite: string) {
    const planet = App.findPlanetByName(planetName);

    if (!planet) {
      return alert("Erro: Nenhum Planeta com o nome informado!");
    }

    if (!satellite) {
      return alert(
        `Erro: Não foi possível concluir, pois o campo "Satélite" estava vazio!`
      );
    }

    const findSatellite = planet.satellites.find((sat) => sat === satellite);

    if (!findSatellite) {
      return alert(
        `Erro: Não foi possível concluir, no Planeta ${planet.name} já existe um Satélite com o nome ${satellite}!`
      );
    }

    planet.satellites.push(satellite);

    return alert(`Sucesso: O Satélite ${satellite} foi adicionado ao Planeta ${planetName}!`);
  }

  static removeSatellite(planetName: string, satellite: string) {
    const planet = App.findPlanetByName(planetName);

    if (!planet) {
      return alert("Erro: Nenhum Planeta com o nome informado!");
    }

    if (!satellite) {
      return alert(
        `Erro: Não foi possível concluir, pois o campo "Satélite" estava vazio!`
      );
    }

    const findSatellite = planet.satellites.find((sat) => sat === satellite);

    if (!findSatellite) {
      return alert(
        `Erro: Não foi possível concluir, pois no Planeta ${planet.name} não há um Satélite com o nome ${satellite}!`
      );
    }

    const indexToRemove = planet.satellites.indexOf(findSatellite);

    planet.satellites.splice(indexToRemove, 1);

    return alert(`Sucesso: O Satélite ${satellite} foi removido do Planeta ${planetName}!`);
  }
}
