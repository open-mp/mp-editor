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

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/@babel/runtime/node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/object/create.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/object/create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/@babel/runtime/node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/object/keys.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/core-js/object/keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/@babel/runtime/node_modules/core-js/library/fn/object/keys.js");

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

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/fn/object/assign.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/fn/object/assign.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/fn/object/create.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/fn/object/create.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/fn/object/keys.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/fn/object/keys.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_a-function.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_a-function.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_an-object.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_an-object.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_array-includes.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_array-includes.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_cof.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_cof.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_core.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_core.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_ctx.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_ctx.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_defined.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_defined.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_descriptors.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_descriptors.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_dom-create.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_dom-create.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_export.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_export.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_fails.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_fails.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_global.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_global.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_has.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_has.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_hide.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_hide.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_html.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_html.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_iobject.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_iobject.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_is-object.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_is-object.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_library.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_library.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-assign.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-assign.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-create.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-create.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-dp.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-dp.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-dps.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-dps.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-gops.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-gops.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-keys.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-keys.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-pie.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-pie.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-sap.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-sap.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_property-desc.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_property-desc.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_shared-key.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_shared-key.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_shared.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_shared.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-integer.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-integer.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-iobject.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-length.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-length.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-object.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-object.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-primitive.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-primitive.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_uid.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/_uid.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/es6.object.assign.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/es6.object.create.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/es6.object.create.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/es6.object.keys.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/@babel/runtime/node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!*********************************************************************************************!*\
  !*** delegated ./node_modules/babel-runtime/helpers/typeof.js from dll-reference _dll_base ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(45);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/classnames/index.js from dll-reference _dll_base ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(7);

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

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(32);

/***/ }),

/***/ "./node_modules/lodash/defaultTo.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/lodash/defaultTo.js from dll-reference _dll_base ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(375);

/***/ }),

/***/ "./node_modules/lodash/find.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/lodash/find.js from dll-reference _dll_base ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(104);

/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/lodash/findIndex.js from dll-reference _dll_base ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(128);

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/lodash/get.js from dll-reference _dll_base ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(36);

/***/ }),

/***/ "./node_modules/lodash/has.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/lodash/has.js from dll-reference _dll_base ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(70);

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/lodash/isArray.js from dll-reference _dll_base ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(11);

/***/ }),

/***/ "./node_modules/lodash/isEmpty.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/lodash/isEmpty.js from dll-reference _dll_base ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(133);

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/lodash/isFunction.js from dll-reference _dll_base ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(17);

/***/ }),

/***/ "./node_modules/lodash/isNumber.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/lodash/isNumber.js from dll-reference _dll_base ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(82);

/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/lodash/isPlainObject.js from dll-reference _dll_base ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(155);

/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/lodash/isString.js from dll-reference _dll_base ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(40);

/***/ }),

/***/ "./node_modules/lodash/isUndefined.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/lodash/isUndefined.js from dll-reference _dll_base ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(374);

/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/lodash/noop.js from dll-reference _dll_base ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(19);

/***/ }),

/***/ "./node_modules/lodash/pick.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/lodash/pick.js from dll-reference _dll_base ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(389);

/***/ }),

/***/ "./node_modules/lodash/some.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/lodash/some.js from dll-reference _dll_base ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(164);

/***/ }),

/***/ "./node_modules/lodash/startsWith.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/lodash/startsWith.js from dll-reference _dll_base ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(393);

/***/ }),

/***/ "./node_modules/lodash/uniqueId.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/lodash/uniqueId.js from dll-reference _dll_base ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(224);

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

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(5);

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

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(21);

/***/ }),

/***/ "./node_modules/react-motion/lib/react-motion.js":
/*!**********************************************************************************************!*\
  !*** delegated ./node_modules/react-motion/lib/react-motion.js from dll-reference _dll_base ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(189);

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/react-redux/es/index.js from dll-reference _dll_base ***!
  \*************************************************************************************/
/*! exports provided: Provider, createProvider, connectAdvanced, connect */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(181);

/***/ }),

/***/ "./node_modules/react/index.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference _dll_base ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(0);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/redux/es/redux.js from dll-reference _dll_base ***!
  \*******************************************************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(486);

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

/***/ "./node_modules/zent/lib/alert/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/alert/index.js from dll-reference _dll_base ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(296);

/***/ }),

/***/ "./node_modules/zent/lib/button/index.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/button/index.js from dll-reference _dll_base ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(68);

/***/ }),

/***/ "./node_modules/zent/lib/checkbox/index.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/checkbox/index.js from dll-reference _dll_base ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(50);

/***/ }),

/***/ "./node_modules/zent/lib/colorpicker/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/colorpicker/index.js from dll-reference _dll_base ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(348);

/***/ }),

/***/ "./node_modules/zent/lib/dialog/index.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/dialog/index.js from dll-reference _dll_base ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(257);

/***/ }),

/***/ "./node_modules/zent/lib/form/index.js":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/form/index.js from dll-reference _dll_base ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(854);

/***/ }),

/***/ "./node_modules/zent/lib/icon/index.js":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/icon/index.js from dll-reference _dll_base ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(22);

/***/ }),

/***/ "./node_modules/zent/lib/input/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/input/index.js from dll-reference _dll_base ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(35);

/***/ }),

/***/ "./node_modules/zent/lib/notify/index.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/notify/index.js from dll-reference _dll_base ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(160);

/***/ }),

/***/ "./node_modules/zent/lib/pop/index.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/pop/index.js from dll-reference _dll_base ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(90);

/***/ }),

/***/ "./node_modules/zent/lib/radio/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/radio/index.js from dll-reference _dll_base ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(263);

/***/ }),

/***/ "./node_modules/zent/lib/slider/index.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/slider/index.js from dll-reference _dll_base ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(957);

/***/ }),

/***/ "./node_modules/zent/lib/sweetalert/index.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/sweetalert/index.js from dll-reference _dll_base ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(987);

/***/ }),

/***/ "./node_modules/zent/lib/tabs/index.js":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/tabs/index.js from dll-reference _dll_base ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(343);

/***/ }),

/***/ "./node_modules/zent/lib/utils/createObjectURL.js":
/*!********************************************************!*\
  !*** ./node_modules/zent/lib/utils/createObjectURL.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createObjectURL;
function createObjectURL(object) {
  return window.URL ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
}

/***/ }),

/***/ "./node_modules/zent/lib/utils/reorder.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/utils/reorder.js from dll-reference _dll_base ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(969);

/***/ }),

/***/ "./node_modules/zent/lib/utils/scroll.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/utils/scroll.js from dll-reference _dll_base ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(388);

/***/ }),

/***/ "./node_modules/zent/lib/utils/shallowEqual.js":
/*!*****************************************************!*\
  !*** ./node_modules/zent/lib/utils/shallowEqual.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Adapted from https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/shallowEqual.js
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  }
  // Step 6.a: NaN == NaN
  return x !== x && y !== y; // eslint-disable-line
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if ((typeof objA === 'undefined' ? 'undefined' : (0, _typeof3['default'])(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : (0, _typeof3['default'])(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

exports['default'] = shallowEqual;

/***/ }),

/***/ "./node_modules/zent/lib/utils/storage.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/utils/storage.js from dll-reference _dll_base ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(802);

/***/ }),

/***/ "./node_modules/zent/lib/utils/uuid.js":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/utils/uuid.js from dll-reference _dll_base ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(803);

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

var _alert = __webpack_require__(/*! zent/lib/alert */ "./node_modules/zent/lib/alert/index.js");

var _alert2 = _interopRequireDefault(_alert);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _assign2 = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");

var _assign3 = _interopRequireDefault(_assign2);

var _find = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");

var _find2 = _interopRequireDefault(_find);

var _findIndex2 = __webpack_require__(/*! lodash/findIndex */ "./node_modules/lodash/findIndex.js");

var _findIndex3 = _interopRequireDefault(_findIndex2);

var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isUndefined = __webpack_require__(/*! lodash/isUndefined */ "./node_modules/lodash/isUndefined.js");

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _defaultTo = __webpack_require__(/*! lodash/defaultTo */ "./node_modules/lodash/defaultTo.js");

var _defaultTo2 = _interopRequireDefault(_defaultTo);

var _isFunction = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _storage = __webpack_require__(/*! zent/lib/utils/storage */ "./node_modules/zent/lib/utils/storage.js");

var storage = _interopRequireWildcard(_storage);

var _uuid = __webpack_require__(/*! zent/lib/utils/uuid */ "./node_modules/zent/lib/utils/uuid.js");

var _uuid2 = _interopRequireDefault(_uuid);

var _DesignPreview = __webpack_require__(/*! ./preview/DesignPreview */ "./src/pages/editor/components/design/preview/DesignPreview.jsx");

var _DesignPreview2 = _interopRequireDefault(_DesignPreview);

var _designType = __webpack_require__(/*! ./utils/design-type */ "./src/pages/editor/components/design/utils/design-type.js");

var _LazyMap = __webpack_require__(/*! ./utils/LazyMap */ "./src/pages/editor/components/design/utils/LazyMap.js");

var _LazyMap2 = _interopRequireDefault(_LazyMap);

