(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/bio/bio.module.ngfactory": [
		177,
		8
	],
	"./modules/contact/contact.module.ngfactory": [
		180,
		9
	],
	"./modules/portfolio/portfolio.module.ngfactory": [
		179,
		10
	],
	"./modules/resume/resume.module.ngfactory": [
		178,
		11
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 112;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(8);
__webpack_require__(12);
__webpack_require__(1);
__webpack_require__(182);
__webpack_require__(183);
__webpack_require__(77);
__webpack_require__(84);


/***/ })

},[[181,0,1,7]]]);