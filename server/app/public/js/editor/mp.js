/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/editor/mp/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/core-js/object/assign.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/object/assign.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/object/create.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/object/create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/object/keys.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/object/keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/es6/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/es6/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/es6/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/es6/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/axios/index.js from dll-reference _dll_base ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/axios/index.js");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/classnames/index.js from dll-reference _dll_base ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/classnames/index.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!*************************************************************************************************!*\
  !*** delegated ./node_modules/core-js/library/fn/object/assign.js from dll-reference _dll_base ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!*************************************************************************************************!*\
  !*** delegated ./node_modules/core-js/library/fn/object/create.js from dll-reference _dll_base ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/core-js/library/fn/object/keys.js from dll-reference _dll_base ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/css-box-model/dist/css-box-model.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-box-model/dist/css-box-model.esm.js ***!
  \**************************************************************/
/*! exports provided: getRect, createBox, offset, withScroll, calculateBox, getBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return getRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBox", function() { return createBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withScroll", function() { return withScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBox", function() { return calculateBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBox", function() { return getBox; });
var getRect = function getRect(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left;

  var width = right - left;
  var height = bottom - top;

  var rect = {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height,

    x: left,
    y: top,

    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };

  return rect;
};

var expand = function expand(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,

    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};

var shrink = function shrink(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,

    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};

var shift = function shift(spacing, point) {
  return {
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  };
};

var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

var createBox = function createBox(_ref2) {
  var borderBox = _ref2.borderBox,
      _ref2$margin = _ref2.margin,
      margin = _ref2$margin === undefined ? noSpacing : _ref2$margin,
      _ref2$border = _ref2.border,
      border = _ref2$border === undefined ? noSpacing : _ref2$border,
      _ref2$padding = _ref2.padding,
      padding = _ref2$padding === undefined ? noSpacing : _ref2$padding;

  var marginBox = getRect(expand(borderBox, margin));

  var paddingBox = getRect(shrink(borderBox, border));

  var contentBox = getRect(shrink(paddingBox, padding));

  return {
    marginBox: marginBox,
    borderBox: getRect(borderBox),
    paddingBox: paddingBox,
    contentBox: contentBox,
    margin: margin,
    border: border,
    padding: padding
  };
};

var parse = function parse(value) {
  return parseInt(value, 10);
};
var getWindowScroll = function getWindowScroll() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};

var offset = function offset(original, change) {
  var borderBox = original.borderBox,
      border = original.border,
      margin = original.margin,
      padding = original.padding;

  var shifted = shift(borderBox, change);

  return createBox({
    borderBox: shifted,
    border: border,
    margin: margin,
    padding: padding
  });
};

var withScroll = function withScroll(original) {
  var scroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getWindowScroll();
  return offset(original, scroll);
};

var calculateBox = function calculateBox(borderBox, styles) {
  var margin = {
    top: parse(styles.marginTop),
    right: parse(styles.marginRight),
    bottom: parse(styles.marginBottom),
    left: parse(styles.marginLeft)
  };
  var padding = {
    top: parse(styles.paddingTop),
    right: parse(styles.paddingRight),
    bottom: parse(styles.paddingBottom),
    left: parse(styles.paddingLeft)
  };
  var border = {
    top: parse(styles.borderTopWidth),
    right: parse(styles.borderRightWidth),
    bottom: parse(styles.borderBottomWidth),
    left: parse(styles.borderLeftWidth)
  };

  return createBox({
    borderBox: borderBox,
    margin: margin,
    padding: padding,
    border: border
  });
};

var getBox = function getBox(el) {
  var borderBox = el.getBoundingClientRect();
  var styles = window.getComputedStyle(el);

  return calculateBox(borderBox, styles);
};




/***/ }),

/***/ "./node_modules/lodash/assign.js":
/*!******************************************************************************!*\
  !*** delegated ./node_modules/lodash/assign.js from dll-reference _dll_base ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/lodash/assign.js");

/***/ }),

/***/ "./node_modules/lodash/defaultTo.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/lodash/defaultTo.js from dll-reference _dll_base ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/lodash/defaultTo.js");

/***/ }),

/***/ "./node_modules/lodash/find.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/lodash/find.js from dll-reference _dll_base ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/lodash/find.js");

/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/lodash/findIndex.js from dll-reference _dll_base ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/lodash/findIndex.js");

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/lodash/get.js from dll-reference _dll_base ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/lodash/get.js");

/***/ }),

/***/ "./node_modules/lodash/has.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/lodash/has.js from dll-reference _dll_base ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/lodash/has.js");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/lodash/isArray.js from dll-reference _dll_base ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/lodash/isArray.js");

/***/ }),

/***/ "./node_modules/lodash/isEmpty.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/lodash/isEmpty.js from dll-reference _dll_base ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/lodash/isEmpty.js");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/lodash/isFunction.js from dll-reference _dll_base ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/lodash/isFunction.js");

/***/ }),

/***/ "./node_modules/lodash/isNumber.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/lodash/isNumber.js from dll-reference _dll_base ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/lodash/isNumber.js");

/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/lodash/isString.js from dll-reference _dll_base ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/lodash/isString.js");

/***/ }),

/***/ "./node_modules/lodash/isUndefined.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/lodash/isUndefined.js from dll-reference _dll_base ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/lodash/isUndefined.js");

/***/ }),

/***/ "./node_modules/lodash/pick.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/lodash/pick.js from dll-reference _dll_base ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/lodash/pick.js");

/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var simpleIsEqual = function simpleIsEqual(a, b) {
  return a === b;
};

function index (resultFn) {
  var isEqual = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : simpleIsEqual;

  var lastThis = void 0;
  var lastArgs = [];
  var lastResult = void 0;
  var calledOnce = false;

  var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {
    return isEqual(newArg, lastArgs[index]);
  };

  var result = function result() {
    for (var _len = arguments.length, newArgs = Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
      return lastResult;
    }

    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    lastResult = resultFn.apply(this, newArgs);
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/prop-types/index.js from dll-reference _dll_base ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/prop-types/index.js");

/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/query-string/index.js from dll-reference _dll_base ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/query-string/index.js");

/***/ }),

/***/ "./node_modules/raf-schd/dist/raf-schd.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/raf-schd/dist/raf-schd.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var index = (function (fn) {
  var lastArgs = [];
  var frameId = null;

  var wrapperFn = function wrapperFn() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      fn.apply(undefined, lastArgs);
    });
  };

  wrapperFn.cancel = function () {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
  };

  var resultFn = wrapperFn;

  return resultFn;
});

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js ***!
  \**************************************************************************/
/*! exports provided: DragDropContext, Droppable, Draggable, resetServerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropContext", function() { return DragDropContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return connectedDroppable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return ConnectedDraggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetServerContext", function() { return resetServerContext; });
/* harmony import */ var _babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/es6/extends */ "./node_modules/@babel/runtime/helpers/es6/extends.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var css_box_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-box-model */ "./node_modules/css-box-model/dist/css-box-model.esm.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/object/assign */ "./node_modules/@babel/runtime/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var raf_schd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raf-schd */ "./node_modules/raf-schd/dist/raf-schd.esm.js");
/* harmony import */ var _babel_runtime_helpers_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/es6/inheritsLoose */ "./node_modules/@babel/runtime/helpers/es6/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-motion */ "./node_modules/react-motion/lib/react-motion.js");
/* harmony import */ var react_motion__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_motion__WEBPACK_IMPORTED_MODULE_12__);














var vertical = {
  direction: 'vertical',
  line: 'y',
  crossAxisLine: 'x',
  start: 'top',
  end: 'bottom',
  size: 'height',
  crossAxisStart: 'left',
  crossAxisEnd: 'right',
  crossAxisSize: 'width'
};
var horizontal = {
  direction: 'horizontal',
  line: 'x',
  crossAxisLine: 'y',
  start: 'left',
  end: 'right',
  size: 'width',
  crossAxisStart: 'top',
  crossAxisEnd: 'bottom',
  crossAxisSize: 'height'
};

var origin = {
  x: 0,
  y: 0
};
var add = function add(point1, point2) {
  return {
    x: point1.x + point2.x,
    y: point1.y + point2.y
  };
};
var subtract = function subtract(point1, point2) {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y
  };
};
var isEqual = function isEqual(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};
var negate = function negate(point) {
  return {
    x: point.x !== 0 ? -point.x : 0,
    y: point.y !== 0 ? -point.y : 0
  };
};
var absolute = function absolute(point) {
  return {
    x: Math.abs(point.x),
    y: Math.abs(point.y)
  };
};
var patch = function patch(line, value, otherValue) {
  var _ref;

  if (otherValue === void 0) {
    otherValue = 0;
  }

  return _ref = {}, _ref[line] = value, _ref[line === 'x' ? 'y' : 'x'] = otherValue, _ref;
};
var distance = function distance(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var closest = function closest(target, points) {
  return Math.min.apply(Math, points.map(function (point) {
    return distance(target, point);
  }));
};
var apply = function apply(fn) {
  return function (point) {
    return {
      x: fn(point.x),
      y: fn(point.y)
    };
  };
};

var offsetByPosition = function offsetByPosition(spacing, point) {
  return {
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  };
};
var expandByPosition = function expandByPosition(spacing, position) {
  return {
    top: spacing.top - position.y,
    left: spacing.left - position.x,
    right: spacing.right + position.x,
    bottom: spacing.bottom + position.y
  };
};
var getCorners = function getCorners(spacing) {
  return [{
    x: spacing.left,
    y: spacing.top
  }, {
    x: spacing.right,
    y: spacing.top
  }, {
    x: spacing.left,
    y: spacing.bottom
  }, {
    x: spacing.right,
    y: spacing.bottom
  }];
};

var getMaxScroll = (function (_ref) {
  var scrollHeight = _ref.scrollHeight,
      scrollWidth = _ref.scrollWidth,
      height = _ref.height,
      width = _ref.width;
  var maxScroll = subtract({
    x: scrollWidth,
    y: scrollHeight
  }, {
    x: width,
    y: height
  });
  var adjustedMaxScroll = {
    x: Math.max(0, maxScroll.x),
    y: Math.max(0, maxScroll.y)
  };
  return adjustedMaxScroll;
});

var clip = function clip(frame, subject) {
  var result = Object(css_box_model__WEBPACK_IMPORTED_MODULE_2__["getRect"])({
    top: Math.max(subject.top, frame.top),
    right: Math.min(subject.right, frame.right),
    bottom: Math.min(subject.bottom, frame.bottom),
    left: Math.max(subject.left, frame.left)
  });

  if (result.width <= 0 || result.height <= 0) {
    return null;
  }

  return result;
};
var getDroppableDimension = function getDroppableDimension(_ref) {
  var descriptor = _ref.descriptor,
      isEnabled = _ref.isEnabled,
      direction = _ref.direction,
      client = _ref.client,
      page = _ref.page,
      closest$$1 = _ref.closest;

  var scrollable = function () {
    if (!closest$$1) {
      return null;
    }

    var maxScroll = getMaxScroll({
      scrollHeight: closest$$1.scrollHeight,
      scrollWidth: closest$$1.scrollWidth,
      height: closest$$1.client.paddingBox.height,
      width: closest$$1.client.paddingBox.width
    });
    return {
      framePageMarginBox: closest$$1.page.marginBox,
      shouldClipSubject: closest$$1.shouldClipSubject,
      scroll: {
        initial: closest$$1.scroll,
        current: closest$$1.scroll,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
  }();

  var subjectPageMarginBox = page.marginBox;
  var clippedPageMarginBox = scrollable && scrollable.shouldClipSubject ? clip(scrollable.framePageMarginBox, subjectPageMarginBox) : subjectPageMarginBox;
  var viewport = {
    closestScrollable: scrollable,
    subjectPageMarginBox: subjectPageMarginBox,
    clippedPageMarginBox: clippedPageMarginBox
  };
  var dimension = {
    descriptor: descriptor,
    axis: direction === 'vertical' ? vertical : horizontal,
    isEnabled: isEnabled,
    client: client,
    page: page,
    viewport: viewport
  };
  return dimension;
};
var scrollDroppable = function scrollDroppable(droppable, newScroll) {
  !droppable.viewport.closestScrollable ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false) : undefined : void 0;
  var scrollable = droppable.viewport.closestScrollable;
  var framePageMarginBox = scrollable.framePageMarginBox;
  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  var scrollDisplacement = negate(scrollDiff);
  var closestScrollable = {
    framePageMarginBox: scrollable.framePageMarginBox,
    shouldClipSubject: scrollable.shouldClipSubject,
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement
      },
      max: scrollable.scroll.max
    }
  };
  var displacedSubject = offsetByPosition(droppable.viewport.subjectPageMarginBox, scrollDisplacement);
  var clippedPageMarginBox = closestScrollable.shouldClipSubject ? clip(framePageMarginBox, displacedSubject) : Object(css_box_model__WEBPACK_IMPORTED_MODULE_2__["getRect"])(displacedSubject);
  var viewport = {
    closestScrollable: closestScrollable,
    subjectPageMarginBox: droppable.viewport.subjectPageMarginBox,
    clippedPageMarginBox: clippedPageMarginBox
  };

  var result = Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, droppable, {
    viewport: viewport
  });

  return result;
};

var toDroppableMap = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (droppables) {
  return droppables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDraggableMap = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (draggables) {
  return draggables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDroppableList = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (droppables) {
  return _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(droppables).map(function (id) {
    return droppables[id];
  });
});
var toDraggableList = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (draggables) {
  return _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(draggables).map(function (id) {
    return draggables[id];
  });
});

var getDraggablesInsideDroppable = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (droppable, draggables) {
  return toDraggableList(draggables).filter(function (draggable) {
    return droppable.descriptor.id === draggable.descriptor.droppableId;
  }).sort(function (a, b) {
    return a.descriptor.index - b.descriptor.index;
  });
});

var isWithin = (function (lowerBound, upperBound) {
  return function (value) {
    return value <= upperBound && value >= lowerBound;
  };
});

var isPositionInFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (point) {
    return isWithinVertical(point.y) && isWithinVertical(point.y) && isWithinHorizontal(point.x) && isWithinHorizontal(point.x);
  };
});

var getRequiredGrowth = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (draggable, draggables, droppable) {
  var getResult = function getResult(existingSpace) {
    var requiredSpace = draggable.page.marginBox[droppable.axis.size];

    if (requiredSpace <= existingSpace) {
      return null;
    }

    var requiredGrowth = patch(droppable.axis.line, requiredSpace - existingSpace);
    return requiredGrowth;
  };

  var dimensions = getDraggablesInsideDroppable(droppable, draggables);

  if (!dimensions.length) {
    var _existingSpace = droppable.page.marginBox[droppable.axis.size];
    return getResult(_existingSpace);
  }

  var endOfDraggables = dimensions[dimensions.length - 1].page.marginBox[droppable.axis.end];
  var endOfDroppable = droppable.page.marginBox[droppable.axis.end];
  var existingSpace = endOfDroppable - endOfDraggables;
  return getResult(existingSpace);
});
var getWithGrowth = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (area, growth) {
  return Object(css_box_model__WEBPACK_IMPORTED_MODULE_2__["getRect"])(expandByPosition(area, growth));
});

var getClippedRectWithPlaceholder = function getClippedRectWithPlaceholder(_ref) {
  var draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppable = _ref.droppable,
      previousDroppableOverId = _ref.previousDroppableOverId;
  var isHome = draggable.descriptor.droppableId === droppable.descriptor.id;
  var wasOver = Boolean(previousDroppableOverId && previousDroppableOverId === droppable.descriptor.id);
  var clippedPageMarginBox = droppable.viewport.clippedPageMarginBox;

  if (!clippedPageMarginBox) {
    return clippedPageMarginBox;
  }

  if (isHome || !wasOver) {
    return clippedPageMarginBox;
  }

  var requiredGrowth = getRequiredGrowth(draggable, draggables, droppable);

  if (!requiredGrowth) {
    return clippedPageMarginBox;
  }

  var subjectWithGrowth = getWithGrowth(clippedPageMarginBox, requiredGrowth);
  var closestScrollable = droppable.viewport.closestScrollable;

  if (!closestScrollable) {
    return subjectWithGrowth;
  }

  if (!closestScrollable.shouldClipSubject) {
    return subjectWithGrowth;
  }

  return clip(closestScrollable.framePageMarginBox, subjectWithGrowth);
};

var getDroppableOver = (function (_ref2) {
  var target = _ref2.target,
      draggable = _ref2.draggable,
      draggables = _ref2.draggables,
      droppables = _ref2.droppables,
      previousDroppableOverId = _ref2.previousDroppableOverId;
  var maybe = toDroppableList(droppables).filter(function (droppable) {
    return droppable.isEnabled;
  }).find(function (droppable) {
    var withPlaceholder = getClippedRectWithPlaceholder({
      draggable: draggable,
      draggables: draggables,
      droppable: droppable,
      previousDroppableOverId: previousDroppableOverId
    });

    if (!withPlaceholder) {
      return false;
    }

    return isPositionInFrame(withPlaceholder)(target);
  });
  return maybe ? maybe.descriptor.id : null;
});

var noMovement = {
  displaced: [],
  amount: origin,
  isBeyondStartPosition: false
};
var noImpact = {
  movement: noMovement,
  direction: null,
  destination: null
};

var getDisplacementMap = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (displaced) {
  return displaced.reduce(function (map, displacement) {
    map[displacement.draggableId] = displacement;
    return map;
  }, {});
});

var isPartiallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);

    if (isContained) {
      return true;
    }

    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;

    if (isPartiallyContained) {
      return true;
    }

    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;

    if (isTargetBiggerThanFrame) {
      return true;
    }

    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
    return isTargetBiggerOnOneAxis;
  };
});

var isTotallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    return isContained;
  };
});

var isVisible = function isVisible(_ref) {
  var target = _ref.target,
      destination = _ref.destination,
      viewport = _ref.viewport,
      isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
  var displacement = destination.viewport.closestScrollable ? destination.viewport.closestScrollable.scroll.diff.displacement : origin;
  var withDisplacement = offsetByPosition(target, displacement);

  if (!destination.viewport.clippedPageMarginBox) {
    return false;
  }

  var isVisibleInDroppable = isVisibleThroughFrameFn(destination.viewport.clippedPageMarginBox)(withDisplacement);
  var isVisibleInViewport = isVisibleThroughFrameFn(viewport)(withDisplacement);
  return isVisibleInDroppable && isVisibleInViewport;
};

var isPartiallyVisible = function isPartiallyVisible(_ref2) {
  var target = _ref2.target,
      destination = _ref2.destination,
      viewport = _ref2.viewport;
  return isVisible({
    target: target,
    destination: destination,
    viewport: viewport,
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  });
};
var isTotallyVisible = function isTotallyVisible(_ref3) {
  var target = _ref3.target,
      destination = _ref3.destination,
      viewport = _ref3.viewport;
  return isVisible({
    target: target,
    destination: destination,
    viewport: viewport,
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  });
};

var getDisplacement = (function (_ref) {
  var draggable = _ref.draggable,
      destination = _ref.destination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var id = draggable.descriptor.id;
  var map = getDisplacementMap(previousImpact.movement.displaced);
  var isVisible = isPartiallyVisible({
    target: draggable.page.marginBox,
    destination: destination,
    viewport: viewport
  });

  var shouldAnimate = function () {
    if (!isVisible) {
      return false;
    }

    var previous = map[id];

    if (!previous) {
      return true;
    }

    return previous.shouldAnimate;
  }();

  var displacement = {
    draggableId: id,
    isVisible: isVisible,
    shouldAnimate: shouldAnimate
  };
  return displacement;
});

var withDroppableScroll = (function (droppable, point) {
  var closestScrollable = droppable.viewport.closestScrollable;

  if (!closestScrollable) {
    return point;
  }

  return add(point, closestScrollable.scroll.diff.value);
});

var inHomeList = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggable = _ref.draggable,
      home = _ref.home,
      insideHome = _ref.insideHome,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var axis = home.axis;
  var originalCenter = draggable.page.borderBox.center;
  var currentCenter = withDroppableScroll(home, pageBorderBoxCenter);
  var isBeyondStartPosition = currentCenter[axis.line] - originalCenter[axis.line] > 0;
  var amount = patch(axis.line, draggable.client.marginBox[axis.size]);
  var displaced = insideHome.filter(function (child) {
    if (child === draggable) {
      return false;
    }

    var borderBox = child.page.borderBox;

    if (isBeyondStartPosition) {
      if (borderBox.center[axis.line] < originalCenter[axis.line]) {
        return false;
      }

      return currentCenter[axis.line] > borderBox[axis.start];
    }

    if (originalCenter[axis.line] < borderBox.center[axis.line]) {
      return false;
    }

    return currentCenter[axis.line] < borderBox[axis.end];
  }).map(function (dimension) {
    return getDisplacement({
      draggable: dimension,
      destination: home,
      previousImpact: previousImpact,
      viewport: viewport.frame
    });
  });
  var ordered = isBeyondStartPosition ? displaced.reverse() : displaced;

  var index = function () {
    var startIndex = draggable.descriptor.index;
    var length = ordered.length;

    if (!length) {
      return startIndex;
    }

    if (isBeyondStartPosition) {
      return startIndex + length;
    }

    return startIndex - length;
  }();

  var movement = {
    amount: amount,
    displaced: ordered,
    isBeyondStartPosition: isBeyondStartPosition
  };
  var impact = {
    movement: movement,
    direction: axis.direction,
    destination: {
      droppableId: home.descriptor.id,
      index: index
    }
  };
  return impact;
});

var inForeignList = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggable = _ref.draggable,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var axis = destination.axis;
  var currentCenter = withDroppableScroll(destination, pageBorderBoxCenter);
  var displaced = insideDestination.filter(function (child) {
    var threshold = child.page.borderBox[axis.end];
    return threshold > currentCenter[axis.line];
  }).map(function (dimension) {
    return getDisplacement({
      draggable: dimension,
      destination: destination,
      previousImpact: previousImpact,
      viewport: viewport.frame
    });
  });
  var newIndex = insideDestination.length - displaced.length;
  var movement = {
    amount: patch(axis.line, draggable.page.marginBox[axis.size]),
    displaced: displaced,
    isBeyondStartPosition: false
  };
  var impact = {
    movement: movement,
    direction: axis.direction,
    destination: {
      droppableId: destination.descriptor.id,
      index: newIndex
    }
  };
  return impact;
});

var getDragImpact = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var previousDroppableOverId = previousImpact.destination && previousImpact.destination.droppableId;
  var destinationId = getDroppableOver({
    target: pageBorderBoxCenter,
    draggable: draggable,
    draggables: draggables,
    droppables: droppables,
    previousDroppableOverId: previousDroppableOverId
  });

  if (!destinationId) {
    return noImpact;
  }

  var destination = droppables[destinationId];

  if (!destination.isEnabled) {
    return noImpact;
  }

  var home = droppables[draggable.descriptor.droppableId];
  var isWithinHomeDroppable = home.descriptor.id === destinationId;
  var insideDestination = getDraggablesInsideDroppable(destination, draggables);

  if (isWithinHomeDroppable) {
    return inHomeList({
      pageBorderBoxCenter: pageBorderBoxCenter,
      draggable: draggable,
      home: home,
      insideHome: insideDestination,
      previousImpact: previousImpact || noImpact,
      viewport: viewport
    });
  }

  return inForeignList({
    pageBorderBoxCenter: pageBorderBoxCenter,
    draggable: draggable,
    destination: destination,
    insideDestination: insideDestination,
    previousImpact: previousImpact || noImpact,
    viewport: viewport
  });
});

var getHomeLocation = (function (critical) {
  return {
    index: critical.draggable.index,
    droppableId: critical.droppable.id
  };
});

var getSafeClipped = function getSafeClipped(droppable) {
  var rect = droppable.viewport.clippedPageMarginBox;
  !rect ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot get clipped area from droppable') : undefined : void 0;
  return rect;
};

var getBestCrossAxisDroppable = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      source = _ref.source,
      droppables = _ref.droppables,
      viewport = _ref.viewport;
  var sourceClipped = source.viewport.clippedPageMarginBox;

  if (!sourceClipped) {
    return null;
  }

  var axis = source.axis;
  var isBetweenSourceClipped = isWithin(sourceClipped[axis.start], sourceClipped[axis.end]);
  var candidates = toDroppableList(droppables).filter(function (droppable) {
    return droppable !== source;
  }).filter(function (droppable) {
    return droppable.isEnabled;
  }).filter(function (droppable) {
    var clippedPageMarginBox = droppable.viewport.clippedPageMarginBox;

    if (!clippedPageMarginBox) {
      return false;
    }

    return isPartiallyVisibleThroughFrame(viewport.frame)(clippedPageMarginBox);
  }).filter(function (droppable) {
    var targetClipped = getSafeClipped(droppable);

    if (isMovingForward) {
      return sourceClipped[axis.crossAxisEnd] < targetClipped[axis.crossAxisEnd];
    }

    return targetClipped[axis.crossAxisStart] < sourceClipped[axis.crossAxisStart];
  }).filter(function (droppable) {
    var targetClipped = getSafeClipped(droppable);
    var isBetweenDestinationClipped = isWithin(targetClipped[axis.start], targetClipped[axis.end]);
    return isBetweenSourceClipped(targetClipped[axis.start]) || isBetweenSourceClipped(targetClipped[axis.end]) || isBetweenDestinationClipped(sourceClipped[axis.start]) || isBetweenDestinationClipped(sourceClipped[axis.end]);
  }).sort(function (a, b) {
    var first = getSafeClipped(a)[axis.crossAxisStart];
    var second = getSafeClipped(b)[axis.crossAxisStart];

    if (isMovingForward) {
      return first - second;
    }

    return second - first;
  }).filter(function (droppable, index, array) {
    return getSafeClipped(droppable)[axis.crossAxisStart] === getSafeClipped(array[0])[axis.crossAxisStart];
  });

  if (!candidates.length) {
    return null;
  }

  if (candidates.length === 1) {
    return candidates[0];
  }

  var contains = candidates.filter(function (droppable) {
    var isWithinDroppable = isWithin(getSafeClipped(droppable)[axis.start], getSafeClipped(droppable)[axis.end]);
    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
  });

  if (contains.length === 1) {
    return contains[0];
  }

  if (contains.length > 1) {
    return contains.sort(function (a, b) {
      return getSafeClipped(a)[axis.start] - getSafeClipped(b)[axis.start];
    })[0];
  }

  return candidates.sort(function (a, b) {
    var first = closest(pageBorderBoxCenter, getCorners(getSafeClipped(a)));
    var second = closest(pageBorderBoxCenter, getCorners(getSafeClipped(b)));

    if (first !== second) {
      return first - second;
    }

    return getSafeClipped(a)[axis.start] - getSafeClipped(b)[axis.start];
  })[0];
});

var withDroppableDisplacement = (function (droppable, point) {
  var closestScrollable = droppable.viewport.closestScrollable;

  if (!closestScrollable) {
    return point;
  }

  return add(point, closestScrollable.scroll.diff.displacement);
});

var getClosestDraggable = (function (_ref) {
  var axis = _ref.axis,
      viewport = _ref.viewport,
      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination;

  if (!insideDestination.length) {
    return null;
  }

  var result = insideDestination.filter(function (draggable) {
    return isTotallyVisible({
      target: draggable.page.borderBox,
      destination: destination,
      viewport: viewport.frame
    });
  }).sort(function (a, b) {
    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, a.page.borderBox.center));
    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, b.page.borderBox.center));

    if (distanceToA < distanceToB) {
      return -1;
    }

    if (distanceToB < distanceToA) {
      return 1;
    }

    return a.page.borderBox[axis.start] - b.page.borderBox[axis.start];
  });
  return result.length ? result[0] : null;
});

var moveToEdge = (function (_ref) {
  var source = _ref.source,
      sourceEdge = _ref.sourceEdge,
      destination = _ref.destination,
      destinationEdge = _ref.destinationEdge,
      destinationAxis = _ref.destinationAxis;

  var getCorner = function getCorner(area) {
    return patch(destinationAxis.line, area[destinationAxis[destinationEdge]], area[destinationAxis.crossAxisStart]);
  };

  var corner = getCorner(destination);
  var centerDiff = absolute(subtract(source.center, getCorner(source)));
  var signed = patch(destinationAxis.line, (sourceEdge === 'end' ? -1 : 1) * centerDiff[destinationAxis.line], centerDiff[destinationAxis.crossAxisLine]);
  return add(corner, signed);
});

