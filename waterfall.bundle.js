(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* Create Stand Alone waterfall diagrams and integrate on your workflow/CI. 

	Author : Vignesh Shanmugam
	License :MIt

	data - Pass the Resource timings data as array in the below format,
	data : [
		{
			URL : 'ww.example.com/main.css',
			dnsStart : '', ....
		},
		{
			
		}
	]

	*/

	"use strict";

	var _interopRequire = __webpack_require__(3)["default"];

	var NavTiming = _interopRequire(__webpack_require__(1));

	var ResTiming = _interopRequire(__webpack_require__(2));

	(function (w, d) {
		var COLORS = {
			blocked: "#cdcdcd",
			dns: "#1f7c83",
			tcp: "#e58226",
			ssl: "#D566DF",
			request: "#5fdd5f",
			response: "#4189d7",
			error: "#FF0000"
		};
		var p = w.performance || w.msPerformance || w.webkitPerformance || w.mozPerformance,
		    entries = [],
		    navTiming = NavTiming(d, p);

		//Current URL - Navigation Timing
		if (navTiming) {
			entries.push(navTiming);
		}
		//Resources - Resource Timing
		entries = ResTiming(p, entries);

		console.log(entries);
	})(window, window.document);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function (d, p) {
		var t;
		if (p && p.timing) {
			t = p.timing;
			return {
				url: d.URL,
				start: 0,
				duration: t.responseEnd - t.navigationStart,
				redirectStart: t.redirectStart === 0 ? 0 : t.redirectStart - t.navigationStart,
				redirectDuration: t.redirectEnd - t.redirectStart,
				appCacheStart: 0,
				appCacheDuration: 0,
				dnsStart: t.domainLookupStart - t.navigationStart,
				dnsDuration: t.domainLookupEnd - t.domainLookupStart,
				tcpStart: t.connectStart - t.navigationStart,
				tcpDuration: t.connectEnd - t.connectStart,
				sslStart: t.secureConnectionStart > 0 ? t.secureConnectionStart - t.navigationStart : 0,
				sslDuration: t.secureConnectionStart > 0 ? t.connectEnd - t.secureConnectionStart : 0,
				requestStart: t.requestStart - t.navigationStart,
				requestDuration: t.responseStart - t.requestStart,
				responseStart: t.responseStart - t.navigationStart,
				responseDuration: t.responseEnd - t.responseStart
			};
		}
		return null;
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function (p, e) {
		var resources = [];

		if (p && p.getEntriesByType) {
			resources = p.getEntriesByType("resource");
			if (resources.length > 0) {
				resources.map(function (resource) {
					e.push(createtimingObj(resource));
				});
			}
		}
		return e;
	};

	function createtimingObj(r) {
		return {
			url: r.name,
			start: r.startTime,
			duration: r.duration,
			redirectStart: r.redirectStart,
			redirectDuration: r.redirectEnd - r.redirectStart,
			appCacheStart: 0,
			appCacheDuration: 0,
			dnsStart: r.domainLookupStart,
			dnsDuration: r.domainLookupEnd - r.domainLookupStart,
			tcpStart: r.connectStart,
			tcpDuration: r.connectEnd - r.connectStart,
			sslStart: r.secureConnectionStart > 0 ? r.secureConnectionStart : 0,
			sslDuration: r.secureConnectionStart > 0 ? r.connectEnd - r.secureConnectionStart : 0,
			requestStart: r.requestStart,
			requestDuration: r.responseStart - r.requestStart,
			responseStart: r.responseStart,
			responseDuration: r.responseStart == 0 ? 0 : r.responseEnd - r.responseStart
		};
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	exports.__esModule = true;

/***/ }
/******/ ])));