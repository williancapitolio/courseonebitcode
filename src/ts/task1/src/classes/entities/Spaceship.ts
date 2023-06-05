import Member from "./Member.js";

export default class Spaceship {
  name: string;
  pilot: string;
  crewLimit: number;
  crew: Member[];
  inMission: boolean;

  constructor(name: string, pilot: string, crewLimit: number) {
    this.name = name;
    this.pilot = pilot;
    this.crewLimit = crewLimit;
    this.crew = [];
    this.inMission = false;
  }
}