var toHomeList = (function (_ref) {
  var amount = _ref.amount,
      homeIndex = _ref.homeIndex,
      movingRelativeTo = _ref.movingRelativeTo,
      insideDestination = _ref.insideDestination,
      draggable = _ref.draggable,
      destination = _ref.destination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var axis = destination.axis;
  var targetIndex = insideDestination.indexOf(movingRelativeTo);
  !(targetIndex !== -1) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Unable to find target in destination droppable') : undefined : void 0;

  if (targetIndex === homeIndex) {
    var _newCenter = draggable.page.borderBox.center;
    var _newImpact = {
      movement: {
        displaced: [],
        amount: amount,
        isBeyondStartPosition: false
      },
      direction: destination.axis.direction,
      destination: {
        droppableId: destination.descriptor.id,
        index: homeIndex
      }
    };
    return {
      pageBorderBoxCenter: withDroppableDisplacement(destination, _newCenter),
      impact: _newImpact
    };
  }

  var isMovingPastOriginalIndex = targetIndex > homeIndex;
  var edge = isMovingPastOriginalIndex ? 'end' : 'start';
  var newCenter = moveToEdge({
    source: draggable.page.borderBox,
    sourceEdge: edge,
    destination: isMovingPastOriginalIndex ? movingRelativeTo.page.borderBox : movingRelativeTo.page.marginBox,
    destinationEdge: edge,
    destinationAxis: axis
  });

  var modified = function () {
    if (!isMovingPastOriginalIndex) {
      return insideDestination.slice(targetIndex, homeIndex);
    }

    var from = homeIndex + 1;
    var to = targetIndex + 1;
    return insideDestination.slice(from, to).reverse();
  }();

  var displaced = modified.map(function (dimension) {
    return getDisplacement({
      draggable: dimension,
      destination: destination,
      previousImpact: previousImpact,
      viewport: viewport.frame
    });
  });
  var newImpact = {
    movement: {
      displaced: displaced,
      amount: amount,
      isBeyondStartPosition: isMovingPastOriginalIndex
    },
    direction: axis.direction,
    destination: {
      droppableId: destination.descriptor.id,
      index: targetIndex
    }
  };
  return {
    pageBorderBoxCenter: withDroppableDisplacement(destination, newCenter),
    impact: newImpact
  };
});

var toForeignList = (function (_ref) {
  var amount = _ref.amount,
      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      movingRelativeTo = _ref.movingRelativeTo,
      insideDestination = _ref.insideDestination,
      draggable = _ref.draggable,
      destination = _ref.destination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var axis = destination.axis;
  var isGoingBeforeTarget = Boolean(movingRelativeTo && pageBorderBoxCenter[destination.axis.line] < movingRelativeTo.page.borderBox.center[destination.axis.line]);

  if (!movingRelativeTo) {
    var _newCenter = moveToEdge({
      source: draggable.page.borderBox,
      sourceEdge: 'start',
      destination: destination.page.contentBox,
      destinationEdge: 'start',
      destinationAxis: axis
    });

    var _newImpact = {
      movement: {
        displaced: [],
        amount: amount,
        isBeyondStartPosition: false
      },
      direction: axis.direction,
      destination: {
        droppableId: destination.descriptor.id,
        index: 0
      }
    };
    return {
      pageBorderBoxCenter: withDroppableDisplacement(destination, _newCenter),
      impact: _newImpact
    };
  }

  var targetIndex = insideDestination.indexOf(movingRelativeTo);
  !(targetIndex !== -1) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'The target was not found within its droppable') : undefined : void 0;
  var proposedIndex = isGoingBeforeTarget ? targetIndex : targetIndex + 1;
  var newCenter = moveToEdge({
    source: draggable.page.borderBox,
    sourceEdge: 'start',
    destination: movingRelativeTo.page.marginBox,
    destinationEdge: isGoingBeforeTarget ? 'start' : 'end',
    destinationAxis: axis
  });
  var displaced = insideDestination.slice(proposedIndex, insideDestination.length).map(function (dimension) {
    return getDisplacement({
      draggable: dimension,
      destination: destination,
      viewport: viewport.frame,
      previousImpact: previousImpact
    });
  });
  var newImpact = {
    movement: {
      displaced: displaced,
      amount: amount,
      isBeyondStartPosition: false
    },
    direction: axis.direction,
    destination: {
      droppableId: destination.descriptor.id,
      index: proposedIndex
    }
  };
  return {
    pageBorderBoxCenter: withDroppableDisplacement(destination, newCenter),
    impact: newImpact
  };
});

var moveToNewDroppable = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      draggable = _ref.draggable,
      movingRelativeTo = _ref.movingRelativeTo,
      home = _ref.home,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var amount = patch(destination.axis.line, draggable.client.marginBox[destination.axis.size]);

  if (destination.descriptor.id === draggable.descriptor.droppableId) {
    !movingRelativeTo ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'There will always be a target in the original list') : undefined : void 0;
    return toHomeList({
      amount: amount,
      homeIndex: home.index,
      movingRelativeTo: movingRelativeTo,
      insideDestination: insideDestination,
      draggable: draggable,
      destination: destination,
      previousImpact: previousImpact,
      viewport: viewport
    });
  }

  return toForeignList({
    amount: amount,
    pageBorderBoxCenter: pageBorderBoxCenter,
    movingRelativeTo: movingRelativeTo,
    insideDestination: insideDestination,
    draggable: draggable,
    destination: destination,
    previousImpact: previousImpact,
    viewport: viewport
  });
});

var moveCrossAxis = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggableId = _ref.draggableId,
      droppableId = _ref.droppableId,
      home = _ref.home,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport;
  var draggable = draggables[draggableId];
  var source = droppables[droppableId];
  var destination = getBestCrossAxisDroppable({
    isMovingForward: isMovingForward,
    pageBorderBoxCenter: pageBorderBoxCenter,
    source: source,
    droppables: droppables,
    viewport: viewport
  });

  if (!destination) {
    return null;
  }

  var insideDestination = getDraggablesInsideDroppable(destination, draggables);
  var movingRelativeTo = getClosestDraggable({
    axis: destination.axis,
    pageBorderBoxCenter: pageBorderBoxCenter,
    destination: destination,
    insideDestination: insideDestination,
    viewport: viewport
  });

  if (insideDestination.length && !movingRelativeTo) {
    return null;
  }

  return moveToNewDroppable({
    pageBorderBoxCenter: pageBorderBoxCenter,
    destination: destination,
    draggable: draggable,
    movingRelativeTo: movingRelativeTo,
    insideDestination: insideDestination,
    home: home,
    previousImpact: previousImpact || noImpact,
    viewport: viewport
  });
});

var isTotallyVisibleInNewLocation = (function (_ref) {
  var draggable = _ref.draggable,
      destination = _ref.destination,
      newPageBorderBoxCenter = _ref.newPageBorderBoxCenter,
      viewport = _ref.viewport;
  var diff = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
  var shifted = offsetByPosition(draggable.page.borderBox, diff);
  return isTotallyVisible({
    target: shifted,
    destination: destination,
    viewport: viewport
  });
});

var withFirstAdded = function withFirstAdded(_ref) {
  var add = _ref.add,
      previousImpact = _ref.previousImpact,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      viewport = _ref.viewport;
  var newDisplacement = {
    draggableId: add,
    isVisible: true,
    shouldAnimate: true
  };
  var added = [newDisplacement].concat(previousImpact.movement.displaced);
  var withUpdatedVisibility = added.map(function (current) {
    if (current === newDisplacement) {
      return current;
    }

    var updated = getDisplacement({
      draggable: draggables[current.draggableId],
      destination: droppable,
      previousImpact: previousImpact,
      viewport: viewport.frame
    });
    return updated;
  });
  return withUpdatedVisibility;
};

var forceVisibleDisplacement = function forceVisibleDisplacement(current) {
  if (current.isVisible) {
    return current;
  }

  return {
    draggableId: current.draggableId,
    isVisible: true,
    shouldAnimate: false
  };
};

var withFirstRemoved = function withFirstRemoved(_ref2) {
  var dragging = _ref2.dragging,
      isVisibleInNewLocation = _ref2.isVisibleInNewLocation,
      previousImpact = _ref2.previousImpact,
      droppable = _ref2.droppable,
      draggables = _ref2.draggables;
  var last = previousImpact.movement.displaced;
  !last.length ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot remove displacement from empty list') : undefined : void 0;
  var withFirstRestored = last.slice(1, last.length);

  if (!withFirstRestored.length) {
    return withFirstRestored;
  }

  if (isVisibleInNewLocation) {
    return withFirstRestored;
  }

  var axis = droppable.axis;
  var sizeOfRestored = draggables[last[0].draggableId].page.marginBox[axis.size];
  var sizeOfDragging = draggables[dragging].page.marginBox[axis.size];
  var buffer = sizeOfRestored + sizeOfDragging;
  var withUpdatedVisibility = withFirstRestored.map(function (displacement, index) {
    if (index === 0) {
      return forceVisibleDisplacement(displacement);
    }

    if (buffer > 0) {
      var current = draggables[displacement.draggableId];
      var size = current.page.marginBox[axis.size];
      buffer -= size;
      return forceVisibleDisplacement(displacement);
    }

    return {
      draggableId: displacement.draggableId,
      isVisible: false,
      shouldAnimate: false
    };
  });
  return withUpdatedVisibility;
};

var inHomeList$1 = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggableId = _ref.draggableId,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      previousImpact = _ref.previousImpact,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      viewport = _ref.viewport;
  var location = previousImpact.destination;
  !location ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot move to next index in home list when there is no previous destination') : undefined : void 0;
  var draggable = draggables[draggableId];
  var axis = droppable.axis;
  var insideDroppable = getDraggablesInsideDroppable(droppable, draggables);
  var startIndex = draggable.descriptor.index;
  var currentIndex = location.index;
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;

  if (proposedIndex > insideDroppable.length - 1) {
    return null;
  }

  if (proposedIndex < 0) {
    return null;
  }

  var destination = insideDroppable[proposedIndex];
  var isMovingTowardStart = isMovingForward && proposedIndex <= startIndex || !isMovingForward && proposedIndex >= startIndex;

  var edge = function () {
    if (!isMovingTowardStart) {
      return isMovingForward ? 'end' : 'start';
    }

    return isMovingForward ? 'start' : 'end';
  }();

  var newPageBorderBoxCenter = moveToEdge({
    source: draggable.page.borderBox,
    sourceEdge: edge,
    destination: destination.page.borderBox,
    destinationEdge: edge,
    destinationAxis: droppable.axis
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable,
    destination: droppable,
    newPageBorderBoxCenter: newPageBorderBoxCenter,
    viewport: viewport.frame
  });
  var displaced = isMovingTowardStart ? withFirstRemoved({
    dragging: draggableId,
    isVisibleInNewLocation: isVisibleInNewLocation,
    previousImpact: previousImpact,
    droppable: droppable,
    draggables: draggables
  }) : withFirstAdded({
    add: destination.descriptor.id,
    previousImpact: previousImpact,
    droppable: droppable,
    draggables: draggables,
    viewport: viewport
  });
  var newImpact = {
    movement: {
      displaced: displaced,
      amount: patch(axis.line, draggable.page.marginBox[axis.size]),
      isBeyondStartPosition: proposedIndex > startIndex
    },
    destination: {
      droppableId: droppable.descriptor.id,
      index: proposedIndex
    },
    direction: droppable.axis.direction
  };

  if (isVisibleInNewLocation) {
    return {
      pageBorderBoxCenter: withDroppableDisplacement(droppable, newPageBorderBoxCenter),
      impact: newImpact,
      scrollJumpRequest: null
    };
  }

  var distance$$1 = subtract(newPageBorderBoxCenter, previousPageBorderBoxCenter);
  var distanceWithScroll = withDroppableDisplacement(droppable, distance$$1);
  return {
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    impact: newImpact,
    scrollJumpRequest: distanceWithScroll
  };
});

var inForeignList$1 = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggableId = _ref.draggableId,
      previousImpact = _ref.previousImpact,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      viewport = _ref.viewport;
  !previousImpact.destination ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot move to next index where there is no previous destination') : undefined : void 0;
  var location = previousImpact.destination;
  var draggable = draggables[draggableId];
  var axis = droppable.axis;
  var insideForeignDroppable = getDraggablesInsideDroppable(droppable, draggables);
  var currentIndex = location.index;
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
  var lastIndex = insideForeignDroppable.length - 1;

  if (proposedIndex > insideForeignDroppable.length) {
    return null;
  }

  if (proposedIndex < 0) {
    return null;
  }

  var movingRelativeTo = insideForeignDroppable[Math.min(proposedIndex, lastIndex)];
  var isMovingPastLastIndex = proposedIndex > lastIndex;
  var sourceEdge = 'start';

  var destinationEdge = function () {
    if (isMovingPastLastIndex) {
      return 'end';
    }

    return 'start';
  }();

  var newPageBorderBoxCenter = moveToEdge({
    source: draggable.page.borderBox,
    sourceEdge: sourceEdge,
    destination: movingRelativeTo.page.marginBox,
    destinationEdge: destinationEdge,
    destinationAxis: droppable.axis
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable,
    destination: droppable,
    newPageBorderBoxCenter: newPageBorderBoxCenter,
    viewport: viewport.frame
  });

  var displaced = function () {
    if (isMovingForward) {
      return withFirstRemoved({
        dragging: draggableId,
        isVisibleInNewLocation: isVisibleInNewLocation,
        previousImpact: previousImpact,
        droppable: droppable,
        draggables: draggables
      });
    }

    return withFirstAdded({
      add: movingRelativeTo.descriptor.id,
      previousImpact: previousImpact,
      droppable: droppable,
      draggables: draggables,
      viewport: viewport
    });
  }();

  var newImpact = {
    movement: {
      displaced: displaced,
      amount: patch(axis.line, draggable.page.marginBox[axis.size]),
      isBeyondStartPosition: false
    },
    destination: {
      droppableId: droppable.descriptor.id,
      index: proposedIndex
    },
    direction: droppable.axis.direction
  };

  if (isVisibleInNewLocation) {
    return {
      pageBorderBoxCenter: withDroppableDisplacement(droppable, newPageBorderBoxCenter),
      impact: newImpact,
      scrollJumpRequest: null
    };
  }

  var distanceMoving = subtract(newPageBorderBoxCenter, previousPageBorderBoxCenter);
  var distanceWithScroll = withDroppableDisplacement(droppable, distanceMoving);
  return {
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    impact: newImpact,
    scrollJumpRequest: distanceWithScroll
  };
});

var moveToNextIndex = (function (args) {
  var draggableId = args.draggableId,
      draggables = args.draggables,
      droppable = args.droppable;
  var draggable = draggables[draggableId];
  var isInHomeList = draggable.descriptor.droppableId === droppable.descriptor.id;

  if (!droppable.isEnabled) {
    return null;
  }

  if (isInHomeList) {
    return inHomeList$1(args);
  }

  return inForeignList$1(args);
});

var getClientSelection = function getClientSelection(pageBorderBoxCenter, currentScroll) {
  return subtract(pageBorderBoxCenter, currentScroll);
};

var moveInDirection = (function (_ref) {
  var state = _ref.state,
      type = _ref.type;

  var _ref2 = function () {
    if (state.impact.destination) {
      return {
        droppable: state.dimensions.droppables[state.impact.destination.droppableId],
        isMainAxisMovementAllowed: true
      };
    }

    return {
      droppable: state.dimensions.droppables[state.critical.droppable.id],
      isMainAxisMovementAllowed: false
    };
  }(),
      droppable = _ref2.droppable,
      isMainAxisMovementAllowed = _ref2.isMainAxisMovementAllowed;

  var direction = droppable.axis.direction;
  var isMovingOnMainAxis = direction === 'vertical' && (type === 'MOVE_UP' || type === 'MOVE_DOWN') || direction === 'horizontal' && (type === 'MOVE_LEFT' || type === 'MOVE_RIGHT');

  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
    return null;
  }

  var isMovingForward = type === 'MOVE_DOWN' || type === 'MOVE_RIGHT';

  if (isMovingOnMainAxis) {
    var _result = moveToNextIndex({
      isMovingForward: isMovingForward,
      draggableId: state.critical.draggable.id,
      droppable: droppable,
      draggables: state.dimensions.draggables,
      previousPageBorderBoxCenter: state.current.page.borderBoxCenter,
      previousImpact: state.impact,
      viewport: state.viewport
    });

    if (!_result) {
      return null;
    }

    return {
      impact: _result.impact,
      clientSelection: getClientSelection(_result.pageBorderBoxCenter, state.viewport.scroll.current),
      scrollJumpRequest: _result.scrollJumpRequest
    };
  }

  var home = getHomeLocation(state.critical);
  var result = moveCrossAxis({
    isMovingForward: isMovingForward,
    pageBorderBoxCenter: state.current.page.borderBoxCenter,
    draggableId: state.critical.draggable.id,
    droppableId: droppable.descriptor.id,
    home: home,
    draggables: state.dimensions.draggables,
    droppables: state.dimensions.droppables,
    previousImpact: state.impact,
    viewport: state.viewport
  });

  if (!result) {
    return null;
  }

  return {
    clientSelection: getClientSelection(result.pageBorderBoxCenter, state.viewport.scroll.current),
    impact: result.impact,
    scrollJumpRequest: null
  };
});

var scrollViewport = (function (viewport, newScroll) {
  var diff = subtract(newScroll, viewport.scroll.initial);
  var displacement = negate(diff);
  var frame = Object(css_box_model__WEBPACK_IMPORTED_MODULE_2__["getRect"])({
    top: newScroll.y,
    bottom: newScroll.y + viewport.frame.height,
    left: newScroll.x,
    right: newScroll.x + viewport.frame.width
  });
  var updated = {
    frame: frame,
    scroll: {
      initial: viewport.scroll.initial,
      max: viewport.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement: displacement
      }
    }
  };
  return updated;
});

var getHomeImpact = (function (critical, dimensions) {
  var home = dimensions.droppables[critical.droppable.id];
  var axis = home.axis;
  var draggable = dimensions.draggables[critical.draggable.id];
  return {
    movement: {
      displaced: [],
      isBeyondStartPosition: false,
      amount: patch(axis.line, draggable.client.marginBox[axis.size])
    },
    direction: axis.direction,
    destination: getHomeLocation(critical)
  };
});

var getPageItemPositions = (function (client, windowScroll) {
  return {
    selection: add(client.selection, windowScroll),
    borderBoxCenter: add(client.borderBoxCenter, windowScroll),
    offset: add(client.offset, windowScroll)
  };
});

function isMovementAllowed(state) {
  return state.phase === 'DRAGGING' || state.phase === 'COLLECTING';
}

var idle = {
  phase: 'IDLE'
};
var preparing = {
  phase: 'PREPARING'
};

var moveWithPositionUpdates = function moveWithPositionUpdates(_ref) {
  var state = _ref.state,
      clientSelection = _ref.clientSelection,
      shouldAnimate = _ref.shouldAnimate,
      viewport = _ref.viewport,
      impact = _ref.impact,
      scrollJumpRequest = _ref.scrollJumpRequest;
  var newViewport = viewport || state.viewport;
  var currentWindowScroll = newViewport.scroll.current;

  var client = function () {
    var offset = subtract(clientSelection, state.initial.client.selection);
    return {
      offset: offset,
      selection: clientSelection,
      borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
    };
  }();

  var page = getPageItemPositions(client, currentWindowScroll);
  var current = {
    client: client,
    page: page
  };

  if (state.phase === 'COLLECTING') {
    return Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      phase: 'COLLECTING'
    }, state, {
      current: current
    });
  }

  var newImpact = impact || getDragImpact({
    pageBorderBoxCenter: page.borderBoxCenter,
    draggable: state.dimensions.draggables[state.critical.draggable.id],
    draggables: state.dimensions.draggables,
    droppables: state.dimensions.droppables,
    previousImpact: state.impact,
    viewport: newViewport
  });

  var result = Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    current: current,
    shouldAnimate: shouldAnimate,
    impact: newImpact,
    scrollJumpRequest: scrollJumpRequest || null,
    viewport: newViewport
  });

  return result;
};

var reducer = (function (state, action) {
  if (state === void 0) {
    state = idle;
  }

  if (action.type === 'CLEAN') {
    return idle;
  }

  if (action.type === 'PREPARE') {
    return preparing;
  }

  if (action.type === 'INITIAL_PUBLISH') {
    !(state.phase === 'PREPARING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'INITIAL_PUBLISH must come after a PREPARING phase') : undefined : void 0;
    var _action$payload = action.payload,
        critical = _action$payload.critical,
        client = _action$payload.client,
        viewport = _action$payload.viewport,
        dimensions = _action$payload.dimensions,
        autoScrollMode = _action$payload.autoScrollMode;
    var initial = {
      client: client,
      page: {
        selection: add(client.selection, viewport.scroll.initial),
        borderBoxCenter: add(client.selection, viewport.scroll.initial),
        offset: origin
      }
    };
    var result = {
      phase: 'DRAGGING',
      isDragging: true,
      critical: critical,
      autoScrollMode: autoScrollMode,
      dimensions: dimensions,
      initial: initial,
      current: initial,
      impact: getHomeImpact(critical, dimensions),
      viewport: viewport,
      scrollJumpRequest: null,
      shouldAnimate: false
    };
    return result;
  }

  if (action.type === 'COLLECTION_STARTING') {
    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "Collection cannot start from phase " + state.phase) : undefined : void 0;

    var _result = Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      phase: 'COLLECTING'
    }, state, {
      phase: 'COLLECTING'
    });

    return _result;
  }

  if (action.type === 'PUBLISH') {
    !(state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "Unexpected " + action.type + " received in phase " + state.phase) : undefined : void 0;
     true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "Dynamic additions and removals of Draggable and Droppable components\n      is currently not supported. But will be soon!") : undefined;
  }

  if (action.type === 'MOVE') {
    if (state.phase === 'PREPARING') {
      return state;
    }

    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, action.type + " not permitted in phase " + state.phase) : undefined : void 0;
    var _action$payload2 = action.payload,
        _client = _action$payload2.client,
        shouldAnimate = _action$payload2.shouldAnimate;

    if (state.shouldAnimate === shouldAnimate && isEqual(_client, state.current.client.selection)) {
      return state;
    }

    var impact = state.autoScrollMode === 'JUMP' ? state.impact : null;
    return moveWithPositionUpdates({
      state: state,
      clientSelection: _client,
      impact: impact,
      shouldAnimate: shouldAnimate
    });
  }

  if (action.type === 'UPDATE_DROPPABLE_SCROLL') {
    var _extends2;

    if (state.phase === 'PREPARING') {
      return state;
    }

    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, action.type + " not permitted in phase " + state.phase) : undefined : void 0;
    var _action$payload3 = action.payload,
        id = _action$payload3.id,
        offset = _action$payload3.offset;
    var target = state.dimensions.droppables[id];

    if (!target) {
      return state;
    }

    var updated = scrollDroppable(target, offset);

    var _dimensions = Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.dimensions, {
      droppables: Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.dimensions.droppables, (_extends2 = {}, _extends2[id] = updated, _extends2))
    });

    var _impact = function () {
      !isMovementAllowed(state) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false) : undefined : void 0;

      if (state.autoScrollMode === 'JUMP') {
        return state.impact;
      }

      return getDragImpact({
        pageBorderBoxCenter: state.current.page.borderBoxCenter,
        draggable: _dimensions.draggables[state.critical.draggable.id],
        draggables: _dimensions.draggables,
        droppables: _dimensions.droppables,
        previousImpact: state.impact,
        viewport: state.viewport
      });
    }();

    return Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      phase: 'DRAGGING'
    }, state, {
      phase: state.phase,
      impact: _impact,
      dimensions: _dimensions,
      scrollJumpRequest: null
    });
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_ENABLED') {
    var _extends3;

    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "Attempting to move in an unsupported phase " + state.phase) : undefined : void 0;
    var _action$payload4 = action.payload,
        _id = _action$payload4.id,
        isEnabled = _action$payload4.isEnabled;
    var _target = state.dimensions.droppables[_id];

    if (!_target) {
      return state;
    }

    !(_target.isEnabled !== isEnabled) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "Trying to set droppable isEnabled to " + String(isEnabled) + "\n      but it is already " + String(_target.isEnabled)) : undefined : void 0;

    var _updated = Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _target, {
      isEnabled: isEnabled
    });

    var _dimensions2 = Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.dimensions, {
      droppables: Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.dimensions.droppables, (_extends3 = {}, _extends3[_id] = _updated, _extends3))
    });

    var _impact2 = getDragImpact({
      pageBorderBoxCenter: state.current.page.borderBoxCenter,
      draggable: _dimensions2.draggables[state.critical.draggable.id],
      draggables: _dimensions2.draggables,
      droppables: _dimensions2.droppables,
      previousImpact: state.impact,
      viewport: state.viewport
    });

    return Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      phase: 'DRAGGING'
    }, state, {
      phase: state.phase,
      impact: _impact2,
      dimensions: _dimensions2
    });
  }

  if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
    if (state.phase === 'PREPARING') {
      return state;
    }

    if (state.phase === 'DROP_PENDING' || state.phase === 'DROP_ANIMATING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "Cannot move by window in phase " + state.phase) : undefined : void 0;
    var newScroll = action.payload.scroll;

    if (isEqual(state.viewport.scroll.current, newScroll)) {
      return state;
    }

    var isJumpScrolling = state.autoScrollMode === 'JUMP';

    var _impact3 = isJumpScrolling ? state.impact : null;

    var _viewport = scrollViewport(state.viewport, newScroll);

    return moveWithPositionUpdates({
      state: state,
      clientSelection: state.current.client.selection,
      viewport: _viewport,
      shouldAnimate: false,
      impact: _impact3
    });
  }

  if (action.type === 'UPDATE_VIEWPORT_MAX_SCROLL') {
    !state.isDragging ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot update the max viewport scroll if not dragging') : undefined : void 0;
    var existing = state.viewport;

    var _viewport2 = Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, existing, {
      scroll: Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, existing.scroll, {
        max: action.payload
      })
    });

    return Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      phase: 'DRAGGING'
    }, state, {
      phase: state.phase,
      viewport: _viewport2
    });
  }

  if (action.type === 'MOVE_UP' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_RIGHT') {
    if (state.phase === 'PREPARING') {
      return state;
    }

    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, action.type + " received while not in DRAGGING phase") : undefined : void 0;

    var _result2 = moveInDirection({
      state: state,
      type: action.type
    });

    if (!_result2) {
      return state;
    }

    return moveWithPositionUpdates({
      state: state,
      impact: _result2.impact,
      clientSelection: _result2.clientSelection,
      shouldAnimate: true,
      scrollJumpRequest: _result2.scrollJumpRequest
    });
  }

  if (action.type === 'DROP_PENDING') {
    var reason = action.payload.reason;
    !(state.phase === 'COLLECTING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Can only move into the DROP_PENDING phase from the COLLECTING phase') : undefined : void 0;

    var newState = Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      phase: 'DROP_PENDING'
    }, state, {
      phase: 'DROP_PENDING',
      isWaiting: true,
      reason: reason
    });

    return newState;
  }

  if (action.type === 'DROP_ANIMATE') {
    var pending = action.payload;
    !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "Cannot animate drop from phase " + state.phase) : undefined : void 0;
    var _result3 = {
      phase: 'DROP_ANIMATING',
      pending: pending,
      dimensions: state.dimensions
    };
    return _result3;
  }

  if (action.type === 'DROP_COMPLETE') {
    return idle;
  }

  return state;
});

var lift = function lift(args) {
  return {
    type: 'LIFT',
    payload: args
  };
};
var initialPublish = function initialPublish(args) {
  return {
    type: 'INITIAL_PUBLISH',
    payload: args
  };
};
var publish = function publish(args) {
  return {
    type: 'PUBLISH',
    payload: args
  };
};
var collectionStarting = function collectionStarting() {
  return {
    type: 'COLLECTION_STARTING',
    payload: null
  };
};
var updateDroppableScroll = function updateDroppableScroll(args) {
  return {
    type: 'UPDATE_DROPPABLE_SCROLL',
    payload: args
  };
};
var updateDroppableIsEnabled = function updateDroppableIsEnabled(args) {
  return {
    type: 'UPDATE_DROPPABLE_IS_ENABLED',
    payload: args
  };
};
var move = function move(args) {
  return {
    type: 'MOVE',
    payload: args
  };
};
var moveByWindowScroll = function moveByWindowScroll(args) {
  return {
    type: 'MOVE_BY_WINDOW_SCROLL',
    payload: args
  };
};
var updateViewportMaxScroll = function updateViewportMaxScroll(max) {
  return {
    type: 'UPDATE_VIEWPORT_MAX_SCROLL',
    payload: max
  };
};
var moveUp = function moveUp() {
  return {
    type: 'MOVE_UP',
    payload: null
  };
};
var moveDown = function moveDown() {
  return {
    type: 'MOVE_DOWN',
    payload: null
  };
};
var moveRight = function moveRight() {
  return {
    type: 'MOVE_RIGHT',
    payload: null
  };
};
var moveLeft = function moveLeft() {
  return {
    type: 'MOVE_LEFT',
    payload: null
  };
};
var clean = function clean() {
  return {
    type: 'CLEAN',
    payload: null
  };
};
var prepare = function prepare() {
  return {
    type: 'PREPARE',
    payload: null
  };
};
var animateDrop = function animateDrop(pending) {
  return {
    type: 'DROP_ANIMATE',
    payload: pending
  };
};
var completeDrop = function completeDrop(result) {
  return {
    type: 'DROP_COMPLETE',
    payload: result
  };
};
var drop = function drop(args) {
  return {
    type: 'DROP',
    payload: args
  };
};
var dropPending = function dropPending(args) {
  return {
    type: 'DROP_PENDING',
    payload: args
  };
};
var dropAnimationFinished = function dropAnimationFinished() {
  return {
    type: 'DROP_ANIMATION_FINISHED',
    payload: null
  };
};