var _constants = __webpack_require__(/*! ./constants */ "./src/pages/editor/components/design/constants.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 设计文档
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 预览
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * `DesignPreview` 组件是整个预览块的包裹层，负责渲染左侧预览的框架。`DesignPreview` 和 `config`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 子组件是相关的，`config` 组件是知道 `DesignPreview` 的存在的；而 `DesignPreview` 的渲染是
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 根据 `config` 生成的数据进行的。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ⚠️注意：`config` 自身有相应的负责渲染预览的模块，这个和 `DesignPreview` 不冲突，可以理解成
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * `config` 可以控制一些预览界面的全局样式。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 预览界面中按模块分成很多区域，每个区域是一个 `DesignPreviewItem`，默认的 `DesignPreviewItem`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 实现可以由外部覆盖。负责每个区域的事件交互的是另一个组件 `DesignPreviewController`，这个组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 负责处理添加、删除、编辑、选中以及拖拽操作，`DesignPreviewController` 的实现也是可以由外部覆盖的。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ⚠️注意：重写的时候所有交互都需要再这个组件里面处理。`DesignPreviewController` 内部会渲染该区域
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 对应组件的预览模块，预览模块有两个参数：`value` 和 `design`。`value` 是当前的值，`design` 是
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  `Design` 组件提供的一些操作，一般用不到。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 编辑
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * `DesignEditorItem` 是每个区域对应的编辑区域，这个区域的显示隐藏由 `Design` 控制。`DesignEditorItem`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 可以由外部覆盖重写。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * `DesignEditorAddComponent` 这个组件负责枚举所有**可以添加的组件**，暂不支持由外部自定义组件实现。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * `DesignEditor` 是所有编辑组件的基类，这个类提供了一些常用的方法（例如 `onChange` 事件的处理函数），
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 在子类里面可以直接使用。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var UUID_KEY = '__zent-design-uuid__';
var CACHE_KEY = '__zent-design-cache-storage__';

var hasValidateError = function hasValidateError(v) {
  return !(0, _isEmpty2.default)(v[Object.keys(v)[0]]);
};

var Design = function (_PureComponent) {
  _inherits(Design, _PureComponent);

  function Design(props) {
    _classCallCheck(this, Design);

    var _this = _possibleConstructorReturn(this, (Design.__proto__ || Object.getPrototypeOf(Design)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value,
        defaultSelectedIndex = props.defaultSelectedIndex;


    _this.validateCacheProps(props);

    tagValuesWithUUID(value);

    var safeValueIndex = getSafeSelectedValueIndex(defaultSelectedIndex, value);
    var selectedValue = value[safeValueIndex];

    _this.state = {
      // 当前选中的组件对应的 UUID
      selectedUUID: _this.getUUIDFromValue(selectedValue),

      // 每个组件当前已经添加的个数
      componentInstanceCount: makeInstanceCountMapFromValue(props.value, props.components),

      // 外面没传的时候用 state 上的 settings
      settings: {},

      // 是否显示添加组件的浮层
      showAddComponentOverlay: false,

      // 添加组件浮层的位置
      addComponentOverlayPosition: _constants.ADD_COMPONENT_OVERLAY_POSITION.UNKNOWN,

      // 可添加的组件列表
      appendableComponents: [],

      // 当前所有组件的 validation 信息
      // key 是 value 的 UUID
      validations: {},

      // 是否强制显示错误
      showError: false,

      // 是否显示从缓存中恢复的提示
      showRestoreFromCache: false,

      // 当 preview 很长时，为了对齐 preview 底部需要的额外空间
      bottomGap: 0
    };
    return _this;
  }

  _createClass(Design, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          prefix = _props.prefix,
          preview = _props.preview,
          cacheRestoreMessage = _props.cacheRestoreMessage,
          children = _props.children;
      var _state = this.state,
          showRestoreFromCache = _state.showRestoreFromCache,
          bottomGap = _state.bottomGap;

      var cls = (0, _classnames2.default)(prefix + '-design', className);

      return _react2.default.createElement(
        'div',
        { className: cls, style: { paddingBottom: bottomGap } },
        showRestoreFromCache && _react2.default.createElement(
          _alert2.default,
          {
            className: prefix + '-design__restore-cache-alert',
            closable: true,
            onClose: this.onRestoreCacheAlertClose,
            type: 'warning'
          },
          cacheRestoreMessage,
          _react2.default.createElement(
            'a',
            {
              className: prefix + '-design__restore-cache-alert-use',
              onClick: this.restoreCache,
              href: 'javascript:void(0);'
            },
            '\u4F7F\u7528'
          )
        ),
        this.renderPreview(preview)
      );
    }
  }, {
    key: 'renderPreview',
    value: function renderPreview(preview) {
      var _props2 = this.props,
          components = _props2.components,
          value = _props2.value,
          disabled = _props2.disabled,
          settings = _props2.settings,
          previewFooter = _props2.previewFooter,
          globalConfig = _props2.globalConfig;
      var _state2 = this.state,
          selectedUUID = _state2.selectedUUID,
          appendableComponents = _state2.appendableComponents,
          showAddComponentOverlay = _state2.showAddComponentOverlay,
          addComponentOverlayPosition = _state2.addComponentOverlayPosition,
          validations = _state2.validations,
          showError = _state2.showError,
          managedSettings = _state2.settings,
          componentInstanceCount = _state2.componentInstanceCount;


      return _react2.default.createElement(preview, {
        components: components,
        value: value,
        validations: validations,
        showError: showError,
        settings: settings || managedSettings,
        onSettingsChange: this.onSettingsChange,
        footer: previewFooter,
        componentInstanceCount: componentInstanceCount,
        onComponentValueChange: this.onComponentValueChange,
        onAddComponent: this.onAdd,
        appendableComponents: appendableComponents,
        selectedUUID: selectedUUID,
        getUUIDFromValue: this.getUUIDFromValue,
        showAddComponentOverlay: showAddComponentOverlay,
        addComponentOverlayPosition: addComponentOverlayPosition,
        onAdd: this.onShowAddComponentOverlay,
        onEdit: this.onShowEditComponentOverlay,
        onSelect: this.onSelect,
        onMove: this.onMove,
        onDelete: this.onDelete,
        design: this.design,
        globalConfig: globalConfig,
        disabled: disabled,
        ref: this.savePreview
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.cacheAppendableComponents(this.props.components);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setupBeforeUnloadHook();
      this.checkCache();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setupBeforeUnloadHook();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.uninstallBeforeUnloadHook();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.validateCacheProps(nextProps);

      var shouldUpdateInstanceCountMap = false;

      if (nextProps.value !== this.props.value) {
        tagValuesWithUUID(nextProps.value);
        shouldUpdateInstanceCountMap = true;
      }

      if (nextProps.components !== this.props.components) {
        this.cacheAppendableComponents(nextProps.components);
        shouldUpdateInstanceCountMap = true;
      }

      // 如果当前没有选中的并且 value 或者 defaultSelectedIndex 改变的话
      // 重新尝试设置默认值
      if (!this.hasSelected() && (nextProps.defaultSelectedIndex !== this.props.defaultSelectedIndex || nextProps.value !== this.props.value)) {
        var value = nextProps.value,
            defaultSelectedIndex = nextProps.defaultSelectedIndex;

        this.selectByIndex(defaultSelectedIndex, value);
      }

      if (shouldUpdateInstanceCountMap) {
        this.setState({
          componentInstanceCount: makeInstanceCountMapFromValue(nextProps.value, nextProps.components)
        });
      }
    }
  }, {
    key: 'cacheAppendableComponents',
    value: function cacheAppendableComponents(components) {
      this.setState({
        appendableComponents: components.filter(function (c) {
          return c.appendable === undefined || c.appendable;
        })
      });
    }

    // 打开右侧添加新组件的弹层


    // 编辑一个已有组件


    // 选中一个组件


    // 添加一个新组件


    // 删除一个组件


    // 验证所有组件，如果有错误选中并跳转到第一个有错误的组件。
    // 如果没有错误，Promise resolve；如果有错误，Promise reject。
    // reject 的是个数组，
    // [
    //   { '508516bf-d3e5-40a5-812e-834d3dee1d54': {} },
    //   { 'c7c72599-2ac5-41bb-9ba0-45e8178ff5a6': { content: '请填写公告内容' } }
    // ]


    // 保存数据后请调用这个函数通知组件数据已经保存

  }, {
    key: 'toggleEditOrAdd',
    value: function toggleEditOrAdd(component, showAdd) {
      var addPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _constants.ADD_COMPONENT_OVERLAY_POSITION.UNKNOWN;
      var _state3 = this.state,
          showAddComponentOverlay = _state3.showAddComponentOverlay,
          addComponentOverlayPosition = _state3.addComponentOverlayPosition;

      var id = this.getUUIDFromValue(component);

      if (this.isSelected(component) && showAddComponentOverlay === showAdd && addPosition === addComponentOverlayPosition) {
        return;
      }

      this.setState({
        selectedUUID: id,
        showAddComponentOverlay: showAdd,
        addComponentOverlayPosition: addPosition
      });
      this.adjustHeight();
    }
  }, {
    key: 'getUUIDFromValue',
    value: function getUUIDFromValue(value) {
      return value && value[UUID_KEY];
    }
  }, {
    key: 'setUUIDForValue',
    value: function setUUIDForValue(value, id) {
      if (value) {
        value[UUID_KEY] = id;
      }

      return value;
    }
  }, {
    key: 'scrollToPreviewItem',


    // 滚动到第一个有错误的组件
    value: function scrollToPreviewItem(id) {
      if (this.preview) {
        var _props3 = this.props,
            scrollTopOffset = _props3.scrollTopOffset,
            scrollLeftOffset = _props3.scrollLeftOffset;

        this.preview.scrollToItem && this.preview.scrollToItem(id, {
          top: scrollTopOffset,
          left: scrollLeftOffset
        });
      }
    }

    // 调整 Design 的高度，因为 editor 是 position: absolute 的，所以需要动态的更新
    // 实际并未改变高度，而是设置了margin/padding

  }, {
    key: 'trackValueChange',


    // 调用 onChange 的统一入口，用于处理一些需要知道有没有修改过值的情况
    value: function trackValueChange(newValue) {
      var writeCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var onChange = this.props.onChange;

      onChange(newValue);

      if (!this._dirty) {
        this._dirty = true;
      }

      if (writeCache) {
        this.writeCache(newValue);
      }

      this.adjustHeight();
    }
  }, {
    key: 'setupBeforeUnloadHook',
    value: function setupBeforeUnloadHook() {
      var confirmUnsavedLeave = this.props.confirmUnsavedLeave;


      if (this._hasBeforeUnloadHook || !confirmUnsavedLeave) {
        return;
      }

      window.addEventListener('beforeunload', this.onBeforeWindowUnload);
      this._hasBeforeUnloadHook = true;
    }
  }, {
    key: 'uninstallBeforeUnloadHook',
    value: function uninstallBeforeUnloadHook() {
      window.removeEventListener('beforeunload', this.onBeforeWindowUnload);
      this._hasBeforeUnloadHook = false;
    }
  }, {
    key: 'validateCacheProps',


    // 缓存相关的函数
    value: function validateCacheProps(props) {
      props = props || this.props;
      var _props4 = props,
          cache = _props4.cache,
          cacheId = _props4.cacheId;

      if (cache && !cacheId) {
        throw new Error('Design: cacheId is required when cache is on');
      }
    }
  }, {
    key: 'checkCache',
    value: function checkCache() {
      var cache = this.props.cache;


      if (cache) {
        var cachedValue = this.readCache();

        if (cachedValue !== storage.NOT_FOUND) {
          this.setState({
            showRestoreFromCache: true
          });
        }
      }
    }
  }, {
    key: 'readCache',
    value: function readCache() {
      var cache = this.props.cache;

      if (!cache) {
        return storage.NOT_FOUND;
      }

      var cacheId = this.props.cacheId;

      return storage.read(CACHE_KEY, cacheId);
    }
  }, {
    key: 'writeCache',
    value: function writeCache(value) {
      var cache = this.props.cache;

      if (!cache) {
        return false;
      }

      var cacheId = this.props.cacheId;

      return storage.write(CACHE_KEY, cacheId, value);
    }
  }, {
    key: 'removeCache',
    value: function removeCache() {
      // 这个函数不需要检查有没有开启缓存，强制清除
      var cacheId = this.props.cacheId;

      return storage.write(CACHE_KEY, cacheId, undefined);
    }

    // 关闭提示，但是不清楚缓存


    // 恢复缓存的数据并删除缓存

  }, {
    key: 'getDecoratedComponentInstance',


    // Dummy method to make Design and DesignWithDnd compatible at source code level
    value: function getDecoratedComponentInstance() {
      return this;
    }

    // Actions on design

  }]);

  return Design;
}(_react.PureComponent);

// ================================================
// 工具函数
// ================================================

Design.propTypes = {
  components: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    // 组件类型
    type: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]).isRequired,

    // 预览这个组件的 Component
    preview: _propTypes2.default.func.isRequired,

    // 预览组件的包裹层
    previewItem: _propTypes2.default.func,

    // 所有预览界面上的事件都是在这个里面处理的
    previewController: _propTypes2.default.func,

    // 编辑这个组件的 Component
    editor: _propTypes2.default.func.isRequired,

    // 编辑组件的包裹层
    editorItem: _propTypes2.default.func,

    // 传给 editor 的额外 props
    editorProps: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]),

    // 传给 preview 的额外 props
    previewProps: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]),

    // 组件是否可以拖拽
    dragable: _propTypes2.default.bool,

    // 组件是否出现在添加组件的列表里面
    appendable: _propTypes2.default.bool,

    // 是否显示右下角的编辑区域(加内容/删除)
    // 如果要单独控制删除/加内容，请使用 canDelete 和 canInsert 来控制
    // 如果要自定义编辑区域，可以通过重写 previewController 的方式来做。
    configurable: _propTypes2.default.bool,

    // 是否可以删除
    canDelete: _propTypes2.default.bool,

    // hover 的时候时候显示添加组件的按钮
    canInsert: _propTypes2.default.bool,

    // 组件是否可以编辑
    // 可以选中的组件一定是可以编辑的
    // 不可编辑的组件不可选中，只能展示。
    // 右下角的编辑区域由 configurable 单独控制
    editable: _propTypes2.default.bool,

    // 选中时是否高亮
    highlightWhenSelect: _propTypes2.default.bool,

    // 组件可以添加的最大次数
    limit: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),

    // 组件达到最大添加次数后，鼠标移上去的提示
    limitMessage: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),

    // 是否可以添加组件的回调函数，返回一个 Promise
    shouldCreate: _propTypes2.default.func
  })).isRequired,

  value: _propTypes2.default.arrayOf(_propTypes2.default.object),

  // Design 组件通用的全局设置
  settings: _propTypes2.default.object,

  // settings 改变的回调函数
  onSettingsChange: function onSettingsChange(props, propName, componentName) {
    if (props.settings && !(0, _isFunction2.default)(props[propName])) {
      throw new Error('Invalid prop ' + propName + ' supplied to ' + componentName + ', expects a function.');
    }
  },


  // 默认选中的组件下标
  defaultSelectedIndex: _propTypes2.default.number,

  // onChange(value: object)
  onChange: _propTypes2.default.func.isRequired,

  // 用来渲染整个 Design 组件
  preview: _propTypes2.default.func,

  // 预览部分底部的额外信息
  previewFooter: _propTypes2.default.node,

  // 有未保存数据关闭窗口时需要用户确认
  // 离开时的确认文案新版本的浏览器是不能自定义的。
  // https://www.chromestatus.com/feature/5349061406228480
  confirmUnsavedLeave: _propTypes2.default.bool,

  // 是否将未保存的数据暂存到 localStorage 中
  // 下次打开时如果有未保存的数据会提示从 localStorage 中恢复
  // 这个 props 不支持动态修改，只会在 mount 的时候检查一次状态
  cache: _propTypes2.default.bool,

  // Design 实例的缓存 id，根据这个 id 识别缓存
  cacheId: _propTypes2.default.string,

  // 恢复缓存时的提示文案
  cacheRestoreMessage: _propTypes2.default.string,

  // 是否禁用编辑功能
  // 开启后，会忽略 components 里面的 editable 设置，全部不可编辑
  disabled: _propTypes2.default.bool,

  // 一些用户自定义的全局配置
  globalConfig: _propTypes2.default.object,

  // 滚动到顶部时的偏移量
  scrollTopOffset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),

  // 滚动到左侧时的偏移量
  scrollLeftOffset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),

  className: _propTypes2.default.string,

  prefix: _propTypes2.default.string
};
Design.defaultProps = {
  preview: _DesignPreview2.default,
  value: [],
  defaultSelectedIndex: -1,
  globalConfig: {},
  confirmUnsavedLeave: true,
  cacheToLocalStorage: false,
  cacheRestoreMessage: '提示：在浏览器中发现未提交的内容，是否使用该内容替换当前内容？',
  scrollTopOffset: -10,
  scrollLeftOffset: -10,
  prefix: 'mp'
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onSettingsChange = function (value) {
    var _props5 = _this2.props,
        settings = _props5.settings,
        onSettingsChange = _props5.onSettingsChange;

    var onSettingsChangeExists = (0, _isFunction2.default)(onSettingsChange);

    if (settings && !onSettingsChangeExists) {
      throw new Error('Expects onSettingsChange to be a function');
    }

    if (settings && onSettingsChangeExists) {
      onSettingsChange(_extends({}, settings, value));
    }

    if (!settings) {
      _this2.setState({
        settings: _extends({}, _this2.state.settings, value)
      });
    }
  };

  this.onComponentValueChange = function (identity) {
    return function (diff) {
      var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var value = _this2.props.value;

      var newComponentValue = replace ? (0, _assign3.default)(_defineProperty({}, UUID_KEY, _this2.getUUIDFromValue(identity)), diff) : (0, _assign3.default)({}, identity, diff);
      var newValue = value.map(function (v) {
        return v === identity ? newComponentValue : v;
      });
      var changedProps = Object.keys(diff);

      _this2.trackValueChange(newValue);
      _this2.validateComponentValue(newComponentValue, identity, changedProps).then(function (errors) {
        var id = _this2.getUUIDFromValue(newComponentValue);
        _this2.setValidation(_defineProperty({}, id, errors));
      });
    };
  };

  this.validateComponentValue = function (value, prevValue, changedProps) {
    var type = value.type;
    var components = _this2.props.components;

    var comp = (0, _find2.default)(components, function (c) {
      return (0, _designType.isExpectedDesginType)(c, type);
    });
    var validate = comp.editor.validate;

    var p = validate(value, prevValue, changedProps);

    return p;
  };

  this.onShowAddComponentOverlay = function (component, addPosition) {
    _this2.toggleEditOrAdd(component, true, addPosition);
  };

  this.onShowEditComponentOverlay = function (component) {
    _this2.toggleEditOrAdd(component, false);

    // 将当前组件滚动到顶部
    var id = _this2.getUUIDFromValue(component);
    _this2.scrollToPreviewItem(id);
  };

  this.onSelect = function (component) {
    var id = _this2.getUUIDFromValue(component);
    var showAddComponentOverlay = _this2.state.showAddComponentOverlay;


    if (_this2.isSelected(component) && !showAddComponentOverlay) {
      return;
    }

    _this2.setState({
      selectedUUID: id,
      showAddComponentOverlay: false
    });

    _this2.adjustHeight();
  };

  this.onAdd = function (component, fromSelected) {
    var _props6 = _this2.props,
        value = _props6.value,
        settings = _props6.settings,
        globalConfig = _props6.globalConfig;
    var editor = component.editor,
        defaultType = component.defaultType;

    var instance = editor.getInitialValue({
      settings: settings,
      globalConfig: globalConfig
    });
    instance.type = (0, _designType.getDesignType)(editor, defaultType);
    var id = (0, _uuid2.default)();
    _this2.setUUIDForValue(instance, id);

    /**
     * 添加有两种来源：底部区域或者弹层。
     * 如果来自底部的话，就在当前数组最后加；如果来自弹层就在当前选中的那个组件后面加
     */
    var newValue = void 0;
    if (fromSelected) {
      newValue = value.slice();
      var addComponentOverlayPosition = _this2.state.addComponentOverlayPosition;
      var selectedUUID = _this2.state.selectedUUID;

      var selectedIndex = (0, _findIndex3.default)(value, _defineProperty({}, UUID_KEY, selectedUUID));

      // 两种位置，插入到当前选中的前面或者后面
      var delta = addComponentOverlayPosition === _constants.ADD_COMPONENT_OVERLAY_POSITION.TOP ? 0 : 1;
      newValue.splice(selectedIndex + delta, 0, instance);
    } else {
      newValue = value.concat(instance);
    }

    _this2.trackValueChange(newValue);
    _this2.onSelect(instance);
  };

  this.onDelete = function (component) {
    var _props7 = _this2.props,
        value = _props7.value,
        components = _props7.components;

    var nextIndex = -1;
    var newValue = value.filter(function (v, idx) {
      var skip = v !== component;
      if (!skip) {
        nextIndex = idx - 1;
      }
      return skip;
    });

    var newState = {
      showAddComponentOverlay: false
    };

    // 删除选中项目后默认选中前一项可选的，如果不存在则往后找一个可选项
    var componentUUID = _this2.getUUIDFromValue(component);
    if (componentUUID === _this2.state.selectedUUID) {
      var nextSelectedValue = findFirstEditableSibling(newValue, components, nextIndex);
      var nextUUID = _this2.getUUIDFromValue(nextSelectedValue);
      newState.selectedUUID = nextUUID;
    }

    _this2.trackValueChange(newValue);
    _this2.setState(newState);

    _this2.adjustHeight();
  };

  this.onMove = function (fromIndex, toIndex) {
    if (fromIndex === toIndex) {
      return;
    }

    var _props8 = _this2.props,
        value = _props8.value,
        components = _props8.components;

    var newValue = [];
    var tmp = void 0;

    /**
     * 这个算法不是仅仅交换两个位置的节点，所有中间节点都需要移位
     * 需要考虑数组中间有不可拖拽节点的情况，这种情况下 fromIndex, toIndex 的值是不包括这些节点的
     * 例如 [1, 0, 0, 1, 0, 0, 1]: fromIndex = 0, toIndex = 1 表示移动第一个和第二个 1。
     */
    var passedFromIndex = false;
    var passedToIndex = false;

    if (fromIndex < toIndex) {
      var _loop = function _loop(i, _dragableIndex) {
        var val = value[i];

        var comp = (0, _find2.default)(components, function (c) {
          return (0, _designType.isExpectedDesginType)(c, val.type);
        });
        var dragable = comp && (0, _defaultTo2.default)(comp.dragable, true);
        if (dragable) {
          _dragableIndex++;
        }

        /* Invariant: Each step copies one value, except one copies 2 and another doesn't copy */
        if (_dragableIndex === fromIndex && !passedFromIndex) {
          tmp = val;
          passedFromIndex = true;
        } else if (_dragableIndex < toIndex && passedFromIndex) {
          newValue[i - 1] = val;
        } else if (_dragableIndex === toIndex && !passedToIndex) {
          newValue[i - 1] = val;
          newValue[i] = tmp;
          passedToIndex = true;
        } else {
          newValue[i] = val;
        }
        dragableIndex = _dragableIndex;
      };

      for (var i = 0, dragableIndex = -1; i < value.length; i++) {
        _loop(i, dragableIndex);
      }
    } else {
      var toInsetIndex = void 0;

      var _loop2 = function _loop2(i, _dragableIndex3) {
        var val = value[i];

        var comp = (0, _find2.default)(components, function (c) {
          return (0, _designType.isExpectedDesginType)(c, val.type);
        });
        var dragable = comp && (0, _defaultTo2.default)(comp.dragable, true);
        if (dragable) {
          _dragableIndex3++;
        }

        /* Invariant: each step copies one value */
        if (_dragableIndex3 === toIndex && !passedToIndex) {
          toInsetIndex = i;
          newValue[i + 1] = val;
          passedToIndex = true;
        } else if (_dragableIndex3 < fromIndex && passedToIndex) {
          newValue[i + 1] = val;
        } else if (_dragableIndex3 === fromIndex && !passedFromIndex) {
          newValue[toInsetIndex] = val;
          passedFromIndex = true;
        } else {
          newValue[i] = val;
        }
        _dragableIndex2 = _dragableIndex3;
      };

      for (var i = 0, _dragableIndex2 = -1; i < value.length; i++) {
        _loop2(i, _dragableIndex2);
      }
    }

    _this2.trackValueChange(newValue);
  };

  this.setValidation = function (validation) {
    _this2.setState({
      validations: (0, _assign3.default)({}, _this2.state.validations, validation)
    });

    _this2.adjustHeight();
  };

  this.validate = function () {
    var _props9 = _this2.props,
        value = _props9.value,
        components = _props9.components;


    return new Promise(function (resolve, reject) {
      return Promise.all(value.map(function (v) {
        var id = _this2.getUUIDFromValue(v);
        var type = v.type;

        var comp = (0, _find2.default)(components, function (c) {
          return (0, _designType.isExpectedDesginType)(c, type);
        });
        // 假如组件设置了 editable: false，不处罚校验
        if (!(0, _defaultTo2.default)(comp.editable, true)) {
          return Promise.resolve(_defineProperty({}, id, {}));
        }

        return _this2.validateComponentValue(v, v, {}).then(function (errors) {
          return _defineProperty({}, id, errors);
        });
      })).then(function (validationList) {
        var validations = _assign3.default.apply(undefined, [{}].concat(_toConsumableArray(validationList)));

        _this2.setState({
          showError: true,
          validations: validations
        }, function () {
          // 跳转到第一个有错误的组件
          var firstError = (0, _find2.default)(validationList, hasValidateError);

          if (firstError) {
            var id = Object.keys(firstError)[0];
            _this2.scrollToPreviewItem(id);

            // 选中第一个有错误的组件
            _this2.setState({
              selectedUUID: id,
              showAddComponentOverlay: false,
              onShowEditComponentOverlay: true
            });
          }

          _this2.adjustHeight();
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
    });
  };

  this.markAsSaved = function () {
    _this2._dirty = false;
    _this2.removeCache();
  };

  this.selectByIndex = function (index, value) {
    value = value || _this2.props.value;
    index = (0, _isUndefined2.default)(index) ? _this2.props.defaultSelectedIndex : index;
    var safeIndex = getSafeSelectedValueIndex(index, value);
    var safeValue = value[safeIndex];

    _this2.setState({
      selectedUUID: _this2.getUUIDFromValue(safeValue),
      showAddComponentOverlay: false
    });
  };

  this.isSelected = function (value) {
    var selectedUUID = _this2.state.selectedUUID;

    return _this2.getUUIDFromValue(value) === selectedUUID;
  };

  this.hasSelected = function () {
    var selectedUUID = _this2.state.selectedUUID;


    return !!selectedUUID;
  };

  this.savePreview = function (instance) {
    if (instance && instance.getDecoratedComponentInstance) {
      instance = instance.getDecoratedComponentInstance();
    }
    _this2.preview = instance;
  };

  this.adjustHeight = function (id) {
    // 不要重复执行
    if (_this2.adjustHeightTimer) {
      clearTimeout(_this2.adjustHeightTimer);
      _this2.adjustHeightTimer = undefined;
    }

    _this2.adjustHeightTimer = setTimeout(function () {
      id = id || _this2.state.selectedUUID;
      if (_this2.preview && _this2.preview.getEditorBoundingBox) {
        var editorBB = _this2.preview.getEditorBoundingBox(id);
        if (!editorBB) {
          return _this2.setState({
            bottomGap: 0
          });
        }

        var previewNode = (0, _reactDom.findDOMNode)(_this2.preview);
        var previewBB = previewNode && previewNode.getBoundingClientRect();
        if (!previewBB) {
          return;
        }

        var gap = Math.max(0, editorBB.bottom - previewBB.bottom);
        _this2.setState({
          bottomGap: gap
        });
      }
    }, 0);
  };

  this.onBeforeWindowUnload = function (evt) {
    if (!_this2._dirty) {
      return;
    }

    // 这个字符串其实不会展示给用户
    var confirmLeaveMessage = '页面上有未保存的数据，确定要离开吗？';
    evt.returnValue = confirmLeaveMessage;
    return confirmLeaveMessage;
  };

  this.onRestoreCacheAlertClose = function () {
    _this2.setState({
      showRestoreFromCache: false
    });
  };

  this.restoreCache = function (evt) {
    evt.preventDefault();

    var cachedValue = _this2.readCache();
    if (cachedValue !== storage.NOT_FOUND) {
      _this2.trackValueChange(cachedValue, false);
      _this2.setState({
        showRestoreFromCache: false
      });
      _this2.removeCache();
    }
  };

  this.design = function () {
    return {
      injections: {
        getPreviewProps: function getPreviewProps() /* implementation */{
          // eslint-disable-next-line
          console.warn('Design injections are no longer supported, use `settings` and `onSettingsChange` instead.');

          // this.getPreviewProps = implementation;
        }
      },

      getUUID: _this2.getUUIDFromValue,

      validateComponentValue: _this2.validateComponentValue,

      setValidation: _this2.setValidation,

      markAsSaved: _this2.markAsSaved,

      adjustPreviewHeight: _this2.adjustHeight
    };
  }();
};

exports.default = Design;
function tagValuesWithUUID(values) {
  values.forEach(function (v) {
    if (!v[UUID_KEY]) {
      v[UUID_KEY] = (0, _uuid2.default)();
    }
  });
}

/**
 * 从 startIndex 开始往前找到第一个可以选中的值
 * @param {array} value 当前的值
 * @param {array} components 当前可用的组件列表
 * @param {number} startIndex 开始搜索的下标
 */
function findFirstEditableSibling(value, components, startIndex) {
  var loop = function loop(i) {
    var val = value[i];
    var type = val.type;
    var comp = (0, _find2.default)(components, function (c) {
      return (0, _designType.isExpectedDesginType)(c, type);
    });
    if (comp && (0, _defaultTo2.default)(comp.editable, true)) {
      return val;
    }
  };

  var valueLength = value.length;
  // 往前找
  for (var i = startIndex; i >= 0 && i < valueLength; i--) {
    var _val = loop(i);
    if (_val) {
      return _val;
    }
  }

  // 往后找
  for (var _i = startIndex + 1; _i < valueLength; _i++) {
    var _val2 = loop(_i);
    if (_val2) {
      return _val2;
    }
  }

  return null;
}

/**
 * 根据当前的值生成一个组件使用计数
 * @param {Array} value Design 当前的值
 * @param {Array} components Design 支持的组件列表
 */
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

/***/ }),

/***/ "./src/pages/editor/components/design/editor/DesignEditor.jsx":
/*!********************************************************************!*\
  !*** ./src/pages/editor/components/design/editor/DesignEditor.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlGroup = exports.DesignEditor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _assign3 = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");

var _assign4 = _interopRequireDefault(_assign3);

var _reorder2 = __webpack_require__(/*! zent/lib/utils/reorder */ "./node_modules/zent/lib/utils/reorder.js");

var _reorder3 = _interopRequireDefault(_reorder2);

var _shallowEqual = __webpack_require__(/*! zent/lib/utils/shallowEqual */ "./node_modules/zent/lib/utils/shallowEqual.js");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NOT_EVENT_MSG = 'onInputChange expects an `Event` with { target: { name, value } } as argument';

var DesignEditor = exports.DesignEditor = function (_Component) {
  _inherits(DesignEditor, _Component);

  _createClass(DesignEditor, null, [{
    key: 'validate',


    // value 的验证函数
    // eslint-disable-next-line


    // 以下属性需要子类重写

    // 组件的类型
    value: function validate(value, prevValue, changedProps) {
      return new Promise(function (resolve) {
        return resolve({});
      });
    }

    // 添加组件实例时的初始值


    // 组件的描述

  }]);

  function DesignEditor(props) {
    _classCallCheck(this, DesignEditor);

    var _this = _possibleConstructorReturn(this, (DesignEditor.__proto__ || Object.getPrototypeOf(DesignEditor)).call(this, props));

    _this.onInputChange = function (evt) {
      // 如果抛出来的不是 Event 对象，直接丢给 onChange
      if (!isEventLikeObject(evt)) {
        throw new Error(NOT_EVENT_MSG);
      }

      var onChange = _this.props.onChange;
      var target = evt.target;
      var name = target.name,
          type = target.type;
      var value = target.value;


      if (type === 'checkbox') {
        value = target.checked;
      }

      onChange(_defineProperty({}, name, value));

      _this.setMetaProperty(name, 'dirty');
    };

    _this.onCustomInputChange = function (name) {
      return function (value) {
        var onChange = _this.props.onChange;

        onChange(_defineProperty({}, name, value));
        _this.setMetaProperty(name, 'dirty');
      };
    };

    _this.onInputBlur = function (evt) {
      // 如果抛出来的不是 Event 对象，直接丢给 onChange
      if (!isEventLikeObject(evt)) {
        throw new Error(NOT_EVENT_MSG);
      }

      var name = evt.target.name;

      _this.onCustomInputBlur(name);
    };

    _this.onCustomInputBlur = function (name) {
      _this.setMetaProperty(name, 'touched');

      _this.validateValue();
    };

    _this.state = (0, _assign4.default)({}, _this.state, {
      meta: {}
    });

    _this.validateValue();
    return _this;
  }

  /**
   * 通用的 Input 元素 onChange 回调函数
   *
   * 适用于 Input, Checkbox, Select, Radio
   */


  /**
   * 有些组件的 onChange 事件抛出来的不是 Event 对象
   *
   * 适用于 Slider, Switch, DatePicker 以及其它自定义组件
   */


  /**
   * 处理 Input 元素的 blur 事件。
   */


  /**
   * 有些组件没有 onBlur 事件，用这个函数处理
   */


  _createClass(DesignEditor, [{
    key: 'getMetaProperty',


    /**
     * 获取 Field 的 meta 属性，包括 dirty, touched 等
     * @param {string} name Field 名字
     * @param {string} property meta 属性名字
     */
    value: function getMetaProperty(name, property) {
      var meta = this.state.meta;

      return !!(meta && meta[name] && meta[name][property]);
    }

    /**
     * 设置 Field 的 meta 属性
     * @param {string} name Field 名字
     * @param {string} property meta 属性名字
     * @param {any} state 属性的值
     */

  }, {
    key: 'setMetaProperty',
    value: function setMetaProperty(name, property) {
      var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var meta = this.state.meta;

      var states = meta[name];
      if (!states || states[property] !== state) {
        this.setState({
          meta: (0, _assign4.default)({}, meta, _defineProperty({}, name, (0, _assign4.default)({}, states, _defineProperty({}, property, state))))
        });
      }
    }

    /**
     * 返回表单是否有错误
     */

  }, {
    key: 'isValid',
    value: function isValid() {
      var validation = this.props.validation;

      return Object.keys(validation).length > 0;
    }
  }, {
    key: 'isInvalid',
    value: function isInvalid() {
      return !this.isValid();
    }

    /**
     * 触发一次表单校验
     */

  }, {
    key: 'validateValue',
    value: function validateValue() {
      var _props = this.props,
          value = _props.value,
          design = _props.design;

      design.validateComponentValue(value, value, []).then(function (errors) {
        var id = design.getUUID(value);
        design.setValidation(_defineProperty({}, id, errors));
      });
    }

    /*
     * Utility to reorder list for react-beautiful-dnd
     * Scans the list only once.
    */

  }, {
    key: 'reorder',
    value: function reorder(array, fromIndex, toIndex) {
      return (0, _reorder3.default)(array, fromIndex, toIndex);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
    }
  }]);

  return DesignEditor;
}(_react.Component);

/**
 * 表单每个域的基础样式
 */


DesignEditor.propTypes = {
  value: _propTypes2.default.object,

  onChange: _propTypes2.default.func.isRequired,

  // 验证状态
  validation: _propTypes2.default.object.isRequired,

  // 是否强制显示所有错误
  showError: _propTypes2.default.bool.isRequired,

  // 用来和 Design 交互
  design: _propTypes2.default.object.isRequired,

  // 自定义全局配置，Design 不会改变这个对象的值
  globalConfig: _propTypes2.default.object,

  // Design 全剧配置，和 globalConfig 的区别是 Design 组件可以 修改 settings 的值
  settings: _propTypes2.default.object,

  // 修改 settings 的回调函数
  onSettingsChange: _propTypes2.default.func
};
DesignEditor.designType = 'unknown';
DesignEditor.designDescription = '未知组件';

DesignEditor.getInitialValue = function () {};

var ControlGroup = exports.ControlGroup = function (_PureComponent) {
  _inherits(ControlGroup, _PureComponent);

  function ControlGroup() {
    _classCallCheck(this, ControlGroup);

    return _possibleConstructorReturn(this, (ControlGroup.__proto__ || Object.getPrototypeOf(ControlGroup)).apply(this, arguments));
  }

  _createClass(ControlGroup, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          prefix = _props2.prefix,
          showError = _props2.showError,
          error = _props2.error,
          showLabel = _props2.showLabel,
          label = _props2.label,
          labelAlign = _props2.labelAlign,
          helpDesc = _props2.helpDesc,
          required = _props2.required,
          children = _props2.children,
          focusOnLabelClick = _props2.focusOnLabelClick;


      var errorVisible = showError && error;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(prefix + '-design-editor__control-group', className, {
            'has-error': errorVisible
          })
        },
        _react2.default.createElement(focusOnLabelClick ? 'label' : 'div', {
          className: prefix + '-design-editor__control-group-container'
        }, showLabel ? _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)(prefix + '-design-editor__control-group-label', labelAlign && prefix + '-design-editor__control-group-label--' + labelAlign)
          },
          required && _react2.default.createElement(
            'span',
            {
              className: prefix + '-design-editor__control-group-required-star'
            },
            '*'
          ),
          label
        ) : null, _react2.default.createElement(
          'div',
          { className: prefix + '-design-editor__control-group-control' },
          children,
          helpDesc && _react2.default.createElement(
            'div',
            {
              className: prefix + '-design-editor__control-group-help-desc'
            },
            helpDesc
          )
        )),
        errorVisible && _react2.default.createElement(
          'div',
          { className: prefix + '-design-editor__control-group-error' },
          error
        )
      );
    }
  }]);

  return ControlGroup;
}(_react.PureComponent);

