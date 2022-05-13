/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template: 60px 1fr 40px / 1fr;\r\n  justify-content: center;\r\n  align-items: start;\r\n  background-color: #e5d0cc62;\r\n}\r\nheader,\r\nfooter {\r\n  background-color: #444554;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  place-content: center;\r\n  color: white;\r\n  font-family: \"Bebas Neue\", cursive;\r\n}\r\nfooter {\r\n  font-size: 0.8rem;\r\n  color: white;\r\n  text-align: center;\r\n}\r\nfooter a {\r\n  color: rgba(255, 255, 255, 0.445);\r\n}\r\n\r\n/* main */\r\nmain {\r\n  display: grid;\r\n  place-items: center;\r\n  margin-top: 40px;\r\n}\r\nmain h2 {\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n}\r\nmain h3 {\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n}\r\nmain input {\r\n  text-align: center;\r\n  height: 30px;\r\n  outline: none;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n}\r\n.err {\r\n  color: rgb(243, 82, 82);\r\n  font-size: 0.8rem;\r\n  margin-right: 90px;\r\n}\r\n.submission {\r\n  display: flex;\r\n}\r\n#submit-guess {\r\n  background-color: #444554;\r\n  color: white;\r\n  font-weight: 600;\r\n  border: none;\r\n  width: 90px;\r\n  margin-left: 3px;\r\n  font-size: 1rem;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n/* player table */\r\n.table__content > *,\r\n.table__top {\r\n  display: grid;\r\n  grid-template: 1fr / 200px 100px 100px 100px 100px 100px;\r\n}\r\n.table__content {\r\n  margin-bottom: 40px;\r\n}\r\n.table__row > *:first-child {\r\n  font-weight: 600;\r\n}\r\n.table__top {\r\n  text-align: center;\r\n  border-bottom: 2px solid #e5d0cc;\r\n  margin-top: 10px;\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n  color: #444554;\r\n}\r\n\r\n.table__content .table__cell:not(.table__cell:last-child) {\r\n  border-right: 1px solid rgb(255, 255, 255);\r\n}\r\n.table__content .table__cell {\r\n  text-align: center;\r\n  align-self: center;\r\n  height: 100%;\r\n  display: grid;\r\n  place-items: center;\r\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(255, 255, 255, 1) -60%,\r\n    rgba(68, 69, 84, 0.1) 50%,\r\n    rgba(68, 69, 84, 0.1) 150%\r\n  );\r\n}\r\n.table__row > .table__cell:not(.table__cell:nth-child(2)) {\r\n  padding: 20px 10px;\r\n}\r\n.table__row > .table__cell:nth-child(2) {\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n.green {\r\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(255, 255, 255, 1) -60%,\r\n    rgba(77, 235, 73, 0.6619690112373074) 50%,\r\n    rgba(77, 235, 73, 0.6619690112373074) 100%\r\n  ) !important;\r\n}\r\n.arrow {\r\n  display: block;\r\n}\r\n/* modal */\r\n#sticky > * {\r\n  display: block;\r\n  margin: auto;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n#sticky button {\r\n  background-color: #444554e0;\r\n  border-radius: 8px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: 600;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n}\r\n#sticky button:hover {\r\n  background-color: #44455473;\r\n}\r\n\r\n@media (max-width: 785px) {\r\n  .table__row {\r\n    grid-template: 40px 1fr / 100px 100px 100px 100px 100px;\r\n  }\r\n  .table__top {\r\n    grid-template: 1fr / 100px 100px 100px 100px 100px;\r\n  }\r\n  .table__top > *:first-child {\r\n    display: none;\r\n  }\r\n  .table__row > *:first-child {\r\n    grid-area: 1 / 1 / 2 / -1;\r\n    justify-content: start;\r\n    align-content: center;\r\n    background: none;\r\n    background-color: rgba(255, 255, 255, 0.274);\r\n  }\r\n}\r\n@media (max-width: 510px) {\r\n  .table__row {\r\n    grid-template: 40px 1fr / 70px 70px 70px 70px 70px;\r\n  }\r\n  .table__top {\r\n    grid-template: 1fr / 70px 70px 70px 70px 70px;\r\n    font-size: 0.79rem;\r\n    font-weight: 600;\r\n    color: #444554;\r\n  }\r\n  .table__row > .table__cell:not(.table__cell:nth-child(2)) {\r\n    padding: 5px;\r\n  }\r\n  .table__row > .table__cell:nth-child(4) {\r\n    padding: 0px !important;\r\n    font-size: 0.9rem;\r\n  }\r\n}\r\n\r\n/* auto complete */\r\n\r\n.autocomplete {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n.autocomplete-items {\r\n  position: absolute;\r\n  border: 1px solid #d4d4d4;\r\n  border-bottom: none;\r\n  border-top: none;\r\n  z-index: 99;\r\n  top: 100%;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.autocomplete-items > *:not(*:nth-child(-n + 8)) {\r\n  display: none;\r\n}\r\n.autocomplete-items div {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #d4d4d4;\r\n}\r\n.autocomplete-items div:hover {\r\n  background-color: #e9e9e9;\r\n}\r\n.autocomplete-active {\r\n  /*when navigating through the items using the arrow keys:*/\r\n  background-color: #444554 !important;\r\n  color: #ffffff;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,aAAa;EACb,kCAAkC;EAClC,uBAAuB;EACvB,kBAAkB;EAClB,2BAA2B;AAC7B;AACA;;EAEE,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,YAAY;EACZ,kCAAkC;AACpC;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,iCAAiC;AACnC;;AAEA,SAAS;AACT;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,eAAe;AACjB;AACA,iBAAiB;AACjB;;EAEE,aAAa;EACb,wDAAwD;AAC1D;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,gCAAgC;EAChC,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,0CAA0C;AAC5C;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB;;;;;GAKC;AACH;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,qBAAqB;AACvB;AACA;EACE;;;;;cAKY;AACd;AACA;EACE,cAAc;AAChB;AACA,UAAU;AACV;EACE,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,2BAA2B;AAC7B;;AAEA;EACE;IACE,uDAAuD;EACzD;EACA;IACE,kDAAkD;EACpD;EACA;IACE,aAAa;EACf;EACA;IACE,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,gBAAgB;IAChB,4CAA4C;EAC9C;AACF;AACA;EACE;IACE,kDAAkD;EACpD;EACA;IACE,6CAA6C;IAC7C,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;EAChB;EACA;IACE,YAAY;EACd;EACA;IACE,uBAAuB;IACvB,iBAAiB;EACnB;AACF;;AAEA,kBAAkB;;AAElB;EACE,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,SAAS;EACT,OAAO;EACP,QAAQ;AACV;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,gCAAgC;AAClC;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,0DAA0D;EAC1D,oCAAoC;EACpC,cAAc;AAChB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;500;700&display=swap\");\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template: 60px 1fr 40px / 1fr;\r\n  justify-content: center;\r\n  align-items: start;\r\n  background-color: #e5d0cc62;\r\n}\r\nheader,\r\nfooter {\r\n  background-color: #444554;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  place-content: center;\r\n  color: white;\r\n  font-family: \"Bebas Neue\", cursive;\r\n}\r\nfooter {\r\n  font-size: 0.8rem;\r\n  color: white;\r\n  text-align: center;\r\n}\r\nfooter a {\r\n  color: rgba(255, 255, 255, 0.445);\r\n}\r\n\r\n/* main */\r\nmain {\r\n  display: grid;\r\n  place-items: center;\r\n  margin-top: 40px;\r\n}\r\nmain h2 {\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n}\r\nmain h3 {\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n}\r\nmain input {\r\n  text-align: center;\r\n  height: 30px;\r\n  outline: none;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n}\r\n.err {\r\n  color: rgb(243, 82, 82);\r\n  font-size: 0.8rem;\r\n  margin-right: 90px;\r\n}\r\n.submission {\r\n  display: flex;\r\n}\r\n#submit-guess {\r\n  background-color: #444554;\r\n  color: white;\r\n  font-weight: 600;\r\n  border: none;\r\n  width: 90px;\r\n  margin-left: 3px;\r\n  font-size: 1rem;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n/* player table */\r\n.table__content > *,\r\n.table__top {\r\n  display: grid;\r\n  grid-template: 1fr / 200px 100px 100px 100px 100px 100px;\r\n}\r\n.table__content {\r\n  margin-bottom: 40px;\r\n}\r\n.table__row > *:first-child {\r\n  font-weight: 600;\r\n}\r\n.table__top {\r\n  text-align: center;\r\n  border-bottom: 2px solid #e5d0cc;\r\n  margin-top: 10px;\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n  color: #444554;\r\n}\r\n\r\n.table__content .table__cell:not(.table__cell:last-child) {\r\n  border-right: 1px solid rgb(255, 255, 255);\r\n}\r\n.table__content .table__cell {\r\n  text-align: center;\r\n  align-self: center;\r\n  height: 100%;\r\n  display: grid;\r\n  place-items: center;\r\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(255, 255, 255, 1) -60%,\r\n    rgba(68, 69, 84, 0.1) 50%,\r\n    rgba(68, 69, 84, 0.1) 150%\r\n  );\r\n}\r\n.table__row > .table__cell:not(.table__cell:nth-child(2)) {\r\n  padding: 20px 10px;\r\n}\r\n.table__row > .table__cell:nth-child(2) {\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n.green {\r\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(255, 255, 255, 1) -60%,\r\n    rgba(77, 235, 73, 0.6619690112373074) 50%,\r\n    rgba(77, 235, 73, 0.6619690112373074) 100%\r\n  ) !important;\r\n}\r\n.arrow {\r\n  display: block;\r\n}\r\n/* modal */\r\n#sticky > * {\r\n  display: block;\r\n  margin: auto;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n#sticky button {\r\n  background-color: #444554e0;\r\n  border-radius: 8px;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  font-weight: 600;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n}\r\n#sticky button:hover {\r\n  background-color: #44455473;\r\n}\r\n\r\n@media (max-width: 785px) {\r\n  .table__row {\r\n    grid-template: 40px 1fr / 100px 100px 100px 100px 100px;\r\n  }\r\n  .table__top {\r\n    grid-template: 1fr / 100px 100px 100px 100px 100px;\r\n  }\r\n  .table__top > *:first-child {\r\n    display: none;\r\n  }\r\n  .table__row > *:first-child {\r\n    grid-area: 1 / 1 / 2 / -1;\r\n    justify-content: start;\r\n    align-content: center;\r\n    background: none;\r\n    background-color: rgba(255, 255, 255, 0.274);\r\n  }\r\n}\r\n@media (max-width: 510px) {\r\n  .table__row {\r\n    grid-template: 40px 1fr / 70px 70px 70px 70px 70px;\r\n  }\r\n  .table__top {\r\n    grid-template: 1fr / 70px 70px 70px 70px 70px;\r\n    font-size: 0.79rem;\r\n    font-weight: 600;\r\n    color: #444554;\r\n  }\r\n  .table__row > .table__cell:not(.table__cell:nth-child(2)) {\r\n    padding: 5px;\r\n  }\r\n  .table__row > .table__cell:nth-child(4) {\r\n    padding: 0px !important;\r\n    font-size: 0.9rem;\r\n  }\r\n}\r\n\r\n/* auto complete */\r\n\r\n.autocomplete {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n.autocomplete-items {\r\n  position: absolute;\r\n  border: 1px solid #d4d4d4;\r\n  border-bottom: none;\r\n  border-top: none;\r\n  z-index: 99;\r\n  top: 100%;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.autocomplete-items > *:not(*:nth-child(-n + 8)) {\r\n  display: none;\r\n}\r\n.autocomplete-items div {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #d4d4d4;\r\n}\r\n.autocomplete-items div:hover {\r\n  background-color: #e9e9e9;\r\n}\r\n.autocomplete-active {\r\n  /*when navigating through the items using the arrow keys:*/\r\n  background-color: #444554 !important;\r\n  color: #ffffff;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./src/players.csv":
/*!*************************!*\
  !*** ./src/players.csv ***!
  \*************************/