var lift$1 = (function (getMarshal) {
  var timeoutId = null;

  var tryAbortCriticalCollection = function tryAbortCriticalCollection() {
    if (timeoutId == null) {
      return;
    }

    clearTimeout(timeoutId);
    timeoutId = null;
  };

  return function (_ref) {
    var getState = _ref.getState,
        dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        if (action.type === 'CLEAN') {
          tryAbortCriticalCollection();
          next(action);
          return;
        }

        if (action.type !== 'LIFT') {
          next(action);
          return;
        }

        !!timeoutId ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'There should not be a pending complete lift phase when a lift action is fired') : undefined : void 0;
        var marshal = getMarshal();
        var _action$payload = action.payload,
            id = _action$payload.id,
            client = _action$payload.client,
            autoScrollMode = _action$payload.autoScrollMode,
            viewport = _action$payload.viewport;
        var initial = getState();

        if (initial.phase === 'DROP_ANIMATING') {
          dispatch(completeDrop(initial.pending.result));
        }

        var postFlushState = getState();
        !(postFlushState.phase === 'IDLE') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Incorrect phase to start a drag') : undefined : void 0;
        dispatch(prepare());
        timeoutId = setTimeout(function () {
          timeoutId = null;
          var state = getState();
          !(state.phase === 'PREPARING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Invalid phase for completing lift') : undefined : void 0;
          var scrollOptions = {
            shouldPublishImmediately: autoScrollMode === 'JUMP'
          };
          var request = {
            draggableId: id,
            scrollOptions: scrollOptions
          };

          var _marshal$startPublish = marshal.startPublishing(request, viewport.scroll.current),
              critical = _marshal$startPublish.critical,
              dimensions = _marshal$startPublish.dimensions;

          dispatch(initialPublish({
            critical: critical,
            dimensions: dimensions,
            client: client,
            autoScrollMode: autoScrollMode,
            viewport: viewport
          }));
        });
      };
    };
  };
});

var style = (function (marshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH' || action.type === 'PUBLISH') {
          marshal.dragging();
        }

        if (action.type === 'COLLECTION_STARTING') {
          marshal.collecting();
        }

        if (action.type === 'DROP_ANIMATE') {
          marshal.dropping(action.payload.result.reason);
        }

        if (action.type === 'CLEAN' || action.type === 'DROP_COMPLETE') {
          marshal.resting();
        }

        next(action);
      };
    };
  };
});

var getNewHomeClientBorderBoxCenter = (function (_ref) {
  var movement = _ref.movement,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination;
  var originalCenter = draggable.client.borderBox.center;

  if (destination == null) {
    return originalCenter;
  }

  var displaced = movement.displaced,
      isBeyondStartPosition = movement.isBeyondStartPosition;
  var axis = destination.axis;
  var isWithinHomeDroppable = destination.descriptor.id === draggable.descriptor.droppableId;

  if (isWithinHomeDroppable && !displaced.length) {
    return originalCenter;
  }

  var draggablesInDestination = getDraggablesInsideDroppable(destination, draggables);

  var movingRelativeTo = function () {
    if (isWithinHomeDroppable) {
      return draggables[displaced[0].draggableId].client.borderBox;
    }

    if (displaced.length) {
      return draggables[displaced[0].draggableId].client.borderBox;
    }

    if (draggablesInDestination.length) {
      return draggablesInDestination[draggablesInDestination.length - 1].client.marginBox;
    }

    return destination.client.contentBox;
  }();

  var _ref2 = function () {
    if (isWithinHomeDroppable) {
      if (isBeyondStartPosition) {
        return {
          sourceEdge: 'end',
          destinationEdge: 'end'
        };
      }

      return {
        sourceEdge: 'start',
        destinationEdge: 'start'
      };
    }

    if (!displaced.length && draggablesInDestination.length) {
      return {
        sourceEdge: 'start',
        destinationEdge: 'end'
      };
    }

    return {
      sourceEdge: 'start',
      destinationEdge: 'start'
    };
  }(),
      sourceEdge = _ref2.sourceEdge,
      destinationEdge = _ref2.destinationEdge;

  var source = draggable.client.borderBox;
  var targetCenter = moveToEdge({
    source: source,
    sourceEdge: sourceEdge,
    destination: movingRelativeTo,
    destinationEdge: destinationEdge,
    destinationAxis: axis
  });
  return targetCenter;
});

var getScrollDisplacement = function getScrollDisplacement(droppable, viewport) {
  return withDroppableDisplacement(droppable, viewport.scroll.diff.displacement);
};

var drop$1 = (function (_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP') {
        next(action);
        return;
      }

      var state = getState();
      var reason = action.payload.reason;

      if (state.phase === 'COLLECTING') {
        dispatch(dropPending({
          reason: reason
        }));
        return;
      }

      if (state.phase === 'PREPARING') {
        dispatch(clean());
        return;
      }

      if (state.phase === 'IDLE') {
        return;
      }

      var isWaitingForDrop = state.phase === 'DROP_PENDING' && state.isWaiting;
      !!isWaitingForDrop ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'A DROP action occurred while DROP_PENDING and still waiting') : undefined : void 0;
      !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "Cannot drop in phase: " + state.phase) : undefined : void 0;
      var critical = state.critical;
      var dimensions = state.dimensions;
      var impact = reason === 'DROP' ? state.impact : noImpact;
      var home = dimensions.droppables[state.critical.droppable.id];
      var draggable = dimensions.draggables[state.critical.draggable.id];
      var droppable = impact && impact.destination ? dimensions.droppables[impact.destination.droppableId] : null;
      var source = {
        index: critical.draggable.index,
        droppableId: critical.droppable.id
      };
      var destination = reason === 'DROP' ? impact.destination : null;
      var result = {
        draggableId: draggable.descriptor.id,
        type: home.descriptor.type,
        source: source,
        destination: destination,
        reason: reason
      };

      var clientOffset = function () {
        if (reason === 'CANCEL') {
          return origin;
        }

        var newBorderBoxClientCenter = getNewHomeClientBorderBoxCenter({
          movement: impact.movement,
          draggable: draggable,
          draggables: dimensions.draggables,
          destination: droppable
        });
        return subtract(newBorderBoxClientCenter, draggable.client.borderBox.center);
      }();

      var newHomeOffset = add(clientOffset, getScrollDisplacement(droppable || home, state.viewport));
      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeOffset);
      var pending = {
        newHomeOffset: newHomeOffset,
        result: result,
        impact: impact
      };

      if (isAnimationRequired) {
        dispatch(animateDrop(pending));
        return;
      }

      dispatch(completeDrop(result));
    };
  };
});

var onDragStart = function onDragStart(start) {
  return "\n  You have lifted an item in position " + (start.source.index + 1) + ".\n  Use the arrow keys to move, space bar to drop, and escape to cancel.\n";
};

var onDragUpdate = function onDragUpdate(update) {
  if (!update.destination) {
    return 'You are currently not dragging over a droppable area';
  }

  if (update.source.droppableId === update.destination.droppableId) {
    return "You have moved the item to position " + (update.destination.index + 1);
  }

  return "\n    You have moved the item from list " + update.source.droppableId + " in position " + (update.source.index + 1) + "\n    to list " + update.destination.droppableId + " in position " + (update.destination.index + 1) + "\n  ";
};

var onDragEnd = function onDragEnd(result) {
  if (result.reason === 'CANCEL') {
    return "\n      Movement cancelled.\n      The item has returned to its starting position of " + (result.source.index + 1) + "\n    ";
  }

  if (!result.destination) {
    return "\n      The item has been dropped while not over a droppable location.\n      The item has returned to its starting position of " + (result.source.index + 1) + "\n    ";
  }

  if (result.source.droppableId === result.destination.droppableId) {
    if (result.source.index === result.destination.index) {
      return "\n        You have dropped the item.\n        It has been dropped on its starting position of " + (result.source.index + 1) + "\n      ";
    }

    return "\n      You have dropped the item.\n      It has moved from position " + (result.source.index + 1) + " to " + (result.destination.index + 1) + "\n    ";
  }

  return "\n    You have dropped the item.\n    It has moved from position " + (result.source.index + 1) + " in list " + result.source.droppableId + "\n    to position " + (result.destination.index + 1) + " in list " + result.destination.droppableId + "\n  ";
};

var preset = {
  onDragStart: onDragStart,
  onDragUpdate: onDragUpdate,
  onDragEnd: onDragEnd
};

var records = {};
var flag = '__react-beautiful-dnd-debug-timings-hook__';

var isTimingsEnabled = function isTimingsEnabled() {
  return Boolean(window[flag]);
};

var start = function start(key) {
  if (true) {
    if (!isTimingsEnabled()) {
      return;
    }

    var now = performance.now();
    records[key] = now;
  }
};
var finish = function finish(key) {
  if (true) {
    if (!isTimingsEnabled()) {
      return;
    }

    var now = performance.now();
    var previous = records[key];
    !previous ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'cannot finish timing as no previous time found') : undefined : void 0;
    var result = now - previous;
    var rounded = result.toFixed(2);

    var style = function () {
      if (result < 16) {
        return {
          textColor: 'green',
          symbol: '✅'
        };
      }

      if (result < 40) {
        return {
          textColor: 'orange',
          symbol: '⚠️'
        };
      }

      return {
        textColor: 'red',
        symbol: '❌'
      };
    }();

    console.log(style.symbol + " %cTiming %c" + rounded + " %cms %c" + key, 'color: blue; font-weight: bold; ', "color: " + style.textColor + "; font-size: 1.1em;", 'color: grey;', 'color: purple; font-weight: bold;');
  }
};

var withTimings = function withTimings(key, fn) {
  start(key);
  fn();
  finish(key);
};

var areLocationsEqual = function areLocationsEqual(first, second) {
  if (first == null && second == null) {
    return true;
  }

  if (first == null || second == null) {
    return false;
  }

  return first.droppableId === second.droppableId && first.index === second.index;
};

var isCriticalEqual = function isCriticalEqual(first, second) {
  if (first === second) {
    return true;
  }

  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
  return isDraggableEqual && isDroppableEqual;
};

var getExpiringAnnounce = function getExpiringAnnounce(announce) {
  var wasCalled = false;
  var isExpired = false;
  setTimeout(function () {
    isExpired = true;
  });

  var result = function result(message) {
    if (wasCalled) {
      if (true) {
        console.warn('Announcement already made. Not making a second announcement');
      }

      return;
    }

    if (isExpired) {
      if (true) {
        console.warn("\n          Announcements cannot be made asynchronously.\n          Default message has already been announced.\n        ");
      }

      return;
    }

    wasCalled = true;
    announce(message);
  };

  result.wasCalled = function () {
    return wasCalled;
  };

  return result;
};

var getDragStart = function getDragStart(critical) {
  return {
    draggableId: critical.draggable.id,
    type: critical.droppable.type,
    source: {
      droppableId: critical.droppable.id,
      index: critical.draggable.index
    }
  };
};

var hooks = (function (getHooks, announce) {
  var execute = function execute(hook, data, getDefaultMessage) {
    if (!hook) {
      announce(getDefaultMessage(data));
      return;
    }

    var willExpire = getExpiringAnnounce(announce);
    var provided = {
      announce: willExpire
    };
    hook(data, provided);

    if (!willExpire.wasCalled()) {
      announce(getDefaultMessage(data));
    }
  };

  var publisher = function () {
    var lastLocation = null;
    var lastCritical = null;
    var _isDragStartPublished = false;

    var start$$1 = function start$$1(critical) {
      !!_isDragStartPublished ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot fire onDragStart as a drag start has already been published') : undefined : void 0;
      var data = getDragStart(critical);
      _isDragStartPublished = true;
      lastCritical = critical;
      lastLocation = data.source;
      withTimings('onDragStart', function () {
        return execute(getHooks().onDragStart, data, preset.onDragStart);
      });
    };

    var move = function move(critical, location) {
      !(_isDragStartPublished && lastCritical) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot fire onDragMove when onDragStart has not been called') : undefined : void 0;
      var hasCriticalChanged = !isCriticalEqual(critical, lastCritical);

      if (hasCriticalChanged) {
        lastCritical = critical;
      }

      var hasLocationChanged = !areLocationsEqual(lastLocation, location);

      if (hasLocationChanged) {
        lastLocation = location;
      }

      if (!hasCriticalChanged && !hasLocationChanged) {
        return;
      }

      var data = Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getDragStart(critical), {
        destination: location
      });

      withTimings('onDragUpdate', function () {
        return execute(getHooks().onDragUpdate, data, preset.onDragUpdate);
      });
    };

    var drop = function drop(result) {
      !_isDragStartPublished ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot fire onDragEnd when there is no matching onDragStart') : undefined : void 0;
      _isDragStartPublished = false;
      lastLocation = null;
      lastCritical = null;
      withTimings('onDragEnd', function () {
        return execute(getHooks().onDragEnd, result, preset.onDragEnd);
      });
    };

    var abort = function abort() {
      !(_isDragStartPublished && lastCritical) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot cancel when onDragStart not fired') : undefined : void 0;

      var result = Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getDragStart(lastCritical), {
        destination: null,
        reason: 'CANCEL'
      });

      drop(result);
    };

    return {
      start: start$$1,
      move: move,
      drop: drop,
      abort: abort,
      isDragStartPublished: function isDragStartPublished() {
        return _isDragStartPublished;
      }
    };
  }();

  return function (store) {
    return function (next) {
      return function (action) {
        next(action);

        if (action.type === 'INITIAL_PUBLISH') {
          var critical = action.payload.critical;
          publisher.start(critical);
          return;
        }

        if (action.type === 'DROP_COMPLETE') {
          var result = action.payload;
          publisher.drop(result);
          return;
        }

        if (action.type === 'CLEAN') {
          if (publisher.isDragStartPublished()) {
            publisher.abort();
          }

          return;
        }

        if (!publisher.isDragStartPublished()) {
          return;
        }

        var state = store.getState();

        if (state.phase === 'DRAGGING') {
          publisher.move(state.critical, state.impact.destination);
        }
      };
    };
  };
});

var dropAnimationFinish = (function (store) {
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP_ANIMATION_FINISHED') {
        next(action);
        return;
      }

      var state = store.getState();
      !(state.phase === 'DROP_ANIMATING') ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot finish a drop animating when no drop is occurring') : undefined : void 0;
      store.dispatch(completeDrop(state.pending.result));
    };
  };
});

var dimensionMarshalStopper = (function (getMarshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'DROP_COMPLETE' || action.type === 'CLEAN' || action.type === 'DROP_ANIMATE') {
          var marshal = getMarshal();
          marshal.stopPublishing();
        }

        next(action);
      };
    };
  };
});

var shouldCancel = function shouldCancel(action) {
  return action.type === 'CANCEL' || action.type === 'DROP_ANIMATE' || action.type === 'DROP' || action.type === 'DROP_COMPLETE' || action.type === 'COLLECTION_STARTING';
};

var autoScroll = (function (getScroller) {
  return function (store) {
    return function (next) {
      return function (action) {
        if (shouldCancel(action)) {
          getScroller().cancel();
          next(action);
          return;
        }

        next(action);
        var state = store.getState();

        if (state.phase !== 'DRAGGING') {
          return;
        }

        if (state.autoScrollMode === 'FLUID') {
          getScroller().fluidScroll(state);
          return;
        }

        if (!state.scrollJumpRequest) {
          return;
        }

        getScroller().jumpScroll(state);
      };
    };
  };
});

var shouldCheckOnAction = function shouldCheckOnAction(action) {
  return action.type === 'MOVE' || action.type === 'MOVE_UP' || action.type === 'MOVE_RIGHT' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_BY_WINDOW_SCROLL';
};

var hasDroppableOverChanged = function hasDroppableOverChanged(previous, current) {
  if (!previous) {
    return Boolean(current);
  }

  if (!current) {
    return Boolean(previous);
  }

  return previous.droppableId !== current.droppableId;
};

var getNewMaxScroll = function getNewMaxScroll(previous, current, action) {
  if (!shouldCheckOnAction(action)) {
    return null;
  }

  if (!isMovementAllowed(previous) || !isMovementAllowed(current)) {
    return null;
  }

  if (!hasDroppableOverChanged(previous.impact.destination, current.impact.destination)) {
    return null;
  }

  var viewport = current.viewport;
  var doc = document.documentElement;
  !doc ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Could not find document.documentElement') : undefined : void 0;
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: viewport.frame.width,
    height: viewport.frame.height
  });

  if (isEqual(maxScroll, viewport.scroll.max)) {
    return null;
  }

  return maxScroll;
};

var maxScrollUpdater = (function (store) {
  return function (next) {
    return function (action) {
      var previous = store.getState();
      next(action);
      var current = store.getState();
      var maxScroll = getNewMaxScroll(previous, current, action);

      if (maxScroll) {
        next(updateViewportMaxScroll(maxScroll));
      }
    };
  };
});

var composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : redux__WEBPACK_IMPORTED_MODULE_5__["compose"];
var createStore$1 = (function (_ref) {
  var getDimensionMarshal = _ref.getDimensionMarshal,
      styleMarshal = _ref.styleMarshal,
      getHooks = _ref.getHooks,
      announce = _ref.announce,
      getScroller = _ref.getScroller;
  return Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(reducer, composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_5__["applyMiddleware"])(style(styleMarshal), dimensionMarshalStopper(getDimensionMarshal), lift$1(getDimensionMarshal), drop$1, dropAnimationFinish, maxScrollUpdater, autoScroll(getScroller), hooks(getHooks, announce))));
});

var getEmptyMap = function getEmptyMap() {
  return {
    draggables: {},
    droppables: {}
  };
};

var timingKey = 'Publish collection from DOM';
var createPublisher = (function (_ref) {
  var getProvided = _ref.getProvided,
      callbacks = _ref.callbacks;

  var advancedUsageWarning = function () {
    if (false) {}

    var hasAnnounced = false;
    return function () {
      if (hasAnnounced) {
        return;
      }

      hasAnnounced = true;

      if (false) {}

      console.warn("\n        Advanced usage warning: you are adding or removing a dimension during a drag\n        This an advanced feature used to support dynamic interactions such as lazy loading lists.\n\n        Keep in mind the following restrictions:\n\n        - Draggable's can only be added to Droppable's that are scroll containers\n        - Adding a Droppable cannot impact the placement of other Droppables\n          (it cannot push a Droppable on the page)\n\n        (This warning will be stripped in production builds)\n      ".trim());
    };
  }();

  var additions = getEmptyMap();
  var removals = getEmptyMap();
  var frameId = null;

  var reset = function reset() {
    additions = getEmptyMap();
    removals = getEmptyMap();
  };

  var collect = function collect() {
    advancedUsageWarning();

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      callbacks.collectionStarting();
      start(timingKey);

      var _getProvided = getProvided(),
          entries = _getProvided.entries,
          collection = _getProvided.collection;

      var windowScroll = collection.initialWindowScroll;

      var draggables = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(additions.draggables).map(function (id) {
        return entries.draggables[id].getDimension(windowScroll);
      });

      var droppables = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(additions.droppables).map(function (id) {
        return entries.droppables[id].callbacks.getDimensionAndWatchScroll(windowScroll, collection.scrollOptions);
      });

      var result = {
        additions: {
          draggables: draggables,
          droppables: droppables
        },
        removals: {
          draggables: _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(removals.draggables),
          droppables: _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(removals.droppables)
        }
      };
      reset();
      finish(timingKey);
      callbacks.publish(result);
    });
  };

  var addDraggable = function addDraggable(id) {
    additions.draggables[id] = true;

    if (removals.draggables[id]) {
      delete removals.draggables[id];
    }

    collect();
  };

  var removeDraggable = function removeDraggable(id) {
    removals.draggables[id] = true;

    if (additions.draggables[id]) {
      delete additions.draggables[id];
    }

    collect();
  };

  var addDroppable = function addDroppable(id) {
    additions.droppables[id] = true;

    if (removals.droppables[id]) {
      delete removals.droppables[id];
    }

    collect();
  };

  var removeDroppable = function removeDroppable(id) {
    removals.droppables[id] = true;

    if (additions.droppables[id]) {
      delete additions.droppables[id];
    }

    collect();
  };

  var stop = function stop() {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
    reset();
  };

  return {
    addDraggable: addDraggable,
    removeDraggable: removeDraggable,
    addDroppable: addDroppable,
    removeDroppable: removeDroppable,
    stop: stop
  };
});

var createDimensionMarshal = (function (callbacks) {
  var entries = {
    droppables: {},
    draggables: {}
  };
  var collection = null;
  var publisher = createPublisher({
    callbacks: {
      publish: callbacks.publish,
      collectionStarting: callbacks.collectionStarting
    },
    getProvided: function getProvided() {
      !collection ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot get scroll options when there is no collection') : undefined : void 0;
      return {
        entries: entries,
        collection: collection
      };
    }
  });

  var registerDraggable = function registerDraggable(descriptor, getDimension) {
    var entry = {
      descriptor: descriptor,
      getDimension: getDimension
    };
    entries.draggables[descriptor.id] = entry;

    if (!collection) {
      return;
    }

    if (collection.critical.draggable.type !== descriptor.type) {
      return;
    }

    publisher.addDraggable(descriptor.id);
  };

  var updateDraggable = function updateDraggable(previous, descriptor, getDimension) {
    !entries.draggables[previous.id] ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot update draggable registration as no previous registration was found') : undefined : void 0;
    delete entries.draggables[previous.id];
    var entry = {
      descriptor: descriptor,
      getDimension: getDimension
    };
    entries.draggables[descriptor.id] = entry;
  };

  var unregisterDraggable = function unregisterDraggable(descriptor) {
    var entry = entries.draggables[descriptor.id];
    !entry ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "Cannot unregister Draggable with id " + descriptor.id + " as it is not registered") : undefined : void 0;

    if (entry.descriptor !== descriptor) {
      return;
    }

    delete entries.draggables[descriptor.id];

    if (!collection) {
      return;
    }

    !(collection.critical.draggable.id !== descriptor.id) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot remove the dragging item during a drag') : undefined : void 0;

    if (descriptor.type !== collection.critical.draggable.type) {
      return;
    }

    publisher.removeDraggable(descriptor.id);
  };

  var registerDroppable = function registerDroppable(descriptor, droppableCallbacks) {
    var id = descriptor.id;
    entries.droppables[id] = {
      descriptor: descriptor,
      callbacks: droppableCallbacks
    };

    if (!collection) {
      return;
    }

    if (descriptor.type !== collection.critical.droppable.type) {
      return;
    }

    publisher.addDroppable(id);
  };

  var updateDroppable = function updateDroppable(previous, descriptor, droppableCallbacks) {
    !entries.droppables[previous.id] ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot update droppable registration as no previous registration was found') : undefined : void 0;
    delete entries.droppables[previous.id];
    var entry = {
      descriptor: descriptor,
      callbacks: droppableCallbacks
    };
    entries.droppables[descriptor.id] = entry;

    if (collection) {
       true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'You are not able to update the id or type of a droppable during a drag') : undefined;
    }
  };

  var unregisterDroppable = function unregisterDroppable(descriptor) {
    var entry = entries.droppables[descriptor.id];
    !entry ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "Cannot unregister Droppable with id " + descriptor.id + " as as it is not registered") : undefined : void 0;

    if (entry.descriptor !== descriptor) {
      return;
    }

    delete entries.droppables[descriptor.id];

    if (!collection) {
      return;
    }

    !(collection.critical.droppable.id !== descriptor.id) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot remove the home Droppable during a drag') : undefined : void 0;

    if (collection.critical.droppable.type !== descriptor.type) {
      return;
    }

    publisher.removeDroppable(descriptor.id);
  };

  var updateDroppableIsEnabled = function updateDroppableIsEnabled(id, isEnabled) {
    !entries.droppables[id] ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "Cannot update the scroll on Droppable " + id + " as it is not registered") : undefined : void 0;

    if (!collection) {
      return;
    }

    callbacks.updateDroppableIsEnabled({
      id: id,
      isEnabled: isEnabled
    });
  };

  var updateDroppableScroll = function updateDroppableScroll(id, newScroll) {
    !entries.droppables[id] ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "Cannot update the scroll on Droppable " + id + " as it is not registered") : undefined : void 0;

    if (!collection) {
      return;
    }

    callbacks.updateDroppableScroll({
      id: id,
      offset: newScroll
    });
  };

  var scrollDroppable = function scrollDroppable(id, change) {
    var entry = entries.droppables[id];
    !entry ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "Cannot scroll Droppable " + id + " as it is not registered") : undefined : void 0;

    if (!collection) {
      return;
    }

    entry.callbacks.scroll(change);
  };

  var getInitialPublish = function getInitialPublish(args) {
    var critical = args.critical,
        scrollOptions = args.scrollOptions,
        windowScroll = args.initialWindowScroll;
    var timingKey = 'Initial collection from DOM';
    start(timingKey);
    var home = critical.droppable;

    var droppables = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(entries.droppables).map(function (id) {
      return entries.droppables[id];
    }).filter(function (entry) {
      return entry.descriptor.type === home.type;
    }).map(function (entry) {
      return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
    }).reduce(function (previous, dimension) {
      previous[dimension.descriptor.id] = dimension;
      return previous;
    }, {});

    var draggables = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(entries.draggables).map(function (id) {
      return entries.draggables[id];
    }).filter(function (entry) {
      return entry.descriptor.type === critical.draggable.type;
    }).map(function (entry) {
      return entry.getDimension(windowScroll);
    }).reduce(function (previous, dimension) {
      previous[dimension.descriptor.id] = dimension;
      return previous;
    }, {});

    finish(timingKey);
    var dimensions = {
      draggables: draggables,
      droppables: droppables
    };
    var result = {
      dimensions: dimensions,
      critical: critical
    };
    return result;
  };

  var stopPublishing = function stopPublishing() {
    if (!collection) {
      return;
    }

    publisher.stop();
    var home = collection.critical.droppable;

    _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(entries.droppables).filter(function (id) {
      return entries.droppables[id].descriptor.type === home.type;
    }).forEach(function (id) {
      return entries.droppables[id].callbacks.unwatchScroll();
    });

    collection = null;
  };

  var startPublishing = function startPublishing(request, windowScroll) {
    !!collection ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot start capturing critical dimensions as there is already a collection') : undefined : void 0;
    var entry = entries.draggables[request.draggableId];
    !entry ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot find critical draggable entry') : undefined : void 0;
    var home = entries.droppables[entry.descriptor.droppableId];
    !home ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot find critical droppable entry') : undefined : void 0;
    var critical = {
      draggable: entry.descriptor,
      droppable: home.descriptor
    };
    collection = {
      scrollOptions: request.scrollOptions,
      critical: critical,
      initialWindowScroll: windowScroll
    };
    return getInitialPublish(collection);
  };

  var marshal = {
    registerDraggable: registerDraggable,
    updateDraggable: updateDraggable,
    unregisterDraggable: unregisterDraggable,
    registerDroppable: registerDroppable,
    updateDroppable: updateDroppable,
    unregisterDroppable: unregisterDroppable,
    updateDroppableIsEnabled: updateDroppableIsEnabled,
    scrollDroppable: scrollDroppable,
    updateDroppableScroll: updateDroppableScroll,
    startPublishing: startPublishing,
    stopPublishing: stopPublishing
  };
  return marshal;
});

var physics = function () {
  var base = {
    stiffness: 1000,
    damping: 60,
    precision: 0.99
  };

  var standard = Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, base);

  var fast = Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, base, {
    stiffness: base.stiffness * 2
  });

  return {
    standard: standard,
    fast: fast
  };
}();
var css = {
  outOfTheWay: 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'
};

var prefix = 'data-react-beautiful-dnd';
var dragHandle = prefix + "-drag-handle";
var draggable = prefix + "-draggable";
var droppable = prefix + "-droppable";

var getStyles = (function (styleContext) {
  var dragHandleSelector = "[" + dragHandle + "=\"" + styleContext + "\"]";
  var draggableSelector = "[" + draggable + "=\"" + styleContext + "\"]";
  var droppableSelector = "[" + droppable + "=\"" + styleContext + "\"]";
  var dragHandleStyles = {
    base: "\n      " + dragHandleSelector + " {\n        -webkit-touch-callout: none;\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        touch-action: manipulation;\n      }\n    ",
    grabCursor: "\n      " + dragHandleSelector + " {\n        cursor: -webkit-grab;\n        cursor: grab;\n      }\n    ",
    blockPointerEvents: "\n      " + dragHandleSelector + " {\n        pointer-events: none;\n      }\n    "
  };
  var draggableStyles = {
    animateMovement: "\n      " + draggableSelector + " {\n        transition: " + css.outOfTheWay + ";\n      }\n    "
  };
  var droppableStyles = {
    base: "\n      " + droppableSelector + " {\n        overflow-anchor: none;\n      }\n    "
  };
  var bodyStyles = {
    whileActiveDragging: "\n      body {\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n      }\n    "
  };
  var base = [dragHandleStyles.base, droppableStyles.base];
  var resting = base.concat([dragHandleStyles.grabCursor]);
  var collecting = base.concat([dragHandleStyles.blockPointerEvents, bodyStyles.whileActiveDragging]);
  var dragging = collecting.concat([draggableStyles.animateMovement]);
  var dropAnimating = base.concat([dragHandleStyles.grabCursor, draggableStyles.animateMovement]);
  var userCancel = base.concat([draggableStyles.animateMovement]);
  return {
    resting: resting.join(''),
    dragging: dragging.join(''),
    dropAnimating: dropAnimating.join(''),
    collecting: collecting.join(''),
    userCancel: userCancel.join('')
  };
});

