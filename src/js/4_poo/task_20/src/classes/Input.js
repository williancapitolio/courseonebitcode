const Component = require("./Component.js");

module.exports = class Input extends Component {
    constructor(domElement) {
        super(domElement = "input");
    };
};
