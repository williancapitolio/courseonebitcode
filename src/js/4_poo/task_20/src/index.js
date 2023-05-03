import Component from "./classes/Component.js";
import Input from "./classes/Input.js";
import Label from "./classes/Label.js";
import Form from "./classes/Form.js";

const br = new Component("br");
const hr = new Component("hr");

const title = new Component("h2", "body", { textContent: "Olá mundo!" });
console.log(title);
title.render();
title.tag = "h3";
title.build().render();

const form = new Form("body");

const label = new Label("Nome: ", form, { htmlFor: "nameInput" });
const input = new Input(form, { id: "nameInput", name: "name" });
const button = new Input(form, { type: "button", value: "Enviar" });

form.render();
label.render();
input.render();
//button.render();

form.addChildren(
    br,
    new Label("Data de Nascimento: ", form, { htmlFor: "birthdayInput" }),
    new Input(form, { id: "birthdayInput", name: "birthday", type: "date" }),
    hr,
    button
);