var count = 0;
var resetStyleContext = function resetStyleContext() {
  count = 0;
};

var getHead = function getHead() {
  var head = document.querySelector('head');
  !head ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot find the head to append a style to') : undefined : void 0;
  return head;
};

var createStyleMarshal = (function () {
  var context = "" + count++;
  var styles = getStyles(context);
  var el = null;
  var setStyle = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (proposed) {
    !el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot set style of style tag if not mounted') : undefined : void 0;
    el.innerHTML = proposed;
  });

  var mount = function mount() {
    !!el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Style marshal already mounted') : undefined : void 0;
    el = document.createElement('style');
    el.type = 'text/css';
    el.setAttribute(prefix, context);
    getHead().appendChild(el);
    setStyle(styles.resting);
  };

  var collecting = function collecting() {
    return setStyle(styles.collecting);
  };

  var dragging = function dragging() {
    return setStyle(styles.dragging);
  };

  var dropping = function dropping(reason) {
    if (reason === 'DROP') {
      setStyle(styles.dropAnimating);
      return;
    }

    setStyle(styles.userCancel);
  };

  var resting = function resting() {
    return setStyle(styles.resting);
  };

  var unmount = function unmount() {
    !el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot unmount style marshal as it is already unmounted') : undefined : void 0;
    getHead().removeChild(el);
    el = null;
  };

  var marshal = {
    collecting: collecting,
    dragging: dragging,
    dropping: dropping,
    resting: resting,
    styleContext: context,
    mount: mount,
    unmount: unmount
  };
  return marshal;
});

var canStartDrag = (function (state, id) {
  if (state.phase === 'IDLE') {
    return true;
  }

  if (state.phase !== 'DROP_ANIMATING') {
    return false;
  }

  if (state.pending.result.draggableId === id) {
    return false;
  }

  return state.pending.result.reason === 'DROP';
});

var scrollWindow = (function (change) {
  window.scrollBy(change.x, change.y);
});

var count$1 = 0;
var visuallyHidden = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: '0',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  'clip-path': 'inset(100%)'
};

var getBody = function getBody() {
  !document.body ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Announcer cannot find document.body') : undefined : void 0;
  return document.body;
};

var createAnnouncer = (function () {
  var id = "react-beautiful-dnd-announcement-" + count$1++;
  var el = null;

  var announce = function announce(message) {
    !el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot announce to unmounted node') : undefined : void 0;
    el.textContent = message;
  };

  var mount = function mount() {
    !!el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Announcer already mounted') : undefined : void 0;
    el = document.createElement('div');
    el.id = id;
    el.setAttribute('aria-live', 'assertive');
    el.setAttribute('role', 'log');
    el.setAttribute('aria-atomic', 'true');

    _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6___default()(el.style, visuallyHidden);

    getBody().appendChild(el);
  };

  var unmount = function unmount() {
    !el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Will not unmount annoucer as it is already unmounted') : undefined : void 0;
    getBody().removeChild(el);
    el = null;
  };

  var announcer = {
    announce: announce,
    id: id,
    mount: mount,
    unmount: unmount
  };
  return announcer;
});

var getScrollableDroppables = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (droppables) {
  return toDroppableList(droppables).filter(function (droppable) {
    if (!droppable.isEnabled) {
      return false;
    }

    if (!droppable.viewport.closestScrollable) {
      return false;
    }

    return true;
  });
});

var getScrollableDroppableOver = function getScrollableDroppableOver(target, droppables) {
  var maybe = getScrollableDroppables(droppables).find(function (droppable) {
    !droppable.viewport.closestScrollable ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Invalid result') : undefined : void 0;
    return isPositionInFrame(droppable.viewport.closestScrollable.framePageMarginBox)(target);
  });
  return maybe;
};

var getBestScrollableDroppable = (function (_ref) {
  var center = _ref.center,
      destination = _ref.destination,
      droppables = _ref.droppables;

  if (destination) {
    var _dimension = droppables[destination.droppableId];

    if (!_dimension.viewport.closestScrollable) {
      return null;
    }

    return _dimension;
  }

  var dimension = getScrollableDroppableOver(center, droppables);
  return dimension;
});

var smallestSigned = apply(function (value) {
  if (value === 0) {
    return 0;
  }

  return value > 0 ? 1 : -1;
});
var getOverlap = function () {
  var getRemainder = function getRemainder(target, max) {
    if (target < 0) {
      return target;
    }

    if (target > max) {
      return target - max;
    }

    return 0;
  };

  return function (_ref) {
    var current = _ref.current,
        max = _ref.max,
        change = _ref.change;
    var targetScroll = add(current, change);
    var overlap = {
      x: getRemainder(targetScroll.x, max.x),
      y: getRemainder(targetScroll.y, max.y)
    };

    if (isEqual(overlap, origin)) {
      return null;
    }

    return overlap;
  };
}();
var canPartiallyScroll = function canPartiallyScroll(_ref2) {
  var rawMax = _ref2.max,
      current = _ref2.current,
      change = _ref2.change;
  var max = {
    x: Math.max(current.x, rawMax.x),
    y: Math.max(current.y, rawMax.y)
  };
  var smallestChange = smallestSigned(change);
  var overlap = getOverlap({
    max: max,
    current: current,
    change: smallestChange
  });

  if (!overlap) {
    return true;
  }

  if (smallestChange.x !== 0 && overlap.x === 0) {
    return true;
  }

  if (smallestChange.y !== 0 && overlap.y === 0) {
    return true;
  }

  return false;
};
var canScrollWindow = function canScrollWindow(viewport, change) {
  return canPartiallyScroll({
    current: viewport.scroll.current,
    max: viewport.scroll.max,
    change: change
  });
};
var getWindowOverlap = function getWindowOverlap(viewport, change) {
  if (!canScrollWindow(viewport, change)) {
    return null;
  }

  var max = viewport.scroll.max;
  var current = viewport.scroll.current;
  return getOverlap({
    current: current,
    max: max,
    change: change
  });
};
var canScrollDroppable = function canScrollDroppable(droppable, change) {
  var closest$$1 = droppable.viewport.closestScrollable;

  if (!closest$$1) {
    return false;
  }

  return canPartiallyScroll({
    current: closest$$1.scroll.current,
    max: closest$$1.scroll.max,
    change: change
  });
};
var getDroppableOverlap = function getDroppableOverlap(droppable, change) {
  var closest$$1 = droppable.viewport.closestScrollable;

  if (!closest$$1) {
    return null;
  }

  if (!canScrollDroppable(droppable, change)) {
    return null;
  }

  return getOverlap({
    current: closest$$1.scroll.current,
    max: closest$$1.scroll.max,
    change: change
  });
};

var config = {
  startFrom: 0.25,
  maxSpeedAt: 0.05,
  maxScrollSpeed: 28,
  ease: function ease(percentage) {
    return Math.pow(percentage, 2);
  }
};
var clean$1 = apply(function (value) {
  return value === 0 ? 0 : value;
});
var getPixelThresholds = function getPixelThresholds(container, axis) {
  var startFrom = container[axis.size] * config.startFrom;
  var maxSpeedAt = container[axis.size] * config.maxSpeedAt;
  var accelerationPlane = startFrom - maxSpeedAt;
  var thresholds = {
    startFrom: startFrom,
    maxSpeedAt: maxSpeedAt,
    accelerationPlane: accelerationPlane
  };
  return thresholds;
};

var getSpeed = function getSpeed(distance$$1, thresholds) {
  if (distance$$1 >= thresholds.startFrom) {
    return 0;
  }

  if (distance$$1 <= thresholds.maxSpeedAt) {
    return config.maxScrollSpeed;
  }

  var distancePastStart = thresholds.startFrom - distance$$1;
  var percentage = distancePastStart / thresholds.accelerationPlane;
  var transformed = config.ease(percentage);
  var speed = config.maxScrollSpeed * transformed;
  return speed;
};

var adjustForSizeLimits = function adjustForSizeLimits(_ref) {
  var container = _ref.container,
      subject = _ref.subject,
      proposedScroll = _ref.proposedScroll;
  var isTooBigVertically = subject.height > container.height;
  var isTooBigHorizontally = subject.width > container.width;

  if (!isTooBigHorizontally && !isTooBigVertically) {
    return proposedScroll;
  }

  if (isTooBigHorizontally && isTooBigVertically) {
    return null;
  }

  return {
    x: isTooBigHorizontally ? 0 : proposedScroll.x,
    y: isTooBigVertically ? 0 : proposedScroll.y
  };
};

var getRequiredScroll = function getRequiredScroll(_ref2) {
  var container = _ref2.container,
      subject = _ref2.subject,
      center = _ref2.center;
  var distance$$1 = {
    top: center.y - container.top,
    right: container.right - center.x,
    bottom: container.bottom - center.y,
    left: center.x - container.left
  };

  var y = function () {
    var thresholds = getPixelThresholds(container, vertical);
    var isCloserToBottom = distance$$1.bottom < distance$$1.top;

    if (isCloserToBottom) {
      return getSpeed(distance$$1.bottom, thresholds);
    }

    return -1 * getSpeed(distance$$1.top, thresholds);
  }();

  var x = function () {
    var thresholds = getPixelThresholds(container, horizontal);
    var isCloserToRight = distance$$1.right < distance$$1.left;

    if (isCloserToRight) {
      return getSpeed(distance$$1.right, thresholds);
    }

    return -1 * getSpeed(distance$$1.left, thresholds);
  }();

  var required = clean$1({
    x: x,
    y: y
  });

  if (isEqual(required, origin)) {
    return null;
  }

  var limited = adjustForSizeLimits({
    container: container,
    subject: subject,
    proposedScroll: required
  });

  if (!limited) {
    return null;
  }

  return isEqual(limited, origin) ? null : limited;
};

var withPlaceholder = function withPlaceholder(droppable, draggable) {
  var closest$$1 = droppable.viewport.closestScrollable;

  if (!closest$$1) {
    return null;
  }

  var isOverHome = droppable.descriptor.id === draggable.descriptor.droppableId;
  var max = closest$$1.scroll.max;
  var current = closest$$1.scroll.current;

  if (isOverHome) {
    return {
      max: max,
      current: current
    };
  }

  var spaceForPlaceholder = patch(droppable.axis.line, draggable.placeholder.client.borderBox[droppable.axis.size]);
  var newMax = add(max, spaceForPlaceholder);
  var newCurrent = {
    x: Math.min(current.x, newMax.x),
    y: Math.min(current.y, newMax.y)
  };
  return {
    max: newMax,
    current: newCurrent
  };
};

var createFluidScroller = (function (_ref3) {
  var scrollWindow = _ref3.scrollWindow,
      scrollDroppable = _ref3.scrollDroppable;
  var scheduleWindowScroll = Object(raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(scrollWindow);
  var scheduleDroppableScroll = Object(raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(scrollDroppable);

  var scroller = function scroller(state) {
    var center = state.current.page.borderBoxCenter;
    var draggable = state.dimensions.draggables[state.critical.draggable.id];
    var subject = draggable.page.marginBox;
    var viewport = state.viewport;
    var requiredWindowScroll = getRequiredScroll({
      container: viewport.frame,
      subject: subject,
      center: center
    });

    if (requiredWindowScroll && canScrollWindow(viewport, requiredWindowScroll)) {
      scheduleWindowScroll(requiredWindowScroll);
      return;
    }

    var droppable = getBestScrollableDroppable({
      center: center,
      destination: state.impact.destination,
      droppables: state.dimensions.droppables
    });

    if (!droppable) {
      return;
    }

    var closestScrollable = droppable.viewport.closestScrollable;

    if (!closestScrollable) {
      return;
    }

    var requiredFrameScroll = getRequiredScroll({
      container: closestScrollable.framePageMarginBox,
      subject: subject,
      center: center
    });

    if (!requiredFrameScroll) {
      return;
    }

    var result = withPlaceholder(droppable, draggable);

    if (!result) {
      return;
    }

    var closest$$1 = droppable.viewport.closestScrollable;

    if (!closest$$1) {
      return;
    }

    var canScrollDroppable$$1 = canPartiallyScroll({
      current: result.current,
      max: result.max,
      change: requiredFrameScroll
    });

    if (canScrollDroppable$$1) {
      scheduleDroppableScroll(droppable.descriptor.id, requiredFrameScroll);
    }
  };

  scroller.cancel = function () {
    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
  };

  return scroller;
});

var createJumpScroller = (function (_ref) {
  var move = _ref.move,
      scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow;

  var moveByOffset = function moveByOffset(state, offset) {
    var client = add(state.current.client.selection, offset);
    move({
      client: client,
      shouldAnimate: true
    });
  };

  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan(droppable, change) {
    if (!canScrollDroppable(droppable, change)) {
      return change;
    }

    var overlap = getDroppableOverlap(droppable, change);

    if (!overlap) {
      scrollDroppable(droppable.descriptor.id, change);
      return null;
    }

    var whatTheDroppableCanScroll = subtract(change, overlap);
    scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);
    var remainder = subtract(change, whatTheDroppableCanScroll);
    return remainder;
  };

  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan(viewport, change) {
    if (!canScrollWindow(viewport, change)) {
      return change;
    }

    var overlap = getWindowOverlap(viewport, change);

    if (!overlap) {
      scrollWindow(change);
      return null;
    }

    var whatTheWindowCanScroll = subtract(change, overlap);
    scrollWindow(whatTheWindowCanScroll);
    var remainder = subtract(change, whatTheWindowCanScroll);
    return remainder;
  };

  var jumpScroller = function jumpScroller(state) {
    var request = state.scrollJumpRequest;

    if (!request) {
      return;
    }

    var destination = state.impact.destination;
    !destination ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot perform a jump scroll when there is no destination') : undefined : void 0;
    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination.droppableId], request);

    if (!droppableRemainder) {
      return;
    }

    var viewport = state.viewport;
    var windowRemainder = scrollWindowAsMuchAsItCan(viewport, droppableRemainder);

    if (!windowRemainder) {
      return;
    }

    moveByOffset(state, windowRemainder);
  };

  return jumpScroller;
});

var createAutoScroller = (function (_ref) {
  var scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow,
      move = _ref.move;
  var fluidScroll = createFluidScroller({
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });
  var jumpScroll = createJumpScroller({
    move: move,
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });
  var marshal = {
    cancel: fluidScroll.cancel,
    fluidScroll: fluidScroll,
    jumpScroll: jumpScroll
  };
  return marshal;
});

var prefix$1 = function prefix(key) {
  return "private-react-beautiful-dnd-key-do-not-use-" + key;
};

var storeKey = prefix$1('store');
var droppableIdKey = prefix$1('droppable-id');
var droppableTypeKey = prefix$1('droppable-type');
var dimensionMarshalKey = prefix$1('dimension-marshal');
var styleContextKey = prefix$1('style-context');
var canLiftContextKey = prefix$1('can-lift');

var _DragDropContext$chil;
var resetServerContext = function resetServerContext() {
  resetStyleContext();
};

var printFatalDevError = function printFatalDevError(error) {
  if (false) {}

  console.warn("\n    An error has occurred while a drag is occurring.\n    Any existing drag will be cancelled.\n\n    Raw error:\n  ");
  console.error(error);
};

var DragDropContext = function (_React$Component) {
  Object(_babel_runtime_helpers_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_8__["default"])(DragDropContext, _React$Component);

  function DragDropContext(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.store = void 0;
    _this.dimensionMarshal = void 0;
    _this.styleMarshal = void 0;
    _this.autoScroller = void 0;
    _this.announcer = void 0;
    _this.unsubscribe = void 0;

    _this.canLift = function (id) {
      return canStartDrag(_this.store.getState(), id);
    };

    _this.onFatalError = function (error) {
      printFatalDevError(error);

      var state = _this.store.getState();

      if (state.phase !== 'IDLE') {
        _this.store.dispatch(clean());
      }
    };

    _this.onWindowError = function (error) {
      return _this.onFatalError(error);
    };

    _this.announcer = createAnnouncer();
    _this.styleMarshal = createStyleMarshal();
    _this.store = createStore$1({
      getDimensionMarshal: function getDimensionMarshal() {
        return _this.dimensionMarshal;
      },
      styleMarshal: _this.styleMarshal,
      getHooks: function getHooks() {
        return {
          onDragStart: _this.props.onDragStart,
          onDragEnd: _this.props.onDragEnd,
          onDragUpdate: _this.props.onDragUpdate
        };
      },
      announce: _this.announcer.announce,
      getScroller: function getScroller() {
        return _this.autoScroller;
      }
    });
    var callbacks = Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])({
      collectionStarting: collectionStarting,
      publish: publish,
      updateDroppableScroll: updateDroppableScroll,
      updateDroppableIsEnabled: updateDroppableIsEnabled
    }, _this.store.dispatch);
    _this.dimensionMarshal = createDimensionMarshal(callbacks);
    _this.autoScroller = createAutoScroller(Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      scrollWindow: scrollWindow,
      scrollDroppable: _this.dimensionMarshal.scrollDroppable
    }, Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])({
      move: move
    }, _this.store.dispatch)));
    return _this;
  }

  var _proto = DragDropContext.prototype;

  _proto.getChildContext = function getChildContext() {
    var _ref;

    return _ref = {}, _ref[storeKey] = this.store, _ref[dimensionMarshalKey] = this.dimensionMarshal, _ref[styleContextKey] = this.styleMarshal.styleContext, _ref[canLiftContextKey] = this.canLift, _ref;
  };

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('error', this.onWindowError);
    this.styleMarshal.mount();
    this.announcer.mount();
  };

  _proto.componentDidCatch = function componentDidCatch(error) {
    this.onFatalError(error);

    if (error.message.indexOf('Invariant failed') !== -1) {
      this.setState({});
      return;
    }

    throw error;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.addEventListener('error', this.onWindowError);
    var state = this.store.getState();

    if (state.phase !== 'IDLE') {
      this.store.dispatch(clean());
    }

    this.styleMarshal.unmount();
    this.announcer.unmount();
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return DragDropContext;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

DragDropContext.childContextTypes = (_DragDropContext$chil = {}, _DragDropContext$chil[storeKey] = prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  subscribe: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  getState: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
}).isRequired, _DragDropContext$chil[dimensionMarshalKey] = prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired, _DragDropContext$chil[styleContextKey] = prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired, _DragDropContext$chil[canLiftContextKey] = prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired, _DragDropContext$chil);

var isScrollable = function isScrollable() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return values.some(function (value) {
    return value === 'auto' || value === 'scroll';
  });
};

var isElementScrollable = function isElementScrollable(el) {
  var style = window.getComputedStyle(el);
  return isScrollable(style.overflow, style.overflowY, style.overflowX);
};

var getClosestScrollable = function getClosestScrollable(el) {
  if (el == null) {
    return null;
  }

  if (!isElementScrollable(el)) {
    return getClosestScrollable(el.parentElement);
  }

  return el;
};

var _DroppableDimensionPu;

var getScroll = function getScroll(el) {
  return {
    x: el.scrollLeft,
    y: el.scrollTop
  };
};

var checkForNestedScrollContainers = function checkForNestedScrollContainers(scrollable) {
  if (false) {}

  if (!scrollable) {
    return;
  }

  var anotherScrollParent = getClosestScrollable(scrollable.parentElement);

  if (!anotherScrollParent) {
    return;
  }

  console.warn("\n    Droppable: unsupported nested scroll container detected.\n    A Droppable can only have one scroll parent (which can be itself)\n    Nested scroll containers are currently not supported.\n\n    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131\n  ");
};

var listenerOptions = {
  passive: true
};

var DroppableDimensionPublisher = function (_React$Component) {
  Object(_babel_runtime_helpers_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_8__["default"])(DroppableDimensionPublisher, _React$Component);

  function DroppableDimensionPublisher(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.watchingScroll = null;
    _this.callbacks = void 0;
    _this.publishedDescriptor = null;

    _this.getClosestScroll = function () {
      if (!_this.watchingScroll) {
        return origin;
      }

      return getScroll(_this.watchingScroll.closestScrollable);
    };

    _this.memoizedUpdateScroll = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (x, y) {
      !_this.publishedDescriptor ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot update scroll on unpublished droppable') : undefined : void 0;
      var newScroll = {
        x: x,
        y: y
      };
      var marshal = _this.context[dimensionMarshalKey];
      marshal.updateDroppableScroll(_this.publishedDescriptor.id, newScroll);
    });

    _this.updateScroll = function () {
      var offset = _this.getClosestScroll();

      _this.memoizedUpdateScroll(offset.x, offset.y);
    };

    _this.scheduleScrollUpdate = Object(raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(_this.updateScroll);

    _this.onClosestScroll = function () {
      !_this.watchingScroll ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Could not find scroll options while scrolling') : undefined : void 0;
      var options = _this.watchingScroll.options;

      if (options.shouldPublishImmediately) {
        _this.updateScroll();

        return;
      }

      _this.scheduleScrollUpdate();
    };

    _this.scroll = function (change) {
      !_this.watchingScroll ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot scroll a droppable with no closest scrollable') : undefined : void 0;
      var closestScrollable = _this.watchingScroll.closestScrollable;
      closestScrollable.scrollTop += change.y;
      closestScrollable.scrollLeft += change.x;
    };

    _this.watchScroll = function (closestScrollable, options) {
      !!_this.watchingScroll ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Droppable cannot watch scroll as it is already watching scroll') : undefined : void 0;

      if (!closestScrollable) {
        return;
      }

      _this.watchingScroll = {
        options: options,
        closestScrollable: closestScrollable
      };
      closestScrollable.addEventListener('scroll', _this.onClosestScroll, listenerOptions);
    };

    _this.unwatchScroll = function () {
      var watching = _this.watchingScroll;

      if (!watching) {
        return;
      }

      _this.scheduleScrollUpdate.cancel();

      watching.closestScrollable.removeEventListener('scroll', _this.onClosestScroll, listenerOptions);
      _this.watchingScroll = null;
    };

    _this.getMemoizedDescriptor = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (id, type) {
      return {
        id: id,
        type: type
      };
    });

    _this.publish = function () {
      var marshal = _this.context[dimensionMarshalKey];

      var descriptor = _this.getMemoizedDescriptor(_this.props.droppableId, _this.props.type);

      if (!_this.publishedDescriptor) {
        marshal.registerDroppable(descriptor, _this.callbacks);
        _this.publishedDescriptor = descriptor;
        return;
      }

      if (_this.publishedDescriptor === descriptor) {
        return;
      }

      marshal.updateDroppable(_this.publishedDescriptor, descriptor, _this.callbacks);
      _this.publishedDescriptor = descriptor;
    };

    _this.unpublish = function () {
      !_this.publishedDescriptor ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot unpublish descriptor when none is published') : undefined : void 0;
      var marshal = _this.context[dimensionMarshalKey];
      marshal.unregisterDroppable(_this.publishedDescriptor);
      _this.publishedDescriptor = null;
    };

    _this.getDimensionAndWatchScroll = function (windowScroll, options) {
      var _this$props = _this.props,
          direction = _this$props.direction,
          ignoreContainerClipping = _this$props.ignoreContainerClipping,
          isDropDisabled = _this$props.isDropDisabled,
          getDroppableRef = _this$props.getDroppableRef;
      var targetRef = getDroppableRef();
      var descriptor = _this.publishedDescriptor;
      !targetRef ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot calculate a dimension when not attached to the DOM') : undefined : void 0;
      !descriptor ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot get dimension for unpublished droppable') : undefined : void 0;
      var scrollableRef = getClosestScrollable(targetRef);
      checkForNestedScrollContainers(scrollableRef);

      _this.watchScroll(scrollableRef, options);

      var client = function () {
        var base = Object(css_box_model__WEBPACK_IMPORTED_MODULE_2__["getBox"])(targetRef);

        if (!scrollableRef) {
          return base;
        }

        if (targetRef !== scrollableRef) {
          return base;
        }

        var top = base.paddingBox.top - scrollableRef.scrollTop;
        var left = base.paddingBox.left - scrollableRef.scrollLeft;
        var bottom = top + scrollableRef.scrollHeight;
        var right = left + scrollableRef.scrollWidth;
        var paddingBox = {
          top: top,
          right: right,
          bottom: bottom,
          left: left
        };
        var borderBox = {
          top: paddingBox.top - base.border.top,
          right: paddingBox.right + base.border.right,
          bottom: paddingBox.bottom + base.border.bottom,
          left: paddingBox.left - base.border.left
        };
        return Object(css_box_model__WEBPACK_IMPORTED_MODULE_2__["createBox"])({
          borderBox: borderBox,
          margin: base.margin,
          border: base.border,
          padding: base.padding
        });
      }();

      var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_2__["withScroll"])(client, windowScroll);

      var closest$$1 = function () {
        if (!scrollableRef) {
          return null;
        }

        var frameClient = Object(css_box_model__WEBPACK_IMPORTED_MODULE_2__["getBox"])(scrollableRef);
        return {
          client: frameClient,
          page: Object(css_box_model__WEBPACK_IMPORTED_MODULE_2__["withScroll"])(frameClient),
          scrollHeight: scrollableRef.scrollHeight,
          scrollWidth: scrollableRef.scrollWidth,
          scroll: getScroll(scrollableRef),
          shouldClipSubject: !ignoreContainerClipping
        };
      }();

      return getDroppableDimension({
        descriptor: descriptor,
        isEnabled: !isDropDisabled,
        direction: direction,
        client: client,
        page: page,
        closest: closest$$1
      });
    };

    var callbacks = {
      getDimensionAndWatchScroll: _this.getDimensionAndWatchScroll,
      unwatchScroll: _this.unwatchScroll,
      scroll: _this.scroll
    };
    _this.callbacks = callbacks;
    return _this;
  }

  var _proto = DroppableDimensionPublisher.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.publish();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.publish();

    if (this.props.isDropDisabled === prevProps.isDropDisabled) {
      return;
    }

    var marshal = this.context[dimensionMarshalKey];
    marshal.updateDroppableIsEnabled(this.props.droppableId, !this.props.isDropDisabled);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.watchingScroll) {
      if (true) {
        console.warn('Unmounting droppable while it was watching scroll');
      }

      this.unwatchScroll();
    }

    this.unpublish();
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return DroppableDimensionPublisher;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

DroppableDimensionPublisher.contextTypes = (_DroppableDimensionPu = {}, _DroppableDimensionPu[dimensionMarshalKey] = prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired, _DroppableDimensionPu);

var Placeholder = function (_PureComponent) {
  Object(_babel_runtime_helpers_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_8__["default"])(Placeholder, _PureComponent);

  function Placeholder() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Placeholder.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) {
      this.props.onUnmount();
    }
  };

  _proto.render = function render() {
    var placeholder = this.props.placeholder;
    var client = placeholder.client,
        display = placeholder.display,
        tagName = placeholder.tagName;
    var style = {
      display: display,
      boxSizing: 'border-box',
      width: client.borderBox.width,
      height: client.borderBox.height,
      marginTop: client.margin.top,
      marginRight: client.margin.right,
      marginBottom: client.margin.bottom,
      marginLeft: client.margin.left,
      flexShrink: '0',
      flexGrow: '0',
      pointerEvents: 'none'
    };
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(tagName, {
      style: style
    });
  };

  return Placeholder;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

var throwIfRefIsInvalid = (function (ref) {
  !(ref && ref instanceof HTMLElement) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  ") : undefined : void 0;
});

var _Droppable$contextTyp, _Droppable$childConte;

