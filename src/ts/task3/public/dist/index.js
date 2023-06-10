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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\n/* interface UserInterface {\n  id: number;\n  login: string;\n  name: string;\n  bio: string;\n  public_repos: number;\n  repos_url: string;\n}\n\ninterface RepositoriesInterface {\n  name: string;\n  description: string;\n  fork: boolean;\n  stargazers_count: number;\n}\n\nconst users: UserInterface[] = [];\n\nconst fetchUser = async (username: string) => {\n  try {\n    const response = await fetch(\n      `https://api.github.com/users/${username}`\n    ).then((res) => {\n      if (!res) {\n        return new Error(\"Falha na requisição!\");\n      }\n\n      if (res.status === 404) {\n        return new Error(\"Não encontrado!\");\n      }\n\n      return res.json();\n    });\n\n    //users.push(response);\n    console.log(response);\n\n    alert(\"ok\");\n  } catch (error) {\n    alert(error);\n  }\n};\n\nfetchUser(\"hygfhfghfg\");\n */ \n\n\n//# sourceURL=webpack://task3/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;