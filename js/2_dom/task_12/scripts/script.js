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

let count = 0;

const devForm = document.getElementById("dev-form");

devForm.addEventListener("submit", function (event) {
    event.preventDefault();

    addTechnology();

    cancelAddTechnology();
});

function addTechnology() {
    const labelTechnologyName = document.createElement("label");
    labelTechnologyName.setAttribute("for", "technology-name-" + count);
    labelTechnologyName.innerText = "Tecnologia: ";

    const inputTechnologyName = document.createElement("input");
    inputTechnologyName.type = "text";
    inputTechnologyName.name = "technology-name-" + count;
    inputTechnologyName.id = "technology-name-" + count;
    inputTechnologyName.placeholder = "Digite o nome da tecnologia";

    const labelExperience = document.createElement("label");
    labelExperience.setAttribute("for", "technology-experience-" + count);
    labelExperience.innerText = "Tempo de experiência";

    const inputRadioFirst = document.createElement("input");
    inputRadioFirst.type = "radio";
    inputRadioFirst.name = "technology-experience-" + count;
    inputRadioFirst.id = "first";
    inputRadioFirst.value = "0-2 anos";
    const labelRadioFirst = document.createElement("label");
    labelRadioFirst.setAttribute("for", "first");
    labelRadioFirst.innerText = "0-2 anos";

    const inputRadioSecond = document.createElement("input");
    inputRadioSecond.type = "radio";
    inputRadioSecond.name = "technology-experience-" + count;
    inputRadioSecond.id = "second";
    inputRadioSecond.value = "3-4 anos";
    const labelRadioSecond = document.createElement("label");
    labelRadioSecond.setAttribute("for", "second");
    labelRadioSecond.innerText = "3-4 anos";

    const inputRadioThird = document.createElement("input");
    inputRadioThird.type = "radio";
    inputRadioThird.name = "technology-experience-" + count;
    inputRadioThird.id = "third";
    inputRadioThird.value = "5+ anos";
    const labelRadioThird = document.createElement("label");
    labelRadioThird.setAttribute("for", "third");
    labelRadioThird.innerText = "5+ anos";

    const btnCancel = document.createElement("input");
    btnCancel.type = "button";
    btnCancel.value = "Cancelar";
    btnCancel.className = "btn-cancel-add";

    const listTechnologies = document.createElement("div");
    listTechnologies.className = "list-technologies";
    listTechnologies.id = "list-technologies";

    const radioDiv = document.createElement("div");
    radioDiv.className = "radio-div";
    radioDiv.id = "radio-div";

    const devTechnologies = document.getElementById("dev-technologies");

    listTechnologies.appendChild(labelTechnologyName);
    listTechnologies.appendChild(inputTechnologyName);
    listTechnologies.appendChild(document.createElement("br"));
    listTechnologies.appendChild(document.createElement("br"));

    radioDiv.appendChild(labelExperience);
    radioDiv.appendChild(document.createElement("br"));

    radioDiv.appendChild(inputRadioFirst);
    radioDiv.appendChild(labelRadioFirst);
    radioDiv.appendChild(document.createElement("br"));

    radioDiv.appendChild(inputRadioSecond);
    radioDiv.appendChild(labelRadioSecond);
    radioDiv.appendChild(document.createElement("br"));

    radioDiv.appendChild(inputRadioThird);
    radioDiv.appendChild(labelRadioThird);
    radioDiv.appendChild(document.createElement("br"));
    radioDiv.appendChild(document.createElement("br"));

    listTechnologies.appendChild(radioDiv);

    listTechnologies.appendChild(btnCancel);
    listTechnologies.appendChild(document.createElement("br"));

    listTechnologies.appendChild(document.createElement("br"));
    listTechnologies.appendChild(document.createElement("br"));

    devTechnologies.appendChild(listTechnologies);

    count++;
};

function cancelAddTechnology() {
    const getBtnsCancel = document.querySelectorAll(".btn-cancel-add");

    getBtnsCancel.forEach(function (element, index) {
        getBtnsCancel[index].addEventListener("click", function () {
            element.parentNode.remove();
        });
    });
};

const addDevBtn = document.getElementById("add-dev-btn");

addDevBtn.addEventListener("click", function (event) {
    console.log(event.target.parentNode);
    /* const devName = document.getElementById("dev-form").devname.value;
    //console.log(devName);
    const technologiesName = document.querySelectorAll(".list-technologies").technology-namer.value;
    console.log(technologiesName)
    //const technologiesRadio */
});