var Droppable = function (_Component) {
  Object(_babel_runtime_helpers_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_8__["default"])(Droppable, _Component);

  function Droppable(props, context) {
    var _this;

    _this = _Component.call(this, props, context) || this;
    _this.styleContext = void 0;
    _this.ref = null;
    _this.isPlaceholderMounted = false;

    _this.onPlaceholderMount = function () {
      _this.isPlaceholderMounted = true;
    };

    _this.onPlaceholderUnmount = function () {
      _this.isPlaceholderMounted = false;
    };

    _this.setRef = function (ref) {
      if (ref === null) {
        return;
      }

      if (ref === _this.ref) {
        return;
      }

      _this.ref = ref;
      throwIfRefIsInvalid(ref);
    };

    _this.getDroppableRef = function () {
      return _this.ref;
    };

    _this.styleContext = context[styleContextKey];
    return _this;
  }

  var _proto = Droppable.prototype;

  _proto.getChildContext = function getChildContext() {
    var _value;

    var value = (_value = {}, _value[droppableIdKey] = this.props.droppableId, _value[droppableTypeKey] = this.props.type, _value);
    return value;
  };

  _proto.componentDidMount = function componentDidMount() {
    throwIfRefIsInvalid(this.ref);
    this.warnIfPlaceholderNotMounted();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.warnIfPlaceholderNotMounted();
  };

  _proto.warnIfPlaceholderNotMounted = function warnIfPlaceholderNotMounted() {
    if (false) {}

    if (!this.props.placeholder) {
      return;
    }

    if (this.isPlaceholderMounted) {
      return;
    }

    console.warn("\n      Droppable setup issue: DroppableProvided > placeholder could not be found.\n      Please be sure to add the {provided.placeholder} Node as a child of your Droppable\n\n      More information: https://github.com/atlassian/react-beautiful-dnd#1-provided-droppableprovided\n    ");
  };

  _proto.getPlaceholder = function getPlaceholder() {
    if (!this.props.placeholder) {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Placeholder, {
      placeholder: this.props.placeholder,
      onMount: this.onPlaceholderMount,
      onUnmount: this.onPlaceholderUnmount
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        direction = _this$props.direction,
        droppableId = _this$props.droppableId,
        ignoreContainerClipping = _this$props.ignoreContainerClipping,
        isDraggingOver = _this$props.isDraggingOver,
        isDropDisabled = _this$props.isDropDisabled,
        draggingOverWith = _this$props.draggingOverWith,
        type = _this$props.type;
    var provided = {
      innerRef: this.setRef,
      placeholder: this.getPlaceholder(),
      droppableProps: {
        'data-react-beautiful-dnd-droppable': this.styleContext
      }
    };
    var snapshot = {
      isDraggingOver: isDraggingOver,
      draggingOverWith: draggingOverWith
    };
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(DroppableDimensionPublisher, {
      droppableId: droppableId,
      type: type,
      direction: direction,
      ignoreContainerClipping: ignoreContainerClipping,
      isDropDisabled: isDropDisabled,
      getDroppableRef: this.getDroppableRef
    }, children(provided, snapshot));
  };

  return Droppable;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Droppable.contextTypes = (_Droppable$contextTyp = {}, _Droppable$contextTyp[styleContextKey] = prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired, _Droppable$contextTyp);
Droppable.childContextTypes = (_Droppable$childConte = {}, _Droppable$childConte[droppableIdKey] = prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired, _Droppable$childConte[droppableTypeKey] = prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired, _Droppable$childConte);

var isStrictEqual = (function (a, b) {
  return a === b;
});

var makeMapStateToProps = function makeMapStateToProps() {
  var getIsDraggingOver = function getIsDraggingOver(id, destination) {
    if (!destination) {
      return false;
    }

    return destination.droppableId === id;
  };

  var shouldUsePlaceholder = function shouldUsePlaceholder(id, descriptor, destination) {
    if (!destination) {
      return false;
    }

    if (id === descriptor.droppableId) {
      return false;
    }

    return id === destination.droppableId;
  };

  var getMapProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (isDraggingOver, draggingOverWith, placeholder) {
    return {
      isDraggingOver: isDraggingOver,
      draggingOverWith: draggingOverWith,
      placeholder: placeholder
    };
  });

  var selector = function selector(state, ownProps) {
    if (ownProps.isDropDisabled) {
      return getMapProps(false, null, null);
    }

    var id = ownProps.droppableId;

    if (state.isDragging) {
      var destination = state.impact.destination;
      var isDraggingOver = getIsDraggingOver(id, destination);
      var draggableId = state.critical.draggable.id;
      var draggingOverWith = isDraggingOver ? draggableId : null;
      var draggable = state.dimensions.draggables[draggableId];
      var placeholder = shouldUsePlaceholder(id, draggable.descriptor, destination) ? draggable.placeholder : null;
      return getMapProps(isDraggingOver, draggingOverWith, placeholder);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var _destination = state.pending.impact.destination;

      var _isDraggingOver = getIsDraggingOver(id, _destination);

      var _draggableId = state.pending.result.draggableId;

      var _draggingOverWith = _isDraggingOver ? _draggableId : null;

      var _draggable = state.dimensions.draggables[_draggableId];

      var _placeholder = shouldUsePlaceholder(id, _draggable.descriptor, _destination) ? _draggable.placeholder : null;

      return getMapProps(_isDraggingOver, _draggingOverWith, _placeholder);
    }

    return getMapProps(false, null, null);
  };

  return selector;
};
var connectedDroppable = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(makeMapStateToProps, null, null, {
  storeKey: storeKey,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Droppable);
connectedDroppable.defaultProps = {
  type: 'DEFAULT',
  isDropDisabled: false,
  direction: 'vertical',
  ignoreContainerClipping: false
};

var _DraggableDimensionPu;

var DraggableDimensionPublisher = function (_Component) {
  Object(_babel_runtime_helpers_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_8__["default"])(DraggableDimensionPublisher, _Component);

  function DraggableDimensionPublisher() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.publishedDescriptor = null;
    _this.getMemoizedDescriptor = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (id, index, droppableId, type) {
      return {
        id: id,
        index: index,
        droppableId: droppableId,
        type: type
      };
    });

    _this.publish = function () {
      var marshal = _this.context[dimensionMarshalKey];

      var descriptor = _this.getMemoizedDescriptor(_this.props.draggableId, _this.props.index, _this.props.droppableId, _this.props.type);

      if (!_this.publishedDescriptor) {
        marshal.registerDraggable(descriptor, _this.getDimension);
        _this.publishedDescriptor = descriptor;
        return;
      }

      if (descriptor === _this.publishedDescriptor) {
        return;
      }

      marshal.updateDraggable(_this.publishedDescriptor, descriptor, _this.getDimension);
      _this.publishedDescriptor = descriptor;
    };

    _this.unpublish = function () {
      !_this.publishedDescriptor ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot unpublish descriptor when none is published') : undefined : void 0;
      var marshal = _this.context[dimensionMarshalKey];
      marshal.unregisterDraggable(_this.publishedDescriptor);
      _this.publishedDescriptor = null;
    };

    _this.getDimension = function (windowScroll) {
      var targetRef = _this.props.getDraggableRef();

      var descriptor = _this.publishedDescriptor;
      !targetRef ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'DraggableDimensionPublisher cannot calculate a dimension when not attached to the DOM') : undefined : void 0;
      !descriptor ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot get dimension for unpublished draggable') : undefined : void 0;
      var computedStyles = window.getComputedStyle(targetRef);
      var borderBox = targetRef.getBoundingClientRect();
      var client = Object(css_box_model__WEBPACK_IMPORTED_MODULE_2__["calculateBox"])(borderBox, computedStyles);
      var page = Object(css_box_model__WEBPACK_IMPORTED_MODULE_2__["withScroll"])(client, windowScroll);
      var placeholder = {
        client: client,
        tagName: targetRef.tagName.toLowerCase(),
        display: computedStyles.display
      };
      var dimension = {
        descriptor: descriptor,
        placeholder: placeholder,
        client: client,
        page: page
      };
      return dimension;
    };

    return _this;
  }

  var _proto = DraggableDimensionPublisher.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.publish();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.publish();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unpublish();
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return DraggableDimensionPublisher;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

DraggableDimensionPublisher.contextTypes = (_DraggableDimensionPu = {}, _DraggableDimensionPu[dimensionMarshalKey] = prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired, _DraggableDimensionPu);

var DoubleRenderBlocker = function (_React$Component) {
  Object(_babel_runtime_helpers_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_8__["default"])(DoubleRenderBlocker, _React$Component);

  function DoubleRenderBlocker() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DoubleRenderBlocker.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (isEqual(origin, nextProps.change)) {
      return true;
    }

    if (isEqual(this.props.change, nextProps.change)) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    return this.props.children(this.props.change);
  };

  return DoubleRenderBlocker;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var Moveable = function (_Component) {
  Object(_babel_runtime_helpers_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_8__["default"])(Moveable, _Component);

  function Moveable() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto2 = Moveable.prototype;

  _proto2.getFinal = function getFinal() {
    var destination = this.props.destination;
    var speed = this.props.speed;

    if (speed === 'INSTANT') {
      return destination;
    }

    var config = speed === 'FAST' ? physics.fast : physics.standard;
    return {
      x: Object(react_motion__WEBPACK_IMPORTED_MODULE_12__["spring"])(destination.x, config),
      y: Object(react_motion__WEBPACK_IMPORTED_MODULE_12__["spring"])(destination.y, config)
    };
  };

  _proto2.render = function render() {
    var _this = this;

    var final = this.getFinal();
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_motion__WEBPACK_IMPORTED_MODULE_12__["Motion"], {
      defaultStyle: origin,
      style: final,
      onRest: this.props.onMoveEnd
    }, function (current) {
      var _this$props = _this.props,
          speed = _this$props.speed,
          destination = _this$props.destination,
          children = _this$props.children;
      var target = speed === 'INSTANT' ? destination : current;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(DoubleRenderBlocker, {
        change: target
      }, children);
    });
  };

  return Moveable;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Moveable.defaultProps = {
  destination: origin
};

var getWindowFromRef = (function (ref) {
  return ref ? ref.ownerDocument.defaultView : window;
});

var selector = "[" + dragHandle + "]";

var isSVG = function isSVG(el) {
  if (typeof SVGElement === 'undefined') {
    return false;
  }

  return el instanceof SVGElement;
};

var throwIfSVG = function throwIfSVG(el) {
  !!isSVG(el) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "A drag handle cannot be an SVGElement: it has inconsistent focus support.\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/tree/master/docs/guides/dragging-svgs.md") : undefined : void 0;
};

var getDragHandleRef = function getDragHandleRef(draggableRef) {
  if (draggableRef.hasAttribute(dragHandle)) {
    throwIfSVG(draggableRef);
    return draggableRef;
  }

  var el = draggableRef.querySelector(selector);
  throwIfSVG(draggableRef);
  !el ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "\n      Cannot find drag handle element inside of Draggable.\n      Please be sure to apply the {...provided.dragHandleProps} to your Draggable\n\n      More information: https://github.com/atlassian/react-beautiful-dnd#draggable\n    ") : undefined : void 0;
  !(el instanceof HTMLElement) ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'A drag handle must be a HTMLElement') : undefined : void 0;
  return el;
};

var retainingFocusFor = null;
var listenerOptions$1 = {
  capture: true
};

var clearRetentionOnFocusChange = function () {
  var isBound = false;

  var bind = function bind() {
    if (isBound) {
      return;
    }

    isBound = true;
    window.addEventListener('focus', onWindowFocusChange, listenerOptions$1);
  };

  var unbind = function unbind() {
    if (!isBound) {
      return;
    }

    isBound = false;
    window.removeEventListener('focus', onWindowFocusChange, listenerOptions$1);
  };

  var onWindowFocusChange = function onWindowFocusChange() {
    unbind();
    retainingFocusFor = null;
  };

  var result = function result() {
    return bind();
  };

  result.cancel = function () {
    return unbind();
  };

  return result;
}();

var retain = function retain(id) {
  retainingFocusFor = id;
  clearRetentionOnFocusChange();
};

var tryRestoreFocus = function tryRestoreFocus(id, draggableRef) {
  if (!retainingFocusFor) {
    return;
  }

  if (id !== retainingFocusFor) {
    return;
  }

  retainingFocusFor = null;
  clearRetentionOnFocusChange.cancel();
  var dragHandleRef = getDragHandleRef(draggableRef);

  if (!dragHandleRef) {
    console.warn('Could not find drag handle in the DOM to focus on it');
    return;
  }

  dragHandleRef.focus();
};

var retainer = {
  retain: retain,
  tryRestoreFocus: tryRestoreFocus
};

var interactiveTagNames = {
  input: true,
  button: true,
  textarea: true,
  select: true,
  option: true,
  optgroup: true,
  video: true,
  audio: true
};

var isAnInteractiveElement = function isAnInteractiveElement(parent, current) {
  if (current == null) {
    return false;
  }

  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);

  if (hasAnInteractiveTag) {
    return true;
  }

  var attribute = current.getAttribute('contenteditable');

  if (attribute === 'true' || attribute === '') {
    return true;
  }

  if (current === parent) {
    return false;
  }

  return isAnInteractiveElement(parent, current.parentElement);
};

var shouldAllowDraggingFromTarget = (function (event, props) {
  if (props.canDragInteractiveElements) {
    return true;
  }

  var target = event.target,
      currentTarget = event.currentTarget;

  if (!(target instanceof Element) || !(currentTarget instanceof Element)) {
    return true;
  }

  return !isAnInteractiveElement(currentTarget, target);
});

var createScheduler = (function (callbacks) {
  var memoizedMove = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (x, y) {
    var point = {
      x: x,
      y: y
    };
    callbacks.onMove(point);
  });
  var move = Object(raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(function (point) {
    return memoizedMove(point.x, point.y);
  });
  var moveUp = Object(raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(callbacks.onMoveUp);
  var moveDown = Object(raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(callbacks.onMoveDown);
  var moveRight = Object(raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(callbacks.onMoveRight);
  var moveLeft = Object(raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(callbacks.onMoveLeft);
  var windowScrollMove = Object(raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(callbacks.onWindowScroll);

  var cancel = function cancel() {
    move.cancel();
    moveUp.cancel();
    moveDown.cancel();
    moveRight.cancel();
    moveLeft.cancel();
    windowScrollMove.cancel();
  };

  return {
    move: move,
    moveUp: moveUp,
    moveDown: moveDown,
    moveRight: moveRight,
    moveLeft: moveLeft,
    windowScrollMove: windowScrollMove,
    cancel: cancel
  };
});

var sloppyClickThreshold = 5;
var isSloppyClickThresholdExceeded = (function (original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
});

var tab = 9;
var enter = 13;
var escape = 27;
var space = 32;
var pageUp = 33;
var pageDown = 34;
var end = 35;
var home = 36;
var arrowLeft = 37;
var arrowUp = 38;
var arrowRight = 39;
var arrowDown = 40;

var _preventedKeys;
var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
var preventStandardKeyEvents = (function (event) {
  if (preventedKeys[event.keyCode]) {
    event.preventDefault();
  }
});

var getOptions = function getOptions(shared, fromBinding) {
  return Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, shared, fromBinding);
};

var bindEvents = function bindEvents(el, bindings, sharedOptions) {
  bindings.forEach(function (binding) {
    var options = getOptions(sharedOptions, binding.options);
    el.addEventListener(binding.eventName, binding.fn, options);
  });
};
var unbindEvents = function unbindEvents(el, bindings, sharedOptions) {
  bindings.forEach(function (binding) {
    var options = getOptions(sharedOptions, binding.options);
    el.removeEventListener(binding.eventName, binding.fn, options);
  });
};

var createPostDragEventPreventer = (function (getWindow) {
  var isBound = false;

  var bind = function bind() {
    if (isBound) {
      return;
    }

    isBound = true;
    bindEvents(getWindow(), pointerEvents, {
      capture: true
    });
  };

  var unbind = function unbind() {
    if (!isBound) {
      return;
    }

    isBound = false;
    unbindEvents(getWindow(), pointerEvents, {
      capture: true
    });
  };

  var pointerEvents = [{
    eventName: 'click',
    fn: function fn(event) {
      event.preventDefault();
      unbind();
    }
  }, {
    eventName: 'mousedown',
    fn: unbind
  }, {
    eventName: 'touchstart',
    fn: unbind
  }];

  var preventNext = function preventNext() {
    if (isBound) {
      unbind();
    }

    bind();
  };

  var preventer = {
    preventNext: preventNext,
    abort: unbind
  };
  return preventer;
});

var createEventMarshal = (function () {
  var isMouseDownHandled = false;

  var handle = function handle() {
    !!isMouseDownHandled ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot handle mouse down as it is already handled') : undefined : void 0;
    isMouseDownHandled = true;
  };

  var isHandled = function isHandled() {
    return isMouseDownHandled;
  };

  var reset = function reset() {
    isMouseDownHandled = false;
  };

  return {
    handle: handle,
    isHandled: isHandled,
    reset: reset
  };
});

var supportedEventName = function () {
  var base = 'visibilitychange';

  if (typeof document === 'undefined') {
    return base;
  }

  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
  var supported = candidates.find(function (eventName) {
    return "on" + eventName in document;
  });
  return supported || base;
}();

var primaryButton = 0;

var noop = function noop() {};

var mouseDownMarshal = createEventMarshal();
var createMouseSensor = (function (_ref) {
  var callbacks = _ref.callbacks,
      getWindow = _ref.getWindow,
      canStartCapturing = _ref.canStartCapturing;
  var state = {
    isDragging: false,
    pending: null
  };

  var setState = function setState(newState) {
    state = newState;
  };

  var isDragging = function isDragging() {
    return state.isDragging;
  };

  var isCapturing = function isCapturing() {
    return Boolean(state.pending || state.isDragging);
  };

  var schedule = createScheduler(callbacks);
  var postDragEventPreventer = createPostDragEventPreventer(getWindow);

  var startDragging = function startDragging(fn) {
    if (fn === void 0) {
      fn = noop;
    }

    setState({
      pending: null,
      isDragging: true
    });
    fn();
  };

  var stopDragging = function stopDragging(fn, shouldBlockClick) {
    if (fn === void 0) {
      fn = noop;
    }

    if (shouldBlockClick === void 0) {
      shouldBlockClick = true;
    }

    schedule.cancel();
    unbindWindowEvents();
    mouseDownMarshal.reset();

    if (shouldBlockClick) {
      postDragEventPreventer.preventNext();
    }

    setState({
      isDragging: false,
      pending: null
    });
    fn();
  };

  var startPendingDrag = function startPendingDrag(point) {
    setState({
      pending: point,
      isDragging: false
    });
    bindWindowEvents();
  };

  var stopPendingDrag = function stopPendingDrag() {
    stopDragging(noop, false);
  };

  var kill = function kill(fn) {
    if (fn === void 0) {
      fn = noop;
    }

    if (state.pending) {
      stopPendingDrag();
      return;
    }

    stopDragging(fn);
  };

  var unmount = function unmount() {
    kill();
    postDragEventPreventer.abort();
  };

  var cancel = function cancel() {
    kill(callbacks.onCancel);
  };

  var windowBindings = [{
    eventName: 'mousemove',
    fn: function fn(event) {
      var button = event.button,
          clientX = event.clientX,
          clientY = event.clientY;

      if (button !== primaryButton) {
        return;
      }

      var point = {
        x: clientX,
        y: clientY
      };

      if (state.isDragging) {
        event.preventDefault();
        schedule.move(point);
        return;
      }

      if (!state.pending) {
        kill();
         true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Expected there to be a pending drag') : undefined;
      }

      if (!isSloppyClickThresholdExceeded(state.pending, point)) {
        return;
      }

      event.preventDefault();
      startDragging(function () {
        return callbacks.onLift({
          clientSelection: point,
          autoScrollMode: 'FLUID'
        });
      });
    }
  }, {
    eventName: 'mouseup',
    fn: function fn(event) {
      if (state.pending) {
        stopPendingDrag();
        return;
      }

      event.preventDefault();
      stopDragging(callbacks.onDrop);
    }
  }, {
    eventName: 'mousedown',
    fn: function fn(event) {
      if (state.isDragging) {
        event.preventDefault();
      }

      stopDragging(callbacks.onCancel);
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      if (!state.isDragging) {
        cancel();
        return;
      }

      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }

      preventStandardKeyEvents(event);
    }
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'scroll',
    options: {
      passive: true,
      capture: false
    },
    fn: function fn() {
      if (state.pending) {
        stopPendingDrag();
        return;
      }

      schedule.windowScrollMove();
    }
  }, {
    eventName: 'webkitmouseforcechanged',
    fn: function fn(event) {
      if (event.webkitForce == null || MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN == null) {
        if (true) {
          console.warn('handling a mouse force changed event when it is not supported');
        }

        return;
      }

      var forcePressThreshold = MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN;
      var isForcePressing = event.webkitForce >= forcePressThreshold;

      if (isForcePressing) {
        cancel();
      }
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];

  var bindWindowEvents = function bindWindowEvents() {
    var win = getWindow();
    bindEvents(win, windowBindings, {
      capture: true
    });
  };

  var unbindWindowEvents = function unbindWindowEvents() {
    var win = getWindow();
    unbindEvents(win, windowBindings, {
      capture: true
    });
  };

  var onMouseDown = function onMouseDown(event) {
    if (mouseDownMarshal.isHandled()) {
      return;
    }

    !!isCapturing() ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Should not be able to perform a mouse down while a drag or pending drag is occurring') : undefined : void 0;

    if (!canStartCapturing(event)) {
      return;
    }

    if (event.button !== primaryButton) {
      return;
    }

    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }

    mouseDownMarshal.handle();
    event.preventDefault();
    var point = {
      x: event.clientX,
      y: event.clientY
    };
    startPendingDrag(point);
  };

  var sensor = {
    onMouseDown: onMouseDown,
    kill: kill,
    isCapturing: isCapturing,
    isDragging: isDragging,
    unmount: unmount
  };
  return sensor;
});

var getBorderBoxCenterPosition = (function (el) {
  return Object(css_box_model__WEBPACK_IMPORTED_MODULE_2__["getRect"])(el.getBoundingClientRect()).center;
});

var _scrollJumpKeys;
var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);

var noop$1 = function noop() {};

var createKeyboardSensor = (function (_ref) {
  var callbacks = _ref.callbacks,
      getWindow = _ref.getWindow,
      getDraggableRef = _ref.getDraggableRef,
      canStartCapturing = _ref.canStartCapturing;
  var state = {
    isDragging: false
  };

  var setState = function setState(newState) {
    state = newState;
  };

  var startDragging = function startDragging(fn) {
    if (fn === void 0) {
      fn = noop$1;
    }

    setState({
      isDragging: true
    });
    bindWindowEvents();
    fn();
  };

  var stopDragging = function stopDragging(fn) {
    if (fn === void 0) {
      fn = noop$1;
    }

    schedule.cancel();
    unbindWindowEvents();
    setState({
      isDragging: false
    });
    fn();
  };

  var kill = function kill() {
    return stopDragging();
  };

  var cancel = function cancel() {
    stopDragging(callbacks.onCancel);
  };

  var isDragging = function isDragging() {
    return state.isDragging;
  };

  var schedule = createScheduler(callbacks);

  var onKeyDown = function onKeyDown(event) {
    if (!isDragging()) {
      if (event.defaultPrevented) {
        return;
      }

      if (!canStartCapturing(event)) {
        return;
      }

      if (event.keyCode !== space) {
        return;
      }

      var ref = getDraggableRef();
      !ref ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot start a keyboard drag without a draggable ref') : undefined : void 0;
      var center = getBorderBoxCenterPosition(ref);
      event.preventDefault();
      startDragging(function () {
        return callbacks.onLift({
          clientSelection: center,
          autoScrollMode: 'JUMP'
        });
      });
      return;
    }

    if (event.keyCode === escape) {
      event.preventDefault();
      cancel();
      return;
    }

    if (event.keyCode === space) {
      event.preventDefault();
      stopDragging(callbacks.onDrop);
      return;
    }

    if (event.keyCode === arrowDown) {
      event.preventDefault();
      schedule.moveDown();
      return;
    }

    if (event.keyCode === arrowUp) {
      event.preventDefault();
      schedule.moveUp();
      return;
    }

    if (event.keyCode === arrowRight) {
      event.preventDefault();
      schedule.moveRight();
      return;
    }

    if (event.keyCode === arrowLeft) {
      event.preventDefault();
      schedule.moveLeft();
      return;
    }

    if (scrollJumpKeys[event.keyCode]) {
      event.preventDefault();
      return;
    }

    preventStandardKeyEvents(event);
  };

  var windowBindings = [{
    eventName: 'mousedown',
    fn: cancel
  }, {
    eventName: 'mouseup',
    fn: cancel
  }, {
    eventName: 'click',
    fn: cancel
  }, {
    eventName: 'touchstart',
    fn: cancel
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'wheel',
    fn: cancel
  }, {
    eventName: 'scroll',
    options: {
      capture: false
    },
    fn: callbacks.onWindowScroll
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];

  var bindWindowEvents = function bindWindowEvents() {
    bindEvents(getWindow(), windowBindings, {
      capture: true
    });
  };

  var unbindWindowEvents = function unbindWindowEvents() {
    unbindEvents(getWindow(), windowBindings, {
      capture: true
    });
  };

  var sensor = {
    onKeyDown: onKeyDown,
    kill: kill,
    isDragging: isDragging,
    isCapturing: isDragging,
    unmount: kill
  };
  return sensor;
});

var timeForLongPress = 150;
var forcePressThreshold = 0.15;
var touchStartMarshal = createEventMarshal();

var noop$2 = function noop() {};

var webkitHack = function () {
  var stub = {
    preventTouchMove: noop$2,
    releaseTouchMove: noop$2
  };

  if (typeof window === 'undefined') {
    return stub;
  }

  if (!('ontouchstart' in window)) {
    return stub;
  }

  var isBlocking = false;
  window.addEventListener('touchmove', function (event) {
    if (!isBlocking) {
      return;
    }

    if (event.defaultPrevented) {
      return;
    }

    event.preventDefault();
  }, {
    passive: false,
    capture: false
  });

  var preventTouchMove = function preventTouchMove() {
    isBlocking = true;
  };

  var releaseTouchMove = function releaseTouchMove() {
    isBlocking = false;
  };

  return {
    preventTouchMove: preventTouchMove,
    releaseTouchMove: releaseTouchMove
  };
}();

var initial = {
  isDragging: false,
  pending: null,
  hasMoved: false,
  longPressTimerId: null
};
var createTouchSensor = (function (_ref) {
  var callbacks = _ref.callbacks,
      getWindow = _ref.getWindow,
      canStartCapturing = _ref.canStartCapturing;
  var state = initial;

  var setState = function setState(partial) {
    state = Object(_babel_runtime_helpers_es6_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, partial);
  };

  var isDragging = function isDragging() {
    return state.isDragging;
  };

  var isCapturing = function isCapturing() {
    return Boolean(state.pending || state.isDragging || state.longPressTimerId);
  };

  var schedule = createScheduler(callbacks);
  var postDragEventPreventer = createPostDragEventPreventer(getWindow);

  var startDragging = function startDragging() {
    var pending = state.pending;

    if (!pending) {
      kill();
       true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'cannot start a touch drag without a pending position') : undefined;
    }

    setState({
      isDragging: true,
      hasMoved: false,
      pending: null,
      longPressTimerId: null
    });
    callbacks.onLift({
      clientSelection: pending,
      autoScrollMode: 'FLUID'
    });
  };

  var stopDragging = function stopDragging(fn) {
    if (fn === void 0) {
      fn = noop$2;
    }

    schedule.cancel();
    touchStartMarshal.reset();
    webkitHack.releaseTouchMove();
    unbindWindowEvents();
    postDragEventPreventer.preventNext();
    setState(initial);
    fn();
  };

  var startPendingDrag = function startPendingDrag(event) {
    var touch = event.touches[0];
    var clientX = touch.clientX,
        clientY = touch.clientY;
    var point = {
      x: clientX,
      y: clientY
    };
    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
    setState({
      longPressTimerId: longPressTimerId,
      pending: point,
      isDragging: false,
      hasMoved: false
    });
    bindWindowEvents();
  };

  var stopPendingDrag = function stopPendingDrag() {
    if (state.longPressTimerId) {
      clearTimeout(state.longPressTimerId);
    }

    schedule.cancel();
    touchStartMarshal.reset();
    webkitHack.releaseTouchMove();
    unbindWindowEvents();
    setState(initial);
  };

  var kill = function kill(fn) {
    if (fn === void 0) {
      fn = noop$2;
    }

    if (state.pending) {
      stopPendingDrag();
      return;
    }

    stopDragging(fn);
  };

  var unmount = function unmount() {
    kill();
    postDragEventPreventer.abort();
  };

  var cancel = function cancel() {
    kill(callbacks.onCancel);
  };

  var windowBindings = [{
    eventName: 'touchmove',
    options: {
      passive: false
    },
    fn: function fn(event) {
      if (!state.isDragging) {
        stopPendingDrag();
        return;
      }

      if (!state.hasMoved) {
        setState({
          hasMoved: true
        });
      }

      var _event$touches$ = event.touches[0],
          clientX = _event$touches$.clientX,
          clientY = _event$touches$.clientY;
      var point = {
        x: clientX,
        y: clientY
      };
      event.preventDefault();
      schedule.move(point);
    }
  }, {
    eventName: 'touchend',
    fn: function fn(event) {
      if (!state.isDragging) {
        stopPendingDrag();
        return;
      }

      event.preventDefault();
      stopDragging(callbacks.onDrop);
    }
  }, {
    eventName: 'touchcancel',
    fn: function fn(event) {
      if (!state.isDragging) {
        stopPendingDrag();
        return;
      }

      event.preventDefault();
      stopDragging(callbacks.onCancel);
    }
  }, {
    eventName: 'touchstart',
    fn: cancel
  }, {
    eventName: 'orientationchange',
    fn: cancel
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'scroll',
    options: {
      passive: true,
      capture: false
    },
    fn: function fn() {
      if (state.pending) {
        stopPendingDrag();
        return;
      }

      schedule.windowScrollMove();
    }
  }, {
    eventName: 'contextmenu',
    fn: function fn(event) {
      event.preventDefault();
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      if (!state.isDragging) {
        cancel();
        return;
      }

      if (event.keyCode === escape) {
        event.preventDefault();
      }

      cancel();
    }
  }, {
    eventName: 'touchforcechange',
    fn: function fn(event) {
      if (state.hasMoved) {
        event.preventDefault();
        return;
      }

      var touch = event.touches[0];

      if (touch.force >= forcePressThreshold) {
        cancel();
      }
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];

  var bindWindowEvents = function bindWindowEvents() {
    bindEvents(getWindow(), windowBindings, {
      capture: true
    });
  };

  var unbindWindowEvents = function unbindWindowEvents() {
    unbindEvents(getWindow(), windowBindings, {
      capture: true
    });
  };

  var onTouchStart = function onTouchStart(event) {
    if (touchStartMarshal.isHandled()) {
      return;
    }

    !!isCapturing() ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Should not be able to perform a touch start while a drag or pending drag is occurring') : undefined : void 0;

    if (!canStartCapturing(event)) {
      return;
    }

    touchStartMarshal.handle();
    webkitHack.preventTouchMove();
    startPendingDrag(event);
  };

  var sensor = {
    onTouchStart: onTouchStart,
    kill: kill,
    isCapturing: isCapturing,
    isDragging: isDragging,
    unmount: unmount
  };
  return sensor;
});

var _DragHandle$contextTy;

var preventHtml5Dnd = function preventHtml5Dnd(event) {
  event.preventDefault();
};

var DragHandle = function (_Component) {
  Object(_babel_runtime_helpers_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_8__["default"])(DragHandle, _Component);

  function DragHandle(props, context) {
    var _this;

    _this = _Component.call(this, props, context) || this;
    _this.mouseSensor = void 0;
    _this.keyboardSensor = void 0;
    _this.touchSensor = void 0;
    _this.sensors = void 0;
    _this.styleContext = void 0;
    _this.canLift = void 0;
    _this.isFocused = false;
    _this.lastDraggableRef = void 0;

    _this.onFocus = function () {
      _this.isFocused = true;
    };

    _this.onBlur = function () {
      _this.isFocused = false;
    };

    _this.onKeyDown = function (event) {
      if (_this.mouseSensor.isCapturing() || _this.touchSensor.isCapturing()) {
        return;
      }

      _this.keyboardSensor.onKeyDown(event);
    };

    _this.onMouseDown = function (event) {
      if (_this.keyboardSensor.isCapturing() || _this.mouseSensor.isCapturing()) {
        return;
      }

      _this.mouseSensor.onMouseDown(event);
    };

    _this.onTouchStart = function (event) {
      if (_this.mouseSensor.isCapturing() || _this.keyboardSensor.isCapturing()) {
        return;
      }

      _this.touchSensor.onTouchStart(event);
    };

    _this.canStartCapturing = function (event) {
      if (_this.isAnySensorCapturing()) {
        return false;
      }

      if (!_this.canLift(_this.props.draggableId)) {
        return false;
      }

      return shouldAllowDraggingFromTarget(event, _this.props);
    };

    _this.isAnySensorCapturing = function () {
      return _this.sensors.some(function (sensor) {
        return sensor.isCapturing();
      });
    };

    _this.getProvided = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (isEnabled) {
      if (!isEnabled) {
        return null;
      }

      var provided = {
        onMouseDown: _this.onMouseDown,
        onKeyDown: _this.onKeyDown,
        onTouchStart: _this.onTouchStart,
        onFocus: _this.onFocus,
        onBlur: _this.onBlur,
        tabIndex: 0,
        'data-react-beautiful-dnd-drag-handle': _this.styleContext,
        'aria-roledescription': 'Draggable item. Press space bar to lift',
        draggable: false,
        onDragStart: preventHtml5Dnd
      };
      return provided;
    });

    var getWindow = function getWindow() {
      return getWindowFromRef(_this.props.getDraggableRef());
    };

    var args = {
      callbacks: _this.props.callbacks,
      getDraggableRef: _this.props.getDraggableRef,
      getWindow: getWindow,
      canStartCapturing: _this.canStartCapturing
    };
    _this.mouseSensor = createMouseSensor(args);
    _this.keyboardSensor = createKeyboardSensor(args);
    _this.touchSensor = createTouchSensor(args);
    _this.sensors = [_this.mouseSensor, _this.keyboardSensor, _this.touchSensor];
    _this.styleContext = context[styleContextKey];
    _this.canLift = context[canLiftContextKey];
    return _this;
  }

  var _proto = DragHandle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var draggableRef = this.props.getDraggableRef();
    this.lastDraggableRef = draggableRef;
    !draggableRef ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot get draggable ref from drag handle') : undefined : void 0;

    if (!this.props.isEnabled) {
      return;
    }

    var dragHandleRef = getDragHandleRef(draggableRef);
    retainer.tryRestoreFocus(this.props.draggableId, dragHandleRef);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    var ref = this.props.getDraggableRef();

    if (ref !== this.lastDraggableRef) {
      this.lastDraggableRef = ref;

      if (!ref || !this.isFocused) {
        return;
      }

      if (!this.props.isEnabled) {
        return;
      }

      getDragHandleRef(ref).focus();
    }

    var isCapturing = this.isAnySensorCapturing();

    if (!isCapturing) {
      return;
    }

    var isDragStopping = prevProps.isDragging && !this.props.isDragging;

    if (isDragStopping) {
      this.sensors.forEach(function (sensor) {
        if (sensor.isCapturing()) {
          sensor.kill();
        }
      });
    }

    if (this.props.isEnabled) {
      return;
    }

    this.sensors.forEach(function (sensor) {
      if (!sensor.isCapturing()) {
        return;
      }

      var wasDragging = sensor.isDragging();
      sensor.kill();

      if (wasDragging) {
        if (true) {
          console.warn('You have disabled dragging on a Draggable while it was dragging. The drag has been cancelled');
        }

        _this2.props.callbacks.onCancel();
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;

    this.sensors.forEach(function (sensor) {
      var wasDragging = sensor.isDragging();
      sensor.unmount();

      if (wasDragging) {
        _this3.props.callbacks.onCancel();
      }
    });

    var shouldRetainFocus = function () {
      if (!_this3.props.isEnabled) {
        return false;
      }

      if (!_this3.isFocused) {
        return false;
      }

      return _this3.props.isDragging || _this3.props.isDropAnimating;
    }();

    if (shouldRetainFocus) {
      retainer.retain(this.props.draggableId);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        isEnabled = _this$props.isEnabled;
    return children(this.getProvided(isEnabled));
  };

  return DragHandle;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

DragHandle.contextTypes = (_DragHandle$contextTy = {}, _DragHandle$contextTy[styleContextKey] = prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired, _DragHandle$contextTy[canLiftContextKey] = prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired, _DragHandle$contextTy);

var getWindowScroll = (function () {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
});

var getViewport = (function () {
  var scroll = getWindowScroll();
  var top = scroll.y;
  var left = scroll.x;
  var doc = document.documentElement;
  !doc ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Could not find document.documentElement') : undefined : void 0;
  var width = doc.clientWidth;
  var height = doc.clientHeight;
  var right = left + width;
  var bottom = top + height;
  var frame = Object(css_box_model__WEBPACK_IMPORTED_MODULE_2__["getRect"])({
    top: top,
    left: left,
    right: right,
    bottom: bottom
  });
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: frame.width,
    height: frame.height
  });
  var viewport = {
    frame: frame,
    scroll: {
      initial: scroll,
      current: scroll,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin
      }
    }
  };
  return viewport;
});

var _Draggable$contextTyp;
var zIndexOptions = {
  dragging: 5000,
  dropAnimating: 4500
};

var getTranslate = function getTranslate(offset) {
  if (isEqual(offset, origin)) {
    return null;
  }

  return "translate(" + offset.x + "px, " + offset.y + "px)";
};

var getSpeed$1 = function getSpeed(isDragging, shouldAnimateDragMovement, isDropAnimating) {
  if (isDropAnimating) {
    return 'STANDARD';
  }

  if (isDragging && shouldAnimateDragMovement) {
    return 'FAST';
  }

  return 'INSTANT';
};

var Draggable = function (_Component) {
  Object(_babel_runtime_helpers_es6_inheritsLoose__WEBPACK_IMPORTED_MODULE_8__["default"])(Draggable, _Component);

  function Draggable(props, context) {
    var _this;

    _this = _Component.call(this, props, context) || this;
    _this.callbacks = void 0;
    _this.styleContext = void 0;
    _this.ref = null;

    _this.onMoveEnd = function () {
      if (_this.props.isDropAnimating) {
        _this.props.dropAnimationFinished();
      }
    };

    _this.onLift = function (options) {
      start('LIFT');
      var ref = _this.ref;
      !ref ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false) : undefined : void 0;
      !!_this.props.isDragDisabled ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Cannot lift a Draggable when it is disabled') : undefined : void 0;
      var clientSelection = options.clientSelection,
          autoScrollMode = options.autoScrollMode;
      var _this$props = _this.props,
          lift = _this$props.lift,
          draggableId = _this$props.draggableId;
      var client = {
        selection: clientSelection,
        borderBoxCenter: getBorderBoxCenterPosition(ref),
        offset: origin
      };
      lift({
        id: draggableId,
        client: client,
        autoScrollMode: autoScrollMode,
        viewport: getViewport()
      });
      finish('LIFT');
    };

    _this.setRef = function (ref) {
      if (ref === null) {
        return;
      }

      if (ref === _this.ref) {
        return;
      }

      _this.ref = ref;
      throwIfRefIsInvalid(ref);
    };

    _this.getDraggableRef = function () {
      return _this.ref;
    };

    _this.getDraggingStyle = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (change, dimension, isDropAnimating) {
      var box = dimension.client;
      var style = {
        position: 'fixed',
        top: box.marginBox.top,
        left: box.marginBox.left,
        boxSizing: 'border-box',
        width: box.borderBox.width,
        height: box.borderBox.height,
        transition: 'none',
        zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
        transform: getTranslate(change),
        pointerEvents: 'none'
      };
      return style;
    });
    _this.getNotDraggingStyle = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (current, shouldAnimateDisplacement) {
      var style = {
        transform: getTranslate(current),
        transition: shouldAnimateDisplacement ? null : 'none'
      };
      return style;
    });
    _this.getProvided = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (change, isDragging, isDropAnimating, shouldAnimateDisplacement, dimension, dragHandleProps) {
      var useDraggingStyle = isDragging || isDropAnimating;

      var draggableStyle = function () {
        if (!useDraggingStyle) {
          return _this.getNotDraggingStyle(change, shouldAnimateDisplacement);
        }

        !dimension ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'draggable dimension required for dragging') : undefined : void 0;
        return _this.getDraggingStyle(change, dimension, isDropAnimating);
      }();

      var provided = {
        innerRef: _this.setRef,
        draggableProps: {
          'data-react-beautiful-dnd-draggable': _this.styleContext,
          style: draggableStyle
        },
        dragHandleProps: dragHandleProps
      };
      return provided;
    });
    _this.getSnapshot = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (isDragging, isDropAnimating, draggingOver) {
      return {
        isDragging: isDragging || isDropAnimating,
        isDropAnimating: isDropAnimating,
        draggingOver: draggingOver
      };
    });

    _this.renderChildren = function (change, dragHandleProps) {
      var _this$props2 = _this.props,
          isDragging = _this$props2.isDragging,
          isDropAnimating = _this$props2.isDropAnimating,
          dimension = _this$props2.dimension,
          draggingOver = _this$props2.draggingOver,
          shouldAnimateDisplacement = _this$props2.shouldAnimateDisplacement,
          children = _this$props2.children;
      var child = children(_this.getProvided(change, isDragging, isDropAnimating, shouldAnimateDisplacement, dimension, dragHandleProps), _this.getSnapshot(isDragging, isDropAnimating, draggingOver));
      var isDraggingOrDropping = isDragging || isDropAnimating;

      var placeholder = function () {
        if (!isDraggingOrDropping) {
          return null;
        }

        !dimension ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Draggable: Dimension is required for dragging') : undefined : void 0;
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Placeholder, {
          placeholder: dimension.placeholder
        });
      }();

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, child, placeholder);
    };

    var callbacks = {
      onLift: _this.onLift,
      onMove: function onMove(clientSelection) {
        return props.move({
          client: clientSelection,
          shouldAnimate: false
        });
      },
      onDrop: function onDrop() {
        return props.drop({
          reason: 'DROP'
        });
      },
      onCancel: function onCancel() {
        return props.drop({
          reason: 'CANCEL'
        });
      },
      onMoveUp: props.moveUp,
      onMoveDown: props.moveDown,
      onMoveRight: props.moveRight,
      onMoveLeft: props.moveLeft,
      onWindowScroll: function onWindowScroll() {
        return props.moveByWindowScroll({
          scroll: getWindowScroll()
        });
      }
    };
    _this.callbacks = callbacks;
    _this.styleContext = context[styleContextKey];
    return _this;
  }

  var _proto = Draggable.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.ref = null;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props3 = this.props,
        draggableId = _this$props3.draggableId,
        index = _this$props3.index,
        offset = _this$props3.offset,
        isDragging = _this$props3.isDragging,
        isDropAnimating = _this$props3.isDropAnimating,
        isDragDisabled = _this$props3.isDragDisabled,
        shouldAnimateDragMovement = _this$props3.shouldAnimateDragMovement,
        disableInteractiveElementBlocking = _this$props3.disableInteractiveElementBlocking;
    var droppableId = this.context[droppableIdKey];
    var type = this.context[droppableTypeKey];
    var speed = getSpeed$1(isDragging, shouldAnimateDragMovement, isDropAnimating);
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(DraggableDimensionPublisher, {
      key: draggableId,
      draggableId: draggableId,
      droppableId: droppableId,
      type: type,
      index: index,
      getDraggableRef: this.getDraggableRef
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Moveable, {
      speed: speed,
      destination: offset,
      onMoveEnd: this.onMoveEnd
    }, function (change) {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(DragHandle, {
        draggableId: draggableId,
        isDragging: isDragging,
        isDropAnimating: isDropAnimating,
        isEnabled: !isDragDisabled,
        callbacks: _this2.callbacks,
        getDraggableRef: _this2.getDraggableRef,
        canDragInteractiveElements: disableInteractiveElementBlocking
      }, function (dragHandleProps) {
        return _this2.renderChildren(change, dragHandleProps);
      });
    }));
  };

  return Draggable;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Draggable.contextTypes = (_Draggable$contextTyp = {}, _Draggable$contextTyp[droppableIdKey] = prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired, _Draggable$contextTyp[droppableTypeKey] = prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired, _Draggable$contextTyp[styleContextKey] = prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired, _Draggable$contextTyp);