ControlGroup.propTypes = {
  showError: _propTypes2.default.bool,
  error: _propTypes2.default.node,
  showLabel: _propTypes2.default.bool,
  helpDesc: _propTypes2.default.node,
  label: _propTypes2.default.node,

  // 自定义label对齐方式
  labelAlign: _propTypes2.default.string,

  // 点击 label 区域时是否 focus 到 control 的 input 上
  focusOnLabelClick: _propTypes2.default.bool,

  required: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  prefix: _propTypes2.default.string
};
ControlGroup.defaultProps = {
  required: false,
  showError: false,
  showLabel: true,
  focusOnLabelClick: true,
  error: '',
  prefix: 'zent'
};


function isEventLikeObject(evt) {
  return evt && evt.target && evt.target.name && evt.preventDefault && evt.stopPropagation;
}

/***/ }),

/***/ "./src/pages/editor/components/design/editor/DesignEditorAddComponent.jsx":
/*!********************************************************************************!*\
  !*** ./src/pages/editor/components/design/editor/DesignEditorAddComponent.jsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _pop = __webpack_require__(/*! zent/lib/pop */ "./node_modules/zent/lib/pop/index.js");

var _pop2 = _interopRequireDefault(_pop);

var _isFunction = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isNumber = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _noop = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");

var _noop2 = _interopRequireDefault(_noop);

var _LazyMap = __webpack_require__(/*! ../utils/LazyMap */ "./src/pages/editor/components/design/utils/LazyMap.js");

var _LazyMap2 = _interopRequireDefault(_LazyMap);

var _designType = __webpack_require__(/*! ../utils/design-type */ "./src/pages/editor/components/design/utils/design-type.js");

var _componentGroup = __webpack_require__(/*! ../utils/component-group */ "./src/pages/editor/components/design/utils/component-group.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DesignEditorAddComponent = function (_PureComponent) {
  _inherits(DesignEditorAddComponent, _PureComponent);

  function DesignEditorAddComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DesignEditorAddComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DesignEditorAddComponent.__proto__ || Object.getPrototypeOf(DesignEditorAddComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      popVisibleMap: new _LazyMap2.default(false)
    }, _this.onPopVisibleChange = function (key) {
      return function (visible) {
        _this.setState({
          popVisibleMap: _this.state.popVisibleMap.clone().set(key, visible)
        });
      };
    }, _this.onAdd = function (component) {
      return function () {
        var componentInstanceCount = _this.props.componentInstanceCount;


        if (canAddMoreInstance(component, componentInstanceCount)) {
          var shouldCreate = component.shouldCreate;

          shouldAddComponentPromise(component, shouldCreate).then(function () {
            var _this$props = _this.props,
                fromSelected = _this$props.fromSelected,
                onAddComponent = _this$props.onAddComponent;

            onAddComponent(component, fromSelected);
          }, _noop2.default);
        }
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DesignEditorAddComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          components = _props.components,
          prefix = _props.prefix,
          componentInstanceCount = _props.componentInstanceCount;
      var popVisibleMap = this.state.popVisibleMap;


      if (!components || !components.length) {
        return null;
      }

      if ((0, _componentGroup.isGrouped)(components)) {
        return this.renderGrouped();
      }

      return _react2.default.createElement(
        'div',
        {
          className: prefix + '-design-editor-add-component ' + prefix + '-design-editor-add-component--mixed'
        },
        _react2.default.createElement(
          'div',
          { className: prefix + '-design-editor-add-component__mixed-title' },
          '\u6DFB\u52A0\u5185\u5BB9'
        ),
        _react2.default.createElement(
          'div',
          { className: prefix + '-design-editor-add-component__mixed-list' },
          components.map(function (c) {
            var type = c.type;

            var key = (0, _designType.serializeDesignType)(type);

            return _react2.default.createElement(ComponentButton, {
              prefix: prefix,
              type: 'mixed',
              key: key,
              component: c,
              componentInstanceCount: componentInstanceCount,
              onAdd: _this2.onAdd,
              popVisibleMap: popVisibleMap,
              onPopVisibleChange: _this2.onPopVisibleChange
            });
          })
        )
      );
    }
  }, {
    key: 'renderGrouped',
    value: function renderGrouped() {
      var _this3 = this;

      var _props2 = this.props,
          components = _props2.components,
          prefix = _props2.prefix,
          componentInstanceCount = _props2.componentInstanceCount;
      var popVisibleMap = this.state.popVisibleMap;

      var groups = (0, _componentGroup.splitGroup)(components);

      return _react2.default.createElement(
        'div',
        {
          className: prefix + '-design-editor-add-component ' + prefix + '-design-editor-add-component--grouped'
        },
        groups.map(function (g) {
          return _react2.default.createElement(ComponentGroup, {
            prefix: prefix,
            key: g.group.name,
            group: g.group,
            components: g.components,
            componentInstanceCount: componentInstanceCount,
            onAdd: _this3.onAdd,
            popVisibleMap: popVisibleMap,
            onPopVisibleChange: _this3.onPopVisibleChange
          });
        })
      );
    }
  }]);

  return DesignEditorAddComponent;
}(_react.PureComponent);

DesignEditorAddComponent.propTypes = {
  components: _propTypes2.default.array,

  componentInstanceCount: _propTypes2.default.object,

  onAddComponent: _propTypes2.default.func.isRequired,

  fromSelected: _propTypes2.default.bool,

  prefix: _propTypes2.default.string
};
DesignEditorAddComponent.defaultProps = {
  fromSelected: false,
  prefix: 'zent'
};
exports.default = DesignEditorAddComponent;


function ComponentGroup(_ref2) {
  var prefix = _ref2.prefix,
      group = _ref2.group,
      components = _ref2.components,
      onAdd = _ref2.onAdd,
      componentInstanceCount = _ref2.componentInstanceCount,
      onPopVisibleChange = _ref2.onPopVisibleChange,
      popVisibleMap = _ref2.popVisibleMap;

  return _react2.default.createElement(
    'div',
    { className: prefix + '-design-editor-add-component__grouped' },
    _react2.default.createElement(
      'p',
      { className: prefix + '-design-editor-add-component__grouped-title' },
      group.name
    ),
    _react2.default.createElement(
      'div',
      { className: prefix + '-design-editor-add-component__grouped-list' },
      components.map(function (c) {
        var type = c.type;

        var key = (0, _designType.serializeDesignType)(type);

        return _react2.default.createElement(ComponentButton, {
          prefix: prefix,
          key: key,
          type: 'grouped',
          component: c,
          componentInstanceCount: componentInstanceCount,
          onAdd: onAdd,
          popVisibleMap: popVisibleMap,
          onPopVisibleChange: onPopVisibleChange
        });
      })
    )
  );
}

function ComponentButton(props) {
  var prefix = props.prefix,
      component = props.component,
      componentInstanceCount = props.componentInstanceCount,
      onAdd = props.onAdd,
      popVisibleMap = props.popVisibleMap,
      onPopVisibleChange = props.onPopVisibleChange,
      type = props.type;


  var disabled = !canAddMoreInstance(component, componentInstanceCount);
  var key = (0, _designType.serializeDesignType)(component.type);
  var visible = popVisibleMap.get(key);
  var message = getLimitMessage(component, componentInstanceCount);

  return _react2.default.createElement(
    _pop2.default,
    {
      content: message,
      trigger: disabled && message ? 'hover' : 'none',
      visible: visible,
      onVisibleChange: onPopVisibleChange(key),
      position: 'top-center',
      mouseLeaveDelay: 100,
      mouseEnterDelay: 300,
      className: prefix + '-design-editor-add-component-pop',
      wrapperClassName: prefix + '-design-editor-add-component-btn-wrapper ' + prefix + '-design-editor-add-component__' + type + '-btn-wrapper'
    },
    _react2.default.createElement(
      'a',
      {
        onClick: onAdd(component),
        className: (0, _classnames2.default)(prefix + '-design-editor-add-component__' + type + '-btn', _defineProperty({}, prefix + '-design-editor-add-component__' + type + '-btn--disabled', disabled)),
        disabled: disabled
      },
      component.editor.designDescription
    )
  );
}

function canAddMoreInstance(component, componentInstanceCount) {
  var type = component.type,
      limit = component.limit;

  var key = (0, _designType.serializeDesignType)(type);
  var count = componentInstanceCount.get(key);

  if ((0, _isFunction2.default)(limit)) {
    return limit(count);
  }

  return limit ? count < limit : true;
}

function getLimitMessage(component, componentInstanceCount) {
  var type = component.type,
      limitMessage = component.limitMessage,
      limit = component.limit;

  var key = (0, _designType.serializeDesignType)(type);
  var count = componentInstanceCount.get(key);

  if ((0, _isFunction2.default)(limitMessage)) {
    return limitMessage(count);
  }

  var defaultMessage = '';
  if ((0, _isNumber2.default)(limit)) {
    // limit === 0 表示不限制
    if (limit > 0) {
      defaultMessage = '\u8BE5\u7EC4\u4EF6\u6700\u591A\u53EF\u4EE5\u6DFB\u52A0 ' + limit + ' \u4E2A';
    } else if (limit < 0) {
      defaultMessage = '该组件暂不可用';
    }
  }

  return limitMessage || defaultMessage;
}

