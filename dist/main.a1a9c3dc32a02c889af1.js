/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\nbody {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template: 60px 1fr 40px / 1fr;\r\n  justify-content: center;\r\n  align-items: start;\r\n  background-color: #e5d0cc62;\r\n}\r\nheader,\r\nfooter {\r\n  background-color: #444554;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  place-content: center;\r\n  color: white;\r\n  font-family: \"Bebas Neue\", cursive;\r\n}\r\nfooter {\r\n  font-size: 0.8rem;\r\n  color: white;\r\n  text-align: center;\r\n}\r\nfooter a {\r\n  color: rgba(255, 255, 255, 0.445);\r\n}\r\n/* main */\r\nmain {\r\n  display: grid;\r\n  place-items: center;\r\n  margin-top: 40px;\r\n}\r\nmain h2 {\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n}\r\nmain h3 {\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n}\r\nmain input {\r\n  text-align: center;\r\n  height: 30px;\r\n  outline: none;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n}\r\n.err {\r\n  color: rgb(243, 82, 82);\r\n  font-size: 0.8rem;\r\n}\r\n/* player table */\r\n.table__content > *,\r\n.table__top {\r\n  display: grid;\r\n  grid-template: 1fr / 200px 100px 100px 100px 100px 100px;\r\n}\r\n.table__row > *:first-child {\r\n  font-weight: 600;\r\n}\r\n.table__top {\r\n  text-align: center;\r\n  border-bottom: 2px solid #e5d0cc;\r\n  margin-top: 10px;\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n  color: #444554;\r\n}\r\n\r\n.table__content .table__cell:not(.table__cell:last-child) {\r\n  border-right: 1px solid rgb(255, 255, 255);\r\n}\r\n.table__content .table__cell {\r\n  text-align: center;\r\n  align-self: center;\r\n  height: 100%;\r\n  border-bottom: 1px solid rgba(48, 48, 48, 0.172);\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n.table__row > .table__cell:not(.table__cell:nth-child(2)) {\r\n  padding: 20px;\r\n}\r\n.table__row > .table__cell:nth-child(2) {\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n.green {\r\n  background-color: lightgreen;\r\n}\r\n.arrow {\r\n  display: block;\r\n}\r\n/* modal */\r\n#sticky > * {\r\n  display: block;\r\n  margin: auto;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n#sticky button {\r\n  background-color: #444554e0;\r\n  border-radius: 8px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: 600;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n@media (max-width: 785px) {\r\n  .table__row {\r\n    grid-template: 40px 1fr / 100px 100px 100px 100px 100px;\r\n  }\r\n  .table__top {\r\n    grid-template: 1fr / 100px 100px 100px 100px 100px;\r\n  }\r\n  .table__top > *:first-child {\r\n    display: none;\r\n  }\r\n  .table__row > *:first-child {\r\n    grid-area: 1 / 1 / 2 / -1;\r\n    justify-content: start;\r\n    align-content: center;\r\n  }\r\n}\r\n@media (max-width: 510px) {\r\n  .table__row {\r\n    grid-template: 40px 1fr / 70px 70px 70px 70px 70px;\r\n  }\r\n  .table__top {\r\n    grid-template: 1fr / 70px 70px 70px 70px 70px;\r\n    font-size: 0.79rem;\r\n    font-weight: 600;\r\n    color: #444554;\r\n  }\r\n  .table__row > .table__cell:not(.table__cell:nth-child(2)) {\r\n    padding: 5px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iCAAiC;AACnC;AAIA;EACE,aAAa;EACb,aAAa;EACb,kCAAkC;EAClC,uBAAuB;EACvB,kBAAkB;EAClB,2BAA2B;AAC7B;AACA;;EAEE,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,YAAY;EACZ,kCAAkC;AACpC;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,iCAAiC;AACnC;AACA,SAAS;AACT;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,iBAAiB;AACnB;AACA,iBAAiB;AACjB;;EAEE,aAAa;EACb,wDAAwD;AAC1D;AACA;EACE,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,gCAAgC;EAChC,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,0CAA0C;AAC5C;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,gDAAgD;EAChD,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,cAAc;AAChB;AACA,UAAU;AACV;EACE,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE;IACE,uDAAuD;EACzD;EACA;IACE,kDAAkD;EACpD;EACA;IACE,aAAa;EACf;EACA;IACE,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;EACvB;AACF;AACA;EACE;IACE,kDAAkD;EACpD;EACA;IACE,6CAA6C;IAC7C,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;EAChB;EACA;IACE,YAAY;EACd;AACF","sourcesContent":["*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;500;700&display=swap\");\r\nbody {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template: 60px 1fr 40px / 1fr;\r\n  justify-content: center;\r\n  align-items: start;\r\n  background-color: #e5d0cc62;\r\n}\r\nheader,\r\nfooter {\r\n  background-color: #444554;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  place-content: center;\r\n  color: white;\r\n  font-family: \"Bebas Neue\", cursive;\r\n}\r\nfooter {\r\n  font-size: 0.8rem;\r\n  color: white;\r\n  text-align: center;\r\n}\r\nfooter a {\r\n  color: rgba(255, 255, 255, 0.445);\r\n}\r\n/* main */\r\nmain {\r\n  display: grid;\r\n  place-items: center;\r\n  margin-top: 40px;\r\n}\r\nmain h2 {\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n}\r\nmain h3 {\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n}\r\nmain input {\r\n  text-align: center;\r\n  height: 30px;\r\n  outline: none;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n}\r\n.err {\r\n  color: rgb(243, 82, 82);\r\n  font-size: 0.8rem;\r\n}\r\n/* player table */\r\n.table__content > *,\r\n.table__top {\r\n  display: grid;\r\n  grid-template: 1fr / 200px 100px 100px 100px 100px 100px;\r\n}\r\n.table__row > *:first-child {\r\n  font-weight: 600;\r\n}\r\n.table__top {\r\n  text-align: center;\r\n  border-bottom: 2px solid #e5d0cc;\r\n  margin-top: 10px;\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n  color: #444554;\r\n}\r\n\r\n.table__content .table__cell:not(.table__cell:last-child) {\r\n  border-right: 1px solid rgb(255, 255, 255);\r\n}\r\n.table__content .table__cell {\r\n  text-align: center;\r\n  align-self: center;\r\n  height: 100%;\r\n  border-bottom: 1px solid rgba(48, 48, 48, 0.172);\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n.table__row > .table__cell:not(.table__cell:nth-child(2)) {\r\n  padding: 20px;\r\n}\r\n.table__row > .table__cell:nth-child(2) {\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n.green {\r\n  background-color: lightgreen;\r\n}\r\n.arrow {\r\n  display: block;\r\n}\r\n/* modal */\r\n#sticky > * {\r\n  display: block;\r\n  margin: auto;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n#sticky button {\r\n  background-color: #444554e0;\r\n  border-radius: 8px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: 600;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n@media (max-width: 785px) {\r\n  .table__row {\r\n    grid-template: 40px 1fr / 100px 100px 100px 100px 100px;\r\n  }\r\n  .table__top {\r\n    grid-template: 1fr / 100px 100px 100px 100px 100px;\r\n  }\r\n  .table__top > *:first-child {\r\n    display: none;\r\n  }\r\n  .table__row > *:first-child {\r\n    grid-area: 1 / 1 / 2 / -1;\r\n    justify-content: start;\r\n    align-content: center;\r\n  }\r\n}\r\n@media (max-width: 510px) {\r\n  .table__row {\r\n    grid-template: 40px 1fr / 70px 70px 70px 70px 70px;\r\n  }\r\n  .table__top {\r\n    grid-template: 1fr / 70px 70px 70px 70px 70px;\r\n    font-size: 0.79rem;\r\n    font-weight: 600;\r\n    color: #444554;\r\n  }\r\n  .table__row > .table__cell:not(.table__cell:nth-child(2)) {\r\n    padding: 5px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/displayGuess.js":
/*!*****************************!*\
  !*** ./src/displayGuess.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayGuess": () => (/* binding */ displayGuess)