var defaultMapProps = {
  isDropAnimating: false,
  isDragging: false,
  offset: origin,
  shouldAnimateDragMovement: false,
  shouldAnimateDisplacement: true,
  dimension: null,
  draggingOver: null
};
var makeMapStateToProps$1 = function makeMapStateToProps() {
  var memoizedOffset = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (x, y) {
    return {
      x: x,
      y: y
    };
  });
  var getNotDraggingProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (offset, shouldAnimateDisplacement) {
    return {
      isDropAnimating: false,
      isDragging: false,
      offset: offset,
      shouldAnimateDisplacement: shouldAnimateDisplacement,
      shouldAnimateDragMovement: false,
      dimension: null,
      draggingOver: null
    };
  });
  var getDraggingProps = Object(memoize_one__WEBPACK_IMPORTED_MODULE_4__["default"])(function (offset, shouldAnimateDragMovement, dimension, draggingOver) {
    return {
      isDragging: true,
      isDropAnimating: false,
      shouldAnimateDisplacement: false,
      offset: offset,
      shouldAnimateDragMovement: shouldAnimateDragMovement,
      dimension: dimension,
      draggingOver: draggingOver
    };
  });

  var getOutOfTheWayMovement = function getOutOfTheWayMovement(id, movement) {
    var map = getDisplacementMap(movement.displaced);
    var displacement = map[id];

    if (!displacement) {
      return null;
    }

    if (!displacement.isVisible) {
      return null;
    }

    var amount = movement.isBeyondStartPosition ? negate(movement.amount) : movement.amount;
    return getNotDraggingProps(memoizedOffset(amount.x, amount.y), displacement.shouldAnimate);
  };

  var draggingSelector = function draggingSelector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }

      var offset = state.current.client.offset;
      var dimension = state.dimensions.draggables[ownProps.draggableId];
      var shouldAnimateDragMovement = state.shouldAnimate;
      var draggingOver = state.impact.destination ? state.impact.destination.droppableId : null;
      return getDraggingProps(memoizedOffset(offset.x, offset.y), shouldAnimateDragMovement, dimension, draggingOver);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var pending = state.pending;

      if (pending.result.draggableId !== ownProps.draggableId) {
        return null;
      }

      var _draggingOver = pending.result.destination ? pending.result.destination.droppableId : null;

      return {
        isDragging: false,
        isDropAnimating: true,
        offset: pending.newHomeOffset,
        dimension: state.dimensions.draggables[ownProps.draggableId],
        draggingOver: _draggingOver,
        shouldAnimateDragMovement: false,
        shouldAnimateDisplacement: false
      };
    }

    return null;
  };

  var movingOutOfTheWaySelector = function movingOutOfTheWaySelector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }

      return getOutOfTheWayMovement(ownProps.draggableId, state.impact.movement);
    }

    if (state.phase === 'DROP_ANIMATING') {
      if (state.pending.result.draggableId === ownProps.draggableId) {
        return null;
      }

      return getOutOfTheWayMovement(ownProps.draggableId, state.pending.impact.movement);
    }

    return null;
  };

  var selector = function selector(state, ownProps) {
    var dragging = draggingSelector(state, ownProps);

    if (dragging) {
      return dragging;
    }

    var movingOutOfTheWay = movingOutOfTheWaySelector(state, ownProps);

    if (movingOutOfTheWay) {
      return movingOutOfTheWay;
    }

    return defaultMapProps;
  };

  return selector;
};
var mapDispatchToProps = {
  lift: lift,
  move: move,
  moveUp: moveUp,
  moveDown: moveDown,
  moveLeft: moveLeft,
  moveRight: moveRight,
  moveByWindowScroll: moveByWindowScroll,
  drop: drop,
  dropAnimationFinished: dropAnimationFinished
};
var ConnectedDraggable = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(makeMapStateToProps$1, mapDispatchToProps, null, {
  storeKey: storeKey,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Draggable);
ConnectedDraggable.defaultProps = {
  isDragDisabled: false,
  disableInteractiveElementBlocking: false
};




/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference _dll_base ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-motion/lib/react-motion.js":
/*!**********************************************************************************************!*\
  !*** delegated ./node_modules/react-motion/lib/react-motion.js from dll-reference _dll_base ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/react-motion/lib/react-motion.js");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/react-redux/es/index.js from dll-reference _dll_base ***!
  \*************************************************************************************/
/*! exports provided: Provider, createProvider, connectAdvanced, connect */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/react-redux/es/index.js");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference _dll_base ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/redux/es/redux.js from dll-reference _dll_base ***!
  \*******************************************************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/redux/es/redux.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';

var index = (function (condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  }

  throw new Error(prefix + ': ' + (message || ''));
});

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/zent/lib/index.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/index.js from dll-reference _dll_base ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/zent/lib/index.js");

/***/ }),

/***/ "./node_modules/zent/lib/utils/scroll.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/utils/scroll.js from dll-reference _dll_base ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/zent/lib/utils/scroll.js");

/***/ }),

/***/ "./node_modules/zent/lib/utils/storage.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/utils/storage.js from dll-reference _dll_base ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/zent/lib/utils/storage.js");

/***/ }),

/***/ "./node_modules/zent/lib/utils/uuid.js":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/utils/uuid.js from dll-reference _dll_base ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))("./node_modules/zent/lib/utils/uuid.js");

/***/ }),

/***/ "./src/common/api/api.js":
/*!*******************************!*\
  !*** ./src/common/api/api.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get = get;
exports.post = post;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(url) {
    var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var keylength = Object.keys(query).length;
    if (keylength > 0) {
        url = url + '?' + _queryString2.default.stringify(query);
    }
    return _axios2.default.get(url).then(function (res) {
        var result = res.data;
        if (result.code == 0) {
            return result.data;
        } else {
            throw new Error(result.msg);
        }
    });
}

function post(url) {
    var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


    query['_csrf'] = window.csrf;
    var keylength = Object.keys(query).length;
    if (keylength > 0) {
        url = url + '?' + _queryString2.default.stringify(query);
    }
    return _axios2.default.post(url, data).then(function (res) {
        var result = res.data;
        if (result.code == 0) {
            return result.data;
        } else {
            throw new Error(result.msg);
        }
    });
}

/***/ }),

/***/ "./src/common/api/bundle.js":
/*!**********************************!*\
  !*** ./src/common/api/bundle.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.queryBundle = undefined;

var queryBundle = exports.queryBundle = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var pageId = _ref2.pageId,
            pageSize = _ref2.pageSize,
            pageNo = _ref2.pageNo,
            key = _ref2.key;
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return api.get('/bundle/query-bundle', { pageId: pageId, pageSize: pageSize, pageNo: pageNo, key: key });

                    case 2:
                        result = _context.sent;
                        return _context.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function queryBundle(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _api = __webpack_require__(/*! ./api */ "./src/common/api/api.js");

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/common/api/mp.js":
/*!******************************!*\
  !*** ./src/common/api/mp.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getContentDetail = exports.getDynamicPageContentList = exports.saveMpPageDetail = exports.getMpPageDetail = exports.getMpPageStructure = exports.getMpPageList = exports.saveMp = exports.getMpDetail = exports.getMpList = undefined;

var getMpList = exports.getMpList = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return api.get('/mp/get-mp-list', {});

                    case 2:
                        result = _context.sent;
                        return _context.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getMpList() {
        return _ref.apply(this, arguments);
    };
}();

var getMpDetail = exports.getMpDetail = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(mpId) {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return api.get('/mp/get-mp-detail', { mpId: mpId });

                    case 2:
                        result = _context2.sent;
                        return _context2.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function getMpDetail(_x) {
        return _ref2.apply(this, arguments);
    };
}();

var saveMp = exports.saveMp = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(mpId, mp) {
        var result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return api.post('/mp/save-mp-detail', { mpId: mpId }, mp);

                    case 2:
                        result = _context3.sent;
                        return _context3.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function saveMp(_x2, _x3) {
        return _ref3.apply(this, arguments);
    };
}();

var getMpPageList = exports.getMpPageList = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(mpId) {
        var result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.next = 2;
                        return api.get('/mp/get-mp-page-list', { mpId: mpId });

                    case 2:
                        result = _context4.sent;
                        return _context4.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function getMpPageList(_x4) {
        return _ref4.apply(this, arguments);
    };
}();

var getMpPageStructure = exports.getMpPageStructure = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(pageId) {
        var result;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.next = 2;
                        return api.get('/mp/get-mp-page-structure', { pageId: pageId });

                    case 2:
                        result = _context5.sent;
                        return _context5.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this);
    }));

    return function getMpPageStructure(_x5) {
        return _ref5.apply(this, arguments);
    };
}();

var getMpPageDetail = exports.getMpPageDetail = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(pageId) {
        var result;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.next = 2;
                        return api.get('/mp/get-mp-page-detail', { pageId: pageId });

                    case 2:
                        result = _context6.sent;
                        return _context6.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this);
    }));

    return function getMpPageDetail(_x6) {
        return _ref6.apply(this, arguments);
    };
}();

var saveMpPageDetail = exports.saveMpPageDetail = function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(page) {
        var result;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.next = 2;
                        return api.post('/mp/save-mp-page-detail', {}, page);

                    case 2:
                        result = _context7.sent;
                        return _context7.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, this);
    }));

    return function saveMpPageDetail(_x7) {
        return _ref7.apply(this, arguments);
    };
}();

var getDynamicPageContentList = exports.getDynamicPageContentList = function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(pageId) {
        var result;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        _context8.next = 2;
                        return api.get('/mp/get-mp-dynamicpage-content-list', { pageId: pageId });

                    case 2:
                        result = _context8.sent;
                        return _context8.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context8.stop();
                }
            }
        }, _callee8, this);
    }));

    return function getDynamicPageContentList(_x8) {
        return _ref8.apply(this, arguments);
    };
}();

var getContentDetail = exports.getContentDetail = function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(contentId) {
        var result;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        _context9.next = 2;
                        return api.get('/mp/get-mp-content-detail', { contentId: contentId });

                    case 2:
                        result = _context9.sent;
                        return _context9.abrupt('return', result);

                    case 4:
                    case 'end':
                        return _context9.stop();
                }
            }
        }, _callee9, this);
    }));

    return function getContentDetail(_x9) {
        return _ref9.apply(this, arguments);
    };
}();

var _api = __webpack_require__(/*! ./api */ "./src/common/api/api.js");

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/common/api/url.js":
/*!*******************************!*\
  !*** ./src/common/api/url.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuery = getQuery;
exports.getHash = getHash;
exports.setHash = setHash;
var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

function getQuery() {
  var parsed = queryString.parse(location.search);
  return parsed;
}

function getHash() {
  var parsed = queryString.parse(location.hash);
  return parsed;
}

function setHash(key, value) {
  var parsed = queryString.parse(location.hash);
  parsed[key] = value;
  location.hash = queryString.stringify(parsed);
}

/***/ }),

/***/ "./src/pages/editor/components/design/Design.jsx":
/*!*******************************************************!*\
  !*** ./src/pages/editor/components/design/Design.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _zent = __webpack_require__(/*! zent */ "./node_modules/zent/lib/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _assign2 = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");

var _assign3 = _interopRequireDefault(_assign2);

var _isUndefined = __webpack_require__(/*! lodash/isUndefined */ "./node_modules/lodash/isUndefined.js");

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _storage = __webpack_require__(/*! zent/lib/utils/storage */ "./node_modules/zent/lib/utils/storage.js");

var storage = _interopRequireWildcard(_storage);

var _instance2 = __webpack_require__(/*! ./utils/instance */ "./src/pages/editor/components/design/utils/instance.js");

var InstanceUtils = _interopRequireWildcard(_instance2);

var _loader = __webpack_require__(/*! ./bundle/loader */ "./src/pages/editor/components/design/bundle/loader.js");

var _loader2 = _interopRequireDefault(_loader);

var _DesignEditor = __webpack_require__(/*! ./DesignEditor */ "./src/pages/editor/components/design/DesignEditor.jsx");

var _DesignEditor2 = _interopRequireDefault(_DesignEditor);

var _LazyMap = __webpack_require__(/*! ./utils/LazyMap */ "./src/pages/editor/components/design/utils/LazyMap.js");

var _LazyMap2 = _interopRequireDefault(_LazyMap);

var _constants = __webpack_require__(/*! ./constants */ "./src/pages/editor/components/design/constants.js");

var _bundle = __webpack_require__(/*! ./bundle/bundle */ "./src/pages/editor/components/design/bundle/bundle.js");