// Normalize to Promise
function shouldAddComponentPromise(component, fn) {
  if ((0, _isFunction2.default)(fn)) {
    return fn(component);
  }

  return Promise.resolve();
}

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
          prefix = _props.prefix,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(prefix + '-design-editor-item', className) },
        disabled && _react2.default.createElement('div', { className: prefix + '-design__disabled-mask' }),
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

  prefix: _propTypes2.default.string,

  className: _propTypes2.default.string
};
DesignEditorItem.defaultProps = {
  disabled: false,
  prefix: 'zent'
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

var _Design = __webpack_require__(/*! ./Design */ "./src/pages/editor/components/design/Design.jsx");

var _Design2 = _interopRequireDefault(_Design);

var _stripUUID = __webpack_require__(/*! ./stripUUID */ "./src/pages/editor/components/design/stripUUID.js");

var _stripUUID2 = _interopRequireDefault(_stripUUID);

__webpack_require__(/*! ./index.pcss */ "./src/pages/editor/components/design/index.pcss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Design2.default.stripUUID = _stripUUID2.default;

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

/***/ "./src/pages/editor/components/design/preview/DesignPreview.jsx":
/*!**********************************************************************!*\
  !*** ./src/pages/editor/components/design/preview/DesignPreview.jsx ***!
  \**********************************************************************/
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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _find = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");

var _find2 = _interopRequireDefault(_find);

var _some = __webpack_require__(/*! lodash/some */ "./node_modules/lodash/some.js");

var _some2 = _interopRequireDefault(_some);

var _defaultTo = __webpack_require__(/*! lodash/defaultTo */ "./node_modules/lodash/defaultTo.js");

var _defaultTo2 = _interopRequireDefault(_defaultTo);

var _isFunction = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _get = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");

var _get2 = _interopRequireDefault(_get);

var _reactBeautifulDnd = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");

var _DesignPreviewItem = __webpack_require__(/*! ./DesignPreviewItem */ "./src/pages/editor/components/design/preview/DesignPreviewItem.jsx");

var _DesignPreviewItem2 = _interopRequireDefault(_DesignPreviewItem);

var _DesignPreviewController = __webpack_require__(/*! ./DesignPreviewController */ "./src/pages/editor/components/design/preview/DesignPreviewController.jsx");

var _DesignPreviewController2 = _interopRequireDefault(_DesignPreviewController);

var _DesignEditorItem = __webpack_require__(/*! ../editor/DesignEditorItem */ "./src/pages/editor/components/design/editor/DesignEditorItem.jsx");

var _DesignEditorItem2 = _interopRequireDefault(_DesignEditorItem);

var _DesignEditorAddComponent = __webpack_require__(/*! ../editor/DesignEditorAddComponent */ "./src/pages/editor/components/design/editor/DesignEditorAddComponent.jsx");

var _DesignEditorAddComponent2 = _interopRequireDefault(_DesignEditorAddComponent);

var _designType = __webpack_require__(/*! ../utils/design-type */ "./src/pages/editor/components/design/utils/design-type.js");

var _componentGroup = __webpack_require__(/*! ../utils/component-group */ "./src/pages/editor/components/design/utils/component-group.js");

var _constants = __webpack_require__(/*! ./constants */ "./src/pages/editor/components/design/preview/constants.js");

var _constants2 = __webpack_require__(/*! ../constants */ "./src/pages/editor/components/design/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * DesignPreview 和 config 组件是相互关联的
 *
 * 这个组件里的一些 props 是需要 config 组件提供的
 */
var DesignPreview = function (_PureComponent) {
  _inherits(DesignPreview, _PureComponent);

  function DesignPreview() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DesignPreview);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DesignPreview.__proto__ || Object.getPrototypeOf(DesignPreview)).call.apply(_ref, [this].concat(args))), _this), _this.previewItems = {}, _this.editorItems = {}, _this.editors = {}, _this.dispatchDragEnd = function (result) {
      var type = result.type;

      if (type === _constants.DND_PREVIEW_CONTROLLER) {
        _this.onPreviewDragEnd(result);
        return;
      }

      // Let editors handle their dnd actions
      (0, _some2.default)(_this.editors, function (editor) {
        if ((0, _isFunction2.default)(editor.shouldHandleDragEnd) && editor.shouldHandleDragEnd(type)) {
          (0, _isFunction2.default)(editor.onDragEnd) && editor.onDragEnd(result);
          return true;
        }

        return false;
      });
    }, _this.savePreviewItem = function (id) {
      return function (instance) {
        saveRef(_this.previewItems, id, instance);
      };
    }, _this.saveEditorItem = function (id) {
      return function (instance) {
        saveRef(_this.editorItems, id, instance);
      };
    }, _this.saveEditor = function (id) {
      return function (instance) {
        saveRef(_this.editors, id, instance);
      };
    }, _this.scrollToItem = function (id, offsets) {
      var item = _this.previewItems[id];

      if (!item) {
        return;
      }

      item.scrollTop(offsets);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // All props in this component are injected by Design


  _createClass(DesignPreview, [{
    key: 'render',


    /**
     * 流程
     */
    value: function render() {
      var _this2 = this,
          _cx3;

      var _props = this.props,
          components = _props.components,
          value = _props.value,
          validations = _props.validations,
          showError = _props.showError,
          settings = _props.settings,
          onSettingsChange = _props.onSettingsChange,
          onComponentValueChange = _props.onComponentValueChange,
          componentInstanceCount = _props.componentInstanceCount,
          design = _props.design,
          appendableComponents = _props.appendableComponents,
          showAddComponentOverlay = _props.showAddComponentOverlay,
          addComponentOverlayPosition = _props.addComponentOverlayPosition,
          selectedUUID = _props.selectedUUID,
          getUUIDFromValue = _props.getUUIDFromValue,
          onAddComponent = _props.onAddComponent,
          onSelect = _props.onSelect,
          onDelete = _props.onDelete,
          onEdit = _props.onEdit,
          onAdd = _props.onAdd,
          onMove = _props.onMove,
          className = _props.className,
          prefix = _props.prefix,
          globalConfig = _props.globalConfig,
          disabled = _props.disabled,
          footer = _props.footer;

      var isComponentsGrouped = (0, _componentGroup.isGrouped)(appendableComponents);
      var cls = (0, _classnames2.default)(prefix + '-design-preview', className);
      var hasAppendableComponent = appendableComponents.length > 0;

      return _react2.default.createElement(
        _reactBeautifulDnd.DragDropContext,
        { onDragEnd: this.dispatchDragEnd },
        _react2.default.createElement(
          'div',
          {
            className: cls,
            style: {
              backgroundColor: (0, _get2.default)(settings, 'previewBackground', _constants.DEFAULT_BACKGROUND)
            }
          },
          disabled && _react2.default.createElement('div', { className: prefix + '-design__disabled-mask' }),
          _react2.default.createElement(
            _reactBeautifulDnd.Droppable,
            {
              droppableId: prefix + '-design-preview-list',
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
                  className: (0, _classnames2.default)(prefix + '-design__item-list', _defineProperty({}, prefix + '-design__item-list--full-height', !hasAppendableComponent))
                }),
                value.map(function (v) {
                  var _cx2;

                  var valueType = v.type;
                  var comp = (0, _find2.default)(components, function (c) {
                    return (0, _designType.isExpectedDesginType)(c, valueType);
                  });
                  var PreviewItem = comp.previewItem || _DesignPreviewItem2.default;
                  var EditorItem = comp.editorItem || _DesignEditorItem2.default;
                  var id = getUUIDFromValue(v);
                  var selected = id === selectedUUID;
                  var PreviewController = comp.previewController || _DesignPreviewController2.default;
                  var draggable = (0, _defaultTo2.default)(comp.dragable, true);

                  return _react2.default.createElement(
                    PreviewItem,
                    {
                      prefix: prefix,
                      key: id,
                      id: id,
                      ref: _this2.savePreviewItem(id)
                    },
                    _react2.default.createElement(PreviewController, {
                      prefix: prefix,
                      value: v,
                      globalConfig: globalConfig,
                      settings: settings,
                      design: design,
                      id: id,
                      index: draggable ? draggableIndex++ : -1,
                      allowHoverEffects: !snapshot.isDraggingOver,
                      dragable: draggable,
                      editable: (0, _defaultTo2.default)(comp.editable, true),
                      configurable: (0, _defaultTo2.default)(comp.configurable, true),
                      canDelete: (0, _defaultTo2.default)(comp.canDelete, true),
                      canInsert: (0, _defaultTo2.default)(comp.canInsert, true),
                      highlightWhenSelect: (0, _defaultTo2.default)(comp.highlightWhenSelect, true),
                      isSelected: selected,
                      onSelect: onSelect,
                      onDelete: onDelete,
                      onEdit: onEdit,
                      onAdd: onAdd,
                      onMove: onMove,
                      component: comp.preview,
                      previewProps: getAdditionalProps(comp.previewProps, v)
                    }),
                    selected && !showAddComponentOverlay && _react2.default.createElement(
                      EditorItem,
                      {
                        prefix: prefix,
                        disabled: disabled,
                        ref: _this2.saveEditorItem(id)
                      },
                      _react2.default.createElement(comp.editor, _extends({}, getAdditionalProps(comp.editorProps, v), {
                        ref: _this2.saveEditor(id),
                        value: v,
                        onChange: onComponentValueChange(v),
                        settings: settings,
                        onSettingsChange: onSettingsChange,
                        globalConfig: globalConfig,
                        design: design,
                        validation: validations[id] || {},
                        showError: showError,
                        prefix: prefix
                      }))
                    ),
                    selected && showAddComponentOverlay && _react2.default.createElement(
                      _DesignEditorItem2.default,
                      {
                        ref: _this2.saveEditorItem(id),
                        prefix: prefix,
                        className: (0, _classnames2.default)(prefix + '-design-add-component-overlay', (_cx2 = {}, _defineProperty(_cx2, prefix + '-design-add-component-overlay--top', addComponentOverlayPosition === _constants2.ADD_COMPONENT_OVERLAY_POSITION.TOP), _defineProperty(_cx2, prefix + '-design-add-component-overlay--bottom', addComponentOverlayPosition === _constants2.ADD_COMPONENT_OVERLAY_POSITION.BOTTOM), _defineProperty(_cx2, prefix + '-design-add-component-overlay--grouped', isComponentsGrouped), _defineProperty(_cx2, prefix + '-design-add-component-overlay--mixed', !isComponentsGrouped), _cx2))
                      },
                      _react2.default.createElement(_DesignEditorAddComponent2.default, {
                        prefix: prefix,
                        fromSelected: true,
                        componentInstanceCount: componentInstanceCount,
                        components: appendableComponents,
                        onAddComponent: onAddComponent
                      })
                    )
                  );
                }),
                provided.placeholder
              );
            }
          ),
          hasAppendableComponent && _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)(prefix + '-design__add', (_cx3 = {}, _defineProperty(_cx3, prefix + '-design__add--grouped', isComponentsGrouped), _defineProperty(_cx3, prefix + '-design__add--mixed', !isComponentsGrouped), _cx3))
            },
            _react2.default.createElement(_DesignEditorAddComponent2.default, {
              prefix: prefix,
              componentInstanceCount: componentInstanceCount,
              components: appendableComponents,
              onAddComponent: onAddComponent
            })
          ),
          footer
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

      var onMove = this.props.onMove;

      onMove(source.index, destination.index);
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

  return DesignPreview;
}(_react.PureComponent);

DesignPreview.propTypes = {
  className: _propTypes2.default.string,

  prefix: _propTypes2.default.string,

  design: _propTypes2.default.object.isRequired,

  components: _propTypes2.default.array.isRequired,

  value: _propTypes2.default.array.isRequired,

  settings: _propTypes2.default.object,

  onSettingsChange: _propTypes2.default.func,

  footer: _propTypes2.default.node,

  appendableComponents: _propTypes2.default.array,

  showAddComponentOverlay: _propTypes2.default.bool.isRequired,

  addComponentOverlayPosition: _propTypes2.default.number.isRequired,

  selectedUUID: _propTypes2.default.string,

  getUUIDFromValue: _propTypes2.default.func.isRequired,

  onSelect: _propTypes2.default.func.isRequired,

  // 处理添加按钮的回调函数
  onAdd: _propTypes2.default.func.isRequired,

  // 添加新组件
  onAddComponent: _propTypes2.default.func.isRequired,

  onDelete: _propTypes2.default.func.isRequired,

  onEdit: _propTypes2.default.func.isRequired,

  onMove: _propTypes2.default.func.isRequired,

  disabled: _propTypes2.default.bool,

  // 每个组件的实例数量
  componentInstanceCount: _propTypes2.default.object,

  // 以下 props 由 config 组件提供
  background: _propTypes2.default.string
};
DesignPreview.defaultProps = {
  background: '#f9f9f9',
  disabled: false,
  appendableComponents: [],
  prefix: 'mp'
};


function getAdditionalProps(propsOrFn, value) {
  var props = (0, _isFunction2.default)(propsOrFn) ? propsOrFn(value) : propsOrFn;

  return props || {};
}

function saveRef(map, id, instance) {
  if (!instance) {
    delete map[id];
  } else {
    map[id] = instance;
  }
}

exports.default = DesignPreview;

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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _pop = __webpack_require__(/*! zent/lib/pop */ "./node_modules/zent/lib/pop/index.js");

var _pop2 = _interopRequireDefault(_pop);

var _pick = __webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js");

var _pick2 = _interopRequireDefault(_pick);

var _get = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");

var _get2 = _interopRequireDefault(_get);

var _reactBeautifulDnd = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");

var _constants = __webpack_require__(/*! ./constants */ "./src/pages/editor/components/design/preview/constants.js");

var _constants2 = __webpack_require__(/*! ../constants */ "./src/pages/editor/components/design/constants.js");

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
      var editable = _this.props.editable;

      if (!editable) {
        return;
      }

      _this.invokeCallback('onSelect', evt, false);
    }, _this.onPrepend = function (evt) {
      _this.invokeCallback('onAdd', evt, true, _constants2.ADD_COMPONENT_OVERLAY_POSITION.TOP);
    }, _this.onAppend = function (evt) {
      _this.invokeCallback('onAdd', evt, true, _constants2.ADD_COMPONENT_OVERLAY_POSITION.BOTTOM);
    }, _this.onDelete = function () {
      _this.invokeCallback('onDelete', null, true);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DesignPreviewController, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          dragable = _props.dragable,
          configurable = _props.configurable,
          editable = _props.editable,
          canDelete = _props.canDelete,
          canInsert = _props.canInsert,
          highlightWhenSelect = _props.highlightWhenSelect,
          isSelected = _props.isSelected,
          PreviewComponent = _props.component,
          previewProps = _props.previewProps,
          settings = _props.settings,
          prefix = _props.prefix,
          id = _props.id,
          index = _props.index,
          allowHoverEffects = _props.allowHoverEffects;

      var props = (0, _pick2.default)(this.props, ['value', 'design', 'globalConfig', 'settings']);
      var getClassName = function getClassName(highlight) {
        var _cx;

        return (0, _classnames2.default)(prefix + '-design-preview-controller', (_cx = {}, _defineProperty(_cx, prefix + '-design-preview-controller--editable', editable), _defineProperty(_cx, prefix + '-design-preview-controller--selected', isSelected), _defineProperty(_cx, prefix + '-design-preview-controller--highlight', highlight), _defineProperty(_cx, prefix + '-design-preview-controller--dragable', dragable), _cx));
      };

      var tree = dragable ? _react2.default.createElement(
        _reactBeautifulDnd.Draggable,
        {
          draggableId: id,
          type: _constants.DND_PREVIEW_CONTROLLER,
          isDragDisabled: !dragable,
          index: index
        },
        function (provided, snapshot) {
          // 拖拽的时候隐藏各种按钮，会很丑
          var showButtons = configurable && allowHoverEffects && !snapshot.isDragging;
          var cls = getClassName(allowHoverEffects && highlightWhenSelect);

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
                className: prefix + '-design-preview-controller__drag-handle'
              }),
              _react2.default.createElement(PreviewComponent, _extends({
                prefix: prefix
              }, previewProps, props))
            ),
            provided.placeholder,
            showButtons && canDelete && _react2.default.createElement(DeleteButton, { prefix: prefix, onDelete: _this2.onDelete }),
            showButtons && canInsert && _react2.default.createElement(AddButton, {
              prefix: prefix,
              onAdd: _this2.onPrepend,
              className: prefix + '-design-preview-controller__prepend'
            }),
            showButtons && canInsert && _react2.default.createElement(AddButton, {
              prefix: prefix,
              onAdd: _this2.onAppend,
              className: prefix + '-design-preview-controller__append'
            })
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
            className: (0, _classnames2.default)(prefix + '-design-preview-controller__drag-handle', prefix + '-design-preview-controller__drag-handle--inactive')
          },
          _react2.default.createElement(PreviewComponent, _extends({ prefix: prefix }, previewProps, props))
        ),
        configurable && canDelete && _react2.default.createElement(DeleteButton, { prefix: prefix, onDelete: this.onDelete }),
        configurable && canInsert && _react2.default.createElement(AddButton, {
          prefix: prefix,
          onAdd: this.onPrepend,
          className: prefix + '-design-preview-controller__prepend'
        }),
        configurable && canInsert && _react2.default.createElement(AddButton, {
          prefix: prefix,
          onAdd: this.onAppend,
          className: prefix + '-design-preview-controller__append'
        })
      );

      return tree;
    }
  }, {
    key: 'invokeCallback',
    value: function invokeCallback(action, evt, stopPropagation) {
      if (stopPropagation && evt) {
        evt.stopPropagation();
      }

      var value = this.props.value;

      var cb = this.props[action];

      for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        args[_key2 - 3] = arguments[_key2];
      }

      cb && cb.apply(undefined, [value].concat(args));
    }
  }]);

  return DesignPreviewController;
}(_react.PureComponent);

DesignPreviewController.propTypes = {
  // 这个组件的唯一标示，不随位置变化而变化
  id: _propTypes2.default.string.isRequired,

  // 组件的下标，-1 如果不可拖拽
  index: _propTypes2.default.number,

  // 是否允许 hover 效果，不允许的话不会显示各种按钮
  // 拖拽的时候用
  allowHoverEffects: _propTypes2.default.bool.isRequired,

  // 是否可以编辑，UMP里面有些地方config是不能编辑的
  editable: _propTypes2.default.bool,

  // 组件是否可以拖拽
  dragable: _propTypes2.default.bool,

  // 是否显示右下角的编辑区域
  configurable: _propTypes2.default.bool,

  // 时候现实删除按钮
  canDelete: _propTypes2.default.bool,

  // 是否吸纳事添加组件按钮
  canInsert: _propTypes2.default.bool,

  // 选中时是否高亮
  highlightWhenSelect: _propTypes2.default.bool,

  // 当前是否选中
  isSelected: _propTypes2.default.bool.isRequired,

  // 这个组件对应的值
  value: _propTypes2.default.object.isRequired,

  // Design 组件的全局配置
  settings: _propTypes2.default.object,

  // 选中的会掉函数
  onSelect: _propTypes2.default.func.isRequired,

  // 编辑的回调函数
  onEdit: _propTypes2.default.func.isRequired,

  // 添加新组件的回调函数
  onAdd: _propTypes2.default.func.isRequired,

  // 删除组件的回调函数
  onDelete: _propTypes2.default.func.isRequired,

  // 拖拽时移动组件的回调函数
  onMove: _propTypes2.default.func.isRequired,

  // design 组件暴露的方法
  design: _propTypes2.default.object.isRequired,

  // 用来渲染预览的组件
  component: _propTypes2.default.func.isRequired,

  // 自定义配置
  globalConfig: _propTypes2.default.object,

  // preview 额外的 props
  previewProps: _propTypes2.default.object,

  prefix: _propTypes2.default.string
};
DesignPreviewController.defaultProps = {
  prefix: 'zent'
};


function DeleteButton(_ref2) {
  var prefix = _ref2.prefix,
      onDelete = _ref2.onDelete;

  return _react2.default.createElement(
    _pop2.default,
    {
      content: '\u786E\u5B9A\u5220\u9664\uFF1F',
      trigger: 'click',
      position: 'left-center',
      centerArrow: true,
      onConfirm: onDelete,
      wrapperClassName: prefix + '-design-preview-controller__action-btn-delete'
    },
    _react2.default.createElement(IconDelete, { prefix: prefix, onClick: stopEventPropagation })
  );
}

