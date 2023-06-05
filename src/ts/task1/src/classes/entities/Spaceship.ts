export default class Spaceship {
  name: String;
  pilot: String;
  crewLimit: Number;
  crew: String[];
  inMission: Boolean;

  constructor(name: String, pilot: String, crewLimit: Number) {
    this.name = name;
    this.pilot = pilot;
    this.crewLimit = crewLimit;
    this.crew = [];
    this.inMission = false;
  };
};
