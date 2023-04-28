const Component = require("./Component.js");

module.exports = class Label extends Component {
    constructor(domElement) {
        super(domElement = "label");
    };
};
