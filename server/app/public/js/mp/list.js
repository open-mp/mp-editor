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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/mp/list/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-dom/index.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference _dll_base ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(21);

/***/ }),

/***/ "./node_modules/react/index.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference _dll_base ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(0);

/***/ }),

/***/ "./node_modules/zent/lib/icon/index.js":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/icon/index.js from dll-reference _dll_base ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(22);

/***/ }),

/***/ "./node_modules/zent/lib/menu/index.js":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/zent/lib/menu/index.js from dll-reference _dll_base ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference _dll_base */ "dll-reference _dll_base"))(435);

/***/ }),

/***/ "./src/common/layouts/BasicLayout.jsx":
/*!********************************************!*\
  !*** ./src/common/layouts/BasicLayout.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _menu = __webpack_require__(/*! zent/lib/menu */ "./node_modules/zent/lib/menu/index.js");

var _menu2 = _interopRequireDefault(_menu);

var _icon = __webpack_require__(/*! zent/lib/icon */ "./node_modules/zent/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

__webpack_require__(/*! ./BasicLayout.pcss */ "./src/common/layouts/BasicLayout.pcss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = _menu2.default.MenuItem,
    SubMenu = _menu2.default.SubMenu;


var onClick = function onClick(e, key) {
    console.log(e, key);
};

var BasicLayout = function (_React$PureComponent) {
    _inherits(BasicLayout, _React$PureComponent);

    function BasicLayout() {
        _classCallCheck(this, BasicLayout);

        return _possibleConstructorReturn(this, (BasicLayout.__proto__ || Object.getPrototypeOf(BasicLayout)).apply(this, arguments));
    }

    _createClass(BasicLayout, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return _react2.default.createElement(
                'div',
                { className: 'mp-layout mp-layout-basic' },
                _react2.default.createElement(
                    'div',
                    { className: 'mp-layout__slide' },
                    _react2.default.createElement(
                        'div',
                        { className: 'mp-menu-header' },
                        '\u5C0F\u7A0B\u5E8F'
                    ),
                    this.renderMenu()
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'mp-layout__content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'mp-layout__header' },
                        'header'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'mp-layout__body' },
                        children
                    )
                )
            );
        }
    }, {
        key: 'renderMenu',
        value: function renderMenu() {
            return _react2.default.createElement(
                _menu2.default,
                {
                    mode: 'inline',
                    onClick: onClick
                },
                _react2.default.createElement(
                    MenuItem,
                    { key: '1' },
                    '\u5C0F\u7A0B\u5E8F\u5217\u8868'
                )
            );
        }
    }]);

    return BasicLayout;
}(_react2.default.PureComponent);

exports.default = BasicLayout;

/***/ }),

/***/ "./src/common/layouts/BasicLayout.pcss":
/*!*********************************************!*\
  !*** ./src/common/layouts/BasicLayout.pcss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/mp/list/App.jsx":
/*!***********************************!*\
  !*** ./src/pages/mp/list/App.jsx ***!
  \***********************************/
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

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'hi'
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ "./src/pages/mp/list/main.js":
/*!***********************************!*\
  !*** ./src/pages/mp/list/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _BasicLayout = __webpack_require__(/*! ../../../common/layouts/BasicLayout.jsx */ "./src/common/layouts/BasicLayout.jsx");

var _BasicLayout2 = _interopRequireDefault(_BasicLayout);

var _App = __webpack_require__(/*! ./App.jsx */ "./src/pages/mp/list/App.jsx");

var _App2 = _interopRequireDefault(_App);

__webpack_require__(/*! ./main.pcss */ "./src/pages/mp/list/main.pcss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _BasicLayout2.default,
  null,
  _react2.default.createElement(_App2.default, null)
), document.getElementById('app'), function () {});

/***/ }),

/***/ "./src/pages/mp/list/main.pcss":
/*!*************************************!*\
  !*** ./src/pages/mp/list/main.pcss ***!
  \*************************************/
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