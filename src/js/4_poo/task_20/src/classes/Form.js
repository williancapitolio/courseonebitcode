import Component from "./Component.js";

export default class Form extends Component {
    constructor(domElement) {
        super(domElement = "form");

        this.form = function () {
            document.getElementById("body").append(document.createElement(domElement))
        };
        
        this.getForm = function () {
            document.getElementById(domElement);
        }
    };

    addChild() { };
};
