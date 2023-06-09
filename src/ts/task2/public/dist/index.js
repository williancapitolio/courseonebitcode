/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/class/App.ts":
/*!**************************!*\
  !*** ./src/class/App.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _entities_Planet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities/Planet */ \"./src/class/entities/Planet.ts\");\n\nclass App {\n    static findPlanetByName(planetName) {\n        return App.planets.find((planet) => planet.name === planetName);\n    }\n    static createPlanet(name, coordinates, situation) {\n        App.planets.push(new _entities_Planet__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, coordinates, situation));\n    }\n    static updateSituation(planetName, option) {\n        App.findPlanetByName(planetName).situation = option;\n    }\n    static addSatellite(planetName, satellite) {\n        App.findPlanetByName(planetName).satellites.push(satellite);\n    }\n    static removeSatellite(planetName, indexToRemove) {\n        App.findPlanetByName(planetName).satellites.splice(indexToRemove, 1);\n    }\n    static listPlanets() {\n        let list = `Planetas Cadastrados:\\n\\n`;\n        App.planets.length > 0 ? App.planets.forEach((planet, i) => {\n            list += `Planeta: ${i + 1}\\nNome: ${planet.name}\\nCoordenadas:\\n${planet.coordinates.reduce((acc, cord, i) => acc + (\"- Coordenada \" + (i + 1) + \". \" + cord + \"\\n\"), \"\")}Situação: ${planet.situation}\\nSatélites:\\n${planet.satellites.length > 0 ? planet.satellites.reduce((acc, sat, i) => acc + (\"- Satélite \" + (i + 1) + \". \" + sat + \"\\n\"), \"\") : \"Nenhum Satélite Cadastrado\\n\"}\\n`;\n        }) : list += \"Nenhum Planeta Cadastrado!\";\n        alert(list);\n    }\n}\nApp.planets = [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://task2/./src/class/App.ts?");

/***/ }),

