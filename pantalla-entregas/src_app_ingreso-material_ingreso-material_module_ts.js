(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_ingreso-material_ingreso-material_module_ts"],{

/***/ 7359:
/*!*********************************************************************!*\
  !*** ./src/app/ingreso-material/ingreso-material-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoMaterialPageRoutingModule": () => (/* binding */ IngresoMaterialPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ingreso_material_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingreso-material.page */ 7212);




const routes = [
    {
        path: '',
        component: _ingreso_material_page__WEBPACK_IMPORTED_MODULE_0__.IngresoMaterialPage
    }
];
let IngresoMaterialPageRoutingModule = class IngresoMaterialPageRoutingModule {
};
IngresoMaterialPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IngresoMaterialPageRoutingModule);



/***/ }),

/***/ 603:
/*!*************************************************************!*\
  !*** ./src/app/ingreso-material/ingreso-material.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoMaterialPageModule": () => (/* binding */ IngresoMaterialPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ingreso_material_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingreso-material-routing.module */ 7359);
/* harmony import */ var _ingreso_material_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingreso-material.page */ 7212);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);








let IngresoMaterialPageModule = class IngresoMaterialPageModule {
};
IngresoMaterialPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ingreso_material_routing_module__WEBPACK_IMPORTED_MODULE_0__.IngresoMaterialPageRoutingModule
        ],
        declarations: [_ingreso_material_page__WEBPACK_IMPORTED_MODULE_1__.IngresoMaterialPage]
    })
], IngresoMaterialPageModule);



/***/ }),

/***/ 7212:
/*!***********************************************************!*\
  !*** ./src/app/ingreso-material/ingreso-material.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoMaterialPage": () => (/* binding */ IngresoMaterialPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ingreso_material_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ingreso-material.page.html */ 1671);
/* harmony import */ var _ingreso_material_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingreso-material.page.scss */ 6067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalpermisos.service */ 46);














let IngresoMaterialPage = class IngresoMaterialPage {
    constructor(location, router, json, loadingController, navCtrl, loading, route, modalCtrl, datepipe, menuCtrl, myapp, globalpermisos) {
        this.location = location;
        this.router = router;
        this.json = json;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.datepipe = datepipe;
        this.menuCtrl = menuCtrl;
        this.myapp = myapp;
        this.globalpermisos = globalpermisos;
        this.step = '1';
        var obtenerproductos = {
            nombre_solicitud: 'obtenerproductos',
        };
        this.json.variasfunciones(obtenerproductos).subscribe((res) => {
            console.log('respuesta a la solicitud variasfunciones,  obtenerproductos', res);
            this.productosenvista = res;
        }); //cierrran las lecturas de res
    }
    CHANGEcampo1(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.campo1 = event.target.value;
            this.campo2 = '';
            this.campo3 = '';
            this.filterTerm = event.target.value;
        });
    }
    CHANGEcampo2(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.campo2 = event.target.value;
            ;
            this.campo1 = '';
            this.campo3 = '';
            this.filterTerm = event.target.value;
        });
    }
    CHANGEcampo3(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.campo3 = event.target.value;
            this.campo1 = '';
            this.campo2 = '';
            this.filterTerm = event.target.value;
        });
    }
    buscar() {
        this.step = '2';
    }
    volver() {
        this.step = '1';
    }
    ionViewDidEnter() {
        this.usuariologeado = this.globalpermisos.usuariologeado;
        if (this.usuariologeado == undefined || this.usuariologeado == null) {
            this.seccionactiva = 'no';
        }
        this.globalpermisos.mispermisosglobalesenservice;
        console.log('en la vista lo que tengo', this.permisosconsultadosencomponenteprincipalYService);
        if (this.globalpermisos.mispermisosglobalesenservice) {
            if (this.globalpermisos.mispermisosglobalesenservice['permisonumero1'] == 'si') {
                this.puedenavegaraqui = 'si';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
            else if (this.globalpermisos.mispermisosglobalesenservice['permisonumero1'] != 'si') {
                this.puedenavegaraqui = 'no';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
        }
    }
    iradetalles(producto) {
        console.log('iendo a detalles con:', producto);
        this.router.navigate(['/ingreso-material-detalles', producto]);
    }
    reingresar() {
        this.router.navigate(['/login']);
        //vaciando variables usadas en esta vista
        this.seccionactiva = '';
        this.puedenavegaraqui = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
};
IngresoMaterialPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent },
    { type: _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__.GlobalpermisosService }
];
IngresoMaterialPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-ingreso-material',
        template: _raw_loader_ingreso_material_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ingreso_material_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IngresoMaterialPage);



/***/ }),

/***/ 6067:
/*!*************************************************************!*\
  !*** ./src/app/ingreso-material/ingreso-material.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmdyZXNvLW1hdGVyaWFsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1671:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ingreso-material/ingreso-material.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Ingreso de Material</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button href=\"https://cables.cameleco.com/ayuda-ingreso-material/\" target=\"_blank\" style=\"text-transform: none; margin-right: 15px;\">Ayuda \r\n        <ion-icon  name=\"information-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid *ngIf=\"this.seccionactiva=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text  (click)=\"reingresar()\" color=\"danger\" >Sección expirada debe reingresar.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <ion-button  (click)=\"reingresar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">REINGRESAR</ion-text>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >No tiene permisos para navegar en esta sección.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='si'&&this.seccionactiva!='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Busqueda de referencias.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n      <ion-col size=\"3\" class=\"ion-text-center\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Referencia</ion-label>\r\n          <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo1}}\" (input)=\"CHANGEcampo1($event)\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"ion-text-center\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Codigo</ion-label>\r\n          <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo2}}\" (input)=\"CHANGEcampo2($event)\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-center\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nombre:</ion-label>\r\n          <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo3}}\" (input)=\"CHANGEcampo3($event)\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n      <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n          <ion-button (click)=\"buscar()\">Buscar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n    <ion-row *ngIf=\"this.step=='2'\" class=\"ion-align-items-center\">\r\n\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <ion-button (click)=\"volver()\"><ion-icon name=\"arrow-back-outline\"></ion-icon>volver</ion-button>\r\n        \r\n            <ion-list class=\"ion-align-items-center\">\r\n                <!-- <ion-item > -->\r\n                  <ion-row style=\"border-bottom: 1px solid #151515 !important; border-top: 1px solid #151515 !important;\" *ngFor=\"let producto of productosenvista | filter:filterTerm\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                    <ion-col size=\"3.5\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                      <ion-text color=\"danger\" style=\"color:danger\">{{producto.referencia}}</ion-text>\r\n                    </ion-col>\r\n                    <ion-col size=\"3.5\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                      <ion-text color=\"danger\" style=\"color:danger\">{{producto.producto}}</ion-text>\r\n                    </ion-col>\r\n                    <ion-col size=\"4\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                      <ion-text color=\"danger\" style=\"color:danger\">{{producto.descripcion}}</ion-text>\r\n                    </ion-col>\r\n                    <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                      <ion-button (click)=\"iradetalles(producto)\" size=\"small\">\r\n                      <ion-icon style=\"font-size: x-large; border-radius: 5px; color:white;\" name=\"enter-outline\" item-right></ion-icon>\r\n                    </ion-button>\r\n                    </ion-col>\r\n                    \r\n                  </ion-row>\r\n                <!-- </ion-item> -->\r\n              </ion-list>\r\n      </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n  \r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_ingreso-material_ingreso-material_module_ts.js.map