/* harmony export */ });
/* harmony import */ var _gameOver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameOver.js */ "./src/gameOver.js");


function displayGuess(rndPlayer, userGuess) {
  let tableContainer = $(".table__content");
  let tableRow = $("<div>").addClass("table__row");
  let name = $("<div>").append(userGuess.name).addClass("table__cell");
  let team = $("<img>", {
    src: userGuess.teamImgSrc,
    width: "47px",
  });
  let teamContainer = $("<div>", { class: "table__cell" }).append(team);
  let nationality = $("<div>")
    .append(userGuess.nationality)
    .addClass("table__cell");
  let position = $("<div>").append(userGuess.position).addClass("table__cell");
  let height = $("<div>").append(userGuess.getFeet()).addClass("table__cell");
  let age = $("<div>").append(userGuess.age).addClass("table__cell");

  if (rndPlayer.team == userGuess.team) {
    teamContainer.addClass("green");
  }
  if (rndPlayer.nationality == userGuess.nationality) {
    nationality.addClass("green");
  }
  if (rndPlayer.position == userGuess.position) {
    position.addClass("green");
  }

  // height check
  if (rndPlayer.height == userGuess.height) {
    height.addClass("green");
  }
  if (rndPlayer.getIntegerHeight() > userGuess.getIntegerHeight()) {
    height.append("<span class='arrow'> ↑</span>");
  }
  if (rndPlayer.getIntegerHeight() < userGuess.getIntegerHeight()) {
    height.append("<span class='arrow'> ↓</span>");
  }

  // age check
  if (rndPlayer.age == userGuess.age) {
    age.addClass("green");
  }
  if (rndPlayer.age > userGuess.age) {
    age.append("<span class='arrow'> ↑</span>");
  }
  if (rndPlayer.age < userGuess.age) {
    age.append("<span class='arrow'> ↓</span>");
  }

  tableRow.append(name, teamContainer, nationality, position, height, age);
  tableContainer.append(tableRow);
}




/***/ }),

/***/ "./src/gameOver.js":
/*!*************************!*\
  !*** ./src/gameOver.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameOver": () => (/* binding */ gameOver)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function gameOver(isWin) {
  if (isWin) {
    console.log("You Win!");
    console.log(_index__WEBPACK_IMPORTED_MODULE_0__.rndPlayer);

    $("#search-field").prop("disabled", true);
    let heading = $("<h1>").text("You Guessed Correctly!");
    let playerName = $("<p>").text(_index__WEBPACK_IMPORTED_MODULE_0__.rndPlayer.name);
    let playerImg = $("<img>", {
      src: _index__WEBPACK_IMPORTED_MODULE_0__.rndPlayer.imgSrc,
      alt: `Headshot image of ${_index__WEBPACK_IMPORTED_MODULE_0__.rndPlayer.name}`,
    });
    let playAgainBtn = $("<button>")
      .text("Play Again")
      .click(() => {
        location.reload();
      });
    $("#sticky").append(heading, playerName, playerImg, playAgainBtn);

    $("#sticky").modal({
      escapeClose: false,
      clickClose: false,
      showClose: false,
    });
  } else {
    console.log("You Lose!");
    $("#search-field").prop("disabled", true);
    let heading = $("<h1>").text("You Lose!");
    let text = $("<p>").text("Answer:");
    let playerName = $("<p>").text(_index__WEBPACK_IMPORTED_MODULE_0__.rndPlayer.name);
    let playerImg = $("<img>", {
      src: _index__WEBPACK_IMPORTED_MODULE_0__.rndPlayer.imgSrc,
      alt: `Headshot image of ${_index__WEBPACK_IMPORTED_MODULE_0__.rndPlayer.name}`,
    });
    let playAgainBtn = $("<button>")
      .text("Play Again")
      .click(() => {
        location.reload();
      });
    $("#sticky").append(heading, text, playerName, playerImg, playAgainBtn);

    $("#sticky").modal({
      escapeClose: false,
      clickClose: false,
      showClose: false,
    });
  }
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "getRndPlayer": () => (/* binding */ getRndPlayer),
/* harmony export */   "rndPlayer": () => (/* binding */ rndPlayer),
/* harmony export */   "userGuess": () => (/* binding */ userGuess)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _displayGuess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayGuess */ "./src/displayGuess.js");
/* harmony import */ var _gameOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameOver */ "./src/gameOver.js");
/* harmony import */ var _searchPlayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchPlayer.js */ "./src/searchPlayer.js");