function AddButton(_ref3) {
  var prefix = _ref3.prefix,
      onAdd = _ref3.onAdd,
      className = _ref3.className;

  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(prefix + '-design-preview-controller__action-btn-add-container', className)
    },
    _react2.default.createElement(
      'a',
      {
        className: prefix + '-design-preview-controller__action-btn-add',
        onClick: onAdd
      },
      _react2.default.createElement(IconAdd, { prefix: prefix })
    ),
    _react2.default.createElement(AddMarker, { prefix: prefix })
  );
}

function AddMarker(_ref4) {
  var prefix = _ref4.prefix;

  return _react2.default.createElement(
    'div',
    { className: prefix + '-design-preview-controller__add-marker' },
    _react2.default.createElement('i', {
      className: (0, _classnames2.default)(prefix + '-design-preview-controller__add-marker-circle', prefix + '-design-preview-controller__add-marker-circle--left')
    }),
    _react2.default.createElement('div', { className: prefix + '-design-preview-controller__add-marker-line' }),
    _react2.default.createElement('i', {
      className: (0, _classnames2.default)(prefix + '-design-preview-controller__add-marker-circle', prefix + '-design-preview-controller__add-marker-circle--right')
    })
  );
}

function IconAdd(_ref5) {
  var prefix = _ref5.prefix;

  return _react2.default.createElement(
    'svg',
    {
      width: '17',
      height: '17',
      viewBox: '0 0 17 17',
      xmlns: 'http://www.w3.org/2000/svg',
      className: prefix + '-design-preview-controller__icon-add'
    },
    _react2.default.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement('circle', { cx: '8.5', cy: '8.5', r: '8.5' }),
      _react2.default.createElement('path', { d: 'M8 8H5v1h3v3h1V9h3V8H9V5H8v3z', fill: '#FFF' })
    )
  );
}

var IconDelete = function (_PureComponent2) {
  _inherits(IconDelete, _PureComponent2);

  function IconDelete() {
    _classCallCheck(this, IconDelete);

    return _possibleConstructorReturn(this, (IconDelete.__proto__ || Object.getPrototypeOf(IconDelete)).apply(this, arguments));
  }

  _createClass(IconDelete, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          prefix = _props2.prefix,
          onClick = _props2.onClick;

      return _react2.default.createElement(
        'svg',
        {
          width: '20',
          height: '20',
          viewBox: '0 0 20 20',
          xmlns: 'http://www.w3.org/2000/svg',
          className: prefix + '-design-preview-controller__icon-delete',
          onClick: onClick
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
      );
    }
  }]);

  return IconDelete;
}(_react.PureComponent);

function stopEventPropagation(evt) {
  evt && evt.stopPropagation();
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
      var _props = this.props,
          children = _props.children,
          prefix = _props.prefix;


      return _react2.default.createElement(
        'div',
        { className: prefix + '-design-preview-item' },
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
  children: _propTypes2.default.node.isRequired,
  prefix: _propTypes2.default.string
};
DesignPreviewItem.defaultProps = {
  prefix: 'zent'
};
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

/***/ "./src/pages/editor/components/design/stripUUID.js":
/*!*********************************************************!*\
  !*** ./src/pages/editor/components/design/stripUUID.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripUUID;

var _has = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _isArray = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UUID_KEY_PATTERN = /__.+uuid__/i;
var OLD_KEY = 'zent-design-uuid';

function stripUUID(value) {
  if ((0, _isPlainObject2.default)(value)) {
    // eslint-disable-next-line
    for (var key in value) {
      if ((0, _has2.default)(value, key)) {
        if (OLD_KEY === key || UUID_KEY_PATTERN.test(key)) {
          delete value[key];
        } else {
          var oldValue = value[key];
          var newValue = stripUUID(oldValue);
          if (newValue !== oldValue) {
            value[key] = newValue;
          }
        }
      }
    }
  } else if ((0, _isArray2.default)(value)) {
    value.forEach(function (v) {
      return stripUUID(v);
    });
  }

  return value;
}

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

/***/ "./src/pages/editor/components/design/utils/component-group.js":
/*!*********************************************************************!*\
  !*** ./src/pages/editor/components/design/utils/component-group.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGroup = createGroup;
exports.isGroupComponent = isGroupComponent;
exports.isGrouped = isGrouped;
exports.splitGroup = splitGroup;

var _uniqueId = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _startsWith = __webpack_require__(/*! lodash/startsWith */ "./node_modules/lodash/startsWith.js");

var _startsWith2 = _interopRequireDefault(_startsWith);

var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _designType = __webpack_require__(/*! ./design-type */ "./src/pages/editor/components/design/utils/design-type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DummyComponent() {
  return null;
}

function createGroup(name) {
  return {
    type: (0, _uniqueId2.default)(_designType.COMPONENT_GROUP_DESIGN_TYPE) + '|' + name,
    editor: DummyComponent,
    preview: DummyComponent,
    name: name
  };
}

function isGroupComponent(component) {
  if (!component) {
    return false;
  }

  return (0, _startsWith2.default)(component.type, _designType.COMPONENT_GROUP_DESIGN_TYPE);
}

/**
 * Check if component array is grouped.
 *
 * A grouped component array MUST have a group component as its first element.
 * @param {Array} components
 */
function isGrouped(components) {
  // Grouped components must have at least 2 elements
  if (!components || components.length < 2) {
    return false;
  }

  var possiblyGroup = components[0];
  return isGroupComponent(possiblyGroup);
}

/**
 * Split component array into an array of groups
 *
 * @param {Array} components
 */
function splitGroup(components) {
  if ((0, _isEmpty2.default)(components)) {
    return [];
  }

  var lastIndex = components.length - 1;

  return components.reduce(function (state, c, idx) {
    var groups = state.groups,
        buffer = state.buffer,
        group = state.group;

    var isGroup = isGroupComponent(c);

    if (!isGroup) {
      buffer.push(c);
    }

    // When processing the last component, ensure buffer is consumed
    if (isGroup || idx === lastIndex) {
      // Empty group is ignored
      if (group && !(0, _isEmpty2.default)(buffer)) {
        groups.push({
          group: group,
          components: buffer
        });
      }

      // Start a new group
      state.buffer = [];
      state.group = c;
    }

    return state;
  }, { groups: [], buffer: [], group: null }).groups;
}

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
exports.COMPONENT_GROUP_DESIGN_TYPE = undefined;
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

var COMPONENT_GROUP_DESIGN_TYPE = exports.COMPONENT_GROUP_DESIGN_TYPE = '__zent-design-component-group__';

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _ComponentList = __webpack_require__(/*! ./ComponentList */ "./src/pages/editor/mp/ComponentList.jsx");

var _ComponentList2 = _interopRequireDefault(_ComponentList);

var _index = __webpack_require__(/*! ../components/design/index */ "./src/pages/editor/components/design/index.js");

var _index2 = _interopRequireDefault(_index);

var _button = __webpack_require__(/*! zent/lib/button */ "./node_modules/zent/lib/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _notify = __webpack_require__(/*! zent/lib/notify */ "./node_modules/zent/lib/notify/index.js");

var _notify2 = _interopRequireDefault(_notify);

var _config = __webpack_require__(/*! ../widget/config */ "./src/pages/editor/widget/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _ConfigEditor = __webpack_require__(/*! ../widget/config/ConfigEditor */ "./src/pages/editor/widget/config/ConfigEditor.js");

var _ConfigEditor2 = _interopRequireDefault(_ConfigEditor);

var _whitespace = __webpack_require__(/*! ../widget/whitespace */ "./src/pages/editor/widget/whitespace/index.js");

var _whitespace2 = _interopRequireDefault(_whitespace);

var _line = __webpack_require__(/*! ../widget/line */ "./src/pages/editor/widget/line/index.js");

var _line2 = _interopRequireDefault(_line);

var _richtext = __webpack_require__(/*! ../widget/richtext */ "./src/pages/editor/widget/richtext/index.js");

var _richtext2 = _interopRequireDefault(_richtext);

var _imageAd = __webpack_require__(/*! ../widget/image-ad */ "./src/pages/editor/widget/image-ad/index.js");

var _imageAd2 = _interopRequireDefault(_imageAd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var components = [_config2.default, _richtext2.default, _imageAd2.default, _whitespace2.default, _line2.default];

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: [_extends({
                type: _config2.default.type
            }, _ConfigEditor2.default.getInitialValue())]
        }, _this.saveDesign = function (instance) {
            _this.design = instance && instance.getDecoratedComponentInstance();
        }, _this.submit = function () {
            _this.design.validate().then(function () {
                var data = _index2.default.stripUUID(_this.state.value);
                console.log(data);
                // submit this.state.value to server
                _this.design.markAsSaved();
                _notify2.default.success('提交成功');
            }).catch(function (validations) {
                console.log(validations);
            });
        }, _this.onChange = function (newValue) {
            _this.setState({
                value: newValue
            });
        }, _this.onSettingsChange = function (newSettings) {
            _this.setState({
                settings: newSettings
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'mp-workspace' },
                _react2.default.createElement(
                    'div',
                    { className: 'mp-workspace--toolbox' },
                    _react2.default.createElement(_ComponentList2.default, { onAddComponent: function onAddComponent(component) {
                            _this2.onAddComponent(component);
                        } })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mp-workspace--editor-wrapper' },
                    _react2.default.createElement(_index2.default, {
                        ref: this.saveDesign,
                        cache: true,
                        cacheId: 'zent-design-test',
                        confirmUnsavedLeave: false,
                        components: components,
                        value: this.state.value,
                        onChange: this.onChange,
                        onSettingsChange: this.onSettingsChange,
                        scrollTopOffset: -270,
                        globalConfig: window._global
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'design-example-actions' },
                        _react2.default.createElement(
                            _button2.default,
                            { type: 'primary', onClick: this.submit },
                            '\u4E0A\u67B6'
                        ),
                        _react2.default.createElement(
                            _button2.default,
                            { onClick: this.notImplemented },
                            '\u4FDD\u5B58\u8349\u7A3F'
                        ),
                        _react2.default.createElement(
                            _button2.default,
                            { onClick: this.notImplemented },
                            '\u9884\u89C8'
                        )
                    )
                )
            );
        }
    }, {
        key: 'onAddComponent',
        value: function onAddComponent() {
            // 通知design增加组件
        }
    }, {
        key: 'notImplemented',
        value: function notImplemented() {
            _notify2.default.error('仅作为演示，功能未开发');
        }
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

var _button = __webpack_require__(/*! zent/lib/button */ "./node_modules/zent/lib/button/index.js");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var components = [{
    name: '页面顶部配置',
    description: '',
    groupId: '',
    artifactId: '',
    version: '',
    classifier: ''
}, {
    name: '图片广告',
    description: '',
    groupId: '',
    artifactId: '',
    version: '',
    classifier: ''
}, {
    name: '富文本',
    description: '',
    groupId: '',
    artifactId: '',
    version: '',
    classifier: ''
}, {
    name: '分割线',
    description: '',
    groupId: '',
    artifactId: '',
    version: '',
    classifier: ''
}, {
    name: '空白行',
    description: '',
    groupId: '',
    artifactId: '',
    version: '',
    classifier: ''
}];

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

            return components.map(function (component) {
                return _react2.default.createElement(
                    'div',
                    { className: 'component-panel' },
                    _react2.default.createElement(
                        'div',
                        null,
                        component.name
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            _button2.default,
                            { type: 'success', onClick: function onClick() {
                                    _this2.props.onAddComponent && _this2.props.onAddComponent(component);
                                }, outline: true },
                            '\u4F7F\u7528'
                        )
                    )
                );
            });
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

/***/ "./src/pages/editor/widget/config/ConfigEditor.js":
/*!********************************************************!*\
  !*** ./src/pages/editor/widget/config/ConfigEditor.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _button = __webpack_require__(/*! zent/lib/button */ "./node_modules/zent/lib/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(/*! zent/lib/input */ "./node_modules/zent/lib/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _colorpicker = __webpack_require__(/*! zent/lib/colorpicker */ "./node_modules/zent/lib/colorpicker/index.js");

var _colorpicker2 = _interopRequireDefault(_colorpicker);

var _DesignEditor2 = __webpack_require__(/*! ../../components/design/editor/DesignEditor */ "./src/pages/editor/components/design/editor/DesignEditor.jsx");

var _constants = __webpack_require__(/*! ../../components/design/preview/constants */ "./src/pages/editor/components/design/preview/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-script-url */

var ConfigEditor = function (_DesignEditor) {
  _inherits(ConfigEditor, _DesignEditor);

  function ConfigEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ConfigEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ConfigEditor.__proto__ || Object.getPrototypeOf(ConfigEditor)).call.apply(_ref, [this].concat(args))), _this), _this.onColorChange = _this.onCustomInputChange('color'), _this.onBackgroundChange = function (color) {
      // 修改 Config 组件的值
      _this.onColorChange(color);

      // 修改 settings
      _this.props.onSettingsChange({
        previewBackground: color
      });
    }, _this.resetBackground = function () {
      _this.onBackgroundChange(_constants.DEFAULT_BACKGROUND);
    }, _this.filterTag = function (item, keyword) {
      return item.text.indexOf(keyword) > -1;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ConfigEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          settings = _props.settings,
          prefix = _props.prefix,
          showError = _props.showError,
          validation = _props.validation;


      return _react2.default.createElement(
        'div',
        { className: prefix + '-design-component-config-editor' },
        _react2.default.createElement(
          _DesignEditor2.ControlGroup,
          {
            showError: showError || this.getMetaProperty('title', 'touched'),
            error: validation.title,
            required: true,
            label: '\u9875\u9762\u540D\u79F0:'
          },
          _react2.default.createElement(_input2.default, {
            value: value.title,
            onChange: this.onInputChange,
            onBlur: this.onInputBlur,
            name: 'title'
          })
        ),
        _react2.default.createElement(
          _DesignEditor2.ControlGroup,
          {
            showError: showError || this.getMetaProperty('description', 'touched'),
            error: validation.description,
            label: '\u9875\u9762\u63CF\u8FF0:'
          },
          _react2.default.createElement(_input2.default, {
            value: value.description,
            onChange: this.onInputChange,
            onBlur: this.onInputBlur,
            name: 'description',
            placeholder: '\u7528\u6237\u901A\u8FC7\u5FAE\u4FE1\u5206\u4EAB\u7ED9\u670B\u53CB\u65F6\uFF0C\u4F1A\u81EA\u52A8\u663E\u793A\u9875\u9762\u63CF\u8FF0'
          })
        ),
        _react2.default.createElement(
          _DesignEditor2.ControlGroup,
          {
            label: '\u80CC\u666F\u989C\u8272:',
            labelAlign: 'top',
            className: prefix + '-design-component-config-editor__background',
            focusOnLabelClick: false
          },
          _react2.default.createElement(
            'div',
            {
              className: prefix + '-design-component-config-editor__background-control'
            },
            _react2.default.createElement(_colorpicker2.default, {
              color: getBackground(value, settings),
              onChange: this.onBackgroundChange
            }),
            _react2.default.createElement(
              _button2.default,
              { onClick: this.resetBackground },
              '\u91CD\u7F6E'
            )
          ),
          _react2.default.createElement(
            'div',
            {
              className: prefix + '-design-component-config-editor__background-hint'
            },
            '\u80CC\u666F\u989C\u8272\u53EA\u5728\u624B\u673A\u7AEF\u663E\u793A'
          )
        )
      );
    }
  }], [{
    key: 'getInitialValue',
    value: function getInitialValue() {
      return {
        // 标题
        title: '微页面标题',

        //  背景颜色
        color: '',

        // 页面描述
        description: ''
      };
    }
  }, {
    key: 'validate',
    value: function validate(value) {
      return new Promise(function (resolve) {
        var errors = {};
        var title = value.title;

        if (!title || !title.trim()) {
          errors.title = '请填写页面名称';
        } else if (title.length > 50) {
          errors.title = '页面名称长度不能多于 50 个字';
        }

        resolve(errors);
      });
    }
  }]);

  return ConfigEditor;
}(_DesignEditor2.DesignEditor);

ConfigEditor.designType = 'config';
ConfigEditor.designDescription = '页面配置';
exports.default = ConfigEditor;


function getBackground(value, settings) {
  return value && value.color || settings.previewBackground || _constants.DEFAULT_BACKGROUND;
}

/***/ }),

/***/ "./src/pages/editor/widget/config/ConfigPreview.js":
/*!*********************************************************!*\
  !*** ./src/pages/editor/widget/config/ConfigPreview.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfigPreview = function (_PureComponent) {
  _inherits(ConfigPreview, _PureComponent);

  function ConfigPreview() {
    _classCallCheck(this, ConfigPreview);

    return _possibleConstructorReturn(this, (ConfigPreview.__proto__ || Object.getPrototypeOf(ConfigPreview)).apply(this, arguments));
  }

  _createClass(ConfigPreview, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          prefix = _props.prefix;


      return _react2.default.createElement(
        'div',
        { className: prefix + '-design-component-config-preview' },
        _react2.default.createElement(
          'div',
          { className: prefix + '-design-component-config-preview__title' },
          value.title
        )
      );
    }
  }]);

  return ConfigPreview;
}(_react.PureComponent);

ConfigPreview.propTypes = {
  value: _propTypes2.default.object,

  // 用来和 Design 交互
  design: _propTypes2.default.object,

  prefix: _propTypes2.default.string
};
exports.default = ConfigPreview;

/***/ }),

/***/ "./src/pages/editor/widget/config/index.js":
/*!*************************************************!*\
  !*** ./src/pages/editor/widget/config/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ConfigEditor = __webpack_require__(/*! ./ConfigEditor */ "./src/pages/editor/widget/config/ConfigEditor.js");

var _ConfigEditor2 = _interopRequireDefault(_ConfigEditor);

var _ConfigPreview = __webpack_require__(/*! ./ConfigPreview */ "./src/pages/editor/widget/config/ConfigPreview.js");

var _ConfigPreview2 = _interopRequireDefault(_ConfigPreview);

__webpack_require__(/*! ./index.pcss */ "./src/pages/editor/widget/config/index.pcss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _ConfigEditor2.default.designType,
  editor: _ConfigEditor2.default,
  preview: _ConfigPreview2.default,
  // 是否可以拖拽
  dragable: false,

  // 是否出现在底部的添加组件区域
  appendable: false,

  // 是否可以编辑数据
  editable: true,
  // 鼠标在组件上时 是否展示快捷操作面板
  configurable: true,
  // 选中时是否高亮
  highlightWhenSelect: false
};

/***/ }),

/***/ "./src/pages/editor/widget/config/index.pcss":
/*!***************************************************!*\
  !*** ./src/pages/editor/widget/config/index.pcss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/editor/widget/image-ad/ImageAdEditor.js":
/*!***********************************************************!*\
  !*** ./src/pages/editor/widget/image-ad/ImageAdEditor.js ***!
  \***********************************************************/
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

var _radio = __webpack_require__(/*! zent/lib/radio */ "./node_modules/zent/lib/radio/index.js");

var _radio2 = _interopRequireDefault(_radio);

