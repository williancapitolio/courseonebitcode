"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spaceship = /** @class */ (function () {
    function Spaceship(name, pilot, crewLimit) {
        this.name = name;
        this.pilot = pilot;
        this.crewLimit = crewLimit;
        this.crew = [];
        this.inMission = false;
    }
    ;
    return Spaceship;
}());
exports.default = Spaceship;
;
