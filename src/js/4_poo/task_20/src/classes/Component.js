export default class Component {
    #domElement;

    constructor(domElement) {
        this.#domElement = domElement;
        this.buildElement = this.build();
    };

    read() {
        return console.log(`O valor do atributo é: ${this.#domElement}`);
    };

    build() {
        return function () {
            return document.createElement(`${this.#domElement}`);
        };
    };

    render() {
        return document.getElementById("body").append(this.buildElement());
    };
};
