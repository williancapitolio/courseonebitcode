import Spaceship from "./entities/Spaceship";

export default class App {
  private static spaceships: Object[];

  static get listSpaceships(): Object[] {
    return App.spaceships;
  }

  static createSpaceship(name: String, pilot: String, crewLimit: Number) {
    const newSpaceship = new Spaceship(name, pilot, crewLimit);
    App.spaceships.push(newSpaceship);
  };
};
