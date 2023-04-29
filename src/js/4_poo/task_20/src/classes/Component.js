export default class Component {
    #domElement;

    constructor(domElement) {
        this.#domElement = domElement;
        this.buildElement = function () {
            return document.createElement(`${this.#domElement}`);
        };
    };

    read() {
        return console.log(`O valor do atributo é: ${this.#domElement}`);
    };

    build() {
        return this.buildElement();
    };

    render() {
        return document.getElementById("body").append(this.buildElement());
    };
};
