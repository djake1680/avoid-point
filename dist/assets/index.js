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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__google_map_scss__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__google_map_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__google_map_scss__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var GoogleMap = function (_Component) {
    _inherits(GoogleMap, _Component);

    function GoogleMap(props) {
        _classCallCheck(this, GoogleMap);

        var _this = _possibleConstructorReturn(this, (GoogleMap.__proto__ || Object.getPrototypeOf(GoogleMap)).call(this, props));

        _this.componentDidMount = function () {
            _this.initMap({ lat: 32.708806836774, lng: -117.15423137672121 });
        };

        _this.shouldComponentUpdate = function (nextProps, nextState) {
            return nextProps.searchValue !== _this.props.searchValue;
        };

        _this.componentWillUpdate = function (nextProps, nextState) {
            _this.initMap({ lat: Number(nextProps.events[0].latitude), lng: Number(nextProps.events[0].longitude) });
            _this.createMarkers(nextProps.events);
        };

        _this.initMap = function (coords) {
            _this.googleMap = new google.maps.Map(_this.mapCanvas, {
                zoom: 12,
                center: coords
            });
        };

        _this.createMarkers = function (events) {
            return events.map(function (event) {
                console.log('Event: ', event);
                var coords = { lat: Number(event.latitude), lng: Number(event.longitude) };
                var marker = new google.maps.Marker({
                    position: coords,
                    map: _this.googleMap
                });
            });
        };

        _this.render = function () {
            console.log('Render GoogleMap');
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__google_map_scss___default.a.map_container },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: __WEBPACK_IMPORTED_MODULE_1__google_map_scss___default.a.google_map, ref: function ref(_ref) {
                        return _this.mapCanvas = _ref;
                    } })
            );
        };

        return _this;
    }

    return GoogleMap;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = GoogleMap;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(GoogleMap, 'GoogleMap', '/Users/Trevor/Code/projects/avoid-point/build/client/src/containers/map/google_map.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Trevor/Code/projects/avoid-point/build/client/src/containers/map/google_map.js');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_template__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_map_google_map__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_event_hub_event_hub__ = __webpack_require__(8);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// Components



var initialProps = { title: 'Avoid Point' };
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
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__containers_event_hub_event_hub__["a" /* default */], initialProps);
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


    // All routes go here


    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = App;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(App, 'App', '/Users/Trevor/Code/projects/avoid-point/build/client/src/app.js');

    __REACT_HOT_LOADER__.register(initialProps, 'initialProps', '/Users/Trevor/Code/projects/avoid-point/build/client/src/app.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Trevor/Code/projects/avoid-point/build/client/src/app.js');
}();

;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_promise__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_reducer_main__ = __webpack_require__(9);






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

  __REACT_HOT_LOADER__.register(middleware, 'middleware', '/Users/Trevor/Code/projects/avoid-point/build/client/src/createStore.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Trevor/Code/projects/avoid-point/build/client/src/createStore.js');
}();

;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MAIN; });
var MAIN = "MAIN";
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MAIN, "MAIN", "/Users/Trevor/Code/projects/avoid-point/build/client/src/actions/types.js");
}();

;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_item_scss__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_item_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__event_item_scss__);



var _default = function _default(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__event_item_scss___default.a.event_item_container },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            { className: __WEBPACK_IMPORTED_MODULE_1__event_item_scss___default.a.title },
            props.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            { className: __WEBPACK_IMPORTED_MODULE_1__event_item_scss___default.a.venue },
            props.venue
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'address',
            { className: __WEBPACK_IMPORTED_MODULE_1__event_item_scss___default.a.address },
            props.address
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Trevor/Code/projects/avoid-point/build/client/src/components/event_item/event_item.js');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_hub_scss__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_hub_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__event_hub_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_google_map__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_event_item_event_item__ = __webpack_require__(7);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var APP_KEY = 'wDjnnQNtWmFvJRXs';

// Components