var _bundle2 = _interopRequireDefault(_bundle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 负责数据处理
 */
var Design = function (_PureComponent) {
    _inherits(Design, _PureComponent);

    function Design(props) {
        var _this2 = this;

        _classCallCheck(this, Design);

        var _this = _possibleConstructorReturn(this, (Design.__proto__ || Object.getPrototypeOf(Design)).call(this, props));

        _this.selectByIndex = function (index) {
            var instanceList = _this.state.instanceList;

            index = (0, _isUndefined2.default)(index) ? _this.props.defaultSelectedIndex : index;
            var instance = instanceList[index];

            _this.setState({
                selectedUUID: InstanceUtils.getUUIDFromInstance(instance)
            });
        };

        _this._savePreview = function (instance) {

            _this.preview = instance;
        };

        _this._selectInstance = function (instance) {
            var selectedUUID = _this.state.selectedUUID;

            var id = InstanceUtils.getUUIDFromInstance(instance);
            if (InstanceUtils.getUUIDFromInstance(instance) === selectedUUID) {
                return;
            }

            _this.setState({
                selectedUUID: id
            });

            _this._adjustHeight();
        };

        _this._setSettings = function (value) {
            _this.setState({
                settings: _extends({}, _this.state.settings, value)
            });
        };

        _this._modifyInstance = function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(instance, diff) {
                var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                var instanceList, newInstanceValue, newInstanceList, errors, id;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                instanceList = _this.state.instanceList;
                                // 得到新的值

                                newInstanceValue = replace ? (0, _assign3.default)(_defineProperty({}, _constants.UUID_KEY, _this.getUUIDFromValue(instance)), diff) : (0, _assign3.default)({}, instance, diff);
                                // 产生新的instanceList

                                newInstanceList = instanceList.map(function (instanceLooped) {
                                    return instanceLooped === instance ? newInstanceValue : instanceLooped;
                                });

                                _this.setState({
                                    instanceList: newInstanceList
                                });
                                _this._trackValueChange(newInstanceList);

                                _context.next = 7;
                                return InstanceUtils.validateInstance(instance);

                            case 7:
                                errors = _context.sent;
                                id = InstanceUtils.getUUIDFromInstance(instance);

                                _this._setValidation(_defineProperty({}, id, errors));

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }();

        _this._deleteInstance = function (instance) {
            var _this$state = _this.state,
                instanceList = _this$state.instanceList,
                selectedUUID = _this$state.selectedUUID;

            var nextIndex = -1;
            var newInstanceList = instanceList.filter(function (v, idx) {
                var skip = v !== instance;
                if (!skip) {
                    nextIndex = idx - 1;
                }
                return skip;
            });

            var newState = {};

            var bundle = new _bundle2.default(instance.bundleId);
            _this.pluginInstanceCount.dec(bundle.getStringId());
            // 删除选中项目后默认选中前一项可选的，如果不存在则往后找一个可选项
            var uuId = InstanceUtils.getUUIDFromInstance(instance);
            if (uuId === selectedUUID) {
                var nextSelectedInstance = InstanceUtils.findFirstEditableInstance(newInstanceList, nextIndex);
                var nextUUID = InstanceUtils.getUUIDFromInstance(nextSelectedInstance);
                newState.selectedUUID = nextUUID;
            }

            _this.setState(_extends({
                instanceList: newInstanceList
            }, newState));

            _this._trackValueChange(newInstanceList);

            _this._adjustHeight();
        };

        _this._moveInstance = function (fromIndex, toIndex) {
            var instanceList = _this.state.instanceList;

            var newInstanceList = InstanceUtils.moveInstance(instanceList, fromIndex, toIndex);

            if (newInstanceList) {
                _this.setState({
                    instanceList: newInstanceList
                });
            }
            _this._trackValueChange(newInstanceList);
        };

        _this._setValidation = function (validation) {
            _this.setState({
                validations: (0, _assign3.default)({}, _this.state.validations, validation)
            });

            _this._adjustHeight();
        };

        _this._adjustHeight = function (id) {
            // 不要重复执行
            if (_this._adjustHeightTimer) {
                clearTimeout(_this._adjustHeightTimer);
                _this._adjustHeightTimer = undefined;
            }

            _this._adjustHeightTimer = setTimeout(function () {
                id = id || _this.state.selectedUUID;

                // 获取编辑器框
                var editorBB = _this.preview.getEditorBoundingBox(id);
                if (!editorBB) {
                    return _this.setState({
                        bottomGap: 0
                    });
                }

                // 获取展示框
                var previewNode = (0, _reactDom.findDOMNode)(_this.preview);
                var previewBB = previewNode && previewNode.getBoundingClientRect();
                if (!previewBB) {
                    return;
                }

                var gap = Math.max(0, editorBB.bottom - previewBB.bottom);
                _this.setState({
                    bottomGap: gap
                });
            }, 0);
        };

        _this._windowUnloadHandler = function (evt) {
            if (!_this._dirty) {
                return;
            }
            // 这个字符串其实不会展示给用户
            var confirmLeaveMessage = '页面上有未保存的数据，确定要离开吗？';
            evt.returnValue = confirmLeaveMessage;
            return confirmLeaveMessage;
        };

        _this._closeRestoreCacheAlert = function () {
            _this.setState({
                showRestoreFromCache: false
            });
        };

        _this._restoreCache = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(evt) {
                var cachedValue;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                evt.preventDefault();

                                cachedValue = _this._readCache();

                                if (!(cachedValue !== storage.NOT_FOUND)) {
                                    _context2.next = 8;
                                    break;
                                }

                                _this._trackValueChange(cachedValue, false);
                                _context2.next = 6;
                                return _this.setInstanceList(cachedValue);

                            case 6:
                                _this.setState({
                                    showRestoreFromCache: false
                                });
                                _this._removeCache();

                            case 8:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x4) {
                return _ref2.apply(this, arguments);
            };
        }();

        _this.design = function () {
            return {

                selectInstance: _this._selectInstance,

                moveInstance: _this._moveInstance,

                deleteInstance: _this._deleteInstance,

                modifyInstance: _this._modifyInstance,

                setSettings: _this._setSettings,

                adjustPreviewHeight: _this._adjustHeight
            };
        }();

        _this.pluginInstanceCount = new _LazyMap2.default(0);
        _this.state = {
            showRestoreFromCache: false, // 是否显示从缓存中恢复的提示
            settings: {}, // 页面设置，比如页面背景色
            selectedUUID: '', // 当前选中的组件对应的 UUID
            instanceList: [], // 插件实例
            pluginInstanceCount: new _LazyMap2.default(0), // plugin创建的实例数
            validations: {}, // 当前所有组件的 validation 信息;  key 是 value 的 UUID
            showError: false, // 是否强制显示错误
            bottomGap: 0 // 当 preview 很长时，为了对齐 preview 底部需要的额外空间
        };
        return _this;
    }

    _createClass(Design, [{
        key: 'initInstanceList',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(bundleId) {
                var plugin, instance, newInstanceList, bundle, stringID;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (bundleId) {
                                    _context3.next = 2;
                                    break;
                                }

                                return _context3.abrupt('return');

                            case 2:
                                _context3.next = 4;
                                return _loader2.default.loadPlugin(bundleId);

                            case 4:
                                plugin = _context3.sent;
                                instance = plugin.getInitialValue();

                                instance.bundleId = bundleId;
                                InstanceUtils.tagInstanceWithUUID(instance);
                                newInstanceList = [instance];
                                bundle = new _bundle2.default(bundleId);

                                this.pluginInstanceCount = new _LazyMap2.default(0);
                                stringID = bundle.getStringId();

                                this.pluginInstanceCount.inc(stringID);

                                this.setState({
                                    instanceList: newInstanceList
                                });
                                this._trackValueChange(newInstanceList);
                                this._selectInstance(instance);

                            case 16:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function initInstanceList(_x5) {
                return _ref3.apply(this, arguments);
            }

            return initInstanceList;
        }()
        /**
         * 设置实例列表
         * @param instanceList
         */

    }, {
        key: 'setInstanceList',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(instanceList) {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, instance, pluginMap, pluginInstanceCount, newInstanceList, i, _instance, bundle, plugin, stringID;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context4.prev = 3;
                                _iterator = instanceList[Symbol.iterator]();

                            case 5:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                    _context4.next = 13;
                                    break;
                                }

                                instance = _step.value;
                                _context4.next = 9;
                                return _loader2.default.loadPlugin(instance.bundleId);

                            case 9:
                                InstanceUtils.tagInstanceWithUUID(instance);

                            case 10:
                                _iteratorNormalCompletion = true;
                                _context4.next = 5;
                                break;

                            case 13:
                                _context4.next = 19;
                                break;

                            case 15:
                                _context4.prev = 15;
                                _context4.t0 = _context4['catch'](3);
                                _didIteratorError = true;
                                _iteratorError = _context4.t0;

                            case 19:
                                _context4.prev = 19;
                                _context4.prev = 20;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }

                            case 22:
                                _context4.prev = 22;

                                if (!_didIteratorError) {
                                    _context4.next = 25;
                                    break;
                                }

                                throw _iteratorError;

                            case 25:
                                return _context4.finish(22);

                            case 26:
                                return _context4.finish(19);

                            case 27:
                                pluginMap = {};
                                pluginInstanceCount = this.pluginInstanceCount = new _LazyMap2.default(0);
                                newInstanceList = [];
                                i = 0;

                            case 31:
                                if (!(i < instanceList.length)) {
                                    _context4.next = 45;
                                    break;
                                }

                                _instance = instanceList[i];
                                bundle = new _bundle2.default(_instance.bundleId);
                                // 找出plugin 并加载

                                _context4.next = 36;
                                return _loader2.default.loadPlugin(_instance.bundleId);

                            case 36:
                                plugin = _context4.sent;
                                stringID = bundle.getStringId();

                                pluginMap[stringID] = plugin;
                                pluginInstanceCount.inc(stringID);
                                // 加上uuid
                                InstanceUtils.tagInstanceWithUUID(_instance);
                                newInstanceList.push(_instance);

                            case 42:
                                i++;
                                _context4.next = 31;
                                break;

                            case 45:
                                this.setState({
                                    pluginMap: pluginMap, instanceList: newInstanceList
                                });

                            case 46:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[3, 15, 19, 27], [20,, 22, 26]]);
            }));

            function setInstanceList(_x6) {
                return _ref4.apply(this, arguments);
            }

            return setInstanceList;
        }()

        /**
         *  外部调用接口 创建插件实例，
         */

    }, {
        key: 'addInstanceByBundle',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(bundleId) {
                var plugin, bundle, stringID, pluginInstanceCount, count, instance, instanceList, newInstanceList;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _objectDestructuringEmpty(this.state);
                                // 需要检查该插件有没有加载，若没有则先加载，然后再创建实例


                                _context5.next = 3;
                                return _loader2.default.loadPlugin(bundleId);

                            case 3:
                                plugin = _context5.sent;
                                bundle = new _bundle2.default(bundleId);
                                stringID = bundle.getStringId();
                                pluginInstanceCount = this.pluginInstanceCount;
                                count = pluginInstanceCount.get(stringID);

                                if (!(plugin.limitPerPage && plugin.limitPerPage <= count)) {
                                    _context5.next = 11;
                                    break;
                                }

                                _zent.Notify.error('页面中此插件的数量超过限制');
                                return _context5.abrupt('return');

                            case 11:
                                instance = plugin.getInitialValue();

                                instance.bundleId = bundleId;
                                InstanceUtils.tagInstanceWithUUID(instance);

                                instanceList = this.state.instanceList;
                                newInstanceList = void 0;

                                newInstanceList = instanceList.concat(instance);
                                pluginInstanceCount.inc(stringID);
                                this.setState({
                                    instanceList: newInstanceList
                                });
                                this._trackValueChange(newInstanceList);
                                this._selectInstance(instance);

                            case 21:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function addInstanceByBundle(_x7) {
                return _ref5.apply(this, arguments);
            }

            return addInstanceByBundle;
        }()
    }, {
        key: 'validate',


        /**
         * 验证，如果返回false，则存在错误
         * TODO
         */
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                return _context6.abrupt('return', true);

                            case 1:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function validate() {
                return _ref6.apply(this, arguments);
            }

            return validate;
        }()
    }, {
        key: 'getInstanceList',
        value: function getInstanceList() {
            this._dirty = false;
            this._removeCache();
            var instanceList = InstanceUtils.removeUUID(this.state.instanceList);
            return instanceList;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                cacheRestoreMessage = _props.cacheRestoreMessage,
                disabled = _props.disabled;
            var _state = this.state,
                showRestoreFromCache = _state.showRestoreFromCache,
                bottomGap = _state.bottomGap,
                selectedUUID = _state.selectedUUID,
                validations = _state.validations,
                showError = _state.showError,
                settings = _state.settings,
                instanceList = _state.instanceList;


            var cls = (0, _classnames2.default)('mp-design');

            return _react2.default.createElement(
                'div',
                { className: cls, style: { paddingBottom: bottomGap } },
                showRestoreFromCache && _react2.default.createElement(
                    _zent.Alert,
                    {
                        className: 'mp-design__restore-cache-alert',
                        closable: true,
                        onClose: this._closeRestoreCacheAlert,
                        type: 'warning'
                    },
                    cacheRestoreMessage,
                    _react2.default.createElement(
                        'a',
                        {
                            className: 'mp-design__restore-cache-alert-use',
                            onClick: this._restoreCache,
                            href: 'javascript:void(0);'
                        },
                        '\u4F7F\u7528'
                    )
                ),
                _react2.default.createElement(_DesignEditor2.default, {
                    settings: settings,
                    selectedUUID: selectedUUID,
                    instanceList: instanceList,
                    validations: validations,
                    showError: showError,
                    design: this.design,
                    disabled: disabled,
                    ref: this._savePreview
                })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._setupBeforeUnloadHook();
            this._checkCache();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this._setupBeforeUnloadHook();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._uninstallBeforeUnloadHook();
        }

        // 选中一个组件

    }, {
        key: '_trackValueChange',


        // 调用 onChange 的统一入口，用于处理一些需要知道有没有修改过值的情况
        value: function _trackValueChange(newInstanceList) {
            var writeCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var onChange = this.props.onChange;

            onChange && onChange(newInstanceList); // 通知外面数据变化

            if (!this._dirty) {
                this._dirty = true;
            }

            if (writeCache) {
                this._writeCache(newInstanceList);
            }

            this._adjustHeight();
        }

        // 删除一个组件, 删除后如果没有选中的组件则默认选一个

    }, {
        key: '_scrollToPreviewItem',


        // 滚动到第一个有错误的组件
        value: function _scrollToPreviewItem(id) {
            var _props2 = this.props,
                scrollTopOffset = _props2.scrollTopOffset,
                scrollLeftOffset = _props2.scrollLeftOffset;

            this.preview.scrollToItem(id, {
                top: scrollTopOffset,
                left: scrollLeftOffset
            });
        }

        // 调整 Design 的高度，因为 editor 是 position: absolute 的，所以需要动态的更新
        // 实际并未改变高度，而是设置了margin/padding

    }, {
        key: '_setupBeforeUnloadHook',
        value: function _setupBeforeUnloadHook() {
            var confirmUnsavedLeave = this.props.confirmUnsavedLeave;


            if (this._hasBeforeUnloadHook || !confirmUnsavedLeave) {
                return;
            }

            window.addEventListener('beforeunload', this._windowUnloadHandler);
            this._hasBeforeUnloadHook = true;
        }
    }, {
        key: '_uninstallBeforeUnloadHook',
        value: function _uninstallBeforeUnloadHook() {
            window.removeEventListener('beforeunload', this._windowUnloadHandler);
            this._hasBeforeUnloadHook = false;
        }
    }, {
        key: '_checkCache',
        value: function _checkCache() {
            var cache = this.props.cache;


            if (cache) {
                var cachedValue = this._readCache();

                if (cachedValue !== storage.NOT_FOUND) {
                    this.setState({
                        showRestoreFromCache: true
                    });
                }
            }
        }
    }, {
        key: '_readCache',
        value: function _readCache() {
            var cache = this.props.cache;

            if (!cache) {
                return storage.NOT_FOUND;
            }

            return storage.read(_constants.CACHE_KEY, _constants.cacheId);
        }
    }, {
        key: '_writeCache',
        value: function _writeCache(value) {
            var cache = this.props.cache;

            if (!cache) {
                return false;
            }
            return storage.write(_constants.CACHE_KEY, _constants.cacheId, value);
        }
    }, {
        key: '_removeCache',
        value: function _removeCache() {
            // 这个函数不需要检查有没有开启缓存，强制清除
            return storage.write(_constants.CACHE_KEY, _constants.cacheId, undefined);
        }

        // 关闭提示，但是不清楚缓存


        // 恢复缓存的数据并删除缓存


        // 暴露给子组件的接口

    }]);

    return Design;
}(_react.PureComponent);

Design.defaultProps = {
    confirmUnsavedLeave: true, // 有未保存类容离开页面时是否要确认
    cacheRestoreMessage: '提示：在浏览器中发现未提交的内容，是否使用该内容替换当前内容？', // 存在缓存时的提示内容
    scrollTopOffset: -10,
    scrollLeftOffset: -10
};
exports.default = Design;

/***/ }),

/***/ "./src/pages/editor/components/design/DesignEditor.jsx":
/*!*************************************************************!*\
  !*** ./src/pages/editor/components/design/DesignEditor.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultTo = __webpack_require__(/*! lodash/defaultTo */ "./node_modules/lodash/defaultTo.js");

var _defaultTo2 = _interopRequireDefault(_defaultTo);

var _reactBeautifulDnd = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");

var _get = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");

var _get2 = _interopRequireDefault(_get);

var _find = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");

var _find2 = _interopRequireDefault(_find);

var _instance = __webpack_require__(/*! ./utils/instance */ "./src/pages/editor/components/design/utils/instance.js");

var InstanceUtils = _interopRequireWildcard(_instance);

var _DesignPreviewItem = __webpack_require__(/*! ./preview/DesignPreviewItem */ "./src/pages/editor/components/design/preview/DesignPreviewItem.jsx");

var _DesignPreviewItem2 = _interopRequireDefault(_DesignPreviewItem);

var _DesignPreviewController = __webpack_require__(/*! ./preview/DesignPreviewController */ "./src/pages/editor/components/design/preview/DesignPreviewController.jsx");

var _DesignPreviewController2 = _interopRequireDefault(_DesignPreviewController);

var _DesignEditorItem = __webpack_require__(/*! ./editor/DesignEditorItem */ "./src/pages/editor/components/design/editor/DesignEditorItem.jsx");

var _DesignEditorItem2 = _interopRequireDefault(_DesignEditorItem);

var _constants = __webpack_require__(/*! ./preview/constants */ "./src/pages/editor/components/design/preview/constants.js");

var _loader = __webpack_require__(/*! ./bundle/loader */ "./src/pages/editor/components/design/bundle/loader.js");

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 */
var DesignEditor = function (_PureComponent) {
    _inherits(DesignEditor, _PureComponent);

    function DesignEditor() {
        _classCallCheck(this, DesignEditor);

        var _this = _possibleConstructorReturn(this, (DesignEditor.__proto__ || Object.getPrototypeOf(DesignEditor)).call(this));

        _this.dispatchDragEnd = function (result) {
            var type = result.type;

            if (type === _constants.DND_PREVIEW_CONTROLLER) {
                _this.onPreviewDragEnd(result);
                return;
            }
            var selectedUUID = _this.props.selectedUUID;

            var editor = (0, _find2.default)(_this.editors, function (editor, id) {
                return id == selectedUUID;
            });
            if (editor) {
                editor.onDragEnd(result);
            }
        };

        _this.savePreviewItem = function (id) {
            return function (instance) {
                if (!instance) {
                    delete _this.previewItems[id];
                } else {
                    _this.previewItems[id] = instance;
                }
            };
        };

        _this.saveEditorItem = function (id) {
            return function (instance) {
                if (!instance) {
                    delete _this.editorItems[id];
                } else {
                    _this.editorItems[id] = instance;
                }
            };
        };

        _this.saveEditor = function (id) {
            return function (editor) {
                if (!editor) {
                    delete _this.editors[id];
                } else {
                    _this.editors[id] = editor;
                }
            };
        };

        _this.scrollToItem = function (id, offsets) {
            var item = _this.previewItems[id];

            if (!item) {
                return;
            }

            item.scrollTop(offsets);
        };

        _this.previewItems = {}; // 记录预览组件实例 id -> instance
        _this.editorItems = {}; // 记录编辑表单实例 id -> instance
        _this.editors = {}; //  // 记录编辑表单实例 id -> editor
        return _this;
    }

    /**
     * 流程
     */

    // All props in this component are injected by Design


    _createClass(DesignEditor, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                settings = _props.settings,
                selectedUUID = _props.selectedUUID,
                instanceList = _props.instanceList,
                validations = _props.validations,
                showError = _props.showError,
                design = _props.design,
                disabled = _props.disabled;


            return _react2.default.createElement(
                _reactBeautifulDnd.DragDropContext,
                { onDragEnd: this.dispatchDragEnd },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'mp-design-preview',
                        style: {
                            backgroundColor: (0, _get2.default)(settings, 'previewBackground', _constants.DEFAULT_BACKGROUND)
                        } },
                    disabled && _react2.default.createElement('div', { className: 'mp-design__disabled-mask' }),
                    _react2.default.createElement(
                        _reactBeautifulDnd.Droppable,
                        {
                            droppableId: 'mp-design-preview-list',
                            type: _constants.DND_PREVIEW_CONTROLLER,
                            direction: 'vertical'
                        },
                        function (provided, snapshot) {
                            var draggableIndex = 0;
                            return _react2.default.createElement(
                                'div',
                                _extends({
                                    ref: provided.innerRef
                                }, provided.droppableProps, {
                                    className: (0, _classnames2.default)('mp-design__item-list', 'mp-design__item-list--full-height')
                                }),
                                instanceList.map(function (instance) {
                                    var plugin = _loader2.default.getPluginByInstance(instance);
                                    // 实例id
                                    var id = InstanceUtils.getUUIDFromInstance(instance);
                                    // 是否被选中
                                    var selected = id === selectedUUID;
                                    // 是否可拖动
                                    var draggable = (0, _defaultTo2.default)(plugin.dragable, true);
                                    return _react2.default.createElement(
                                        _DesignPreviewItem2.default,
                                        {
                                            key: id,
                                            id: id,
                                            ref: _this2.savePreviewItem(id)
                                        },
                                        _react2.default.createElement(_DesignPreviewController2.default, {
                                            instance: instance,
                                            settings: settings,
                                            design: design,
                                            id: id,
                                            index: draggable ? draggableIndex++ : -1,
                                            allowHoverEffects: !snapshot.isDraggingOver,
                                            draggable: draggable,
                                            editable: (0, _defaultTo2.default)(plugin.editable, true),
                                            canDelete: (0, _defaultTo2.default)(plugin.canDelete, true),
                                            highlightWhenSelect: (0, _defaultTo2.default)(plugin.highlightWhenSelect, true),
                                            isSelected: selected,
                                            component: plugin.preview
                                        }),
                                        selected && plugin.editable && _react2.default.createElement(
                                            _DesignEditorItem2.default,
                                            {
                                                disabled: disabled,
                                                ref: _this2.saveEditorItem(id)
                                            },
                                            _react2.default.createElement(plugin.editForm, {
                                                ref: _this2.saveEditor(id),
                                                instance: instance,
                                                settings: settings,
                                                design: design,
                                                validation: validations[id] || {},
                                                showError: showError
                                            })
                                        )
                                    );
                                }),
                                provided.placeholder
                            );
                        }
                    )
                )
            );
        }
    }, {
        key: 'onPreviewDragEnd',
        value: function onPreviewDragEnd(result) {
            var source = result.source,
                destination = result.destination;

            // dropped outside

            if (!destination) {
                return;
            }

            var design = this.props.design;

            design.moveInstance(source.index, destination.index);
        }
    }, {
        key: 'getEditorBoundingBox',
        value: function getEditorBoundingBox(id) {
            var item = this.editorItems[id];

            if (!item) {
                return;
            }

            return item.getBoundingBox();
        }
    }]);

    return DesignEditor;
}(_react.PureComponent);

DesignEditor.defaultProps = {
    background: '#f9f9f9',
    disabled: false
};
exports.default = DesignEditor;

/***/ }),

/***/ "./src/pages/editor/components/design/bundle/bundle.js":
/*!*************************************************************!*\
  !*** ./src/pages/editor/components/design/bundle/bundle.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bundle = function () {
    function Bundle(bundleId) {
        _classCallCheck(this, Bundle);

        var groupId = bundleId.groupId,
            artifactId = bundleId.artifactId,
            version = bundleId.version,
            classifier = bundleId.classifier;

        this.groupId = groupId;
        this.artifactId = artifactId;
        this.version = version;
        this.classifier = classifier;
    }

    _createClass(Bundle, [{
        key: 'getStringId',
        value: function getStringId() {
            var preId = this.groupId + '-' + this.artifactId + '-' + this.version;
            if (this.classifier) {
                return preId + '-' + this.classifier;
            }
            return preId;
        }
    }, {
        key: 'getQueryObject',
        value: function getQueryObject() {
            return {
                groupId: this.groupId,
                artifactId: this.artifactId,
                version: this.version,
                classifier: this.classifier
            };
        }
    }]);

    return Bundle;
}();

exports.default = Bundle;

/***/ }),

/***/ "./src/pages/editor/components/design/bundle/loader.js":
/*!*************************************************************!*\
  !*** ./src/pages/editor/components/design/bundle/loader.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 动态加载小程序组件编辑器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _zent = __webpack_require__(/*! zent */ "./node_modules/zent/lib/index.js");

var zent = _interopRequireWildcard(_zent);

var _bundle = __webpack_require__(/*! ./bundle */ "./src/pages/editor/components/design/bundle/bundle.js");

var _bundle2 = _interopRequireDefault(_bundle);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactBeautifulDnd = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");

var _isUndefined = __webpack_require__(/*! lodash/isUndefined */ "./node_modules/lodash/isUndefined.js");

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isString = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");

var _isString2 = _interopRequireDefault(_isString);

var _isArray = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");

var _isArray2 = _interopRequireDefault(_isArray);

var _isNumber = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isFunction = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _assign = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _find = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");

var _find2 = _interopRequireDefault(_find);

var _defaultTo = __webpack_require__(/*! lodash/defaultTo */ "./node_modules/lodash/defaultTo.js");

var _defaultTo2 = _interopRequireDefault(_defaultTo);

var _findIndex = __webpack_require__(/*! lodash/findIndex */ "./node_modules/lodash/findIndex.js");

var _findIndex2 = _interopRequireDefault(_findIndex);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MpEditorPluginLoader = function () {
    function MpEditorPluginLoader() {
        _classCallCheck(this, MpEditorPluginLoader);
    }

    _createClass(MpEditorPluginLoader, [{
        key: 'init',
        value: function init() {
            this.pluginMap = {};
            var define = window.define;
            window.requirejs.config({
                baseUrl: '/'
            });
            define('react', [], function () {
                return _react2.default;
            });
            define('zent', [], function () {
                return zent;
            });
            define('classnames', [], function () {
                return _classnames2.default;
            });
            define('react-beautiful-dnd', [], function () {
                return { DragDropContext: _reactBeautifulDnd.DragDropContext, Droppable: _reactBeautifulDnd.Droppable, Draggable: _reactBeautifulDnd.Draggable };
            });
            define('lodash', [], function () {
                return {
                    isUndefined: _isUndefined2.default,
                    isString: _isString2.default,
                    isArray: _isArray2.default,
                    isNumber: _isNumber2.default,
                    isFunction: _isFunction2.default,
                    isEmpty: _isEmpty2.default,
                    assign: _assign2.default,
                    find: _find2.default,
                    defaultTo: _defaultTo2.default,
                    findIndex: _findIndex2.default
                };
            });
        }
    }, {
        key: 'loadPlugin',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(bundleId) {
                var pluginMap, bundle, bundleStringId, plugin;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                pluginMap = this.pluginMap;
                                bundle = new _bundle2.default(bundleId);
                                bundleStringId = bundle.getStringId();
                                // 检查是否存

                                if (!pluginMap[bundleStringId]) {
                                    _context.next = 5;
                                    break;
                                }

                                return _context.abrupt('return', pluginMap[bundleStringId]);

                            case 5:
                                _context.next = 7;
                                return this.loadEditorPluginInternal(bundle);

                            case 7:
                                plugin = _context.sent;

                                plugin = plugin.default ? plugin.default : plugin;
                                // 找出plugin 并加载
                                pluginMap[bundle.getStringId()] = plugin;
                                return _context.abrupt('return', plugin);

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function loadPlugin(_x) {
                return _ref.apply(this, arguments);
            }

            return loadPlugin;
        }()
    }, {
        key: 'getPluginByInstance',
        value: function getPluginByInstance(instance) {
            var bundleId = instance.bundleId;
            var bundle = new _bundle2.default(bundleId);
            return this.pluginMap[bundle.getStringId()];
        }
    }, {
        key: 'loadEditorPluginInternal',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(bundle) {
                var query, urlResponse, head, linkTag, url;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                query = bundle.getQueryObject();
                                // 得到路径

                                _context2.next = 3;
                                return _axios2.default.get('/bundle/get-url/mpeditor-plugin', {
                                    params: query
                                });

                            case 3:
                                urlResponse = _context2.sent;

                                // 加载css
                                head = document.getElementsByTagName("head")[0];
                                linkTag = document.createElement("link");

                                linkTag.href = urlResponse.data.data.cssUrl;
                                linkTag.setAttribute('rel', 'stylesheet');
                                linkTag.setAttribute('type', 'text/css');
                                head.appendChild(linkTag);
                                // 加载js
                                url = urlResponse.data.data.jsUrl;
                                _context2.next = 13;
                                return new Promise(function (resolve, reject) {
                                    window.require([url], function (plugin) {
                                        resolve(plugin);
                                    });
                                });

                            case 13:
                                return _context2.abrupt('return', _context2.sent);

                            case 14:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function loadEditorPluginInternal(_x2) {
                return _ref2.apply(this, arguments);
            }

            return loadEditorPluginInternal;
        }()
    }]);

    return MpEditorPluginLoader;
}();

exports.default = new MpEditorPluginLoader();

/***/ }),

/***/ "./src/pages/editor/components/design/constants.js":
/*!*********************************************************!*\
  !*** ./src/pages/editor/components/design/constants.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_COMPONENT_OVERLAY_POSITION = exports.ADD_COMPONENT_OVERLAY_POSITION = {
  TOP: 1,
  BOTTOM: 2,
  UNKNOWN: -1
};
var UUID_KEY = exports.UUID_KEY = '__zent-design-uuid__';
var CACHE_KEY = exports.CACHE_KEY = '__zent-design-cache-storage__';
var cacheId = exports.cacheId = '__instanceList__';

/***/ }),

/***/ "./src/pages/editor/components/design/editor/DesignEditorItem.jsx":
/*!************************************************************************!*\
  !*** ./src/pages/editor/components/design/editor/DesignEditorItem.jsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DesignEditorItem = function (_PureComponent) {
    _inherits(DesignEditorItem, _PureComponent);

    function DesignEditorItem() {
        _classCallCheck(this, DesignEditorItem);

        return _possibleConstructorReturn(this, (DesignEditorItem.__proto__ || Object.getPrototypeOf(DesignEditorItem)).apply(this, arguments));
    }

    _createClass(DesignEditorItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                disabled = _props.disabled,
                className = _props.className;


            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('mp-design-editor-item', className) },
                disabled && _react2.default.createElement('div', { className: 'mp-design__disabled-mask' }),
                this.props.children
            );
        }
    }, {
        key: 'getBoundingBox',
        value: function getBoundingBox() {
            var node = (0, _reactDom.findDOMNode)(this);
            return node && node.getBoundingClientRect();
        }
    }]);

    return DesignEditorItem;
}(_react.PureComponent);

DesignEditorItem.propTypes = {
    children: _propTypes2.default.node.isRequired,

    disabled: _propTypes2.default.bool,

    className: _propTypes2.default.string
};
DesignEditorItem.defaultProps = {
    disabled: false
};
exports.default = DesignEditorItem;

/***/ }),

