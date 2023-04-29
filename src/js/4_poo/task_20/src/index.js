import Component from "./classes/Component.js";
import Input from "./classes/Input.js";
import Label from "./classes/Label.js";
import Form from "./classes/Form.js";

const li = new Component("li");
const input = new Input();
const label = new Label("Nome: ");

li.read();
input.read();
label.read();

li.render();

input.render();

label.setText();