var EventHub = function (_Component) {
    _inherits(EventHub, _Component);

    function EventHub(props) {
        var _this2 = this;

        _classCallCheck(this, EventHub);

        var _this = _possibleConstructorReturn(this, (EventHub.__proto__ || Object.getPrototypeOf(EventHub)).call(this, props));

        _this.SearchComponent = function () {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__event_hub_scss___default.a.search_container },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                    className: __WEBPACK_IMPORTED_MODULE_1__event_hub_scss___default.a.search_input,
                    type: 'text', placeholder: 'Search',
                    value: _this.state.searchText,
                    onChange: function onChange(text) {
                        return _this.setState({ searchText: text.target.value });
                    } }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { onClick: _this.findEvents },
                    'Go'
                )
            );
        };

        _this.findEvents = function () {
            return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('http://api.eventful.com/json/events/search?app_key=' + APP_KEY + '&where=' + _this.state.searchText + '&when=today&within=10').then(function (eventInfo) {
                var events = eventInfo.data.events.event;
                _this.setState({ events: events, googleMapSearchValue: _this.state.searchText });
            });
        };

        _this.eventList = function () {
            return _this.state.events.map(function (event) {
                console.log('Event: ', event.title);
                var eventInfo = {
                    title: event.title,
                    venue: event.venue_name,
                    address: event.venue_address + ', ' + event.city_name + ', ' + event.region_abbr + ' ' + event.postal_code
                };
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_event_item_event_item__["a" /* default */], _extends({ key: event.id }, eventInfo));
            });
        };

        _this.render = function () {
            console.log('Render EventHub');
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__map_google_map__["a" /* default */], { searchValue: _this.state.googleMapSearchValue, events: _this.state.events }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__event_hub_scss___default.a.event_hub_container },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_this2.SearchComponent, null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: __WEBPACK_IMPORTED_MODULE_1__event_hub_scss___default.a.event_list_container },
                        _this.eventList()
                    )
                )
            );
        };

        _this.state = {
            searchText: '',
            googleMapSearchValue: '',
            events: []
        };
        return _this;
    }

    return EventHub;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = EventHub;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(EventHub, 'EventHub', '/Users/Trevor/Code/projects/avoid-point/build/client/src/containers/event_hub/event_hub.js');

    __REACT_HOT_LOADER__.register(APP_KEY, 'APP_KEY', '/Users/Trevor/Code/projects/avoid-point/build/client/src/containers/event_hub/event_hub.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Trevor/Code/projects/avoid-point/build/client/src/containers/event_hub/event_hub.js');
}();

;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_types__ = __webpack_require__(6);
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

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Trevor/Code/projects/avoid-point/build/client/src/reducers/reducer_main.js');
}();

;

/***/ }),
/* 10 */
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
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", { src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCZOKztpgiiRqzd59Er73RV_m7JQOU8ZOw" }),
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

	__REACT_HOT_LOADER__.register(_default, "default", "/Users/Trevor/Code/projects/avoid-point/build/client/src/views/template.js");
}();

;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_src_app__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_src_createStore__ = __webpack_require__(3);
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

	__REACT_HOT_LOADER__.register(render, 'render', '/Users/Trevor/Code/projects/avoid-point/build/server/index.js');

	__REACT_HOT_LOADER__.register(store, 'store', '/Users/Trevor/Code/projects/avoid-point/build/server/index.js');
}();

;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
	"event_item_container": "event_item__event_item_container___1_rNq",
	"title": "event_item__title___3psL6",
	"venue": "event_item__venue___2it5i",
	"address": "event_item__address___2phw9"
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
	"center_content": "event_hub__center_content___Z2cVs",
	"event_hub_container": "event_hub__event_hub_container___15j0T",
	"search_container": "event_hub__search_container___3GqEN",
	"search_input": "event_hub__search_input___1QMsy",
	"event_list_container": "event_hub__event_list_container___3JU0a"
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
	"map_container": "google_map__map_container___pTsAR",
	"google_map": "google_map__google_map___2D7M2"
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("redux-promise");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })
/******/ ]);