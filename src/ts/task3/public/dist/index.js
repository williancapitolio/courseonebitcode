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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _entities_Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities/Repository */ \"./src/class/entities/Repository.ts\");\n/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities/User */ \"./src/class/entities/User.ts\");\n\n\nclass App {\n    static async fetchUser(username) {\n        const response = await fetch(`https://api.github.com/users/${username}`).then((res) => res.json());\n        if (response.message) {\n            return alert(response.message);\n        }\n        if (App.findUserByUsername(username)) {\n            return alert(\"User already registered.\");\n        }\n        const conf = confirm(`User ${response.login} was found. Would you like to save the data?`);\n        if (!conf) {\n            return alert(\"Data was not saved.\");\n        }\n        const { id, login, name, bio, public_repos, repos_url } = response;\n        const repos = await App.fetchRepos(repos_url);\n        App.users.push(new _entities_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"](id, login, name, bio, public_repos, repos_url, repos.map((repo) => {\n            const { name, description, fork, stargazers_count } = repo;\n            return new _entities_Repository__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, description, fork, stargazers_count);\n        })));\n        alert(\"Saved successfully.\");\n    }\n    static async fetchRepos(repos_url) {\n        const response = await fetch(repos_url).then((res) => res.json());\n        return response;\n    }\n    static findUserByUsername(username) {\n        return App.users.find((user) => user.login === username);\n    }\n    static async promptValidName(callback) {\n        const userName = prompt(\"Enter the username:\");\n        const user = App.findUserByUsername(userName);\n        if (user) {\n            callback(user);\n        }\n        else {\n            alert(\"User Not Found! Returning to the menu...\");\n        }\n    }\n    static showUserInfo() {\n        App.promptValidName(async (user) => {\n            const { id, login, name, bio, public_repos, repositories } = user;\n            let msg = `- Dados -\\n\\nID: ${id}\\nUsername: ${login}\\nName: ${name}\\nBio: ${bio}\\nPublic Repositories: ${public_repos}\\nList of Repositories:\\n\\n`;\n            repositories.forEach((repo, index) => {\n                const { name, description, fork, stargazers_count } = repo;\n                msg += `Repository ${index + 1}\\n- Nome: ${name}\\n- Descrição: ${description}\\n- Fork: ${fork === true ? \"Sim\" : \"Não\"}\\n- Estrelas: ${stargazers_count}\\n\\n`;\n            });\n            alert(msg);\n        });\n    }\n    static listAllUsers() {\n        let msg = `- Registered users -\\n\\n`;\n        App.users.length > 0\n            ? App.users.forEach(({ login, name }, index) => {\n                msg += `Usuário ${index + 1}: ${login}, nome: ${name}\\n`;\n            })\n            : (msg += \"No registered user\");\n        alert(msg);\n    }\n    static sumAllRepositories() {\n        let msg = `Sum of saved user repositories: `;\n        let sum = 0;\n        App.users.length > 0\n            ? App.users.forEach((user) => {\n                sum += user.public_repos;\n            })\n            : (msg += \"No registered user\");\n        alert(`${msg} ${sum}`);\n    }\n    static topFiveUsersWithMostPublicRepositories() {\n        const topFive = App.users.map(user => user).sort((a, b) => b.public_repos - a.public_repos).slice(0, 5);\n        let msg = `Top Five:\\n`;\n        topFive.forEach((top, index) => {\n            msg += `${index + 1}. ${top.name}, Repos: ${top.public_repos}\\n`;\n        });\n        alert(msg);\n    }\n}\nApp.users = [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://task3/./src/class/App.ts?");

/***/ }),

/***/ "./src/class/entities/Repository.ts":
/*!******************************************!*\
  !*** ./src/class/entities/Repository.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Repository)\n/* harmony export */ });\nclass Repository {\n    constructor(name, description, fork, stargazers_count) {\n        this.name = name;\n        this.description = description;\n        this.fork = fork;\n        this.stargazers_count = stargazers_count;\n    }\n}\n\n\n//# sourceURL=webpack://task3/./src/class/entities/Repository.ts?");

/***/ }),

/***/ "./src/class/entities/User.ts":
/*!************************************!*\
  !*** ./src/class/entities/User.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\nclass User {\n    constructor(id, login, name, bio, public_repos, repos_url, repositories) {\n        this.id = id;\n        this.login = login;\n        this.name = name;\n        this.bio = bio;\n        this.public_repos = public_repos;\n        this.repos_url = repos_url;\n        this.repositories = repositories;\n    }\n}\n\n\n//# sourceURL=webpack://task3/./src/class/entities/User.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/App */ \"./src/class/App.ts\");\n\nlet op;\ndo {\n    op = prompt(\"- Menu -\\nEnter the option to interact\\n1. Search username\\n2. List user information\\n3. List all users\\n4. Calcute sum all repositories\\n5. Top 5 users with higher number of public repositories\\n6. Finalize\");\n    switch (op) {\n        case \"1\":\n            const username = prompt(\"Enter usarname:\");\n            await _class_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchUser(username);\n            break;\n        case \"2\":\n            _class_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showUserInfo();\n            break;\n        case \"3\":\n            _class_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listAllUsers();\n            break;\n        case \"4\":\n            _class_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sumAllRepositories();\n            break;\n        case \"5\":\n            _class_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topFiveUsersWithMostPublicRepositories();\n            break;\n        case \"6\":\n            alert(\"Finishing...\");\n            break;\n        default:\n            alert(\"Invalid option! Try again.\");\n    }\n} while (op !== \"6\");\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://task3/./src/index.ts?");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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