/***/ "./src/class/entities/Planet.ts":
/*!**************************************!*\
  !*** ./src/class/entities/Planet.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Planet)\n/* harmony export */ });\nclass Planet {\n    constructor(name, coordinates, situation) {\n        this.satellites = [];\n        this.name = name;\n        this.coordinates = coordinates;\n        this.situation = situation;\n    }\n}\n\n\n//# sourceURL=webpack://task2/./src/class/entities/Planet.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/App */ \"./src/class/App.ts\");\n\nlet op;\nconst op1 = \"\\n1. Criar um Planeta\";\nconst op2 = \"\\n2. Atualizar situação de um Planeta\";\nconst op3 = \"\\n3. Adicionar Satélite em um Planeta\";\nconst op4 = \"\\n4. Remover Satélite de um Planeta\";\nconst op5 = \"\\n5. Listar Planetas\";\nconst op6 = \"\\n6. Finalizar\";\ndo {\n    op = Number(prompt(`Escolha uma opção:${op1}${op2}${op3}${op4}${op5}${op6}`));\n    let situationOp;\n    let situation;\n    switch (op) {\n        case 1:\n            const name = prompt(\"Digite o nome do Planeta:\");\n            if (!name) {\n                alert(\"Erro: Nome do Planeta não informado!\");\n                break;\n            }\n            if (_class_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findPlanetByName(name)) {\n                alert(`Erro: Já existe um Planeta com o nome ${name}`);\n                break;\n            }\n            const coord1 = Number(prompt(\"Digite a Primeira Coordenada:\"));\n            if (!coord1) {\n                alert(\"Erro: Primeira Coordenada não informada!\");\n                break;\n            }\n            const coord2 = Number(prompt(\"Digite a Segunda Coordenada:\"));\n            if (!coord2) {\n                alert(\"Erro: Segunda Coordenada não informada!\");\n                break;\n            }\n            const coord3 = Number(prompt(\"Digite a Terceira Coordenada:\"));\n            if (!coord3) {\n                alert(\"Erro: Terceira Coordenada não informada!\");\n                break;\n            }\n            const coord4 = Number(prompt(\"Digite a Quarta Coordenada:\"));\n            if (!coord4) {\n                alert(\"Erro: Quarta Coordenada não informada!\");\n                break;\n            }\n            situationOp = Number(prompt(\"Digite o número da situação do Planeta:\\n1. Habitado\\n2. Habitável\\n3. Inabitável\\n4. Inexplorado\"));\n            if (situationOp === 1)\n                situation = \"Habitado\";\n            else if (situationOp === 2)\n                situation = \"Habitável\";\n            else if (situationOp === 3)\n                situation = \"Inabitável\";\n            else if (situationOp === 4)\n                situation = \"Inexplorado\";\n            else {\n                alert(\"Erro: Opção escolhida não registrada!\");\n                break;\n            }\n            _class_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createPlanet(name, [coord1, coord2, coord3, coord4], situation);\n            alert(`Sucesso: Planeta ${name} foi criado!`);\n            break;\n        case 2:\n            const plaUpdate = prompt(\"Digite o nome do Planeta para situação ser mudada:\");\n            if (!plaUpdate) {\n                if (!name) {\n                    alert(\"Erro: Nome do Planeta não informado!\");\n                    break;\n                }\n            }\n            const planet = _class_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findPlanetByName(plaUpdate);\n            if (!planet) {\n                alert(`Erro: Nenhum Planeta com o nome ${plaUpdate}!`);\n                break;\n            }\n            situationOp = Number(prompt(\"Digite o número da situação do Planeta:\\n1. Habitado\\n2. Habitável\\n3. Inabitável\\n4. Inexplorado\"));\n            if (situationOp === 1)\n                situation = \"Habitado\";\n            else if (situationOp === 2)\n                situation = \"Habitável\";\n            else if (situationOp === 3)\n                situation = \"Inabitável\";\n            else if (situationOp === 4)\n                situation = \"Inexplorado\";\n            else {\n                alert(\"Erro: Opção escolhida não registrada!\");\n                break;\n            }\n            if (planet.situation === situation) {\n                alert(`Erro: O Planeta ${plaUpdate} já possui a situação ${situation}!`);\n                break;\n            }\n            _class_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateSituation(plaUpdate, situation);\n            alert(`Sucesso: Situação do planeta ${plaUpdate} foi atualizada para ${situation}!`);\n            break;\n        case 3:\n            const planetName = prompt(\"Digite o nome do Planeta:\");\n            if (!planetName) {\n                alert(\"Erro: Nenhum nome digitado!\");\n                break;\n            }\n            const planetToAddSatellite = _class_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findPlanetByName(planetName);\n            if (!planetToAddSatellite) {\n                alert(`Erro: Nenhum Planeta com o nome ${planetToAddSatellite}!`);\n                break;\n            }\n            const satellite = prompt(\"Digite o nome do Satélite:\");\n            if (!satellite) {\n                alert(\"Erro: Nenhum satélite digitado!\");\n                break;\n            }\n            if (planetToAddSatellite.satellites.find((sat) => sat === satellite)) {\n                alert(`Erro: no Planeta ${planetName} já existe um Satélite com o nome ${satellite}!`);\n                break;\n            }\n            _class_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addSatellite(planetName, satellite);\n            alert(`Sucesso: Adicionado no Planeta ${planetName} o Satélite ${satellite}!`);\n            break;\n        case 4:\n            const namePlanet = prompt(\"Digite o nome do planeta\");\n            if (!namePlanet) {\n                alert(\"Erro: Nenhum nome informado!\");\n                break;\n            }\n            const planetToRemoveSatellite = _class_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findPlanetByName(namePlanet);\n            if (!planetToRemoveSatellite) {\n                alert(`Erro: Nenhum Planeta com o nome ${namePlanet}!`);\n                break;\n            }\n            if (planetToRemoveSatellite.satellites.length < 0) {\n                alert(`Erro: No Planeta ${namePlanet} não existe nenhum Satélite!`);\n                break;\n            }\n            const listSatellites = planetToRemoveSatellite.satellites.reduce((acc, sat, i) => acc + (i + 1 + \". \" + sat + \"\\n\"), \"\");\n            let idx = Number(prompt(`Digite o número do Satélite que deseja remover: \\n${listSatellites}`));\n            if (!idx) {\n                alert(\"Erro: Opção escolhida não registrada!\");\n                break;\n            }\n            idx -= 1;\n            const conf = confirm(`Deseja realmente remover o Satélite ${planetToRemoveSatellite.satellites[idx]} do Planeta ${namePlanet}?`);\n            if (!conf) {\n                alert(\"Satélite não removido!\");\n                break;\n            }\n            _class_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeSatellite(namePlanet, idx);\n            alert(\"Sucesso: Removido!\");\n            break;\n        case 5:\n            _class_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listPlanets();\n            break;\n        case 6:\n            alert(\"Finalizando...\");\n            break;\n        default:\n            alert(\"Opção inválida!\");\n    }\n} while (op !== 6);\n\n\n//# sourceURL=webpack://task2/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;