/***/ ((module) => {

module.exports = [{"Name":"Mason Mount"},{"Name":"Edouard Mendy"},{"Name":"Timo Werner"},{"Name":"Ben Chilwell"},{"Name":"Reece James"},{"Name":"César Azpilicueta"},{"Name":"N'Golo Kanté"},{"Name":"Jorginho"},{"Name":"Thiago Silva"},{"Name":"Kurt Zouma"},{"Name":"Mateo Kovačić"},{"Name":"Antonio Rüdiger"},{"Name":"Christian Pulisic"},{"Name":"Kai Havertz"},{"Name":"Andreas Christensen"},{"Name":"Hakim Ziyech"},{"Name":"Tammy Abraham"},{"Name":"Marcos Alonso"},{"Name":"Callum Hudson-Odoi"},{"Name":"Olivier Giroud"},{"Name":"Kepa Arrizabalaga"},{"Name":"Billy Gilmour"},{"Name":"Willy Caballero"},{"Name":"Ruben Loftus-Cheek"},{"Name":"Emerson Palmieri"},{"Name":"Fikayo Tomori"},{"Name":"Ross Barkley"},{"Name":"Ederson"},{"Name":"Rúben Dias"},{"Name":"Rodri"},{"Name":"Raheem Sterling"},{"Name":"João Cancelo"},{"Name":"Bernardo Silva"},{"Name":"İlkay Gündoğan"},{"Name":"Kevin De Bruyne"},{"Name":"Riyad Mahrez"},{"Name":"Gabriel Jesus"},{"Name":"Kyle Walker"},{"Name":"John Stones"},{"Name":"Phil Foden"},{"Name":"Oleksandr Zinchenko"},{"Name":"Ferrán Torres"},{"Name":"Aymeric Laporte"},{"Name":"Fernandinho"},{"Name":"Benjamin Mendy"},{"Name":"Nathan Aké"},{"Name":"Sergio Agüero"},{"Name":"Eric García"},{"Name":"Scott Carson"},{"Name":"Zack Steffen"},{"Name":"Liam Delap"},{"Name":"Bruno Fernandes"},{"Name":"Aaron Wan-Bissaka"},{"Name":"Harry Maguire"},{"Name":"Marcus Rashford"},{"Name":"Luke Shaw"},{"Name":"Victor Lindelöf"},{"Name":"Fred"},{"Name":"David de Gea"},{"Name":"Scott McTominay"},{"Name":"Paul Pogba"},{"Name":"Mason Greenwood"},{"Name":"Anthony Martial"},{"Name":"Edinson Cavani"},{"Name":"Dean Henderson"},{"Name":"Nemanja Matić"},{"Name":"Daniel James"},{"Name":"Eric Bailly"},{"Name":"Alex Telles"},{"Name":"Juan Mata"},{"Name":"Donny van de Beek"},{"Name":"Axel Tuanzebe"},{"Name":"Brandon Williams"},{"Name":"Amad Diallo"},{"Name":"Anthony Elanga"},{"Name":"Timothy Fosu-Mensah"},{"Name":"Shola Shoretire"},{"Name":"Odion Ighalo"},{"Name":"Hannibal Mejbri"},{"Name":"William Thomas Fish"},{"Name":"Andrew Robertson"},{"Name":"Mohamed Salah"},{"Name":"Trent Alexander-Arnold"},{"Name":"Georginio Wijnaldum"},{"Name":"Alisson"},{"Name":"Roberto Firmino"},{"Name":"Sadio Mané"},{"Name":"Fabinho"},{"Name":"Thiago Alcántara"},{"Name":"Jordan Henderson"},{"Name":"Nathaniel Phillips"},{"Name":"Curtis Jones"},{"Name":"Diogo Jota"},{"Name":"James Milner"},{"Name":"Ozan Kabak"},{"Name":"Joël Matip"},{"Name":"Rhys Williams"},{"Name":"Naby Keïta"},{"Name":"Joe Gomez"},{"Name":"Xherdan Shaqiri"},{"Name":"Virgil van Dijk"},{"Name":"Adrián"},{"Name":"Neco Williams"},{"Name":"Takumi Minamino"},{"Name":"Alex Oxlade-Chamberlain"},{"Name":"Divock Origi"},{"Name":"Caoimhín Kelleher"},{"Name":"Kostas Tsimikas"},{"Name":"Kasper Schmeichel"},{"Name":"Youri Tielemans"},{"Name":"Jamie Vardy"},{"Name":"Jonny Evans"},{"Name":"Timothy Castagne"},{"Name":"Wesley Fofana"},{"Name":"Wilfred Ndidi"},{"Name":"James Maddison"},{"Name":"James Justin"},{"Name":"Harvey Barnes"},{"Name":"Çağlar Söyüncü"},{"Name":"Marc Albrighton"},{"Name":"Kelechi Iheanacho"},{"Name":"Nampalys Mendy"},{"Name":"Ayoze Pérez"},{"Name":"Luke Thomas"},{"Name":"Ricardo Pereira"},{"Name":"Dennis Praet"},{"Name":"Daniel Amartey"},{"Name":"Christian Fuchs"},{"Name":"Hamza Choudhury"},{"Name":"Cengiz Ünder"},{"Name":"Sidnei Tavares"},{"Name":"Islam Slimani"},{"Name":"Demarai Gray"},{"Name":"Wes Morgan"},{"Name":"Khanya Leshabela"},{"Name":"Tomáš Souček"},{"Name":"Aaron Cresswell"},{"Name":"Łukasz Fabiański"},{"Name":"Vladimír Coufal"},{"Name":"Declan Rice"},{"Name":"Pablo Fornals"},{"Name":"Jarrod Bowen"},{"Name":"Angelo Ogbonna"},{"Name":"Michail Antonio"},{"Name":"Craig Dawson"},{"Name":"Jesse Lingard"},{"Name":"Issa Diop"},{"Name":"Saïd Benrahma"},{"Name":"Fabián Balbuena"},{"Name":"Arthur Masuaku"},{"Name":"Sébastien Haller"},{"Name":"Mark Noble"},{"Name":"Ryan Fredericks"},{"Name":"Manuel Lanzini"},{"Name":"Ben Johnson"},{"Name":"Darren Randolph"},{"Name":"Andriy Yarmolenko"},{"Name":"Robert Snodgrass"},{"Name":"Felipe Anderson"},{"Name":"Pierre Højbjerg"},{"Name":"Hugo Lloris"},{"Name":"Son Heung-min"},{"Name":"Harry Kane"},{"Name":"Eric Dier"},{"Name":"Tanguy Ndombele"},{"Name":"Sergio Reguilón"},{"Name":"Toby Alderweireld"},{"Name":"Serge Aurier"},{"Name":"Davinson Sánchez"},{"Name":"Moussa Sissoko"},{"Name":"Lucas Moura"},{"Name":"Ben Davies"},{"Name":"Matt Doherty"},{"Name":"Steven Bergwijn"},{"Name":"Giovani Lo Celso"},{"Name":"Gareth Bale"},{"Name":"Harry Winks"},{"Name":"Joe Rodon"},{"Name":"Dele Alli"},{"Name":"Japhet Tanganga"},{"Name":"Érik Lamela"},{"Name":"Carlos Vinícius"},{"Name":"Dane Scarlett"},{"Name":"Bernd Leno"},{"Name":"Bukayo Saka"},{"Name":"Granit Xhaka"},{"Name":"Rob Holding"},{"Name":"Pierre-Emerick Aubameyang"},{"Name":"Kieran Tierney"},{"Name":"Héctor Bellerín"},{"Name":"Gabriel Dos Santos"},{"Name":"Alexandre Lacazette"},{"Name":"Thomas Partey"},{"Name":"Emile Smith-Rowe"},{"Name":"Dani Ceballos"},{"Name":"Mohamed Elneny"},{"Name":"David Luiz"},{"Name":"Nicolas Pépé"},{"Name":"Willian"},{"Name":"Pablo Marí"},{"Name":"Martin Ødegaard"},{"Name":"Calum Chambers"},{"Name":"Cédric Soares"},{"Name":"Martinelli"},{"Name":"Ainsley Maitland-Niles"},{"Name":"Eddie Nketiah"},{"Name":"Mathew Ryan"},{"Name":"Joe Willock"},{"Name":"Sead Kolašinac"},{"Name":"Reiss Nelson"},{"Name":"Shkodran Mustafi"},{"Name":"Rúnar Alex Rúnarsson"},{"Name":"Stuart Dallas"},{"Name":"Luke Ayling"},{"Name":"Patrick Bamford"},{"Name":"Illan Meslier"},{"Name":"Jack Harrison"},{"Name":"Ezgjan Alioski"},{"Name":"Kalvin Phillips"},{"Name":"Mateusz Klich"},{"Name":"Raphael Dias Belloli"},{"Name":"Liam Cooper"},{"Name":"Pascal Struijk"},{"Name":"Tyler Roberts"},{"Name":"Rodrigo"},{"Name":"Diego Llorente"},{"Name":"Hélder Costa"},{"Name":"Robin Koch"},{"Name":"Jamie Shackleton"},{"Name":"Pablo Hernández"},{"Name":"Kiko Casilla"},{"Name":"Gaetano Berardi"},{"Name":"Ian Carlo Poveda"},{"Name":"Niall Huggins"},{"Name":"Leif Davis"},{"Name":"Michael Keane"},{"Name":"Richarlison"},{"Name":"Dominic Calvert-Lewin"},{"Name":"Jordan Pickford"},{"Name":"Lucas Digne"},{"Name":"Ben Godfrey"},{"Name":"Abdoulaye Doucouré"},{"Name":"Mason Holgate"},{"Name":"Gylfi Sigurðsson"},{"Name":"Allan"},{"Name":"Yerry Mina"},{"Name":"James Rodríguez"},{"Name":"Séamus Coleman"},{"Name":"André Gomes"},{"Name":"Alex Iwobi"},{"Name":"Tom Davies"},{"Name":"Robin Olsen"},{"Name":"Bernard"},{"Name":"Fabian Delph"},{"Name":"Anthony Gordon"},{"Name":"Niels Nkounkou"},{"Name":"Jonjoe Kenny"},{"Name":"Joshua King"},{"Name":"Cenk Tosun"},{"Name":"João Virgínia"},{"Name":"Moise Kean"},{"Name":"Theo Walcott"},{"Name":"Jean-Philippe Gbamin"},{"Name":"Nathan Broadhead"},{"Name":"Emiliano Martínez"},{"Name":"Matt Targett"},{"Name":"John McGinn"},{"Name":"Ollie Watkins"},{"Name":"Tyrone Mings"},{"Name":"Ezri Konsa"},{"Name":"Douglas Luiz"},{"Name":"Bertrand Traoré"},{"Name":"Matty Cash"},{"Name":"Jack Grealish"},{"Name":"Ross Barkley"},{"Name":"Anwar El Ghazi"},{"Name":"Trézéguet"},{"Name":"Marvelous Nakamba"},{"Name":"Ahmed Elmohamady"},{"Name":"Kortney Hause"},{"Name":"Jacob Ramsey"},{"Name":"Morgan Sanson"},{"Name":"Conor Hourihane"},{"Name":"Keinan Davis"},{"Name":"Carney Chukwuemeka"},{"Name":"Wesley Moraes"},{"Name":"Neil Taylor"},{"Name":"Jaden Philogene Bidace"},{"Name":"Jonjo Shelvey"},{"Name":"Miguel Almirón"},{"Name":"Karl Darlow"},{"Name":"Federico Fernández"},{"Name":"Callum Wilson"},{"Name":"Joelinton"},{"Name":"Isaac Hayden"},{"Name":"Ciaran Clark"},{"Name":"Jamal Lewis"},{"Name":"Jamaal Lascelles"},{"Name":"Allan Saint-Maximin"},{"Name":"Jacob Murphy"},{"Name":"Jeff Hendrick"},{"Name":"Sean Longstaff"},{"Name":"Matt Ritchie"},{"Name":"Emil Krafth"},{"Name":"Paul Dummett"},{"Name":"Fabian Schär"},{"Name":"Martin Dúbravka"},{"Name":"Joe Willock"},{"Name":"Javier Manquillo"},{"Name":"Ryan Fraser"},{"Name":"DeAndre Yedlin"},{"Name":"Dwight Gayle"},{"Name":"Andy Carroll"},{"Name":"Matthew Longstaff"},{"Name":"Elliot Anderson"},{"Name":"Rui Patrício"},{"Name":"Conor Coady"},{"Name":"Nélson Semedo"},{"Name":"Rúben Neves"},{"Name":"Pedro Neto"},{"Name":"Adama Traoré"},{"Name":"João Moutinho"},{"Name":"Leander Dendoncker"},{"Name":"Romain Saïss"},{"Name":"Daniel Podence"},{"Name":"Willy Boly"},{"Name":"Rayan Aït Nouri"},{"Name":"Max Kilman"},{"Name":"Willian José"},{"Name":"Fábio Silva"},{"Name":"Raúl Jiménez"},{"Name":"Fernando Marçal"},{"Name":"Jonny Castro"},{"Name":"Ki-Jana Hoever"},{"Name":"Vitinha"},{"Name":"Morgan Gibbs-White"},{"Name":"Owen Otasowie"},{"Name":"Rúben Vinagre"},{"Name":"John Ruddy"},{"Name":"Patrick Cutrone"},{"Name":"Oskar Buur"},{"Name":"Theo Corbeanu"},{"Name":"Vicente Guaita"},{"Name":"Cheikhou Kouyaté"},{"Name":"Wilfried Zaha"},{"Name":"Eberechi Eze"},{"Name":"Luka Milivojević"},{"Name":"Andros Townsend"},{"Name":"Joel Ward"},{"Name":"Jordan Ayew"},{"Name":"Christian Benteke"},{"Name":"Gary Cahill"},{"Name":"Patrick van Aanholt"},{"Name":"Jaïro Riedewald"},{"Name":"Tyrick Mitchell"},{"Name":"James McArthur"},{"Name":"Jeffrey Schlupp"},{"Name":"Scott Dann"},{"Name":"Nathaniel Clyne"},{"Name":"James McCarthy"},{"Name":"Michy Batshuayi"},{"Name":"James Tomkins"},{"Name":"Mamadou Sakho"},{"Name":"Jean-Philippe Mateta"},{"Name":"Jack Butland"},{"Name":"Martin Kelly"},{"Name":"James Ward-Prowse"},{"Name":"Jan Bednarek"},{"Name":"Stuart Armstrong"},{"Name":"Alex McCarthy"},{"Name":"Che Adams"},{"Name":"Kyle Walker-Peters"},{"Name":"Ryan Bertrand"},{"Name":"Jannik Vestergaard"},{"Name":"Danny Ings"},{"Name":"Oriol Romeu"},{"Name":"Theo Walcott"},{"Name":"Nathan Redmond"},{"Name":"Jack Stephens"},{"Name":"Moussa Djenepo"},{"Name":"Ibrahima Diallo"},{"Name":"Takumi Minamino"},{"Name":"Mohammed Salisu"},{"Name":"Fraser Forster"},{"Name":"Nathan Tella"},{"Name":"William Smallbone"},{"Name":"Shane Long"},{"Name":"Yan Valery"},{"Name":"Kayne Ramsey"},{"Name":"Jake Vokins"},{"Name":"Alexandre Jankewitz"},{"Name":"Dan Nlundulu"},{"Name":"Michael Obafemi"},{"Name":"Caleb Watts"},{"Name":"Allan Tchaptchet"},{"Name":"Ben White"},{"Name":"Yves Bissouma"},{"Name":"Lewis Dunk"},{"Name":"Leandro Trossard"},{"Name":"Adam Webster"},{"Name":"Neal Maupay"},{"Name":"Pascal Groß"},{"Name":"Robert Sánchez"},{"Name":"Joël Veltman"},{"Name":"Dan Burn"},{"Name":"Solly March"},{"Name":"Danny Welbeck"},{"Name":"Adam Lallana"},{"Name":"Alexis Mac Allister"},{"Name":"Mathew Ryan"},{"Name":"Tariq Lamptey"},{"Name":"Steven Alzate"},{"Name":"Aaron Connolly"},{"Name":"Jakub Moder"},{"Name":"Alireza Jahanbakhsh"},{"Name":"Davy Pröpper"},{"Name":"Bernardo"},{"Name":"Percy Tau"},{"Name":"Andi Zeqiri"},{"Name":"José Izquierdo"},{"Name":"Reda Khadra"},{"Name":"Jayson Molumby"},{"Name":"Ashley Westwood"},{"Name":"James Tarkowski"},{"Name":"Dwight McNeil"},{"Name":"Matthew Lowton"},{"Name":"Nick Pope"},{"Name":"Josh Brownhill"},{"Name":"Chris Wood"},{"Name":"Ben Mee"},{"Name":"Charlie Taylor"},{"Name":"Jóhann Berg Guðmundsson"},{"Name":"Matěj Vydra"},{"Name":"Jack Cork"},{"Name":"Ashley Barnes"},{"Name":"Erik Pieters"},{"Name":"Jay Rodriguez"},{"Name":"Robbie Brady"},{"Name":"Kevin Long"},{"Name":"Bailey Peacock-Farrell"},{"Name":"Phil Bardsley"},{"Name":"Jimmy Dunne"},{"Name":"Dale Stephens"},{"Name":"Josh Benson"},{"Name":"Will Norris"},{"Name":"Joel Mumbongo"},{"Name":"Lewis Richardson"},{"Name":"Alphonse Areola"},{"Name":"Tosin Adarabioyo"},{"Name":"Ademola Lookman"},{"Name":"Ola Aina"},{"Name":"Joachim Andersen"},{"Name":"Andre-Frank Zambo Anguissa"},{"Name":"Bobby Reid"},{"Name":"Ivan Cavaleiro"},{"Name":"Harrison Reed"},{"Name":"Antonee Robinson"},{"Name":"Ruben Loftus-Cheek"},{"Name":"Mario Lemina"},{"Name":"Kenny Tete"},{"Name":"Aleksandar Mitrović"},{"Name":"Josh Maja"},{"Name":"Tom Cairney"},{"Name":"Joe Bryan"},{"Name":"Tim Ream"},{"Name":"Josh Onomah"},{"Name":"Denis Odoi"},{"Name":"Michael Hector"},{"Name":"Fabio Carvalho"},{"Name":"Aboubakar Kamara"},{"Name":"Marek Rodák"},{"Name":"Maxime Le Marchand"},{"Name":"Neeskens Kebano"},{"Name":"Terence Kongolo"},{"Name":"Tyrese Francois"},{"Name":"Sam Johnstone"},{"Name":"Darnell Furlong"},{"Name":"Semi Ajayi"},{"Name":"Matheus Pereira"},{"Name":"Kyle Bartley"},{"Name":"Conor Gallagher"},{"Name":"Conor Townsend"},{"Name":"Dara O'Shea"},{"Name":"Matt Phillips"},{"Name":"Callum Robinson"},{"Name":"Romaine Sawyers"},{"Name":"Okay Yokuşlu"},{"Name":"Jake Livermore"},{"Name":"Grady Diangana"},{"Name":"Ainsley Maitland-Niles"},{"Name":"Mbaye Diagne"},{"Name":"Karlan Grant"},{"Name":"Kieran Gibbs"},{"Name":"Branislav Ivanović"},{"Name":"Robert Snodgrass"},{"Name":"Filip Krovinović"},{"Name":"Lee Peltier"},{"Name":"Hal Robson-Kanu"},{"Name":"Kamil Grosicki"},{"Name":"Kyle Edwards"},{"Name":"David Button"},{"Name":"Ahmed Hegazi"},{"Name":"Charlie Austin"},{"Name":"Sam Field"},{"Name":"Rekeem Harper"},{"Name":"Aaron Ramsdale"},{"Name":"George Baldock"},{"Name":"Chris Basham"},{"Name":"Enda Stevens"},{"Name":"John Egan"},{"Name":"John Fleck"},{"Name":"David McGoldrick"},{"Name":"Oliver Norwood"},{"Name":"Ethan Ampadu"},{"Name":"John Lundstram"},{"Name":"Ben Osborn"},{"Name":"Oliver Burke"},{"Name":"Sander Berge"},{"Name":"Oliver McBurnie"},{"Name":"Rhian Brewster"},{"Name":"Jayden Bogle"},{"Name":"Kean Bryan"},{"Name":"Jack Robinson"},{"Name":"Billy Sharp"},{"Name":"Max Lowe"},{"Name":"Phil Jagielka"},{"Name":"Daniel Jebbison"},{"Name":"Lys Mousset"},{"Name":"Jack O'Connell"},{"Name":"Iliman Ndiaye"},{"Name":"Antwoine Hackford"},{"Name":"Femi Seriki"},{"Name":"Cristiano Ronaldo"},{"Name":"Toney"}]

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/autoComplete.js":
/*!*****************************!*\
  !*** ./src/autoComplete.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "autoComplete": () => (/* binding */ autoComplete)
/* harmony export */ });
function autoComplete(inp, arr) {
  /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
  let currentFocus;
  // execute a function when someone writes in the text field:
  inp.addEventListener("input", function (e) {
    let a,
      b,
      i,
      val = this.value;
    // close any already open lists of autocompleted values
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    // create a DIV element that will contain the items (values):
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    // append the DIV element as a child of the autocomplete container:
    this.parentNode.appendChild(a);
    /// for each item in the array...

    for (i = 0; i < arr.length; i++) {
      // check if the item contains the same letters as the text field value: || normalized to remove accents/diacritics
      if (
        arr[i]
          .toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(val.toUpperCase())
      ) {
        // create a DIV element for each matching element:
        b = document.createElement("DIV");
        b.innerHTML = arr[i].slice(0, val.length);
        b.innerHTML += arr[i].slice(val.length);
        // insert a input field that will hold the current array item's value:
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

        // execute a function when someone clicks on the item value (DIV element):
        b.addEventListener("click", function (e) {
          // insert the value for the autocomplete text field:
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  // execute a function presses a key on the keyboard:
  inp.addEventListener("keydown", function (e) {
    let x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      // and and make the current item more visible:
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      // and and make the current item more visible:
      addActive(x);
    } else if (e.keyCode == 13) {
      // If the ENTER key is pressed, prevent the form from being submitted,
      e.preventDefault();
      if (currentFocus > -1) {
        // and simulate a click on the "active" item:
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    // a function to classify an item as "active":
    if (!x) return false;
    // start by removing the "active" class on all items:
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    // add class "autocomplete-active":
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    // a function to remove the "active" class from all autocomplete items:
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
    let x = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  // execute a function when someone clicks in the document:
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}



/***/ }),

/***/ "./src/displayGuess.js":
/*!*****************************!*\
  !*** ./src/displayGuess.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayGuess": () => (/* binding */ displayGuess)
/* harmony export */ });
/* harmony import */ var _gameOver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameOver.js */ "./src/gameOver.js");


/**
 * Compare user guess to random player.
 * @param {Object} rndPlayer - The Player instance of the player chosen at random on game initialization.
 * @param {Object} userGuess - The Player instance of the user guess.
 */
function displayGuess(rndPlayer, userGuess) {
  // create DOM element for user guess
  let tableContainer = $(".table__content");
  let tableRow = $("<div>").addClass("table__row");
  let name = $("<div>").append(userGuess.name).addClass("table__cell");
  let team = $("<img>", {
    src: userGuess.teamImgSrc,
    width: "47px",
    alt: `${userGuess.team} badge logo`,
  });
  let teamContainer = $("<div>", { class: "table__cell" }).append(team);
  let nationality = $("<div>")
    .append(userGuess.nationality)
    .addClass("table__cell");
  let position = $("<div>").append(userGuess.position).addClass("table__cell");
  let height = $("<div>").append(userGuess.getFeet()).addClass("table__cell");
  let age = $("<div>").append(userGuess.age).addClass("table__cell");

  // check team
  if (rndPlayer.team == userGuess.team) {
    teamContainer.addClass("green");
  }
  // check nationality
  if (rndPlayer.nationality == userGuess.nationality) {
    nationality.addClass("green");
  }
  //check position
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
  tableContainer.append(tableRow.hide().fadeIn(1200));
}




/***/ }),

/***/ "./src/gameOver.js":
/*!*************************!*\
  !*** ./src/gameOver.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameOver": () => (/* binding */ gameOver)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function gameOver(isWin) {
  if (isWin) {
    $("#search-field").prop("disabled", true); // disable input

    // create winner modal elements
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
    // open non-closable modal
    $("#sticky").modal({
      escapeClose: false,
      clickClose: false,
      showClose: false,
    });
  } else {
    $("#search-field").prop("disabled", true); // disable input
    // create loser modal elements
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

    // open non-closable modal
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "options": () => (/* binding */ options),
/* harmony export */   "rndPlayer": () => (/* binding */ rndPlayer),
/* harmony export */   "userGuess": () => (/* binding */ userGuess)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _displayGuess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayGuess */ "./src/displayGuess.js");
/* harmony import */ var _gameOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameOver */ "./src/gameOver.js");
/* harmony import */ var _searchPlayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchPlayer.js */ "./src/searchPlayer.js");
/* harmony import */ var _players_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./players.csv */ "./src/players.csv");
/* harmony import */ var _players_csv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_players_csv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _autoComplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autoComplete */ "./src/autoComplete.js");







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
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "bb2bcd95f3mshea301c28c7ab66ap16ff4fjsneee023426a50",
  },
};

