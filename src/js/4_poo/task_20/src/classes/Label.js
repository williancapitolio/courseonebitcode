import Component from "./Component.js";

export default class Label extends Component {
    constructor(text, domElement) {
        super(domElement = "label");

        this.text = text;
    };

    setText() {
        const element = this.buildElement();
        element.innerText = this.text;
        console.log(element);
        return element;
    }
};