var _icon = __webpack_require__(/*! zent/lib/icon */ "./node_modules/zent/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _reactBeautifulDnd = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");

var _createObjectURL = __webpack_require__(/*! zent/lib/utils/createObjectURL */ "./node_modules/zent/lib/utils/createObjectURL.js");

var _createObjectURL2 = _interopRequireDefault(_createObjectURL);

var _findIndex = __webpack_require__(/*! lodash/findIndex */ "./node_modules/lodash/findIndex.js");

var _findIndex2 = _interopRequireDefault(_findIndex);

var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _DesignEditor2 = __webpack_require__(/*! ../../components/design/editor/DesignEditor */ "./src/pages/editor/components/design/editor/DesignEditor.jsx");

var _constants = __webpack_require__(/*! ./constants */ "./src/pages/editor/widget/image-ad/constants.js");

var _ImageEntry = __webpack_require__(/*! ./ImageEntry */ "./src/pages/editor/widget/image-ad/ImageEntry.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = _radio2.default.Group;

var ImageAdEditor = function (_DesignEditor) {
  _inherits(ImageAdEditor, _DesignEditor);

  function ImageAdEditor(props) {
    _classCallCheck(this, ImageAdEditor);

    var _this = _possibleConstructorReturn(this, (ImageAdEditor.__proto__ || Object.getPrototypeOf(ImageAdEditor)).call(this, props));

    _this.onAddImageEntry = function (evt) {
      var files = evt.target.files;

      var imageUrl = (0, _createObjectURL2.default)(files[0]);
      var _this$props = _this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;


      onChange({
        images: value.images.concat((0, _ImageEntry.createEmptyImageEntry)({ imageUrl: imageUrl }))
      });
    };

    _this.removeImageEntry = function (id) {
      return function () {
        var _this$props2 = _this.props,
            images = _this$props2.value.images,
            onChange = _this$props2.onChange;


        onChange({
          images: images.filter(function (img) {
            return img[_constants.IMAGE_AD_ENTRY_UUID_KEY] !== id;
          })
        });
      };
    };

    _this.prependImageEntry = function (id) {
      return function () {
        var _this$props3 = _this.props,
            images = _this$props3.value.images,
            onChange = _this$props3.onChange;

        var index = (0, _findIndex2.default)(images, function (img) {
          return img[_constants.IMAGE_AD_ENTRY_UUID_KEY] === id;
        });
        if (index !== -1) {
          var newImages = images.slice();
          newImages.splice(index, 0, (0, _ImageEntry.createEmptyImageEntry)());

          onChange({
            images: newImages
          });
        }
      };
    };

    _this.appendImageEntry = function (id) {
      return function () {
        var _this$props4 = _this.props,
            images = _this$props4.value.images,
            onChange = _this$props4.onChange;

        var index = (0, _findIndex2.default)(images, function (img) {
          return img[_constants.IMAGE_AD_ENTRY_UUID_KEY] === id;
        });
        if (index !== -1) {
          var newImages = images.slice();
          newImages.splice(index + 1, 0, (0, _ImageEntry.createEmptyImageEntry)());

          onChange({
            images: newImages
          });
        }
      };
    };

    _this.onImageEntryChange = function (id) {
      return function (delta) {
        var _this$props5 = _this.props,
            images = _this$props5.value.images,
            onChange = _this$props5.onChange;

        onChange({
          images: images.map(function (img) {
            if (img[_constants.IMAGE_AD_ENTRY_UUID_KEY] !== id) {
              return img;
            }

            return _extends({}, img, delta);
          })
        });
      };
    };

    _this.state = _extends({}, _this.state, {
      localImage: ''
    });
    return _this;
  }

  _createClass(ImageAdEditor, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          prefix = _props.prefix,
          showError = _props.showError,
          validation = _props.validation,
          value = _props.value;
      var localImage = this.state.localImage;

      var imageErrors = validation.images;
      var allowAddImage = this.isAddImageEntryAllowed();

      return _react2.default.createElement(
        'div',
        { className: prefix + '-design-component-image-ad-editor' },
        _react2.default.createElement(
          _DesignEditor2.ControlGroup,
          {
            label: '\u663E\u793A\u5927\u5C0F:',
            showError: showError || this.getMetaProperty('size', 'touched'),
            error: validation.size
          },
          _react2.default.createElement(
            RadioGroup,
            { value: value.size, onChange: this.onInputChange },
            _react2.default.createElement(
              _radio2.default,
              { name: 'size', value: _constants.IMAGE_SIZE.LARGE },
              '\u5927\u56FE'
            ),
            _react2.default.createElement(
              _radio2.default,
              { name: 'size', value: _constants.IMAGE_SIZE.SMALL },
              '\u5C0F\u56FE'
            )
          )
        ),
        _react2.default.createElement(
          _reactBeautifulDnd.Droppable,
          {
            droppableId: prefix + '-design-component-image-ad-editor__entry-list',
            type: _constants.IMAGE_AD_DND_TYPE,
            direction: 'vertical'
          },
          function (provided, snapshot) {
            return _react2.default.createElement(
              'ul',
              {
                ref: provided.innerRef,
                className: prefix + '-design-component-image-ad-editor__entry-list'
              },
              value.images.map(function (img) {
                var imageId = img[_constants.IMAGE_AD_ENTRY_UUID_KEY];

                return _react2.default.createElement(
                  'li',
                  {
                    key: imageId,
                    className: prefix + '-design-component-image-ad-editor__entry'
                  },
                  _react2.default.createElement(_ImageEntry.ImageEntry, {
                    prefix: prefix,
                    imageId: imageId,
                    imageUrl: img.imageUrl,
                    linkTitle: img.linkTitle,
                    linkUrl: img.linkUrl,
                    onChange: _this2.onImageEntryChange(imageId),
                    error: showError && imageErrors ? imageErrors[imageId] : ''
                  }),
                  !snapshot.isDraggingOver && _react2.default.createElement(_icon2.default, {
                    type: 'close-circle',
                    className: prefix + '-design-component-image-ad-editor__entry-close-btn',
                    onClick: _this2.removeImageEntry(imageId)
                  }),
                  !snapshot.isDraggingOver && allowAddImage && _react2.default.createElement(_icon2.default, {
                    type: 'plus',
                    className: prefix + '-design-component-image-ad-editor__entry-prepend-btn',
                    onClick: _this2.prependImageEntry(imageId)
                  }),
                  !snapshot.isDraggingOver && allowAddImage && _react2.default.createElement(_icon2.default, {
                    type: 'plus',
                    className: prefix + '-design-component-image-ad-editor__entry-append-btn',
                    onClick: _this2.appendImageEntry(imageId)
                  })
                );
              }),
              provided.placeholder
            );
          }
        ),
        allowAddImage && _react2.default.createElement(
          'a',
          {
            className: prefix + '-design-component-image-ad-editor__add-entry-btn'
          },
          _react2.default.createElement(
            'b',
            null,
            '+'
          ),
          '\u6DFB\u52A0\u4E00\u4E2A\u5E7F\u544A',
          _react2.default.createElement('input', {
            type: 'file',
            accept: 'image/gif, image/jpeg, image/png',
            title: '',
            value: localImage,
            onChange: this.onAddImageEntry
          })
        ),
        _react2.default.createElement(
          'div',
          { className: prefix + '-design-component-image-ad-editor__hint' },
          '\u6700\u591A\u6DFB\u52A0 ',
          _constants.IMAGE_AD_LIMIT,
          ' \u4E2A\u5E7F\u544A\uFF0C\u62D6\u52A8\u9009\u4E2D\u7684\u56FE\u7247\u5E7F\u544A\u53EF\u5BF9\u5176\u6392\u5E8F'
        )
      );
    }
  }, {
    key: 'isAddImageEntryAllowed',
    value: function isAddImageEntryAllowed() {
      var images = this.props.value.images;


      return images.length < _constants.IMAGE_AD_LIMIT;
    }
  }, {
    key: 'shouldHandleDragEnd',
    value: function shouldHandleDragEnd(type) {
      return type === _constants.IMAGE_AD_DND_TYPE;
    }
  }, {
    key: 'onDragEnd',
    value: function onDragEnd(result) {
      var source = result.source,
          destination = result.destination;

      // dropped outside

      if (!destination) {
        return;
      }

      var _props2 = this.props,
          value = _props2.value,
          onChange = _props2.onChange;

      var newValue = _extends({}, value, {
        images: this.reorder(value.images, source.index, destination.index)
      });

      onChange(newValue);
    }
  }], [{
    key: 'getInitialValue',
    value: function getInitialValue() {
      return {
        size: _constants.IMAGE_SIZE.SMALL,
        images: []
      };
    }
  }, {
    key: 'validate',
    value: function validate(value) {
      return new Promise(function (resolve) {
        var errors = {};

        errors.images = value.images.reduce(function (imageErrors, img) {
          if (!img.imageUrl) {
            imageErrors[img[_constants.IMAGE_AD_ENTRY_UUID_KEY]] = '请选择广告图片';
          }
          return imageErrors;
        }, {});

        // 如果没有错误就删除这个 key
        if ((0, _isEmpty2.default)(errors.images)) {
          delete errors.images;
        }

        resolve(errors);
      });
    }
  }]);

  return ImageAdEditor;
}(_DesignEditor2.DesignEditor);

ImageAdEditor.designType = 'image-ad';
ImageAdEditor.designDescription = _react2.default.createElement(
  'span',
  null,
  '\u56FE\u7247',
  _react2.default.createElement('br', null),
  '\u5E7F\u544A'
);
exports.default = ImageAdEditor;

/***/ }),

/***/ "./src/pages/editor/widget/image-ad/ImageAdPreview.js":
/*!************************************************************!*\
  !*** ./src/pages/editor/widget/image-ad/ImageAdPreview.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _isEmpty = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _constants = __webpack_require__(/*! ./constants */ "./src/pages/editor/widget/image-ad/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageAdPreview = function (_Component) {
  _inherits(ImageAdPreview, _Component);

  function ImageAdPreview() {
    _classCallCheck(this, ImageAdPreview);

    return _possibleConstructorReturn(this, (ImageAdPreview.__proto__ || Object.getPrototypeOf(ImageAdPreview)).apply(this, arguments));
  }

  _createClass(ImageAdPreview, [{
    key: 'render',
    value: function render() {
      var _cx;

      var _props = this.props,
          value = _props.value,
          prefix = _props.prefix;
      var size = value.size,
          images = value.images;


      if ((0, _isEmpty2.default)(images)) {
        return _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)(prefix + '-design-component-image-ad-preview', prefix + '-design-component-image-ad-preview--no-data')
          },
          '\u70B9\u51FB\u7F16\u8F91\u56FE\u7247\u5E7F\u544A'
        );
      }

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(prefix + '-design-component-image-ad-preview', (_cx = {}, _defineProperty(_cx, prefix + '-design-component-image-ad-preview--large', size === _constants.IMAGE_SIZE.LARGE), _defineProperty(_cx, prefix + '-design-component-image-ad-preview--small', size === _constants.IMAGE_SIZE.SMALL), _cx))
        },
        images.map(function (img) {
          var id = img[_constants.IMAGE_AD_ENTRY_UUID_KEY];
          // eslint-disable-next-line
          var url = img.linkUrl || 'javascript:void(0);';
          var title = img.linkTitle;

          return _react2.default.createElement(
            'a',
            {
              key: id,
              className: prefix + '-design-component-image-ad-preview__image',
              href: url,
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            _react2.default.createElement(
              'div',
              {
                className: prefix + '-design-component-image-ad-preview__image-img'
              },
              _react2.default.createElement('img', { src: img.imageUrl, alt: title }),
              title && _react2.default.createElement(
                'div',
                {
                  className: prefix + '-design-component-image-ad-preview__image-title'
                },
                title
              )
            )
          );
        })
      );
    }
  }]);

  return ImageAdPreview;
}(_react.Component);

exports.default = ImageAdPreview;

/***/ }),

/***/ "./src/pages/editor/widget/image-ad/ImageEntry.js":
/*!********************************************************!*\
  !*** ./src/pages/editor/widget/image-ad/ImageEntry.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageEntry = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createEmptyImageEntry = createEmptyImageEntry;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _input = __webpack_require__(/*! zent/lib/input */ "./node_modules/zent/lib/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _uuid = __webpack_require__(/*! zent/lib/utils/uuid */ "./node_modules/zent/lib/utils/uuid.js");

var _uuid2 = _interopRequireDefault(_uuid);

var _reactBeautifulDnd = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");

var _createObjectURL = __webpack_require__(/*! zent/lib/utils/createObjectURL */ "./node_modules/zent/lib/utils/createObjectURL.js");

var _createObjectURL2 = _interopRequireDefault(_createObjectURL);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__(/*! ./constants */ "./src/pages/editor/widget/image-ad/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageEntry = exports.ImageEntry = function (_Component) {
  _inherits(ImageEntry, _Component);

  function ImageEntry() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImageEntry);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageEntry.__proto__ || Object.getPrototypeOf(ImageEntry)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      localImage: ''
    }, _this.onTitleChange = function (evt) {
      var value = evt.target.value;

      _this.props.onChange({ linkTitle: value });
    }, _this.onUrlChange = function (evt) {
      var value = evt.target.value;

      _this.props.onChange({ linkUrl: value });
    }, _this.onImageChange = function (evt) {
      var files = evt.target.files;

      var imageUrl = (0, _createObjectURL2.default)(files[0]);
      _this.props.onChange({ imageUrl: imageUrl });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImageEntry, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          imageId = _props.imageId,
          imageUrl = _props.imageUrl,
          linkTitle = _props.linkTitle,
          linkUrl = _props.linkUrl,
          error = _props.error,
          prefix = _props.prefix;
      var localImage = this.state.localImage;


      return _react2.default.createElement(
        _reactBeautifulDnd.Draggable,
        { draggableId: imageId, type: _constants.IMAGE_AD_DND_TYPE },
        function (provided) {
          var _cx;

          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              _extends({
                className: prefix + '-design-component-image-ad-editor__image-entry',
                ref: provided.innerRef,
                style: provided.draggableStyle
              }, provided.dragHandleProps),
              _react2.default.createElement(
                'div',
                {
                  className: prefix + '-design-component-image-ad-editor__image-entry-image-container'
                },
                _react2.default.createElement('img', { src: imageUrl, alt: linkTitle }),
                _react2.default.createElement(
                  'div',
                  {
                    className: (0, _classnames2.default)(prefix + '-design-component-image-ad-editor__image-entry-image-upload', (_cx = {}, _defineProperty(_cx, prefix + '-design-component-image-ad-editor__image-entry-image-upload--has-image', imageUrl), _defineProperty(_cx, prefix + '-design-component-image-ad-editor__image-entry-image-upload--no-image', !imageUrl), _cx))
                  },
                  imageUrl ? _react2.default.createElement(
                    'span',
                    null,
                    '\u91CD\u65B0\u4E0A\u4F20'
                  ) : _react2.default.createElement(
                    'a',
                    null,
                    _react2.default.createElement(
                      'b',
                      null,
                      '+'
                    ),
                    '\u6DFB\u52A0\u56FE\u7247'
                  ),
                  _react2.default.createElement('input', {
                    type: 'file',
                    accept: 'image/gif, image/jpeg, image/png',
                    title: '',
                    value: localImage,
                    onChange: _this2.onImageChange
                  })
                )
              ),
              _react2.default.createElement(
                'div',
                {
                  className: prefix + '-design-component-image-ad-editor__image-entry-controls'
                },
                _react2.default.createElement(
                  'div',
                  {
                    className: prefix + '-design-component-image-ad-editor__image-entry-image-control'
                  },
                  _react2.default.createElement(
                    'label',
                    null,
                    '\u6807\u9898:'
                  ),
                  _react2.default.createElement(_input2.default, { value: linkTitle, onChange: _this2.onTitleChange })
                ),
                _react2.default.createElement(
                  'div',
                  {
                    className: prefix + '-design-component-image-ad-editor__image-entry-image-control'
                  },
                  _react2.default.createElement(
                    'label',
                    null,
                    '\u94FE\u63A5:'
                  ),
                  _react2.default.createElement(_input2.default, { value: linkUrl, onChange: _this2.onUrlChange })
                )
              ),
              error && _react2.default.createElement(
                'div',
                {
                  className: prefix + '-design-component-image-ad-editor__image-entry-error'
                },
                error
              )
            ),
            provided.placeholder
          );
        }
      );
    }
  }]);

  return ImageEntry;
}(_react.Component);

ImageEntry.propTypes = {
  prefix: _propTypes2.default.string,
  imageId: _propTypes2.default.string,
  imageUrl: _propTypes2.default.string,
  linkUrl: _propTypes2.default.string,
  linkTitle: _propTypes2.default.string,
  error: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired
};
function createEmptyImageEntry(override) {
  return _extends(_defineProperty({
    imageUrl: '',
    linkTitle: '',
    linkUrl: ''
  }, _constants.IMAGE_AD_ENTRY_UUID_KEY, (0, _uuid2.default)()), override);
}

/***/ }),

/***/ "./src/pages/editor/widget/image-ad/constants.js":
/*!*******************************************************!*\
  !*** ./src/pages/editor/widget/image-ad/constants.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var IMAGE_SIZE = exports.IMAGE_SIZE = {
  SMALL: 1,
  LARGE: 2
};

var IMAGE_AD_LIMIT = exports.IMAGE_AD_LIMIT = 10;

var IMAGE_AD_ENTRY_UUID_KEY = exports.IMAGE_AD_ENTRY_UUID_KEY = '__image-ad-entry-uuid__';

var IMAGE_AD_DND_TYPE = exports.IMAGE_AD_DND_TYPE = 'zent-design-componentimage-ad-dnd-type';

/***/ }),

/***/ "./src/pages/editor/widget/image-ad/index.js":
/*!***************************************************!*\
  !*** ./src/pages/editor/widget/image-ad/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ImageAdEditor = __webpack_require__(/*! ./ImageAdEditor */ "./src/pages/editor/widget/image-ad/ImageAdEditor.js");

var _ImageAdEditor2 = _interopRequireDefault(_ImageAdEditor);

var _ImageAdPreview = __webpack_require__(/*! ./ImageAdPreview */ "./src/pages/editor/widget/image-ad/ImageAdPreview.js");

var _ImageAdPreview2 = _interopRequireDefault(_ImageAdPreview);

__webpack_require__(/*! ./index.pcss */ "./src/pages/editor/widget/image-ad/index.pcss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _ImageAdEditor2.default.designType,
  editor: _ImageAdEditor2.default,
  preview: _ImageAdPreview2.default,
  // 是否可以拖拽
  dragable: true,

  // 是否可以编辑数据
  editable: true,
  // 鼠标在组件上时 是否展示快捷操作面板
  configurable: false,
  // 选中时是否高亮
  highlightWhenSelect: true
};

/***/ }),

/***/ "./src/pages/editor/widget/image-ad/index.pcss":
/*!*****************************************************!*\
  !*** ./src/pages/editor/widget/image-ad/index.pcss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/editor/widget/line/LineEditor.js":
/*!****************************************************!*\
  !*** ./src/pages/editor/widget/line/LineEditor.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _radio = __webpack_require__(/*! zent/lib/radio */ "./node_modules/zent/lib/radio/index.js");

var _radio2 = _interopRequireDefault(_radio);

