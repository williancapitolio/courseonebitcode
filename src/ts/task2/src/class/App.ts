import Planet from "./entities/Planet";

type typeOption = "Habitado" | "Habitável" | "Inabitável" | "Inexplorado";

export default class App {
  private static readonly planets: Planet[] = [];

  static findPlanetByName(planetName: string): Planet {
    return App.planets.find((planet) => planet.name === planetName);
  }

  static createPlanet(
    name: string,
    coordinates: [number, number, number, number],
    situation: typeOption
  ) {
    App.planets.push(new Planet(name, coordinates, situation));
  }

  static updateSituation(planetName: string, option: typeOption) {
    App.findPlanetByName(planetName).situation = option;
  }

  static addSatellite(planetName: string, satellite: string) {
    App.findPlanetByName(planetName).satellites.push(satellite);
  }

  static removeSatellite(planetName: string, indexToRemove: number) {
    App.findPlanetByName(planetName).satellites.splice(indexToRemove, 1);
  }

  static listPlanets() {
    let list = `Planetas Cadastrados:\n\n`;

    App.planets.length > 0 ? App.planets.forEach((planet, i
      ) => {
        list += `Planeta: ${i + 1
        }\nNome: ${planet.name
        }\nCoordenadas:\n${planet.coordinates.reduce(
          (acc, cord, i) => acc + ("- Coordenada " + (i + 1) + ". " + cord + "\n"), "")
        }Situação: ${planet.situation
        }\nSatélites:\n${planet.satellites.length > 0 ? planet.satellites.reduce(
          (acc, sat, i) => acc + ("- Satélite " + (i + 1 )+ ". " + sat + "\n"),"") : "Nenhum Satélite Cadastrado\n"
        }\n`;
    }) : list += "Nenhum Planeta Cadastrado!";

    alert(list);
  }
}
