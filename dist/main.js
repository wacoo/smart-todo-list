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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\r\nbody {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#parent {\r\n  width: 50%;\r\n  /* min-height: 500px; */\r\n  -webkit-box-shadow: 0 5px 5px 5px red;\r\n  box-shadow: -1px 0 5px gray, 1px 0 5px gray, 0 1px 5px gray;\r\n  font-family: sans-serif;\r\n  font-size: 20px;\r\n  color: gray;\r\n}\r\n\r\n#parent ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#parent li {\r\n  padding: 10px 12px 10px 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: gray solid 1px;\r\n}\r\n\r\n#parent span {\r\n  width: 90%;\r\n  text-align: left;\r\n\r\n  /* outline: red solid 2px;  */\r\n}\r\n\r\n#parent .head {\r\n  padding: 8px 12px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: gray solid 1px;\r\n\r\n  /* outline: red solid 2px; */\r\n}\r\n\r\n.div_input {\r\n  border-bottom: gray solid 1px;\r\n}\r\n\r\n#parent .input,\r\n#parent .desc {\r\n  width: calc(100% - 60px);\r\n  padding: 20px 12px;\r\n  font-style: italic;\r\n  font-size: 15px;\r\n  border: 0;\r\n}\r\n\r\n#parent .desc {\r\n  width: calc(100% - 40px);\r\n  padding: 12px;\r\n  margin: 0;\r\n  border: 0;\r\n  /* outline: red solid 2px; */\r\n}\r\n\r\n#parent h3 {\r\n  margin: 12px 0;\r\n\r\n  /* outline: blue solid 2px; */\r\n}\r\n\r\n.div_clear_all {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 12px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n.div_clear_all button {\r\n  font-size: 17px;\r\n  font-weight: 500;\r\n  color: gray;\r\n  background-color: #f1f1f1;\r\n  border: 0;\r\n}\r\n\r\n.can {\r\n  display: none;\r\n}\r\n\r\n.elipse,\r\n.can,\r\n.refresh,\r\n.enter {\r\n  font-size: 25px;\r\n  padding: 6px;\r\n}\r\n\r\ninput.chk {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 6px 4px 6px 12px;\r\n}\r\n\r\ninput:focus{\r\n  outline: none;\r\n}\r\n\r\n.strike {\r\n  text-decoration: line-through;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-config-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-config-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-config-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-config-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-config-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-config-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-config-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-config-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-config-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-config-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Display: () => (/* binding */ Display)\n/* harmony export */ });\n/* harmony import */ var _one_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one_task.js */ \"./src/one_task.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n\r\n\r\n\r\nconst root = document.getElementById('parent');\r\n\r\nclass Display {\r\n  createElement = (type, cls, id) => {\r\n    const element = document.createElement(type);\r\n\r\n    if (cls) {\r\n      for (let i = 0; i < cls.length; i += 1) {\r\n        element.classList.add(cls[i]);\r\n      }\r\n    }\r\n    if (id) {\r\n      element.id = id;\r\n    }\r\n    return element;\r\n  };\r\n\r\n  appendElement = (child, parent) => {\r\n    parent.appendChild(child);\r\n  };\r\n\r\n  populatePage() {\r\n    root.innerHTML = '';\r\n    const h3 = this.createElement('h3', null, null);\r\n    const head = this.createElement('div', ['head'], null);\r\n    const ul = this.createElement('ul', null, null);\r\n    const refresh = this.createElement(\r\n      'i',\r\n      ['refresh', 'fa', 'fa-refresh'],\r\n      null\r\n    );\r\n    const divInput = this.createElement('div', ['div_input'], null);\r\n    const input = this.createElement('input', ['input'], 'input');\r\n    const enter = this.createElement('span', ['enter'], null);\r\n    const divClearAll = this.createElement('div', ['div_clear_all'], null);\r\n    const btnClear = this.createElement('button', 'clear', 'clear');\r\n\r\n    h3.innerHTML = 'Today\\'s Todo';\r\n    input.setAttribute('placeholder', 'Add your list...');\r\n    enter.innerHTML = '&crarr;';\r\n\r\n    this.appendElement(h3, head);\r\n    this.appendElement(refresh, head);\r\n    this.appendElement(input, divInput);\r\n    this.appendElement(enter, divInput);\r\n    this.appendElement(head, root);\r\n    this.appendElement(divInput, root);\r\n\r\n    for (let i = 0; i < _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.taskCollection.length; i += 1) {\r\n      const li = this.createElement('li', null, null);\r\n      const chk = this.createElement(\"input\", [\"chk\"], \"chk\");\r\n      const task = this.createElement(\"input\", [\"desc\"], \"desc\");\r\n      const elipse = this.createElement(\r\n        \"i\",\r\n        [\"elipse\", \"fa\", \"fa-ellipsis-v\"],\r\n        \"elipse\"\r\n      );\r\n      const can = this.createElement(\"i\", [\"can\", \"fa\", \"fa-trash\"], `${i}`);\r\n\r\n      chk.type = \"checkbox\";\r\n      chk.checked = _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.taskCollection[i].completed;\r\n      task.type = \"text\";\r\n      task.disabled = true;\r\n      task.value = _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.taskCollection[i].description;\r\n      if (chk.checked) {\r\n        task.classList.add('strike');\r\n      } else {\r\n        task.classList.remove('strike');\r\n      }\r\n      can.setAttribute(\"aria-hidden\", \"true\");\r\n      this.appendElement(chk, li);\r\n      this.appendElement(task, li);\r\n      this.appendElement(elipse, li);\r\n      this.appendElement(can, li);\r\n\r\n      this.appendElement(li, ul);\r\n      this.updateTask(task);\r\n      this.addEnterListener(task);\r\n\r\n      this.addCheckEventListener(chk, task, i);\r\n    }\r\n    this.appendElement(ul, root);\r\n    btnClear.innerHTML = 'Clear all completed';\r\n    this.appendElement(btnClear, divClearAll);\r\n    this.appendElement(divClearAll, root);\r\n\r\n    this.addEnterListener(input);\r\n    this.clearButtonListener(btnClear);\r\n  }\r\n\r\n  addCheckEventListener (chk, tsk, idx) {\r\n    chk.addEventListener('change', () => {\r\n      if (chk.checked) {\r\n        _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.taskCollection[idx].completed = true;\r\n        tsk.classList.add('strike');\r\n        this.populatePage();\r\n      } else {\r\n        _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.taskCollection[idx].completed = false;\r\n        tsk.classList.remove('strike');\r\n        this.populatePage();\r\n      }\r\n    });\r\n  }\r\n\r\n  addEnterListener(tsk) {\r\n    let input = null;\r\n    let id = null;\r\n    if (tsk.id !== 'desc') {\r\n      input = document.getElementById('input');\r\n    } else {\r\n      id = this.returnSiblingwithClass(tsk, 'can').id;\r\n    }\r\n    tsk.addEventListener('keypress', (event) => {\r\n      if (event.key === 'Enter') {\r\n        event.preventDefault();\r\n        if (tsk.id !== 'desc') {\r\n          const task = new _one_task_js__WEBPACK_IMPORTED_MODULE_0__.OneTask();\r\n          task.description = input.value;\r\n          task.completed = false;\r\n          task.index = _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.index;\r\n          _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.addTask(task);\r\n        } else {\r\n          _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.taskCollection[id].description = tsk.value;\r\n        }\r\n        this.populatePage();\r\n      }\r\n    });\r\n  }\r\n\r\n  updateTask(input) {\r\n    const can = this.returnSiblingwithClass(input, 'can');\r\n    const elipse = this.returnSiblingwithClass(input, 'elipse');\r\n    const tsk = this.returnSiblingwithClass(input, 'desc');\r\n    elipse.addEventListener('click', (event) => {\r\n      tsk.disabled = false;\r\n      can.style.display = 'block';\r\n      elipse.style.display = 'none';\r\n    });\r\n\r\n    can.addEventListener('click', (event) => {\r\n      _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.removeTask(can.id, true);\r\n      _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.reassignIndex(); \r\n      this.populatePage();\r\n    });\r\n  }\r\n\r\n  returnSiblingwithClass(elt, att = '') {\r\n    const parent = elt.parentNode;\r\n    const children = parent.childNodes;\r\n\r\n    for (let i = 0; i < children.length; i++) {\r\n      if (children[i].classList.contains(att)) {\r\n        return children[i];\r\n      }\r\n      if (children[i].id === att) {\r\n        return children[i];\r\n      }\r\n    }\r\n    return null;\r\n  }\r\n\r\n  removeAllCompleted() {\r\n    for (let i = 0; i < _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.taskCollection.length; i += 1) {\r\n      let tsk = _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.taskCollection[i];\r\n      if (tsk.completed) {\r\n        _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.removeTask(i, false);\r\n      }\r\n    }\r\n    _tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.reassignIndex(); \r\n    console.log(_tasks_js__WEBPACK_IMPORTED_MODULE_1__.tasks.taskCollection);\r\n  }\r\n\r\n  clearButtonListener(btnClear) {\r\n    btnClear.addEventListener('click', () => {\r\n      this.removeAllCompleted();\r\n      this.populatePage();\r\n    });\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-config-template/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _one_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./one_task.js */ \"./src/one_task.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n\r\n\r\n\r\n\r\n\r\nconst display = new _display_js__WEBPACK_IMPORTED_MODULE_3__.Display();\r\n\r\n\r\n/*updateTasks = () => {\r\n    for (let i = 0; i < tasks.taskCollection.length; i += 1) {\r\n      const description = document.getElementById('desc');\r\n      description.addEventListener('keypress', (event) => {\r\n        if (event.key === 'enter') {\r\n          const task = new OneTask();\r\n          task.description = description.value;\r\n          task.completed = chk.value;\r\n          task.index = tasks.index;\r\n          tasks.taskCollection.push(task);\r\n          this.populatePage();\r\n        }\r\n      });\r\n    }\r\n}*/\r\n\r\n_tasks_js__WEBPACK_IMPORTED_MODULE_2__.tasks.restoreData();\r\ndisplay.populatePage();\r\n//display.addEnterListener();\r\n//updateTasks();\n\n//# sourceURL=webpack://webpack-config-template/./src/index.js?");

/***/ }),

