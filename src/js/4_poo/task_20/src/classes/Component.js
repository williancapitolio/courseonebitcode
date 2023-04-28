export default class Component {
    #domElement;

    constructor(domElement) {
        this.#domElement = domElement;
        this.build = function (domElement) {
            return document.createElement(domElement);
        };
    };

    read() {
        return this.#domElement;
    };

    build() {
        return document.createElement(this.#domElement);
    };

    render() {
        return document.getElementById("body").append(this.build);
    };
};
