export default class Planet {
    constructor(name, coordinates, situation) {
        this.satellites = [];
        this.name = name;
        this.coordinates = coordinates;
        this.situation = situation;
    }
}
