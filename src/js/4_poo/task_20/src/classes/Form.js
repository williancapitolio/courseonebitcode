import Component from "./Component.js";

export default class Form extends Component {
    constructor(domElement) {
        super(domElement = "form");

        this.form = function () {
            document.getElementsByClassName("form").append(document.createElement(domElement))
        };
    };

    addChild() { };
};
