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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities/User */ \"./src/class/entities/User.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nclass App {\n    /* static promptValidUser(callback: (user: User) => void) {\n      const user = getUser(userName);\n  \n      App.users.push(new User(response.id, response.login, response.name, response.bio, response.public_repos, response.repos_url));\n  \n      if (user) {\n        callback(user)\n      } else {\n        alert(\"Necessário preencher o campo!\")\n      }\n    } */\n    static fetchUser(username) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!username) {\n                return alert(\"Campo vazio!\");\n            }\n            const response = yield fetch(`https://api.github.com/users/${username}`).then((res) => res.json());\n            if (!response) {\n                return Promise.reject(new Error(\"deu ruim\"));\n            }\n            return response;\n        });\n    }\n    static getUser(username) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const response = yield App.fetchUser(username);\n                const { id, login, name, bio, public_repos, repos_url } = response;\n                App.users.push(new _entities_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"](id, login, name, bio, public_repos, repos_url));\n                alert(\"ok\");\n            }\n            catch (error) {\n                alert(error);\n            }\n        });\n    }\n}\nApp.users = [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://task3/./src/class/App.ts?");

/***/ }),

/***/ "./src/class/entities/User.ts":
/*!************************************!*\
  !*** ./src/class/entities/User.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\nclass User {\n    constructor(id, login, name, bio, public_repos, repos_url) {\n        this.id = id;\n        this.login = login;\n        this.name = name;\n        this.bio = bio;\n        this.public_repos = public_repos;\n        this.repos_url = repos_url;\n    }\n}\n\n\n//# sourceURL=webpack://task3/./src/class/entities/User.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/App */ \"./src/class/App.ts\");\n\n_class_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getUser();\n\n\n//# sourceURL=webpack://task3/./src/index.ts?");

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