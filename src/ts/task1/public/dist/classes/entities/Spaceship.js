export default class Spaceship {
    constructor(name, pilot, crewLimit) {
        this.name = name;
        this.pilot = pilot;
        this.crewLimit = crewLimit;
        this.crew = [];
        this.inMission = false;
    }
}