let rndPlayer, userGuess;
(async function initGame() {
  let round = 7;

  // random number generator
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  try {
    const res = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2021",
      options
    );

    let data = await res.json();
    let arrLength = await data.response.length;
    const rndInt = randomIntFromInterval(0, arrLength - 1);

    // fetch random player from top scorers pool -- idea is to retrieve random well known player
    data = await data.response[rndInt];

    // create object of random player
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

    // FOR DEVELOPMENT ONLY
    // rndPlayer = new Player(
    //   "M. Rashford",
    //   "chelsea",
    //   "mexico",
    //   "Attacker",
    //   "127 cm",
    //   "24",
    //   "https://media.api-sports.io/football/players/3247.png",
    //   "https://media.api-sports.io/football/teams/52.png"
    // );
    // userGuess = new Player(
    //   "W. Zaha",
    //   "Crystal Palace",
    //   "Cote de. Ivory",
    //   "Attacker",
    //   "180 cm",
    //   "30",
    //   "https://media.api-sports.io/football/players/3247.png",
    //   "https://media.api-sports.io/football/teams/52.png"
    // );

    // on click of submit button get user guess and validate
    $("#submit-guess").click(async function (event) {
      // clear error
      $(".err").text("");

      // get user guess object from search query
      userGuess = await (0,_searchPlayer_js__WEBPACK_IMPORTED_MODULE_3__.getUserGuess)();

      // if player query found and is not last round
      if (userGuess !== undefined && round > 1) {
        round--;
        $(".attempts").text("");
        $("#search-field").val("");
        $(".attempts").text(round);
        (0,_displayGuess__WEBPACK_IMPORTED_MODULE_1__.displayGuess)(rndPlayer, userGuess);

        // user guesses correctly
        if (rndPlayer.name == userGuess.name) {
          (0,_gameOver__WEBPACK_IMPORTED_MODULE_2__.gameOver)(true);
        }

        // if player not found in search display error
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
    });
  } catch (err) {
    console.log(err);
  }

  // create array of players from players.csv for auto complete
  let playerArray = [];
  _players_csv__WEBPACK_IMPORTED_MODULE_4__.forEach((player) => {
    playerArray.push(player.Name);
  });
  // initialize autocomplete
  (0,_autoComplete__WEBPACK_IMPORTED_MODULE_5__.autoComplete)(document.getElementById("search-field"), playerArray);
})();




/***/ }),

/***/ "./src/searchPlayer.js":
/*!*****************************!*\
  !*** ./src/searchPlayer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserGuess": () => (/* binding */ getUserGuess)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