var _colorpicker = __webpack_require__(/*! zent/lib/colorpicker */ "./node_modules/zent/lib/colorpicker/index.js");

var _colorpicker2 = _interopRequireDefault(_colorpicker);

var _DesignEditor2 = __webpack_require__(/*! ../../components/design/editor/DesignEditor */ "./src/pages/editor/components/design/editor/DesignEditor.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = _radio2.default.Group;
var DEFAULT_COLOR = '#e5e5e5';

var LineEditor = function (_DesignEditor) {
  _inherits(LineEditor, _DesignEditor);

  function LineEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LineEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LineEditor.__proto__ || Object.getPrototypeOf(LineEditor)).call.apply(_ref, [this].concat(args))), _this), _this.onColorChange = _this.onCustomInputChange('color'), _this.onColorReset = function () {
      _this.onColorChange(DEFAULT_COLOR);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LineEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefix = _props.prefix,
          value = _props.value,
          showError = _props.showError,
          validation = _props.validation;


      return _react2.default.createElement(
        'div',
        { className: prefix + '-design-component-line-editor' },
        _react2.default.createElement(
          _DesignEditor2.ControlGroup,
          {
            label: '\u989C\u8272:',
            showError: showError || this.getMetaProperty('content', 'touched'),
            error: validation.content
          },
          _react2.default.createElement(_colorpicker2.default, {
            className: prefix + '-design-component-line-editor_color-select',
            color: value.color,
            onChange: this.onColorChange
          }),
          _react2.default.createElement(
            'span',
            {
              className: prefix + '-design-component-line-editor_color-reset',
              onClick: this.onColorReset
            },
            '\u91CD\u7F6E'
          )
        ),
        _react2.default.createElement(
          _DesignEditor2.ControlGroup,
          {
            label: '\u8FB9\u8DDD:',
            showError: showError || this.getMetaProperty('content', 'touched'),
            error: validation.content
          },
          _react2.default.createElement(
            RadioGroup,
            { value: value.hasPadding, onChange: this.onInputChange },
            _react2.default.createElement(
              _radio2.default,
              { name: 'hasPadding', value: false },
              '\u65E0\u8FB9\u8DDD'
            ),
            _react2.default.createElement(
              _radio2.default,
              { name: 'hasPadding', value: true },
              '\u5DE6\u53F3\u7559\u8FB9'
            )
          )
        ),
        _react2.default.createElement(
          _DesignEditor2.ControlGroup,
          {
            label: '\u6837\u5F0F:',
            showError: showError || this.getMetaProperty('content', 'touched'),
            error: validation.content
          },
          _react2.default.createElement(
            RadioGroup,
            { value: value.lineType, onChange: this.onInputChange },
            _react2.default.createElement(
              _radio2.default,
              { name: 'lineType', value: 'solid' },
              '\u5B9E\u7EBF'
            ),
            _react2.default.createElement(
              _radio2.default,
              { name: 'lineType', value: 'dashed' },
              '\u865A\u7EBF'
            ),
            _react2.default.createElement(
              _radio2.default,
              { name: 'lineType', value: 'dotted' },
              '\u70B9\u7EBF'
            )
          )
        )
      );
    }
  }], [{
    key: 'getInitialValue',
    value: function getInitialValue() {
      return {
        color: DEFAULT_COLOR,
        hasPadding: false,
        lineType: 'solid'
      };
    }
  }]);

  return LineEditor;
}(_DesignEditor2.DesignEditor);

LineEditor.designType = 'line';
LineEditor.designDescription = '辅助线';
exports.default = LineEditor;

/***/ }),

/***/ "./src/pages/editor/widget/line/LinePreview.js":
/*!*****************************************************!*\
  !*** ./src/pages/editor/widget/line/LinePreview.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinePreview = function (_PureComponent) {
  _inherits(LinePreview, _PureComponent);

  function LinePreview() {
    _classCallCheck(this, LinePreview);

    return _possibleConstructorReturn(this, (LinePreview.__proto__ || Object.getPrototypeOf(LinePreview)).apply(this, arguments));
  }

  _createClass(LinePreview, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          prefix = _props.prefix;


      return _react2.default.createElement(
        'div',
        { className: prefix + '-design-component-line-preview' },
        _react2.default.createElement('div', { style: createStyle(value) })
      );
    }
  }]);

  return LinePreview;
}(_react.PureComponent);

exports.default = LinePreview;


function createStyle(value) {
  var color = value.color,
      hasPadding = value.hasPadding,
      lineType = value.lineType;


  return {
    height: 0,
    borderTopWidth: '1px',
    margin: hasPadding ? '0 10px' : 0,
    borderColor: color,
    borderStyle: lineType
  };
}

/***/ }),

/***/ "./src/pages/editor/widget/line/index.js":
/*!***********************************************!*\
  !*** ./src/pages/editor/widget/line/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LineEditor = __webpack_require__(/*! ./LineEditor */ "./src/pages/editor/widget/line/LineEditor.js");

var _LineEditor2 = _interopRequireDefault(_LineEditor);

var _LinePreview = __webpack_require__(/*! ./LinePreview */ "./src/pages/editor/widget/line/LinePreview.js");

var _LinePreview2 = _interopRequireDefault(_LinePreview);

__webpack_require__(/*! ./index.pcss */ "./src/pages/editor/widget/line/index.pcss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _LineEditor2.default.designType,
  editor: _LineEditor2.default,
  preview: _LinePreview2.default
};

/***/ }),

/***/ "./src/pages/editor/widget/line/index.pcss":
/*!*************************************************!*\
  !*** ./src/pages/editor/widget/line/index.pcss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/editor/widget/richtext/RichtextEditor.js":
/*!************************************************************!*\
  !*** ./src/pages/editor/widget/richtext/RichtextEditor.js ***!
  \************************************************************/
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

var _colorpicker = __webpack_require__(/*! zent/lib/colorpicker */ "./node_modules/zent/lib/colorpicker/index.js");

var _colorpicker2 = _interopRequireDefault(_colorpicker);

var _button = __webpack_require__(/*! zent/lib/button */ "./node_modules/zent/lib/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _checkbox = __webpack_require__(/*! zent/lib/checkbox */ "./node_modules/zent/lib/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _DesignEditor2 = __webpack_require__(/*! ../../components/design/editor/DesignEditor */ "./src/pages/editor/components/design/editor/DesignEditor.jsx");

var _editor = __webpack_require__(/*! ./editor */ "./src/pages/editor/widget/richtext/editor/index.js");

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reserColor = '#f9f9f9';

var RichtextEditor = function (_DesignEditor) {
  _inherits(RichtextEditor, _DesignEditor);

  function RichtextEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RichtextEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RichtextEditor.__proto__ || Object.getPrototypeOf(RichtextEditor)).call.apply(_ref, [this].concat(args))), _this), _this.handleResetBackground = function () {
      _this.onCustomInputChange('color')(reserColor);
    }, _this.onColorChange = function (color) {
      _this.onCustomInputChange('color')(color);
    }, _this.onFullscreenChange = function (e) {
      var isFullscreen = Number(e.target.checked);
      _this.onCustomInputChange('fullscreen')(isFullscreen);
    }, _this.onEditorChange = function (val) {
      _this.onCustomInputChange('content')(val);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RichtextEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          richTextConfig = _props.richTextConfig;


      return _react2.default.createElement(
        'div',
        { className: 'zent-design-component-richtext-editor' },
        _react2.default.createElement(
          _DesignEditor2.ControlGroup,
          { focusOnLabelClick: false, label: '\u80CC\u666F\u989C\u8272\uFF1A' },
          _react2.default.createElement(
            'div',
            { className: 'input-append' },
            _react2.default.createElement(_colorpicker2.default, {
              className: 'zent-design-component-richtext-editor__color-picker-popover',
              color: value.color,
              onChange: this.onColorChange
            }),
            _react2.default.createElement(
              _button2.default,
              { onClick: this.handleResetBackground },
              '\u91CD\u7F6E'
            )
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'fullscreen', className: 'control-label' },
            '\u662F\u5426\u5168\u5C4F\uFF1A'
          ),
          _react2.default.createElement(
            _checkbox2.default,
            {
              className: 'zent-design-component-richtext-editor-checkbox-wrap',
              name: 'fullscreen',
              checked: value.fullscreen,
              onChange: this.onFullscreenChange
            },
            '\u5168\u5C4F\u663E\u793A'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'zent-design-component-richtext-editor-group' },
          _react2.default.createElement(_editor2.default, _extends({
            value: value.content,
            onChange: this.onEditorChange,
            editorConfig: {
              initialFrameWidth: 386,
              initialFrameHeight: 600
            }
          }, richTextConfig))
        )
      );
    }
  }], [{
    key: 'getInitialValue',
    value: function getInitialValue() {
      return {
        color: reserColor,
        content: '',
        fullscreen: 0
      };
    }
  }]);

  return RichtextEditor;
}(_DesignEditor2.DesignEditor);

RichtextEditor.defaultProps = {
  richTextConfig: {}
};
RichtextEditor.designType = 'rich_text';
RichtextEditor.designDescription = '富文本';
exports.default = RichtextEditor;

/***/ }),

/***/ "./src/pages/editor/widget/richtext/RichtextPreview.js":
/*!*************************************************************!*\
  !*** ./src/pages/editor/widget/richtext/RichtextPreview.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var emptyRichtext = '<p>点此编辑『富文本』内容 ——&gt;</p><p>你可以对文字进行<strong>加粗</strong>、<em>斜体</em>、<span style="text-decoration: underline;">下划线</span>、<span style="text-decoration: line-through;">删除线</span>、文字<span style="color: rgb(0, 176, 240);">颜色</span>、<span style="background-color: rgb(255, 192, 0); color: rgb(255, 255, 255);">背景色</span>、以及字号<span style="font-size: 20px;">大</span><span style="font-size: 14px;">小</span>等简单排版操作。</p><p>还可以在这里加入表格了</p><table><tbody><tr><td width="93" valign="top" style="word-break: break-all;">中奖客户</td><td width="93" valign="top" style="word-break: break-all;">发放奖品</td><td width="93" valign="top" style="word-break: break-all;">备注</td></tr><tr><td width="93" valign="top" style="word-break: break-all;">猪猪</td><td width="93" valign="top" style="word-break: break-all;">内测码</td><td width="93" valign="top" style="word-break: break-all;"><em><span style="color: rgb(255, 0, 0);">已经发放</span></em></td></tr><tr><td width="93" valign="top" style="word-break: break-all;">大麦</td><td width="93" valign="top" style="word-break: break-all;">积分</td><td width="93" valign="top" style="word-break: break-all;"><a href="javascript: void(0);" target="_blank">领取地址</a></td></tr></tbody></table>';

var RichtextPreview = function (_Component) {
  _inherits(RichtextPreview, _Component);

  function RichtextPreview() {
    _classCallCheck(this, RichtextPreview);

    return _possibleConstructorReturn(this, (RichtextPreview.__proto__ || Object.getPrototypeOf(RichtextPreview)).apply(this, arguments));
  }

  _createClass(RichtextPreview, [{
    key: 'render',
    value: function render() {
      var value = this.props.value;

      var content = value.content || emptyRichtext;
      var fullscreen = value.fullscreen,
          color = value.color;


      return _react2.default.createElement('div', {
        dangerouslySetInnerHTML: { __html: content } // eslint-disable-line
        , className: (0, _classnames2.default)('mp-design-component-richtext-preview', {
          'mp-design-component-richtext-preview--fullscreen': fullscreen
        }),
        style: { backgroundColor: color }
      });
    }
  }]);

  return RichtextPreview;
}(_react.Component);

RichtextPreview.propTypes = {
  value: _propTypes2.default.object,
  design: _propTypes2.default.object
};
exports.default = RichtextPreview;

/***/ }),

/***/ "./src/pages/editor/widget/richtext/editor/index.js":
/*!**********************************************************!*\
  !*** ./src/pages/editor/widget/richtext/editor/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _assign = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _noop = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");

var _noop2 = _interopRequireDefault(_noop);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uuid = __webpack_require__(/*! zent/lib/utils/uuid */ "./node_modules/zent/lib/utils/uuid.js");

var _uuid2 = _interopRequireDefault(_uuid);

__webpack_require__(/*! ./plugins */ "./src/pages/editor/widget/richtext/editor/plugins/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UEDITOR_LOADED_KEY = '__ZENT_UEDITOR_LOADED_STATUS__';

// ueditor 默认值
var initConfig = {
  toolbars: [['bold', 'italic', 'underline', 'strikethrough', 'forecolor', 'backcolor', 'justifyleft', 'justifycenter', 'justifyright', '|', 'insertunorderedlist', 'insertorderedlist', 'blockquote'], ['emotion', 'insertvideo', 'link', 'removeformat', '|', 'rowspacingtop', 'rowspacingbottom', 'lineheight', 'paragraph', 'fontsize'], ['inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols']],
  autoClearinitialContent: false,
  autoFloatEnabled: true, // 是否保持 toolbar 滚动时不动
  focus: false,
  wordCount: true,
  elementPathEnabled: false,
  pasteplain: false, // 是否默认为纯文本粘贴。false为不使用纯文本粘贴，true为使用纯文本粘贴
  initialFrameWidth: 640, // 初始化编辑器宽度
  initialFrameHeight: 200,
  maximumWords: 10000
};

var RichText = function (_Component) {
  _inherits(RichText, _Component);

  function RichText(props) {
    _classCallCheck(this, RichText);

    // 生成加载 ueditor 的节点id
    var _this = _possibleConstructorReturn(this, (RichText.__proto__ || Object.getPrototypeOf(RichText)).call(this, props));

    _this.initRichText = function () {
      var UE = window.UE;
      var target = document.getElementById(_this.uuid);

      if (!UE || !target) return false;

      var _this$props = _this.props,
          value = _this$props.value,
          editorConfig = _this$props.editorConfig;


      var conf = (0, _assign2.default)({}, initConfig, editorConfig);

      var editor = new UE.ui.Editor(conf);
      _this.editor = editor;

      editor.addListener('blur contentChange', function () {
        _this.onChange();
      });
      editor.render(target);
      editor.ready(function () {
        editor.setContent(value);
      });
    };

    _this.onChange = function () {
      var val = _this.editor.getContent();
      _this.props.onChange && _this.props.onChange(val);
    };

    _this.uuid = (0, _uuid2.default)();
    return _this;
  }

  _createClass(RichText, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var timer = null;

      if (window.UE) {
        this.initRichText();
      } else {
        // 当一个页面中存在多个 RichText 组件时，需避免加载多份 ueditor.js
        timer = setInterval(function () {
          var status = window[UEDITOR_LOADED_KEY];
          if (status === 1) {
            // 加载中
          } else if (status === 2) {
            clearInterval(timer);
            _this2.initRichText();
          } else {
            _this2.loadUEditorScript();
          }
        }, 50);
      }
    }
  }, {
    key: 'loadUEditorScript',
    value: function loadUEditorScript() {
      var _this3 = this;

      if (window[UEDITOR_LOADED_KEY] !== undefined) return;

      window[UEDITOR_LOADED_KEY] = 1; // 加载中
      var _props = this.props,
          ueditorHomeUrl = _props.ueditorHomeUrl,
          ueditorIframeUrl = _props.ueditorIframeUrl,
          ueditorUrl = _props.ueditorUrl,
          ueditorConfigUrl = _props.ueditorConfigUrl;


      window.UEDITOR_HOME_URL = ueditorHomeUrl;
      window.UEDITOR_IFRAME_URL = ueditorIframeUrl;

      this.createScript(ueditorConfigUrl, function () {
        _this3.createScript(ueditorUrl, function () {
          window[UEDITOR_LOADED_KEY] = 2; // 加载完成
        });
      });
    }
  }, {
    key: 'createScript',
    value: function createScript(url, callback) {
      var oScript = document.createElement('script');
      oScript.type = 'text/javascript';
      oScript.async = true;
      oScript.src = url;

      oScript.onload = function () {
        callback();
      };

      document.body.appendChild(oScript);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.editor) return;
      this.editor.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var prefix = this.props.prefix;


      return _react2.default.createElement(
        'div',
        { className: prefix + '-richtext ' + this.props.className },
        _react2.default.createElement('div', { id: this.uuid })
      );
    }
  }]);

  return RichText;
}(_react.Component);

RichText.propTypes = {
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  ueditorUrl: _propTypes2.default.string,
  ueditorConfigUrl: _propTypes2.default.string,
  ueditorHomeUrl: _propTypes2.default.string,
  ueditorIframeUrl: _propTypes2.default.string,
  editorConfig: _propTypes2.default.object,
  className: _propTypes2.default.string,
  prefix: _propTypes2.default.string
};
RichText.defaultProps = {
  value: '',
  onChange: _noop2.default,
  ueditorUrl: '//b.yzcdn.cn/v2/vendor/ueditor/release/ueditor.all.min.201707251345.js',
  ueditorConfigUrl: '//b.yzcdn.cn/v2/vendor/ueditor/release/ueditor.config.201707251345.js',
  ueditorHomeUrl: '//b.yzcdn.cn/v2/vendor/ueditor/dist/',
  ueditorIframeUrl: '//www.youzan.com/v2/static/vendor/ueditor/dist/',
  editorConfig: {}, // ueditor 默认值
  className: '',
  prefix: 'zent-design-component'
};
exports.default = RichText;

/***/ }),

/***/ "./src/pages/editor/widget/richtext/editor/plugins/Emotion.js":
/*!********************************************************************!*\
  !*** ./src/pages/editor/widget/richtext/editor/plugins/Emotion.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (options) {
  openDialog({
    dialogId: dialogId,
    className: 'zent-design-component-richtext__emotion',
    children: _react2.default.createElement(Emotion, { callback: options.callback })
  });
};

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _dialog = __webpack_require__(/*! zent/lib/dialog */ "./node_modules/zent/lib/dialog/index.js");

var _dialog2 = _interopRequireDefault(_dialog);

