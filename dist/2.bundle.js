(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(1);
var i1 = __webpack_require__(79);
var i2 = __webpack_require__(43);
var i3 = __webpack_require__(80);
var i4 = __webpack_require__(5);
var i5 = __webpack_require__(27);
var i6 = __webpack_require__(82);
var i7 = __webpack_require__(66);
var ContactModuleNgFactory = i0.ɵcmf(i1.ContactModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.ContactComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID, [2, i4.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(1073742336, i5.RouterModule, i5.RouterModule, [[2, i5.ɵangular_packages_router_router_a], [2, i5.Router]]), i0.ɵmpd(1073742336, i6.ContactRoutingModule, i6.ContactRoutingModule, []), i0.ɵmpd(1073742336, i1.ContactModule, i1.ContactModule, []), i0.ɵmpd(1024, i5.ROUTES, function () { return [[{ path: "", component: i7.ContactComponent }]]; }, [])]); });
exports.ContactModuleNgFactory = ContactModuleNgFactory;


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ContactComponent = /** @class */ (function () {
    function ContactComponent(_renderer2, _document) {
        this._renderer2 = _renderer2;
        this._document = _document;
        this.anchorDate = new Date('December 25, 2018');
        this.today = new Date();
        this.diff = Math.abs(this.today.getTime() - this.anchorDate.getTime());
        this.dayDiff = Math.ceil(this.diff / (1000 * 60 * 60 * 24));
    }
    ContactComponent.prototype.ngOnInit = function () {
        var s = this._renderer2.createElement('script');
        s.type = 'text/javascript';
        s.src = 'src/vendor/IonicaBizau/github-calendar/dist/github-calendar.min.js';
        this._renderer2.appendChild(this.calendar.nativeElement, s);
        s = this._renderer2.createElement('link');
        s.rel = 'stylesheet';
        s.href = 'src/vendor/IonicaBizau/github-calendar/dist/github-calendar.css';
        this._renderer2.appendChild(this.calendar.nativeElement, s);
        s = this._renderer2.createElement('link');
        s.rel = 'stylesheet';
        s.href = 'src/vendor/IonicaBizau/github-calendar/dist/github-calendar-responsive.css';
        this._renderer2.appendChild(this.calendar.nativeElement, s);
    };
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    return ContactModule;
}());
exports.ContactModule = ContactModule;


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(81);
var i1 = __webpack_require__(1);
var i2 = __webpack_require__(66);
var i3 = __webpack_require__(5);
var styles_ContactComponent = [i0.styles];
var RenderType_ContactComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ContactComponent, data: {} });
exports.RenderType_ContactComponent = RenderType_ContactComponent;
function View_ContactComponent_0(_l) { return i1.ɵvid(0, [i1.ɵqud(402653184, 1, { calendar: 0 }), (_l()(), i1.ɵeld(1, 0, [[1, 0], ["calendar", 1]], null, 15, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Contact Information "])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Direct message me on LinkedIn if you'd like to contact me. "])), (_l()(), i1.ɵeld(7, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "a", [["href", "https://www.linkedin.com/in/prestonnalls"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 0, "img", [["alt", "LinkedIn Logo Initials"], ["src", "dist/3f60edfd3589f7ad589cd03676982f12.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Access my "])), (_l()(), i1.ɵeld(14, 0, null, null, 1, "a", [["href", "https://www.linkedin.com/in/prestonnalls"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["LinkedIn profile here"])), (_l()(), i1.ɵted(-1, null, [". "]))], null, null); }
exports.View_ContactComponent_0 = View_ContactComponent_0;
function View_ContactComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "contact-page", [], null, null, null, View_ContactComponent_0, RenderType_ContactComponent)), i1.ɵdid(1, 114688, null, 0, i2.ContactComponent, [i1.Renderer2, i3.DOCUMENT], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ContactComponent_Host_0 = View_ContactComponent_Host_0;
var ContactComponentNgFactory = i1.ɵccf("contact-page", i2.ContactComponent, View_ContactComponent_Host_0, {}, {}, []);
exports.ContactComponentNgFactory = ContactComponentNgFactory;


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["div[_ngcontent-%COMP%] {\n  width: 800px;\n  height: auto;\n  margin: 25px auto;\n  text-align: left;\n  -webkit-animation: slide-up-fade-in ease-out 0.75s forwards;\n  animation: slide-up-fade-in ease-out 0.75s forwards; }\n\n@-webkit-keyframes slide-up-fade-in {\n  from {\n    margin-top: 66.6px;\n    opacity: 0; }\n  to {\n    margin-top: 22.5px;\n    opacity: 1; } }\n\n@keyframes slide-up-fade-in {\n  from {\n    margin-top: 66.6px;\n    opacity: 0; }\n  to {\n    margin-top: 22.5px;\n    opacity: 1; } }\n  div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: 500; }\n  div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #aaaaaa; }\n  div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #ffffff; }\n  div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    font-size: 35px; }\n  div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 25px;\n    color: #ffffff;\n    font-size: 60px;\n    line-height: 75px; }\n  div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 0;\n    font-weight: 400;\n    font-size: 22.5px;\n    line-height: 35px; }\n  div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    line-height: 45px;\n    text-decoration: none;\n    -webkit-transition: color 0.333s;\n    transition: color 0.333s; }\n  div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #555555;\n    cursor: pointer; }\n  div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    width: 200px;\n    height: auto;\n    opacity: 1;\n    transition: opacity 0.333s; }\n  div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n    opacity: 0.5; }"];
exports.styles = styles;


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(27);
var contact_component_1 = __webpack_require__(66);
var appRoutes = [
    { path: '', component: contact_component_1.ContactComponent }
];
var ContactRoutingModule = /** @class */ (function () {
    function ContactRoutingModule() {
    }
    return ContactRoutingModule;
}());
exports.ContactRoutingModule = ContactRoutingModule;


/***/ })

}]);