async function getUserGuess() {
  try {
    let searchInput = $("#search-field").val();
    // normalized to remove accents/diacritics
    searchInput = searchInput
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    searchInput = encodeURI(searchInput);

    let res = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/players?league=39&search=${searchInput}`,
      _index_js__WEBPACK_IMPORTED_MODULE_0__.options
    );
    let data = await res.json();
    data = data.response[0];
    // create user guess object
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wYjRkOWY1YjFmNDg0YTM5MGQzZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLGtCQUFrQjtBQUNySSxpSUFBaUksSUFBSSxrQkFBa0I7QUFDdko7QUFDQSxzRUFBc0UsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsMENBQTBDLEtBQUssY0FBYyxvQkFBb0Isb0JBQW9CLHlDQUF5Qyw4QkFBOEIseUJBQXlCLGtDQUFrQyxLQUFLLHVCQUF1QixnQ0FBZ0Msa0JBQWtCLG1CQUFtQixvQkFBb0IsNEJBQTRCLG1CQUFtQiwyQ0FBMkMsS0FBSyxZQUFZLHdCQUF3QixtQkFBbUIseUJBQXlCLEtBQUssY0FBYyx3Q0FBd0MsS0FBSyw0QkFBNEIsb0JBQW9CLDBCQUEwQix1QkFBdUIsS0FBSyxhQUFhLDBCQUEwQix5QkFBeUIsS0FBSyxhQUFhLDBCQUEwQix5QkFBeUIsS0FBSyxnQkFBZ0IseUJBQXlCLG1CQUFtQixvQkFBb0IsdUJBQXVCLHNCQUFzQixLQUFLLFVBQVUsOEJBQThCLHdCQUF3Qix5QkFBeUIsS0FBSyxpQkFBaUIsb0JBQW9CLEtBQUssbUJBQW1CLGdDQUFnQyxtQkFBbUIsdUJBQXVCLG1CQUFtQixrQkFBa0IsdUJBQXVCLHNCQUFzQix5QkFBeUIsc0JBQXNCLEtBQUssK0RBQStELG9CQUFvQiwrREFBK0QsS0FBSyxxQkFBcUIsMEJBQTBCLEtBQUssaUNBQWlDLHVCQUF1QixLQUFLLGlCQUFpQix5QkFBeUIsdUNBQXVDLHVCQUF1Qix3QkFBd0IsdUJBQXVCLHFCQUFxQixLQUFLLG1FQUFtRSxpREFBaUQsS0FBSyxrQ0FBa0MseUJBQXlCLHlCQUF5QixtQkFBbUIsb0JBQW9CLDBCQUEwQixpS0FBaUssS0FBSywrREFBK0QseUJBQXlCLEtBQUssNkNBQTZDLG9CQUFvQiw0QkFBNEIsS0FBSyxZQUFZLDRNQUE0TSxLQUFLLFlBQVkscUJBQXFCLEtBQUssZ0NBQWdDLHFCQUFxQixtQkFBbUIseUJBQXlCLG9CQUFvQixLQUFLLG9CQUFvQixrQ0FBa0MseUJBQXlCLG9CQUFvQixtQkFBbUIsbUJBQW1CLHVCQUF1Qix3QkFBd0Isc0JBQXNCLEtBQUssMEJBQTBCLGtDQUFrQyxLQUFLLG1DQUFtQyxtQkFBbUIsZ0VBQWdFLE9BQU8sbUJBQW1CLDJEQUEyRCxPQUFPLG1DQUFtQyxzQkFBc0IsT0FBTyxtQ0FBbUMsa0NBQWtDLCtCQUErQiw4QkFBOEIseUJBQXlCLHFEQUFxRCxPQUFPLEtBQUssK0JBQStCLG1CQUFtQiwyREFBMkQsT0FBTyxtQkFBbUIsc0RBQXNELDJCQUEyQix5QkFBeUIsdUJBQXVCLE9BQU8saUVBQWlFLHFCQUFxQixPQUFPLCtDQUErQyxnQ0FBZ0MsMEJBQTBCLE9BQU8sS0FBSyxrREFBa0QseUJBQXlCLDRCQUE0QixLQUFLLHlCQUF5Qix5QkFBeUIsZ0NBQWdDLDBCQUEwQix1QkFBdUIsa0JBQWtCLGdCQUFnQixjQUFjLGVBQWUsS0FBSyxzREFBc0Qsb0JBQW9CLEtBQUssNkJBQTZCLG9CQUFvQixzQkFBc0IsNkJBQTZCLHVDQUF1QyxLQUFLLG1DQUFtQyxnQ0FBZ0MsS0FBSywwQkFBMEIsNEdBQTRHLHFCQUFxQixLQUFLLFdBQVcsa0ZBQWtGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sWUFBWSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxVQUFVLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssU0FBUyxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsaUdBQWlHLElBQUksb0JBQW9CLDZGQUE2RixJQUFJLG9CQUFvQixvQ0FBb0MsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsMENBQTBDLEtBQUssY0FBYyxvQkFBb0Isb0JBQW9CLHlDQUF5Qyw4QkFBOEIseUJBQXlCLGtDQUFrQyxLQUFLLHVCQUF1QixnQ0FBZ0Msa0JBQWtCLG1CQUFtQixvQkFBb0IsNEJBQTRCLG1CQUFtQiwyQ0FBMkMsS0FBSyxZQUFZLHdCQUF3QixtQkFBbUIseUJBQXlCLEtBQUssY0FBYyx3Q0FBd0MsS0FBSyw0QkFBNEIsb0JBQW9CLDBCQUEwQix1QkFBdUIsS0FBSyxhQUFhLDBCQUEwQix5QkFBeUIsS0FBSyxhQUFhLDBCQUEwQix5QkFBeUIsS0FBSyxnQkFBZ0IseUJBQXlCLG1CQUFtQixvQkFBb0IsdUJBQXVCLHNCQUFzQixLQUFLLFVBQVUsOEJBQThCLHdCQUF3Qix5QkFBeUIsS0FBSyxpQkFBaUIsb0JBQW9CLEtBQUssbUJBQW1CLGdDQUFnQyxtQkFBbUIsdUJBQXVCLG1CQUFtQixrQkFBa0IsdUJBQXVCLHNCQUFzQix5QkFBeUIsc0JBQXNCLEtBQUssK0RBQStELG9CQUFvQiwrREFBK0QsS0FBSyxxQkFBcUIsMEJBQTBCLEtBQUssaUNBQWlDLHVCQUF1QixLQUFLLGlCQUFpQix5QkFBeUIsdUNBQXVDLHVCQUF1Qix3QkFBd0IsdUJBQXVCLHFCQUFxQixLQUFLLG1FQUFtRSxpREFBaUQsS0FBSyxrQ0FBa0MseUJBQXlCLHlCQUF5QixtQkFBbUIsb0JBQW9CLDBCQUEwQixpS0FBaUssS0FBSywrREFBK0QseUJBQXlCLEtBQUssNkNBQTZDLG9CQUFvQiw0QkFBNEIsS0FBSyxZQUFZLDRNQUE0TSxLQUFLLFlBQVkscUJBQXFCLEtBQUssZ0NBQWdDLHFCQUFxQixtQkFBbUIseUJBQXlCLG9CQUFvQixLQUFLLG9CQUFvQixrQ0FBa0MseUJBQXlCLG9CQUFvQixtQkFBbUIsbUJBQW1CLHVCQUF1Qix3QkFBd0Isc0JBQXNCLEtBQUssMEJBQTBCLGtDQUFrQyxLQUFLLG1DQUFtQyxtQkFBbUIsZ0VBQWdFLE9BQU8sbUJBQW1CLDJEQUEyRCxPQUFPLG1DQUFtQyxzQkFBc0IsT0FBTyxtQ0FBbUMsa0NBQWtDLCtCQUErQiw4QkFBOEIseUJBQXlCLHFEQUFxRCxPQUFPLEtBQUssK0JBQStCLG1CQUFtQiwyREFBMkQsT0FBTyxtQkFBbUIsc0RBQXNELDJCQUEyQix5QkFBeUIsdUJBQXVCLE9BQU8saUVBQWlFLHFCQUFxQixPQUFPLCtDQUErQyxnQ0FBZ0MsMEJBQTBCLE9BQU8sS0FBSyxrREFBa0QseUJBQXlCLDRCQUE0QixLQUFLLHlCQUF5Qix5QkFBeUIsZ0NBQWdDLDBCQUEwQix1QkFBdUIsa0JBQWtCLGdCQUFnQixjQUFjLGVBQWUsS0FBSyxzREFBc0Qsb0JBQW9CLEtBQUssNkJBQTZCLG9CQUFvQixzQkFBc0IsNkJBQTZCLHVDQUF1QyxLQUFLLG1DQUFtQyxnQ0FBZ0MsS0FBSywwQkFBMEIsNEdBQTRHLHFCQUFxQixLQUFLLHVCQUF1QjtBQUNydFg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDVDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckJBLG1CQUFtQixxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSwyQkFBMkIsRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBRSwyQkFBMkIsRUFBRSxxQkFBcUIsRUFBRSw2QkFBNkIsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSw0QkFBNEIsRUFBRSx3QkFBd0IsRUFBRSwyQkFBMkIsRUFBRSx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBRSw0QkFBNEIsRUFBRSwwQkFBMEIsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsNkJBQTZCLEVBQUUsdUJBQXVCLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCLEVBQUUsd0JBQXdCLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUseUJBQXlCLEVBQUUsMkJBQTJCLEVBQUUsdUJBQXVCLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUUseUJBQXlCLEVBQUUsY0FBYyxFQUFFLHNCQUFzQixFQUFFLHlCQUF5QixFQUFFLG9CQUFvQixFQUFFLHlCQUF5QixFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixFQUFFLHdCQUF3QixFQUFFLHVCQUF1QixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLDJCQUEyQixFQUFFLHVCQUF1QixFQUFFLDBCQUEwQixFQUFFLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLDZCQUE2QixFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFLHlCQUF5QixFQUFFLDZCQUE2QixFQUFFLDBCQUEwQixFQUFFLHVCQUF1QixFQUFFLGdDQUFnQyxFQUFFLDZCQUE2QixFQUFFLGlCQUFpQixFQUFFLHlCQUF5QixFQUFFLG9CQUFvQixFQUFFLGlCQUFpQixFQUFFLDBCQUEwQixFQUFFLDBCQUEwQixFQUFFLDRCQUE0QixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLHlCQUF5QixFQUFFLHlCQUF5QixFQUFFLGdCQUFnQixFQUFFLHVCQUF1QixFQUFFLHlCQUF5QixFQUFFLGlDQUFpQyxFQUFFLHNCQUFzQixFQUFFLDJCQUEyQixFQUFFLHlCQUF5QixFQUFFLDJCQUEyQixFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLDBCQUEwQixFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLDJCQUEyQixFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFLHdCQUF3QixFQUFFLHVCQUF1QixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLHNCQUFzQixFQUFFLHlCQUF5QixFQUFFLDBCQUEwQixFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLHNCQUFzQixFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixFQUFFLDBCQUEwQixFQUFFLG9CQUFvQixFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLDJCQUEyQixFQUFFLDBCQUEwQixFQUFFLHlCQUF5QixFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLHlCQUF5QixFQUFFLHlCQUF5QixFQUFFLDJCQUEyQixFQUFFLHNCQUFzQixFQUFFLDBCQUEwQixFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFLHlCQUF5QixFQUFFLDBCQUEwQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLG1DQUFtQyxFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLDRCQUE0QixFQUFFLDZCQUE2QixFQUFFLHVCQUF1QixFQUFFLDBCQUEwQixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLGdDQUFnQyxFQUFFLHVCQUF1QixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLHNCQUFzQixFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLHVCQUF1QixFQUFFLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLHVCQUF1QixFQUFFLDhCQUE4QixFQUFFLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLHdCQUF3QixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFLHlCQUF5QixFQUFFLDBCQUEwQixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLHFCQUFxQixFQUFFLCtCQUErQixFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLDRCQUE0QixFQUFFLHVCQUF1QixFQUFFLDBCQUEwQixFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSw4QkFBOEIsRUFBRSwwQkFBMEIsRUFBRSwyQkFBMkIsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRSwyQkFBMkIsRUFBRSwwQkFBMEIsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSw0QkFBNEIsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSxnQ0FBZ0MsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSw0QkFBNEIsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSw2QkFBNkIsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRSxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSwyQkFBMkIsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSw0QkFBNEIsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSxpQkFBaUIsRUFBRSw0QkFBNEIsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSwwQkFBMEIsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSwyQkFBMkIsRUFBRSxxQkFBcUIsRUFBRSw2QkFBNkIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSw4QkFBOEIsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSwyQkFBMkIsRUFBRSxzQkFBc0IsRUFBRSwwQkFBMEIsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSw0QkFBNEIsRUFBRSx1QkFBdUIsRUFBRSw0QkFBNEIsRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSwyQkFBMkIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSw2QkFBNkIsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRSxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSwwQkFBMEIsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSw2QkFBNkIsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSw2QkFBNkIsRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRSx3QkFBd0IsRUFBRSxvQkFBb0IsRUFBRSxpQkFBaUIsRUFBRSx3QkFBd0IsRUFBRSxpQ0FBaUMsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxnQ0FBZ0MsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBRSwwQkFBMEIsRUFBRSxvQ0FBb0MsRUFBRSxvQkFBb0IsRUFBRSx3QkFBd0IsRUFBRSx1QkFBdUIsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSw2QkFBNkIsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSwwQkFBMEIsRUFBRSxxQkFBcUIsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSxnQ0FBZ0MsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSw0QkFBNEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSwwQkFBMEIsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRSx3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VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcGxheWVycy5jc3YiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hdXRvQ29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheUd1ZXNzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dhbWVPdmVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NlYXJjaFBsYXllci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjpiZWZvcmUsXFxyXFxuKjphZnRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDYwcHggMWZyIDQwcHggLyAxZnI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWQwY2M2MjtcXHJcXG59XFxyXFxuaGVhZGVyLFxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NTU0O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJCZWJhcyBOZXVlXFxcIiwgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuZm9vdGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5mb290ZXIgYSB7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ0NSk7XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4gKi9cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG59XFxyXFxubWFpbiBoMiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5tYWluIGgzIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbm1haW4gaW5wdXQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcbi5lcnIge1xcclxcbiAgY29sb3I6IHJnYigyNDMsIDgyLCA4Mik7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogOTBweDtcXHJcXG59XFxyXFxuLnN1Ym1pc3Npb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuI3N1Ym1pdC1ndWVzcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NTU0O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiA5MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLyogcGxheWVyIHRhYmxlICovXFxyXFxuLnRhYmxlX19jb250ZW50ID4gKixcXHJcXG4udGFibGVfX3RvcCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMjAwcHggMTAwcHggMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XFxyXFxufVxcclxcbi50YWJsZV9fY29udGVudCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG4udGFibGVfX3JvdyA+ICo6Zmlyc3QtY2hpbGQge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuLnRhYmxlX190b3Age1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNWQwY2M7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICM0NDQ1NTQ7XFxyXFxufVxcclxcblxcclxcbi50YWJsZV9fY29udGVudCAudGFibGVfX2NlbGw6bm90KC50YWJsZV9fY2VsbDpsYXN0LWNoaWxkKSB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcbi50YWJsZV9fY29udGVudCAudGFibGVfX2NlbGwge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDE4MGRlZyxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAtNjAlLFxcclxcbiAgICByZ2JhKDY4LCA2OSwgODQsIDAuMSkgNTAlLFxcclxcbiAgICByZ2JhKDY4LCA2OSwgODQsIDAuMSkgMTUwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuLnRhYmxlX19yb3cgPiAudGFibGVfX2NlbGw6bm90KC50YWJsZV9fY2VsbDpudGgtY2hpbGQoMikpIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG59XFxyXFxuLnRhYmxlX19yb3cgPiAudGFibGVfX2NlbGw6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5ncmVlbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDE4MGRlZyxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAtNjAlLFxcclxcbiAgICByZ2JhKDc3LCAyMzUsIDczLCAwLjY2MTk2OTAxMTIzNzMwNzQpIDUwJSxcXHJcXG4gICAgcmdiYSg3NywgMjM1LCA3MywgMC42NjE5NjkwMTEyMzczMDc0KSAxMDAlXFxyXFxuICApICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5hcnJvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLyogbW9kYWwgKi9cXHJcXG4jc3RpY2t5ID4gKiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbiNzdGlja3kgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ1NTRlMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiNzdGlja3kgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ1NTQ3MztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc4NXB4KSB7XFxyXFxuICAudGFibGVfX3JvdyB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDQwcHggMWZyIC8gMTAwcHggMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XFxyXFxuICB9XFxyXFxuICAudGFibGVfX3RvcCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xcclxcbiAgfVxcclxcbiAgLnRhYmxlX190b3AgPiAqOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC50YWJsZV9fcm93ID4gKjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gLTE7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI3NCk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MTBweCkge1xcclxcbiAgLnRhYmxlX19yb3cge1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA0MHB4IDFmciAvIDcwcHggNzBweCA3MHB4IDcwcHggNzBweDtcXHJcXG4gIH1cXHJcXG4gIC50YWJsZV9fdG9wIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gNzBweCA3MHB4IDcwcHggNzBweCA3MHB4O1xcclxcbiAgICBmb250LXNpemU6IDAuNzlyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjNDQ0NTU0O1xcclxcbiAgfVxcclxcbiAgLnRhYmxlX19yb3cgPiAudGFibGVfX2NlbGw6bm90KC50YWJsZV9fY2VsbDpudGgtY2hpbGQoMikpIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgfVxcclxcbiAgLnRhYmxlX19yb3cgPiAudGFibGVfX2NlbGw6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBhdXRvIGNvbXBsZXRlICovXFxyXFxuXFxyXFxuLmF1dG9jb21wbGV0ZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcbi5hdXRvY29tcGxldGUtaXRlbXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICB0b3A6IDEwMCU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcbi5hdXRvY29tcGxldGUtaXRlbXMgPiAqOm5vdCgqOm50aC1jaGlsZCgtbiArIDgpKSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uYXV0b2NvbXBsZXRlLWl0ZW1zIGRpdiB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xcclxcbn1cXHJcXG4uYXV0b2NvbXBsZXRlLWl0ZW1zIGRpdjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcclxcbn1cXHJcXG4uYXV0b2NvbXBsZXRlLWFjdGl2ZSB7XFxyXFxuICAvKndoZW4gbmF2aWdhdGluZyB0aHJvdWdoIHRoZSBpdGVtcyB1c2luZyB0aGUgYXJyb3cga2V5czoqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDU1NCAhaW1wb3J0YW50O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCO0FBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCOztFQUVFLGFBQWE7RUFDYix3REFBd0Q7QUFDMUQ7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkI7Ozs7O0dBS0M7QUFDSDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRTs7Ozs7Y0FLWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0EsVUFBVTtBQUNWO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0U7SUFDRSx1REFBdUQ7RUFDekQ7RUFDQTtJQUNFLGtEQUFrRDtFQUNwRDtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsNENBQTRDO0VBQzlDO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usa0RBQWtEO0VBQ3BEO0VBQ0E7SUFDRSw2Q0FBNkM7SUFDN0Msa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsMERBQTBEO0VBQzFELG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbiosXFxyXFxuKjpiZWZvcmUsXFxyXFxuKjphZnRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDYwcHggMWZyIDQwcHggLyAxZnI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWQwY2M2MjtcXHJcXG59XFxyXFxuaGVhZGVyLFxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NTU0O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJCZWJhcyBOZXVlXFxcIiwgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuZm9vdGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5mb290ZXIgYSB7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ0NSk7XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4gKi9cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG59XFxyXFxubWFpbiBoMiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5tYWluIGgzIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbm1haW4gaW5wdXQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcbi5lcnIge1xcclxcbiAgY29sb3I6IHJnYigyNDMsIDgyLCA4Mik7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogOTBweDtcXHJcXG59XFxyXFxuLnN1Ym1pc3Npb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuI3N1Ym1pdC1ndWVzcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NTU0O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiA5MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLyogcGxheWVyIHRhYmxlICovXFxyXFxuLnRhYmxlX19jb250ZW50ID4gKixcXHJcXG4udGFibGVfX3RvcCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMjAwcHggMTAwcHggMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XFxyXFxufVxcclxcbi50YWJsZV9fY29udGVudCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG4udGFibGVfX3JvdyA+ICo6Zmlyc3QtY2hpbGQge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuLnRhYmxlX190b3Age1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNWQwY2M7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICM0NDQ1NTQ7XFxyXFxufVxcclxcblxcclxcbi50YWJsZV9fY29udGVudCAudGFibGVfX2NlbGw6bm90KC50YWJsZV9fY2VsbDpsYXN0LWNoaWxkKSB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcbi50YWJsZV9fY29udGVudCAudGFibGVfX2NlbGwge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDE4MGRlZyxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAtNjAlLFxcclxcbiAgICByZ2JhKDY4LCA2OSwgODQsIDAuMSkgNTAlLFxcclxcbiAgICByZ2JhKDY4LCA2OSwgODQsIDAuMSkgMTUwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuLnRhYmxlX19yb3cgPiAudGFibGVfX2NlbGw6bm90KC50YWJsZV9fY2VsbDpudGgtY2hpbGQoMikpIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG59XFxyXFxuLnRhYmxlX19yb3cgPiAudGFibGVfX2NlbGw6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5ncmVlbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIDE4MGRlZyxcXHJcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAtNjAlLFxcclxcbiAgICByZ2JhKDc3LCAyMzUsIDczLCAwLjY2MTk2OTAxMTIzNzMwNzQpIDUwJSxcXHJcXG4gICAgcmdiYSg3NywgMjM1LCA3MywgMC42NjE5NjkwMTEyMzczMDc0KSAxMDAlXFxyXFxuICApICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5hcnJvdyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLyogbW9kYWwgKi9cXHJcXG4jc3RpY2t5ID4gKiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbiNzdGlja3kgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ1NTRlMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiNzdGlja3kgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ1NTQ3MztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc4NXB4KSB7XFxyXFxuICAudGFibGVfX3JvdyB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDQwcHggMWZyIC8gMTAwcHggMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XFxyXFxuICB9XFxyXFxuICAudGFibGVfX3RvcCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xcclxcbiAgfVxcclxcbiAgLnRhYmxlX190b3AgPiAqOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC50YWJsZV9fcm93ID4gKjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gLTE7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI3NCk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MTBweCkge1xcclxcbiAgLnRhYmxlX19yb3cge1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA0MHB4IDFmciAvIDcwcHggNzBweCA3MHB4IDcwcHggNzBweDtcXHJcXG4gIH1cXHJcXG4gIC50YWJsZV9fdG9wIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gNzBweCA3MHB4IDcwcHggNzBweCA3MHB4O1xcclxcbiAgICBmb250LXNpemU6IDAuNzlyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjNDQ0NTU0O1xcclxcbiAgfVxcclxcbiAgLnRhYmxlX19yb3cgPiAudGFibGVfX2NlbGw6bm90KC50YWJsZV9fY2VsbDpudGgtY2hpbGQoMikpIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgfVxcclxcbiAgLnRhYmxlX19yb3cgPiAudGFibGVfX2NlbGw6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBhdXRvIGNvbXBsZXRlICovXFxyXFxuXFxyXFxuLmF1dG9jb21wbGV0ZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcbi5hdXRvY29tcGxldGUtaXRlbXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICB0b3A6IDEwMCU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcbi5hdXRvY29tcGxldGUtaXRlbXMgPiAqOm5vdCgqOm50aC1jaGlsZCgtbiArIDgpKSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uYXV0b2NvbXBsZXRlLWl0ZW1zIGRpdiB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xcclxcbn1cXHJcXG4uYXV0b2NvbXBsZXRlLWl0ZW1zIGRpdjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcclxcbn1cXHJcXG4uYXV0b2NvbXBsZXRlLWFjdGl2ZSB7XFxyXFxuICAvKndoZW4gbmF2aWdhdGluZyB0aHJvdWdoIHRoZSBpdGVtcyB1c2luZyB0aGUgYXJyb3cga2V5czoqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDU1NCAhaW1wb3J0YW50O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IFt7XCJOYW1lXCI6XCJNYXNvbiBNb3VudFwifSx7XCJOYW1lXCI6XCJFZG91YXJkIE1lbmR5XCJ9LHtcIk5hbWVcIjpcIlRpbW8gV2VybmVyXCJ9LHtcIk5hbWVcIjpcIkJlbiBDaGlsd2VsbFwifSx7XCJOYW1lXCI6XCJSZWVjZSBKYW1lc1wifSx7XCJOYW1lXCI6XCJDw6lzYXIgQXpwaWxpY3VldGFcIn0se1wiTmFtZVwiOlwiTidHb2xvIEthbnTDqVwifSx7XCJOYW1lXCI6XCJKb3JnaW5ob1wifSx7XCJOYW1lXCI6XCJUaGlhZ28gU2lsdmFcIn0se1wiTmFtZVwiOlwiS3VydCBab3VtYVwifSx7XCJOYW1lXCI6XCJNYXRlbyBLb3ZhxI1pxIdcIn0se1wiTmFtZVwiOlwiQW50b25pbyBSw7xkaWdlclwifSx7XCJOYW1lXCI6XCJDaHJpc3RpYW4gUHVsaXNpY1wifSx7XCJOYW1lXCI6XCJLYWkgSGF2ZXJ0elwifSx7XCJOYW1lXCI6XCJBbmRyZWFzIENocmlzdGVuc2VuXCJ9LHtcIk5hbWVcIjpcIkhha2ltIFppeWVjaFwifSx7XCJOYW1lXCI6XCJUYW1teSBBYnJhaGFtXCJ9LHtcIk5hbWVcIjpcIk1hcmNvcyBBbG9uc29cIn0se1wiTmFtZVwiOlwiQ2FsbHVtIEh1ZHNvbi1PZG9pXCJ9LHtcIk5hbWVcIjpcIk9saXZpZXIgR2lyb3VkXCJ9LHtcIk5hbWVcIjpcIktlcGEgQXJyaXphYmFsYWdhXCJ9LHtcIk5hbWVcIjpcIkJpbGx5IEdpbG1vdXJcIn0se1wiTmFtZVwiOlwiV2lsbHkgQ2FiYWxsZXJvXCJ9LHtcIk5hbWVcIjpcIlJ1YmVuIExvZnR1cy1DaGVla1wifSx7XCJOYW1lXCI6XCJFbWVyc29uIFBhbG1pZXJpXCJ9LHtcIk5hbWVcIjpcIkZpa2F5byBUb21vcmlcIn0se1wiTmFtZVwiOlwiUm9zcyBCYXJrbGV5XCJ9LHtcIk5hbWVcIjpcIkVkZXJzb25cIn0se1wiTmFtZVwiOlwiUsO6YmVuIERpYXNcIn0se1wiTmFtZVwiOlwiUm9kcmlcIn0se1wiTmFtZVwiOlwiUmFoZWVtIFN0ZXJsaW5nXCJ9LHtcIk5hbWVcIjpcIkpvw6NvIENhbmNlbG9cIn0se1wiTmFtZVwiOlwiQmVybmFyZG8gU2lsdmFcIn0se1wiTmFtZVwiOlwixLBsa2F5IEfDvG5kb8SfYW5cIn0se1wiTmFtZVwiOlwiS2V2aW4gRGUgQnJ1eW5lXCJ9LHtcIk5hbWVcIjpcIlJpeWFkIE1haHJlelwifSx7XCJOYW1lXCI6XCJHYWJyaWVsIEplc3VzXCJ9LHtcIk5hbWVcIjpcIkt5bGUgV2Fsa2VyXCJ9LHtcIk5hbWVcIjpcIkpvaG4gU3RvbmVzXCJ9LHtcIk5hbWVcIjpcIlBoaWwgRm9kZW5cIn0se1wiTmFtZVwiOlwiT2xla3NhbmRyIFppbmNoZW5rb1wifSx7XCJOYW1lXCI6XCJGZXJyw6FuIFRvcnJlc1wifSx7XCJOYW1lXCI6XCJBeW1lcmljIExhcG9ydGVcIn0se1wiTmFtZVwiOlwiRmVybmFuZGluaG9cIn0se1wiTmFtZVwiOlwiQmVuamFtaW4gTWVuZHlcIn0se1wiTmFtZVwiOlwiTmF0aGFuIEFrw6lcIn0se1wiTmFtZVwiOlwiU2VyZ2lvIEFnw7xlcm9cIn0se1wiTmFtZVwiOlwiRXJpYyBHYXJjw61hXCJ9LHtcIk5hbWVcIjpcIlNjb3R0IENhcnNvblwifSx7XCJOYW1lXCI6XCJaYWNrIFN0ZWZmZW5cIn0se1wiTmFtZVwiOlwiTGlhbSBEZWxhcFwifSx7XCJOYW1lXCI6XCJCcnVubyBGZXJuYW5kZXNcIn0se1wiTmFtZVwiOlwiQWFyb24gV2FuLUJpc3Nha2FcIn0se1wiTmFtZVwiOlwiSGFycnkgTWFndWlyZVwifSx7XCJOYW1lXCI6XCJNYXJjdXMgUmFzaGZvcmRcIn0se1wiTmFtZVwiOlwiTHVrZSBTaGF3XCJ9LHtcIk5hbWVcIjpcIlZpY3RvciBMaW5kZWzDtmZcIn0se1wiTmFtZVwiOlwiRnJlZFwifSx7XCJOYW1lXCI6XCJEYXZpZCBkZSBHZWFcIn0se1wiTmFtZVwiOlwiU2NvdHQgTWNUb21pbmF5XCJ9LHtcIk5hbWVcIjpcIlBhdWwgUG9nYmFcIn0se1wiTmFtZVwiOlwiTWFzb24gR3JlZW53b29kXCJ9LHtcIk5hbWVcIjpcIkFudGhvbnkgTWFydGlhbFwifSx7XCJOYW1lXCI6XCJFZGluc29uIENhdmFuaVwifSx7XCJOYW1lXCI6XCJEZWFuIEhlbmRlcnNvblwifSx7XCJOYW1lXCI6XCJOZW1hbmphIE1hdGnEh1wifSx7XCJOYW1lXCI6XCJEYW5pZWwgSmFtZXNcIn0se1wiTmFtZVwiOlwiRXJpYyBCYWlsbHlcIn0se1wiTmFtZVwiOlwiQWxleCBUZWxsZXNcIn0se1wiTmFtZVwiOlwiSnVhbiBNYXRhXCJ9LHtcIk5hbWVcIjpcIkRvbm55IHZhbiBkZSBCZWVrXCJ9LHtcIk5hbWVcIjpcIkF4ZWwgVHVhbnplYmVcIn0se1wiTmFtZVwiOlwiQnJhbmRvbiBXaWxsaWFtc1wifSx7XCJOYW1lXCI6XCJBbWFkIERpYWxsb1wifSx7XCJOYW1lXCI6XCJBbnRob255IEVsYW5nYVwifSx7XCJOYW1lXCI6XCJUaW1vdGh5IEZvc3UtTWVuc2FoXCJ9LHtcIk5hbWVcIjpcIlNob2xhIFNob3JldGlyZVwifSx7XCJOYW1lXCI6XCJPZGlvbiBJZ2hhbG9cIn0se1wiTmFtZVwiOlwiSGFubmliYWwgTWVqYnJpXCJ9LHtcIk5hbWVcIjpcIldpbGxpYW0gVGhvbWFzIEZpc2hcIn0se1wiTmFtZVwiOlwiQW5kcmV3IFJvYmVydHNvblwifSx7XCJOYW1lXCI6XCJNb2hhbWVkIFNhbGFoXCJ9LHtcIk5hbWVcIjpcIlRyZW50IEFsZXhhbmRlci1Bcm5vbGRcIn0se1wiTmFtZVwiOlwiR2VvcmdpbmlvIFdpam5hbGR1bVwifSx7XCJOYW1lXCI6XCJBbGlzc29uXCJ9LHtcIk5hbWVcIjpcIlJvYmVydG8gRmlybWlub1wifSx7XCJOYW1lXCI6XCJTYWRpbyBNYW7DqVwifSx7XCJOYW1lXCI6XCJGYWJpbmhvXCJ9LHtcIk5hbWVcIjpcIlRoaWFnbyBBbGPDoW50YXJhXCJ9LHtcIk5hbWVcIjpcIkpvcmRhbiBIZW5kZXJzb25cIn0se1wiTmFtZVwiOlwiTmF0aGFuaWVsIFBoaWxsaXBzXCJ9LHtcIk5hbWVcIjpcIkN1cnRpcyBKb25lc1wifSx7XCJOYW1lXCI6XCJEaW9nbyBKb3RhXCJ9LHtcIk5hbWVcIjpcIkphbWVzIE1pbG5lclwifSx7XCJOYW1lXCI6XCJPemFuIEthYmFrXCJ9LHtcIk5hbWVcIjpcIkpvw6tsIE1hdGlwXCJ9LHtcIk5hbWVcIjpcIlJoeXMgV2lsbGlhbXNcIn0se1wiTmFtZVwiOlwiTmFieSBLZcOvdGFcIn0se1wiTmFtZVwiOlwiSm9lIEdvbWV6XCJ9LHtcIk5hbWVcIjpcIlhoZXJkYW4gU2hhcWlyaVwifSx7XCJOYW1lXCI6XCJWaXJnaWwgdmFuIERpamtcIn0se1wiTmFtZVwiOlwiQWRyacOhblwifSx7XCJOYW1lXCI6XCJOZWNvIFdpbGxpYW1zXCJ9LHtcIk5hbWVcIjpcIlRha3VtaSBNaW5hbWlub1wifSx7XCJOYW1lXCI6XCJBbGV4IE94bGFkZS1DaGFtYmVybGFpblwifSx7XCJOYW1lXCI6XCJEaXZvY2sgT3JpZ2lcIn0se1wiTmFtZVwiOlwiQ2FvaW1ow61uIEtlbGxlaGVyXCJ9LHtcIk5hbWVcIjpcIktvc3RhcyBUc2ltaWthc1wifSx7XCJOYW1lXCI6XCJLYXNwZXIgU2NobWVpY2hlbFwifSx7XCJOYW1lXCI6XCJZb3VyaSBUaWVsZW1hbnNcIn0se1wiTmFtZVwiOlwiSmFtaWUgVmFyZHlcIn0se1wiTmFtZVwiOlwiSm9ubnkgRXZhbnNcIn0se1wiTmFtZVwiOlwiVGltb3RoeSBDYXN0YWduZVwifSx7XCJOYW1lXCI6XCJXZXNsZXkgRm9mYW5hXCJ9LHtcIk5hbWVcIjpcIldpbGZyZWQgTmRpZGlcIn0se1wiTmFtZVwiOlwiSmFtZXMgTWFkZGlzb25cIn0se1wiTmFtZVwiOlwiSmFtZXMgSnVzdGluXCJ9LHtcIk5hbWVcIjpcIkhhcnZleSBCYXJuZXNcIn0se1wiTmFtZVwiOlwiw4dhxJ9sYXIgU8O2ecO8bmPDvFwifSx7XCJOYW1lXCI6XCJNYXJjIEFsYnJpZ2h0b25cIn0se1wiTmFtZVwiOlwiS2VsZWNoaSBJaGVhbmFjaG9cIn0se1wiTmFtZVwiOlwiTmFtcGFseXMgTWVuZHlcIn0se1wiTmFtZVwiOlwiQXlvemUgUMOpcmV6XCJ9LHtcIk5hbWVcIjpcIkx1a2UgVGhvbWFzXCJ9LHtcIk5hbWVcIjpcIlJpY2FyZG8gUGVyZWlyYVwifSx7XCJOYW1lXCI6XCJEZW5uaXMgUHJhZXRcIn0se1wiTmFtZVwiOlwiRGFuaWVsIEFtYXJ0ZXlcIn0se1wiTmFtZVwiOlwiQ2hyaXN0aWFuIEZ1Y2hzXCJ9LHtcIk5hbWVcIjpcIkhhbXphIENob3VkaHVyeVwifSx7XCJOYW1lXCI6XCJDZW5naXogw5xuZGVyXCJ9LHtcIk5hbWVcIjpcIlNpZG5laSBUYXZhcmVzXCJ9LHtcIk5hbWVcIjpcIklzbGFtIFNsaW1hbmlcIn0se1wiTmFtZVwiOlwiRGVtYXJhaSBHcmF5XCJ9LHtcIk5hbWVcIjpcIldlcyBNb3JnYW5cIn0se1wiTmFtZVwiOlwiS2hhbnlhIExlc2hhYmVsYVwifSx7XCJOYW1lXCI6XCJUb23DocWhIFNvdcSNZWtcIn0se1wiTmFtZVwiOlwiQWFyb24gQ3Jlc3N3ZWxsXCJ9LHtcIk5hbWVcIjpcIsWBdWthc3ogRmFiaWHFhHNraVwifSx7XCJOYW1lXCI6XCJWbGFkaW3DrXIgQ291ZmFsXCJ9LHtcIk5hbWVcIjpcIkRlY2xhbiBSaWNlXCJ9LHtcIk5hbWVcIjpcIlBhYmxvIEZvcm5hbHNcIn0se1wiTmFtZVwiOlwiSmFycm9kIEJvd2VuXCJ9LHtcIk5hbWVcIjpcIkFuZ2VsbyBPZ2Jvbm5hXCJ9LHtcIk5hbWVcIjpcIk1pY2hhaWwgQW50b25pb1wifSx7XCJOYW1lXCI6XCJDcmFpZyBEYXdzb25cIn0se1wiTmFtZVwiOlwiSmVzc2UgTGluZ2FyZFwifSx7XCJOYW1lXCI6XCJJc3NhIERpb3BcIn0se1wiTmFtZVwiOlwiU2HDr2QgQmVucmFobWFcIn0se1wiTmFtZVwiOlwiRmFiacOhbiBCYWxidWVuYVwifSx7XCJOYW1lXCI6XCJBcnRodXIgTWFzdWFrdVwifSx7XCJOYW1lXCI6XCJTw6liYXN0aWVuIEhhbGxlclwifSx7XCJOYW1lXCI6XCJNYXJrIE5vYmxlXCJ9LHtcIk5hbWVcIjpcIlJ5YW4gRnJlZGVyaWNrc1wifSx7XCJOYW1lXCI6XCJNYW51ZWwgTGFuemluaVwifSx7XCJOYW1lXCI6XCJCZW4gSm9obnNvblwifSx7XCJOYW1lXCI6XCJEYXJyZW4gUmFuZG9scGhcIn0se1wiTmFtZVwiOlwiQW5kcml5IFlhcm1vbGVua29cIn0se1wiTmFtZVwiOlwiUm9iZXJ0IFNub2RncmFzc1wifSx7XCJOYW1lXCI6XCJGZWxpcGUgQW5kZXJzb25cIn0se1wiTmFtZVwiOlwiUGllcnJlIEjDuGpiamVyZ1wifSx7XCJOYW1lXCI6XCJIdWdvIExsb3Jpc1wifSx7XCJOYW1lXCI6XCJTb24gSGV1bmctbWluXCJ9LHtcIk5hbWVcIjpcIkhhcnJ5IEthbmVcIn0se1wiTmFtZVwiOlwiRXJpYyBEaWVyXCJ9LHtcIk5hbWVcIjpcIlRhbmd1eSBOZG9tYmVsZVwifSx7XCJOYW1lXCI6XCJTZXJnaW8gUmVndWlsw7NuXCJ9LHtcIk5hbWVcIjpcIlRvYnkgQWxkZXJ3ZWlyZWxkXCJ9LHtcIk5hbWVcIjpcIlNlcmdlIEF1cmllclwifSx7XCJOYW1lXCI6XCJEYXZpbnNvbiBTw6FuY2hlelwifSx7XCJOYW1lXCI6XCJNb3Vzc2EgU2lzc29rb1wifSx7XCJOYW1lXCI6XCJMdWNhcyBNb3VyYVwifSx7XCJOYW1lXCI6XCJCZW4gRGF2aWVzXCJ9LHtcIk5hbWVcIjpcIk1hdHQgRG9oZXJ0eVwifSx7XCJOYW1lXCI6XCJTdGV2ZW4gQmVyZ3dpam5cIn0se1wiTmFtZVwiOlwiR2lvdmFuaSBMbyBDZWxzb1wifSx7XCJOYW1lXCI6XCJHYXJldGggQmFsZVwifSx7XCJOYW1lXCI6XCJIYXJyeSBXaW5rc1wifSx7XCJOYW1lXCI6XCJKb2UgUm9kb25cIn0se1wiTmFtZVwiOlwiRGVsZSBBbGxpXCJ9LHtcIk5hbWVcIjpcIkphcGhldCBUYW5nYW5nYVwifSx7XCJOYW1lXCI6XCLDiXJpayBMYW1lbGFcIn0se1wiTmFtZVwiOlwiQ2FybG9zIFZpbsOtY2l1c1wifSx7XCJOYW1lXCI6XCJEYW5lIFNjYXJsZXR0XCJ9LHtcIk5hbWVcIjpcIkJlcm5kIExlbm9cIn0se1wiTmFtZVwiOlwiQnVrYXlvIFNha2FcIn0se1wiTmFtZVwiOlwiR3Jhbml0IFhoYWthXCJ9LHtcIk5hbWVcIjpcIlJvYiBIb2xkaW5nXCJ9LHtcIk5hbWVcIjpcIlBpZXJyZS1FbWVyaWNrIEF1YmFtZXlhbmdcIn0se1wiTmFtZVwiOlwiS2llcmFuIFRpZXJuZXlcIn0se1wiTmFtZVwiOlwiSMOpY3RvciBCZWxsZXLDrW5cIn0se1wiTmFtZVwiOlwiR2FicmllbCBEb3MgU2FudG9zXCJ9LHtcIk5hbWVcIjpcIkFsZXhhbmRyZSBMYWNhemV0dGVcIn0se1wiTmFtZVwiOlwiVGhvbWFzIFBhcnRleVwifSx7XCJOYW1lXCI6XCJFbWlsZSBTbWl0aC1Sb3dlXCJ9LHtcIk5hbWVcIjpcIkRhbmkgQ2ViYWxsb3NcIn0se1wiTmFtZVwiOlwiTW9oYW1lZCBFbG5lbnlcIn0se1wiTmFtZVwiOlwiRGF2aWQgTHVpelwifSx7XCJOYW1lXCI6XCJOaWNvbGFzIFDDqXDDqVwifSx7XCJOYW1lXCI6XCJXaWxsaWFuXCJ9LHtcIk5hbWVcIjpcIlBhYmxvIE1hcsOtXCJ9LHtcIk5hbWVcIjpcIk1hcnRpbiDDmGRlZ2FhcmRcIn0se1wiTmFtZVwiOlwiQ2FsdW0gQ2hhbWJlcnNcIn0se1wiTmFtZVwiOlwiQ8OpZHJpYyBTb2FyZXNcIn0se1wiTmFtZVwiOlwiTWFydGluZWxsaVwifSx7XCJOYW1lXCI6XCJBaW5zbGV5IE1haXRsYW5kLU5pbGVzXCJ9LHtcIk5hbWVcIjpcIkVkZGllIE5rZXRpYWhcIn0se1wiTmFtZVwiOlwiTWF0aGV3IFJ5YW5cIn0se1wiTmFtZVwiOlwiSm9lIFdpbGxvY2tcIn0se1wiTmFtZVwiOlwiU2VhZCBLb2xhxaFpbmFjXCJ9LHtcIk5hbWVcIjpcIlJlaXNzIE5lbHNvblwifSx7XCJOYW1lXCI6XCJTaGtvZHJhbiBNdXN0YWZpXCJ9LHtcIk5hbWVcIjpcIlLDum5hciBBbGV4IFLDum5hcnNzb25cIn0se1wiTmFtZVwiOlwiU3R1YXJ0IERhbGxhc1wifSx7XCJOYW1lXCI6XCJMdWtlIEF5bGluZ1wifSx7XCJOYW1lXCI6XCJQYXRyaWNrIEJhbWZvcmRcIn0se1wiTmFtZVwiOlwiSWxsYW4gTWVzbGllclwifSx7XCJOYW1lXCI6XCJKYWNrIEhhcnJpc29uXCJ9LHtcIk5hbWVcIjpcIkV6Z2phbiBBbGlvc2tpXCJ9LHtcIk5hbWVcIjpcIkthbHZpbiBQaGlsbGlwc1wifSx7XCJOYW1lXCI6XCJNYXRldXN6IEtsaWNoXCJ9LHtcIk5hbWVcIjpcIlJhcGhhZWwgRGlhcyBCZWxsb2xpXCJ9LHtcIk5hbWVcIjpcIkxpYW0gQ29vcGVyXCJ9LHtcIk5hbWVcIjpcIlBhc2NhbCBTdHJ1aWprXCJ9LHtcIk5hbWVcIjpcIlR5bGVyIFJvYmVydHNcIn0se1wiTmFtZVwiOlwiUm9kcmlnb1wifSx7XCJOYW1lXCI6XCJEaWVnbyBMbG9yZW50ZVwifSx7XCJOYW1lXCI6XCJIw6lsZGVyIENvc3RhXCJ9LHtcIk5hbWVcIjpcIlJvYmluIEtvY2hcIn0se1wiTmFtZVwiOlwiSmFtaWUgU2hhY2tsZXRvblwifSx7XCJOYW1lXCI6XCJQYWJsbyBIZXJuw6FuZGV6XCJ9LHtcIk5hbWVcIjpcIktpa28gQ2FzaWxsYVwifSx7XCJOYW1lXCI6XCJHYWV0YW5vIEJlcmFyZGlcIn0se1wiTmFtZVwiOlwiSWFuIENhcmxvIFBvdmVkYVwifSx7XCJOYW1lXCI6XCJOaWFsbCBIdWdnaW5zXCJ9LHtcIk5hbWVcIjpcIkxlaWYgRGF2aXNcIn0se1wiTmFtZVwiOlwiTWljaGFlbCBLZWFuZVwifSx7XCJOYW1lXCI6XCJSaWNoYXJsaXNvblwifSx7XCJOYW1lXCI6XCJEb21pbmljIENhbHZlcnQtTGV3aW5cIn0se1wiTmFtZVwiOlwiSm9yZGFuIFBpY2tmb3JkXCJ9LHtcIk5hbWVcIjpcIkx1Y2FzIERpZ25lXCJ9LHtcIk5hbWVcIjpcIkJlbiBHb2RmcmV5XCJ9LHtcIk5hbWVcIjpcIkFiZG91bGF5ZSBEb3Vjb3Vyw6lcIn0se1wiTmFtZVwiOlwiTWFzb24gSG9sZ2F0ZVwifSx7XCJOYW1lXCI6XCJHeWxmaSBTaWd1csOwc3NvblwifSx7XCJOYW1lXCI6XCJBbGxhblwifSx7XCJOYW1lXCI6XCJZZXJyeSBNaW5hXCJ9LHtcIk5hbWVcIjpcIkphbWVzIFJvZHLDrWd1ZXpcIn0se1wiTmFtZVwiOlwiU8OpYW11cyBDb2xlbWFuXCJ9LHtcIk5hbWVcIjpcIkFuZHLDqSBHb21lc1wifSx7XCJOYW1lXCI6XCJBbGV4IEl3b2JpXCJ9LHtcIk5hbWVcIjpcIlRvbSBEYXZpZXNcIn0se1wiTmFtZVwiOlwiUm9iaW4gT2xzZW5cIn0se1wiTmFtZVwiOlwiQmVybmFyZFwifSx7XCJOYW1lXCI6XCJGYWJpYW4gRGVscGhcIn0se1wiTmFtZVwiOlwiQW50aG9ueSBHb3Jkb25cIn0se1wiTmFtZVwiOlwiTmllbHMgTmtvdW5rb3VcIn0se1wiTmFtZVwiOlwiSm9uam9lIEtlbm55XCJ9LHtcIk5hbWVcIjpcIkpvc2h1YSBLaW5nXCJ9LHtcIk5hbWVcIjpcIkNlbmsgVG9zdW5cIn0se1wiTmFtZVwiOlwiSm/Do28gVmlyZ8OtbmlhXCJ9LHtcIk5hbWVcIjpcIk1vaXNlIEtlYW5cIn0se1wiTmFtZVwiOlwiVGhlbyBXYWxjb3R0XCJ9LHtcIk5hbWVcIjpcIkplYW4tUGhpbGlwcGUgR2JhbWluXCJ9LHtcIk5hbWVcIjpcIk5hdGhhbiBCcm9hZGhlYWRcIn0se1wiTmFtZVwiOlwiRW1pbGlhbm8gTWFydMOtbmV6XCJ9LHtcIk5hbWVcIjpcIk1hdHQgVGFyZ2V0dFwifSx7XCJOYW1lXCI6XCJKb2huIE1jR2lublwifSx7XCJOYW1lXCI6XCJPbGxpZSBXYXRraW5zXCJ9LHtcIk5hbWVcIjpcIlR5cm9uZSBNaW5nc1wifSx7XCJOYW1lXCI6XCJFenJpIEtvbnNhXCJ9LHtcIk5hbWVcIjpcIkRvdWdsYXMgTHVpelwifSx7XCJOYW1lXCI6XCJCZXJ0cmFuZCBUcmFvcsOpXCJ9LHtcIk5hbWVcIjpcIk1hdHR5IENhc2hcIn0se1wiTmFtZVwiOlwiSmFjayBHcmVhbGlzaFwifSx7XCJOYW1lXCI6XCJSb3NzIEJhcmtsZXlcIn0se1wiTmFtZVwiOlwiQW53YXIgRWwgR2hhemlcIn0se1wiTmFtZVwiOlwiVHLDqXrDqWd1ZXRcIn0se1wiTmFtZVwiOlwiTWFydmVsb3VzIE5ha2FtYmFcIn0se1wiTmFtZVwiOlwiQWhtZWQgRWxtb2hhbWFkeVwifSx7XCJOYW1lXCI6XCJLb3J0bmV5IEhhdXNlXCJ9LHtcIk5hbWVcIjpcIkphY29iIFJhbXNleVwifSx7XCJOYW1lXCI6XCJNb3JnYW4gU2Fuc29uXCJ9LHtcIk5hbWVcIjpcIkNvbm9yIEhvdXJpaGFuZVwifSx7XCJOYW1lXCI6XCJLZWluYW4gRGF2aXNcIn0se1wiTmFtZVwiOlwiQ2FybmV5IENodWt3dWVtZWthXCJ9LHtcIk5hbWVcIjpcIldlc2xleSBNb3JhZXNcIn0se1wiTmFtZVwiOlwiTmVpbCBUYXlsb3JcIn0se1wiTmFtZVwiOlwiSmFkZW4gUGhpbG9nZW5lIEJpZGFjZVwifSx7XCJOYW1lXCI6XCJKb25qbyBTaGVsdmV5XCJ9LHtcIk5hbWVcIjpcIk1pZ3VlbCBBbG1pcsOzblwifSx7XCJOYW1lXCI6XCJLYXJsIERhcmxvd1wifSx7XCJOYW1lXCI6XCJGZWRlcmljbyBGZXJuw6FuZGV6XCJ9LHtcIk5hbWVcIjpcIkNhbGx1bSBXaWxzb25cIn0se1wiTmFtZVwiOlwiSm9lbGludG9uXCJ9LHtcIk5hbWVcIjpcIklzYWFjIEhheWRlblwifSx7XCJOYW1lXCI6XCJDaWFyYW4gQ2xhcmtcIn0se1wiTmFtZVwiOlwiSmFtYWwgTGV3aXNcIn0se1wiTmFtZVwiOlwiSmFtYWFsIExhc2NlbGxlc1wifSx7XCJOYW1lXCI6XCJBbGxhbiBTYWludC1NYXhpbWluXCJ9LHtcIk5hbWVcIjpcIkphY29iIE11cnBoeVwifSx7XCJOYW1lXCI6XCJKZWZmIEhlbmRyaWNrXCJ9LHtcIk5hbWVcIjpcIlNlYW4gTG9uZ3N0YWZmXCJ9LHtcIk5hbWVcIjpcIk1hdHQgUml0Y2hpZVwifSx7XCJOYW1lXCI6XCJFbWlsIEtyYWZ0aFwifSx7XCJOYW1lXCI6XCJQYXVsIER1bW1ldHRcIn0se1wiTmFtZVwiOlwiRmFiaWFuIFNjaMOkclwifSx7XCJOYW1lXCI6XCJNYXJ0aW4gRMO6YnJhdmthXCJ9LHtcIk5hbWVcIjpcIkpvZSBXaWxsb2NrXCJ9LHtcIk5hbWVcIjpcIkphdmllciBNYW5xdWlsbG9cIn0se1wiTmFtZVwiOlwiUnlhbiBGcmFzZXJcIn0se1wiTmFtZVwiOlwiRGVBbmRyZSBZZWRsaW5cIn0se1wiTmFtZVwiOlwiRHdpZ2h0IEdheWxlXCJ9LHtcIk5hbWVcIjpcIkFuZHkgQ2Fycm9sbFwifSx7XCJOYW1lXCI6XCJNYXR0aGV3IExvbmdzdGFmZlwifSx7XCJOYW1lXCI6XCJFbGxpb3QgQW5kZXJzb25cIn0se1wiTmFtZVwiOlwiUnVpIFBhdHLDrWNpb1wifSx7XCJOYW1lXCI6XCJDb25vciBDb2FkeVwifSx7XCJOYW1lXCI6XCJOw6lsc29uIFNlbWVkb1wifSx7XCJOYW1lXCI6XCJSw7piZW4gTmV2ZXNcIn0se1wiTmFtZVwiOlwiUGVkcm8gTmV0b1wifSx7XCJOYW1lXCI6XCJBZGFtYSBUcmFvcsOpXCJ9LHtcIk5hbWVcIjpcIkpvw6NvIE1vdXRpbmhvXCJ9LHtcIk5hbWVcIjpcIkxlYW5kZXIgRGVuZG9uY2tlclwifSx7XCJOYW1lXCI6XCJSb21haW4gU2HDr3NzXCJ9LHtcIk5hbWVcIjpcIkRhbmllbCBQb2RlbmNlXCJ9LHtcIk5hbWVcIjpcIldpbGx5IEJvbHlcIn0se1wiTmFtZVwiOlwiUmF5YW4gQcOvdCBOb3VyaVwifSx7XCJOYW1lXCI6XCJNYXggS2lsbWFuXCJ9LHtcIk5hbWVcIjpcIldpbGxpYW4gSm9zw6lcIn0se1wiTmFtZVwiOlwiRsOhYmlvIFNpbHZhXCJ9LHtcIk5hbWVcIjpcIlJhw7psIEppbcOpbmV6XCJ9LHtcIk5hbWVcIjpcIkZlcm5hbmRvIE1hcsOnYWxcIn0se1wiTmFtZVwiOlwiSm9ubnkgQ2FzdHJvXCJ9LHtcIk5hbWVcIjpcIktpLUphbmEgSG9ldmVyXCJ9LHtcIk5hbWVcIjpcIlZpdGluaGFcIn0se1wiTmFtZVwiOlwiTW9yZ2FuIEdpYmJzLVdoaXRlXCJ9LHtcIk5hbWVcIjpcIk93ZW4gT3Rhc293aWVcIn0se1wiTmFtZVwiOlwiUsO6YmVuIFZpbmFncmVcIn0se1wiTmFtZVwiOlwiSm9obiBSdWRkeVwifSx7XCJOYW1lXCI6XCJQYXRyaWNrIEN1dHJvbmVcIn0se1wiTmFtZVwiOlwiT3NrYXIgQnV1clwifSx7XCJOYW1lXCI6XCJUaGVvIENvcmJlYW51XCJ9LHtcIk5hbWVcIjpcIlZpY2VudGUgR3VhaXRhXCJ9LHtcIk5hbWVcIjpcIkNoZWlraG91IEtvdXlhdMOpXCJ9LHtcIk5hbWVcIjpcIldpbGZyaWVkIFphaGFcIn0se1wiTmFtZVwiOlwiRWJlcmVjaGkgRXplXCJ9LHtcIk5hbWVcIjpcIkx1a2EgTWlsaXZvamV2acSHXCJ9LHtcIk5hbWVcIjpcIkFuZHJvcyBUb3duc2VuZFwifSx7XCJOYW1lXCI6XCJKb2VsIFdhcmRcIn0se1wiTmFtZVwiOlwiSm9yZGFuIEF5ZXdcIn0se1wiTmFtZVwiOlwiQ2hyaXN0aWFuIEJlbnRla2VcIn0se1wiTmFtZVwiOlwiR2FyeSBDYWhpbGxcIn0se1wiTmFtZVwiOlwiUGF0cmljayB2YW4gQWFuaG9sdFwifSx7XCJOYW1lXCI6XCJKYcOvcm8gUmllZGV3YWxkXCJ9LHtcIk5hbWVcIjpcIlR5cmljayBNaXRjaGVsbFwifSx7XCJOYW1lXCI6XCJKYW1lcyBNY0FydGh1clwifSx7XCJOYW1lXCI6XCJKZWZmcmV5IFNjaGx1cHBcIn0se1wiTmFtZVwiOlwiU2NvdHQgRGFublwifSx7XCJOYW1lXCI6XCJOYXRoYW5pZWwgQ2x5bmVcIn0se1wiTmFtZVwiOlwiSmFtZXMgTWNDYXJ0aHlcIn0se1wiTmFtZVwiOlwiTWljaHkgQmF0c2h1YXlpXCJ9LHtcIk5hbWVcIjpcIkphbWVzIFRvbWtpbnNcIn0se1wiTmFtZVwiOlwiTWFtYWRvdSBTYWtob1wifSx7XCJOYW1lXCI6XCJKZWFuLVBoaWxpcHBlIE1hdGV0YVwifSx7XCJOYW1lXCI6XCJKYWNrIEJ1dGxhbmRcIn0se1wiTmFtZVwiOlwiTWFydGluIEtlbGx5XCJ9LHtcIk5hbWVcIjpcIkphbWVzIFdhcmQtUHJvd3NlXCJ9LHtcIk5hbWVcIjpcIkphbiBCZWRuYXJla1wifSx7XCJOYW1lXCI6XCJTdHVhcnQgQXJtc3Ryb25nXCJ9LHtcIk5hbWVcIjpcIkFsZXggTWNDYXJ0aHlcIn0se1wiTmFtZVwiOlwiQ2hlIEFkYW1zXCJ9LHtcIk5hbWVcIjpcIkt5bGUgV2Fsa2VyLVBldGVyc1wifSx7XCJOYW1lXCI6XCJSeWFuIEJlcnRyYW5kXCJ9LHtcIk5hbWVcIjpcIkphbm5payBWZXN0ZXJnYWFyZFwifSx7XCJOYW1lXCI6XCJEYW5ueSBJbmdzXCJ9LHtcIk5hbWVcIjpcIk9yaW9sIFJvbWV1XCJ9LHtcIk5hbWVcIjpcIlRoZW8gV2FsY290dFwifSx7XCJOYW1lXCI6XCJOYXRoYW4gUmVkbW9uZFwifSx7XCJOYW1lXCI6XCJKYWNrIFN0ZXBoZW5zXCJ9LHtcIk5hbWVcIjpcIk1vdXNzYSBEamVuZXBvXCJ9LHtcIk5hbWVcIjpcIklicmFoaW1hIERpYWxsb1wifSx7XCJOYW1lXCI6XCJUYWt1bWkgTWluYW1pbm9cIn0se1wiTmFtZVwiOlwiTW9oYW1tZWQgU2FsaXN1XCJ9LHtcIk5hbWVcIjpcIkZyYXNlciBGb3JzdGVyXCJ9LHtcIk5hbWVcIjpcIk5hdGhhbiBUZWxsYVwifSx7XCJOYW1lXCI6XCJXaWxsaWFtIFNtYWxsYm9uZVwifSx7XCJOYW1lXCI6XCJTaGFuZSBMb25nXCJ9LHtcIk5hbWVcIjpcIllhbiBWYWxlcnlcIn0se1wiTmFtZVwiOlwiS2F5bmUgUmFtc2V5XCJ9LHtcIk5hbWVcIjpcIkpha2UgVm9raW5zXCJ9LHtcIk5hbWVcIjpcIkFsZXhhbmRyZSBKYW5rZXdpdHpcIn0se1wiTmFtZVwiOlwiRGFuIE5sdW5kdWx1XCJ9LHtcIk5hbWVcIjpcIk1pY2hhZWwgT2JhZmVtaVwifSx7XCJOYW1lXCI6XCJDYWxlYiBXYXR0c1wifSx7XCJOYW1lXCI6XCJBbGxhbiBUY2hhcHRjaGV0XCJ9LHtcIk5hbWVcIjpcIkJlbiBXaGl0ZVwifSx7XCJOYW1lXCI6XCJZdmVzIEJpc3NvdW1hXCJ9LHtcIk5hbWVcIjpcIkxld2lzIER1bmtcIn0se1wiTmFtZVwiOlwiTGVhbmRybyBUcm9zc2FyZFwifSx7XCJOYW1lXCI6XCJBZGFtIFdlYnN0ZXJcIn0se1wiTmFtZVwiOlwiTmVhbCBNYXVwYXlcIn0se1wiTmFtZVwiOlwiUGFzY2FsIEdyb8OfXCJ9LHtcIk5hbWVcIjpcIlJvYmVydCBTw6FuY2hlelwifSx7XCJOYW1lXCI6XCJKb8OrbCBWZWx0bWFuXCJ9LHtcIk5hbWVcIjpcIkRhbiBCdXJuXCJ9LHtcIk5hbWVcIjpcIlNvbGx5IE1hcmNoXCJ9LHtcIk5hbWVcIjpcIkRhbm55IFdlbGJlY2tcIn0se1wiTmFtZVwiOlwiQWRhbSBMYWxsYW5hXCJ9LHtcIk5hbWVcIjpcIkFsZXhpcyBNYWMgQWxsaXN0ZXJcIn0se1wiTmFtZVwiOlwiTWF0aGV3IFJ5YW5cIn0se1wiTmFtZVwiOlwiVGFyaXEgTGFtcHRleVwifSx7XCJOYW1lXCI6XCJTdGV2ZW4gQWx6YXRlXCJ9LHtcIk5hbWVcIjpcIkFhcm9uIENvbm5vbGx5XCJ9LHtcIk5hbWVcIjpcIkpha3ViIE1vZGVyXCJ9LHtcIk5hbWVcIjpcIkFsaXJlemEgSmFoYW5iYWtoc2hcIn0se1wiTmFtZVwiOlwiRGF2eSBQcsO2cHBlclwifSx7XCJOYW1lXCI6XCJCZXJuYXJkb1wifSx7XCJOYW1lXCI6XCJQZXJjeSBUYXVcIn0se1wiTmFtZVwiOlwiQW5kaSBaZXFpcmlcIn0se1wiTmFtZVwiOlwiSm9zw6kgSXpxdWllcmRvXCJ9LHtcIk5hbWVcIjpcIlJlZGEgS2hhZHJhXCJ9LHtcIk5hbWVcIjpcIkpheXNvbiBNb2x1bWJ5XCJ9LHtcIk5hbWVcIjpcIkFzaGxleSBXZXN0d29vZFwifSx7XCJOYW1lXCI6XCJKYW1lcyBUYXJrb3dza2lcIn0se1wiTmFtZVwiOlwiRHdpZ2h0IE1jTmVpbFwifSx7XCJOYW1lXCI6XCJNYXR0aGV3IExvd3RvblwifSx7XCJOYW1lXCI6XCJOaWNrIFBvcGVcIn0se1wiTmFtZVwiOlwiSm9zaCBCcm93bmhpbGxcIn0se1wiTmFtZVwiOlwiQ2hyaXMgV29vZFwifSx7XCJOYW1lXCI6XCJCZW4gTWVlXCJ9LHtcIk5hbWVcIjpcIkNoYXJsaWUgVGF5bG9yXCJ9LHtcIk5hbWVcIjpcIkrDs2hhbm4gQmVyZyBHdcOwbXVuZHNzb25cIn0se1wiTmFtZVwiOlwiTWF0xJtqIFZ5ZHJhXCJ9LHtcIk5hbWVcIjpcIkphY2sgQ29ya1wifSx7XCJOYW1lXCI6XCJBc2hsZXkgQmFybmVzXCJ9LHtcIk5hbWVcIjpcIkVyaWsgUGlldGVyc1wifSx7XCJOYW1lXCI6XCJKYXkgUm9kcmlndWV6XCJ9LHtcIk5hbWVcIjpcIlJvYmJpZSBCcmFkeVwifSx7XCJOYW1lXCI6XCJLZXZpbiBMb25nXCJ9LHtcIk5hbWVcIjpcIkJhaWxleSBQZWFjb2NrLUZhcnJlbGxcIn0se1wiTmFtZVwiOlwiUGhpbCBCYXJkc2xleVwifSx7XCJOYW1lXCI6XCJKaW1teSBEdW5uZVwifSx7XCJOYW1lXCI6XCJEYWxlIFN0ZXBoZW5zXCJ9LHtcIk5hbWVcIjpcIkpvc2ggQmVuc29uXCJ9LHtcIk5hbWVcIjpcIldpbGwgTm9ycmlzXCJ9LHtcIk5hbWVcIjpcIkpvZWwgTXVtYm9uZ29cIn0se1wiTmFtZVwiOlwiTGV3aXMgUmljaGFyZHNvblwifSx7XCJOYW1lXCI6XCJBbHBob25zZSBBcmVvbGFcIn0se1wiTmFtZVwiOlwiVG9zaW4gQWRhcmFiaW95b1wifSx7XCJOYW1lXCI6XCJBZGVtb2xhIExvb2ttYW5cIn0se1wiTmFtZVwiOlwiT2xhIEFpbmFcIn0se1wiTmFtZVwiOlwiSm9hY2hpbSBBbmRlcnNlblwifSx7XCJOYW1lXCI6XCJBbmRyZS1GcmFuayBaYW1ibyBBbmd1aXNzYVwifSx7XCJOYW1lXCI6XCJCb2JieSBSZWlkXCJ9LHtcIk5hbWVcIjpcIkl2YW4gQ2F2YWxlaXJvXCJ9LHtcIk5hbWVcIjpcIkhhcnJpc29uIFJlZWRcIn0se1wiTmFtZVwiOlwiQW50b25lZSBSb2JpbnNvblwifSx7XCJOYW1lXCI6XCJSdWJlbiBMb2Z0dXMtQ2hlZWtcIn0se1wiTmFtZVwiOlwiTWFyaW8gTGVtaW5hXCJ9LHtcIk5hbWVcIjpcIktlbm55IFRldGVcIn0se1wiTmFtZVwiOlwiQWxla3NhbmRhciBNaXRyb3ZpxIdcIn0se1wiTmFtZVwiOlwiSm9zaCBNYWphXCJ9LHtcIk5hbWVcIjpcIlRvbSBDYWlybmV5XCJ9LHtcIk5hbWVcIjpcIkpvZSBCcnlhblwifSx7XCJOYW1lXCI6XCJUaW0gUmVhbVwifSx7XCJOYW1lXCI6XCJKb3NoIE9ub21haFwifSx7XCJOYW1lXCI6XCJEZW5pcyBPZG9pXCJ9LHtcIk5hbWVcIjpcIk1pY2hhZWwgSGVjdG9yXCJ9LHtcIk5hbWVcIjpcIkZhYmlvIENhcnZhbGhvXCJ9LHtcIk5hbWVcIjpcIkFib3ViYWthciBLYW1hcmFcIn0se1wiTmFtZVwiOlwiTWFyZWsgUm9kw6FrXCJ9LHtcIk5hbWVcIjpcIk1heGltZSBMZSBNYXJjaGFuZFwifSx7XCJOYW1lXCI6XCJOZWVza2VucyBLZWJhbm9cIn0se1wiTmFtZVwiOlwiVGVyZW5jZSBLb25nb2xvXCJ9LHtcIk5hbWVcIjpcIlR5cmVzZSBGcmFuY29pc1wifSx7XCJOYW1lXCI6XCJTYW0gSm9obnN0b25lXCJ9LHtcIk5hbWVcIjpcIkRhcm5lbGwgRnVybG9uZ1wifSx7XCJOYW1lXCI6XCJTZW1pIEFqYXlpXCJ9LHtcIk5hbWVcIjpcIk1hdGhldXMgUGVyZWlyYVwifSx7XCJOYW1lXCI6XCJLeWxlIEJhcnRsZXlcIn0se1wiTmFtZVwiOlwiQ29ub3IgR2FsbGFnaGVyXCJ9LHtcIk5hbWVcIjpcIkNvbm9yIFRvd25zZW5kXCJ9LHtcIk5hbWVcIjpcIkRhcmEgTydTaGVhXCJ9LHtcIk5hbWVcIjpcIk1hdHQgUGhpbGxpcHNcIn0se1wiTmFtZVwiOlwiQ2FsbHVtIFJvYmluc29uXCJ9LHtcIk5hbWVcIjpcIlJvbWFpbmUgU2F3eWVyc1wifSx7XCJOYW1lXCI6XCJPa2F5IFlva3XFn2x1XCJ9LHtcIk5hbWVcIjpcIkpha2UgTGl2ZXJtb3JlXCJ9LHtcIk5hbWVcIjpcIkdyYWR5IERpYW5nYW5hXCJ9LHtcIk5hbWVcIjpcIkFpbnNsZXkgTWFpdGxhbmQtTmlsZXNcIn0se1wiTmFtZVwiOlwiTWJheWUgRGlhZ25lXCJ9LHtcIk5hbWVcIjpcIkthcmxhbiBHcmFudFwifSx7XCJOYW1lXCI6XCJLaWVyYW4gR2liYnNcIn0se1wiTmFtZVwiOlwiQnJhbmlzbGF2IEl2YW5vdmnEh1wifSx7XCJOYW1lXCI6XCJSb2JlcnQgU25vZGdyYXNzXCJ9LHtcIk5hbWVcIjpcIkZpbGlwIEtyb3Zpbm92acSHXCJ9LHtcIk5hbWVcIjpcIkxlZSBQZWx0aWVyXCJ9LHtcIk5hbWVcIjpcIkhhbCBSb2Jzb24tS2FudVwifSx7XCJOYW1lXCI6XCJLYW1pbCBHcm9zaWNraVwifSx7XCJOYW1lXCI6XCJLeWxlIEVkd2FyZHNcIn0se1wiTmFtZVwiOlwiRGF2aWQgQnV0dG9uXCJ9LHtcIk5hbWVcIjpcIkFobWVkIEhlZ2F6aVwifSx7XCJOYW1lXCI6XCJDaGFybGllIEF1c3RpblwifSx7XCJOYW1lXCI6XCJTYW0gRmllbGRcIn0se1wiTmFtZVwiOlwiUmVrZWVtIEhhcnBlclwifSx7XCJOYW1lXCI6XCJBYXJvbiBSYW1zZGFsZVwifSx7XCJOYW1lXCI6XCJHZW9yZ2UgQmFsZG9ja1wifSx7XCJOYW1lXCI6XCJDaHJpcyBCYXNoYW1cIn0se1wiTmFtZVwiOlwiRW5kYSBTdGV2ZW5zXCJ9LHtcIk5hbWVcIjpcIkpvaG4gRWdhblwifSx7XCJOYW1lXCI6XCJKb2huIEZsZWNrXCJ9LHtcIk5hbWVcIjpcIkRhdmlkIE1jR29sZHJpY2tcIn0se1wiTmFtZVwiOlwiT2xpdmVyIE5vcndvb2RcIn0se1wiTmFtZVwiOlwiRXRoYW4gQW1wYWR1XCJ9LHtcIk5hbWVcIjpcIkpvaG4gTHVuZHN0cmFtXCJ9LHtcIk5hbWVcIjpcIkJlbiBPc2Jvcm5cIn0se1wiTmFtZVwiOlwiT2xpdmVyIEJ1cmtlXCJ9LHtcIk5hbWVcIjpcIlNhbmRlciBCZXJnZVwifSx7XCJOYW1lXCI6XCJPbGl2ZXIgTWNCdXJuaWVcIn0se1wiTmFtZVwiOlwiUmhpYW4gQnJld3N0ZXJcIn0se1wiTmFtZVwiOlwiSmF5ZGVuIEJvZ2xlXCJ9LHtcIk5hbWVcIjpcIktlYW4gQnJ5YW5cIn0se1wiTmFtZVwiOlwiSmFjayBSb2JpbnNvblwifSx7XCJOYW1lXCI6XCJCaWxseSBTaGFycFwifSx7XCJOYW1lXCI6XCJNYXggTG93ZVwifSx7XCJOYW1lXCI6XCJQaGlsIEphZ2llbGthXCJ9LHtcIk5hbWVcIjpcIkRhbmllbCBKZWJiaXNvblwifSx7XCJOYW1lXCI6XCJMeXMgTW91c3NldFwifSx7XCJOYW1lXCI6XCJKYWNrIE8nQ29ubmVsbFwifSx7XCJOYW1lXCI6XCJJbGltYW4gTmRpYXllXCJ9LHtcIk5hbWVcIjpcIkFudHdvaW5lIEhhY2tmb3JkXCJ9LHtcIk5hbWVcIjpcIkZlbWkgU2VyaWtpXCJ9LHtcIk5hbWVcIjpcIkNyaXN0aWFubyBSb25hbGRvXCJ9LHtcIk5hbWVcIjpcIlRvbmV5XCJ9XSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBhdXRvQ29tcGxldGUoaW5wLCBhcnIpIHtcclxuICAvKnRoZSBhdXRvY29tcGxldGUgZnVuY3Rpb24gdGFrZXMgdHdvIGFyZ3VtZW50cyxcclxuICAgIHRoZSB0ZXh0IGZpZWxkIGVsZW1lbnQgYW5kIGFuIGFycmF5IG9mIHBvc3NpYmxlIGF1dG9jb21wbGV0ZWQgdmFsdWVzOiovXHJcbiAgbGV0IGN1cnJlbnRGb2N1cztcclxuICAvLyBleGVjdXRlIGEgZnVuY3Rpb24gd2hlbiBzb21lb25lIHdyaXRlcyBpbiB0aGUgdGV4dCBmaWVsZDpcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBsZXQgYSxcclxuICAgICAgYixcclxuICAgICAgaSxcclxuICAgICAgdmFsID0gdGhpcy52YWx1ZTtcclxuICAgIC8vIGNsb3NlIGFueSBhbHJlYWR5IG9wZW4gbGlzdHMgb2YgYXV0b2NvbXBsZXRlZCB2YWx1ZXNcclxuICAgIGNsb3NlQWxsTGlzdHMoKTtcclxuICAgIGlmICghdmFsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGN1cnJlbnRGb2N1cyA9IC0xO1xyXG4gICAgLy8gY3JlYXRlIGEgRElWIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGl0ZW1zICh2YWx1ZXMpOlxyXG4gICAgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICBhLnNldEF0dHJpYnV0ZShcImlkXCIsIHRoaXMuaWQgKyBcImF1dG9jb21wbGV0ZS1saXN0XCIpO1xyXG4gICAgYS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImF1dG9jb21wbGV0ZS1pdGVtc1wiKTtcclxuICAgIC8vIGFwcGVuZCB0aGUgRElWIGVsZW1lbnQgYXMgYSBjaGlsZCBvZiB0aGUgYXV0b2NvbXBsZXRlIGNvbnRhaW5lcjpcclxuICAgIHRoaXMucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChhKTtcclxuICAgIC8vLyBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheS4uLlxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgLy8gY2hlY2sgaWYgdGhlIGl0ZW0gY29udGFpbnMgdGhlIHNhbWUgbGV0dGVycyBhcyB0aGUgdGV4dCBmaWVsZCB2YWx1ZTogfHwgbm9ybWFsaXplZCB0byByZW1vdmUgYWNjZW50cy9kaWFjcml0aWNzXHJcbiAgICAgIGlmIChcclxuICAgICAgICBhcnJbaV1cclxuICAgICAgICAgIC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAubm9ybWFsaXplKFwiTkZEXCIpXHJcbiAgICAgICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcclxuICAgICAgICAgIC5pbmNsdWRlcyh2YWwudG9VcHBlckNhc2UoKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgLy8gY3JlYXRlIGEgRElWIGVsZW1lbnQgZm9yIGVhY2ggbWF0Y2hpbmcgZWxlbWVudDpcclxuICAgICAgICBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgICAgICBiLmlubmVySFRNTCA9IGFycltpXS5zbGljZSgwLCB2YWwubGVuZ3RoKTtcclxuICAgICAgICBiLmlubmVySFRNTCArPSBhcnJbaV0uc2xpY2UodmFsLmxlbmd0aCk7XHJcbiAgICAgICAgLy8gaW5zZXJ0IGEgaW5wdXQgZmllbGQgdGhhdCB3aWxsIGhvbGQgdGhlIGN1cnJlbnQgYXJyYXkgaXRlbSdzIHZhbHVlOlxyXG4gICAgICAgIGIuaW5uZXJIVE1MICs9IFwiPGlucHV0IHR5cGU9J2hpZGRlbicgdmFsdWU9J1wiICsgYXJyW2ldICsgXCInPlwiO1xyXG5cclxuICAgICAgICAvLyBleGVjdXRlIGEgZnVuY3Rpb24gd2hlbiBzb21lb25lIGNsaWNrcyBvbiB0aGUgaXRlbSB2YWx1ZSAoRElWIGVsZW1lbnQpOlxyXG4gICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAvLyBpbnNlcnQgdGhlIHZhbHVlIGZvciB0aGUgYXV0b2NvbXBsZXRlIHRleHQgZmllbGQ6XHJcbiAgICAgICAgICBpbnAudmFsdWUgPSB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIilbMF0udmFsdWU7XHJcbiAgICAgICAgICAvKmNsb3NlIHRoZSBsaXN0IG9mIGF1dG9jb21wbGV0ZWQgdmFsdWVzLFxyXG4gICAgICAgICAgKG9yIGFueSBvdGhlciBvcGVuIGxpc3RzIG9mIGF1dG9jb21wbGV0ZWQgdmFsdWVzOiovXHJcbiAgICAgICAgICBjbG9zZUFsbExpc3RzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYS5hcHBlbmRDaGlsZChiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vIGV4ZWN1dGUgYSBmdW5jdGlvbiBwcmVzc2VzIGEga2V5IG9uIHRoZSBrZXlib2FyZDpcclxuICBpbnAuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGxldCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCArIFwiYXV0b2NvbXBsZXRlLWxpc3RcIik7XHJcbiAgICBpZiAoeCkgeCA9IHguZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIik7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09IDQwKSB7XHJcbiAgICAgIC8qSWYgdGhlIGFycm93IERPV04ga2V5IGlzIHByZXNzZWQsXHJcbiAgICAgICAgaW5jcmVhc2UgdGhlIGN1cnJlbnRGb2N1cyB2YXJpYWJsZToqL1xyXG4gICAgICBjdXJyZW50Rm9jdXMrKztcclxuICAgICAgLy8gYW5kIGFuZCBtYWtlIHRoZSBjdXJyZW50IGl0ZW0gbW9yZSB2aXNpYmxlOlxyXG4gICAgICBhZGRBY3RpdmUoeCk7XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzOCkge1xyXG4gICAgICAvL3VwXHJcbiAgICAgIC8qSWYgdGhlIGFycm93IFVQIGtleSBpcyBwcmVzc2VkLFxyXG4gICAgICAgIGRlY3JlYXNlIHRoZSBjdXJyZW50Rm9jdXMgdmFyaWFibGU6Ki9cclxuICAgICAgY3VycmVudEZvY3VzLS07XHJcbiAgICAgIC8vIGFuZCBhbmQgbWFrZSB0aGUgY3VycmVudCBpdGVtIG1vcmUgdmlzaWJsZTpcclxuICAgICAgYWRkQWN0aXZlKHgpO1xyXG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMTMpIHtcclxuICAgICAgLy8gSWYgdGhlIEVOVEVSIGtleSBpcyBwcmVzc2VkLCBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkLFxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChjdXJyZW50Rm9jdXMgPiAtMSkge1xyXG4gICAgICAgIC8vIGFuZCBzaW11bGF0ZSBhIGNsaWNrIG9uIHRoZSBcImFjdGl2ZVwiIGl0ZW06XHJcbiAgICAgICAgaWYgKHgpIHhbY3VycmVudEZvY3VzXS5jbGljaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZnVuY3Rpb24gYWRkQWN0aXZlKHgpIHtcclxuICAgIC8vIGEgZnVuY3Rpb24gdG8gY2xhc3NpZnkgYW4gaXRlbSBhcyBcImFjdGl2ZVwiOlxyXG4gICAgaWYgKCF4KSByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyBzdGFydCBieSByZW1vdmluZyB0aGUgXCJhY3RpdmVcIiBjbGFzcyBvbiBhbGwgaXRlbXM6XHJcbiAgICByZW1vdmVBY3RpdmUoeCk7XHJcbiAgICBpZiAoY3VycmVudEZvY3VzID49IHgubGVuZ3RoKSBjdXJyZW50Rm9jdXMgPSAwO1xyXG4gICAgaWYgKGN1cnJlbnRGb2N1cyA8IDApIGN1cnJlbnRGb2N1cyA9IHgubGVuZ3RoIC0gMTtcclxuICAgIC8vIGFkZCBjbGFzcyBcImF1dG9jb21wbGV0ZS1hY3RpdmVcIjpcclxuICAgIHhbY3VycmVudEZvY3VzXS5jbGFzc0xpc3QuYWRkKFwiYXV0b2NvbXBsZXRlLWFjdGl2ZVwiKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVtb3ZlQWN0aXZlKHgpIHtcclxuICAgIC8vIGEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBcImFjdGl2ZVwiIGNsYXNzIGZyb20gYWxsIGF1dG9jb21wbGV0ZSBpdGVtczpcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB4W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhdXRvY29tcGxldGUtYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBjbG9zZUFsbExpc3RzKGVsbW50KSB7XHJcbiAgICAvKmNsb3NlIGFsbCBhdXRvY29tcGxldGUgbGlzdHMgaW4gdGhlIGRvY3VtZW50LFxyXG4gICAgICBleGNlcHQgdGhlIG9uZSBwYXNzZWQgYXMgYW4gYXJndW1lbnQ6Ki9cclxuICAgIGxldCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImF1dG9jb21wbGV0ZS1pdGVtc1wiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZWxtbnQgIT0geFtpXSAmJiBlbG1udCAhPSBpbnApIHtcclxuICAgICAgICB4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy8gZXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gc29tZW9uZSBjbGlja3MgaW4gdGhlIGRvY3VtZW50OlxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY2xvc2VBbGxMaXN0cyhlLnRhcmdldCk7XHJcbiAgfSk7XHJcbn1cclxuZXhwb3J0IHsgYXV0b0NvbXBsZXRlIH07XHJcbiIsImltcG9ydCB7IGdhbWVPdmVyIH0gZnJvbSBcIi4vZ2FtZU92ZXIuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBDb21wYXJlIHVzZXIgZ3Vlc3MgdG8gcmFuZG9tIHBsYXllci5cclxuICogQHBhcmFtIHtPYmplY3R9IHJuZFBsYXllciAtIFRoZSBQbGF5ZXIgaW5zdGFuY2Ugb2YgdGhlIHBsYXllciBjaG9zZW4gYXQgcmFuZG9tIG9uIGdhbWUgaW5pdGlhbGl6YXRpb24uXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB1c2VyR3Vlc3MgLSBUaGUgUGxheWVyIGluc3RhbmNlIG9mIHRoZSB1c2VyIGd1ZXNzLlxyXG4gKi9cclxuZnVuY3Rpb24gZGlzcGxheUd1ZXNzKHJuZFBsYXllciwgdXNlckd1ZXNzKSB7XHJcbiAgLy8gY3JlYXRlIERPTSBlbGVtZW50IGZvciB1c2VyIGd1ZXNzXHJcbiAgbGV0IHRhYmxlQ29udGFpbmVyID0gJChcIi50YWJsZV9fY29udGVudFwiKTtcclxuICBsZXQgdGFibGVSb3cgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJ0YWJsZV9fcm93XCIpO1xyXG4gIGxldCBuYW1lID0gJChcIjxkaXY+XCIpLmFwcGVuZCh1c2VyR3Vlc3MubmFtZSkuYWRkQ2xhc3MoXCJ0YWJsZV9fY2VsbFwiKTtcclxuICBsZXQgdGVhbSA9ICQoXCI8aW1nPlwiLCB7XHJcbiAgICBzcmM6IHVzZXJHdWVzcy50ZWFtSW1nU3JjLFxyXG4gICAgd2lkdGg6IFwiNDdweFwiLFxyXG4gICAgYWx0OiBgJHt1c2VyR3Vlc3MudGVhbX0gYmFkZ2UgbG9nb2AsXHJcbiAgfSk7XHJcbiAgbGV0IHRlYW1Db250YWluZXIgPSAkKFwiPGRpdj5cIiwgeyBjbGFzczogXCJ0YWJsZV9fY2VsbFwiIH0pLmFwcGVuZCh0ZWFtKTtcclxuICBsZXQgbmF0aW9uYWxpdHkgPSAkKFwiPGRpdj5cIilcclxuICAgIC5hcHBlbmQodXNlckd1ZXNzLm5hdGlvbmFsaXR5KVxyXG4gICAgLmFkZENsYXNzKFwidGFibGVfX2NlbGxcIik7XHJcbiAgbGV0IHBvc2l0aW9uID0gJChcIjxkaXY+XCIpLmFwcGVuZCh1c2VyR3Vlc3MucG9zaXRpb24pLmFkZENsYXNzKFwidGFibGVfX2NlbGxcIik7XHJcbiAgbGV0IGhlaWdodCA9ICQoXCI8ZGl2PlwiKS5hcHBlbmQodXNlckd1ZXNzLmdldEZlZXQoKSkuYWRkQ2xhc3MoXCJ0YWJsZV9fY2VsbFwiKTtcclxuICBsZXQgYWdlID0gJChcIjxkaXY+XCIpLmFwcGVuZCh1c2VyR3Vlc3MuYWdlKS5hZGRDbGFzcyhcInRhYmxlX19jZWxsXCIpO1xyXG5cclxuICAvLyBjaGVjayB0ZWFtXHJcbiAgaWYgKHJuZFBsYXllci50ZWFtID09IHVzZXJHdWVzcy50ZWFtKSB7XHJcbiAgICB0ZWFtQ29udGFpbmVyLmFkZENsYXNzKFwiZ3JlZW5cIik7XHJcbiAgfVxyXG4gIC8vIGNoZWNrIG5hdGlvbmFsaXR5XHJcbiAgaWYgKHJuZFBsYXllci5uYXRpb25hbGl0eSA9PSB1c2VyR3Vlc3MubmF0aW9uYWxpdHkpIHtcclxuICAgIG5hdGlvbmFsaXR5LmFkZENsYXNzKFwiZ3JlZW5cIik7XHJcbiAgfVxyXG4gIC8vY2hlY2sgcG9zaXRpb25cclxuICBpZiAocm5kUGxheWVyLnBvc2l0aW9uID09IHVzZXJHdWVzcy5wb3NpdGlvbikge1xyXG4gICAgcG9zaXRpb24uYWRkQ2xhc3MoXCJncmVlblwiKTtcclxuICB9XHJcblxyXG4gIC8vIGhlaWdodCBjaGVja1xyXG4gIGlmIChybmRQbGF5ZXIuaGVpZ2h0ID09IHVzZXJHdWVzcy5oZWlnaHQpIHtcclxuICAgIGhlaWdodC5hZGRDbGFzcyhcImdyZWVuXCIpO1xyXG4gIH1cclxuICBpZiAocm5kUGxheWVyLmdldEludGVnZXJIZWlnaHQoKSA+IHVzZXJHdWVzcy5nZXRJbnRlZ2VySGVpZ2h0KCkpIHtcclxuICAgIGhlaWdodC5hcHBlbmQoXCI8c3BhbiBjbGFzcz0nYXJyb3cnPiDihpE8L3NwYW4+XCIpO1xyXG4gIH1cclxuICBpZiAocm5kUGxheWVyLmdldEludGVnZXJIZWlnaHQoKSA8IHVzZXJHdWVzcy5nZXRJbnRlZ2VySGVpZ2h0KCkpIHtcclxuICAgIGhlaWdodC5hcHBlbmQoXCI8c3BhbiBjbGFzcz0nYXJyb3cnPiDihpM8L3NwYW4+XCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gYWdlIGNoZWNrXHJcbiAgaWYgKHJuZFBsYXllci5hZ2UgPT0gdXNlckd1ZXNzLmFnZSkge1xyXG4gICAgYWdlLmFkZENsYXNzKFwiZ3JlZW5cIik7XHJcbiAgfVxyXG4gIGlmIChybmRQbGF5ZXIuYWdlID4gdXNlckd1ZXNzLmFnZSkge1xyXG4gICAgYWdlLmFwcGVuZChcIjxzcGFuIGNsYXNzPSdhcnJvdyc+IOKGkTwvc3Bhbj5cIik7XHJcbiAgfVxyXG4gIGlmIChybmRQbGF5ZXIuYWdlIDwgdXNlckd1ZXNzLmFnZSkge1xyXG4gICAgYWdlLmFwcGVuZChcIjxzcGFuIGNsYXNzPSdhcnJvdyc+IOKGkzwvc3Bhbj5cIik7XHJcbiAgfVxyXG5cclxuICB0YWJsZVJvdy5hcHBlbmQobmFtZSwgdGVhbUNvbnRhaW5lciwgbmF0aW9uYWxpdHksIHBvc2l0aW9uLCBoZWlnaHQsIGFnZSk7XHJcbiAgdGFibGVDb250YWluZXIuYXBwZW5kKHRhYmxlUm93LmhpZGUoKS5mYWRlSW4oMTIwMCkpO1xyXG59XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5R3Vlc3MgfTtcclxuIiwiaW1wb3J0IHsgcm5kUGxheWVyLCB1c2VyR3Vlc3MgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZnVuY3Rpb24gZ2FtZU92ZXIoaXNXaW4pIHtcclxuICBpZiAoaXNXaW4pIHtcclxuICAgICQoXCIjc2VhcmNoLWZpZWxkXCIpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTsgLy8gZGlzYWJsZSBpbnB1dFxyXG5cclxuICAgIC8vIGNyZWF0ZSB3aW5uZXIgbW9kYWwgZWxlbWVudHNcclxuICAgIGxldCBoZWFkaW5nID0gJChcIjxoMT5cIikudGV4dChcIllvdSBHdWVzc2VkIENvcnJlY3RseSFcIik7XHJcbiAgICBsZXQgcGxheWVyTmFtZSA9ICQoXCI8cD5cIikudGV4dChybmRQbGF5ZXIubmFtZSk7XHJcbiAgICBsZXQgcGxheWVySW1nID0gJChcIjxpbWc+XCIsIHtcclxuICAgICAgc3JjOiBybmRQbGF5ZXIuaW1nU3JjLFxyXG4gICAgICBhbHQ6IGBIZWFkc2hvdCBpbWFnZSBvZiAke3JuZFBsYXllci5uYW1lfWAsXHJcbiAgICB9KTtcclxuICAgIGxldCBwbGF5QWdhaW5CdG4gPSAkKFwiPGJ1dHRvbj5cIilcclxuICAgICAgLnRleHQoXCJQbGF5IEFnYWluXCIpXHJcbiAgICAgIC5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgJChcIiNzdGlja3lcIikuYXBwZW5kKGhlYWRpbmcsIHBsYXllck5hbWUsIHBsYXllckltZywgcGxheUFnYWluQnRuKTtcclxuICAgIC8vIG9wZW4gbm9uLWNsb3NhYmxlIG1vZGFsXHJcbiAgICAkKFwiI3N0aWNreVwiKS5tb2RhbCh7XHJcbiAgICAgIGVzY2FwZUNsb3NlOiBmYWxzZSxcclxuICAgICAgY2xpY2tDbG9zZTogZmFsc2UsXHJcbiAgICAgIHNob3dDbG9zZTogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgJChcIiNzZWFyY2gtZmllbGRcIikucHJvcChcImRpc2FibGVkXCIsIHRydWUpOyAvLyBkaXNhYmxlIGlucHV0XHJcbiAgICAvLyBjcmVhdGUgbG9zZXIgbW9kYWwgZWxlbWVudHNcclxuICAgIGxldCBoZWFkaW5nID0gJChcIjxoMT5cIikudGV4dChcIllvdSBMb3NlIVwiKTtcclxuICAgIGxldCB0ZXh0ID0gJChcIjxwPlwiKS50ZXh0KFwiQW5zd2VyOlwiKTtcclxuICAgIGxldCBwbGF5ZXJOYW1lID0gJChcIjxwPlwiKS50ZXh0KHJuZFBsYXllci5uYW1lKTtcclxuICAgIGxldCBwbGF5ZXJJbWcgPSAkKFwiPGltZz5cIiwge1xyXG4gICAgICBzcmM6IHJuZFBsYXllci5pbWdTcmMsXHJcbiAgICAgIGFsdDogYEhlYWRzaG90IGltYWdlIG9mICR7cm5kUGxheWVyLm5hbWV9YCxcclxuICAgIH0pO1xyXG4gICAgbGV0IHBsYXlBZ2FpbkJ0biA9ICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAudGV4dChcIlBsYXkgQWdhaW5cIilcclxuICAgICAgLmNsaWNrKCgpID0+IHtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSk7XHJcbiAgICAkKFwiI3N0aWNreVwiKS5hcHBlbmQoaGVhZGluZywgdGV4dCwgcGxheWVyTmFtZSwgcGxheWVySW1nLCBwbGF5QWdhaW5CdG4pO1xyXG5cclxuICAgIC8vIG9wZW4gbm9uLWNsb3NhYmxlIG1vZGFsXHJcbiAgICAkKFwiI3N0aWNreVwiKS5tb2RhbCh7XHJcbiAgICAgIGVzY2FwZUNsb3NlOiBmYWxzZSxcclxuICAgICAgY2xpY2tDbG9zZTogZmFsc2UsXHJcbiAgICAgIHNob3dDbG9zZTogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdhbWVPdmVyIH07XHJcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlHdWVzcyB9IGZyb20gXCIuL2Rpc3BsYXlHdWVzc1wiO1xyXG5pbXBvcnQgeyBnYW1lT3ZlciB9IGZyb20gXCIuL2dhbWVPdmVyXCI7XHJcbmltcG9ydCB7IGdldFVzZXJHdWVzcyB9IGZyb20gXCIuL3NlYXJjaFBsYXllci5qc1wiO1xyXG5pbXBvcnQgKiBhcyBwbGF5ZXJzIGZyb20gXCIuL3BsYXllcnMuY3N2XCI7XHJcbmltcG9ydCB7IGF1dG9Db21wbGV0ZSB9IGZyb20gXCIuL2F1dG9Db21wbGV0ZVwiO1xyXG5cclxuY2xhc3MgUGxheWVyIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG5hbWUsXHJcbiAgICB0ZWFtLFxyXG4gICAgbmF0aW9uYWxpdHksXHJcbiAgICBwb3NpdGlvbixcclxuICAgIGhlaWdodCxcclxuICAgIGFnZSxcclxuICAgIGltZ1NyYyxcclxuICAgIHRlYW1JbWdTcmNcclxuICApIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRlYW0gPSB0ZWFtO1xyXG4gICAgdGhpcy5uYXRpb25hbGl0eSA9IG5hdGlvbmFsaXR5O1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLmFnZSA9IGFnZTtcclxuICAgIHRoaXMuaW1nU3JjID0gaW1nU3JjO1xyXG4gICAgdGhpcy50ZWFtSW1nU3JjID0gdGVhbUltZ1NyYztcclxuICB9XHJcblxyXG4gIGdldEludGVnZXJIZWlnaHQoKSB7XHJcbiAgICBsZXQgaW50ZWdlciA9IHBhcnNlSW50KHRoaXMuaGVpZ2h0LnNwbGl0KFwiIFwiKVswXSk7XHJcbiAgICByZXR1cm4gaW50ZWdlcjtcclxuICB9XHJcbiAgZ2V0RmVldCgpIHtcclxuICAgIGNvbnN0IHJlYWxGZWV0ID0gKHRoaXMuZ2V0SW50ZWdlckhlaWdodCgpICogMC4zOTM3KSAvIDEyO1xyXG4gICAgY29uc3QgZmVldCA9IE1hdGguZmxvb3IocmVhbEZlZXQpO1xyXG4gICAgY29uc3QgaW5jaGVzID0gTWF0aC5yb3VuZCgocmVhbEZlZXQgLSBmZWV0KSAqIDEyKTtcclxuICAgIHJldHVybiBmZWV0ICsgXCInXCIgKyBpbmNoZXMgKyAnXCInO1xyXG4gIH1cclxufVxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIG1ldGhvZDogXCJHRVRcIixcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIlgtUmFwaWRBUEktSG9zdFwiOiBcImFwaS1mb290YmFsbC12MS5wLnJhcGlkYXBpLmNvbVwiLFxyXG4gICAgXCJYLVJhcGlkQVBJLUtleVwiOiBcImJiMmJjZDk1ZjNtc2hlYTMwMWMyOGM3YWI2NmFwMTZmZjRmanNuZWVlMDIzNDI2YTUwXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmxldCBybmRQbGF5ZXIsIHVzZXJHdWVzcztcclxuKGFzeW5jIGZ1bmN0aW9uIGluaXRHYW1lKCkge1xyXG4gIGxldCByb3VuZCA9IDc7XHJcblxyXG4gIC8vIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yXHJcbiAgZnVuY3Rpb24gcmFuZG9tSW50RnJvbUludGVydmFsKG1pbiwgbWF4KSB7XHJcbiAgICAvLyBtaW4gYW5kIG1heCBpbmNsdWRlZFxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9hcGktZm9vdGJhbGwtdjEucC5yYXBpZGFwaS5jb20vdjMvcGxheWVycy90b3BzY29yZXJzP2xlYWd1ZT0zOSZzZWFzb249MjAyMVwiLFxyXG4gICAgICBvcHRpb25zXHJcbiAgICApO1xyXG5cclxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGxldCBhcnJMZW5ndGggPSBhd2FpdCBkYXRhLnJlc3BvbnNlLmxlbmd0aDtcclxuICAgIGNvbnN0IHJuZEludCA9IHJhbmRvbUludEZyb21JbnRlcnZhbCgwLCBhcnJMZW5ndGggLSAxKTtcclxuXHJcbiAgICAvLyBmZXRjaCByYW5kb20gcGxheWVyIGZyb20gdG9wIHNjb3JlcnMgcG9vbCAtLSBpZGVhIGlzIHRvIHJldHJpZXZlIHJhbmRvbSB3ZWxsIGtub3duIHBsYXllclxyXG4gICAgZGF0YSA9IGF3YWl0IGRhdGEucmVzcG9uc2Vbcm5kSW50XTtcclxuXHJcbiAgICAvLyBjcmVhdGUgb2JqZWN0IG9mIHJhbmRvbSBwbGF5ZXJcclxuICAgIHJuZFBsYXllciA9IG5ldyBQbGF5ZXIoXHJcbiAgICAgIGRhdGEucGxheWVyLm5hbWUsXHJcbiAgICAgIGRhdGEuc3RhdGlzdGljc1swXS50ZWFtLm5hbWUsXHJcbiAgICAgIGRhdGEucGxheWVyLm5hdGlvbmFsaXR5LFxyXG4gICAgICBkYXRhLnN0YXRpc3RpY3NbMF0uZ2FtZXMucG9zaXRpb24sXHJcbiAgICAgIGRhdGEucGxheWVyLmhlaWdodCxcclxuICAgICAgZGF0YS5wbGF5ZXIuYWdlLFxyXG4gICAgICBkYXRhLnBsYXllci5waG90byxcclxuICAgICAgZGF0YS5zdGF0aXN0aWNzWzBdLnRlYW0ubG9nb1xyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHJuZFBsYXllcik7XHJcblxyXG4gICAgLy8gRk9SIERFVkVMT1BNRU5UIE9OTFlcclxuICAgIC8vIHJuZFBsYXllciA9IG5ldyBQbGF5ZXIoXHJcbiAgICAvLyAgIFwiTS4gUmFzaGZvcmRcIixcclxuICAgIC8vICAgXCJjaGVsc2VhXCIsXHJcbiAgICAvLyAgIFwibWV4aWNvXCIsXHJcbiAgICAvLyAgIFwiQXR0YWNrZXJcIixcclxuICAgIC8vICAgXCIxMjcgY21cIixcclxuICAgIC8vICAgXCIyNFwiLFxyXG4gICAgLy8gICBcImh0dHBzOi8vbWVkaWEuYXBpLXNwb3J0cy5pby9mb290YmFsbC9wbGF5ZXJzLzMyNDcucG5nXCIsXHJcbiAgICAvLyAgIFwiaHR0cHM6Ly9tZWRpYS5hcGktc3BvcnRzLmlvL2Zvb3RiYWxsL3RlYW1zLzUyLnBuZ1wiXHJcbiAgICAvLyApO1xyXG4gICAgLy8gdXNlckd1ZXNzID0gbmV3IFBsYXllcihcclxuICAgIC8vICAgXCJXLiBaYWhhXCIsXHJcbiAgICAvLyAgIFwiQ3J5c3RhbCBQYWxhY2VcIixcclxuICAgIC8vICAgXCJDb3RlIGRlLiBJdm9yeVwiLFxyXG4gICAgLy8gICBcIkF0dGFja2VyXCIsXHJcbiAgICAvLyAgIFwiMTgwIGNtXCIsXHJcbiAgICAvLyAgIFwiMzBcIixcclxuICAgIC8vICAgXCJodHRwczovL21lZGlhLmFwaS1zcG9ydHMuaW8vZm9vdGJhbGwvcGxheWVycy8zMjQ3LnBuZ1wiLFxyXG4gICAgLy8gICBcImh0dHBzOi8vbWVkaWEuYXBpLXNwb3J0cy5pby9mb290YmFsbC90ZWFtcy81Mi5wbmdcIlxyXG4gICAgLy8gKTtcclxuXHJcbiAgICAvLyBvbiBjbGljayBvZiBzdWJtaXQgYnV0dG9uIGdldCB1c2VyIGd1ZXNzIGFuZCB2YWxpZGF0ZVxyXG4gICAgJChcIiNzdWJtaXQtZ3Vlc3NcIikuY2xpY2soYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIC8vIGNsZWFyIGVycm9yXHJcbiAgICAgICQoXCIuZXJyXCIpLnRleHQoXCJcIik7XHJcblxyXG4gICAgICAvLyBnZXQgdXNlciBndWVzcyBvYmplY3QgZnJvbSBzZWFyY2ggcXVlcnlcclxuICAgICAgdXNlckd1ZXNzID0gYXdhaXQgZ2V0VXNlckd1ZXNzKCk7XHJcblxyXG4gICAgICAvLyBpZiBwbGF5ZXIgcXVlcnkgZm91bmQgYW5kIGlzIG5vdCBsYXN0IHJvdW5kXHJcbiAgICAgIGlmICh1c2VyR3Vlc3MgIT09IHVuZGVmaW5lZCAmJiByb3VuZCA+IDEpIHtcclxuICAgICAgICByb3VuZC0tO1xyXG4gICAgICAgICQoXCIuYXR0ZW1wdHNcIikudGV4dChcIlwiKTtcclxuICAgICAgICAkKFwiI3NlYXJjaC1maWVsZFwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgJChcIi5hdHRlbXB0c1wiKS50ZXh0KHJvdW5kKTtcclxuICAgICAgICBkaXNwbGF5R3Vlc3Mocm5kUGxheWVyLCB1c2VyR3Vlc3MpO1xyXG5cclxuICAgICAgICAvLyB1c2VyIGd1ZXNzZXMgY29ycmVjdGx5XHJcbiAgICAgICAgaWYgKHJuZFBsYXllci5uYW1lID09IHVzZXJHdWVzcy5uYW1lKSB7XHJcbiAgICAgICAgICBnYW1lT3Zlcih0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHBsYXllciBub3QgZm91bmQgaW4gc2VhcmNoIGRpc3BsYXkgZXJyb3JcclxuICAgICAgfSBlbHNlIGlmICh1c2VyR3Vlc3MgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJChcIi5lcnJcIikudGV4dChcIk5vIHBsYXllciBmb3VuZC5cIik7XHJcbiAgICAgICAgJChcIiNzZWFyY2gtZmllbGRcIikudmFsKFwiXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJvdW5kID09IDEpIHtcclxuICAgICAgICByb3VuZC0tO1xyXG4gICAgICAgICQoXCIjc2VhcmNoLWZpZWxkXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAkKFwiLmF0dGVtcHRzXCIpLnRleHQoXCJcIik7XHJcbiAgICAgICAgJChcIi5hdHRlbXB0c1wiKS50ZXh0KHJvdW5kKTtcclxuICAgICAgICBpZiAocm5kUGxheWVyLm5hbWUgIT09IHVzZXJHdWVzcy5uYW1lKSB7XHJcbiAgICAgICAgICBnYW1lT3ZlcihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChybmRQbGF5ZXIubmFtZSA9PSB1c2VyR3Vlc3MubmFtZSkge1xyXG4gICAgICAgICAgZ2FtZU92ZXIodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxuXHJcbiAgLy8gY3JlYXRlIGFycmF5IG9mIHBsYXllcnMgZnJvbSBwbGF5ZXJzLmNzdiBmb3IgYXV0byBjb21wbGV0ZVxyXG4gIGxldCBwbGF5ZXJBcnJheSA9IFtdO1xyXG4gIHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XHJcbiAgICBwbGF5ZXJBcnJheS5wdXNoKHBsYXllci5OYW1lKTtcclxuICB9KTtcclxuICAvLyBpbml0aWFsaXplIGF1dG9jb21wbGV0ZVxyXG4gIGF1dG9Db21wbGV0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1maWVsZFwiKSwgcGxheWVyQXJyYXkpO1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgUGxheWVyLCBybmRQbGF5ZXIsIHVzZXJHdWVzcywgb3B0aW9ucyB9O1xyXG4iLCJpbXBvcnQgeyBQbGF5ZXIsIG9wdGlvbnMgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckd1ZXNzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgc2VhcmNoSW5wdXQgPSAkKFwiI3NlYXJjaC1maWVsZFwiKS52YWwoKTtcclxuICAgIC8vIG5vcm1hbGl6ZWQgdG8gcmVtb3ZlIGFjY2VudHMvZGlhY3JpdGljc1xyXG4gICAgc2VhcmNoSW5wdXQgPSBzZWFyY2hJbnB1dFxyXG4gICAgICAubm9ybWFsaXplKFwiTkZEXCIpXHJcbiAgICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKVxyXG4gICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgIHNlYXJjaElucHV0ID0gZW5jb2RlVVJJKHNlYXJjaElucHV0KTtcclxuXHJcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS1mb290YmFsbC12MS5wLnJhcGlkYXBpLmNvbS92My9wbGF5ZXJzP2xlYWd1ZT0zOSZzZWFyY2g9JHtzZWFyY2hJbnB1dH1gLFxyXG4gICAgICBvcHRpb25zXHJcbiAgICApO1xyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgZGF0YSA9IGRhdGEucmVzcG9uc2VbMF07XHJcbiAgICAvLyBjcmVhdGUgdXNlciBndWVzcyBvYmplY3RcclxuICAgIGxldCB1c2VyR3Vlc3MgPSBuZXcgUGxheWVyKFxyXG4gICAgICBkYXRhLnBsYXllci5uYW1lLFxyXG4gICAgICBkYXRhLnN0YXRpc3RpY3NbMF0udGVhbS5uYW1lLFxyXG4gICAgICBkYXRhLnBsYXllci5uYXRpb25hbGl0eSxcclxuICAgICAgZGF0YS5zdGF0aXN0aWNzWzBdLmdhbWVzLnBvc2l0aW9uLFxyXG4gICAgICBkYXRhLnBsYXllci5oZWlnaHQsXHJcbiAgICAgIGRhdGEucGxheWVyLmFnZSxcclxuICAgICAgZGF0YS5wbGF5ZXIucGhvdG8sXHJcbiAgICAgIGRhdGEuc3RhdGlzdGljc1swXS50ZWFtLmxvZ29cclxuICAgICk7XHJcbiAgICByZXR1cm4gdXNlckd1ZXNzO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldFVzZXJHdWVzcyB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=