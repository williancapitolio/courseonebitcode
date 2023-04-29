import Component from "./Component.js";

export default class Label extends Component {
    constructor(text, domElement) {
        super(domElement = "label");

        this.text = text;
        this.setText = function () {
            const element = this.buildElement();
            element.innerText = this.text;
            return document.getElementById("body").append(element);
        }
    };
};
