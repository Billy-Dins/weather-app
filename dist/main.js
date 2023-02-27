/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n}\n.main-content {\n    background-color: rgb(41, 158, 173);\n    width: 100vw;\n    height: 100vh;\n}\n\n.top-left, .top-right, .bottom {\n    position: absolute;\n}\n\n.top-left {\n    display: flex;\n    flex-direction: column;\n    padding: 25px;\n    top: 0px;\n    left: 0px;\n}\n.city-title {\n    font-size: 1.3rem;\n    font-family: 'Lobster', cursive;\n}\n.weather-description {\n    padding-bottom: 7px;\n    font-size: .7rem;\n    font-family: 'Aboreto', cursive;\n}\n.todays-date, .todays-time {\n    font-size: .7rem;\n}\n.current-temperature {\n    padding-top: 15px;\n    font-size: 2rem;\n    font-family: 'Aboreto', cursive;\n}\n.change-units {\n    text-align: start;\n    font-size: .5rem;\n    font-family: 'Aboreto', cursive;\n    background: none;\n    border: none;\n    cursor: pointer;\n}\n.weather-icon {\n    width: 75px;\n}\n.city-input {\n    padding: 0px 0px 3px 7px;\n    background: none;\n    border: none;\n    border-bottom: 1px solid black;\n}\n.city-input::placeholder {\n    color: lightgray;\n}\n.cityInput:focus {\n    outline: none;\n    color: pink;\n}\n.getWeatherBtn {\n    background: none;\n    border: none;\n    cursor: pointer;\n}\n.top-right {\n    padding: 25px 10px 0px 0px;\n    text-align: end;\n    top: 0px;\n    right: 0px;\n}\n.top-right-container {\n    display: grid;\n    grid-template-columns: .4fr 1fr;\n    grid-template-rows: 1fr 1fr;\n}\n.top-right-item-one {\n    display: grid;\n    grid-column: 2/3;\n    grid-row: 1/3;\n}\n.top-right-item-two {\n    display: grid;\n    grid-column: 2/3;\n    grid-row: 2/3\n}\n.top-right-item-three {\n    display: grid;\n    grid-column: 1/2;\n    grid-row: 1/3;\n}\n.feels-like {\n    padding: 10px;\n}\n.sunrise {\n    padding: 10px;\n}\n.sunset {\n    padding: 10px;\n}\n.feels-like-title {\n    font-size: .7rem;\n    text-align: start;\n}\n.feels-like-temp {\n    text-align: start;\n}\n.feels-like-icon {\n    background-size: cover;\n    width: 25px;\n}\n.sunrise-title {\n    font-size: .7rem;\n    text-align: start;\n}\n.sunrise-icon {\n    background-size: cover;\n    width: 25px;\n}\n.sunset-title {\n    font-size: .7rem;\n    text-align: start;\n}\n.sunset-icon {\n    width: 25px;\n    background-size: cover;\n}\n.error-message.hidden {\n    display: none;\n    max-width: 150px;\n}\n\n.forecast {\n    position: fixed;\n    width: 100%;\n    bottom: 35px;\n}\n.five-day-forecast {\n    padding: 10px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n.forecast-day {\n    padding: 5px;\n    display: inline-block;\n    width: 15vw;\n    height: 15vw;\n    border-radius: 5px;\n}\n.day-of-week {\n    font-size: 1rem;\n    padding-bottom: 10px;\n}\n.day-high {\n    font-weight: 600;\n    font-family: 'Aboreto', cursive;\n    font-size: 1rem;\n}\n.day-low {\n    font-family: 'Aboreto', cursive;\n    font-size: .6rem;\n}\n.day-icon {\n    width: 50px;\n}\n@media only screen and (max-width: 400px) {\n    .forecast {\n        bottom: 0px;\n    }\n    .five-day-forecast {\n        flex-direction: column;\n        padding-left: 5%;\n    }\n    .forecast-day {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n        padding: 12px;\n    }\n    .day-of-week {\n        grid-column: 2/3;\n        grid-row: 1/2;\n    }\n    .day-high {\n        grid-column: 2/3;\n        grid-row: 2/3\n    }\n    .day-low {\n        grid-column: 2/3;\n        grid-row: 3/4;\n    }\n    .day-icon {\n        grid-row: 1/3;\n        grid-column: 1/2;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;AACA;IACI,mCAAmC;IACnC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,QAAQ;IACR,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,+BAA+B;AACnC;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,+BAA+B;AACnC;AACA;IACI,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,eAAe;IACf,+BAA+B;AACnC;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,+BAA+B;IAC/B,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,WAAW;AACf;AACA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,YAAY;IACZ,8BAA8B;AAClC;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,0BAA0B;IAC1B,eAAe;IACf,QAAQ;IACR,UAAU;AACd;AACA;IACI,aAAa;IACb,+BAA+B;IAC/B,2BAA2B;AAC/B;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB;AACJ;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,YAAY;AAChB;AACA;IACI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,oBAAoB;AACxB;AACA;IACI,gBAAgB;IAChB,+BAA+B;IAC/B,eAAe;AACnB;AACA;IACI,+BAA+B;IAC/B,gBAAgB;AACpB;AACA;IACI,WAAW;AACf;AACA;IACI;QACI,WAAW;IACf;IACA;QACI,sBAAsB;QACtB,gBAAgB;IACpB;IACA;QACI,aAAa;QACb,8BAA8B;QAC9B,+BAA+B;QAC/B,aAAa;IACjB;IACA;QACI,gBAAgB;QAChB,aAAa;IACjB;IACA;QACI,gBAAgB;QAChB;IACJ;IACA;QACI,gBAAgB;QAChB,aAAa;IACjB;IACA;QACI,aAAa;QACb,gBAAgB;IACpB;AACJ","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n}\n.main-content {\n    background-color: rgb(41, 158, 173);\n    width: 100vw;\n    height: 100vh;\n}\n\n.top-left, .top-right, .bottom {\n    position: absolute;\n}\n\n.top-left {\n    display: flex;\n    flex-direction: column;\n    padding: 25px;\n    top: 0px;\n    left: 0px;\n}\n.city-title {\n    font-size: 1.3rem;\n    font-family: 'Lobster', cursive;\n}\n.weather-description {\n    padding-bottom: 7px;\n    font-size: .7rem;\n    font-family: 'Aboreto', cursive;\n}\n.todays-date, .todays-time {\n    font-size: .7rem;\n}\n.current-temperature {\n    padding-top: 15px;\n    font-size: 2rem;\n    font-family: 'Aboreto', cursive;\n}\n.change-units {\n    text-align: start;\n    font-size: .5rem;\n    font-family: 'Aboreto', cursive;\n    background: none;\n    border: none;\n    cursor: pointer;\n}\n.weather-icon {\n    width: 75px;\n}\n.city-input {\n    padding: 0px 0px 3px 7px;\n    background: none;\n    border: none;\n    border-bottom: 1px solid black;\n}\n.city-input::placeholder {\n    color: lightgray;\n}\n.cityInput:focus {\n    outline: none;\n    color: pink;\n}\n.getWeatherBtn {\n    background: none;\n    border: none;\n    cursor: pointer;\n}\n.top-right {\n    padding: 25px 10px 0px 0px;\n    text-align: end;\n    top: 0px;\n    right: 0px;\n}\n.top-right-container {\n    display: grid;\n    grid-template-columns: .4fr 1fr;\n    grid-template-rows: 1fr 1fr;\n}\n.top-right-item-one {\n    display: grid;\n    grid-column: 2/3;\n    grid-row: 1/3;\n}\n.top-right-item-two {\n    display: grid;\n    grid-column: 2/3;\n    grid-row: 2/3\n}\n.top-right-item-three {\n    display: grid;\n    grid-column: 1/2;\n    grid-row: 1/3;\n}\n.feels-like {\n    padding: 10px;\n}\n.sunrise {\n    padding: 10px;\n}\n.sunset {\n    padding: 10px;\n}\n.feels-like-title {\n    font-size: .7rem;\n    text-align: start;\n}\n.feels-like-temp {\n    text-align: start;\n}\n.feels-like-icon {\n    background-size: cover;\n    width: 25px;\n}\n.sunrise-title {\n    font-size: .7rem;\n    text-align: start;\n}\n.sunrise-icon {\n    background-size: cover;\n    width: 25px;\n}\n.sunset-title {\n    font-size: .7rem;\n    text-align: start;\n}\n.sunset-icon {\n    width: 25px;\n    background-size: cover;\n}\n.error-message.hidden {\n    display: none;\n    max-width: 150px;\n}\n\n.forecast {\n    position: fixed;\n    width: 100%;\n    bottom: 35px;\n}\n.five-day-forecast {\n    padding: 10px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n.forecast-day {\n    padding: 5px;\n    display: inline-block;\n    width: 15vw;\n    height: 15vw;\n    border-radius: 5px;\n}\n.day-of-week {\n    font-size: 1rem;\n    padding-bottom: 10px;\n}\n.day-high {\n    font-weight: 600;\n    font-family: 'Aboreto', cursive;\n    font-size: 1rem;\n}\n.day-low {\n    font-family: 'Aboreto', cursive;\n    font-size: .6rem;\n}\n.day-icon {\n    width: 50px;\n}\n@media only screen and (max-width: 400px) {\n    .forecast {\n        bottom: 0px;\n    }\n    .five-day-forecast {\n        flex-direction: column;\n        padding-left: 5%;\n    }\n    .forecast-day {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n        padding: 12px;\n    }\n    .day-of-week {\n        grid-column: 2/3;\n        grid-row: 1/2;\n    }\n    .day-high {\n        grid-column: 2/3;\n        grid-row: 2/3\n    }\n    .day-low {\n        grid-column: 2/3;\n        grid-row: 3/4;\n    }\n    .day-icon {\n        grid-row: 1/3;\n        grid-column: 1/2;\n    }\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/getDay/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/functions/api_manipulation.js":
/*!*******************************************!*\
  !*** ./src/functions/api_manipulation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityWeatherUrl": () => (/* binding */ CityWeatherUrl),
/* harmony export */   "fetchForecast": () => (/* binding */ fetchForecast),
/* harmony export */   "fetchWeatherData": () => (/* binding */ fetchWeatherData),
/* harmony export */   "getCityCoords": () => (/* binding */ getCityCoords),
/* harmony export */   "getCitySun": () => (/* binding */ getCitySun),
/* harmony export */   "getWeatherIcon": () => (/* binding */ getWeatherIcon)
/* harmony export */ });
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_manipulation */ "./src/functions/dom_manipulation.js");


