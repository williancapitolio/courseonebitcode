import Component from "./classes/Component.js";
import Input from "./classes/Input.js";
import Label from "./classes/Label.js";
import Form from "./classes/Form.js";

const li = new Component("li");
const input = new Input();
const label = new Label("Nome: ");
const form = new Form();

li.read();
input.read();
label.read();
form.read();
console.log()

//li.render();

//label.setText();
//input.render();

//label.setText();