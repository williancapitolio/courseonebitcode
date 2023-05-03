import Component from "./Component.js";

export default class Input extends Component {
    constructor(type, domElement) {
        super(domElement = "input");

        this.type = type;

        this.type();
    };

    type() {
        //return this.buildElement().type = type;
        return console.log(`Teste teste: ${this.type}`);
    };
};
