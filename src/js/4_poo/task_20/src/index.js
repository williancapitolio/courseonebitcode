import Component from "./classes/Component.js";
import Input from "./classes/Input.js";
import Label from "./classes/Label.js";
import Form from "./classes/Form.js";

const li = new Component("li");

li.read();

li.build();

li.render();

const input = new Input();

input.read();

input.build();

input.render();