class Player {
  constructor(
    name,
    team,
    nationality,
    position,
    height,
    age,
    imgSrc,
    teamImgSrc
  ) {
    this.name = name;
    this.team = team;
    this.nationality = nationality;
    this.position = position;
    this.height = height;
    this.age = age;
    this.imgSrc = imgSrc;
    this.teamImgSrc = teamImgSrc;
  }

  getIntegerHeight() {
    let integer = parseInt(this.height.split(" ")[0]);
    return integer;
  }
  getFeet() {
    const realFeet = (this.getIntegerHeight() * 0.3937) / 12;
    const feet = Math.floor(realFeet);
    const inches = Math.round((realFeet - feet) * 12);
    return feet + "'" + inches + '"';
  }
}
let rndPlayer, userGuess;
async function getRndPlayer() {
  let round = 7;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "bb2bcd95f3mshea301c28c7ab66ap16ff4fjsneee023426a50",
    },
  };

  // random number generator
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  try {
    // fetch random player from top scorers pool -- idea is to retrieve random well known player
    const res = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2020",
      options
    );
    let data = await res.json();
    let arrLength = await data.response.length;
    const rndInt = randomIntFromInterval(0, arrLength - 1);

    data = await data.response[rndInt];
    rndPlayer = new Player(
      data.player.name,
      data.statistics[0].team.name,
      data.player.nationality,
      data.statistics[0].games.position,
      data.player.height,
      data.player.age,
      data.player.photo,
      data.statistics[0].team.logo
    );
    console.log(rndPlayer);

    // rndPlayer = new Player(
    //   "M. Rashford",
    //   "chelsea",
    //   "mexico",
    //   "attacker",
    //   "127 cm",
    //   "24",
    //   "https://media.api-sports.io/football/players/3247.png",
    //   "https://media.api-sports.io/football/teams/52.png"
    // );
    // //temporary
    // userGuess = new Player(
    //   "M. Rashfords",
    //   "chelsea",
    //   "mexico",
    //   "midfield",
    //   "120 cm",
    //   "30",
    //   "https://media.api-sports.io/football/players/3247.png",
    //   "https://media.api-sports.io/football/teams/52.png"
    // );

    let input = document.getElementById("search-field");
    input.addEventListener("keypress", async function (event) {
      if (event.key === "Enter") {
        $(".err").text("");
        userGuess = await (0,_searchPlayer_js__WEBPACK_IMPORTED_MODULE_3__.getUserGuess)();

        if (userGuess !== undefined && round > 1) {
          round--;
          $(".attempts").text("");
          $("#search-field").val("");
          $(".attempts").text(round);
          (0,_displayGuess__WEBPACK_IMPORTED_MODULE_1__.displayGuess)(rndPlayer, userGuess);
          if (rndPlayer.name == userGuess.name) {
            (0,_gameOver__WEBPACK_IMPORTED_MODULE_2__.gameOver)(true);
          }
        } else if (userGuess == undefined) {
          $(".err").text("No player found.");
          $("#search-field").val("");
        } else if (round == 1) {
          round--;
          $("#search-field").val("");
          $(".attempts").text("");
          $(".attempts").text(round);
          if (rndPlayer.name !== userGuess.name) {
            (0,_gameOver__WEBPACK_IMPORTED_MODULE_2__.gameOver)(false);
          }
          if (rndPlayer.name == userGuess.name) {
            (0,_gameOver__WEBPACK_IMPORTED_MODULE_2__.gameOver)(true);
          }
        }

        event.preventDefault();
      }
    });
  } catch (err) {
    console.log(err);
  }
}

getRndPlayer();




/***/ }),