/***/ "./src/one_task.js":
/*!*************************!*\
  !*** ./src/one_task.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OneTask: () => (/* binding */ OneTask)\n/* harmony export */ });\nclass OneTask {\r\n    constructor(description, completed, index) {\r\n        this.description = description;\r\n        this.completed = completed;\r\n        this.index = index;\r\n    }\r\n\r\n    updateDescription(newDesc) {\r\n        task.description = newDesc;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://webpack-config-template/./src/one_task.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\nlet tasks = null;\r\nclass Tasks {\r\n    constructor() {\r\n        this.index = 0;\r\n        this.taskCollection = [];\r\n    }\r\n\r\n    addTask(task) {\r\n        this.taskCollection.push(task);\r\n        this.index += 1;\r\n        this.storeData();\r\n    }\r\n\r\n    removeTask(idx, one) {\r\n        console.log('===================================');\r\n        console.log(this.taskCollection[idx]);\r\n        this.taskCollection = this.taskCollection.filter((tsk) => idx != tsk.index);\r\n        if(this.idx > 0) {\r\n            this.index -= 1;\r\n        }\r\n\r\n        this.storeData();\r\n        console.log('===================================');\r\n    }\r\n\r\n    reassignIndex() {\r\n        for (let j = 0; j < this.taskCollection.length; j += 1) {\r\n            this.taskCollection[j].index = j;\r\n            this.index += 1;\r\n        }\r\n    }\r\n\r\n    storeData() {\r\n        const strData = JSON.stringify(tasks.taskCollection);\r\n        localStorage.setItem('data', strData);\r\n    }\r\n\r\n    restoreData () {\r\n        const strData = localStorage.getItem('data');\r\n        if (strData) {\r\n            tasks.taskCollection = JSON.parse(strData);\r\n        }        \r\n    }\r\n}\r\n\r\ntasks = new Tasks();\r\n\r\n\n\n//# sourceURL=webpack://webpack-config-template/./src/tasks.js?");

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