let CityWeatherUrl = (cityName, units) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=05f38c988f47ba62b87ed1de9b4136f4&units=${units}`
};

let fetchForecastUrl = (data) => {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&appid=05f38c988f47ba62b87ed1de9b4136f4&units=${data.units}`
}

let getCitySun = async (lat, lon, timezone) => {
    let citySun = await fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&timezone=${timezone}&date=today`)
    const sunData = await citySun.json();
        return sunData.results
};

let getWeatherIcon = async (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}

let fetchWeatherData = async (cityName, units) => {
    let url = CityWeatherUrl(cityName, units)
    try {
        let response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(`Error at line 21... ${error}`)
    }
};

let fetchForecast = async (data) => {
    try {
    let url = fetchForecastUrl(data);
    let response = await fetch(url)
        return await response.json();
    }
    catch (error) {
        console.log(`Error at line 21... ${error}`)
    }
}

let getCityCoords = async (cityName) => {
    try {
    let url = CityWeatherUrl(cityName, _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.currentData.units);
    let response = await fetch(url)
    let cityCoords = await response.json()
        return cityCoords.coord
    } catch (error) {
        console.log(`Error at line 21... ${error}`)
    }
};



/***/ }),

/***/ "./src/functions/dom_manipulation.js":
/*!*******************************************!*\
  !*** ./src/functions/dom_manipulation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentData": () => (/* binding */ currentData),
/* harmony export */   "displayForecast": () => (/* binding */ displayForecast),
/* harmony export */   "displayWeatherData": () => (/* binding */ displayWeatherData),
/* harmony export */   "fetchForecast": () => (/* reexport safe */ _api_manipulation__WEBPACK_IMPORTED_MODULE_0__.fetchForecast),
/* harmony export */   "fetchWeatherData": () => (/* reexport safe */ _api_manipulation__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData),
/* harmony export */   "getCityCoords": () => (/* reexport safe */ _api_manipulation__WEBPACK_IMPORTED_MODULE_0__.getCityCoords),
/* harmony export */   "loadNewCity": () => (/* binding */ loadNewCity),
/* harmony export */   "onLoad": () => (/* binding */ onLoad),
/* harmony export */   "reLoad": () => (/* binding */ reLoad),
/* harmony export */   "setDate": () => (/* binding */ setDate),
/* harmony export */   "setWeatherData": () => (/* binding */ setWeatherData)
/* harmony export */ });
/* harmony import */ var _api_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_manipulation */ "./src/functions/api_manipulation.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format */ "./src/functions/format.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");





const cityTitle = document.querySelector('.city-title');
const weatherDescription = document.querySelector('.weather-description');
const todaysDate = document.querySelector('.todays-date');
const todaysTime = document.querySelector('.todays-time');
const currentTemp = document.querySelector('.current-temperature');
const weatherIcon = document.querySelector('.weather-icon');
const unitsBtn = document.querySelector('.change-units')
const cityInput = document.querySelector('.city-input');
const errorMessage = document.querySelector('.error-message')

const feelsLike = document.querySelector('.feels-like-temp')
const sunriseTime = document.querySelector('.sunrise-time');
const sunsetTime = document.querySelector('.sunset-time')

let fiveDayForecast = document.querySelector('.five-day-forecast')

let currentData = {units: 'metric'}

let getDayOfWeek = (dayOfWeek) => {
    if (dayOfWeek == '0') {
        return 'Sunday'
    } else if (dayOfWeek == '1') {
        return 'Monday'
    } else if (dayOfWeek == '2') {
        return 'Tuesday'
    } else if (dayOfWeek == '3') {
        return 'Wednesday'
    } else if (dayOfWeek == '4') {
        return 'Thursday'
    } else if (dayOfWeek == '5') {
        return 'Friday'
    } else if (dayOfWeek == '6') {
        return 'Saturday'   
    }
}

let displayForecast = async (data) => {
    try {
    let units
    if (currentData.units === 'imperial') {
        units = ' °F'
    } else {
        units = ' °C'
    }
    let forecastParent = fiveDayForecast.children
    for (let i = 0; i < forecastParent.length; i++) {
        forecastParent[i].children[3].src = await (0,_api_manipulation__WEBPACK_IMPORTED_MODULE_0__.getWeatherIcon)(data.list[((i+1)*8) -4].weather[0].icon)
        forecastParent[i].children[0].textContent = getDayOfWeek((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(data.list[((i+1)*8) -4].dt_txt.split(' ')[0])))
        forecastParent[i].children[2].textContent = `${Math.round(data.list[((i+1)*8) -4].main.temp)} ${units}`;
        forecastParent[i].children[1].textContent = `${Math.round(data.list[i*8].main.temp)} ${units}`;
    } 
        errorMessage.classList.add('hidden')
    } catch (error) {
        errorMessage.classList.remove('hidden')
    }
}

let loadNewCity = async () => {
    let data = await (0,_api_manipulation__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)(cityInput.value, currentData.units);
    try {
    setWeatherData(data)
    let weatherIcon = await (0,_api_manipulation__WEBPACK_IMPORTED_MODULE_0__.getWeatherIcon)(currentData.icon);
    displayWeatherIcon(weatherIcon);
    displayWeatherData()
    cityInput.value = ''
    let forecastData = await (0,_api_manipulation__WEBPACK_IMPORTED_MODULE_0__.fetchForecast)(currentData)
    let cityCoords = await (0,_api_manipulation__WEBPACK_IMPORTED_MODULE_0__.getCityCoords)(currentData.title);
    let sunData = await (0,_api_manipulation__WEBPACK_IMPORTED_MODULE_0__.getCitySun)(cityCoords.lat, cityCoords.lon, currentData.timezone);
    displaySunData(sunData)
    displayForecast(forecastData);
    setDate();
        errorMessage.classList.add('hidden')
    } catch (error) {
        errorMessage.classList.remove('hidden')
    }
}

let displayWeatherIcon = (icon) => {
    weatherIcon.src = icon
}

let onLoad = async () => {
    let cityWeatherData = await (0,_api_manipulation__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)('santa cruz de tenerife', 'metric');
    setWeatherData(cityWeatherData)
    let weatherIcon = await (0,_api_manipulation__WEBPACK_IMPORTED_MODULE_0__.getWeatherIcon)(currentData.icon);
    displayWeatherIcon(weatherIcon);
    let cityCoords = await (0,_api_manipulation__WEBPACK_IMPORTED_MODULE_0__.getCityCoords)('santa cruz de tenerife');
    let sunData = await (0,_api_manipulation__WEBPACK_IMPORTED_MODULE_0__.getCitySun)(cityCoords.lat, cityCoords.lon, currentData.timezone);
    displaySunData(sunData)
    setDate();
    displayWeatherData(currentData)
    let forecastData = await (0,_api_manipulation__WEBPACK_IMPORTED_MODULE_0__.fetchForecast)(currentData)
    displayForecast(forecastData);
};

let reLoad = async () => {
    if (currentData.units === 'imperial') {
        currentData.units = 'metric'
        unitsBtn.textContent = 'Display °F'
        let cityWeatherData = await (0,_api_manipulation__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)(currentData.title, 'metric');
        setWeatherData(cityWeatherData)
    } else {
        currentData.units = 'imperial'
        unitsBtn.textContent = 'Display °C'
        let cityWeatherData = await (0,_api_manipulation__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)(currentData.title, 'imperial')
        setWeatherData(cityWeatherData)
    }
    let forecast = await (0,_api_manipulation__WEBPACK_IMPORTED_MODULE_0__.fetchForecast)(currentData);
    displayWeatherData()
    displayForecast(forecast)
};

let displaySunData = (data) => {
    sunriseTime.textContent = data.sunrise
    sunsetTime.textContent = data.sunset
};

let displayWeatherData = () => {
    let units
    if (currentData.units === 'imperial') {
        units = ' °F'
    } else {
        units = ' °C'
    }
    cityTitle.textContent = currentData.title;
    currentTemp.textContent = ` ${Math.round(currentData.temp)} ${units}`
    weatherDescription.textContent = currentData.weather
    feelsLike.textContent = `${Math.round(currentData.feelsLike)} ${units}`;
};

let setWeatherData = (data) => {
    currentData.icon = data.weather[0].icon
    currentData.timezone = (0,_format__WEBPACK_IMPORTED_MODULE_1__.getTimeZone)(data.timezone)
    currentData.lon = data.coord.lon
    currentData.lat = data.coord.lat
    currentData.title = data.name;
    currentData.temp = Math.round(data.main.temp);
    currentData.weather = data.weather[0].description;
    currentData.feelsLike = Math.round(data.main.feels_like);
};

let setDate = () => {
    todaysDate.textContent = (0,_format__WEBPACK_IMPORTED_MODULE_1__.formatDate)('day', currentData.timezone)
    todaysTime.textContent = (0,_format__WEBPACK_IMPORTED_MODULE_1__.formatDate)('time', currentData.timezone)
};




/***/ }),

/***/ "./src/functions/format.js":
/*!*********************************!*\
  !*** ./src/functions/format.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "getTimeZone": () => (/* binding */ getTimeZone),
/* harmony export */   "getTodaysDate": () => (/* binding */ getTodaysDate)
/* harmony export */ });
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_manipulation */ "./src/functions/dom_manipulation.js");


let getTodaysDate = (timezone) => {
    return new Date().toLocaleString("en-US", { timeZone: `${timezone}` });
};

let formatDate = (request) => {
    if (request === 'day') {
        let dateArray = []
        let day = new Date().toString();
        let splitDay = day.split(' ')
        if (splitDay[0] === 'Mon') {
            dateArray.push('Monday,');
        } else if (splitDay[0] === 'Tue') {
            dateArray.push('Tuesday,')
        } else if (splitDay[0] === 'Wed') {
            dateArray.push('Wednesday,')
        } else if (splitDay[0] === 'Thu') {
            dateArray.push('Thursday,')
        } else if (splitDay[0] === 'Fri') {
            dateArray.push('Friday,')
        } else if (splitDay[0] === 'Sat') {
            dateArray.push('Saturday,')
        } else if (splitDay[0] === 'Sun') {
            dateArray.push('Sunday,')
        }
        if (splitDay[2].slice(-1) == '1') {
            dateArray.push(`${splitDay[2]}st`)
        } else if (splitDay[2].slice(-1) == '2') {
            dateArray.push(`${splitDay[2]}nd`)
        } else if (splitDay[2].slice(-1) == '3') {
            dateArray.push(`${splitDay[2]}rd`)
        } else {
            dateArray.push(`${splitDay[2]}th`)
        }
        dateArray.push(splitDay[1])
        dateArray.push(splitDay[3])
        return dateArray.join(' ')
    } else if (request === 'time') {
        return getTodaysDate(_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.currentData.timezone)
        .split(', ')
        .splice(1)
        .join(':')
    }
};

let getTimeZone = (inSeconds) => {
    if (inSeconds == '0') {
        return 'UTC'
    } else if (inSeconds == '3600') {
        return 'Africa/Lagos'
    } else if (inSeconds == '7200') {
        return 'Europe/Helsinki'
    } else if (inSeconds == '10800') {
        return 'Asia/Baghdad'
    } else if (inSeconds == '14400') {
        return 'Indian/Maldives'
    } else if (inSeconds == '18000') {
        return 'Asia/Dacca'
    } else if (inSeconds == '21600') {
        return 'Asia/Jakarta'
    } else if (inSeconds == '25200') {
        return 'Antarctica/Davis'
    } else if (inSeconds == '28800') {
        return 'Australia/Perth'
    } else if (inSeconds == '32400') {
        return 'Asia/Tokyo'
    } else if (inSeconds == '36000') {
        return 'Pacific/Port_Moresby'
    } else if (inSeconds == '39600') {
        return 'Australia/Sydney'
    } else if (inSeconds == '43200') {
        return 'Pacific/Auckland'
    } else if (inSeconds == '46800') {
        return 'Pacific/Auckland'
    } else if (inSeconds == '-3600') {
        return 'Atlantic/Cape_Verde'
    } else if (inSeconds == '-7200') {
        return 'Brazil/DeNoronha'
    } else if (inSeconds == '-10800') {
        return 'America/Buenos_Aires'
    } else if (inSeconds == '-12600') {
        return 'America/Guadeloupe'
    } else if (inSeconds == '-14400') {
        return 'America/Jamaica'
    } else if (inSeconds == '-18000') {
        return 'America/Boise'
    } else if (inSeconds == '-21600') {
        return 'America/Phoenix'
    } else if (inSeconds == '-25200') {
        return 'America/Anchorage'
    } else if (inSeconds == '-28800') {
        return 'Pacific/Gambier'
    } else if (inSeconds == '-32400') {
        return 'Pacific/Honolulu'
    } else if (inSeconds == '-36000') {
        return 'Pacific/Midway'
    } else if (inSeconds == '-39600') {
        return 'Etc/GMT+12'
    }
};



/***/ }),

/***/ "./src/assets/sunrise.png":
/*!********************************!*\
  !*** ./src/assets/sunrise.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f5e046e2cbcd8b81a61.png";

/***/ }),

/***/ "./src/assets/sunset.png":
/*!*******************************!*\
  !*** ./src/assets/sunset.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "381ab1fe403b667482ee.png";

/***/ }),

/***/ "./src/assets/thermometer.png":
/*!************************************!*\
  !*** ./src/assets/thermometer.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ea88298a6e8fce6d848.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_functions_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/functions/dom_manipulation */ "./src/functions/dom_manipulation.js");
/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/styles.css */ "./src/styles.css");
/* harmony import */ var _src_assets_thermometer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/assets/thermometer.png */ "./src/assets/thermometer.png");
/* harmony import */ var _src_assets_sunrise_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/assets/sunrise.png */ "./src/assets/sunrise.png");
/* harmony import */ var _src_assets_sunset_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/assets/sunset.png */ "./src/assets/sunset.png");








const weatherBtn = document.querySelector('.getWeatherBtn');
const unitBtn = document.querySelector('.change-units');

(0,_src_functions_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.onLoad)()

weatherBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    (0,_src_functions_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.loadNewCity)();
});

unitBtn.addEventListener('click', () => {
    (0,_src_functions_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.reLoad)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7O0FDdExpQztBQUNpQjtBQUN6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QSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0Y7O0FBRTNDOztBQUVpQjtBQUNSO0FBQ0Y7O0FBRTVDO0FBQ0E7O0FBRUEsdUVBQU07O0FBRU47QUFDQTtBQUNBLElBQUksNEVBQVc7QUFDZixDQUFDOztBQUVEO0FBQ0EsSUFBSSx1RUFBTTtBQUNWLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXREYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2FwaV9tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2RvbV9tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCAxNTgsIDE3Myk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnRvcC1sZWZ0LCAudG9wLXJpZ2h0LCAuYm90dG9tIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4udG9wLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogMHB4O1xcbn1cXG4uY2l0eS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcbn1cXG4ud2VhdGhlci1kZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQWJvcmV0bycsIGN1cnNpdmU7XFxufVxcbi50b2RheXMtZGF0ZSwgLnRvZGF5cy10aW1lIHtcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXG59XFxuLmN1cnJlbnQtdGVtcGVyYXR1cmUge1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LWZhbWlseTogJ0Fib3JldG8nLCBjdXJzaXZlO1xcbn1cXG4uY2hhbmdlLXVuaXRzIHtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQWJvcmV0bycsIGN1cnNpdmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ud2VhdGhlci1pY29uIHtcXG4gICAgd2lkdGg6IDc1cHg7XFxufVxcbi5jaXR5LWlucHV0IHtcXG4gICAgcGFkZGluZzogMHB4IDBweCAzcHggN3B4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuLmNpdHktaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuLmNpdHlJbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiBwaW5rO1xcbn1cXG4uZ2V0V2VhdGhlckJ0biB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udG9wLXJpZ2h0IHtcXG4gICAgcGFkZGluZzogMjVweCAxMHB4IDBweCAwcHg7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxufVxcbi50b3AtcmlnaHQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuNGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG4udG9wLXJpZ2h0LWl0ZW0tb25lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG59XFxuLnRvcC1yaWdodC1pdGVtLXR3byB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyLzNcXG59XFxuLnRvcC1yaWdodC1pdGVtLXRocmVlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG59XFxuLmZlZWxzLWxpa2Uge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uc3VucmlzZSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5zdW5zZXQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uZmVlbHMtbGlrZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4uZmVlbHMtbGlrZS10ZW1wIHtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5mZWVscy1saWtlLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogMjVweDtcXG59XFxuLnN1bnJpc2UtdGl0bGUge1xcbiAgICBmb250LXNpemU6IC43cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLnN1bnJpc2UtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAyNXB4O1xcbn1cXG4uc3Vuc2V0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5zdW5zZXQtaWNvbiB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uZXJyb3ItbWVzc2FnZS5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3R0b206IDM1cHg7XFxufVxcbi5maXZlLWRheS1mb3JlY2FzdCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZm9yZWNhc3QtZGF5IHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBoZWlnaHQ6IDE1dnc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmRheS1vZi13ZWVrIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLmRheS1oaWdoIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdBYm9yZXRvJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uZGF5LWxvdyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWJvcmV0bycsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogLjZyZW07XFxufVxcbi5kYXktaWNvbiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAgIC5mb3JlY2FzdCB7XFxuICAgICAgICBib3R0b206IDBweDtcXG4gICAgfVxcbiAgICAuZml2ZS1kYXktZm9yZWNhc3Qge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XFxuICAgIH1cXG4gICAgLmZvcmVjYXN0LWRheSB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIH1cXG4gICAgLmRheS1vZi13ZWVrIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgICAgICBncmlkLXJvdzogMS8yO1xcbiAgICB9XFxuICAgIC5kYXktaGlnaCB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICAgICAgZ3JpZC1yb3c6IDIvM1xcbiAgICB9XFxuICAgIC5kYXktbG93IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgICAgICBncmlkLXJvdzogMy80O1xcbiAgICB9XFxuICAgIC5kYXktaWNvbiB7XFxuICAgICAgICBncmlkLXJvdzogMS8zO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0FBQ2I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixRQUFRO0lBQ1IsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QiwrQkFBK0I7UUFDL0IsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQjtJQUNKO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDE1OCwgMTczKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4udG9wLWxlZnQsIC50b3AtcmlnaHQsIC5ib3R0b20ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi50b3AtbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxufVxcbi5jaXR5LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxufVxcbi53ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdBYm9yZXRvJywgY3Vyc2l2ZTtcXG59XFxuLnRvZGF5cy1kYXRlLCAudG9kYXlzLXRpbWUge1xcbiAgICBmb250LXNpemU6IC43cmVtO1xcbn1cXG4uY3VycmVudC10ZW1wZXJhdHVyZSB7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnQWJvcmV0bycsIGN1cnNpdmU7XFxufVxcbi5jaGFuZ2UtdW5pdHMge1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdBYm9yZXRvJywgY3Vyc2l2ZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi53ZWF0aGVyLWljb24ge1xcbiAgICB3aWR0aDogNzVweDtcXG59XFxuLmNpdHktaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwcHggMHB4IDNweCA3cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uY2l0eS1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbn1cXG4uY2l0eUlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHBpbms7XFxufVxcbi5nZXRXZWF0aGVyQnRuIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b3AtcmlnaHQge1xcbiAgICBwYWRkaW5nOiAyNXB4IDEwcHggMHB4IDBweDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICB0b3A6IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG59XFxuLnRvcC1yaWdodC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC40ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcbi50b3AtcmlnaHQtaXRlbS1vbmUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbn1cXG4udG9wLXJpZ2h0LWl0ZW0tdHdvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDIvM1xcbn1cXG4udG9wLXJpZ2h0LWl0ZW0tdGhyZWUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbn1cXG4uZmVlbHMtbGlrZSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5zdW5yaXNlIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLnN1bnNldCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5mZWVscy1saWtlLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5mZWVscy1saWtlLXRlbXAge1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLmZlZWxzLWxpa2UtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAyNXB4O1xcbn1cXG4uc3VucmlzZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4uc3VucmlzZS1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDI1cHg7XFxufVxcbi5zdW5zZXQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IC43cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLnN1bnNldC1pY29uIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi5lcnJvci1tZXNzYWdlLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvdHRvbTogMzVweDtcXG59XFxuLmZpdmUtZGF5LWZvcmVjYXN0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5mb3JlY2FzdC1kYXkge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIGhlaWdodDogMTV2dztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uZGF5LW9mLXdlZWsge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4uZGF5LWhpZ2gge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogJ0Fib3JldG8nLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcbi5kYXktbG93IHtcXG4gICAgZm9udC1mYW1pbHk6ICdBYm9yZXRvJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAuNnJlbTtcXG59XFxuLmRheS1pY29uIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gICAgLmZvcmVjYXN0IHtcXG4gICAgICAgIGJvdHRvbTogMHB4O1xcbiAgICB9XFxuICAgIC5maXZlLWRheS1mb3JlY2FzdCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gICAgfVxcbiAgICAuZm9yZWNhc3QtZGF5IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICAgICAgcGFkZGluZzogMTJweDtcXG4gICAgfVxcbiAgICAuZGF5LW9mLXdlZWsge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIH1cXG4gICAgLmRheS1oaWdoIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgICAgICBncmlkLXJvdzogMi8zXFxuICAgIH1cXG4gICAgLmRheS1sb3cge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIH1cXG4gICAgLmRheS1pY29uIHtcXG4gICAgICAgIGdyaWQtcm93OiAxLzM7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXREYXlcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7MHwxfDJ8M3w0fDV8Nn0gdGhlIGRheSBvZiB3ZWVrLCAwIHJlcHJlc2VudHMgU3VuZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB3ZWVrIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXkobmV3IERhdGUoMjAxMiwgMSwgMjkpKVxuICogLy89PiAzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHJldHVybiBkYXk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3VycmVudERhdGEgfSBmcm9tIFwiLi9kb21fbWFuaXB1bGF0aW9uXCI7XG5cbmxldCBDaXR5V2VhdGhlclVybCA9IChjaXR5TmFtZSwgdW5pdHMpID0+IHtcbiAgICByZXR1cm4gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9MDVmMzhjOTg4ZjQ3YmE2MmI4N2VkMWRlOWI0MTM2ZjQmdW5pdHM9JHt1bml0c31gXG59O1xuXG5sZXQgZmV0Y2hGb3JlY2FzdFVybCA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7ZGF0YS5sYXR9Jmxvbj0ke2RhdGEubG9ufSZhcHBpZD0wNWYzOGM5ODhmNDdiYTYyYjg3ZWQxZGU5YjQxMzZmNCZ1bml0cz0ke2RhdGEudW5pdHN9YFxufVxuXG5sZXQgZ2V0Q2l0eVN1biA9IGFzeW5jIChsYXQsIGxvbiwgdGltZXpvbmUpID0+IHtcbiAgICBsZXQgY2l0eVN1biA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5zdW5yaXNlc3Vuc2V0LmlvL2pzb24/bGF0PSR7bGF0fSZsbmc9JHtsb259JnRpbWV6b25lPSR7dGltZXpvbmV9JmRhdGU9dG9kYXlgKVxuICAgIGNvbnN0IHN1bkRhdGEgPSBhd2FpdCBjaXR5U3VuLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHN1bkRhdGEucmVzdWx0c1xufTtcblxubGV0IGdldFdlYXRoZXJJY29uID0gYXN5bmMgKGljb25Db2RlKSA9PiB7XG4gICAgcmV0dXJuIGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29uQ29kZX1AMngucG5nYFxufVxuXG5sZXQgZmV0Y2hXZWF0aGVyRGF0YSA9IGFzeW5jIChjaXR5TmFtZSwgdW5pdHMpID0+IHtcbiAgICBsZXQgdXJsID0gQ2l0eVdlYXRoZXJVcmwoY2l0eU5hbWUsIHVuaXRzKVxuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBhdCBsaW5lIDIxLi4uICR7ZXJyb3J9YClcbiAgICB9XG59O1xuXG5sZXQgZmV0Y2hGb3JlY2FzdCA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICBsZXQgdXJsID0gZmV0Y2hGb3JlY2FzdFVybChkYXRhKTtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgYXQgbGluZSAyMS4uLiAke2Vycm9yfWApXG4gICAgfVxufVxuXG5sZXQgZ2V0Q2l0eUNvb3JkcyA9IGFzeW5jIChjaXR5TmFtZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgbGV0IHVybCA9IENpdHlXZWF0aGVyVXJsKGNpdHlOYW1lLCBjdXJyZW50RGF0YS51bml0cyk7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGxldCBjaXR5Q29vcmRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgIHJldHVybiBjaXR5Q29vcmRzLmNvb3JkXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yIGF0IGxpbmUgMjEuLi4gJHtlcnJvcn1gKVxuICAgIH1cbn07XG5cbmV4cG9ydCB7IENpdHlXZWF0aGVyVXJsLCBnZXRDaXR5U3VuLCBnZXRDaXR5Q29vcmRzLCBmZXRjaEZvcmVjYXN0LCBmZXRjaFdlYXRoZXJEYXRhLCBnZXRXZWF0aGVySWNvbiB9IiwiaW1wb3J0IHsgZ2V0V2VhdGhlckljb24sIGZldGNoRm9yZWNhc3QsIGZldGNoV2VhdGhlckRhdGEsIGdldENpdHlDb29yZHMsIGdldENpdHlTdW4gfSBmcm9tIFwiLi9hcGlfbWFuaXB1bGF0aW9uXCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlLCBnZXRUaW1lWm9uZSB9IGZyb20gXCIuL2Zvcm1hdFwiO1xuXG5pbXBvcnQgeyBnZXREYXksIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmNvbnN0IGNpdHlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LXRpdGxlJyk7XG5jb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1kZXNjcmlwdGlvbicpO1xuY29uc3QgdG9kYXlzRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheXMtZGF0ZScpO1xuY29uc3QgdG9kYXlzVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheXMtdGltZScpO1xuY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10ZW1wZXJhdHVyZScpO1xuY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pY29uJyk7XG5jb25zdCB1bml0c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtdW5pdHMnKVxuY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktaW5wdXQnKTtcbmNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tZXNzYWdlJylcblxuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UtdGVtcCcpXG5jb25zdCBzdW5yaXNlVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5yaXNlLXRpbWUnKTtcbmNvbnN0IHN1bnNldFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vuc2V0LXRpbWUnKVxuXG5sZXQgZml2ZURheUZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpdmUtZGF5LWZvcmVjYXN0JylcblxubGV0IGN1cnJlbnREYXRhID0ge3VuaXRzOiAnbWV0cmljJ31cblxubGV0IGdldERheU9mV2VlayA9IChkYXlPZldlZWspID0+IHtcbiAgICBpZiAoZGF5T2ZXZWVrID09ICcwJykge1xuICAgICAgICByZXR1cm4gJ1N1bmRheSdcbiAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PSAnMScpIHtcbiAgICAgICAgcmV0dXJuICdNb25kYXknXG4gICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT0gJzInKSB7XG4gICAgICAgIHJldHVybiAnVHVlc2RheSdcbiAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PSAnMycpIHtcbiAgICAgICAgcmV0dXJuICdXZWRuZXNkYXknXG4gICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT0gJzQnKSB7XG4gICAgICAgIHJldHVybiAnVGh1cnNkYXknXG4gICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT0gJzUnKSB7XG4gICAgICAgIHJldHVybiAnRnJpZGF5J1xuICAgIH0gZWxzZSBpZiAoZGF5T2ZXZWVrID09ICc2Jykge1xuICAgICAgICByZXR1cm4gJ1NhdHVyZGF5JyAgIFxuICAgIH1cbn1cblxubGV0IGRpc3BsYXlGb3JlY2FzdCA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICBsZXQgdW5pdHNcbiAgICBpZiAoY3VycmVudERhdGEudW5pdHMgPT09ICdpbXBlcmlhbCcpIHtcbiAgICAgICAgdW5pdHMgPSAnIMKwRidcbiAgICB9IGVsc2Uge1xuICAgICAgICB1bml0cyA9ICcgwrBDJ1xuICAgIH1cbiAgICBsZXQgZm9yZWNhc3RQYXJlbnQgPSBmaXZlRGF5Rm9yZWNhc3QuY2hpbGRyZW5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0UGFyZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcmVjYXN0UGFyZW50W2ldLmNoaWxkcmVuWzNdLnNyYyA9IGF3YWl0IGdldFdlYXRoZXJJY29uKGRhdGEubGlzdFsoKGkrMSkqOCkgLTRdLndlYXRoZXJbMF0uaWNvbilcbiAgICAgICAgZm9yZWNhc3RQYXJlbnRbaV0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBnZXREYXlPZldlZWsoZ2V0RGF5KHBhcnNlSVNPKGRhdGEubGlzdFsoKGkrMSkqOCkgLTRdLmR0X3R4dC5zcGxpdCgnICcpWzBdKSkpXG4gICAgICAgIGZvcmVjYXN0UGFyZW50W2ldLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmxpc3RbKChpKzEpKjgpIC00XS5tYWluLnRlbXApfSAke3VuaXRzfWA7XG4gICAgICAgIGZvcmVjYXN0UGFyZW50W2ldLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmxpc3RbaSo4XS5tYWluLnRlbXApfSAke3VuaXRzfWA7XG4gICAgfSBcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgfVxufVxuXG5sZXQgbG9hZE5ld0NpdHkgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGNpdHlJbnB1dC52YWx1ZSwgY3VycmVudERhdGEudW5pdHMpO1xuICAgIHRyeSB7XG4gICAgc2V0V2VhdGhlckRhdGEoZGF0YSlcbiAgICBsZXQgd2VhdGhlckljb24gPSBhd2FpdCBnZXRXZWF0aGVySWNvbihjdXJyZW50RGF0YS5pY29uKTtcbiAgICBkaXNwbGF5V2VhdGhlckljb24od2VhdGhlckljb24pO1xuICAgIGRpc3BsYXlXZWF0aGVyRGF0YSgpXG4gICAgY2l0eUlucHV0LnZhbHVlID0gJydcbiAgICBsZXQgZm9yZWNhc3REYXRhID0gYXdhaXQgZmV0Y2hGb3JlY2FzdChjdXJyZW50RGF0YSlcbiAgICBsZXQgY2l0eUNvb3JkcyA9IGF3YWl0IGdldENpdHlDb29yZHMoY3VycmVudERhdGEudGl0bGUpO1xuICAgIGxldCBzdW5EYXRhID0gYXdhaXQgZ2V0Q2l0eVN1bihjaXR5Q29vcmRzLmxhdCwgY2l0eUNvb3Jkcy5sb24sIGN1cnJlbnREYXRhLnRpbWV6b25lKTtcbiAgICBkaXNwbGF5U3VuRGF0YShzdW5EYXRhKVxuICAgIGRpc3BsYXlGb3JlY2FzdChmb3JlY2FzdERhdGEpO1xuICAgIHNldERhdGUoKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgfVxufVxuXG5sZXQgZGlzcGxheVdlYXRoZXJJY29uID0gKGljb24pID0+IHtcbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBpY29uXG59XG5cbmxldCBvbkxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNpdHlXZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEoJ3NhbnRhIGNydXogZGUgdGVuZXJpZmUnLCAnbWV0cmljJyk7XG4gICAgc2V0V2VhdGhlckRhdGEoY2l0eVdlYXRoZXJEYXRhKVxuICAgIGxldCB3ZWF0aGVySWNvbiA9IGF3YWl0IGdldFdlYXRoZXJJY29uKGN1cnJlbnREYXRhLmljb24pO1xuICAgIGRpc3BsYXlXZWF0aGVySWNvbih3ZWF0aGVySWNvbik7XG4gICAgbGV0IGNpdHlDb29yZHMgPSBhd2FpdCBnZXRDaXR5Q29vcmRzKCdzYW50YSBjcnV6IGRlIHRlbmVyaWZlJyk7XG4gICAgbGV0IHN1bkRhdGEgPSBhd2FpdCBnZXRDaXR5U3VuKGNpdHlDb29yZHMubGF0LCBjaXR5Q29vcmRzLmxvbiwgY3VycmVudERhdGEudGltZXpvbmUpO1xuICAgIGRpc3BsYXlTdW5EYXRhKHN1bkRhdGEpXG4gICAgc2V0RGF0ZSgpO1xuICAgIGRpc3BsYXlXZWF0aGVyRGF0YShjdXJyZW50RGF0YSlcbiAgICBsZXQgZm9yZWNhc3REYXRhID0gYXdhaXQgZmV0Y2hGb3JlY2FzdChjdXJyZW50RGF0YSlcbiAgICBkaXNwbGF5Rm9yZWNhc3QoZm9yZWNhc3REYXRhKTtcbn07XG5cbmxldCByZUxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnREYXRhLnVuaXRzID09PSAnaW1wZXJpYWwnKSB7XG4gICAgICAgIGN1cnJlbnREYXRhLnVuaXRzID0gJ21ldHJpYydcbiAgICAgICAgdW5pdHNCdG4udGV4dENvbnRlbnQgPSAnRGlzcGxheSDCsEYnXG4gICAgICAgIGxldCBjaXR5V2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGN1cnJlbnREYXRhLnRpdGxlLCAnbWV0cmljJyk7XG4gICAgICAgIHNldFdlYXRoZXJEYXRhKGNpdHlXZWF0aGVyRGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50RGF0YS51bml0cyA9ICdpbXBlcmlhbCdcbiAgICAgICAgdW5pdHNCdG4udGV4dENvbnRlbnQgPSAnRGlzcGxheSDCsEMnXG4gICAgICAgIGxldCBjaXR5V2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGN1cnJlbnREYXRhLnRpdGxlLCAnaW1wZXJpYWwnKVxuICAgICAgICBzZXRXZWF0aGVyRGF0YShjaXR5V2VhdGhlckRhdGEpXG4gICAgfVxuICAgIGxldCBmb3JlY2FzdCA9IGF3YWl0IGZldGNoRm9yZWNhc3QoY3VycmVudERhdGEpO1xuICAgIGRpc3BsYXlXZWF0aGVyRGF0YSgpXG4gICAgZGlzcGxheUZvcmVjYXN0KGZvcmVjYXN0KVxufTtcblxubGV0IGRpc3BsYXlTdW5EYXRhID0gKGRhdGEpID0+IHtcbiAgICBzdW5yaXNlVGltZS50ZXh0Q29udGVudCA9IGRhdGEuc3VucmlzZVxuICAgIHN1bnNldFRpbWUudGV4dENvbnRlbnQgPSBkYXRhLnN1bnNldFxufTtcblxubGV0IGRpc3BsYXlXZWF0aGVyRGF0YSA9ICgpID0+IHtcbiAgICBsZXQgdW5pdHNcbiAgICBpZiAoY3VycmVudERhdGEudW5pdHMgPT09ICdpbXBlcmlhbCcpIHtcbiAgICAgICAgdW5pdHMgPSAnIMKwRidcbiAgICB9IGVsc2Uge1xuICAgICAgICB1bml0cyA9ICcgwrBDJ1xuICAgIH1cbiAgICBjaXR5VGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50RGF0YS50aXRsZTtcbiAgICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGAgJHtNYXRoLnJvdW5kKGN1cnJlbnREYXRhLnRlbXApfSAke3VuaXRzfWBcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjdXJyZW50RGF0YS53ZWF0aGVyXG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChjdXJyZW50RGF0YS5mZWVsc0xpa2UpfSAke3VuaXRzfWA7XG59O1xuXG5sZXQgc2V0V2VhdGhlckRhdGEgPSAoZGF0YSkgPT4ge1xuICAgIGN1cnJlbnREYXRhLmljb24gPSBkYXRhLndlYXRoZXJbMF0uaWNvblxuICAgIGN1cnJlbnREYXRhLnRpbWV6b25lID0gZ2V0VGltZVpvbmUoZGF0YS50aW1lem9uZSlcbiAgICBjdXJyZW50RGF0YS5sb24gPSBkYXRhLmNvb3JkLmxvblxuICAgIGN1cnJlbnREYXRhLmxhdCA9IGRhdGEuY29vcmQubGF0XG4gICAgY3VycmVudERhdGEudGl0bGUgPSBkYXRhLm5hbWU7XG4gICAgY3VycmVudERhdGEudGVtcCA9IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXApO1xuICAgIGN1cnJlbnREYXRhLndlYXRoZXIgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgY3VycmVudERhdGEuZmVlbHNMaWtlID0gTWF0aC5yb3VuZChkYXRhLm1haW4uZmVlbHNfbGlrZSk7XG59O1xuXG5sZXQgc2V0RGF0ZSA9ICgpID0+IHtcbiAgICB0b2RheXNEYXRlLnRleHRDb250ZW50ID0gZm9ybWF0RGF0ZSgnZGF5JywgY3VycmVudERhdGEudGltZXpvbmUpXG4gICAgdG9kYXlzVGltZS50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUoJ3RpbWUnLCBjdXJyZW50RGF0YS50aW1lem9uZSlcbn07XG5cbmV4cG9ydCB7IGN1cnJlbnREYXRhLCBvbkxvYWQsIGxvYWROZXdDaXR5LCBmZXRjaFdlYXRoZXJEYXRhLCBzZXRXZWF0aGVyRGF0YSwgZGlzcGxheVdlYXRoZXJEYXRhLCByZUxvYWQsIGZldGNoRm9yZWNhc3QsIGRpc3BsYXlGb3JlY2FzdCwgc2V0RGF0ZSwgZ2V0Q2l0eUNvb3JkcyB9XG4iLCJpbXBvcnQgeyBjdXJyZW50RGF0YSB9IGZyb20gXCIuL2RvbV9tYW5pcHVsYXRpb25cIjtcblxubGV0IGdldFRvZGF5c0RhdGUgPSAodGltZXpvbmUpID0+IHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHsgdGltZVpvbmU6IGAke3RpbWV6b25lfWAgfSk7XG59O1xuXG5sZXQgZm9ybWF0RGF0ZSA9IChyZXF1ZXN0KSA9PiB7XG4gICAgaWYgKHJlcXVlc3QgPT09ICdkYXknKSB7XG4gICAgICAgIGxldCBkYXRlQXJyYXkgPSBbXVxuICAgICAgICBsZXQgZGF5ID0gbmV3IERhdGUoKS50b1N0cmluZygpO1xuICAgICAgICBsZXQgc3BsaXREYXkgPSBkYXkuc3BsaXQoJyAnKVxuICAgICAgICBpZiAoc3BsaXREYXlbMF0gPT09ICdNb24nKSB7XG4gICAgICAgICAgICBkYXRlQXJyYXkucHVzaCgnTW9uZGF5LCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHNwbGl0RGF5WzBdID09PSAnVHVlJykge1xuICAgICAgICAgICAgZGF0ZUFycmF5LnB1c2goJ1R1ZXNkYXksJylcbiAgICAgICAgfSBlbHNlIGlmIChzcGxpdERheVswXSA9PT0gJ1dlZCcpIHtcbiAgICAgICAgICAgIGRhdGVBcnJheS5wdXNoKCdXZWRuZXNkYXksJylcbiAgICAgICAgfSBlbHNlIGlmIChzcGxpdERheVswXSA9PT0gJ1RodScpIHtcbiAgICAgICAgICAgIGRhdGVBcnJheS5wdXNoKCdUaHVyc2RheSwnKVxuICAgICAgICB9IGVsc2UgaWYgKHNwbGl0RGF5WzBdID09PSAnRnJpJykge1xuICAgICAgICAgICAgZGF0ZUFycmF5LnB1c2goJ0ZyaWRheSwnKVxuICAgICAgICB9IGVsc2UgaWYgKHNwbGl0RGF5WzBdID09PSAnU2F0Jykge1xuICAgICAgICAgICAgZGF0ZUFycmF5LnB1c2goJ1NhdHVyZGF5LCcpXG4gICAgICAgIH0gZWxzZSBpZiAoc3BsaXREYXlbMF0gPT09ICdTdW4nKSB7XG4gICAgICAgICAgICBkYXRlQXJyYXkucHVzaCgnU3VuZGF5LCcpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNwbGl0RGF5WzJdLnNsaWNlKC0xKSA9PSAnMScpIHtcbiAgICAgICAgICAgIGRhdGVBcnJheS5wdXNoKGAke3NwbGl0RGF5WzJdfXN0YClcbiAgICAgICAgfSBlbHNlIGlmIChzcGxpdERheVsyXS5zbGljZSgtMSkgPT0gJzInKSB7XG4gICAgICAgICAgICBkYXRlQXJyYXkucHVzaChgJHtzcGxpdERheVsyXX1uZGApXG4gICAgICAgIH0gZWxzZSBpZiAoc3BsaXREYXlbMl0uc2xpY2UoLTEpID09ICczJykge1xuICAgICAgICAgICAgZGF0ZUFycmF5LnB1c2goYCR7c3BsaXREYXlbMl19cmRgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZUFycmF5LnB1c2goYCR7c3BsaXREYXlbMl19dGhgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGVBcnJheS5wdXNoKHNwbGl0RGF5WzFdKVxuICAgICAgICBkYXRlQXJyYXkucHVzaChzcGxpdERheVszXSlcbiAgICAgICAgcmV0dXJuIGRhdGVBcnJheS5qb2luKCcgJylcbiAgICB9IGVsc2UgaWYgKHJlcXVlc3QgPT09ICd0aW1lJykge1xuICAgICAgICByZXR1cm4gZ2V0VG9kYXlzRGF0ZShjdXJyZW50RGF0YS50aW1lem9uZSlcbiAgICAgICAgLnNwbGl0KCcsICcpXG4gICAgICAgIC5zcGxpY2UoMSlcbiAgICAgICAgLmpvaW4oJzonKVxuICAgIH1cbn07XG5cbmxldCBnZXRUaW1lWm9uZSA9IChpblNlY29uZHMpID0+IHtcbiAgICBpZiAoaW5TZWNvbmRzID09ICcwJykge1xuICAgICAgICByZXR1cm4gJ1VUQydcbiAgICB9IGVsc2UgaWYgKGluU2Vjb25kcyA9PSAnMzYwMCcpIHtcbiAgICAgICAgcmV0dXJuICdBZnJpY2EvTGFnb3MnXG4gICAgfSBlbHNlIGlmIChpblNlY29uZHMgPT0gJzcyMDAnKSB7XG4gICAgICAgIHJldHVybiAnRXVyb3BlL0hlbHNpbmtpJ1xuICAgIH0gZWxzZSBpZiAoaW5TZWNvbmRzID09ICcxMDgwMCcpIHtcbiAgICAgICAgcmV0dXJuICdBc2lhL0JhZ2hkYWQnXG4gICAgfSBlbHNlIGlmIChpblNlY29uZHMgPT0gJzE0NDAwJykge1xuICAgICAgICByZXR1cm4gJ0luZGlhbi9NYWxkaXZlcydcbiAgICB9IGVsc2UgaWYgKGluU2Vjb25kcyA9PSAnMTgwMDAnKSB7XG4gICAgICAgIHJldHVybiAnQXNpYS9EYWNjYSdcbiAgICB9IGVsc2UgaWYgKGluU2Vjb25kcyA9PSAnMjE2MDAnKSB7XG4gICAgICAgIHJldHVybiAnQXNpYS9KYWthcnRhJ1xuICAgIH0gZWxzZSBpZiAoaW5TZWNvbmRzID09ICcyNTIwMCcpIHtcbiAgICAgICAgcmV0dXJuICdBbnRhcmN0aWNhL0RhdmlzJ1xuICAgIH0gZWxzZSBpZiAoaW5TZWNvbmRzID09ICcyODgwMCcpIHtcbiAgICAgICAgcmV0dXJuICdBdXN0cmFsaWEvUGVydGgnXG4gICAgfSBlbHNlIGlmIChpblNlY29uZHMgPT0gJzMyNDAwJykge1xuICAgICAgICByZXR1cm4gJ0FzaWEvVG9reW8nXG4gICAgfSBlbHNlIGlmIChpblNlY29uZHMgPT0gJzM2MDAwJykge1xuICAgICAgICByZXR1cm4gJ1BhY2lmaWMvUG9ydF9Nb3Jlc2J5J1xuICAgIH0gZWxzZSBpZiAoaW5TZWNvbmRzID09ICczOTYwMCcpIHtcbiAgICAgICAgcmV0dXJuICdBdXN0cmFsaWEvU3lkbmV5J1xuICAgIH0gZWxzZSBpZiAoaW5TZWNvbmRzID09ICc0MzIwMCcpIHtcbiAgICAgICAgcmV0dXJuICdQYWNpZmljL0F1Y2tsYW5kJ1xuICAgIH0gZWxzZSBpZiAoaW5TZWNvbmRzID09ICc0NjgwMCcpIHtcbiAgICAgICAgcmV0dXJuICdQYWNpZmljL0F1Y2tsYW5kJ1xuICAgIH0gZWxzZSBpZiAoaW5TZWNvbmRzID09ICctMzYwMCcpIHtcbiAgICAgICAgcmV0dXJuICdBdGxhbnRpYy9DYXBlX1ZlcmRlJ1xuICAgIH0gZWxzZSBpZiAoaW5TZWNvbmRzID09ICctNzIwMCcpIHtcbiAgICAgICAgcmV0dXJuICdCcmF6aWwvRGVOb3JvbmhhJ1xuICAgIH0gZWxzZSBpZiAoaW5TZWNvbmRzID09ICctMTA4MDAnKSB7XG4gICAgICAgIHJldHVybiAnQW1lcmljYS9CdWVub3NfQWlyZXMnXG4gICAgfSBlbHNlIGlmIChpblNlY29uZHMgPT0gJy0xMjYwMCcpIHtcbiAgICAgICAgcmV0dXJuICdBbWVyaWNhL0d1YWRlbG91cGUnXG4gICAgfSBlbHNlIGlmIChpblNlY29uZHMgPT0gJy0xNDQwMCcpIHtcbiAgICAgICAgcmV0dXJuICdBbWVyaWNhL0phbWFpY2EnXG4gICAgfSBlbHNlIGlmIChpblNlY29uZHMgPT0gJy0xODAwMCcpIHtcbiAgICAgICAgcmV0dXJuICdBbWVyaWNhL0JvaXNlJ1xuICAgIH0gZWxzZSBpZiAoaW5TZWNvbmRzID09ICctMjE2MDAnKSB7XG4gICAgICAgIHJldHVybiAnQW1lcmljYS9QaG9lbml4J1xuICAgIH0gZWxzZSBpZiAoaW5TZWNvbmRzID09ICctMjUyMDAnKSB7XG4gICAgICAgIHJldHVybiAnQW1lcmljYS9BbmNob3JhZ2UnXG4gICAgfSBlbHNlIGlmIChpblNlY29uZHMgPT0gJy0yODgwMCcpIHtcbiAgICAgICAgcmV0dXJuICdQYWNpZmljL0dhbWJpZXInXG4gICAgfSBlbHNlIGlmIChpblNlY29uZHMgPT0gJy0zMjQwMCcpIHtcbiAgICAgICAgcmV0dXJuICdQYWNpZmljL0hvbm9sdWx1J1xuICAgIH0gZWxzZSBpZiAoaW5TZWNvbmRzID09ICctMzYwMDAnKSB7XG4gICAgICAgIHJldHVybiAnUGFjaWZpYy9NaWR3YXknXG4gICAgfSBlbHNlIGlmIChpblNlY29uZHMgPT0gJy0zOTYwMCcpIHtcbiAgICAgICAgcmV0dXJuICdFdGMvR01UKzEyJ1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGZvcm1hdERhdGUsIGdldFRpbWVab25lLCBnZXRUb2RheXNEYXRlIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgb25Mb2FkLCBsb2FkTmV3Q2l0eSwgcmVMb2FkLCB9IGZyb20gJy4vc3JjL2Z1bmN0aW9ucy9kb21fbWFuaXB1bGF0aW9uJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NyYy9zdHlsZXMuY3NzJ1xuXG5pbXBvcnQgdGhlcm1vbWV0ZXIgZnJvbSAnLi9zcmMvYXNzZXRzL3RoZXJtb21ldGVyLnBuZydcbmltcG9ydCBzdW5yaXNlIGZyb20gJy4vc3JjL2Fzc2V0cy9zdW5yaXNlLnBuZydcbmltcG9ydCBzdW5zZXQgZnJvbSAnLi9zcmMvYXNzZXRzL3N1bnNldC5wbmcnXG5cbmNvbnN0IHdlYXRoZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0V2VhdGhlckJ0bicpO1xuY29uc3QgdW5pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtdW5pdHMnKTtcblxub25Mb2FkKClcblxud2VhdGhlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbG9hZE5ld0NpdHkoKTtcbn0pO1xuXG51bml0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlTG9hZCgpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9