/***/ "./src/pages/editor/components/design/index.js":
/*!*****************************************************!*\
  !*** ./src/pages/editor/components/design/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

var _Design = __webpack_require__(/*! ./Design */ "./src/pages/editor/components/design/Design.jsx");

var _Design2 = _interopRequireDefault(_Design);

__webpack_require__(/*! ./index.pcss */ "./src/pages/editor/components/design/index.pcss");

var _loader = __webpack_require__(/*! ./bundle/loader */ "./src/pages/editor/components/design/bundle/loader.js");

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 初始化插件加载器
_loader2.default.init();
exports.default = _Design2.default;

/***/ }),

/***/ "./src/pages/editor/components/design/index.pcss":
/*!*******************************************************!*\
  !*** ./src/pages/editor/components/design/index.pcss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/editor/components/design/preview/DesignPreviewController.jsx":
/*!********************************************************************************!*\
  !*** ./src/pages/editor/components/design/preview/DesignPreviewController.jsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _zent = __webpack_require__(/*! zent */ "./node_modules/zent/lib/index.js");

var _pick = __webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js");

var _pick2 = _interopRequireDefault(_pick);

var _get = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");

var _get2 = _interopRequireDefault(_get);

var _reactBeautifulDnd = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");

var _constants = __webpack_require__(/*! ./constants */ "./src/pages/editor/components/design/preview/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DesignPreviewController = function (_PureComponent) {
    _inherits(DesignPreviewController, _PureComponent);

    function DesignPreviewController() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DesignPreviewController);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DesignPreviewController.__proto__ || Object.getPrototypeOf(DesignPreviewController)).call.apply(_ref, [this].concat(args))), _this), _this.onSelect = function (evt) {
            var _this$props = _this.props,
                editable = _this$props.editable,
                design = _this$props.design,
                instance = _this$props.instance;

            if (!editable) {
                return;
            }
            design.selectInstance(instance);
        }, _this.onDelete = function () {
            var _this$props2 = _this.props,
                design = _this$props2.design,
                instance = _this$props2.instance;

            design.deleteInstance(instance);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DesignPreviewController, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                draggable = _props.draggable,
                editable = _props.editable,
                canDelete = _props.canDelete,
                highlightWhenSelect = _props.highlightWhenSelect,
                isSelected = _props.isSelected,
                PreviewComponent = _props.component,
                settings = _props.settings,
                id = _props.id,
                index = _props.index,
                allowHoverEffects = _props.allowHoverEffects;

            var props = (0, _pick2.default)(this.props, ['instance', 'design', 'settings']);
            var getClassName = function getClassName(highlight) {
                var _cx;

                return (0, _classnames2.default)('mp-design-preview-controller', (_cx = {}, _defineProperty(_cx, 'mp-design-preview-controller--editable', editable), _defineProperty(_cx, 'mp-design-preview-controller--selected', isSelected), _defineProperty(_cx, 'mp-design-preview-controller--highlight', highlight), _defineProperty(_cx, 'mp-design-preview-controller--dragable', draggable), _cx));
            };
            var tree = draggable ? _react2.default.createElement(
                _reactBeautifulDnd.Draggable,
                {
                    draggableId: id,
                    type: _constants.DND_PREVIEW_CONTROLLER,
                    isDragDisabled: !draggable,
                    index: index
                },
                function (provided, snapshot) {
                    // 拖拽的时候隐藏各种按钮，会很丑
                    var showDeleteButtons = canDelete && allowHoverEffects && !snapshot.isDragging;
                    var cls = getClassName(allowHoverEffects && highlightWhenSelect); // 拖动的时候不展示快捷操作按钮

                    return _react2.default.createElement(
                        'div',
                        { className: cls, onClick: _this2.onSelect },
                        _react2.default.createElement(
                            'div',
                            _extends({
                                ref: provided.innerRef
                            }, provided.draggableProps, provided.dragHandleProps, {
                                style: _extends({}, provided.draggableProps.style, {
                                    backgroundColor: (0, _get2.default)(settings, 'previewBackground', _constants.DEFAULT_BACKGROUND)
                                }),
                                className: 'mp-design-preview-controller__drag-handle'
                            }),
                            _react2.default.createElement(PreviewComponent, props)
                        ),
                        provided.placeholder,
                        showDeleteButtons && _react2.default.createElement(DeleteButton, { onDelete: _this2.onDelete })
                    );
                }
            ) : _react2.default.createElement(
                'div',
                {
                    className: getClassName(highlightWhenSelect),
                    onClick: this.onSelect
                },
                _react2.default.createElement(
                    'div',
                    {
                        className: (0, _classnames2.default)('mp-design-preview-controller__drag-handle', 'mp-design-preview-controller__drag-handle--inactive')
                    },
                    _react2.default.createElement(PreviewComponent, props)
                ),
                canDelete && _react2.default.createElement(DeleteButton, { onDelete: this.onDelete })
            );

            return tree;
        }
    }]);

    return DesignPreviewController;
}(_react.PureComponent);

DesignPreviewController.defaultProps = {};


function DeleteButton(_ref2) {
    var onDelete = _ref2.onDelete;

    return _react2.default.createElement(
        _zent.Pop,
        {
            content: '\u786E\u5B9A\u5220\u9664\uFF1F',
            trigger: 'click',
            position: 'left-center',
            centerArrow: true,
            onConfirm: onDelete,
            wrapperClassName: 'mp-design-preview-controller__action-btn-delete'
        },
        _react2.default.createElement(
            'svg',
            {
                width: '20',
                height: '20',
                viewBox: '0 0 20 20',
                xmlns: 'http://www.w3.org/2000/svg',
                className: 'mp-design-preview-controller__icon-delete',
                onClick: function onClick(evt) {
                    evt && evt.stopPropagation();
                }
            },
            _react2.default.createElement(
                'g',
                { fill: 'none', fillRule: 'evenodd' },
                _react2.default.createElement('circle', { cx: '10', cy: '10', r: '10' }),
                _react2.default.createElement('path', {
                    fill: '#FFF',
                    d: 'M13.75 7.188l-.937-.938L10 9.063 7.188 6.25l-.938.937L9.062 10 6.25 12.812l.937.938L10 10.938l2.812 2.812.938-.937L10.938 10'
                })
            )
        )
    );
}

exports.default = DesignPreviewController;

/***/ }),

/***/ "./src/pages/editor/components/design/preview/DesignPreviewItem.jsx":
/*!**************************************************************************!*\
  !*** ./src/pages/editor/components/design/preview/DesignPreviewItem.jsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isFunction = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _scroll = __webpack_require__(/*! zent/lib/utils/scroll */ "./node_modules/zent/lib/utils/scroll.js");

var _scroll2 = _interopRequireDefault(_scroll);

var _offset = __webpack_require__(/*! ../utils/offset */ "./src/pages/editor/components/design/utils/offset.js");

var _offset2 = _interopRequireDefault(_offset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function scrollNodeToTop(node, offsets) {
    var pos = (0, _offset2.default)(node);
    var top = (0, _isFunction2.default)(offsets.top) ? offsets.top(pos.top) : pos.top + offsets.top;
    var left = (0, _isFunction2.default)(offsets.left) ? offsets.left(pos.left) : pos.left + offsets.left;
    (0, _scroll2.default)(document.body, left, top);
}

var DesignPreviewItem = function (_PureComponent) {
    _inherits(DesignPreviewItem, _PureComponent);

    function DesignPreviewItem() {
        _classCallCheck(this, DesignPreviewItem);

        return _possibleConstructorReturn(this, (DesignPreviewItem.__proto__ || Object.getPrototypeOf(DesignPreviewItem)).apply(this, arguments));
    }

    _createClass(DesignPreviewItem, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;


            return _react2.default.createElement(
                'div',
                { className: 'mp-design-preview-item' },
                children
            );
        }
    }, {
        key: 'scrollTop',
        value: function scrollTop(offsets) {
            var node = (0, _reactDom.findDOMNode)(this);
            scrollNodeToTop(node, offsets);
        }
    }]);

    return DesignPreviewItem;
}(_react.PureComponent);

DesignPreviewItem.propTypes = {
    children: _propTypes2.default.node.isRequired
};
DesignPreviewItem.defaultProps = {};
exports.default = DesignPreviewItem;

/***/ }),

/***/ "./src/pages/editor/components/design/preview/constants.js":
/*!*****************************************************************!*\
  !*** ./src/pages/editor/components/design/preview/constants.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DND_PREVIEW_CONTROLLER = exports.DND_PREVIEW_CONTROLLER = 'zent-design-preview-controller-dnd-type';
var DEFAULT_BACKGROUND = exports.DEFAULT_BACKGROUND = '#f9f9f9';

/***/ }),

/***/ "./src/pages/editor/components/design/utils/LazyMap.js":
/*!*************************************************************!*\
  !*** ./src/pages/editor/components/design/utils/LazyMap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * A lazy map with default value.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * If most of the entries in your map defaults to the same value, you can use LazyMap to save memory.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _has2 = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");

var _has3 = _interopRequireDefault(_has2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LazyMap = function () {
  function LazyMap(defaultValue) {
    var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, LazyMap);

    this.defaultValue = defaultValue;
    this.map = map;
  }

  _createClass(LazyMap, [{
    key: 'get',
    value: function get(key) {
      if ((0, _has3.default)(this.map, key)) {
        return this.map[key];
      }

      return this.defaultValue;
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      this.map[key] = value;
      return this;
    }
  }, {
    key: 'clone',
    value: function clone() {
      return new LazyMap(this.defaultValue, this.map);
    }
  }, {
    key: 'has',
    value: function has(key) {
      return (0, _has3.default)(this.map, key);
    }

    /* Use this iff value is a number */

  }, {
    key: 'inc',
    value: function inc(key) {
      var oldValue = this.get(key);
      this.set(key, oldValue + 1);
      return this;
    }

    /* Use this iff value is a number */

  }, {
    key: 'dec',
    value: function dec(key) {
      var oldValue = this.get(key);
      this.set(key, oldValue - 1);
      return this;
    }
  }]);

  return LazyMap;
}();

exports.default = LazyMap;

/***/ }),

/***/ "./src/pages/editor/components/design/utils/design-type.js":
/*!*****************************************************************!*\
  !*** ./src/pages/editor/components/design/utils/design-type.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDesignType = getDesignType;
exports.isExpectedDesginType = isExpectedDesginType;
exports.serializeDesignType = serializeDesignType;

var _isString = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");

var _isString2 = _interopRequireDefault(_isString);

var _isArray = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");

var _isArray2 = _interopRequireDefault(_isArray);

var _isNumber = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isFunction = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDesignType(editor, defaultType) {
  var designType = editor.designType;


  if ((0, _isString2.default)(designType)) {
    if ((0, _isFunction2.default)(defaultType)) {
      return defaultType(designType);
    }
    return designType;
  }

  if ((0, _isArray2.default)(designType) && designType.length > 0) {
    if ((0, _isNumber2.default)(defaultType)) {
      return designType[defaultType || 0];
    } else if ((0, _isFunction2.default)(defaultType)) {
      return defaultType(designType);
    }

    return designType[0];
  }

  throw new TypeError('designType should be a string or an array of strings');
}

function isExpectedDesginType(component, expected) {
  var type = component.type;


  if ((0, _isString2.default)(type)) {
    return expected === type;
  }

  if ((0, _isArray2.default)(type)) {
    return type.indexOf(expected) !== -1;
  }

  return false;
}

function serializeDesignType(designType) {
  if ((0, _isString2.default)(designType)) {
    return designType;
  }
  if ((0, _isArray2.default)(designType)) {
    return designType.join(' | ');
  }

  throw new TypeError('designType should be a string or an array of strings');
}

/***/ }),

/***/ "./src/pages/editor/components/design/utils/instance.js":
/*!**************************************************************!*\
  !*** ./src/pages/editor/components/design/utils/instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateInstanceList = exports.validateInstance = undefined;

var validateInstance = exports.validateInstance = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(instance) {
        var plugin, errors;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        plugin = _loader2.default.getPluginByInstance(instance);
                        _context.next = 3;
                        return plugin.validate(instance);

                    case 3:
                        errors = _context.sent;
                        return _context.abrupt("return", errors);

                    case 5:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function validateInstance(_x) {
        return _ref.apply(this, arguments);
    };
}();

// 验证所有组件，如果有错误选中并跳转到第一个有错误的组件。
// 如果没有错误，Promise resolve；如果有错误，Promise reject。
// reject 的是个数组，
// [
//   { '508516bf-d3e5-40a5-812e-834d3dee1d54': {} },
//   { 'c7c72599-2ac5-41bb-9ba0-45e8178ff5a6': { content: '请填写公告内容' } }
// ]


var validateInstanceList = exports.validateInstanceList = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(instance) {
        var _this = this;

        var _props, value, components;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _props = this.props, value = _props.value, components = _props.components;
                        return _context2.abrupt("return", new Promise(function (resolve, reject) {
                            return Promise.all(value.map(function (v) {
                                var id = _this.getUUIDFromValue(v);
                                var type = v.type;

                                var comp = (0, _find2.default)(components, function (c) {
                                    return (0, _designType.isExpectedDesginType)(c, type);
                                });
                                // 假如组件设置了 editable: false，不处罚校验
                                if (!(0, _defaultTo2.default)(comp.editable, true)) {
                                    return Promise.resolve(_defineProperty({}, id, {}));
                                }

                                return _this.validateComponentValue(v, v, {}).then(function (errors) {
                                    return _defineProperty({}, id, errors);
                                });
                            })).then(function (validationList) {
                                var validations = _assign2.default.apply(undefined, [{}].concat(_toConsumableArray(validationList)));
                                _this.setState({
                                    showError: true,
                                    validations: validations
                                }, function () {
                                    // 跳转到第一个有错误的组件
                                    var firstError = (0, _find2.default)(validationList, hasValidateError);

                                    if (firstError) {
                                        var id = Object.keys(firstError)[0];
                                        _this.scrollToPreviewItem(id);

                                        // 选中第一个有错误的组件
                                        _this.setState({
                                            selectedUUID: id
                                        });
                                    }

                                    _this.adjustHeight();
                                });

                                // 过滤所有错误信息，将数组合并为一个对象，key 是每个组件的 id
                                var validationErrors = validationList.filter(hasValidateError);
                                var hasError = !(0, _isEmpty2.default)(validationErrors);

                                if (!hasError) {
                                    resolve();
                                } else {
                                    reject(validationErrors.reduce(function (err, v) {
                                        var key = Object.keys(v)[0];
                                        if (key) {
                                            err[key] = v[key];
                                        }

                                        return err;
                                    }, {}));
                                }
                            });
                        }));

                    case 2:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function validateInstanceList(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

/**
 * 根据当前的值生成一个组件使用计数
 * @param {Array} value Design 当前的值
 * @param {Array} components Design 支持的组件列表
 */


exports.getUUIDFromInstance = getUUIDFromInstance;
exports.tagInstanceWithUUID = tagInstanceWithUUID;
exports.removeUUID = removeUUID;
exports.findFirstEditableInstance = findFirstEditableInstance;
exports.moveInstance = moveInstance;
exports.makeInstanceCountMapFromValue = makeInstanceCountMapFromValue;
exports.getSafeSelectedValueIndex = getSafeSelectedValueIndex;
exports.getBundleIdFromInstace = getBundleIdFromInstace;

var _designType = __webpack_require__(/*! ./design-type */ "./src/pages/editor/components/design/utils/design-type.js");

var _LazyMap = __webpack_require__(/*! ./LazyMap */ "./src/pages/editor/components/design/utils/LazyMap.js");

var _LazyMap2 = _interopRequireDefault(_LazyMap);

var _uuid = __webpack_require__(/*! zent/lib/utils/uuid */ "./node_modules/zent/lib/utils/uuid.js");

var _uuid2 = _interopRequireDefault(_uuid);

var _loader = __webpack_require__(/*! ../bundle/loader */ "./src/pages/editor/components/design/bundle/loader.js");

var _loader2 = _interopRequireDefault(_loader);

var _assign = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _find = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");

var _find2 = _interopRequireDefault(_find);

var _defaultTo = __webpack_require__(/*! lodash/defaultTo */ "./node_modules/lodash/defaultTo.js");

var _defaultTo2 = _interopRequireDefault(_defaultTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * instance工具函数
 */

var UUID_KEY = '__zent-design-uuid__';

function getUUIDFromInstance(instance) {
    return instance && instance[UUID_KEY];
}

function tagInstanceWithUUID(instance) {
    if (instance) {
        instance[UUID_KEY] = (0, _uuid2.default)();
    }

    return instance;
}

function removeUUID(instanceList) {
    var newInstanceList = JSON.parse(JSON.stringify(instanceList));
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = newInstanceList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var instance = _step.value;

            delete instance[UUID_KEY];
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return newInstanceList;
}

/**
 * 从 startIndex 开始往前找到第一个可以选中的值
 * @param {array} value 当前的值
 * @param {array} components 当前可用的组件列表
 * @param {number} startIndex 开始搜索的下标
 */
function findFirstEditableInstance(instanceList, startIndex) {
    var loop = function loop(i) {
        var instance = instanceList[i];
        var plugin = _loader2.default.getPluginByInstance(instance);
        if (plugin && (0, _defaultTo2.default)(plugin.editable, true)) {
            return instance;
        }
    };

    var total = instanceList.length;
    // 往前找
    for (var i = startIndex; i >= 0 && i < total; i--) {
        var instance = loop(i);
        if (instance) {
            return instance;
        }
    }

    // 往后找
    for (var _i = startIndex + 1; _i < total; _i++) {
        var _instance = loop(_i);
        if (_instance) {
            return _instance;
        }
    }

    return null;
}

/**
 * 移动实例
 * 不是仅仅交换两个位置的节点，所有中间节点都需要移位
 * 需要考虑数组中间有不可拖拽节点的情况，这种情况下 fromIndex, toIndex 的值是不包括这些节点的
 * 例如 [1, 0, 0, 1, 0, 0, 1]: fromIndex = 0, toIndex = 1 表示移动第一个和第二个 1。
 * @param instanceList
 * @param fromIndex
 * @param toIndex
 */
function moveInstance(instanceList, fromIndex, toIndex) {
    if (fromIndex === toIndex) {
        return;
    }
    var newInstanceList = [];
    var tmp = void 0;

    var passedFromIndex = false;
    var passedToIndex = false;

    if (fromIndex < toIndex) {
        // 从上拖到下面
        for (var i = 0, dragableIndex = -1; i < instanceList.length; i++) {
            var instance = instanceList[i];
            var plugin = _loader2.default.getPluginByInstance(instance);
            var dragable = plugin && (0, _defaultTo2.default)(plugin.dragable, true);
            if (dragable) {
                dragableIndex++;
            }

            /* Invariant: Each step copies one value, except one copies 2 and another doesn't copy */
            if (dragableIndex === fromIndex && !passedFromIndex) {
                tmp = instance;
                passedFromIndex = true;
            } else if (dragableIndex < toIndex && passedFromIndex) {
                newInstanceList[i - 1] = instance;
            } else if (dragableIndex === toIndex && !passedToIndex) {
                newInstanceList[i - 1] = instance;
                newInstanceList[i] = tmp;
                passedToIndex = true;
            } else {
                newInstanceList[i] = instance;
            }
        }
    } else {
        // 从下往上托
        var toInsetIndex = void 0;

        for (var _i2 = 0, _dragableIndex = -1; _i2 < instanceList.length; _i2++) {
            var _instance2 = instanceList[_i2];
            var _plugin = _loader2.default.getPluginByInstance(_instance2);
            var _dragable = _plugin && (0, _defaultTo2.default)(_plugin.dragable, true);
            if (_dragable) {
                _dragableIndex++;
            }

            /* Invariant: each step copies one value */
            if (_dragableIndex === toIndex && !passedToIndex) {
                toInsetIndex = _i2;
                newInstanceList[_i2 + 1] = _instance2;
                passedToIndex = true;
            } else if (_dragableIndex < fromIndex && passedToIndex) {
                newInstanceList[_i2 + 1] = _instance2;
            } else if (_dragableIndex === fromIndex && !passedFromIndex) {
                newInstanceList[toInsetIndex] = _instance2;
                passedFromIndex = true;
            } else {
                newInstanceList[_i2] = _instance2;
            }
        }
    }
    return newInstanceList;
}

function makeInstanceCountMapFromValue(value, components) {
    var instanceCountMap = new _LazyMap2.default(0);

    (value || []).forEach(function (val) {
        var comp = (0, _find2.default)(components, function (c) {
            return (0, _designType.isExpectedDesginType)(c, val.type);
        });
        instanceCountMap.inc((0, _designType.serializeDesignType)(comp.type));
    });

    return instanceCountMap;
}

function getSafeSelectedValueIndex(index, value) {
    return Math.min(index, value.length - 1);
}

function getBundleIdFromInstace(instance) {
    return instance.bundleId;
}

/***/ }),

/***/ "./src/pages/editor/components/design/utils/offset.js":
/*!************************************************************!*\
  !*** ./src/pages/editor/components/design/utils/offset.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = offset;
function offset(node) {
  var y = window.pageYOffset;
  var x = window.pageXOffset;
  var bb = node.getBoundingClientRect();
  return {
    top: bb.top + y,
    left: bb.left + x
  };
}

/***/ }),

/***/ "./src/pages/editor/mp/App.jsx":
/*!*************************************!*\
  !*** ./src/pages/editor/mp/App.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _ComponentList = __webpack_require__(/*! ./ComponentList */ "./src/pages/editor/mp/ComponentList.jsx");

var _ComponentList2 = _interopRequireDefault(_ComponentList);

var _index = __webpack_require__(/*! ../components/design/index */ "./src/pages/editor/components/design/index.js");

var _index2 = _interopRequireDefault(_index);

var _zent = __webpack_require__(/*! zent */ "./node_modules/zent/lib/index.js");

var _url = __webpack_require__(/*! src/common/api/url */ "./src/common/api/url.js");

var _bundle = __webpack_require__(/*! src/common/api/bundle */ "./src/common/api/bundle.js");

var bundleAPi = _interopRequireWildcard(_bundle);

var _mp = __webpack_require__(/*! src/common/api/mp */ "./src/common/api/mp.js");

var mpAPi = _interopRequireWildcard(_mp);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        var _this2 = this;

        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            bundleSerchKey: '', // bundle搜索的key
            bundleList: [], // bundle列表
            bundlePageIndex: 1,
            bundlePageSize: 10,
            allowUserQuery: true,
            pageId: '',
            contentId: '',
            structure: 'static',
            instanceList: []
        };

        _this.saveDesign = function (design) {
            _this.design = design;
        };

        _this.submit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var valid, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            valid = _this.design.validate();

                            if (valid) {
                                data = _this.design.getInstanceList();

                                console.log(JSON.stringify(data));
                            }

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            var _getQuery = (0, _url.getQuery)(),
                pageId = _getQuery.pageId,
                structure = _getQuery.structure,
                contentId = _getQuery.contentId;

            // 动态页的内容编辑不允许用户搜索


            this.setState({
                pageId: pageId,
                structure: structure,
                contentId: contentId,
                allowUserQuery: structure == 'static'
            }, function () {
                _this3.loadBundleList();
                _this3.loadInstanceList();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _state = this.state,
                bundleList = _state.bundleList,
                allowUserQuery = _state.allowUserQuery;

            return _react2.default.createElement(
                'div',
                { className: 'mp-workspace' },
                _react2.default.createElement(
                    'div',
                    { className: 'mp-workspace--toolbox' },
                    _react2.default.createElement(_ComponentList2.default, { bundleList: bundleList, allowUserQuery: allowUserQuery, onAddComponent: function onAddComponent(bundleId) {
                            _this4.onAddComponent(bundleId);
                        } })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mp-workspace--editor-wrapper' },
                    _react2.default.createElement(_index2.default, {
                        ref: this.saveDesign,
                        cache: true,
                        confirmUnsavedLeave: false,
                        scrollTopOffset: -270
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'design-example-actions' },
                        _react2.default.createElement(
                            _zent.Button,
                            { type: 'primary', onClick: this.submit },
                            '\u4E0A\u67B6'
                        ),
                        _react2.default.createElement(
                            _zent.Button,
                            { onClick: this.notImplemented },
                            '\u4FDD\u5B58\u8349\u7A3F'
                        ),
                        _react2.default.createElement(
                            _zent.Button,
                            { onClick: this.notImplemented },
                            '\u9884\u89C8'
                        )
                    )
                )
            );
        }
    }, {
        key: 'onAddComponent',
        value: function onAddComponent(bundleId) {
            this.design.addInstanceByBundle(bundleId);
        }
    }, {
        key: 'notImplemented',
        value: function notImplemented() {
            _zent.Notify.error('仅作为演示，功能未开发');
        }
    }, {
        key: 'loadBundleList',


        /**
         * 加载bundle
         */
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _state2, pageId, pageSize, pageNo, bundleSerchKey, _ref3, bundleList;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _state2 = this.state, pageId = _state2.pageId, pageSize = _state2.pageSize, pageNo = _state2.pageNo, bundleSerchKey = _state2.bundleSerchKey;
                                _context2.next = 3;
                                return bundleAPi.queryBundle({ pageId: pageId, pageSize: pageSize, pageNo: pageNo, key: bundleSerchKey });

                            case 3:
                                _ref3 = _context2.sent;
                                bundleList = _ref3.list;

                                this.setState({ bundleList: bundleList });

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function loadBundleList() {
                return _ref2.apply(this, arguments);
            }

            return loadBundleList;
        }()

        /**
         * 加载bundle配置
         */

    }, {
        key: 'loadInstanceList',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _state3, pageId, structure, contentId, result, _result;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _state3 = this.state, pageId = _state3.pageId, structure = _state3.structure, contentId = _state3.contentId;

                                if (!contentId) {
                                    _context3.next = 8;
                                    break;
                                }

                                _context3.next = 4;
                                return mpAPi.getContentDetail(contentId);

                            case 4:
                                result = _context3.sent;

                                this.design.setInstanceList(result.instanceList);
                                _context3.next = 16;
                                break;

                            case 8:
                                if (!pageId) {
                                    _context3.next = 15;
                                    break;
                                }

                                _context3.next = 11;
                                return mpAPi.getPageDetail(pageId);

                            case 11:
                                _result = _context3.sent;

                                this.design.setInstanceList(_result.instanceList);
                                _context3.next = 16;
                                break;

                            case 15:
                                this.design.initInstanceList({
                                    groupId: 'org.tsxuemu.bundle.example',
                                    artifactId: 'config',
                                    version: '1.0.0',
                                    classifier: ''
                                });

                            case 16:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function loadInstanceList() {
                return _ref4.apply(this, arguments);
            }

            return loadInstanceList;
        }()
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ "./src/pages/editor/mp/ComponentList.jsx":
/*!***********************************************!*\
  !*** ./src/pages/editor/mp/ComponentList.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _zent = __webpack_require__(/*! zent */ "./node_modules/zent/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentList = function (_React$Component) {
    _inherits(ComponentList, _React$Component);

    function ComponentList() {
        _classCallCheck(this, ComponentList);

        return _possibleConstructorReturn(this, (ComponentList.__proto__ || Object.getPrototypeOf(ComponentList)).apply(this, arguments));
    }

    _createClass(ComponentList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                bundleList = _props.bundleList,
                allowUserQuery = _props.allowUserQuery;

            return _react2.default.createElement(
                'div',
                null,
                allowUserQuery && _react2.default.createElement(_zent.SearchInput, {
                    placeholder: '\u641C\u7D22'
                }),
                bundleList.map(function (bundle) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'component-panel' },
                        _react2.default.createElement(
                            'div',
                            null,
                            bundle.name
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _zent.Button,
                                { type: 'success', onClick: function onClick() {
                                        _this2.props.onAddComponent && _this2.props.onAddComponent(bundle.bundleId);
                                    }, outline: true },
                                '\u4F7F\u7528'
                            )
                        )
                    );
                })
            );
        }
    }]);

    return ComponentList;
}(_react2.default.Component);

exports.default = ComponentList;

/***/ }),

/***/ "./src/pages/editor/mp/main.js":
/*!*************************************!*\
  !*** ./src/pages/editor/mp/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(/*! ./App.jsx */ "./src/pages/editor/mp/App.jsx");

var _App2 = _interopRequireDefault(_App);

__webpack_require__(/*! ./main.pcss */ "./src/pages/editor/mp/main.pcss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app'), function () {});

/***/ }),

/***/ "./src/pages/editor/mp/main.pcss":
/*!***************************************!*\
  !*** ./src/pages/editor/mp/main.pcss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dll-reference _dll_base":
/*!****************************!*\
  !*** external "_dll_base" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = _dll_base;

/***/ })

/******/ });