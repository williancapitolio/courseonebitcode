/*

## Cadastro de Devs

Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 

- A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.

- Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
    - um campo de texto para o nome da tecnologia
    - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”,
        “3-4 anos” e “5+ anos”)
    - um botão de remover que deve excluir essa linha.

- O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e
    limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log()

Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve
funcionar sem acionar um recarregamento.

*/

"use strict";

function createLabel(text, htmlFor) {
    const label = document.createElement("label");
    label.innerText = text;
    label.htmlFor = htmlFor;
    return label;
};

function createInput(id, value, name, type, placeholder, classname) {
    const input = document.createElement("input");
    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    input.className = classname;
    return input;
};

const addDevBtn = document.getElementById("add-dev-btn");

const devForm = document.getElementById("dev-form");

const devData = [];

const developers = [];

let count = 0;

devForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const devTechnologies = document.getElementById("dev-technologies");

    const labelTechnologyName = createLabel(
        "Tecnologia: ",
        "technology-name"
    );

    const inputTechnologyName = createInput(
        "technology-name",
        null,
        "technology-name",
        "text",
        "Digite o nome da tecnologia",
        null
    );

    const labelExperience = createLabel(
        "Tempo de experiência",
        "technology-experience-" + count
    );

    const inputRadioFirst = createInput(
        "first",
        "0-2 anos",
        "technology-experience-" + count,
        "radio",
        null,
        "technology-experience-radio"
    );

    const labelRadioFirst = createLabel(
        "0-2 anos",
        "first"
    );

    const inputRadioSecond = createInput(
        "second",
        "3-4 anos",
        "technology-experience-" + count,
        "radio",
        null,
        "technology-experience-radio"
    );

    const labelRadioSecond = createLabel(
        "3-4 anos",
        "second"
    );

    const inputRadioThird = createInput(
        "third",
        "5+ anos",
        "technology-experience-" + count,
        "radio",
        null,
        "technology-experience-radio"
    );

    const labelRadioThird = createLabel(
        "5+ anos",
        "third"
    );

    const btnCancel = createInput(
        null,
        "Cancelar",
        null,
        "button",
        null,
        "btn-cancel-add"
    );

    const getBtnsCancel = document.querySelectorAll(".btn-cancel-add");

    getBtnsCancel.forEach(function (element, index) {
        getBtnsCancel[index].addEventListener("click", function () {
            element.parentNode.remove();
        });
    });

    const listTechnologies = document.createElement("div");
    listTechnologies.className = "list-technologies";
    listTechnologies.id = "list-technologies";

    listTechnologies.append(
        labelTechnologyName,
        inputTechnologyName,
        document.createElement("br"),
        document.createElement("br"),
        labelExperience,
        document.createElement("br"),
        inputRadioFirst,
        labelRadioFirst,
        document.createElement("br"),
        inputRadioSecond,
        labelRadioSecond,
        document.createElement("br"),
        inputRadioThird,
        labelRadioThird,
        document.createElement("br"),
        document.createElement("br"),
        btnCancel,
        document.createElement("br"),
        document.createElement("br"),
        document.createElement("br")
    );

    devTechnologies.appendChild(listTechnologies);

    count++;
});

addDevBtn.addEventListener("click", function (event) {
    const devInfo = [];

    const devName = {};

    const fullNameInput = event.target.parentNode.children["dev-form"].children["devname"];

    if (!fullNameInput.value) {
        alert("Erro: Preencha o nome do dev!");
        fullNameInput.focus();
        return;
    };

    let devTechnologies = [];

    devName.name = event.target.parentNode.children["dev-form"].children["devname"].value;

    if (!devName.name) {
        alert("Erro: Preencha o nome do dev!");
        event.target.parentNode.children["dev-form"].children["devname"].focus();
        return;
    };

    const listTechnologies = document.querySelectorAll(".list-technologies");

    if (listTechnologies.length === 0) {
        alert("Erro: Adicione pelo menos uma tecnologia!");
        return;
    };

    for (let i = 0; i < listTechnologies.length; i++) {
        const technologies = {};

        const technologyName = listTechnologies[i].children["technology-name"];

        if (!technologyName.value) {
            alert("Erro: Preencha nome da tecnologia!");
            technologyName.focus();
            return;
        };

        technologies.technologyName = technologyName.value;

        const radioFirst = listTechnologies[i].childNodes[6];
        const radioSecond = listTechnologies[i].childNodes[9];
        const radioThird = listTechnologies[i].childNodes[12];

        if (!radioFirst.checked && !radioSecond.checked && !radioThird.checked) {
            alert("Erro: Preencha o tempo de experiência!");
            return;
        };

        if (radioFirst.checked) {
            technologies.technologyExperience = radioFirst.value;
            devTechnologies.push({ name: technologyName.value, exp: radioFirst.value });
        };

        if (radioSecond.checked) {
            technologies.technologyExperience = radioSecond.value;
            devTechnologies.push({ name: technologyName.value, exp: radioSecond.value });
        };

        if (radioThird.checked) {
            technologies.technologyExperience = radioThird.value;
            devTechnologies.push({ name: technologyName.value, exp: radioThird.value });
        };

        devInfo.push(technologies);

        const newDev = { fullname: fullNameInput.value, technologies: devTechnologies };

        developers.push(newDev)
    };

    listTechnologies.forEach(function (element) {
        element.remove();
    });

    devInfo.unshift(devName);

    devData.push(devInfo);

    event.target.parentNode.children["dev-form"].children["devname"].value = "";

    alert("Sucesso: Dev cadastrado!");

    console.log(developers);

    let devExp = "";

    devExp = devInfo.map(function (element, index) {
        return devExp = "Tecnologia " + index + " - " + element.technologyName + ", experiência de " + element.technologyExperience + ". ";
    });

    devExp.shift();

    devExp.unshift("Nome do Dev: " + devInfo[0].name + ". ");

    let devDatas = "";

    devDatas = devExp.map(function (element) {
        return devDatas = element;
    });

    const sectionListDevs = document.getElementById("list-devs");

    const ul = document.createElement("ul");

    let liDev = "";

    devDatas.forEach(function (element) {
        liDev = document.createElement("li");
        liDev.textContent = element;
        ul.appendChild(liDev);
    });

    const btnDelete = document.createElement("input");
    btnDelete.type = "button";
    btnDelete.value = "Apagar";
    btnDelete.className = "btn-delete";

    ul.appendChild(document.createElement("br"));

    ul.appendChild(btnDelete);

    ul.appendChild(document.createElement("br"));
    ul.appendChild(document.createElement("br"));

    sectionListDevs.append(ul);

    const getBtnsRemoveDev = document.querySelectorAll(".btn-delete");

    getBtnsRemoveDev.forEach(function (element, index) {
        getBtnsRemoveDev[index].addEventListener("click", function () {
            element.parentNode.remove();
        });
    });
});