var _tabs = __webpack_require__(/*! zent/lib/tabs */ "./node_modules/zent/lib/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPanel = _tabs2.default.TabPanel;
var openDialog = _dialog2.default.openDialog,
    closeDialog = _dialog2.default.closeDialog;

var dialogId = 'zent_design_component_richtext_emotion_dialog';

var defaultTab = [{
  name: '精选',
  whichTpl: 'normal',
  tplInfo: 'Choice',
  wrapClass: 'jd',
  sum: 84,
  imgFolder: 'jx2/',
  imgName: 'j_00'
}, {
  name: '兔斯基',
  whichTpl: 'normal',
  tplInfo: 'Tuzki',
  wrapClass: 'tsj',
  sum: 40,
  imgFolder: 'tsj/',
  imgName: 't_00'
}, {
  name: '绿豆蛙',
  whichTpl: 'normal',
  tplInfo: 'Lvdouwa',
  wrapClass: 'ldw',
  sum: 52,
  imgFolder: 'ldw/',
  imgName: 'w_00'
}, {
  name: '波波',
  whichTpl: 'normal',
  tplInfo: 'Bobo',
  wrapClass: 'bb',
  sum: 63,
  imgFolder: 'bobo/',
  imgName: 'b_00'
}, {
  name: '北鼻猫',
  whichTpl: 'normal',
  tplInfo: 'BabyCat',
  wrapClass: 'cat',
  sum: 20,
  imgFolder: 'babycat/',
  imgName: 'C_00'
}, {
  name: '泡泡',
  whichTpl: 'pp',
  tplInfo: 'Bubble',
  wrapClass: 'pp',
  sum: 50,
  imgFolder: 'face/',
  imgName: 'i_f_'
}, {
  name: '有啊',
  whichTpl: 'normal',
  tplInfo: 'Youa',
  wrapClass: 'youa',
  sum: 44,
  imgFolder: 'youa/',
  imgName: 'y_00'
}, {
  name: 'QQ',
  whichTpl: 'qq',
  tplInfo: 'Qq',
  wrapClass: 'qq',
  sum: 105,
  imgFolder: 'qq/',
  imgName: ''
}];

var Emotion = function (_Component) {
  _inherits(Emotion, _Component);

  function Emotion(props) {
    _classCallCheck(this, Emotion);

    var _this = _possibleConstructorReturn(this, (Emotion.__proto__ || Object.getPrototypeOf(Emotion)).call(this, props));

    _this.onTabChange = function (id) {
      _this.setState({
        activeId: id
      });
    };

    _this.state = {
      activeId: 'Choice'
    };
    return _this;
  }

  _createClass(Emotion, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.initTabs();
    }
  }, {
    key: 'initTabs',
    value: function initTabs() {
      var _this2 = this;

      this.allTabs = defaultTab.map(function (item, index) {
        var tabContent = [];

        for (var i = 1, len = item.sum; i <= len; i++) {
          var imgSrc = '' + item.imgFolder + item.imgName + (i < 10 ? '0' + i : i) + '.gif';
          var styleObj = {};
          var pos = '';

          if (item.whichTpl === 'pp') {
            styleObj = { backgroundPosition: 'left ' + (i - 1) * -25 + 'px' };
            pos = i % 12 <= 6 ? 'posRight' : 'posLeft';
          } else if (item.whichTpl === 'qq') {
            styleObj = { backgroundPosition: (i - 1) * -24 + 'px 50%' };
            pos = i % 15 <= 6 ? 'posRight' : 'posLeft';
          } else {
            styleObj = { backgroundPosition: 'left ' + (i - 1) * -35 + 'px' };
            pos = i % 12 <= 6 ? 'posRight' : 'posLeft';
          }

          tabContent.push(_react2.default.createElement(
            'div',
            { key: item.tplInfo + '-' + i },
            _react2.default.createElement('span', {
              className: item.wrapClass,
              style: styleObj,
              onClick: _this2.onClick.bind(_this2, item, imgSrc, pos)
            })
          ));
        }

        return _react2.default.createElement(
          TabPanel,
          { tab: item.name, id: item.tplInfo, key: index },
          _react2.default.createElement(
            'div',
            { className: 'emotion-content' },
            _react2.default.createElement(
              'div',
              { className: 'emotion-list-wrapper' },
              tabContent
            )
          )
        );
      });
    }
  }, {
    key: 'onClick',
    value: function onClick(item, imgSrc) {
      var imgAddr = 'https://b.yzcdn.cn/v2';
      // App的WebView不支持//需要指明真正的协议
      imgAddr = imgAddr.replace(/^\/\//, 'https://');
      imgSrc = imgAddr + '/image/ueditor_emotion/' + imgSrc;

      closeDialog(dialogId);
      this.props.callback(imgSrc);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _tabs2.default,
        {
          activeId: this.state.activeId,
          onTabChange: this.onTabChange,
          className: 'emotion-tabs'
        },
        this.allTabs
      );
    }
  }]);

  return Emotion;
}(_react.Component);

/***/ }),

/***/ "./src/pages/editor/widget/richtext/editor/plugins/Link.js":
/*!*****************************************************************!*\
  !*** ./src/pages/editor/widget/richtext/editor/plugins/Link.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (options) {
  var form = void 0;
  var closeDialog = void 0;

  var onConfirm = function onConfirm() {
    return new Promise(function (resolve, reject) {
      form.submit();
      if (form.isValid()) {
        var formValues = form.getFormValues();
        var linkUrl = formValues.linkUrl;
        var reg = /^tel:/;
        var cheackURl = /(:\s*\/\/|tel:)/.test(formValues.linkUrl);

        // 包含http,ftp,file开头的地址，直接引用
        if (!cheackURl) {
          _notify2.default.success('您输入的超链接中不包含http等协议名称，默认将为您添加http://前缀');
          linkUrl = 'http://' + linkUrl;
        }
        var urlInfo = {
          target: reg.test(linkUrl) ? '' : '_blank',
          href: linkUrl,
          textValue: linkUrl
        };
        options.callback(urlInfo);
        resolve();
      } else {
        reject();
      }
    });
  };

  var onPressEnter = function onPressEnter() {
    onConfirm().then(function () {
      closeDialog();
    }).catch(function () {
      /* no nothing */
    });
  };

  closeDialog = _sweetalert2.default.confirm({
    className: 'zent-design-component-richtext__link',
    title: '超链接',
    content: _react2.default.createElement(LinkForm, { onPressEnter: onPressEnter, ref: function ref(f) {
        return form = f;
      } }),
    onConfirm: onConfirm
  });
};

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _form = __webpack_require__(/*! zent/lib/form */ "./node_modules/zent/lib/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _sweetalert = __webpack_require__(/*! zent/lib/sweetalert */ "./node_modules/zent/lib/sweetalert/index.js");

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _notify = __webpack_require__(/*! zent/lib/notify */ "./node_modules/zent/lib/notify/index.js");

var _notify2 = _interopRequireDefault(_notify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createForm = _form2.default.createForm,
    Field = _form2.default.Field,
    InputField = _form2.default.InputField;


var LinkForm = createForm({})(function (_React$Component) {
  _inherits(LinkFromImpl, _React$Component);

  function LinkFromImpl() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkFromImpl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkFromImpl.__proto__ || Object.getPrototypeOf(LinkFromImpl)).call.apply(_ref, [this].concat(args))), _this), _this.onPressEnter = function (evt) {
      evt.preventDefault();
      _this.props.onPressEnter();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LinkFromImpl, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'share-content' },
        _react2.default.createElement(
          _form2.default,
          { horizontal: true },
          _react2.default.createElement(Field, {
            name: 'linkUrl',
            label: '\u94FE\u63A5\u5730\u5740',
            validations: {
              required: true
            },
            validationErrors: {
              required: '链接地址不能为空'
            },
            onPressEnter: this.onPressEnter,
            autoFocus: true,
            component: InputField
          }),
          ' '
        ),
        ' '
      );
    }
  }]);

  return LinkFromImpl;
}(_react2.default.Component));

/***/ }),

/***/ "./src/pages/editor/widget/richtext/editor/plugins/Video.js":
/*!******************************************************************!*\
  !*** ./src/pages/editor/widget/richtext/editor/plugins/Video.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (options) {
  var _this2 = this;

  var closeDialog = _sweetalert2.default.confirm({
    className: 'zent-design-component-richtext__video',
    title: '视频插入视频',
    content: _react2.default.createElement(VideoForm, {
      callback: options.callback,
      onClose: function onClose() {
        return closeDialog();
      },
      ref: function ref(form) {
        return _this2.form = form;
      }
    }),
    onConfirm: function onConfirm() {
      _this2.form.getWrappedForm().saveVideo();
    }
  });
};

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _form = __webpack_require__(/*! zent/lib/form */ "./node_modules/zent/lib/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _sweetalert = __webpack_require__(/*! zent/lib/sweetalert */ "./node_modules/zent/lib/sweetalert/index.js");

var _sweetalert2 = _interopRequireDefault(_sweetalert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createForm = _form2.default.createForm,
    Field = _form2.default.Field,
    InputField = _form2.default.InputField;


var YOUKU_IMAGE = 'http://img.yzcdn.cn/public_files/2015/09/10/04eeb56eb29cbfbe29d67042be4d21ed.jpg';
var TUDOU_IMAGE = 'http://img.yzcdn.cn/public_files/2015/09/10/1640ba3f20b22d4b35a62d72831e8110.jpg';

var VideoForm = createForm({})(function (_Component) {
  _inherits(_class, _Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.preview = _this.preview.bind(_this);
    _this.width = props.width || 620;
    _this.height = props.height || _this.width * 0.75;

    // 自定义需要生成图片的width和height
    _this.imgWidth = props.imgWidth || 300;
    _this.imgHeight = props.imgHeight || 225;

    _this.iframeUrl = '';

    _this.state = {
      videoUrl: ''
    };
    return _this;
  }

  _createClass(_class, [{
    key: 'preview',
    value: function preview(e) {
      var videoUrl = e.target.value;
      if (e.type === 'paste') {
        setTimeout(this.previewVideo.bind(this, videoUrl), 1);
      } else {
        this.previewVideo(videoUrl);
      }
      this.setState({
        videoUrl: videoUrl
      });
    }
  }, {
    key: 'previewVideo',
    value: function previewVideo(url) {
      this.iframeUrl = this.processUrl(url);
      this.renderIframe();
    }
  }, {
    key: 'processUrl',
    value: function processUrl(url) {
      if (!url) {
        return;
      }

      var id = void 0;
      var iframeUrl = void 0;

      if (url.indexOf('v.qq.com') >= 0) {
        id = url.match(/vid=([^&]*)($|&)/);
        if (id) {
          iframeUrl = 'https://v.qq.com/iframe/player.html?vid=' + id[1] + '&tiny=0&auto=0';
        } else {
          id = url.match(/\/([0-9a-zA-Z]+).html/);
          if (id) {
            iframeUrl = 'https://v.qq.com/iframe/player.html?vid=' + id[1] + '&tiny=0&auto=0';
          }
        }
        if (!id) {
          return;
        }
      } else if (url.indexOf('v.youku.com') >= 0) {
        id = url.match(/id_(.*)\.html/);
        iframeUrl = 'http://player.youku.com/embed/' + id[1];
      } else if (url.indexOf('//player.youku.com/embed/') >= 0) {
        iframeUrl = url.match(/src="([^"]*)"/)[1];
      } else if (url.indexOf('tudou.com') >= 0) {
        id = url.match(/\/([\w\-]*)\.html/)[1];
        iframeUrl = 'http://www.tudou.com/programs/view/html5embed.action?code=' + id;
      } else {
        return;
      }

      return iframeUrl;
    }
  }, {
    key: 'renderIframe',
    value: function renderIframe(src) {
      src = src || this.iframeUrl;

      if (src) {
        var video = '<iframe src="' + src + '" width="' + this.width + '" height="' + this.height + '" allowfullscreen="true"></ifame>';

        if (this.isYouku() || this.isTudou()) {
          video = '<img src="' + this.getSiteLogoImage() + '" />';
        }

        document.getElementById('preview').innerHTML = video;
      } else {
        document.getElementById('preview').innerHTML = '<span>请复制腾讯、优酷视频地址输入框。</span>';
      }
    }
  }, {
    key: 'isYouku',
    value: function isYouku() {
      return this.iframeUrl && this.iframeUrl.match('youku');
    }
  }, {
    key: 'isTudou',
    value: function isTudou() {
      return this.iframeUrl && this.iframeUrl.match('tudou');
    }
  }, {
    key: 'getSiteLogoImage',
    value: function getSiteLogoImage() {
      if (this.isYouku()) {
        return YOUKU_IMAGE;
      }
      if (this.isTudou()) {
        return TUDOU_IMAGE;
      }
    }
  }, {
    key: 'saveVideo',
    value: function saveVideo() {
      if (!this.iframeUrl) return;

      var imgInfo = {
        url: this.iframeUrl,
        width: this.imgWidth,
        height: this.imgHeight
      };

      if (this.isYouku() || this.isTudou()) {
        imgInfo.html = '<a class="video-link" target="_blank" href="' + this.iframeUrl + '"><img src="' + this.getSiteLogoImage() + '" /></a>';
      }

      this.props.callback(imgInfo);
      this.props.onClose();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _form2.default,
        {
          horizontal: true,
          className: 'video-content',
          onSubmit: this.props.handleSubmit(this.saveVideo)
        },
        _react2.default.createElement(
          'strong',
          null,
          '\u4E3A\u4E86\u5728\u5FAE\u4FE1\u4E2D\u6709\u66F4\u597D\u7684\u4F53\u9A8C\uFF0C\u63A8\u8350\u4F7F\u7528',
          _react2.default.createElement(
            'a',
            {
              href: 'http://v.qq.com',
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            '\u817E\u8BAF\u89C6\u9891'
          ),
          '\u3002'
        ),
        _react2.default.createElement(Field, {
          name: 'videoUrl',
          label: '\u89C6\u9891\u5730\u5740',
          placeholder: '\u590D\u5236\u89C6\u9891\u5730\u5740\u5230\u8FD9\u91CC',
          component: InputField,
          value: this.state.videoUrl,
          onInput: this.preview,
          onChange: this.preview
        }),
        _react2.default.createElement(
          'div',
          { id: 'preview' },
          _react2.default.createElement(
            'span',
            null,
            '\u9884\u89C8\u533A'
          )
        )
      );
    }
  }]);

  return _class;
}(_react.Component));

/***/ }),

/***/ "./src/pages/editor/widget/richtext/editor/plugins/index.js":
/*!******************************************************************!*\
  !*** ./src/pages/editor/widget/richtext/editor/plugins/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Link = __webpack_require__(/*! ./Link */ "./src/pages/editor/widget/richtext/editor/plugins/Link.js");

var _Link2 = _interopRequireDefault(_Link);

var _Emotion = __webpack_require__(/*! ./Emotion */ "./src/pages/editor/widget/richtext/editor/plugins/Emotion.js");

var _Emotion2 = _interopRequireDefault(_Emotion);

var _Video = __webpack_require__(/*! ./Video */ "./src/pages/editor/widget/richtext/editor/plugins/Video.js");

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
window.__ueditor_link = _Link2.default;
window.__ueditor_emotion = _Emotion2.default;
window.__ueditor_video = _Video2.default;

/***/ }),

/***/ "./src/pages/editor/widget/richtext/index.js":
/*!***************************************************!*\
  !*** ./src/pages/editor/widget/richtext/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RichtextEditor = __webpack_require__(/*! ./RichtextEditor */ "./src/pages/editor/widget/richtext/RichtextEditor.js");

var _RichtextEditor2 = _interopRequireDefault(_RichtextEditor);

var _RichtextPreview = __webpack_require__(/*! ./RichtextPreview */ "./src/pages/editor/widget/richtext/RichtextPreview.js");

var _RichtextPreview2 = _interopRequireDefault(_RichtextPreview);

__webpack_require__(/*! ./index.pcss */ "./src/pages/editor/widget/richtext/index.pcss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _RichtextEditor2.default.designType,
  editor: _RichtextEditor2.default,
  preview: _RichtextPreview2.default,
  limit: 1
};

/***/ }),

/***/ "./src/pages/editor/widget/richtext/index.pcss":
/*!*****************************************************!*\
  !*** ./src/pages/editor/widget/richtext/index.pcss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/editor/widget/whitespace/WhitespaceEditor.js":
/*!****************************************************************!*\
  !*** ./src/pages/editor/widget/whitespace/WhitespaceEditor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _slider = __webpack_require__(/*! zent/lib/slider */ "./node_modules/zent/lib/slider/index.js");

var _slider2 = _interopRequireDefault(_slider);

var _DesignEditor2 = __webpack_require__(/*! ../../components/design/editor/DesignEditor */ "./src/pages/editor/components/design/editor/DesignEditor.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WhitespaceEditor = function (_DesignEditor) {
  _inherits(WhitespaceEditor, _DesignEditor);

  function WhitespaceEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WhitespaceEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WhitespaceEditor.__proto__ || Object.getPrototypeOf(WhitespaceEditor)).call.apply(_ref, [this].concat(args))), _this), _this.onHeightChange = _this.onCustomInputChange('height'), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WhitespaceEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          prefix = _props.prefix;


      return _react2.default.createElement(
        'div',
        { className: prefix + '-design-component-whitespace-editor' },
        _react2.default.createElement(
          _DesignEditor2.ControlGroup,
          {
            label: '\u7A7A\u767D\u9AD8\u5EA6:',
            className: prefix + '-design-component-whitespace-editor__height'
          },
          _react2.default.createElement(_slider2.default, {
            min: 10,
            max: 100,
            value: value.height,
            onChange: this.onHeightChange,
            withInput: false
          }),
          _react2.default.createElement(
            'span',
            null,
            value.height,
            ' \u50CF\u7D20'
          )
        )
      );
    }

    // 组件的类型


    // 组件的描述

  }], [{
    key: 'getInitialValue',


    // 添加组件时调用，用来获取新组件的初始值
    value: function getInitialValue() {
      return {
        height: 30
      };
    }
  }]);

  return WhitespaceEditor;
}(_DesignEditor2.DesignEditor);

WhitespaceEditor.designType = 'white';
WhitespaceEditor.designDescription = _react2.default.createElement(
  'span',
  null,
  '\u8F85\u52A9',
  _react2.default.createElement('br', null),
  '\u7A7A\u767D'
);
exports.default = WhitespaceEditor;

/***/ }),

/***/ "./src/pages/editor/widget/whitespace/WhitespacePreview.js":
/*!*****************************************************************!*\
  !*** ./src/pages/editor/widget/whitespace/WhitespacePreview.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WhitespacePreview = function (_PureComponent) {
  _inherits(WhitespacePreview, _PureComponent);

  function WhitespacePreview() {
    _classCallCheck(this, WhitespacePreview);

    return _possibleConstructorReturn(this, (WhitespacePreview.__proto__ || Object.getPrototypeOf(WhitespacePreview)).apply(this, arguments));
  }

  _createClass(WhitespacePreview, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          prefix = _props.prefix;


      return _react2.default.createElement('div', {
        className: prefix + '-design-component-whitespace-preview',
        style: { height: value.height + 'px' }
      });
    }
  }]);

  return WhitespacePreview;
}(_react.PureComponent);

WhitespacePreview.propTypes = {
  value: _propTypes2.default.object,
  prefix: _propTypes2.default.string
};
exports.default = WhitespacePreview;

/***/ }),

/***/ "./src/pages/editor/widget/whitespace/index.js":
/*!*****************************************************!*\
  !*** ./src/pages/editor/widget/whitespace/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WhitespaceEditor = __webpack_require__(/*! ./WhitespaceEditor */ "./src/pages/editor/widget/whitespace/WhitespaceEditor.js");

var _WhitespaceEditor2 = _interopRequireDefault(_WhitespaceEditor);

var _WhitespacePreview = __webpack_require__(/*! ./WhitespacePreview */ "./src/pages/editor/widget/whitespace/WhitespacePreview.js");

var _WhitespacePreview2 = _interopRequireDefault(_WhitespacePreview);

__webpack_require__(/*! ./index.pcss */ "./src/pages/editor/widget/whitespace/index.pcss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: _WhitespaceEditor2.default.designType,
  editor: _WhitespaceEditor2.default,
  preview: _WhitespacePreview2.default,
  limit: 1
};

/***/ }),

/***/ "./src/pages/editor/widget/whitespace/index.pcss":
/*!*******************************************************!*\
  !*** ./src/pages/editor/widget/whitespace/index.pcss ***!
  \*******************************************************/
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