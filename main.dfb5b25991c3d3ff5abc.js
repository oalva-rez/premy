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
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    let a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/

    for (i = 0; i < arr.length; i++) {
      /*check if the item contains the same letters as the text field value: || normalized to remove accents/diacritics*/
      if (
        arr[i]
          .toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(val.toUpperCase())
      ) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        b.innerHTML = arr[i].slice(0, val.length);
        b.innerHTML += arr[i].slice(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
                        (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    let x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
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
  /*execute a function when someone clicks in the document:*/
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


function displayGuess(rndPlayer, userGuess) {
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "getRndPlayer": () => (/* binding */ getRndPlayer),
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
async function getRndPlayer() {
  let round = 7;

  // random number generator
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  try {
    // fetch random player from top scorers pool -- idea is to retrieve random well known player
    const res = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2021",
      options
    );
    let data = await res.json();
    console.log(data);

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
      $(".err").text("");
      // get user guess object from search query
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
    });
  } catch (err) {
    console.log(err);
  }

  // create array of players from players.csv for autocomplete
  let playerArray = [];
  _players_csv__WEBPACK_IMPORTED_MODULE_4__.forEach((player) => {
    playerArray.push(player.Name);
  });
  // initialize autocomplete
  (0,_autoComplete__WEBPACK_IMPORTED_MODULE_5__.autoComplete)(document.getElementById("search-field"), playerArray);
}

getRndPlayer();




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
    searchInput = searchInput
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    searchInput = encodeURI(searchInput);
    console.log(searchInput);

    let res = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/players?league=39&search=${searchInput}`,
      _index_js__WEBPACK_IMPORTED_MODULE_0__.options
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1CQUFtQixFQUFFLDJCQUEyQixFQUFFLHVCQUF1QixFQUFFLDBCQUEwQixFQUFFLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLDZCQUE2QixFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFLHlCQUF5QixFQUFFLDZCQUE2QixFQUFFLDBCQUEwQixFQUFFLHVCQUF1QixFQUFFLGdDQUFnQyxFQUFFLDZCQUE2QixFQUFFLGlCQUFpQixFQUFFLHlCQUF5QixFQUFFLG9CQUFvQixFQUFFLGlCQUFpQixFQUFFLDBCQUEwQixFQUFFLDBCQUEwQixFQUFFLDRCQUE0QixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLHlCQUF5QixFQUFFLHlCQUF5QixFQUFFLGdCQUFnQixFQUFFLHVCQUF1QixFQUFFLHlCQUF5QixFQUFFLGlDQUFpQyxFQUFFLHNCQUFzQixFQUFFLDJCQUEyQixFQUFFLHlCQUF5QixFQUFFLDJCQUEyQixFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLDBCQUEwQixFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLDJCQUEyQixFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFLHdCQUF3QixFQUFFLHVCQUF1QixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLHNCQUFzQixFQUFFLHlCQUF5QixFQUFFLDBCQUEwQixFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLHNCQUFzQixFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixFQUFFLDBCQUEwQixFQUFFLG9CQUFvQixFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLDJCQUEyQixFQUFFLDBCQUEwQixFQUFFLHlCQUF5QixFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLHlCQUF5QixFQUFFLHlCQUF5QixFQUFFLDJCQUEyQixFQUFFLHNCQUFzQixFQUFFLDBCQUEwQixFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFLHlCQUF5QixFQUFFLDBCQUEwQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLG1DQUFtQyxFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLDRCQUE0QixFQUFFLDZCQUE2QixFQUFFLHVCQUF1QixFQUFFLDBCQUEwQixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLGdDQUFnQyxFQUFFLHVCQUF1QixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLHNCQUFzQixFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLHVCQUF1QixFQUFFLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLHVCQUF1QixFQUFFLDhCQUE4QixFQUFFLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLHdCQUF3QixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFLHlCQUF5QixFQUFFLDBCQUEwQixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLHFCQUFxQixFQUFFLCtCQUErQixFQUFFLHlCQUF5QixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLDRCQUE0QixFQUFFLHVCQUF1QixFQUFFLDBCQUEwQixFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSw4QkFBOEIsRUFBRSwwQkFBMEIsRUFBRSwyQkFBMkIsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRSwyQkFBMkIsRUFBRSwwQkFBMEIsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSw0QkFBNEIsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSxnQ0FBZ0MsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSw0QkFBNEIsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSw2QkFBNkIsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRSxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSwyQkFBMkIsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSw0QkFBNEIsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSxpQkFBaUIsRUFBRSw0QkFBNEIsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSwwQkFBMEIsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSwyQkFBMkIsRUFBRSxxQkFBcUIsRUFBRSw2QkFBNkIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSw4QkFBOEIsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSwyQkFBMkIsRUFBRSxzQkFBc0IsRUFBRSwwQkFBMEIsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUIsRUFBRSw0QkFBNEIsRUFBRSx1QkFBdUIsRUFBRSw0QkFBNEIsRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSwyQkFBMkIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSw2QkFBNkIsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRSxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSwwQkFBMEIsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSw2QkFBNkIsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSw2QkFBNkIsRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRSx3QkFBd0IsRUFBRSxvQkFBb0IsRUFBRSxpQkFBaUIsRUFBRSx3QkFBd0IsRUFBRSxpQ0FBaUMsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxnQ0FBZ0MsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBRSwwQkFBMEIsRUFBRSxvQ0FBb0MsRUFBRSxvQkFBb0IsRUFBRSx3QkFBd0IsRUFBRSx1QkFBdUIsRUFBRSwwQkFBMEIsRUFBRSw0QkFBNEIsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSw2QkFBNkIsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSwwQkFBMEIsRUFBRSxxQkFBcUIsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSxnQ0FBZ0MsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSw0QkFBNEIsRUFBRSwwQkFBMEIsRUFBRSwwQkFBMEIsRUFBRSxxQkFBcUIsRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSwwQkFBMEIsRUFBRSx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRSx3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QTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BsYXllcnMuY3N2Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXV0b0NvbXBsZXRlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXlHdWVzcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nYW1lT3Zlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZWFyY2hQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiA2MHB4IDFmciA0MHB4IC8gMWZyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkMGNjNjI7XFxyXFxufVxcclxcbmhlYWRlcixcXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDU1NDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmViYXMgTmV1ZVxcXCIsIGN1cnNpdmU7XFxyXFxufVxcclxcbmZvb3RlciB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuZm9vdGVyIGEge1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NDUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtYWluICovXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcbm1haW4gaDIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxubWFpbiBoMyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5tYWluIGlucHV0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG4uZXJyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjQzLCA4MiwgODIpO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDkwcHg7XFxyXFxufVxcclxcbi5zdWJtaXNzaW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbiNzdWJtaXQtZ3Vlc3Mge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDU1NDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogOTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi8qIHBsYXllciB0YWJsZSAqL1xcclxcbi50YWJsZV9fY29udGVudCA+ICosXFxyXFxuLnRhYmxlX190b3Age1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDIwMHB4IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xcclxcbn1cXHJcXG4udGFibGVfX2NvbnRlbnQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuLnRhYmxlX19yb3cgPiAqOmZpcnN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcbi50YWJsZV9fdG9wIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTVkMGNjO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjNDQ0NTU0O1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGVfX2NvbnRlbnQgLnRhYmxlX19jZWxsOm5vdCgudGFibGVfX2NlbGw6bGFzdC1jaGlsZCkge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbn1cXHJcXG4udGFibGVfX2NvbnRlbnQgLnRhYmxlX19jZWxsIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAxODBkZWcsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgLTYwJSxcXHJcXG4gICAgcmdiYSg2OCwgNjksIDg0LCAwLjEpIDUwJSxcXHJcXG4gICAgcmdiYSg2OCwgNjksIDg0LCAwLjEpIDE1MCVcXHJcXG4gICk7XFxyXFxufVxcclxcbi50YWJsZV9fcm93ID4gLnRhYmxlX19jZWxsOm5vdCgudGFibGVfX2NlbGw6bnRoLWNoaWxkKDIpKSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxyXFxufVxcclxcbi50YWJsZV9fcm93ID4gLnRhYmxlX19jZWxsOm50aC1jaGlsZCgyKSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uZ3JlZW4ge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAxODBkZWcsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgLTYwJSxcXHJcXG4gICAgcmdiYSg3NywgMjM1LCA3MywgMC42NjE5NjkwMTEyMzczMDc0KSA1MCUsXFxyXFxuICAgIHJnYmEoNzcsIDIzNSwgNzMsIDAuNjYxOTY5MDExMjM3MzA3NCkgMTAwJVxcclxcbiAgKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uYXJyb3cge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi8qIG1vZGFsICovXFxyXFxuI3N0aWNreSA+ICoge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4jc3RpY2t5IGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NTU0ZTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jc3RpY2t5IGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NTU0NzM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODVweCkge1xcclxcbiAgLnRhYmxlX19yb3cge1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA0MHB4IDFmciAvIDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xcclxcbiAgfVxcclxcbiAgLnRhYmxlX190b3Age1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxMDBweCAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcXHJcXG4gIH1cXHJcXG4gIC50YWJsZV9fdG9wID4gKjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAudGFibGVfX3JvdyA+ICo6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIC0xO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNzQpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTEwcHgpIHtcXHJcXG4gIC50YWJsZV9fcm93IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNDBweCAxZnIgLyA3MHB4IDcwcHggNzBweCA3MHB4IDcwcHg7XFxyXFxuICB9XFxyXFxuICAudGFibGVfX3RvcCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDcwcHggNzBweCA3MHB4IDcwcHggNzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjc5cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogIzQ0NDU1NDtcXHJcXG4gIH1cXHJcXG4gIC50YWJsZV9fcm93ID4gLnRhYmxlX19jZWxsOm5vdCgudGFibGVfX2NlbGw6bnRoLWNoaWxkKDIpKSB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gIH1cXHJcXG4gIC50YWJsZV9fcm93ID4gLnRhYmxlX19jZWxsOm50aC1jaGlsZCg0KSB7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogYXV0byBjb21wbGV0ZSAqL1xcclxcblxcclxcbi5hdXRvY29tcGxldGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG4uYXV0b2NvbXBsZXRlLWl0ZW1zIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgdG9wOiAxMDAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG4uYXV0b2NvbXBsZXRlLWl0ZW1zID4gKjpub3QoKjpudGgtY2hpbGQoLW4gKyA4KSkge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmF1dG9jb21wbGV0ZS1pdGVtcyBkaXYge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcXHJcXG59XFxyXFxuLmF1dG9jb21wbGV0ZS1pdGVtcyBkaXY6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcXHJcXG59XFxyXFxuLmF1dG9jb21wbGV0ZS1hY3RpdmUge1xcclxcbiAgLyp3aGVuIG5hdmlnYXRpbmcgdGhyb3VnaCB0aGUgaXRlbXMgdXNpbmcgdGhlIGFycm93IGtleXM6Ki9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ1NTQgIWltcG9ydGFudDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3QjtBQUNBOztFQUVFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjs7RUFFRSxhQUFhO0VBQ2Isd0RBQXdEO0FBQzFEO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25COzs7OztHQUtDO0FBQ0g7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0U7Ozs7O2NBS1k7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBLFVBQVU7QUFDVjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFO0lBQ0UsdURBQXVEO0VBQ3pEO0VBQ0E7SUFDRSxrREFBa0Q7RUFDcEQ7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztFQUM5QztBQUNGO0FBQ0E7RUFDRTtJQUNFLGtEQUFrRDtFQUNwRDtFQUNBO0lBQ0UsNkNBQTZDO0lBQzdDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDBEQUEwRDtFQUMxRCxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiA2MHB4IDFmciA0MHB4IC8gMWZyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkMGNjNjI7XFxyXFxufVxcclxcbmhlYWRlcixcXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDU1NDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmViYXMgTmV1ZVxcXCIsIGN1cnNpdmU7XFxyXFxufVxcclxcbmZvb3RlciB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuZm9vdGVyIGEge1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NDUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtYWluICovXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcbm1haW4gaDIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxubWFpbiBoMyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5tYWluIGlucHV0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG4uZXJyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjQzLCA4MiwgODIpO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDkwcHg7XFxyXFxufVxcclxcbi5zdWJtaXNzaW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbiNzdWJtaXQtZ3Vlc3Mge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDU1NDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogOTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi8qIHBsYXllciB0YWJsZSAqL1xcclxcbi50YWJsZV9fY29udGVudCA+ICosXFxyXFxuLnRhYmxlX190b3Age1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAvIDIwMHB4IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xcclxcbn1cXHJcXG4udGFibGVfX2NvbnRlbnQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuLnRhYmxlX19yb3cgPiAqOmZpcnN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcbi50YWJsZV9fdG9wIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTVkMGNjO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjNDQ0NTU0O1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGVfX2NvbnRlbnQgLnRhYmxlX19jZWxsOm5vdCgudGFibGVfX2NlbGw6bGFzdC1jaGlsZCkge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbn1cXHJcXG4udGFibGVfX2NvbnRlbnQgLnRhYmxlX19jZWxsIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAxODBkZWcsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgLTYwJSxcXHJcXG4gICAgcmdiYSg2OCwgNjksIDg0LCAwLjEpIDUwJSxcXHJcXG4gICAgcmdiYSg2OCwgNjksIDg0LCAwLjEpIDE1MCVcXHJcXG4gICk7XFxyXFxufVxcclxcbi50YWJsZV9fcm93ID4gLnRhYmxlX19jZWxsOm5vdCgudGFibGVfX2NlbGw6bnRoLWNoaWxkKDIpKSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxyXFxufVxcclxcbi50YWJsZV9fcm93ID4gLnRhYmxlX19jZWxsOm50aC1jaGlsZCgyKSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uZ3JlZW4ge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAxODBkZWcsXFxyXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgLTYwJSxcXHJcXG4gICAgcmdiYSg3NywgMjM1LCA3MywgMC42NjE5NjkwMTEyMzczMDc0KSA1MCUsXFxyXFxuICAgIHJnYmEoNzcsIDIzNSwgNzMsIDAuNjYxOTY5MDExMjM3MzA3NCkgMTAwJVxcclxcbiAgKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uYXJyb3cge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi8qIG1vZGFsICovXFxyXFxuI3N0aWNreSA+ICoge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4jc3RpY2t5IGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NTU0ZTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jc3RpY2t5IGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NTU0NzM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3ODVweCkge1xcclxcbiAgLnRhYmxlX19yb3cge1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA0MHB4IDFmciAvIDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xcclxcbiAgfVxcclxcbiAgLnRhYmxlX190b3Age1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxMDBweCAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcXHJcXG4gIH1cXHJcXG4gIC50YWJsZV9fdG9wID4gKjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAudGFibGVfX3JvdyA+ICo6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIC0xO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNzQpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTEwcHgpIHtcXHJcXG4gIC50YWJsZV9fcm93IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNDBweCAxZnIgLyA3MHB4IDcwcHggNzBweCA3MHB4IDcwcHg7XFxyXFxuICB9XFxyXFxuICAudGFibGVfX3RvcCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDcwcHggNzBweCA3MHB4IDcwcHggNzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjc5cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogIzQ0NDU1NDtcXHJcXG4gIH1cXHJcXG4gIC50YWJsZV9fcm93ID4gLnRhYmxlX19jZWxsOm5vdCgudGFibGVfX2NlbGw6bnRoLWNoaWxkKDIpKSB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gIH1cXHJcXG4gIC50YWJsZV9fcm93ID4gLnRhYmxlX19jZWxsOm50aC1jaGlsZCg0KSB7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogYXV0byBjb21wbGV0ZSAqL1xcclxcblxcclxcbi5hdXRvY29tcGxldGUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG4uYXV0b2NvbXBsZXRlLWl0ZW1zIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgdG9wOiAxMDAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG4uYXV0b2NvbXBsZXRlLWl0ZW1zID4gKjpub3QoKjpudGgtY2hpbGQoLW4gKyA4KSkge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmF1dG9jb21wbGV0ZS1pdGVtcyBkaXYge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcXHJcXG59XFxyXFxuLmF1dG9jb21wbGV0ZS1pdGVtcyBkaXY6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcXHJcXG59XFxyXFxuLmF1dG9jb21wbGV0ZS1hY3RpdmUge1xcclxcbiAgLyp3aGVuIG5hdmlnYXRpbmcgdGhyb3VnaCB0aGUgaXRlbXMgdXNpbmcgdGhlIGFycm93IGtleXM6Ki9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ1NTQgIWltcG9ydGFudDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBbe1wiTmFtZVwiOlwiTWFzb24gTW91bnRcIn0se1wiTmFtZVwiOlwiRWRvdWFyZCBNZW5keVwifSx7XCJOYW1lXCI6XCJUaW1vIFdlcm5lclwifSx7XCJOYW1lXCI6XCJCZW4gQ2hpbHdlbGxcIn0se1wiTmFtZVwiOlwiUmVlY2UgSmFtZXNcIn0se1wiTmFtZVwiOlwiQ8Opc2FyIEF6cGlsaWN1ZXRhXCJ9LHtcIk5hbWVcIjpcIk4nR29sbyBLYW50w6lcIn0se1wiTmFtZVwiOlwiSm9yZ2luaG9cIn0se1wiTmFtZVwiOlwiVGhpYWdvIFNpbHZhXCJ9LHtcIk5hbWVcIjpcIkt1cnQgWm91bWFcIn0se1wiTmFtZVwiOlwiTWF0ZW8gS292YcSNacSHXCJ9LHtcIk5hbWVcIjpcIkFudG9uaW8gUsO8ZGlnZXJcIn0se1wiTmFtZVwiOlwiQ2hyaXN0aWFuIFB1bGlzaWNcIn0se1wiTmFtZVwiOlwiS2FpIEhhdmVydHpcIn0se1wiTmFtZVwiOlwiQW5kcmVhcyBDaHJpc3RlbnNlblwifSx7XCJOYW1lXCI6XCJIYWtpbSBaaXllY2hcIn0se1wiTmFtZVwiOlwiVGFtbXkgQWJyYWhhbVwifSx7XCJOYW1lXCI6XCJNYXJjb3MgQWxvbnNvXCJ9LHtcIk5hbWVcIjpcIkNhbGx1bSBIdWRzb24tT2RvaVwifSx7XCJOYW1lXCI6XCJPbGl2aWVyIEdpcm91ZFwifSx7XCJOYW1lXCI6XCJLZXBhIEFycml6YWJhbGFnYVwifSx7XCJOYW1lXCI6XCJCaWxseSBHaWxtb3VyXCJ9LHtcIk5hbWVcIjpcIldpbGx5IENhYmFsbGVyb1wifSx7XCJOYW1lXCI6XCJSdWJlbiBMb2Z0dXMtQ2hlZWtcIn0se1wiTmFtZVwiOlwiRW1lcnNvbiBQYWxtaWVyaVwifSx7XCJOYW1lXCI6XCJGaWtheW8gVG9tb3JpXCJ9LHtcIk5hbWVcIjpcIlJvc3MgQmFya2xleVwifSx7XCJOYW1lXCI6XCJFZGVyc29uXCJ9LHtcIk5hbWVcIjpcIlLDumJlbiBEaWFzXCJ9LHtcIk5hbWVcIjpcIlJvZHJpXCJ9LHtcIk5hbWVcIjpcIlJhaGVlbSBTdGVybGluZ1wifSx7XCJOYW1lXCI6XCJKb8OjbyBDYW5jZWxvXCJ9LHtcIk5hbWVcIjpcIkJlcm5hcmRvIFNpbHZhXCJ9LHtcIk5hbWVcIjpcIsSwbGtheSBHw7xuZG/En2FuXCJ9LHtcIk5hbWVcIjpcIktldmluIERlIEJydXluZVwifSx7XCJOYW1lXCI6XCJSaXlhZCBNYWhyZXpcIn0se1wiTmFtZVwiOlwiR2FicmllbCBKZXN1c1wifSx7XCJOYW1lXCI6XCJLeWxlIFdhbGtlclwifSx7XCJOYW1lXCI6XCJKb2huIFN0b25lc1wifSx7XCJOYW1lXCI6XCJQaGlsIEZvZGVuXCJ9LHtcIk5hbWVcIjpcIk9sZWtzYW5kciBaaW5jaGVua29cIn0se1wiTmFtZVwiOlwiRmVycsOhbiBUb3JyZXNcIn0se1wiTmFtZVwiOlwiQXltZXJpYyBMYXBvcnRlXCJ9LHtcIk5hbWVcIjpcIkZlcm5hbmRpbmhvXCJ9LHtcIk5hbWVcIjpcIkJlbmphbWluIE1lbmR5XCJ9LHtcIk5hbWVcIjpcIk5hdGhhbiBBa8OpXCJ9LHtcIk5hbWVcIjpcIlNlcmdpbyBBZ8O8ZXJvXCJ9LHtcIk5hbWVcIjpcIkVyaWMgR2FyY8OtYVwifSx7XCJOYW1lXCI6XCJTY290dCBDYXJzb25cIn0se1wiTmFtZVwiOlwiWmFjayBTdGVmZmVuXCJ9LHtcIk5hbWVcIjpcIkxpYW0gRGVsYXBcIn0se1wiTmFtZVwiOlwiQnJ1bm8gRmVybmFuZGVzXCJ9LHtcIk5hbWVcIjpcIkFhcm9uIFdhbi1CaXNzYWthXCJ9LHtcIk5hbWVcIjpcIkhhcnJ5IE1hZ3VpcmVcIn0se1wiTmFtZVwiOlwiTWFyY3VzIFJhc2hmb3JkXCJ9LHtcIk5hbWVcIjpcIkx1a2UgU2hhd1wifSx7XCJOYW1lXCI6XCJWaWN0b3IgTGluZGVsw7ZmXCJ9LHtcIk5hbWVcIjpcIkZyZWRcIn0se1wiTmFtZVwiOlwiRGF2aWQgZGUgR2VhXCJ9LHtcIk5hbWVcIjpcIlNjb3R0IE1jVG9taW5heVwifSx7XCJOYW1lXCI6XCJQYXVsIFBvZ2JhXCJ9LHtcIk5hbWVcIjpcIk1hc29uIEdyZWVud29vZFwifSx7XCJOYW1lXCI6XCJBbnRob255IE1hcnRpYWxcIn0se1wiTmFtZVwiOlwiRWRpbnNvbiBDYXZhbmlcIn0se1wiTmFtZVwiOlwiRGVhbiBIZW5kZXJzb25cIn0se1wiTmFtZVwiOlwiTmVtYW5qYSBNYXRpxIdcIn0se1wiTmFtZVwiOlwiRGFuaWVsIEphbWVzXCJ9LHtcIk5hbWVcIjpcIkVyaWMgQmFpbGx5XCJ9LHtcIk5hbWVcIjpcIkFsZXggVGVsbGVzXCJ9LHtcIk5hbWVcIjpcIkp1YW4gTWF0YVwifSx7XCJOYW1lXCI6XCJEb25ueSB2YW4gZGUgQmVla1wifSx7XCJOYW1lXCI6XCJBeGVsIFR1YW56ZWJlXCJ9LHtcIk5hbWVcIjpcIkJyYW5kb24gV2lsbGlhbXNcIn0se1wiTmFtZVwiOlwiQW1hZCBEaWFsbG9cIn0se1wiTmFtZVwiOlwiQW50aG9ueSBFbGFuZ2FcIn0se1wiTmFtZVwiOlwiVGltb3RoeSBGb3N1LU1lbnNhaFwifSx7XCJOYW1lXCI6XCJTaG9sYSBTaG9yZXRpcmVcIn0se1wiTmFtZVwiOlwiT2Rpb24gSWdoYWxvXCJ9LHtcIk5hbWVcIjpcIkhhbm5pYmFsIE1lamJyaVwifSx7XCJOYW1lXCI6XCJXaWxsaWFtIFRob21hcyBGaXNoXCJ9LHtcIk5hbWVcIjpcIkFuZHJldyBSb2JlcnRzb25cIn0se1wiTmFtZVwiOlwiTW9oYW1lZCBTYWxhaFwifSx7XCJOYW1lXCI6XCJUcmVudCBBbGV4YW5kZXItQXJub2xkXCJ9LHtcIk5hbWVcIjpcIkdlb3JnaW5pbyBXaWpuYWxkdW1cIn0se1wiTmFtZVwiOlwiQWxpc3NvblwifSx7XCJOYW1lXCI6XCJSb2JlcnRvIEZpcm1pbm9cIn0se1wiTmFtZVwiOlwiU2FkaW8gTWFuw6lcIn0se1wiTmFtZVwiOlwiRmFiaW5ob1wifSx7XCJOYW1lXCI6XCJUaGlhZ28gQWxjw6FudGFyYVwifSx7XCJOYW1lXCI6XCJKb3JkYW4gSGVuZGVyc29uXCJ9LHtcIk5hbWVcIjpcIk5hdGhhbmllbCBQaGlsbGlwc1wifSx7XCJOYW1lXCI6XCJDdXJ0aXMgSm9uZXNcIn0se1wiTmFtZVwiOlwiRGlvZ28gSm90YVwifSx7XCJOYW1lXCI6XCJKYW1lcyBNaWxuZXJcIn0se1wiTmFtZVwiOlwiT3phbiBLYWJha1wifSx7XCJOYW1lXCI6XCJKb8OrbCBNYXRpcFwifSx7XCJOYW1lXCI6XCJSaHlzIFdpbGxpYW1zXCJ9LHtcIk5hbWVcIjpcIk5hYnkgS2XDr3RhXCJ9LHtcIk5hbWVcIjpcIkpvZSBHb21lelwifSx7XCJOYW1lXCI6XCJYaGVyZGFuIFNoYXFpcmlcIn0se1wiTmFtZVwiOlwiVmlyZ2lsIHZhbiBEaWprXCJ9LHtcIk5hbWVcIjpcIkFkcmnDoW5cIn0se1wiTmFtZVwiOlwiTmVjbyBXaWxsaWFtc1wifSx7XCJOYW1lXCI6XCJUYWt1bWkgTWluYW1pbm9cIn0se1wiTmFtZVwiOlwiQWxleCBPeGxhZGUtQ2hhbWJlcmxhaW5cIn0se1wiTmFtZVwiOlwiRGl2b2NrIE9yaWdpXCJ9LHtcIk5hbWVcIjpcIkNhb2ltaMOtbiBLZWxsZWhlclwifSx7XCJOYW1lXCI6XCJLb3N0YXMgVHNpbWlrYXNcIn0se1wiTmFtZVwiOlwiS2FzcGVyIFNjaG1laWNoZWxcIn0se1wiTmFtZVwiOlwiWW91cmkgVGllbGVtYW5zXCJ9LHtcIk5hbWVcIjpcIkphbWllIFZhcmR5XCJ9LHtcIk5hbWVcIjpcIkpvbm55IEV2YW5zXCJ9LHtcIk5hbWVcIjpcIlRpbW90aHkgQ2FzdGFnbmVcIn0se1wiTmFtZVwiOlwiV2VzbGV5IEZvZmFuYVwifSx7XCJOYW1lXCI6XCJXaWxmcmVkIE5kaWRpXCJ9LHtcIk5hbWVcIjpcIkphbWVzIE1hZGRpc29uXCJ9LHtcIk5hbWVcIjpcIkphbWVzIEp1c3RpblwifSx7XCJOYW1lXCI6XCJIYXJ2ZXkgQmFybmVzXCJ9LHtcIk5hbWVcIjpcIsOHYcSfbGFyIFPDtnnDvG5jw7xcIn0se1wiTmFtZVwiOlwiTWFyYyBBbGJyaWdodG9uXCJ9LHtcIk5hbWVcIjpcIktlbGVjaGkgSWhlYW5hY2hvXCJ9LHtcIk5hbWVcIjpcIk5hbXBhbHlzIE1lbmR5XCJ9LHtcIk5hbWVcIjpcIkF5b3plIFDDqXJlelwifSx7XCJOYW1lXCI6XCJMdWtlIFRob21hc1wifSx7XCJOYW1lXCI6XCJSaWNhcmRvIFBlcmVpcmFcIn0se1wiTmFtZVwiOlwiRGVubmlzIFByYWV0XCJ9LHtcIk5hbWVcIjpcIkRhbmllbCBBbWFydGV5XCJ9LHtcIk5hbWVcIjpcIkNocmlzdGlhbiBGdWNoc1wifSx7XCJOYW1lXCI6XCJIYW16YSBDaG91ZGh1cnlcIn0se1wiTmFtZVwiOlwiQ2VuZ2l6IMOcbmRlclwifSx7XCJOYW1lXCI6XCJTaWRuZWkgVGF2YXJlc1wifSx7XCJOYW1lXCI6XCJJc2xhbSBTbGltYW5pXCJ9LHtcIk5hbWVcIjpcIkRlbWFyYWkgR3JheVwifSx7XCJOYW1lXCI6XCJXZXMgTW9yZ2FuXCJ9LHtcIk5hbWVcIjpcIktoYW55YSBMZXNoYWJlbGFcIn0se1wiTmFtZVwiOlwiVG9tw6HFoSBTb3XEjWVrXCJ9LHtcIk5hbWVcIjpcIkFhcm9uIENyZXNzd2VsbFwifSx7XCJOYW1lXCI6XCLFgXVrYXN6IEZhYmlhxYRza2lcIn0se1wiTmFtZVwiOlwiVmxhZGltw61yIENvdWZhbFwifSx7XCJOYW1lXCI6XCJEZWNsYW4gUmljZVwifSx7XCJOYW1lXCI6XCJQYWJsbyBGb3JuYWxzXCJ9LHtcIk5hbWVcIjpcIkphcnJvZCBCb3dlblwifSx7XCJOYW1lXCI6XCJBbmdlbG8gT2dib25uYVwifSx7XCJOYW1lXCI6XCJNaWNoYWlsIEFudG9uaW9cIn0se1wiTmFtZVwiOlwiQ3JhaWcgRGF3c29uXCJ9LHtcIk5hbWVcIjpcIkplc3NlIExpbmdhcmRcIn0se1wiTmFtZVwiOlwiSXNzYSBEaW9wXCJ9LHtcIk5hbWVcIjpcIlNhw69kIEJlbnJhaG1hXCJ9LHtcIk5hbWVcIjpcIkZhYmnDoW4gQmFsYnVlbmFcIn0se1wiTmFtZVwiOlwiQXJ0aHVyIE1hc3Vha3VcIn0se1wiTmFtZVwiOlwiU8OpYmFzdGllbiBIYWxsZXJcIn0se1wiTmFtZVwiOlwiTWFyayBOb2JsZVwifSx7XCJOYW1lXCI6XCJSeWFuIEZyZWRlcmlja3NcIn0se1wiTmFtZVwiOlwiTWFudWVsIExhbnppbmlcIn0se1wiTmFtZVwiOlwiQmVuIEpvaG5zb25cIn0se1wiTmFtZVwiOlwiRGFycmVuIFJhbmRvbHBoXCJ9LHtcIk5hbWVcIjpcIkFuZHJpeSBZYXJtb2xlbmtvXCJ9LHtcIk5hbWVcIjpcIlJvYmVydCBTbm9kZ3Jhc3NcIn0se1wiTmFtZVwiOlwiRmVsaXBlIEFuZGVyc29uXCJ9LHtcIk5hbWVcIjpcIlBpZXJyZSBIw7hqYmplcmdcIn0se1wiTmFtZVwiOlwiSHVnbyBMbG9yaXNcIn0se1wiTmFtZVwiOlwiU29uIEhldW5nLW1pblwifSx7XCJOYW1lXCI6XCJIYXJyeSBLYW5lXCJ9LHtcIk5hbWVcIjpcIkVyaWMgRGllclwifSx7XCJOYW1lXCI6XCJUYW5ndXkgTmRvbWJlbGVcIn0se1wiTmFtZVwiOlwiU2VyZ2lvIFJlZ3VpbMOzblwifSx7XCJOYW1lXCI6XCJUb2J5IEFsZGVyd2VpcmVsZFwifSx7XCJOYW1lXCI6XCJTZXJnZSBBdXJpZXJcIn0se1wiTmFtZVwiOlwiRGF2aW5zb24gU8OhbmNoZXpcIn0se1wiTmFtZVwiOlwiTW91c3NhIFNpc3Nva29cIn0se1wiTmFtZVwiOlwiTHVjYXMgTW91cmFcIn0se1wiTmFtZVwiOlwiQmVuIERhdmllc1wifSx7XCJOYW1lXCI6XCJNYXR0IERvaGVydHlcIn0se1wiTmFtZVwiOlwiU3RldmVuIEJlcmd3aWpuXCJ9LHtcIk5hbWVcIjpcIkdpb3ZhbmkgTG8gQ2Vsc29cIn0se1wiTmFtZVwiOlwiR2FyZXRoIEJhbGVcIn0se1wiTmFtZVwiOlwiSGFycnkgV2lua3NcIn0se1wiTmFtZVwiOlwiSm9lIFJvZG9uXCJ9LHtcIk5hbWVcIjpcIkRlbGUgQWxsaVwifSx7XCJOYW1lXCI6XCJKYXBoZXQgVGFuZ2FuZ2FcIn0se1wiTmFtZVwiOlwiw4lyaWsgTGFtZWxhXCJ9LHtcIk5hbWVcIjpcIkNhcmxvcyBWaW7DrWNpdXNcIn0se1wiTmFtZVwiOlwiRGFuZSBTY2FybGV0dFwifSx7XCJOYW1lXCI6XCJCZXJuZCBMZW5vXCJ9LHtcIk5hbWVcIjpcIkJ1a2F5byBTYWthXCJ9LHtcIk5hbWVcIjpcIkdyYW5pdCBYaGFrYVwifSx7XCJOYW1lXCI6XCJSb2IgSG9sZGluZ1wifSx7XCJOYW1lXCI6XCJQaWVycmUtRW1lcmljayBBdWJhbWV5YW5nXCJ9LHtcIk5hbWVcIjpcIktpZXJhbiBUaWVybmV5XCJ9LHtcIk5hbWVcIjpcIkjDqWN0b3IgQmVsbGVyw61uXCJ9LHtcIk5hbWVcIjpcIkdhYnJpZWwgRG9zIFNhbnRvc1wifSx7XCJOYW1lXCI6XCJBbGV4YW5kcmUgTGFjYXpldHRlXCJ9LHtcIk5hbWVcIjpcIlRob21hcyBQYXJ0ZXlcIn0se1wiTmFtZVwiOlwiRW1pbGUgU21pdGgtUm93ZVwifSx7XCJOYW1lXCI6XCJEYW5pIENlYmFsbG9zXCJ9LHtcIk5hbWVcIjpcIk1vaGFtZWQgRWxuZW55XCJ9LHtcIk5hbWVcIjpcIkRhdmlkIEx1aXpcIn0se1wiTmFtZVwiOlwiTmljb2xhcyBQw6lww6lcIn0se1wiTmFtZVwiOlwiV2lsbGlhblwifSx7XCJOYW1lXCI6XCJQYWJsbyBNYXLDrVwifSx7XCJOYW1lXCI6XCJNYXJ0aW4gw5hkZWdhYXJkXCJ9LHtcIk5hbWVcIjpcIkNhbHVtIENoYW1iZXJzXCJ9LHtcIk5hbWVcIjpcIkPDqWRyaWMgU29hcmVzXCJ9LHtcIk5hbWVcIjpcIk1hcnRpbmVsbGlcIn0se1wiTmFtZVwiOlwiQWluc2xleSBNYWl0bGFuZC1OaWxlc1wifSx7XCJOYW1lXCI6XCJFZGRpZSBOa2V0aWFoXCJ9LHtcIk5hbWVcIjpcIk1hdGhldyBSeWFuXCJ9LHtcIk5hbWVcIjpcIkpvZSBXaWxsb2NrXCJ9LHtcIk5hbWVcIjpcIlNlYWQgS29sYcWhaW5hY1wifSx7XCJOYW1lXCI6XCJSZWlzcyBOZWxzb25cIn0se1wiTmFtZVwiOlwiU2hrb2RyYW4gTXVzdGFmaVwifSx7XCJOYW1lXCI6XCJSw7puYXIgQWxleCBSw7puYXJzc29uXCJ9LHtcIk5hbWVcIjpcIlN0dWFydCBEYWxsYXNcIn0se1wiTmFtZVwiOlwiTHVrZSBBeWxpbmdcIn0se1wiTmFtZVwiOlwiUGF0cmljayBCYW1mb3JkXCJ9LHtcIk5hbWVcIjpcIklsbGFuIE1lc2xpZXJcIn0se1wiTmFtZVwiOlwiSmFjayBIYXJyaXNvblwifSx7XCJOYW1lXCI6XCJFemdqYW4gQWxpb3NraVwifSx7XCJOYW1lXCI6XCJLYWx2aW4gUGhpbGxpcHNcIn0se1wiTmFtZVwiOlwiTWF0ZXVzeiBLbGljaFwifSx7XCJOYW1lXCI6XCJSYXBoYWVsIERpYXMgQmVsbG9saVwifSx7XCJOYW1lXCI6XCJMaWFtIENvb3BlclwifSx7XCJOYW1lXCI6XCJQYXNjYWwgU3RydWlqa1wifSx7XCJOYW1lXCI6XCJUeWxlciBSb2JlcnRzXCJ9LHtcIk5hbWVcIjpcIlJvZHJpZ29cIn0se1wiTmFtZVwiOlwiRGllZ28gTGxvcmVudGVcIn0se1wiTmFtZVwiOlwiSMOpbGRlciBDb3N0YVwifSx7XCJOYW1lXCI6XCJSb2JpbiBLb2NoXCJ9LHtcIk5hbWVcIjpcIkphbWllIFNoYWNrbGV0b25cIn0se1wiTmFtZVwiOlwiUGFibG8gSGVybsOhbmRlelwifSx7XCJOYW1lXCI6XCJLaWtvIENhc2lsbGFcIn0se1wiTmFtZVwiOlwiR2FldGFubyBCZXJhcmRpXCJ9LHtcIk5hbWVcIjpcIklhbiBDYXJsbyBQb3ZlZGFcIn0se1wiTmFtZVwiOlwiTmlhbGwgSHVnZ2luc1wifSx7XCJOYW1lXCI6XCJMZWlmIERhdmlzXCJ9LHtcIk5hbWVcIjpcIk1pY2hhZWwgS2VhbmVcIn0se1wiTmFtZVwiOlwiUmljaGFybGlzb25cIn0se1wiTmFtZVwiOlwiRG9taW5pYyBDYWx2ZXJ0LUxld2luXCJ9LHtcIk5hbWVcIjpcIkpvcmRhbiBQaWNrZm9yZFwifSx7XCJOYW1lXCI6XCJMdWNhcyBEaWduZVwifSx7XCJOYW1lXCI6XCJCZW4gR29kZnJleVwifSx7XCJOYW1lXCI6XCJBYmRvdWxheWUgRG91Y291csOpXCJ9LHtcIk5hbWVcIjpcIk1hc29uIEhvbGdhdGVcIn0se1wiTmFtZVwiOlwiR3lsZmkgU2lndXLDsHNzb25cIn0se1wiTmFtZVwiOlwiQWxsYW5cIn0se1wiTmFtZVwiOlwiWWVycnkgTWluYVwifSx7XCJOYW1lXCI6XCJKYW1lcyBSb2Ryw61ndWV6XCJ9LHtcIk5hbWVcIjpcIlPDqWFtdXMgQ29sZW1hblwifSx7XCJOYW1lXCI6XCJBbmRyw6kgR29tZXNcIn0se1wiTmFtZVwiOlwiQWxleCBJd29iaVwifSx7XCJOYW1lXCI6XCJUb20gRGF2aWVzXCJ9LHtcIk5hbWVcIjpcIlJvYmluIE9sc2VuXCJ9LHtcIk5hbWVcIjpcIkJlcm5hcmRcIn0se1wiTmFtZVwiOlwiRmFiaWFuIERlbHBoXCJ9LHtcIk5hbWVcIjpcIkFudGhvbnkgR29yZG9uXCJ9LHtcIk5hbWVcIjpcIk5pZWxzIE5rb3Vua291XCJ9LHtcIk5hbWVcIjpcIkpvbmpvZSBLZW5ueVwifSx7XCJOYW1lXCI6XCJKb3NodWEgS2luZ1wifSx7XCJOYW1lXCI6XCJDZW5rIFRvc3VuXCJ9LHtcIk5hbWVcIjpcIkpvw6NvIFZpcmfDrW5pYVwifSx7XCJOYW1lXCI6XCJNb2lzZSBLZWFuXCJ9LHtcIk5hbWVcIjpcIlRoZW8gV2FsY290dFwifSx7XCJOYW1lXCI6XCJKZWFuLVBoaWxpcHBlIEdiYW1pblwifSx7XCJOYW1lXCI6XCJOYXRoYW4gQnJvYWRoZWFkXCJ9LHtcIk5hbWVcIjpcIkVtaWxpYW5vIE1hcnTDrW5lelwifSx7XCJOYW1lXCI6XCJNYXR0IFRhcmdldHRcIn0se1wiTmFtZVwiOlwiSm9obiBNY0dpbm5cIn0se1wiTmFtZVwiOlwiT2xsaWUgV2F0a2luc1wifSx7XCJOYW1lXCI6XCJUeXJvbmUgTWluZ3NcIn0se1wiTmFtZVwiOlwiRXpyaSBLb25zYVwifSx7XCJOYW1lXCI6XCJEb3VnbGFzIEx1aXpcIn0se1wiTmFtZVwiOlwiQmVydHJhbmQgVHJhb3LDqVwifSx7XCJOYW1lXCI6XCJNYXR0eSBDYXNoXCJ9LHtcIk5hbWVcIjpcIkphY2sgR3JlYWxpc2hcIn0se1wiTmFtZVwiOlwiUm9zcyBCYXJrbGV5XCJ9LHtcIk5hbWVcIjpcIkFud2FyIEVsIEdoYXppXCJ9LHtcIk5hbWVcIjpcIlRyw6l6w6lndWV0XCJ9LHtcIk5hbWVcIjpcIk1hcnZlbG91cyBOYWthbWJhXCJ9LHtcIk5hbWVcIjpcIkFobWVkIEVsbW9oYW1hZHlcIn0se1wiTmFtZVwiOlwiS29ydG5leSBIYXVzZVwifSx7XCJOYW1lXCI6XCJKYWNvYiBSYW1zZXlcIn0se1wiTmFtZVwiOlwiTW9yZ2FuIFNhbnNvblwifSx7XCJOYW1lXCI6XCJDb25vciBIb3VyaWhhbmVcIn0se1wiTmFtZVwiOlwiS2VpbmFuIERhdmlzXCJ9LHtcIk5hbWVcIjpcIkNhcm5leSBDaHVrd3VlbWVrYVwifSx7XCJOYW1lXCI6XCJXZXNsZXkgTW9yYWVzXCJ9LHtcIk5hbWVcIjpcIk5laWwgVGF5bG9yXCJ9LHtcIk5hbWVcIjpcIkphZGVuIFBoaWxvZ2VuZSBCaWRhY2VcIn0se1wiTmFtZVwiOlwiSm9uam8gU2hlbHZleVwifSx7XCJOYW1lXCI6XCJNaWd1ZWwgQWxtaXLDs25cIn0se1wiTmFtZVwiOlwiS2FybCBEYXJsb3dcIn0se1wiTmFtZVwiOlwiRmVkZXJpY28gRmVybsOhbmRlelwifSx7XCJOYW1lXCI6XCJDYWxsdW0gV2lsc29uXCJ9LHtcIk5hbWVcIjpcIkpvZWxpbnRvblwifSx7XCJOYW1lXCI6XCJJc2FhYyBIYXlkZW5cIn0se1wiTmFtZVwiOlwiQ2lhcmFuIENsYXJrXCJ9LHtcIk5hbWVcIjpcIkphbWFsIExld2lzXCJ9LHtcIk5hbWVcIjpcIkphbWFhbCBMYXNjZWxsZXNcIn0se1wiTmFtZVwiOlwiQWxsYW4gU2FpbnQtTWF4aW1pblwifSx7XCJOYW1lXCI6XCJKYWNvYiBNdXJwaHlcIn0se1wiTmFtZVwiOlwiSmVmZiBIZW5kcmlja1wifSx7XCJOYW1lXCI6XCJTZWFuIExvbmdzdGFmZlwifSx7XCJOYW1lXCI6XCJNYXR0IFJpdGNoaWVcIn0se1wiTmFtZVwiOlwiRW1pbCBLcmFmdGhcIn0se1wiTmFtZVwiOlwiUGF1bCBEdW1tZXR0XCJ9LHtcIk5hbWVcIjpcIkZhYmlhbiBTY2jDpHJcIn0se1wiTmFtZVwiOlwiTWFydGluIETDumJyYXZrYVwifSx7XCJOYW1lXCI6XCJKb2UgV2lsbG9ja1wifSx7XCJOYW1lXCI6XCJKYXZpZXIgTWFucXVpbGxvXCJ9LHtcIk5hbWVcIjpcIlJ5YW4gRnJhc2VyXCJ9LHtcIk5hbWVcIjpcIkRlQW5kcmUgWWVkbGluXCJ9LHtcIk5hbWVcIjpcIkR3aWdodCBHYXlsZVwifSx7XCJOYW1lXCI6XCJBbmR5IENhcnJvbGxcIn0se1wiTmFtZVwiOlwiTWF0dGhldyBMb25nc3RhZmZcIn0se1wiTmFtZVwiOlwiRWxsaW90IEFuZGVyc29uXCJ9LHtcIk5hbWVcIjpcIlJ1aSBQYXRyw61jaW9cIn0se1wiTmFtZVwiOlwiQ29ub3IgQ29hZHlcIn0se1wiTmFtZVwiOlwiTsOpbHNvbiBTZW1lZG9cIn0se1wiTmFtZVwiOlwiUsO6YmVuIE5ldmVzXCJ9LHtcIk5hbWVcIjpcIlBlZHJvIE5ldG9cIn0se1wiTmFtZVwiOlwiQWRhbWEgVHJhb3LDqVwifSx7XCJOYW1lXCI6XCJKb8OjbyBNb3V0aW5ob1wifSx7XCJOYW1lXCI6XCJMZWFuZGVyIERlbmRvbmNrZXJcIn0se1wiTmFtZVwiOlwiUm9tYWluIFNhw69zc1wifSx7XCJOYW1lXCI6XCJEYW5pZWwgUG9kZW5jZVwifSx7XCJOYW1lXCI6XCJXaWxseSBCb2x5XCJ9LHtcIk5hbWVcIjpcIlJheWFuIEHDr3QgTm91cmlcIn0se1wiTmFtZVwiOlwiTWF4IEtpbG1hblwifSx7XCJOYW1lXCI6XCJXaWxsaWFuIEpvc8OpXCJ9LHtcIk5hbWVcIjpcIkbDoWJpbyBTaWx2YVwifSx7XCJOYW1lXCI6XCJSYcO6bCBKaW3DqW5lelwifSx7XCJOYW1lXCI6XCJGZXJuYW5kbyBNYXLDp2FsXCJ9LHtcIk5hbWVcIjpcIkpvbm55IENhc3Ryb1wifSx7XCJOYW1lXCI6XCJLaS1KYW5hIEhvZXZlclwifSx7XCJOYW1lXCI6XCJWaXRpbmhhXCJ9LHtcIk5hbWVcIjpcIk1vcmdhbiBHaWJicy1XaGl0ZVwifSx7XCJOYW1lXCI6XCJPd2VuIE90YXNvd2llXCJ9LHtcIk5hbWVcIjpcIlLDumJlbiBWaW5hZ3JlXCJ9LHtcIk5hbWVcIjpcIkpvaG4gUnVkZHlcIn0se1wiTmFtZVwiOlwiUGF0cmljayBDdXRyb25lXCJ9LHtcIk5hbWVcIjpcIk9za2FyIEJ1dXJcIn0se1wiTmFtZVwiOlwiVGhlbyBDb3JiZWFudVwifSx7XCJOYW1lXCI6XCJWaWNlbnRlIEd1YWl0YVwifSx7XCJOYW1lXCI6XCJDaGVpa2hvdSBLb3V5YXTDqVwifSx7XCJOYW1lXCI6XCJXaWxmcmllZCBaYWhhXCJ9LHtcIk5hbWVcIjpcIkViZXJlY2hpIEV6ZVwifSx7XCJOYW1lXCI6XCJMdWthIE1pbGl2b2pldmnEh1wifSx7XCJOYW1lXCI6XCJBbmRyb3MgVG93bnNlbmRcIn0se1wiTmFtZVwiOlwiSm9lbCBXYXJkXCJ9LHtcIk5hbWVcIjpcIkpvcmRhbiBBeWV3XCJ9LHtcIk5hbWVcIjpcIkNocmlzdGlhbiBCZW50ZWtlXCJ9LHtcIk5hbWVcIjpcIkdhcnkgQ2FoaWxsXCJ9LHtcIk5hbWVcIjpcIlBhdHJpY2sgdmFuIEFhbmhvbHRcIn0se1wiTmFtZVwiOlwiSmHDr3JvIFJpZWRld2FsZFwifSx7XCJOYW1lXCI6XCJUeXJpY2sgTWl0Y2hlbGxcIn0se1wiTmFtZVwiOlwiSmFtZXMgTWNBcnRodXJcIn0se1wiTmFtZVwiOlwiSmVmZnJleSBTY2hsdXBwXCJ9LHtcIk5hbWVcIjpcIlNjb3R0IERhbm5cIn0se1wiTmFtZVwiOlwiTmF0aGFuaWVsIENseW5lXCJ9LHtcIk5hbWVcIjpcIkphbWVzIE1jQ2FydGh5XCJ9LHtcIk5hbWVcIjpcIk1pY2h5IEJhdHNodWF5aVwifSx7XCJOYW1lXCI6XCJKYW1lcyBUb21raW5zXCJ9LHtcIk5hbWVcIjpcIk1hbWFkb3UgU2FraG9cIn0se1wiTmFtZVwiOlwiSmVhbi1QaGlsaXBwZSBNYXRldGFcIn0se1wiTmFtZVwiOlwiSmFjayBCdXRsYW5kXCJ9LHtcIk5hbWVcIjpcIk1hcnRpbiBLZWxseVwifSx7XCJOYW1lXCI6XCJKYW1lcyBXYXJkLVByb3dzZVwifSx7XCJOYW1lXCI6XCJKYW4gQmVkbmFyZWtcIn0se1wiTmFtZVwiOlwiU3R1YXJ0IEFybXN0cm9uZ1wifSx7XCJOYW1lXCI6XCJBbGV4IE1jQ2FydGh5XCJ9LHtcIk5hbWVcIjpcIkNoZSBBZGFtc1wifSx7XCJOYW1lXCI6XCJLeWxlIFdhbGtlci1QZXRlcnNcIn0se1wiTmFtZVwiOlwiUnlhbiBCZXJ0cmFuZFwifSx7XCJOYW1lXCI6XCJKYW5uaWsgVmVzdGVyZ2FhcmRcIn0se1wiTmFtZVwiOlwiRGFubnkgSW5nc1wifSx7XCJOYW1lXCI6XCJPcmlvbCBSb21ldVwifSx7XCJOYW1lXCI6XCJUaGVvIFdhbGNvdHRcIn0se1wiTmFtZVwiOlwiTmF0aGFuIFJlZG1vbmRcIn0se1wiTmFtZVwiOlwiSmFjayBTdGVwaGVuc1wifSx7XCJOYW1lXCI6XCJNb3Vzc2EgRGplbmVwb1wifSx7XCJOYW1lXCI6XCJJYnJhaGltYSBEaWFsbG9cIn0se1wiTmFtZVwiOlwiVGFrdW1pIE1pbmFtaW5vXCJ9LHtcIk5hbWVcIjpcIk1vaGFtbWVkIFNhbGlzdVwifSx7XCJOYW1lXCI6XCJGcmFzZXIgRm9yc3RlclwifSx7XCJOYW1lXCI6XCJOYXRoYW4gVGVsbGFcIn0se1wiTmFtZVwiOlwiV2lsbGlhbSBTbWFsbGJvbmVcIn0se1wiTmFtZVwiOlwiU2hhbmUgTG9uZ1wifSx7XCJOYW1lXCI6XCJZYW4gVmFsZXJ5XCJ9LHtcIk5hbWVcIjpcIktheW5lIFJhbXNleVwifSx7XCJOYW1lXCI6XCJKYWtlIFZva2luc1wifSx7XCJOYW1lXCI6XCJBbGV4YW5kcmUgSmFua2V3aXR6XCJ9LHtcIk5hbWVcIjpcIkRhbiBObHVuZHVsdVwifSx7XCJOYW1lXCI6XCJNaWNoYWVsIE9iYWZlbWlcIn0se1wiTmFtZVwiOlwiQ2FsZWIgV2F0dHNcIn0se1wiTmFtZVwiOlwiQWxsYW4gVGNoYXB0Y2hldFwifSx7XCJOYW1lXCI6XCJCZW4gV2hpdGVcIn0se1wiTmFtZVwiOlwiWXZlcyBCaXNzb3VtYVwifSx7XCJOYW1lXCI6XCJMZXdpcyBEdW5rXCJ9LHtcIk5hbWVcIjpcIkxlYW5kcm8gVHJvc3NhcmRcIn0se1wiTmFtZVwiOlwiQWRhbSBXZWJzdGVyXCJ9LHtcIk5hbWVcIjpcIk5lYWwgTWF1cGF5XCJ9LHtcIk5hbWVcIjpcIlBhc2NhbCBHcm/Dn1wifSx7XCJOYW1lXCI6XCJSb2JlcnQgU8OhbmNoZXpcIn0se1wiTmFtZVwiOlwiSm/Dq2wgVmVsdG1hblwifSx7XCJOYW1lXCI6XCJEYW4gQnVyblwifSx7XCJOYW1lXCI6XCJTb2xseSBNYXJjaFwifSx7XCJOYW1lXCI6XCJEYW5ueSBXZWxiZWNrXCJ9LHtcIk5hbWVcIjpcIkFkYW0gTGFsbGFuYVwifSx7XCJOYW1lXCI6XCJBbGV4aXMgTWFjIEFsbGlzdGVyXCJ9LHtcIk5hbWVcIjpcIk1hdGhldyBSeWFuXCJ9LHtcIk5hbWVcIjpcIlRhcmlxIExhbXB0ZXlcIn0se1wiTmFtZVwiOlwiU3RldmVuIEFsemF0ZVwifSx7XCJOYW1lXCI6XCJBYXJvbiBDb25ub2xseVwifSx7XCJOYW1lXCI6XCJKYWt1YiBNb2RlclwifSx7XCJOYW1lXCI6XCJBbGlyZXphIEphaGFuYmFraHNoXCJ9LHtcIk5hbWVcIjpcIkRhdnkgUHLDtnBwZXJcIn0se1wiTmFtZVwiOlwiQmVybmFyZG9cIn0se1wiTmFtZVwiOlwiUGVyY3kgVGF1XCJ9LHtcIk5hbWVcIjpcIkFuZGkgWmVxaXJpXCJ9LHtcIk5hbWVcIjpcIkpvc8OpIEl6cXVpZXJkb1wifSx7XCJOYW1lXCI6XCJSZWRhIEtoYWRyYVwifSx7XCJOYW1lXCI6XCJKYXlzb24gTW9sdW1ieVwifSx7XCJOYW1lXCI6XCJBc2hsZXkgV2VzdHdvb2RcIn0se1wiTmFtZVwiOlwiSmFtZXMgVGFya293c2tpXCJ9LHtcIk5hbWVcIjpcIkR3aWdodCBNY05laWxcIn0se1wiTmFtZVwiOlwiTWF0dGhldyBMb3d0b25cIn0se1wiTmFtZVwiOlwiTmljayBQb3BlXCJ9LHtcIk5hbWVcIjpcIkpvc2ggQnJvd25oaWxsXCJ9LHtcIk5hbWVcIjpcIkNocmlzIFdvb2RcIn0se1wiTmFtZVwiOlwiQmVuIE1lZVwifSx7XCJOYW1lXCI6XCJDaGFybGllIFRheWxvclwifSx7XCJOYW1lXCI6XCJKw7NoYW5uIEJlcmcgR3XDsG11bmRzc29uXCJ9LHtcIk5hbWVcIjpcIk1hdMSbaiBWeWRyYVwifSx7XCJOYW1lXCI6XCJKYWNrIENvcmtcIn0se1wiTmFtZVwiOlwiQXNobGV5IEJhcm5lc1wifSx7XCJOYW1lXCI6XCJFcmlrIFBpZXRlcnNcIn0se1wiTmFtZVwiOlwiSmF5IFJvZHJpZ3VlelwifSx7XCJOYW1lXCI6XCJSb2JiaWUgQnJhZHlcIn0se1wiTmFtZVwiOlwiS2V2aW4gTG9uZ1wifSx7XCJOYW1lXCI6XCJCYWlsZXkgUGVhY29jay1GYXJyZWxsXCJ9LHtcIk5hbWVcIjpcIlBoaWwgQmFyZHNsZXlcIn0se1wiTmFtZVwiOlwiSmltbXkgRHVubmVcIn0se1wiTmFtZVwiOlwiRGFsZSBTdGVwaGVuc1wifSx7XCJOYW1lXCI6XCJKb3NoIEJlbnNvblwifSx7XCJOYW1lXCI6XCJXaWxsIE5vcnJpc1wifSx7XCJOYW1lXCI6XCJKb2VsIE11bWJvbmdvXCJ9LHtcIk5hbWVcIjpcIkxld2lzIFJpY2hhcmRzb25cIn0se1wiTmFtZVwiOlwiQWxwaG9uc2UgQXJlb2xhXCJ9LHtcIk5hbWVcIjpcIlRvc2luIEFkYXJhYmlveW9cIn0se1wiTmFtZVwiOlwiQWRlbW9sYSBMb29rbWFuXCJ9LHtcIk5hbWVcIjpcIk9sYSBBaW5hXCJ9LHtcIk5hbWVcIjpcIkpvYWNoaW0gQW5kZXJzZW5cIn0se1wiTmFtZVwiOlwiQW5kcmUtRnJhbmsgWmFtYm8gQW5ndWlzc2FcIn0se1wiTmFtZVwiOlwiQm9iYnkgUmVpZFwifSx7XCJOYW1lXCI6XCJJdmFuIENhdmFsZWlyb1wifSx7XCJOYW1lXCI6XCJIYXJyaXNvbiBSZWVkXCJ9LHtcIk5hbWVcIjpcIkFudG9uZWUgUm9iaW5zb25cIn0se1wiTmFtZVwiOlwiUnViZW4gTG9mdHVzLUNoZWVrXCJ9LHtcIk5hbWVcIjpcIk1hcmlvIExlbWluYVwifSx7XCJOYW1lXCI6XCJLZW5ueSBUZXRlXCJ9LHtcIk5hbWVcIjpcIkFsZWtzYW5kYXIgTWl0cm92acSHXCJ9LHtcIk5hbWVcIjpcIkpvc2ggTWFqYVwifSx7XCJOYW1lXCI6XCJUb20gQ2Fpcm5leVwifSx7XCJOYW1lXCI6XCJKb2UgQnJ5YW5cIn0se1wiTmFtZVwiOlwiVGltIFJlYW1cIn0se1wiTmFtZVwiOlwiSm9zaCBPbm9tYWhcIn0se1wiTmFtZVwiOlwiRGVuaXMgT2RvaVwifSx7XCJOYW1lXCI6XCJNaWNoYWVsIEhlY3RvclwifSx7XCJOYW1lXCI6XCJGYWJpbyBDYXJ2YWxob1wifSx7XCJOYW1lXCI6XCJBYm91YmFrYXIgS2FtYXJhXCJ9LHtcIk5hbWVcIjpcIk1hcmVrIFJvZMOha1wifSx7XCJOYW1lXCI6XCJNYXhpbWUgTGUgTWFyY2hhbmRcIn0se1wiTmFtZVwiOlwiTmVlc2tlbnMgS2ViYW5vXCJ9LHtcIk5hbWVcIjpcIlRlcmVuY2UgS29uZ29sb1wifSx7XCJOYW1lXCI6XCJUeXJlc2UgRnJhbmNvaXNcIn0se1wiTmFtZVwiOlwiU2FtIEpvaG5zdG9uZVwifSx7XCJOYW1lXCI6XCJEYXJuZWxsIEZ1cmxvbmdcIn0se1wiTmFtZVwiOlwiU2VtaSBBamF5aVwifSx7XCJOYW1lXCI6XCJNYXRoZXVzIFBlcmVpcmFcIn0se1wiTmFtZVwiOlwiS3lsZSBCYXJ0bGV5XCJ9LHtcIk5hbWVcIjpcIkNvbm9yIEdhbGxhZ2hlclwifSx7XCJOYW1lXCI6XCJDb25vciBUb3duc2VuZFwifSx7XCJOYW1lXCI6XCJEYXJhIE8nU2hlYVwifSx7XCJOYW1lXCI6XCJNYXR0IFBoaWxsaXBzXCJ9LHtcIk5hbWVcIjpcIkNhbGx1bSBSb2JpbnNvblwifSx7XCJOYW1lXCI6XCJSb21haW5lIFNhd3llcnNcIn0se1wiTmFtZVwiOlwiT2theSBZb2t1xZ9sdVwifSx7XCJOYW1lXCI6XCJKYWtlIExpdmVybW9yZVwifSx7XCJOYW1lXCI6XCJHcmFkeSBEaWFuZ2FuYVwifSx7XCJOYW1lXCI6XCJBaW5zbGV5IE1haXRsYW5kLU5pbGVzXCJ9LHtcIk5hbWVcIjpcIk1iYXllIERpYWduZVwifSx7XCJOYW1lXCI6XCJLYXJsYW4gR3JhbnRcIn0se1wiTmFtZVwiOlwiS2llcmFuIEdpYmJzXCJ9LHtcIk5hbWVcIjpcIkJyYW5pc2xhdiBJdmFub3ZpxIdcIn0se1wiTmFtZVwiOlwiUm9iZXJ0IFNub2RncmFzc1wifSx7XCJOYW1lXCI6XCJGaWxpcCBLcm92aW5vdmnEh1wifSx7XCJOYW1lXCI6XCJMZWUgUGVsdGllclwifSx7XCJOYW1lXCI6XCJIYWwgUm9ic29uLUthbnVcIn0se1wiTmFtZVwiOlwiS2FtaWwgR3Jvc2lja2lcIn0se1wiTmFtZVwiOlwiS3lsZSBFZHdhcmRzXCJ9LHtcIk5hbWVcIjpcIkRhdmlkIEJ1dHRvblwifSx7XCJOYW1lXCI6XCJBaG1lZCBIZWdhemlcIn0se1wiTmFtZVwiOlwiQ2hhcmxpZSBBdXN0aW5cIn0se1wiTmFtZVwiOlwiU2FtIEZpZWxkXCJ9LHtcIk5hbWVcIjpcIlJla2VlbSBIYXJwZXJcIn0se1wiTmFtZVwiOlwiQWFyb24gUmFtc2RhbGVcIn0se1wiTmFtZVwiOlwiR2VvcmdlIEJhbGRvY2tcIn0se1wiTmFtZVwiOlwiQ2hyaXMgQmFzaGFtXCJ9LHtcIk5hbWVcIjpcIkVuZGEgU3RldmVuc1wifSx7XCJOYW1lXCI6XCJKb2huIEVnYW5cIn0se1wiTmFtZVwiOlwiSm9obiBGbGVja1wifSx7XCJOYW1lXCI6XCJEYXZpZCBNY0dvbGRyaWNrXCJ9LHtcIk5hbWVcIjpcIk9saXZlciBOb3J3b29kXCJ9LHtcIk5hbWVcIjpcIkV0aGFuIEFtcGFkdVwifSx7XCJOYW1lXCI6XCJKb2huIEx1bmRzdHJhbVwifSx7XCJOYW1lXCI6XCJCZW4gT3Nib3JuXCJ9LHtcIk5hbWVcIjpcIk9saXZlciBCdXJrZVwifSx7XCJOYW1lXCI6XCJTYW5kZXIgQmVyZ2VcIn0se1wiTmFtZVwiOlwiT2xpdmVyIE1jQnVybmllXCJ9LHtcIk5hbWVcIjpcIlJoaWFuIEJyZXdzdGVyXCJ9LHtcIk5hbWVcIjpcIkpheWRlbiBCb2dsZVwifSx7XCJOYW1lXCI6XCJLZWFuIEJyeWFuXCJ9LHtcIk5hbWVcIjpcIkphY2sgUm9iaW5zb25cIn0se1wiTmFtZVwiOlwiQmlsbHkgU2hhcnBcIn0se1wiTmFtZVwiOlwiTWF4IExvd2VcIn0se1wiTmFtZVwiOlwiUGhpbCBKYWdpZWxrYVwifSx7XCJOYW1lXCI6XCJEYW5pZWwgSmViYmlzb25cIn0se1wiTmFtZVwiOlwiTHlzIE1vdXNzZXRcIn0se1wiTmFtZVwiOlwiSmFjayBPJ0Nvbm5lbGxcIn0se1wiTmFtZVwiOlwiSWxpbWFuIE5kaWF5ZVwifSx7XCJOYW1lXCI6XCJBbnR3b2luZSBIYWNrZm9yZFwifSx7XCJOYW1lXCI6XCJGZW1pIFNlcmlraVwifSx7XCJOYW1lXCI6XCJDcmlzdGlhbm8gUm9uYWxkb1wifSx7XCJOYW1lXCI6XCJUb25leVwifV0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gYXV0b0NvbXBsZXRlKGlucCwgYXJyKSB7XHJcbiAgLyp0aGUgYXV0b2NvbXBsZXRlIGZ1bmN0aW9uIHRha2VzIHR3byBhcmd1bWVudHMsXHJcbiAgICB0aGUgdGV4dCBmaWVsZCBlbGVtZW50IGFuZCBhbiBhcnJheSBvZiBwb3NzaWJsZSBhdXRvY29tcGxldGVkIHZhbHVlczoqL1xyXG4gIGxldCBjdXJyZW50Rm9jdXM7XHJcbiAgLypleGVjdXRlIGEgZnVuY3Rpb24gd2hlbiBzb21lb25lIHdyaXRlcyBpbiB0aGUgdGV4dCBmaWVsZDoqL1xyXG4gIGlucC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGxldCBhLFxyXG4gICAgICBiLFxyXG4gICAgICBpLFxyXG4gICAgICB2YWwgPSB0aGlzLnZhbHVlO1xyXG4gICAgLypjbG9zZSBhbnkgYWxyZWFkeSBvcGVuIGxpc3RzIG9mIGF1dG9jb21wbGV0ZWQgdmFsdWVzKi9cclxuICAgIGNsb3NlQWxsTGlzdHMoKTtcclxuICAgIGlmICghdmFsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGN1cnJlbnRGb2N1cyA9IC0xO1xyXG4gICAgLypjcmVhdGUgYSBESVYgZWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiB0aGUgaXRlbXMgKHZhbHVlcyk6Ki9cclxuICAgIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0aGlzLmlkICsgXCJhdXRvY29tcGxldGUtbGlzdFwiKTtcclxuICAgIGEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhdXRvY29tcGxldGUtaXRlbXNcIik7XHJcbiAgICAvKmFwcGVuZCB0aGUgRElWIGVsZW1lbnQgYXMgYSBjaGlsZCBvZiB0aGUgYXV0b2NvbXBsZXRlIGNvbnRhaW5lcjoqL1xyXG4gICAgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGEpO1xyXG4gICAgLypmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheS4uLiovXHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAvKmNoZWNrIGlmIHRoZSBpdGVtIGNvbnRhaW5zIHRoZSBzYW1lIGxldHRlcnMgYXMgdGhlIHRleHQgZmllbGQgdmFsdWU6IHx8IG5vcm1hbGl6ZWQgdG8gcmVtb3ZlIGFjY2VudHMvZGlhY3JpdGljcyovXHJcbiAgICAgIGlmIChcclxuICAgICAgICBhcnJbaV1cclxuICAgICAgICAgIC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgICAubm9ybWFsaXplKFwiTkZEXCIpXHJcbiAgICAgICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcclxuICAgICAgICAgIC5pbmNsdWRlcyh2YWwudG9VcHBlckNhc2UoKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgLypjcmVhdGUgYSBESVYgZWxlbWVudCBmb3IgZWFjaCBtYXRjaGluZyBlbGVtZW50OiovXHJcbiAgICAgICAgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICAgICAgYi5pbm5lckhUTUwgPSBhcnJbaV0uc2xpY2UoMCwgdmFsLmxlbmd0aCk7XHJcbiAgICAgICAgYi5pbm5lckhUTUwgKz0gYXJyW2ldLnNsaWNlKHZhbC5sZW5ndGgpO1xyXG4gICAgICAgIC8qaW5zZXJ0IGEgaW5wdXQgZmllbGQgdGhhdCB3aWxsIGhvbGQgdGhlIGN1cnJlbnQgYXJyYXkgaXRlbSdzIHZhbHVlOiovXHJcbiAgICAgICAgYi5pbm5lckhUTUwgKz0gXCI8aW5wdXQgdHlwZT0naGlkZGVuJyB2YWx1ZT0nXCIgKyBhcnJbaV0gKyBcIic+XCI7XHJcblxyXG4gICAgICAgIC8qZXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gc29tZW9uZSBjbGlja3Mgb24gdGhlIGl0ZW0gdmFsdWUgKERJViBlbGVtZW50KToqL1xyXG4gICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAvKmluc2VydCB0aGUgdmFsdWUgZm9yIHRoZSBhdXRvY29tcGxldGUgdGV4dCBmaWVsZDoqL1xyXG4gICAgICAgICAgaW5wLnZhbHVlID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdLnZhbHVlO1xyXG4gICAgICAgICAgLypjbG9zZSB0aGUgbGlzdCBvZiBhdXRvY29tcGxldGVkIHZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKG9yIGFueSBvdGhlciBvcGVuIGxpc3RzIG9mIGF1dG9jb21wbGV0ZWQgdmFsdWVzOiovXHJcbiAgICAgICAgICBjbG9zZUFsbExpc3RzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYS5hcHBlbmRDaGlsZChiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8qZXhlY3V0ZSBhIGZ1bmN0aW9uIHByZXNzZXMgYSBrZXkgb24gdGhlIGtleWJvYXJkOiovXHJcbiAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBsZXQgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQgKyBcImF1dG9jb21wbGV0ZS1saXN0XCIpO1xyXG4gICAgaWYgKHgpIHggPSB4LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpO1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PSA0MCkge1xyXG4gICAgICAvKklmIHRoZSBhcnJvdyBET1dOIGtleSBpcyBwcmVzc2VkLFxyXG4gICAgICAgICAgaW5jcmVhc2UgdGhlIGN1cnJlbnRGb2N1cyB2YXJpYWJsZToqL1xyXG4gICAgICBjdXJyZW50Rm9jdXMrKztcclxuICAgICAgLyphbmQgYW5kIG1ha2UgdGhlIGN1cnJlbnQgaXRlbSBtb3JlIHZpc2libGU6Ki9cclxuICAgICAgYWRkQWN0aXZlKHgpO1xyXG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzgpIHtcclxuICAgICAgLy91cFxyXG4gICAgICAvKklmIHRoZSBhcnJvdyBVUCBrZXkgaXMgcHJlc3NlZCxcclxuICAgICAgICAgIGRlY3JlYXNlIHRoZSBjdXJyZW50Rm9jdXMgdmFyaWFibGU6Ki9cclxuICAgICAgY3VycmVudEZvY3VzLS07XHJcbiAgICAgIC8qYW5kIGFuZCBtYWtlIHRoZSBjdXJyZW50IGl0ZW0gbW9yZSB2aXNpYmxlOiovXHJcbiAgICAgIGFkZEFjdGl2ZSh4KTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDEzKSB7XHJcbiAgICAgIC8qSWYgdGhlIEVOVEVSIGtleSBpcyBwcmVzc2VkLCBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkLCovXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGN1cnJlbnRGb2N1cyA+IC0xKSB7XHJcbiAgICAgICAgLyphbmQgc2ltdWxhdGUgYSBjbGljayBvbiB0aGUgXCJhY3RpdmVcIiBpdGVtOiovXHJcbiAgICAgICAgaWYgKHgpIHhbY3VycmVudEZvY3VzXS5jbGljaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZnVuY3Rpb24gYWRkQWN0aXZlKHgpIHtcclxuICAgIC8qYSBmdW5jdGlvbiB0byBjbGFzc2lmeSBhbiBpdGVtIGFzIFwiYWN0aXZlXCI6Ki9cclxuICAgIGlmICgheCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgLypzdGFydCBieSByZW1vdmluZyB0aGUgXCJhY3RpdmVcIiBjbGFzcyBvbiBhbGwgaXRlbXM6Ki9cclxuICAgIHJlbW92ZUFjdGl2ZSh4KTtcclxuICAgIGlmIChjdXJyZW50Rm9jdXMgPj0geC5sZW5ndGgpIGN1cnJlbnRGb2N1cyA9IDA7XHJcbiAgICBpZiAoY3VycmVudEZvY3VzIDwgMCkgY3VycmVudEZvY3VzID0geC5sZW5ndGggLSAxO1xyXG4gICAgLyphZGQgY2xhc3MgXCJhdXRvY29tcGxldGUtYWN0aXZlXCI6Ki9cclxuICAgIHhbY3VycmVudEZvY3VzXS5jbGFzc0xpc3QuYWRkKFwiYXV0b2NvbXBsZXRlLWFjdGl2ZVwiKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVtb3ZlQWN0aXZlKHgpIHtcclxuICAgIC8qYSBmdW5jdGlvbiB0byByZW1vdmUgdGhlIFwiYWN0aXZlXCIgY2xhc3MgZnJvbSBhbGwgYXV0b2NvbXBsZXRlIGl0ZW1zOiovXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgeFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYXV0b2NvbXBsZXRlLWFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gY2xvc2VBbGxMaXN0cyhlbG1udCkge1xyXG4gICAgLypjbG9zZSBhbGwgYXV0b2NvbXBsZXRlIGxpc3RzIGluIHRoZSBkb2N1bWVudCxcclxuICAgICAgZXhjZXB0IHRoZSBvbmUgcGFzc2VkIGFzIGFuIGFyZ3VtZW50OiovXHJcbiAgICBsZXQgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhdXRvY29tcGxldGUtaXRlbXNcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGVsbW50ICE9IHhbaV0gJiYgZWxtbnQgIT0gaW5wKSB7XHJcbiAgICAgICAgeFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qZXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gc29tZW9uZSBjbGlja3MgaW4gdGhlIGRvY3VtZW50OiovXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjbG9zZUFsbExpc3RzKGUudGFyZ2V0KTtcclxuICB9KTtcclxufVxyXG5leHBvcnQgeyBhdXRvQ29tcGxldGUgfTtcclxuIiwiaW1wb3J0IHsgZ2FtZU92ZXIgfSBmcm9tIFwiLi9nYW1lT3Zlci5qc1wiO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUd1ZXNzKHJuZFBsYXllciwgdXNlckd1ZXNzKSB7XHJcbiAgbGV0IHRhYmxlQ29udGFpbmVyID0gJChcIi50YWJsZV9fY29udGVudFwiKTtcclxuICBsZXQgdGFibGVSb3cgPSAkKFwiPGRpdj5cIikuYWRkQ2xhc3MoXCJ0YWJsZV9fcm93XCIpO1xyXG4gIGxldCBuYW1lID0gJChcIjxkaXY+XCIpLmFwcGVuZCh1c2VyR3Vlc3MubmFtZSkuYWRkQ2xhc3MoXCJ0YWJsZV9fY2VsbFwiKTtcclxuICBsZXQgdGVhbSA9ICQoXCI8aW1nPlwiLCB7XHJcbiAgICBzcmM6IHVzZXJHdWVzcy50ZWFtSW1nU3JjLFxyXG4gICAgd2lkdGg6IFwiNDdweFwiLFxyXG4gICAgYWx0OiBgJHt1c2VyR3Vlc3MudGVhbX0gYmFkZ2UgbG9nb2AsXHJcbiAgfSk7XHJcbiAgbGV0IHRlYW1Db250YWluZXIgPSAkKFwiPGRpdj5cIiwgeyBjbGFzczogXCJ0YWJsZV9fY2VsbFwiIH0pLmFwcGVuZCh0ZWFtKTtcclxuICBsZXQgbmF0aW9uYWxpdHkgPSAkKFwiPGRpdj5cIilcclxuICAgIC5hcHBlbmQodXNlckd1ZXNzLm5hdGlvbmFsaXR5KVxyXG4gICAgLmFkZENsYXNzKFwidGFibGVfX2NlbGxcIik7XHJcbiAgbGV0IHBvc2l0aW9uID0gJChcIjxkaXY+XCIpLmFwcGVuZCh1c2VyR3Vlc3MucG9zaXRpb24pLmFkZENsYXNzKFwidGFibGVfX2NlbGxcIik7XHJcbiAgbGV0IGhlaWdodCA9ICQoXCI8ZGl2PlwiKS5hcHBlbmQodXNlckd1ZXNzLmdldEZlZXQoKSkuYWRkQ2xhc3MoXCJ0YWJsZV9fY2VsbFwiKTtcclxuICBsZXQgYWdlID0gJChcIjxkaXY+XCIpLmFwcGVuZCh1c2VyR3Vlc3MuYWdlKS5hZGRDbGFzcyhcInRhYmxlX19jZWxsXCIpO1xyXG5cclxuICBpZiAocm5kUGxheWVyLnRlYW0gPT0gdXNlckd1ZXNzLnRlYW0pIHtcclxuICAgIHRlYW1Db250YWluZXIuYWRkQ2xhc3MoXCJncmVlblwiKTtcclxuICB9XHJcbiAgaWYgKHJuZFBsYXllci5uYXRpb25hbGl0eSA9PSB1c2VyR3Vlc3MubmF0aW9uYWxpdHkpIHtcclxuICAgIG5hdGlvbmFsaXR5LmFkZENsYXNzKFwiZ3JlZW5cIik7XHJcbiAgfVxyXG4gIGlmIChybmRQbGF5ZXIucG9zaXRpb24gPT0gdXNlckd1ZXNzLnBvc2l0aW9uKSB7XHJcbiAgICBwb3NpdGlvbi5hZGRDbGFzcyhcImdyZWVuXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gaGVpZ2h0IGNoZWNrXHJcbiAgaWYgKHJuZFBsYXllci5oZWlnaHQgPT0gdXNlckd1ZXNzLmhlaWdodCkge1xyXG4gICAgaGVpZ2h0LmFkZENsYXNzKFwiZ3JlZW5cIik7XHJcbiAgfVxyXG4gIGlmIChybmRQbGF5ZXIuZ2V0SW50ZWdlckhlaWdodCgpID4gdXNlckd1ZXNzLmdldEludGVnZXJIZWlnaHQoKSkge1xyXG4gICAgaGVpZ2h0LmFwcGVuZChcIjxzcGFuIGNsYXNzPSdhcnJvdyc+IOKGkTwvc3Bhbj5cIik7XHJcbiAgfVxyXG4gIGlmIChybmRQbGF5ZXIuZ2V0SW50ZWdlckhlaWdodCgpIDwgdXNlckd1ZXNzLmdldEludGVnZXJIZWlnaHQoKSkge1xyXG4gICAgaGVpZ2h0LmFwcGVuZChcIjxzcGFuIGNsYXNzPSdhcnJvdyc+IOKGkzwvc3Bhbj5cIik7XHJcbiAgfVxyXG5cclxuICAvLyBhZ2UgY2hlY2tcclxuICBpZiAocm5kUGxheWVyLmFnZSA9PSB1c2VyR3Vlc3MuYWdlKSB7XHJcbiAgICBhZ2UuYWRkQ2xhc3MoXCJncmVlblwiKTtcclxuICB9XHJcbiAgaWYgKHJuZFBsYXllci5hZ2UgPiB1c2VyR3Vlc3MuYWdlKSB7XHJcbiAgICBhZ2UuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J2Fycm93Jz4g4oaRPC9zcGFuPlwiKTtcclxuICB9XHJcbiAgaWYgKHJuZFBsYXllci5hZ2UgPCB1c2VyR3Vlc3MuYWdlKSB7XHJcbiAgICBhZ2UuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J2Fycm93Jz4g4oaTPC9zcGFuPlwiKTtcclxuICB9XHJcblxyXG4gIHRhYmxlUm93LmFwcGVuZChuYW1lLCB0ZWFtQ29udGFpbmVyLCBuYXRpb25hbGl0eSwgcG9zaXRpb24sIGhlaWdodCwgYWdlKTtcclxuICB0YWJsZUNvbnRhaW5lci5hcHBlbmQodGFibGVSb3cuaGlkZSgpLmZhZGVJbigxMjAwKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlHdWVzcyB9O1xyXG4iLCJpbXBvcnQgeyBybmRQbGF5ZXIsIHVzZXJHdWVzcyB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBnYW1lT3Zlcihpc1dpbikge1xyXG4gIGlmIChpc1dpbikge1xyXG4gICAgY29uc29sZS5sb2coXCJZb3UgV2luIVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHJuZFBsYXllcik7XHJcblxyXG4gICAgJChcIiNzZWFyY2gtZmllbGRcIikucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgbGV0IGhlYWRpbmcgPSAkKFwiPGgxPlwiKS50ZXh0KFwiWW91IEd1ZXNzZWQgQ29ycmVjdGx5IVwiKTtcclxuICAgIGxldCBwbGF5ZXJOYW1lID0gJChcIjxwPlwiKS50ZXh0KHJuZFBsYXllci5uYW1lKTtcclxuICAgIGxldCBwbGF5ZXJJbWcgPSAkKFwiPGltZz5cIiwge1xyXG4gICAgICBzcmM6IHJuZFBsYXllci5pbWdTcmMsXHJcbiAgICAgIGFsdDogYEhlYWRzaG90IGltYWdlIG9mICR7cm5kUGxheWVyLm5hbWV9YCxcclxuICAgIH0pO1xyXG4gICAgbGV0IHBsYXlBZ2FpbkJ0biA9ICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAudGV4dChcIlBsYXkgQWdhaW5cIilcclxuICAgICAgLmNsaWNrKCgpID0+IHtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSk7XHJcbiAgICAkKFwiI3N0aWNreVwiKS5hcHBlbmQoaGVhZGluZywgcGxheWVyTmFtZSwgcGxheWVySW1nLCBwbGF5QWdhaW5CdG4pO1xyXG5cclxuICAgICQoXCIjc3RpY2t5XCIpLm1vZGFsKHtcclxuICAgICAgZXNjYXBlQ2xvc2U6IGZhbHNlLFxyXG4gICAgICBjbGlja0Nsb3NlOiBmYWxzZSxcclxuICAgICAgc2hvd0Nsb3NlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIllvdSBMb3NlIVwiKTtcclxuICAgICQoXCIjc2VhcmNoLWZpZWxkXCIpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgIGxldCBoZWFkaW5nID0gJChcIjxoMT5cIikudGV4dChcIllvdSBMb3NlIVwiKTtcclxuICAgIGxldCB0ZXh0ID0gJChcIjxwPlwiKS50ZXh0KFwiQW5zd2VyOlwiKTtcclxuICAgIGxldCBwbGF5ZXJOYW1lID0gJChcIjxwPlwiKS50ZXh0KHJuZFBsYXllci5uYW1lKTtcclxuICAgIGxldCBwbGF5ZXJJbWcgPSAkKFwiPGltZz5cIiwge1xyXG4gICAgICBzcmM6IHJuZFBsYXllci5pbWdTcmMsXHJcbiAgICAgIGFsdDogYEhlYWRzaG90IGltYWdlIG9mICR7cm5kUGxheWVyLm5hbWV9YCxcclxuICAgIH0pO1xyXG4gICAgbGV0IHBsYXlBZ2FpbkJ0biA9ICQoXCI8YnV0dG9uPlwiKVxyXG4gICAgICAudGV4dChcIlBsYXkgQWdhaW5cIilcclxuICAgICAgLmNsaWNrKCgpID0+IHtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSk7XHJcbiAgICAkKFwiI3N0aWNreVwiKS5hcHBlbmQoaGVhZGluZywgdGV4dCwgcGxheWVyTmFtZSwgcGxheWVySW1nLCBwbGF5QWdhaW5CdG4pO1xyXG5cclxuICAgICQoXCIjc3RpY2t5XCIpLm1vZGFsKHtcclxuICAgICAgZXNjYXBlQ2xvc2U6IGZhbHNlLFxyXG4gICAgICBjbGlja0Nsb3NlOiBmYWxzZSxcclxuICAgICAgc2hvd0Nsb3NlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgZ2FtZU92ZXIgfTtcclxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgZGlzcGxheUd1ZXNzIH0gZnJvbSBcIi4vZGlzcGxheUd1ZXNzXCI7XHJcbmltcG9ydCB7IGdhbWVPdmVyIH0gZnJvbSBcIi4vZ2FtZU92ZXJcIjtcclxuaW1wb3J0IHsgZ2V0VXNlckd1ZXNzIH0gZnJvbSBcIi4vc2VhcmNoUGxheWVyLmpzXCI7XHJcbmltcG9ydCAqIGFzIHBsYXllcnMgZnJvbSBcIi4vcGxheWVycy5jc3ZcIjtcclxuaW1wb3J0IHsgYXV0b0NvbXBsZXRlIH0gZnJvbSBcIi4vYXV0b0NvbXBsZXRlXCI7XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbmFtZSxcclxuICAgIHRlYW0sXHJcbiAgICBuYXRpb25hbGl0eSxcclxuICAgIHBvc2l0aW9uLFxyXG4gICAgaGVpZ2h0LFxyXG4gICAgYWdlLFxyXG4gICAgaW1nU3JjLFxyXG4gICAgdGVhbUltZ1NyY1xyXG4gICkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudGVhbSA9IHRlYW07XHJcbiAgICB0aGlzLm5hdGlvbmFsaXR5ID0gbmF0aW9uYWxpdHk7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMuYWdlID0gYWdlO1xyXG4gICAgdGhpcy5pbWdTcmMgPSBpbWdTcmM7XHJcbiAgICB0aGlzLnRlYW1JbWdTcmMgPSB0ZWFtSW1nU3JjO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW50ZWdlckhlaWdodCgpIHtcclxuICAgIGxldCBpbnRlZ2VyID0gcGFyc2VJbnQodGhpcy5oZWlnaHQuc3BsaXQoXCIgXCIpWzBdKTtcclxuICAgIHJldHVybiBpbnRlZ2VyO1xyXG4gIH1cclxuICBnZXRGZWV0KCkge1xyXG4gICAgY29uc3QgcmVhbEZlZXQgPSAodGhpcy5nZXRJbnRlZ2VySGVpZ2h0KCkgKiAwLjM5MzcpIC8gMTI7XHJcbiAgICBjb25zdCBmZWV0ID0gTWF0aC5mbG9vcihyZWFsRmVldCk7XHJcbiAgICBjb25zdCBpbmNoZXMgPSBNYXRoLnJvdW5kKChyZWFsRmVldCAtIGZlZXQpICogMTIpO1xyXG4gICAgcmV0dXJuIGZlZXQgKyBcIidcIiArIGluY2hlcyArICdcIic7XHJcbiAgfVxyXG59XHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiWC1SYXBpZEFQSS1Ib3N0XCI6IFwiYXBpLWZvb3RiYWxsLXYxLnAucmFwaWRhcGkuY29tXCIsXHJcbiAgICBcIlgtUmFwaWRBUEktS2V5XCI6IFwiYmIyYmNkOTVmM21zaGVhMzAxYzI4YzdhYjY2YXAxNmZmNGZqc25lZWUwMjM0MjZhNTBcIixcclxuICB9LFxyXG59O1xyXG5sZXQgcm5kUGxheWVyLCB1c2VyR3Vlc3M7XHJcbmFzeW5jIGZ1bmN0aW9uIGdldFJuZFBsYXllcigpIHtcclxuICBsZXQgcm91bmQgPSA3O1xyXG5cclxuICAvLyByYW5kb20gbnVtYmVyIGdlbmVyYXRvclxyXG4gIGZ1bmN0aW9uIHJhbmRvbUludEZyb21JbnRlcnZhbChtaW4sIG1heCkge1xyXG4gICAgLy8gbWluIGFuZCBtYXggaW5jbHVkZWRcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIGZldGNoIHJhbmRvbSBwbGF5ZXIgZnJvbSB0b3Agc2NvcmVycyBwb29sIC0tIGlkZWEgaXMgdG8gcmV0cmlldmUgcmFuZG9tIHdlbGwga25vd24gcGxheWVyXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgXCJodHRwczovL2FwaS1mb290YmFsbC12MS5wLnJhcGlkYXBpLmNvbS92My9wbGF5ZXJzL3RvcHNjb3JlcnM/bGVhZ3VlPTM5JnNlYXNvbj0yMDIxXCIsXHJcbiAgICAgIG9wdGlvbnNcclxuICAgICk7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICBsZXQgYXJyTGVuZ3RoID0gYXdhaXQgZGF0YS5yZXNwb25zZS5sZW5ndGg7XHJcbiAgICBjb25zdCBybmRJbnQgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMCwgYXJyTGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgZGF0YSA9IGF3YWl0IGRhdGEucmVzcG9uc2Vbcm5kSW50XTtcclxuICAgIHJuZFBsYXllciA9IG5ldyBQbGF5ZXIoXHJcbiAgICAgIGRhdGEucGxheWVyLm5hbWUsXHJcbiAgICAgIGRhdGEuc3RhdGlzdGljc1swXS50ZWFtLm5hbWUsXHJcbiAgICAgIGRhdGEucGxheWVyLm5hdGlvbmFsaXR5LFxyXG4gICAgICBkYXRhLnN0YXRpc3RpY3NbMF0uZ2FtZXMucG9zaXRpb24sXHJcbiAgICAgIGRhdGEucGxheWVyLmhlaWdodCxcclxuICAgICAgZGF0YS5wbGF5ZXIuYWdlLFxyXG4gICAgICBkYXRhLnBsYXllci5waG90byxcclxuICAgICAgZGF0YS5zdGF0aXN0aWNzWzBdLnRlYW0ubG9nb1xyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKHJuZFBsYXllcik7XHJcblxyXG4gICAgLy8gRk9SIERFVkVMT1BNRU5UIE9OTFlcclxuICAgIC8vIHJuZFBsYXllciA9IG5ldyBQbGF5ZXIoXHJcbiAgICAvLyAgIFwiTS4gUmFzaGZvcmRcIixcclxuICAgIC8vICAgXCJjaGVsc2VhXCIsXHJcbiAgICAvLyAgIFwibWV4aWNvXCIsXHJcbiAgICAvLyAgIFwiQXR0YWNrZXJcIixcclxuICAgIC8vICAgXCIxMjcgY21cIixcclxuICAgIC8vICAgXCIyNFwiLFxyXG4gICAgLy8gICBcImh0dHBzOi8vbWVkaWEuYXBpLXNwb3J0cy5pby9mb290YmFsbC9wbGF5ZXJzLzMyNDcucG5nXCIsXHJcbiAgICAvLyAgIFwiaHR0cHM6Ly9tZWRpYS5hcGktc3BvcnRzLmlvL2Zvb3RiYWxsL3RlYW1zLzUyLnBuZ1wiXHJcbiAgICAvLyApO1xyXG5cclxuICAgIC8vIHVzZXJHdWVzcyA9IG5ldyBQbGF5ZXIoXHJcbiAgICAvLyAgIFwiVy4gWmFoYVwiLFxyXG4gICAgLy8gICBcIkNyeXN0YWwgUGFsYWNlXCIsXHJcbiAgICAvLyAgIFwiQ290ZSBkZS4gSXZvcnlcIixcclxuICAgIC8vICAgXCJBdHRhY2tlclwiLFxyXG4gICAgLy8gICBcIjE4MCBjbVwiLFxyXG4gICAgLy8gICBcIjMwXCIsXHJcbiAgICAvLyAgIFwiaHR0cHM6Ly9tZWRpYS5hcGktc3BvcnRzLmlvL2Zvb3RiYWxsL3BsYXllcnMvMzI0Ny5wbmdcIixcclxuICAgIC8vICAgXCJodHRwczovL21lZGlhLmFwaS1zcG9ydHMuaW8vZm9vdGJhbGwvdGVhbXMvNTIucG5nXCJcclxuICAgIC8vICk7XHJcblxyXG4gICAgLy8gb24gY2xpY2sgb2Ygc3VibWl0IGJ1dHRvbiBnZXQgdXNlciBndWVzcyBhbmQgdmFsaWRhdGVcclxuICAgICQoXCIjc3VibWl0LWd1ZXNzXCIpLmNsaWNrKGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAkKFwiLmVyclwiKS50ZXh0KFwiXCIpO1xyXG4gICAgICAvLyBnZXQgdXNlciBndWVzcyBvYmplY3QgZnJvbSBzZWFyY2ggcXVlcnlcclxuICAgICAgdXNlckd1ZXNzID0gYXdhaXQgZ2V0VXNlckd1ZXNzKCk7XHJcblxyXG4gICAgICBpZiAodXNlckd1ZXNzICE9PSB1bmRlZmluZWQgJiYgcm91bmQgPiAxKSB7XHJcbiAgICAgICAgcm91bmQtLTtcclxuICAgICAgICAkKFwiLmF0dGVtcHRzXCIpLnRleHQoXCJcIik7XHJcbiAgICAgICAgJChcIiNzZWFyY2gtZmllbGRcIikudmFsKFwiXCIpO1xyXG4gICAgICAgICQoXCIuYXR0ZW1wdHNcIikudGV4dChyb3VuZCk7XHJcbiAgICAgICAgZGlzcGxheUd1ZXNzKHJuZFBsYXllciwgdXNlckd1ZXNzKTtcclxuICAgICAgICBpZiAocm5kUGxheWVyLm5hbWUgPT0gdXNlckd1ZXNzLm5hbWUpIHtcclxuICAgICAgICAgIGdhbWVPdmVyKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh1c2VyR3Vlc3MgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJChcIi5lcnJcIikudGV4dChcIk5vIHBsYXllciBmb3VuZC5cIik7XHJcbiAgICAgICAgJChcIiNzZWFyY2gtZmllbGRcIikudmFsKFwiXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHJvdW5kID09IDEpIHtcclxuICAgICAgICByb3VuZC0tO1xyXG4gICAgICAgICQoXCIjc2VhcmNoLWZpZWxkXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAkKFwiLmF0dGVtcHRzXCIpLnRleHQoXCJcIik7XHJcbiAgICAgICAgJChcIi5hdHRlbXB0c1wiKS50ZXh0KHJvdW5kKTtcclxuICAgICAgICBpZiAocm5kUGxheWVyLm5hbWUgIT09IHVzZXJHdWVzcy5uYW1lKSB7XHJcbiAgICAgICAgICBnYW1lT3ZlcihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChybmRQbGF5ZXIubmFtZSA9PSB1c2VyR3Vlc3MubmFtZSkge1xyXG4gICAgICAgICAgZ2FtZU92ZXIodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxuXHJcbiAgLy8gY3JlYXRlIGFycmF5IG9mIHBsYXllcnMgZnJvbSBwbGF5ZXJzLmNzdiBmb3IgYXV0b2NvbXBsZXRlXHJcbiAgbGV0IHBsYXllckFycmF5ID0gW107XHJcbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcclxuICAgIHBsYXllckFycmF5LnB1c2gocGxheWVyLk5hbWUpO1xyXG4gIH0pO1xyXG4gIC8vIGluaXRpYWxpemUgYXV0b2NvbXBsZXRlXHJcbiAgYXV0b0NvbXBsZXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWZpZWxkXCIpLCBwbGF5ZXJBcnJheSk7XHJcbn1cclxuXHJcbmdldFJuZFBsYXllcigpO1xyXG5cclxuZXhwb3J0IHsgZ2V0Um5kUGxheWVyLCBQbGF5ZXIsIHJuZFBsYXllciwgdXNlckd1ZXNzLCBvcHRpb25zIH07XHJcbiIsImltcG9ydCB7IFBsYXllciwgb3B0aW9ucyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRVc2VyR3Vlc3MoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBzZWFyY2hJbnB1dCA9ICQoXCIjc2VhcmNoLWZpZWxkXCIpLnZhbCgpO1xyXG4gICAgc2VhcmNoSW5wdXQgPSBzZWFyY2hJbnB1dFxyXG4gICAgICAubm9ybWFsaXplKFwiTkZEXCIpXHJcbiAgICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKVxyXG4gICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgIHNlYXJjaElucHV0ID0gZW5jb2RlVVJJKHNlYXJjaElucHV0KTtcclxuICAgIGNvbnNvbGUubG9nKHNlYXJjaElucHV0KTtcclxuXHJcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS1mb290YmFsbC12MS5wLnJhcGlkYXBpLmNvbS92My9wbGF5ZXJzP2xlYWd1ZT0zOSZzZWFyY2g9JHtzZWFyY2hJbnB1dH1gLFxyXG4gICAgICBvcHRpb25zXHJcbiAgICApO1xyXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgZGF0YSA9IGRhdGEucmVzcG9uc2VbMF07XHJcbiAgICBsZXQgdXNlckd1ZXNzID0gbmV3IFBsYXllcihcclxuICAgICAgZGF0YS5wbGF5ZXIubmFtZSxcclxuICAgICAgZGF0YS5zdGF0aXN0aWNzWzBdLnRlYW0ubmFtZSxcclxuICAgICAgZGF0YS5wbGF5ZXIubmF0aW9uYWxpdHksXHJcbiAgICAgIGRhdGEuc3RhdGlzdGljc1swXS5nYW1lcy5wb3NpdGlvbixcclxuICAgICAgZGF0YS5wbGF5ZXIuaGVpZ2h0LFxyXG4gICAgICBkYXRhLnBsYXllci5hZ2UsXHJcbiAgICAgIGRhdGEucGxheWVyLnBob3RvLFxyXG4gICAgICBkYXRhLnN0YXRpc3RpY3NbMF0udGVhbS5sb2dvXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHVzZXJHdWVzcztcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBnZXRVc2VyR3Vlc3MgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9