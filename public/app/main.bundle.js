webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nearby_shops_nearby_shops_component__ = __webpack_require__("../../../../../src/app/nearby-shops/nearby-shops.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__preferred_shops_preferred_shops_component__ = __webpack_require__("../../../../../src/app/preferred-shops/preferred-shops.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/nearby-shops', pathMatch: 'full' },
    { path: 'nearby-shops', component: __WEBPACK_IMPORTED_MODULE_3__nearby_shops_nearby_shops_component__["a" /* NearbyShopsComponent */] },
    { path: 'preferred-shops', component: __WEBPACK_IMPORTED_MODULE_4__preferred_shops_preferred_shops_component__["a" /* PreferredShopsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Make the HTTP request:
        this.http.get('http://localhost:8000/auth').subscribe(function (data) {
            console.log(data);
            _this.user = data;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nearby_shops_nearby_shops_component__ = __webpack_require__("../../../../../src/app/nearby-shops/nearby-shops.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__preferred_shops_preferred_shops_component__ = __webpack_require__("../../../../../src/app/preferred-shops/preferred-shops.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_shop_service__ = __webpack_require__("../../../../../src/app/services/shop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // Import the Module









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nearby_shops_nearby_shops_component__["a" /* NearbyShopsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__preferred_shops_preferred_shops_component__["a" /* PreferredShopsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_shop_service__["a" /* ShopService */],
                __WEBPACK_IMPORTED_MODULE_11__services_message_service__["a" /* MessageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#title {\r\n    color: white;\r\n    font-family: 'Rockwell Condensed', sans-serif;\r\n    font-size: 25px;\r\n}\r\n\r\na { \r\n  cursor: pointer; \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n      <a class=\"navbar-brand\" id=\"title\">Shopping</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li id=\"NearbyShops\" class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link\" [routerLink]=\"['/nearby-shops']\">\n              Nearby Shops\n            </a>\n          </li>\n          <li id=\"PreferredShops\" class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link\" [routerLink]=\"['/preferred-shops']\">\n              My preferred Shops\n            </a>\n          </li>\n          <li id=\"logout\" class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link disabled\" (click)=\"logout()\">\n              Logout\n            </a>\n          </li>\n        </ul>\n      </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shop_service__ = __webpack_require__("../../../../../src/app/services/shop.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(shopService) {
        this.shopService = shopService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    /**
     * asking the api service for logout function
     */
    NavbarComponent.prototype.logout = function () {
        this.shopService.logout().subscribe(function (reponse) {
            console.log(reponse);
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_shop_service__["a" /* ShopService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nearby-shops/nearby-shops.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.album {\r\n  min-height: 50rem; /* Can be removed; just added for demo purposes */\r\n  padding-top: 3rem;\r\n  padding-bottom: 3rem;\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n.card {\r\n  float: left;\r\n  width: 25%;\r\n  padding: .75rem;\r\n  margin: 2rem;\r\n  border: 2;\r\n}\r\n\r\n.card > img {\r\n  margin: auto;\r\n  margin-bottom: .75rem;\r\n  display: block;\r\n  width: 230px;\r\n  height: 200px;\r\n}\r\n\r\n.caption {\r\n\ttext-align: center;\r\n  font-family: \"Times New Roman\", Georgia;\r\n  color:black;\r\n  font-size: 30px;\r\n}\r\n\r\n.button-group {\r\n\ttext-align: center;\r\n}\r\n\r\na { \r\n  cursor: pointer; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nearby-shops/nearby-shops.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"album text-muted\">\n  <div class=\"container\">\n    <div class=\"alert alert-success alert-dismissable\" id=\"msg\" style=\"display: none;\"></div>\n    <div class=\"row\">\n      <div class=\"card\" *ngFor=\"let shop of nearbyshops\" id=\"{{ shop.id }}\" >\n        <div class=\"caption\">{{ shop.productName }}</div>\n        <img src=\"{{ shop.productImage }}\" alt=\"Image Not Found\">\n        <div class=\"button-group\">\n          <a class=\"btn btn-danger\" role=\"button\" (click)=\"shopDisliked(shop.id)\">\n            Dislike\n          </a>\n          <a class=\"btn btn-success\" role=\"button\" (click)=\"shopLiked(shop.id)\">\n            Like\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/nearby-shops/nearby-shops.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearbyShopsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shop_service__ = __webpack_require__("../../../../../src/app/services/shop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NearbyShopsComponent = (function () {
    function NearbyShopsComponent(shopService, messageService) {
        this.shopService = shopService;
        this.messageService = messageService;
    }
    NearbyShopsComponent.prototype.ngOnInit = function () {
        this.getNearbyShops();
    };
    /**
     * asking the api service for all nearby shops & putting them in the local variable
     */
    NearbyShopsComponent.prototype.getNearbyShops = function () {
        var _this = this;
        this.shopService.showNearbyShops().subscribe(function (nearbyshops) {
            _this.nearbyshops = nearbyshops;
            //console.log(this.nearbyshops);
        });
    };
    /**
     * showing a message when the shop is liked successfully
     */
    NearbyShopsComponent.prototype.shopLiked = function (id) {
        var _this = this;
        this.shopService.likeShop(id).subscribe(function (response) {
            console.log(response);
            _this.hideShop("div#" + id);
            _this.messageService.showMessage("div#msg", "alert-info", "Shop has been liked", "glyphicon-ok");
        });
    };
    /**
     * showing a message when the shop is disliked successfully
     */
    NearbyShopsComponent.prototype.shopDisliked = function (id) {
        var _this = this;
        this.shopService.dislikeShop(id).subscribe(function (response) {
            console.log(response);
            _this.hideShop("div#" + id);
            _this.messageService.showMessage("div#msg", "alert-danger", "Shop has been disliked", "glyphicon-ok");
        });
    };
    NearbyShopsComponent.prototype.hideShop = function (selector) {
        $(selector).hide();
    };
    NearbyShopsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nearby-shops',
            template: __webpack_require__("../../../../../src/app/nearby-shops/nearby-shops.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nearby-shops/nearby-shops.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_shop_service__["a" /* ShopService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]])
    ], NearbyShopsComponent);
    return NearbyShopsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/preferred-shops/preferred-shops.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.album {\r\n  min-height: 50rem; /* Can be removed; just added for demo purposes */\r\n  padding-top: 3rem;\r\n  padding-bottom: 3rem;\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n.card {\r\n  float: left;\r\n  width: 25%;\r\n  padding: .75rem;\r\n  margin: 2rem;\r\n  border: 2;\r\n}\r\n\r\n.card > img {\r\n  margin: auto;\r\n  margin-bottom: .75rem;\r\n  display: block;\r\n  width: 230px;\r\n  height: 200px;\r\n}\r\n\r\n.caption {\r\n\ttext-align: center;\r\n  font-family: \"Times New Roman\", Georgia;\r\n  color:black;\r\n  font-size: 30px;\r\n}\r\n\r\n.button-group {\r\n\ttext-align: center;\r\n}\r\n.navbar {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.album {\r\n  min-height: 50rem; /* Can be removed; just added for demo purposes */\r\n  padding-top: 3rem;\r\n  padding-bottom: 3rem;\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n.card {\r\n  float: left;\r\n  width: 25%;\r\n  padding: .75rem;\r\n  margin: 2rem;\r\n  border: 2;\r\n}\r\n\r\n.card > img {\r\n  margin: auto;\r\n  margin-bottom: .75rem;\r\n  display: block;\r\n  width: 230px;\r\n  height: 200px;\r\n}\r\n\r\n.caption {\r\n\ttext-align: center;\r\n  font-family: \"Times New Roman\", Georgia;\r\n  color:black;\r\n  font-size: 30px;\r\n}\r\n\r\n.button-group {\r\n\ttext-align: center;\r\n}\r\n\r\na { \r\n  cursor: pointer; \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/preferred-shops/preferred-shops.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"album text-muted\">\n  <div class=\"container\">\n    <div id=\"msg\" style=\"display: none;\"></div>\n    <div class=\"row\">\n      <div class=\"card\" *ngFor=\"let shop of preferredshops\" id=\"{{ shop.id }}\">\n        <div class=\"caption\">{{ shop.productName }}</div>\n        <img src=\"{{ shop.productImage }}\" alt=\"Image Not Found\">\n        <div class=\"button-group\">\n          <a class=\"btn btn-danger\" role=\"button\" (click)=\"shopRemoved(shop.id)\">\n            Remove\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/preferred-shops/preferred-shops.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferredShopsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shop_service__ = __webpack_require__("../../../../../src/app/services/shop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreferredShopsComponent = (function () {
    function PreferredShopsComponent(shopService, messageService) {
        this.shopService = shopService;
        this.messageService = messageService;
    }
    PreferredShopsComponent.prototype.ngOnInit = function () {
        this.getPreferredShops();
    };
    /**
     * asking the api service for all preferred shops & putting them in the local variable
     */
    PreferredShopsComponent.prototype.getPreferredShops = function () {
        var _this = this;
        this.shopService.showPreferredShops().subscribe(function (preferredshops) {
            _this.preferredshops = preferredshops;
            //console.log(this.nearbyshops);
        });
    };
    /**
     * showing a message when the shop is removed successfully
     */
    PreferredShopsComponent.prototype.shopRemoved = function (id) {
        var _this = this;
        this.shopService.removeShop(id).subscribe(function (response) {
            console.log(response);
            _this.hideShop("div#" + id);
            _this.messageService.showMessage("div#msg", "alert-warning", "Shop has been removed", "glyphicon-ok");
        });
    };
    PreferredShopsComponent.prototype.hideShop = function (selector) {
        $(selector).hide();
    };
    PreferredShopsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-preferred-shops',
            template: __webpack_require__("../../../../../src/app/preferred-shops/preferred-shops.component.html"),
            styles: [__webpack_require__("../../../../../src/app/preferred-shops/preferred-shops.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_shop_service__["a" /* ShopService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]])
    ], PreferredShopsComponent);
    return PreferredShopsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = (function () {
    function MessageService() {
    }
    MessageService.prototype.showMessage = function (selector, msgColor, msgText, icon) {
        $(selector).removeClass();
        $(selector).addClass("alert " + msgColor + " alert-dismissible");
        $(selector).html('<h4><span class="glyphicon ' + icon + '"></span>&nbsp;<b>' + msgText + '</b></h4>');
        $(selector).show()
            .delay(1000)
            .fadeOut();
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/shop.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopService = (function () {
    function ShopService(http) {
        this.http = http;
        // local Laravel server
        this.server = 'http://localhost:8000/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        this.headers.append('enctype', 'multipart/form-data');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('X-Requested-With', 'XMLHttpRequest');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    /*
    getShop(id){
      return this.http.get(this.server+"getShop/"+id).map(res => res.json());
    }
    */
    /**
     * Getting Nearby Shops from the server
     */
    ShopService.prototype.showNearbyShops = function () {
        return this.http.get(this.server + "nearby-shops").map(function (res) { return res.json(); });
    };
    /**
     * Getting Preferred Shop from the server
     */
    ShopService.prototype.showPreferredShops = function () {
        return this.http.get(this.server + "preferred-shops").map(function (res) { return res.json(); });
    };
    /**
     * Sending the id of the Liked Shop to the server
     * @param {[type]} id identifier of the Liked Shop
     */
    ShopService.prototype.likeShop = function (id) {
        return this.http.get(this.server + "like-shop/" + id).map(function (res) { return res.json(); });
    };
    /**
     * Sending the id of the Disliked Shop to the server
     * @param {[type]} id identifier of the Liked Shop
     */
    ShopService.prototype.dislikeShop = function (id) {
        return this.http.get(this.server + "dislike-shop/" + id).map(function (res) { return res.json(); });
    };
    /**
     * Sending the id of the Removed Shop to the server
     * @param {[type]} id identifier of the Removed Shop
     */
    ShopService.prototype.removeShop = function (id) {
        return this.http.get(this.server + "remove-shop/" + id).map(function (res) { return res.json(); });
    };
    /**
     * sending logout order
     */
    ShopService.prototype.logout = function () {
        return this.http.get(this.server + "log-out/");
    };
    ShopService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ShopService);
    return ShopService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map