export default class Component {
    #domElement = null;

    constructor(tag, parent, options) {
        this.tag = tag;
        this.parent = parent;
        this.options = options;
        this.build();
    };

    getDomElement() {
        return this.#domElement;
    };

    build() {
        this.#domElement = document.createElement(this.tag);
        Object.assign(this.#domElement, this.options);
        return this;
    };
    
    render() {
        if (this.parent instanceof Component) {
            this.parent.getDomElement().append(this.#domElement);
        } else {
            document.querySelector(this.parent).append(this.#domElement);
        };
    };
};
