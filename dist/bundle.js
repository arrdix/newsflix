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

/***/ "./assets/script/main.js":
/*!*******************************!*\
  !*** ./assets/script/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction main() {\r\n  console.log('testis');\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n//# sourceURL=webpack://news-portal/./assets/script/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/styles/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/styles/style.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --base-color:#282828;\r\n  --base-white: #F1F1F1;\r\n  --base-bg: #E5E4E2;\r\n  --base-dark-grey: #dbdbdb;\r\n}\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n  /* border: 1px solid brown; */\r\n}\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-color: var(--base-white);\r\n\r\n  margin: 0;\r\n}\r\nh1 {\r\n  font-size: 5rem;\r\n  font-weight: 700;\r\n  margin: 0;\r\n}\r\nh2 {\r\n  font-size: 3.5rem;\r\n  font-weight: 700;\r\n  margin: 0;\r\n}\r\nh3 {\r\n  font-size: 2rem;\r\n  font-weight: 800;\r\n  margin: 0;\r\n}\r\nh4 {\r\n  font-size: 1.2rem;\r\n  font-weight: 800;\r\n  margin: 0;\r\n}\r\np {\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  margin: 0;\r\n}\r\nhr {\r\n  margin: 0;\r\n  border: 0;\r\n  height: 1px;\r\n  width: 100%;\r\n  background-image: linear-gradient(to right, rgba(0, 0, 0, -1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\r\n}\r\nheader {\r\n  margin-top: 2rem;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-content: center;\r\n}\r\n.nav-header {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  \r\n  align-items: center;\r\n  margin-bottom: 2rem;\r\n}\r\n.logo img {\r\n  width: 200px;\r\n}\r\ni {\r\n  cursor: pointer;\r\n}\r\n.sosmed-container {\r\n  display: flex;\r\n}\r\n.nav-bar {\r\n  text-transform: capitalize;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.nav-bar span {\r\n  margin-top: 1rem;\r\n}\r\n.nav-bar a {\r\n  padding: 1rem;\r\n  padding-inline: 1.5rem;\r\n  border: 1px solid transparent;\r\n  \r\n  font-weight: 700;\r\n  text-decoration: none;\r\n  color: var(--base-color);\r\n  transition: all .3s ease-in-out;\r\n}\r\n.nav-bar a:hover {\r\n  border-left: 1px solid var(--base-white);\r\n  border-right: 1px solid var(--base-white);\r\n  background-color: var(--base-color);\r\n  color: var(--base-white);\r\n  transition: all .3s ease-in-out;\r\n}\r\n.nav-bar .selected {\r\n  background-color: var(--base-color);\r\n  color: var(--base-white);\r\n}\r\nmain {\r\n  max-width: 1750px;\r\n  margin: auto;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.headline-container {\r\n  position: relative;\r\n  padding-top: 2rem;\r\n  padding-bottom: 2rem;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.headline-bg {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 1400px;\r\n  height: 490px;\r\n  background-color: var(--base-bg);\r\n  z-index: -1;\r\n}\r\n.headline-grid {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.grid-item {\r\n  position: relative;\r\n  width: 375px;\r\n  height: 420px;\r\n  overflow: hidden;\r\n}\r\n.grid-item:hover .highlight-img {\r\n  transform: scale(1.05);\r\n  filter: grayscale(200%) contrast(150%) brightness(50%) blur(3px);\r\n  transition: all .5s ease-in-out;\r\n}\r\n.highlight-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  object-position: 50%;\r\n  filter: grayscale(200%) contrast(150%) brightness(50%);\r\n  transition: all .7s ease-in-out;\r\n}\r\n.grid-item h3 {\r\n  position: absolute;\r\n  bottom: 5%;\r\n  left: 10%;\r\n  right: 10%;\r\n  line-height: 2.3rem;\r\n  padding-block: 1rem;\r\n  text-align: center;\r\n}\r\n.grid-item a {\r\n  transition: all .3s ease-in-out;\r\n  text-decoration: none;\r\n  color: var(--base-white);\r\n}\r\n.grid-item a:hover {\r\n  transition: all .3s ease-in-out;\r\n  color: white;\r\n}\r\n.grid-arrow-left {\r\n  padding-inline: 1.5rem;\r\n  padding-block: 1rem;\r\n  background-color: var(--base-white);\r\n  margin-right: -1.8rem;\r\n  color: var(--base-color);\r\n  font-size: 1rem;\r\n  z-index: 1;\r\n  border: 1px solid transparent;\r\n}\r\n.grid-arrow-left:hover {\r\n  color: var(--base-white);\r\n  background-color: var(--base-color);\r\n  transition: all .3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n.grid-arrow-right {\r\n  padding-inline: 1.5rem;\r\n  padding-block: 1rem;\r\n  background-color: var(--base-white);\r\n  margin-left: -1.8rem;\r\n  color: var(--base-color);\r\n  font-size: 1rem;\r\n  z-index: 1;\r\n  border: 1px solid transparent;\r\n}\r\n.grid-arrow-right:hover {\r\n  color: var(--base-white);\r\n  background-color: var(--base-color);\r\n  transition: all .3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n.grid-button {\r\n  margin-top: 0.5rem;\r\n}\r\n.grid-button i {\r\n  font-size: 0.7rem;\r\n  color: var(--base-color);\r\n}\r\n.grid-button i:hover {\r\n  color: darkgray;\r\n}\r\n.content-container {\r\n  margin: auto;\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n  padding-inline: 10rem;\r\n\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 2rem;\r\n  overflow: hidden;\r\n}\r\n.main-content {\r\n  flex-basis: 70%;\r\n  overflow: hidden;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n}\r\n.main-news {\r\n  width: 100%;\r\n  height: 650px;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.main-news:hover .main-news-img {\r\n  transform: scale(1.02);\r\n  transition: all .5s ease-in-out;\r\n  filter: grayscale(200%) contrast(150%) brightness(50%) blur(3px);\r\n}\r\n.main-news-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  object-position: 50%;\r\n  transition: all .7s ease-in-out;\r\n  filter: grayscale(200%) contrast(150%) brightness(50%);\r\n}\r\n.main-news h2 {\r\n  position: absolute;\r\n  bottom: 10%;\r\n  left: 5%;\r\n  right: 10%;\r\n  line-height: 4.5rem;\r\n}\r\n.main-news h2 a {\r\n  color: var(--base-white);\r\n  text-decoration: none;\r\n}\r\n.aside-content {\r\n  flex-basis: 40%;\r\n\r\n  background-color: var(--base-bg);\r\n  padding: 2rem;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.aside-title {\r\n  width: 100%;\r\n  padding-block: 1rem;\r\n  text-transform: uppercase;\r\n  background-color: var(--base-dark-grey);\r\n  text-align: center;\r\n}\r\n.aside-title h4 {\r\n  color: var(--base-color);\r\n}\r\n.aside-news {\r\n  margin-top: 2rem;\r\n\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  gap: 1rem;\r\n}\r\n.aside-news-detail {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n.aside-news img {\r\n  width: 150px;\r\n  height: 150px;\r\n  object-fit: cover;\r\n  object-position: 50%;\r\n  filter: grayscale(200%) contrast(150%) brightness(50%);\r\n}\r\n.aside-news p a {\r\n  text-decoration: none;\r\n  color: var(--base-color);\r\n}\r\n.aside-news p a:hover {\r\n  border-bottom: 1px solid var(--base-color);\r\n}\r\n.footer-container {\r\n  margin-block: 2rem;\r\n  padding-inline: 8rem;\r\n  background-color: var(--base-white);\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-items: center;\r\n  gap: 29rem;\r\n}\r\n.footer-logo {\r\n  flex-basis: 50%;\r\n}\r\n.footer-logo img {\r\n  width: 45%;\r\n}\r\n.subscription {\r\n  width: 30%;\r\n}\r\n.subscription-title {\r\n  color: var(--base-color);\r\n  font-weight: 700;\r\n}\r\n.subscription-desc {\r\n  color: var(--base-color);\r\n  margin-bottom: 1rem;\r\n}\r\n.subscribe-container {\r\n  margin-bottom: 1rem;\r\n\r\n  display: flex;\r\n  justify-content: flex-start;\r\n}\r\n.subscribe-form {\r\n  padding: 1rem;\r\n  width: 80%;\r\n  border: 1px solid var(--base-color);\r\n  border-bottom-left-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n}\r\n.subscribe-button {\r\n  padding-inline: 1.5rem;\r\n  background-color: var(--base-color);\r\n  color: white;\r\n  border: 1px solid transparent;\r\n  border-bottom-right-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n.subscribe-button:hover {\r\n  background-color: var(--base-white);\r\n  border: 1px solid var(--base-color);\r\n  color: var(--base-color);\r\n  cursor: pointer;\r\n}\r\n/* if screen width less than 1550px */\r\n@media screen and (max-width: 1550px) {\r\n  h1 {\r\n    font-size: 5rem;\r\n    font-weight: 700;\r\n    margin: 0;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 3rem;\r\n    font-weight: 700;\r\n    margin: 0;\r\n  }\r\n  h3 {\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n    margin: 0;\r\n  }\r\n  h4 {\r\n    font-size: 1rem;\r\n    font-weight: 800;\r\n    margin: 0;\r\n  }\r\n  p {\r\n    font-size: 0.9rem;\r\n    font-weight: 400;\r\n    margin: 0;\r\n  }\r\n  .headline-bg {\r\n    width: 1100px;\r\n    height: 420px;\r\n  }\r\n  .grid-item {\r\n    position: relative;\r\n    width: 300px;\r\n    height: 350px;\r\n    overflow: hidden;\r\n  }\r\n  .grid-item h3 {\r\n    line-height: 1.8rem;\r\n  }\r\n  .content-container {\r\n    width: 100%;\r\n    padding-inline: 5rem;\r\n  }\r\n  .main-content {\r\n    flex-basis: 65%;\r\n\r\n    align-items: flex-end;\r\n  }\r\n  .main-news {\r\n    width: 730px;\r\n    height: 500px;\r\n\r\n    display: flex;\r\n    justify-content: flex-end;\r\n  }\r\n  .main-news-img {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  .main-news h2 {\r\n    line-height: 3.5rem;\r\n  }\r\n  .aside-content {\r\n    flex-basis: 35%;\r\n  }\r\n  .aside-news img {\r\n    width: 130px;\r\n    height: 130px;\r\n  }\r\n  .footer-container {\r\n    padding-inline: 2rem;\r\n\r\n    justify-content: center;\r\n    gap: 8rem\r\n  }\r\n  .footer-logo {\r\n    flex-basis: 50%;\r\n  }\r\n  .footer-logo img {\r\n    width: 40%;\r\n  }\r\n  .subscription {\r\n    flex-basis: 30%;\r\n  }\r\n}\r\n\r\n/* if screen width less than 1300px */\r\n@media screen and (max-width: 1300px) {\r\n  h1 {\r\n      font-size: 5rem;\r\n      font-weight: 700;\r\n      margin: 0;\r\n    }\r\n    h2 {\r\n      font-size: 2.5rem;\r\n      font-weight: 700;\r\n      margin: 0;\r\n    }\r\n    h3 {\r\n      font-size: 1.4rem;\r\n      font-weight: 800;\r\n      margin: 0;\r\n    }\r\n    h4 {\r\n      font-size: 1rem;\r\n      font-weight: 800;\r\n      margin: 0;\r\n    }\r\n    p {\r\n      font-size: 0.8rem;\r\n      font-weight: 400;\r\n      margin: 0;\r\n    }\r\n    .headline-bg {\r\n      width: 950px;\r\n      height: 365px;\r\n    }\r\n    .grid-item {\r\n      position: relative;\r\n      width: 250px;\r\n      height: 300px;\r\n      overflow: hidden;\r\n    }\r\n    .grid-item h3 {\r\n      line-height: 1.6rem;\r\n    }\r\n    .main-content {\r\n      flex-basis: 65%;\r\n\r\n      align-items: flex-end;\r\n    }\r\n    .main-news {\r\n      width: 600px;\r\n      height: 500px;\r\n\r\n      justify-content: flex-end;\r\n    }\r\n    .main-news h2 {\r\n      left: 15%;\r\n      bottom: 15%;\r\n      right: 15%;\r\n      line-height: 2.5rem;\r\n    }\r\n    .aside-news img {\r\n      width: 100px;\r\n      height: 100px;\r\n    }\r\n    .footer-logo {\r\n      flex-basis: 50%;\r\n    }\r\n}\r\n\r\n/* if screen width less than 1050px */\r\n@media screen and (max-width: 1050px) {\r\n  h1 {\r\n    font-size: 5rem;\r\n    font-weight: 700;\r\n    margin: 0;\r\n  }\r\n  h2 {\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n    margin: 0;\r\n  }\r\n  h3 {\r\n    font-size: 2rem;\r\n    font-weight: 800;\r\n    margin: 0;\r\n  }\r\n  h4 {\r\n    font-size: 1.2rem;\r\n    font-weight: 800;\r\n    margin: 0;\r\n  }\r\n  p {\r\n    font-size: 0.8rem;\r\n    font-weight: 400;\r\n    margin: 0;\r\n  }\r\n  hr {\r\n    margin: 0;\r\n    border: 0;\r\n    height: 1px;\r\n    width: 100%;\r\n    background-image: linear-gradient(to right, rgba(0, 0, 0, -1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\r\n  }\r\n  main {\r\n    max-width: 650px;\r\n    margin: auto;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  .grid-item {\r\n    position: relative;\r\n    width: 400px;\r\n    height: 450px;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .grid-item h3 {\r\n    line-height: 2rem;\r\n  }\r\n  .headline-bg {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 550px;\r\n    height: 520px;\r\n    background-color: var(--base-bg);\r\n    z-index: -1;\r\n  }\r\n  .content-container {\r\n    width: 100%;\r\n    margin: auto;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n    padding-inline: 2.5rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    overflow: hidden;\r\n  }\r\n  .main-news {\r\n    width: 100%;\r\n    height: 300px;\r\n  }\r\n  .main-news-img {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  .main-news h2 {\r\n    left: 10%;\r\n    bottom: 15%;\r\n    right: 15%;\r\n    line-height: 2.1rem;\r\n  }\r\n  .aside-content {\r\n    background-color: var(--base-bg);\r\n    width: 100%;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  .aside-news img {\r\n    width: 100px;\r\n    height: 100px;\r\n  }\r\n  .footer-container {\r\n    margin-block: 2rem;\r\n    padding-inline: 1rem;\r\n\r\n    flex-direction: column-reverse;\r\n    gap: 1rem;\r\n  }\r\n  .footer-logo {\r\n    text-align: center;\r\n  }\r\n  .subscription {\r\n    width: 400px;\r\n    text-align: center;\r\n  }\r\n  .subscription-title {\r\n    font-size: 1.2rem;\r\n  }\r\n  .subscribe-container {\r\n    margin-bottom: 2rem;\r\n  }\r\n  .subscribe-button {\r\n    padding-block: 1rem;\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://news-portal/./assets/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://news-portal/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://news-portal/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/logo-full.png */ \"./assets/img/logo-full.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/headline1.jpg */ \"./assets/img/headline1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/headline2.jpg */ \"./assets/img/headline2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/headline3.jpg */ \"./assets/img/headline3.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/headline4.jpg */ \"./assets/img/headline4.jpg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n  <title>News Portal</title>\\r\\n  <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css\\\">\\r\\n</head>\\r\\n<body>\\r\\n  <header>\\r\\n    <div class=\\\"nav-header\\\">\\r\\n      <div class=\\\"share-button\\\">\\r\\n        <span><i class=\\\"fa fa-share-alt\\\" aria-hidden=\\\"true\\\"></i></span>\\r\\n      </div>\\r\\n      <div class=\\\"logo\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\">\\r\\n      </div>\\r\\n      <div class=\\\"search-button\\\">\\r\\n        <span><i class=\\\"fa fa-search\\\" aria-hidden=\\\"true\\\"></i></span>\\r\\n        <div class=\\\"sosmed-container\\\">\\r\\n          <i class=\\\"fa fa-instagram0-square\\\" aria-hidden=\\\"true\\\"></i>\\r\\n          <i class=\\\"fa fa-instagram\\\" aria-hidden=\\\"true\\\"></i>\\r\\n          <i class=\\\"fa fa-instagram\\\" aria-hidden=\\\"true\\\"></i>\\r\\n          <i class=\\\"fa fa-instagram\\\" aria-hidden=\\\"true\\\"></i>\\r\\n          <i class=\\\"fa fa-instagram\\\" aria-hidden=\\\"true\\\"></i>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n    <hr>\\r\\n    <nav class=\\\"nav-bar\\\">\\r\\n      <a href=\\\"\\\">home</a>\\r\\n      <a class=\\\"selected\\\" href=\\\"\\\">hua</a>\\r\\n      <a href=\\\"\\\">world</a>\\r\\n      <!-- <a href=\\\"\\\">bussiness</a>\\r\\n      <a href=\\\"\\\">tech</a>\\r\\n      <a href=\\\"\\\">science</a>\\r\\n      <a href=\\\"\\\">health</a>\\r\\n      <a href=\\\"\\\">home</a> -->\\r\\n    </nav>\\r\\n    <hr>\\r\\n  </header>\\r\\n  <main>\\r\\n    <div class=\\\"headline-container\\\">\\r\\n      <div class=\\\"headline-grid\\\">\\r\\n        <button class=\\\"grid-arrow-left\\\">\\r\\n          <i class=\\\"fa fa-chevron-left\\\" aria-hidden=\\\"true\\\"></i>\\r\\n        </button>\\r\\n        <div class=\\\"grid-item\\\">\\r\\n          <img class=\\\"highlight-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"\\\">\\r\\n          <h3><a href=\\\"#\\\">Panic and confusion at scene of Gaza City hospital blast</a></h3>\\r\\n        </div>\\r\\n        <div class=\\\"grid-item\\\">\\r\\n          <img class=\\\"highlight-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\">\\r\\n          <h3><a href=\\\"#\\\">\\\"We're trying to survive\\\": 90 people shelter in one Gaza house</a></h3>\\r\\n        </div>\\r\\n        <div class=\\\"grid-item\\\">\\r\\n          <img class=\\\"highlight-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\">\\r\\n          <h3><a href=\\\"#\\\">Panic and confusion at scene of Gaza City hospital blast</a></h3>\\r\\n        </div>\\r\\n        <div class=\\\"grid-item\\\">\\r\\n          <img class=\\\"highlight-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"\\\">\\r\\n          <h3><a href=\\\"#\\\">\\\"We're trying to survive\\\": 90 people shelter in one Gaza house</a></h3>\\r\\n        </div>\\r\\n        <button class=\\\"grid-arrow-right\\\">\\r\\n          <i class=\\\"fa fa-chevron-right\\\" aria-hidden=\\\"true\\\"></i>\\r\\n        </button>\\r\\n      </div>\\r\\n      <div class=\\\"headline-bg\\\"></div>\\r\\n    </div>\\r\\n    <div class=\\\"content-container\\\">\\r\\n      <div class=\\\"main-content\\\">\\r\\n        <div class=\\\"main-news\\\">\\r\\n          <img class=\\\"main-news-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\">\\r\\n          <h2><a href=\\\"#\\\">\\\"We're trying to survive\\\": 90 people shelter in one Gaza house</a></h2>\\r\\n        </div>\\r\\n        <div class=\\\"main-news\\\">\\r\\n          <img class=\\\"main-news-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\">\\r\\n          <h2><a href=\\\"#\\\">Panic and confusion at scene of Gaza City hospital blast</a></h2>\\r\\n        </div>\\r\\n      </div>\\r\\n      <aside class=\\\"aside-content\\\">\\r\\n        <div class=\\\"aside-title\\\">\\r\\n          <h4>Most Popular</h4>\\r\\n        </div>\\r\\n        <div class=\\\"aside-news\\\">\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\">\\r\\n          <div class=\\\"aside-news-detail\\\">\\r\\n            <div class=\\\"aside-news-title\\\">\\r\\n              <P><a href=\\\"\\\">\\\"We're trying to survive\\\": 90 people shelter in one Gaza house</a></P>\\r\\n            </div>\\r\\n            <div class=\\\"aside-news-date\\\">\\r\\n              <p>Oct 23, 2023</p>\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n        <div class=\\\"aside-news\\\">\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\">\\r\\n          <div class=\\\"aside-news-detail\\\">\\r\\n            <div class=\\\"aside-news-title\\\">\\r\\n              <P><a href=\\\"\\\">\\\"We're trying to survive\\\": 90 people shelter in one Gaza house</a></P>\\r\\n            </div>\\r\\n            <div class=\\\"aside-news-date\\\">\\r\\n              <p>Oct 23, 2023</p>\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n        <div class=\\\"aside-news\\\">\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\">\\r\\n          <div class=\\\"aside-news-detail\\\">\\r\\n            <div class=\\\"aside-news-title\\\">\\r\\n              <P><a href=\\\"\\\">\\\"We're trying to survive\\\": 90 people shelter in one Gaza house</a></P>\\r\\n            </div>\\r\\n            <div class=\\\"aside-news-date\\\">\\r\\n              <p>Oct 23, 2023</p>\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n        <div class=\\\"aside-news\\\">\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\">\\r\\n          <div class=\\\"aside-news-detail\\\">\\r\\n            <div class=\\\"aside-news-title\\\">\\r\\n              <P><a href=\\\"\\\">\\\"We're trying to survive\\\": 90 people shelter in one Gaza house</a></P>\\r\\n            </div>\\r\\n            <div class=\\\"aside-news-date\\\">\\r\\n              <p>Oct 23, 2023</p>\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n        <div class=\\\"aside-news\\\">\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\">\\r\\n          <div class=\\\"aside-news-detail\\\">\\r\\n            <div class=\\\"aside-news-title\\\">\\r\\n              <P><a href=\\\"\\\">\\\"We're trying to survive\\\": 90 people shelter in one Gaza house</a></P>\\r\\n            </div>\\r\\n            <div class=\\\"aside-news-date\\\">\\r\\n              <p>Oct 23, 2023</p>\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n        <div class=\\\"aside-news\\\">\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\">\\r\\n          <div class=\\\"aside-news-detail\\\">\\r\\n            <div class=\\\"aside-news-title\\\">\\r\\n              <P><a href=\\\"\\\">\\\"We're trying to survive\\\": 90 people shelter in one Gaza house</a></P>\\r\\n            </div>\\r\\n            <div class=\\\"aside-news-date\\\">\\r\\n              <p>Oct 23, 2023</p>\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n      </aside>\\r\\n    </div>\\r\\n    <footer>\\r\\n      <hr>\\r\\n      <div class=\\\"footer-container\\\">\\r\\n        <div class=\\\"footer-logo\\\">\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\">\\r\\n        </div>\\r\\n        <div class=\\\"subscription\\\">\\r\\n          <p class=\\\"subscription-title\\\">Subscribe us!</p>\\r\\n          <p class=\\\"subscription-desc\\\">for a daily dose of news, delivered right to your inbox. Join thousands of satisfied readers who trust us\\r\\n          for their news.</p>\\r\\n          <form class=\\\"subscribe-container\\\" action=\\\"\\\">\\r\\n            <input class=\\\"subscribe-form\\\" type=\\\"text\\\" placeholder=\\\"example@gmail.com\\\">\\r\\n            <input class=\\\"subscribe-button\\\" type=\\\"button\\\" value=\\\"Go!\\\">\\r\\n          </form>\\r\\n        </div>\\r\\n      </div>\\r\\n    </footer>\\r\\n  </main>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://news-portal/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://news-portal/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./assets/styles/style.css":
/*!*********************************!*\
  !*** ./assets/styles/style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./assets/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://news-portal/./assets/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://news-portal/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://news-portal/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://news-portal/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://news-portal/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://news-portal/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://news-portal/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index.html */ \"./src/index.html\");\n/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/style.css */ \"./assets/styles/style.css\");\n/* harmony import */ var _assets_script_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/script/main.js */ \"./assets/script/main.js\");\n\r\n\r\n\r\n\r\n(0,_assets_script_main_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nif (false) {}\n\n//# sourceURL=webpack://news-portal/./src/index.js?");

/***/ }),

/***/ "./assets/img/headline1.jpg":
/*!**********************************!*\
  !*** ./assets/img/headline1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a9c46a9e6847e8edde80.jpg\";\n\n//# sourceURL=webpack://news-portal/./assets/img/headline1.jpg?");

/***/ }),

/***/ "./assets/img/headline2.jpg":
/*!**********************************!*\
  !*** ./assets/img/headline2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1cde2be2a230f0e84a93.jpg\";\n\n//# sourceURL=webpack://news-portal/./assets/img/headline2.jpg?");

/***/ }),

/***/ "./assets/img/headline3.jpg":
/*!**********************************!*\
  !*** ./assets/img/headline3.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7839e2468aff02d1b0cd.jpg\";\n\n//# sourceURL=webpack://news-portal/./assets/img/headline3.jpg?");

/***/ }),

/***/ "./assets/img/headline4.jpg":
/*!**********************************!*\
  !*** ./assets/img/headline4.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"590a7ee648427f36cd6a.jpg\";\n\n//# sourceURL=webpack://news-portal/./assets/img/headline4.jpg?");

/***/ }),

/***/ "./assets/img/logo-full.png":
/*!**********************************!*\
  !*** ./assets/img/logo-full.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"01487393f5dd90ad33fd.png\";\n\n//# sourceURL=webpack://news-portal/./assets/img/logo-full.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;