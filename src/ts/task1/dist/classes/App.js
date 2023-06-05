"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spaceship_1 = require("./entities/Spaceship");
var App = /** @class */ (function () {
    function App() {
    }
    Object.defineProperty(App, "listSpaceships", {
        get: function () {
            return App.spaceships;
        },
        enumerable: false,
        configurable: true
    });
    App.createSpaceship = function (name, pilot, crewLimit) {
        var newSpaceship = new Spaceship_1.default(name, pilot, crewLimit);
        App.spaceships.push(newSpaceship.name, newSpaceship.pilot, newSpaceship.crewLimit);
    };
    ;
    return App;
}());
exports.default = App;
;
