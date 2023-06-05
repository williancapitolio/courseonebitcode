import Spaceship from "./entities/Spaceship";

export default class App {
  private static spaceships: [String, String, Number, String[], Boolean];

  static get listSpaceships(): [String, String, Number, String[], Boolean] {
    return App.spaceships;
  }

  static createSpaceship(name: String, pilot: String, crewLimit: Number) {
    const newSpaceship = new Spaceship(name, pilot, crewLimit);
    App.spaceships.push(newSpaceship.name, newSpaceship.pilot, newSpaceship.crewLimit, newSpaceship.crew, newSpaceship.inMission);
  };

  static findSpaceshipByName(spaceshipName: String) {
    return App.spaceships.find(n => n === spaceshipName)
  }
};
