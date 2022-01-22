(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_modalqr_modalqr_module_ts"],{

/***/ 875:
/*!***************************************************!*\
  !*** ./src/app/modalqr/modalqr-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalqrPageRoutingModule": () => (/* binding */ ModalqrPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _modalqr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalqr.page */ 3490);




const routes = [
    {
        path: '',
        component: _modalqr_page__WEBPACK_IMPORTED_MODULE_0__.ModalqrPage
    }
];
let ModalqrPageRoutingModule = class ModalqrPageRoutingModule {
};
ModalqrPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalqrPageRoutingModule);



/***/ }),

/***/ 2761:
/*!*******************************************!*\
  !*** ./src/app/modalqr/modalqr.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalqrPageModule": () => (/* binding */ ModalqrPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modalqr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalqr-routing.module */ 875);
/* harmony import */ var _modalqr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalqr.page */ 3490);
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-qrcode2 */ 8920);








let ModalqrPageModule = class ModalqrPageModule {
};
ModalqrPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            ngx_qrcode2__WEBPACK_IMPORTED_MODULE_4__.NgxQRCodeModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _modalqr_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalqrPageRoutingModule
        ],
        declarations: [_modalqr_page__WEBPACK_IMPORTED_MODULE_1__.ModalqrPage]
    })
], ModalqrPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modalqr_modalqr_module_ts.js.map