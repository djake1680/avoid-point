module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_template__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_home_home__ = __webpack_require__(7);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var initialProps = { title: 'React in a Box' };
 false ? console.log('Module Hot!!') : console.log('No hot module bro.');

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.routerType = function () {
            return _this.props.server ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_react_router__["StaticRouter"],
                { location: _this.props.req.url, context: _this.props.context },
                _this.Route()
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["BrowserRouter"],
                null,
                _this.Route()
            );
        };

        _this.activateApp = function () {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3__views_template__["a" /* default */],
                initialProps,
                _this.routerType()
            );
        };

        _this.activateDev = function () {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["BrowserRouter"],
                null,
                _this.Route()
            );
        };

        _this.Route = function () {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/', component: function component() {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__containers_home_home__["a" /* default */], initialProps);
                } });
        };

        _this.render = function () {
            return  false ? _this.activateDev() : _this.activateApp();
        };

        return _this;
    }

    // determine required router type for server or client


    // Serve HTML template for isomorphic rendering


    // Only need BrowserRouter for development (client side only)


    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = App;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(App, 'App', '/Users/Trevor/Code/Boilerplates/react-in-a-box/build/client/src/app.js');

    __REACT_HOT_LOADER__.register(initialProps, 'initialProps', '/Users/Trevor/Code/Boilerplates/react-in-a-box/build/client/src/app.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Trevor/Code/Boilerplates/react-in-a-box/build/client/src/app.js');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_promise__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_reducer_main__ = __webpack_require__(8);






var middleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_promise___default.a, __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a);

var _default = function _default() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    //every modules reducer should be defined here
    main: __WEBPACK_IMPORTED_MODULE_3__reducers_reducer_main__["a" /* default */]
  });
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(rootReducer, data, middleware);
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(middleware, 'middleware', '/Users/Trevor/Code/Boilerplates/react-in-a-box/build/client/src/createStore.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Trevor/Code/Boilerplates/react-in-a-box/build/client/src/createStore.js');
}();

;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MAIN; });
var MAIN = "MAIN";
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MAIN, "MAIN", "/Users/Trevor/Code/Boilerplates/react-in-a-box/build/client/src/actions/types.js");
}();

;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_scss__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__about_scss__);



var _default = function _default() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ className: __WEBPACK_IMPORTED_MODULE_1__about_scss___default.a.aboutContainer },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'p',
			null,
			'Hi! I\'m React in a Box, an isomporhic React boilerplate utilizing a Node/Express server, Redux, React Router v4 and Webpack.'
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Trevor/Code/Boilerplates/react-in-a-box/build/client/src/components/about/about.js');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_scss__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__home_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_about__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Home);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__home_scss___default.a.homeContainer },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__home_scss___default.a.homeTitleContainer },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h1',
                        { className: __WEBPACK_IMPORTED_MODULE_1__home_scss___default.a.homeTitle },
                        'React'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_about_about__["a" /* default */], null)
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Home;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/Trevor/Code/Boilerplates/react-in-a-box/build/client/src/containers/home/home.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Trevor/Code/Boilerplates/react-in-a-box/build/client/src/containers/home/home.js');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_types__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var _default = function _default() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_types__["a" /* MAIN */]:
            console.log('REDUCER MAIN: ', action.payload);
            return _extends({}, state, {
                main: action.payload
            });
        default:
            return _extends({}, state);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Trevor/Code/Boilerplates/react-in-a-box/build/client/src/reducers/reducer_main.js');
}();

;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var _default = function _default(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"html",
		null,
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"head",
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"title",
				null,
				props.title
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { charset: "utf-8" }),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "viewport", content: "width=device-width,initial-scale=1.0,maximum-scale=2.0" }),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "stylesheet", href: "/style.css" })
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"body",
			null,
			props.children,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", { src: "/bundle.js" })
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, "default", "/Users/Trevor/Code/Boilerplates/react-in-a-box/build/client/src/views/template.js");
}();

;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_src_app__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_src_createStore__ = __webpack_require__(2);
/* harmony export (immutable) */ __webpack_exports__["default"] = render;






//Redux Store

var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__client_src_createStore__["a" /* default */])();

function render(req, res) {
	var context = {};

	// App props are required to determine React Router type
	var html = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		__WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"],
		{ store: store },
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__client_src_app__["a" /* default */], { server: true, req: req, context: context })
	));

	if (context.status >= 400) {
		res.status(context.status).send(html);
	} else if (context.url) {
		res.redirect(context.status, context.url);
	} else {
		res.send(html);
	}
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(render, 'render', '/Users/Trevor/Code/Boilerplates/react-in-a-box/build/server/index.js');

	__REACT_HOT_LOADER__.register(store, 'store', '/Users/Trevor/Code/Boilerplates/react-in-a-box/build/server/index.js');
}();

;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
	"centerContent": "about__centerContent___1KhBx",
	"aboutContainer": "about__aboutContainer___PFnf8"
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
	"centerContent": "home__centerContent___1DCSf",
	"homeContainer": "home__homeContainer___1LgJK",
	"homeTitleContainer": "home__homeTitleContainer___19NF7",
	"homeTitle": "home__homeTitle___KoTnN"
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-promise");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })
/******/ ]);