/***/ "./src/searchPlayer.js":
/*!*****************************!*\
  !*** ./src/searchPlayer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserGuess": () => (/* binding */ getUserGuess)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "bb2bcd95f3mshea301c28c7ab66ap16ff4fjsneee023426a50",
  },
};
async function getUserGuess() {
  try {
    let searchInput = $("#search-field").val();

    searchInput = encodeURI(searchInput);

    let res = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/players?league=39&search=${searchInput}`,
      options
    );
    let data = await res.json();
    data = data.response[0];
    let userGuess = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Player(
      data.player.name,
      data.statistics[0].team.name,
      data.player.nationality,
      data.statistics[0].games.position,
      data.player.height,
      data.player.age,
      data.player.photo,
      data.statistics[0].team.logo
    );
    return userGuess;
  } catch (err) {
    console.log(err);
  }
}




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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5R3Vlc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2FtZU92ZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2VhcmNoUGxheWVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmViYXMrTmV1ZSZmYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOmJlZm9yZSxcXHJcXG4qOmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogNjBweCAxZnIgNDBweCAvIDFmcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZDBjYzYyO1xcclxcbn1cXHJcXG5oZWFkZXIsXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ1NTQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkJlYmFzIE5ldWVcXFwiLCBjdXJzaXZlO1xcclxcbn1cXHJcXG5mb290ZXIge1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbmZvb3RlciBhIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDQ1KTtcXHJcXG59XFxyXFxuLyogbWFpbiAqL1xcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5tYWluIGgyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbm1haW4gaDMge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxubWFpbiBpbnB1dCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuLmVyciB7XFxyXFxuICBjb2xvcjogcmdiKDI0MywgODIsIDgyKTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG4vKiBwbGF5ZXIgdGFibGUgKi9cXHJcXG4udGFibGVfX2NvbnRlbnQgPiAqLFxcclxcbi50YWJsZV9fdG9wIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAyMDBweCAxMDBweCAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcXHJcXG59XFxyXFxuLnRhYmxlX19yb3cgPiAqOmZpcnN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcbi50YWJsZV9fdG9wIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTVkMGNjO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjNDQ0NTU0O1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGVfX2NvbnRlbnQgLnRhYmxlX19jZWxsOm5vdCgudGFibGVfX2NlbGw6bGFzdC1jaGlsZCkge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbn1cXHJcXG4udGFibGVfX2NvbnRlbnQgLnRhYmxlX19jZWxsIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDQ4LCA0OCwgNDgsIDAuMTcyKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4udGFibGVfX3JvdyA+IC50YWJsZV9fY2VsbDpub3QoLnRhYmxlX19jZWxsOm50aC1jaGlsZCgyKSkge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuLnRhYmxlX19yb3cgPiAudGFibGVfX2NlbGw6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5ncmVlbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcbn1cXHJcXG4uYXJyb3cge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi8qIG1vZGFsICovXFxyXFxuI3N0aWNreSA+ICoge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4jc3RpY2t5IGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NTU0ZTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzg1cHgpIHtcXHJcXG4gIC50YWJsZV9fcm93IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNDBweCAxZnIgLyAxMDBweCAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcXHJcXG4gIH1cXHJcXG4gIC50YWJsZV9fdG9wIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMTAwcHggMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XFxyXFxuICB9XFxyXFxuICAudGFibGVfX3RvcCA+ICo6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgLnRhYmxlX19yb3cgPiAqOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAtMTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTEwcHgpIHtcXHJcXG4gIC50YWJsZV9fcm93IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNDBweCAxZnIgLyA3MHB4IDcwcHggNzBweCA3MHB4IDcwcHg7XFxyXFxuICB9XFxyXFxuICAudGFibGVfX3RvcCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDcwcHggNzBweCA3MHB4IDcwcHggNzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjc5cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogIzQ0NDU1NDtcXHJcXG4gIH1cXHJcXG4gIC50YWJsZV9fcm93ID4gLnRhYmxlX19jZWxsOm5vdCgudGFibGVfX2NlbGw6bnRoLWNoaWxkKDIpKSB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsaUNBQWlDO0FBQ25DO0FBSUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3QjtBQUNBOztFQUVFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjtBQUNBLGlCQUFpQjtBQUNqQjs7RUFFRSxhQUFhO0VBQ2Isd0RBQXdEO0FBQzFEO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0RBQWdEO0VBQ2hELGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0EsVUFBVTtBQUNWO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLHVEQUF1RDtFQUN6RDtFQUNBO0lBQ0Usa0RBQWtEO0VBQ3BEO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0VBQ3ZCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usa0RBQWtEO0VBQ3BEO0VBQ0E7SUFDRSw2Q0FBNkM7SUFDN0Msa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiA2MHB4IDFmciA0MHB4IC8gMWZyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkMGNjNjI7XFxyXFxufVxcclxcbmhlYWRlcixcXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDU1NDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmViYXMgTmV1ZVxcXCIsIGN1cnNpdmU7XFxyXFxufVxcclxcbmZvb3RlciB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuZm9vdGVyIGEge1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NDUpO1xcclxcbn1cXHJcXG4vKiBtYWluICovXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcbm1haW4gaDIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxubWFpbiBoMyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5tYWluIGlucHV0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG4uZXJyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjQzLCA4MiwgODIpO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcbi8qIHBsYXllciB0YWJsZSAqL1xcclxcbi50YWJsZV9fY29udGVudCA+ICosXFxyXFxuLnRhYmxlX190b3Age1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDIwMHB4IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xcclxcbn1cXHJcXG4udGFibGVfX3JvdyA+ICo6Zmlyc3QtY2hpbGQge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuLnRhYmxlX190b3Age1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNWQwY2M7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICM0NDQ1NTQ7XFxyXFxufVxcclxcblxcclxcbi50YWJsZV9fY29udGVudCAudGFibGVfX2NlbGw6bm90KC50YWJsZV9fY2VsbDpsYXN0LWNoaWxkKSB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcbi50YWJsZV9fY29udGVudCAudGFibGVfX2NlbGwge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNDgsIDQ4LCA0OCwgMC4xNzIpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi50YWJsZV9fcm93ID4gLnRhYmxlX19jZWxsOm5vdCgudGFibGVfX2NlbGw6bnRoLWNoaWxkKDIpKSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG4udGFibGVfX3JvdyA+IC50YWJsZV9fY2VsbDpudGgtY2hpbGQoMikge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmdyZWVuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxufVxcclxcbi5hcnJvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLyogbW9kYWwgKi9cXHJcXG4jc3RpY2t5ID4gKiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbiNzdGlja3kgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ1NTRlMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODVweCkge1xcclxcbiAgLnRhYmxlX19yb3cge1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA0MHB4IDFmciAvIDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xcclxcbiAgfVxcclxcbiAgLnRhYmxlX190b3Age1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxMDBweCAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcXHJcXG4gIH1cXHJcXG4gIC50YWJsZV9fdG9wID4gKjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAudGFibGVfX3JvdyA+ICo6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIC0xO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MTBweCkge1xcclxcbiAgLnRhYmxlX19yb3cge1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA0MHB4IDFmciAvIDcwcHggNzBweCA3MHB4IDcwcHggNzBweDtcXHJcXG4gIH1cXHJcXG4gIC50YWJsZV9fdG9wIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gNzBweCA3MHB4IDcwcHggNzBweCA3MHB4O1xcclxcbiAgICBmb250LXNpemU6IDAuNzlyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjNDQ0NTU0O1xcclxcbiAgfVxcclxcbiAgLnRhYmxlX19yb3cgPiAudGFibGVfX2NlbGw6bm90KC50YWJsZV9fY2VsbDpudGgtY2hpbGQoMikpIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWVPdmVyIH0gZnJvbSBcIi4vZ2FtZU92ZXIuanNcIjtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlHdWVzcyhybmRQbGF5ZXIsIHVzZXJHdWVzcykge1xyXG4gIGxldCB0YWJsZUNvbnRhaW5lciA9ICQoXCIudGFibGVfX2NvbnRlbnRcIik7XHJcbiAgbGV0IHRhYmxlUm93ID0gJChcIjxkaXY+XCIpLmFkZENsYXNzKFwidGFibGVfX3Jvd1wiKTtcclxuICBsZXQgbmFtZSA9ICQoXCI8ZGl2PlwiKS5hcHBlbmQodXNlckd1ZXNzLm5hbWUpLmFkZENsYXNzKFwidGFibGVfX2NlbGxcIik7XHJcbiAgbGV0IHRlYW0gPSAkKFwiPGltZz5cIiwge1xyXG4gICAgc3JjOiB1c2VyR3Vlc3MudGVhbUltZ1NyYyxcclxuICAgIHdpZHRoOiBcIjQ3cHhcIixcclxuICB9KTtcclxuICBsZXQgdGVhbUNvbnRhaW5lciA9ICQoXCI8ZGl2PlwiLCB7IGNsYXNzOiBcInRhYmxlX19jZWxsXCIgfSkuYXBwZW5kKHRlYW0pO1xyXG4gIGxldCBuYXRpb25hbGl0eSA9ICQoXCI8ZGl2PlwiKVxyXG4gICAgLmFwcGVuZCh1c2VyR3Vlc3MubmF0aW9uYWxpdHkpXHJcbiAgICAuYWRkQ2xhc3MoXCJ0YWJsZV9fY2VsbFwiKTtcclxuICBsZXQgcG9zaXRpb24gPSAkKFwiPGRpdj5cIikuYXBwZW5kKHVzZXJHdWVzcy5wb3NpdGlvbikuYWRkQ2xhc3MoXCJ0YWJsZV9fY2VsbFwiKTtcclxuICBsZXQgaGVpZ2h0ID0gJChcIjxkaXY+XCIpLmFwcGVuZCh1c2VyR3Vlc3MuZ2V0RmVldCgpKS5hZGRDbGFzcyhcInRhYmxlX19jZWxsXCIpO1xyXG4gIGxldCBhZ2UgPSAkKFwiPGRpdj5cIikuYXBwZW5kKHVzZXJHdWVzcy5hZ2UpLmFkZENsYXNzKFwidGFibGVfX2NlbGxcIik7XHJcblxyXG4gIGlmIChybmRQbGF5ZXIudGVhbSA9PSB1c2VyR3Vlc3MudGVhbSkge1xyXG4gICAgdGVhbUNvbnRhaW5lci5hZGRDbGFzcyhcImdyZWVuXCIpO1xyXG4gIH1cclxuICBpZiAocm5kUGxheWVyLm5hdGlvbmFsaXR5ID09IHVzZXJHdWVzcy5uYXRpb25hbGl0eSkge1xyXG4gICAgbmF0aW9uYWxpdHkuYWRkQ2xhc3MoXCJncmVlblwiKTtcclxuICB9XHJcbiAgaWYgKHJuZFBsYXllci5wb3NpdGlvbiA9PSB1c2VyR3Vlc3MucG9zaXRpb24pIHtcclxuICAgIHBvc2l0aW9uLmFkZENsYXNzKFwiZ3JlZW5cIik7XHJcbiAgfVxyXG5cclxuICAvLyBoZWlnaHQgY2hlY2tcclxuICBpZiAocm5kUGxheWVyLmhlaWdodCA9PSB1c2VyR3Vlc3MuaGVpZ2h0KSB7XHJcbiAgICBoZWlnaHQuYWRkQ2xhc3MoXCJncmVlblwiKTtcclxuICB9XHJcbiAgaWYgKHJuZFBsYXllci5nZXRJbnRlZ2VySGVpZ2h0KCkgPiB1c2VyR3Vlc3MuZ2V0SW50ZWdlckhlaWdodCgpKSB7XHJcbiAgICBoZWlnaHQuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J2Fycm93Jz4g4oaRPC9zcGFuPlwiKTtcclxuICB9XHJcbiAgaWYgKHJuZFBsYXllci5nZXRJbnRlZ2VySGVpZ2h0KCkgPCB1c2VyR3Vlc3MuZ2V0SW50ZWdlckhlaWdodCgpKSB7XHJcbiAgICBoZWlnaHQuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J2Fycm93Jz4g4oaTPC9zcGFuPlwiKTtcclxuICB9XHJcblxyXG4gIC8vIGFnZSBjaGVja1xyXG4gIGlmIChybmRQbGF5ZXIuYWdlID09IHVzZXJHdWVzcy5hZ2UpIHtcclxuICAgIGFnZS5hZGRDbGFzcyhcImdyZWVuXCIpO1xyXG4gIH1cclxuICBpZiAocm5kUGxheWVyLmFnZSA+IHVzZXJHdWVzcy5hZ2UpIHtcclxuICAgIGFnZS5hcHBlbmQoXCI8c3BhbiBjbGFzcz0nYXJyb3cnPiDihpE8L3NwYW4+XCIpO1xyXG4gIH1cclxuICBpZiAocm5kUGxheWVyLmFnZSA8IHVzZXJHdWVzcy5hZ2UpIHtcclxuICAgIGFnZS5hcHBlbmQoXCI8c3BhbiBjbGFzcz0nYXJyb3cnPiDihpM8L3NwYW4+XCIpO1xyXG4gIH1cclxuXHJcbiAgdGFibGVSb3cuYXBwZW5kKG5hbWUsIHRlYW1Db250YWluZXIsIG5hdGlvbmFsaXR5LCBwb3NpdGlvbiwgaGVpZ2h0LCBhZ2UpO1xyXG4gIHRhYmxlQ29udGFpbmVyLmFwcGVuZCh0YWJsZVJvdyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlHdWVzcyB9O1xyXG4iLCJpbXBvcnQgeyBybmRQbGF5ZXIsIHVzZXJHdWVzcyB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBnYW1lT3Zlcihpc1dpbikge1xyXG4gIGlmIChpc1dpbikge1xyXG4gICAgY29uc29sZS5sb2coXCJZb3UgV2luIVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHJuZFBsYXllcik7XHJcblxyXG4gICAgJChcIiNzZWFyY2gtZmllbGRcIikucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgbGV0IGhlYWRpbmcgPSAkKFwiPGgxPlwiKS50ZXh0KFwiWW91IEd1ZXNzZWQgQ29ycmVjdGx5IVwiKTtcclxuICAgIGxldCBwbGF5ZXJOYW1lID0gJChcIjxwPlwiKS50ZXh0KHJuZFBsYXllci5uYW1lKTtcclxuICAgIGxldCBwbGF5ZXJJbWcgPSAkKFwiPGltZz5cIiwge1xyXG4gICAgICBzcmM6IHJuZFBsYXllci5pbWdTcmMsXHJcbiAgICAgIGFsdDogYEhlYWRzaG90IGltYWdlIG9mICR7cm5kUGxheWVyLm5hbWV9YCxcclxuICAgIH0pO1xyXG4gICAgbGV0IHBsYXlBZ2FpbkJ0biA9ICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAudGV4dChcIlBsYXkgQWdhaW5cIilcclxuICAgICAgLmNsaWNrKCgpID0+IHtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSk7XHJcbiAgICAkKFwiI3N0aWNreVwiKS5hcHBlbmQoaGVhZGluZywgcGxheWVyTmFtZSwgcGxheWVySW1nLCBwbGF5QWdhaW5CdG4pO1xyXG5cclxuICAgICQoXCIjc3RpY2t5XCIpLm1vZGFsKHtcclxuICAgICAgZXNjYXBlQ2xvc2U6IGZhbHNlLFxyXG4gICAgICBjbGlja0Nsb3NlOiBmYWxzZSxcclxuICAgICAgc2hvd0Nsb3NlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIllvdSBMb3NlIVwiKTtcclxuICAgICQoXCIjc2VhcmNoLWZpZWxkXCIpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgIGxldCBoZWFkaW5nID0gJChcIjxoMT5cIikudGV4dChcIllvdSBMb3NlIVwiKTtcclxuICAgIGxldCB0ZXh0ID0gJChcIjxwPlwiKS50ZXh0KFwiQW5zd2VyOlwiKTtcclxuICAgIGxldCBwbGF5ZXJOYW1lID0gJChcIjxwPlwiKS50ZXh0KHJuZFBsYXllci5uYW1lKTtcclxuICAgIGxldCBwbGF5ZXJJbWcgPSAkKFwiPGltZz5cIiwge1xyXG4gICAgICBzcmM6IHJuZFBsYXllci5pbWdTcmMsXHJcbiAgICAgIGFsdDogYEhlYWRzaG90IGltYWdlIG9mICR7cm5kUGxheWVyLm5hbWV9YCxcclxuICAgIH0pO1xyXG4gICAgbGV0IHBsYXlBZ2FpbkJ0biA9ICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAudGV4dChcIlBsYXkgQWdhaW5cIilcclxuICAgICAgLmNsaWNrKCgpID0+IHtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSk7XHJcbiAgICAkKFwiI3N0aWNreVwiKS5hcHBlbmQoaGVhZGluZywgdGV4dCwgcGxheWVyTmFtZSwgcGxheWVySW1nLCBwbGF5QWdhaW5CdG4pO1xyXG5cclxuICAgICQoXCIjc3RpY2t5XCIpLm1vZGFsKHtcclxuICAgICAgZXNjYXBlQ2xvc2U6IGZhbHNlLFxyXG4gICAgICBjbGlja0Nsb3NlOiBmYWxzZSxcclxuICAgICAgc2hvd0Nsb3NlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZ2FtZU92ZXIgfTtcclxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgZGlzcGxheUd1ZXNzIH0gZnJvbSBcIi4vZGlzcGxheUd1ZXNzXCI7XHJcbmltcG9ydCB7IGdhbWVPdmVyIH0gZnJvbSBcIi4vZ2FtZU92ZXJcIjtcclxuaW1wb3J0IHsgZ2V0VXNlckd1ZXNzIH0gZnJvbSBcIi4vc2VhcmNoUGxheWVyLmpzXCI7XHJcbmNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuYW1lLFxyXG4gICAgdGVhbSxcclxuICAgIG5hdGlvbmFsaXR5LFxyXG4gICAgcG9zaXRpb24sXHJcbiAgICBoZWlnaHQsXHJcbiAgICBhZ2UsXHJcbiAgICBpbWdTcmMsXHJcbiAgICB0ZWFtSW1nU3JjXHJcbiAgKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50ZWFtID0gdGVhbTtcclxuICAgIHRoaXMubmF0aW9uYWxpdHkgPSBuYXRpb25hbGl0eTtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5hZ2UgPSBhZ2U7XHJcbiAgICB0aGlzLmltZ1NyYyA9IGltZ1NyYztcclxuICAgIHRoaXMudGVhbUltZ1NyYyA9IHRlYW1JbWdTcmM7XHJcbiAgfVxyXG5cclxuICBnZXRJbnRlZ2VySGVpZ2h0KCkge1xyXG4gICAgbGV0IGludGVnZXIgPSBwYXJzZUludCh0aGlzLmhlaWdodC5zcGxpdChcIiBcIilbMF0pO1xyXG4gICAgcmV0dXJuIGludGVnZXI7XHJcbiAgfVxyXG4gIGdldEZlZXQoKSB7XHJcbiAgICBjb25zdCByZWFsRmVldCA9ICh0aGlzLmdldEludGVnZXJIZWlnaHQoKSAqIDAuMzkzNykgLyAxMjtcclxuICAgIGNvbnN0IGZlZXQgPSBNYXRoLmZsb29yKHJlYWxGZWV0KTtcclxuICAgIGNvbnN0IGluY2hlcyA9IE1hdGgucm91bmQoKHJlYWxGZWV0IC0gZmVldCkgKiAxMik7XHJcbiAgICByZXR1cm4gZmVldCArIFwiJ1wiICsgaW5jaGVzICsgJ1wiJztcclxuICB9XHJcbn1cclxubGV0IHJuZFBsYXllciwgdXNlckd1ZXNzO1xyXG5hc3luYyBmdW5jdGlvbiBnZXRSbmRQbGF5ZXIoKSB7XHJcbiAgbGV0IHJvdW5kID0gNztcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIlgtUmFwaWRBUEktSG9zdFwiOiBcImFwaS1mb290YmFsbC12MS5wLnJhcGlkYXBpLmNvbVwiLFxyXG4gICAgICBcIlgtUmFwaWRBUEktS2V5XCI6IFwiYmIyYmNkOTVmM21zaGVhMzAxYzI4YzdhYjY2YXAxNmZmNGZqc25lZWUwMjM0MjZhNTBcIixcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgLy8gcmFuZG9tIG51bWJlciBnZW5lcmF0b3JcclxuICBmdW5jdGlvbiByYW5kb21JbnRGcm9tSW50ZXJ2YWwobWluLCBtYXgpIHtcclxuICAgIC8vIG1pbiBhbmQgbWF4IGluY2x1ZGVkXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyBmZXRjaCByYW5kb20gcGxheWVyIGZyb20gdG9wIHNjb3JlcnMgcG9vbCAtLSBpZGVhIGlzIHRvIHJldHJpZXZlIHJhbmRvbSB3ZWxsIGtub3duIHBsYXllclxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9hcGktZm9vdGJhbGwtdjEucC5yYXBpZGFwaS5jb20vdjMvcGxheWVycy90b3BzY29yZXJzP2xlYWd1ZT0zOSZzZWFzb249MjAyMFwiLFxyXG4gICAgICBvcHRpb25zXHJcbiAgICApO1xyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgbGV0IGFyckxlbmd0aCA9IGF3YWl0IGRhdGEucmVzcG9uc2UubGVuZ3RoO1xyXG4gICAgY29uc3Qgcm5kSW50ID0gcmFuZG9tSW50RnJvbUludGVydmFsKDAsIGFyckxlbmd0aCAtIDEpO1xyXG5cclxuICAgIGRhdGEgPSBhd2FpdCBkYXRhLnJlc3BvbnNlW3JuZEludF07XHJcbiAgICBybmRQbGF5ZXIgPSBuZXcgUGxheWVyKFxyXG4gICAgICBkYXRhLnBsYXllci5uYW1lLFxyXG4gICAgICBkYXRhLnN0YXRpc3RpY3NbMF0udGVhbS5uYW1lLFxyXG4gICAgICBkYXRhLnBsYXllci5uYXRpb25hbGl0eSxcclxuICAgICAgZGF0YS5zdGF0aXN0aWNzWzBdLmdhbWVzLnBvc2l0aW9uLFxyXG4gICAgICBkYXRhLnBsYXllci5oZWlnaHQsXHJcbiAgICAgIGRhdGEucGxheWVyLmFnZSxcclxuICAgICAgZGF0YS5wbGF5ZXIucGhvdG8sXHJcbiAgICAgIGRhdGEuc3RhdGlzdGljc1swXS50ZWFtLmxvZ29cclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhybmRQbGF5ZXIpO1xyXG5cclxuICAgIC8vIHJuZFBsYXllciA9IG5ldyBQbGF5ZXIoXHJcbiAgICAvLyAgIFwiTS4gUmFzaGZvcmRcIixcclxuICAgIC8vICAgXCJjaGVsc2VhXCIsXHJcbiAgICAvLyAgIFwibWV4aWNvXCIsXHJcbiAgICAvLyAgIFwiYXR0YWNrZXJcIixcclxuICAgIC8vICAgXCIxMjcgY21cIixcclxuICAgIC8vICAgXCIyNFwiLFxyXG4gICAgLy8gICBcImh0dHBzOi8vbWVkaWEuYXBpLXNwb3J0cy5pby9mb290YmFsbC9wbGF5ZXJzLzMyNDcucG5nXCIsXHJcbiAgICAvLyAgIFwiaHR0cHM6Ly9tZWRpYS5hcGktc3BvcnRzLmlvL2Zvb3RiYWxsL3RlYW1zLzUyLnBuZ1wiXHJcbiAgICAvLyApO1xyXG4gICAgLy8gLy90ZW1wb3JhcnlcclxuICAgIC8vIHVzZXJHdWVzcyA9IG5ldyBQbGF5ZXIoXHJcbiAgICAvLyAgIFwiTS4gUmFzaGZvcmRzXCIsXHJcbiAgICAvLyAgIFwiY2hlbHNlYVwiLFxyXG4gICAgLy8gICBcIm1leGljb1wiLFxyXG4gICAgLy8gICBcIm1pZGZpZWxkXCIsXHJcbiAgICAvLyAgIFwiMTIwIGNtXCIsXHJcbiAgICAvLyAgIFwiMzBcIixcclxuICAgIC8vICAgXCJodHRwczovL21lZGlhLmFwaS1zcG9ydHMuaW8vZm9vdGJhbGwvcGxheWVycy8zMjQ3LnBuZ1wiLFxyXG4gICAgLy8gICBcImh0dHBzOi8vbWVkaWEuYXBpLXNwb3J0cy5pby9mb290YmFsbC90ZWFtcy81Mi5wbmdcIlxyXG4gICAgLy8gKTtcclxuXHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1maWVsZFwiKTtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgJChcIi5lcnJcIikudGV4dChcIlwiKTtcclxuICAgICAgICB1c2VyR3Vlc3MgPSBhd2FpdCBnZXRVc2VyR3Vlc3MoKTtcclxuXHJcbiAgICAgICAgaWYgKHVzZXJHdWVzcyAhPT0gdW5kZWZpbmVkICYmIHJvdW5kID4gMSkge1xyXG4gICAgICAgICAgcm91bmQtLTtcclxuICAgICAgICAgICQoXCIuYXR0ZW1wdHNcIikudGV4dChcIlwiKTtcclxuICAgICAgICAgICQoXCIjc2VhcmNoLWZpZWxkXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICQoXCIuYXR0ZW1wdHNcIikudGV4dChyb3VuZCk7XHJcbiAgICAgICAgICBkaXNwbGF5R3Vlc3Mocm5kUGxheWVyLCB1c2VyR3Vlc3MpO1xyXG4gICAgICAgICAgaWYgKHJuZFBsYXllci5uYW1lID09IHVzZXJHdWVzcy5uYW1lKSB7XHJcbiAgICAgICAgICAgIGdhbWVPdmVyKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodXNlckd1ZXNzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgJChcIi5lcnJcIikudGV4dChcIk5vIHBsYXllciBmb3VuZC5cIik7XHJcbiAgICAgICAgICAkKFwiI3NlYXJjaC1maWVsZFwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyb3VuZCA9PSAxKSB7XHJcbiAgICAgICAgICByb3VuZC0tO1xyXG4gICAgICAgICAgJChcIiNzZWFyY2gtZmllbGRcIikudmFsKFwiXCIpO1xyXG4gICAgICAgICAgJChcIi5hdHRlbXB0c1wiKS50ZXh0KFwiXCIpO1xyXG4gICAgICAgICAgJChcIi5hdHRlbXB0c1wiKS50ZXh0KHJvdW5kKTtcclxuICAgICAgICAgIGlmIChybmRQbGF5ZXIubmFtZSAhPT0gdXNlckd1ZXNzLm5hbWUpIHtcclxuICAgICAgICAgICAgZ2FtZU92ZXIoZmFsc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHJuZFBsYXllci5uYW1lID09IHVzZXJHdWVzcy5uYW1lKSB7XHJcbiAgICAgICAgICAgIGdhbWVPdmVyKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufVxyXG5cclxuZ2V0Um5kUGxheWVyKCk7XHJcblxyXG5leHBvcnQgeyBnZXRSbmRQbGF5ZXIsIFBsYXllciwgcm5kUGxheWVyLCB1c2VyR3Vlc3MgfTtcclxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiWC1SYXBpZEFQSS1Ib3N0XCI6IFwiYXBpLWZvb3RiYWxsLXYxLnAucmFwaWRhcGkuY29tXCIsXHJcbiAgICBcIlgtUmFwaWRBUEktS2V5XCI6IFwiYmIyYmNkOTVmM21zaGVhMzAxYzI4YzdhYjY2YXAxNmZmNGZqc25lZWUwMjM0MjZhNTBcIixcclxuICB9LFxyXG59O1xyXG5hc3luYyBmdW5jdGlvbiBnZXRVc2VyR3Vlc3MoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBzZWFyY2hJbnB1dCA9ICQoXCIjc2VhcmNoLWZpZWxkXCIpLnZhbCgpO1xyXG5cclxuICAgIHNlYXJjaElucHV0ID0gZW5jb2RlVVJJKHNlYXJjaElucHV0KTtcclxuXHJcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS1mb290YmFsbC12MS5wLnJhcGlkYXBpLmNvbS92My9wbGF5ZXJzP2xlYWd1ZT0zOSZzZWFyY2g9JHtzZWFyY2hJbnB1dH1gLFxyXG4gICAgICBvcHRpb25zXHJcbiAgICApO1xyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgZGF0YSA9IGRhdGEucmVzcG9uc2VbMF07XHJcbiAgICBsZXQgdXNlckd1ZXNzID0gbmV3IFBsYXllcihcclxuICAgICAgZGF0YS5wbGF5ZXIubmFtZSxcclxuICAgICAgZGF0YS5zdGF0aXN0aWNzWzBdLnRlYW0ubmFtZSxcclxuICAgICAgZGF0YS5wbGF5ZXIubmF0aW9uYWxpdHksXHJcbiAgICAgIGRhdGEuc3RhdGlzdGljc1swXS5nYW1lcy5wb3NpdGlvbixcclxuICAgICAgZGF0YS5wbGF5ZXIuaGVpZ2h0LFxyXG4gICAgICBkYXRhLnBsYXllci5hZ2UsXHJcbiAgICAgIGRhdGEucGxheWVyLnBob3RvLFxyXG4gICAgICBkYXRhLnN0YXRpc3RpY3NbMF0udGVhbS5sb2dvXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHVzZXJHdWVzcztcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBnZXRVc2VyR3Vlc3MgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9