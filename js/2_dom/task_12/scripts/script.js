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

const devForm = document.getElementById("dev-form");

devForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const devName = event.target.devname.value;

    addTechnology();
});

function addTechnology() {
    const labelTechnologyName = document.createElement("label");
    labelTechnologyName.setAttribute("for", "technology-name");
    labelTechnologyName.innerText = "Tecnologia: ";

    const inputTechnologyName = document.createElement("input");
    inputTechnologyName.type = "text";
    inputTechnologyName.name = "technology-name";
    inputTechnologyName.id = "technology-name";
    inputTechnologyName.placeholder = "Digite o nome da tecnologia";

    const labelExperience = document.createElement("label");
    labelExperience.setAttribute("for", "technology-experience");
    labelExperience.innerText = "Tempo de experiência";

    const inputRadioFirst = document.createElement("input");
    inputRadioFirst.type = "radio";
    inputRadioFirst.name = "technology-experience";
    inputRadioFirst.id = "first";
    inputRadioFirst.value = "0-2 anos";
    const labelRadioFirst = document.createElement("label");
    labelRadioFirst.setAttribute("for", "first");
    labelRadioFirst.innerText = "0-2 anos";

    const inputRadioSecond = document.createElement("input");
    inputRadioSecond.type = "radio";
    inputRadioSecond.name = "technology-experience";
    inputRadioSecond.id = "second";
    inputRadioSecond.value = "3-4 anos";
    const labelRadioSecond = document.createElement("label");
    labelRadioSecond.setAttribute("for", "second");
    labelRadioSecond.innerText = "3-4 anos";

    const inputRadioThird = document.createElement("input");
    inputRadioThird.type = "radio";
    inputRadioThird.name = "technology-experience";
    inputRadioThird.id = "third";
    inputRadioThird.value = "5+ anos";
    const labelRadioThird = document.createElement("label");
    labelRadioThird.setAttribute("for", "third");
    labelRadioThird.innerText = "5+ anos";

    const devTechnologies = document.getElementById("dev-technologies");

    devTechnologies.appendChild(labelTechnologyName);
    devTechnologies.appendChild(inputTechnologyName);
    devTechnologies.appendChild(document.createElement("br"));
    devTechnologies.appendChild(document.createElement("br"));

    devTechnologies.appendChild(labelExperience);
    devTechnologies.appendChild(document.createElement("br"));

    devTechnologies.appendChild(inputRadioFirst);
    devTechnologies.appendChild(labelRadioFirst);
    devTechnologies.appendChild(document.createElement("br"));

    devTechnologies.appendChild(inputRadioSecond);
    devTechnologies.appendChild(labelRadioSecond);
    devTechnologies.appendChild(document.createElement("br"));

    devTechnologies.appendChild(inputRadioThird);
    devTechnologies.appendChild(labelRadioThird);
    devTechnologies.appendChild(document.createElement("br"));

    devTechnologies.appendChild(document.createElement("br"));
    devTechnologies.appendChild(document.createElement("br"));
};

const devInfo = document.getElementById("dev-info");

devInfo.addEventListener("click", function (event) {
});
