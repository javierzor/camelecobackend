(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_bloq-orden-fraccionamiento_bloq-orden-fraccionamiento_module_ts"],{

/***/ 2589:
/*!*****************************************************************************************!*\
  !*** ./src/app/bloq-orden-fraccionamiento/bloq-orden-fraccionamiento-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloqOrdenFraccionamientoPageRoutingModule": () => (/* binding */ BloqOrdenFraccionamientoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _bloq_orden_fraccionamiento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloq-orden-fraccionamiento.page */ 3156);




const routes = [
    {
        path: '',
        component: _bloq_orden_fraccionamiento_page__WEBPACK_IMPORTED_MODULE_0__.BloqOrdenFraccionamientoPage
    }
];
let BloqOrdenFraccionamientoPageRoutingModule = class BloqOrdenFraccionamientoPageRoutingModule {
};
BloqOrdenFraccionamientoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BloqOrdenFraccionamientoPageRoutingModule);



/***/ }),

/***/ 8253:
/*!*********************************************************************************!*\
  !*** ./src/app/bloq-orden-fraccionamiento/bloq-orden-fraccionamiento.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloqOrdenFraccionamientoPageModule": () => (/* binding */ BloqOrdenFraccionamientoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _bloq_orden_fraccionamiento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloq-orden-fraccionamiento-routing.module */ 2589);
/* harmony import */ var _bloq_orden_fraccionamiento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bloq-orden-fraccionamiento.page */ 3156);







let BloqOrdenFraccionamientoPageModule = class BloqOrdenFraccionamientoPageModule {
};
BloqOrdenFraccionamientoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bloq_orden_fraccionamiento_routing_module__WEBPACK_IMPORTED_MODULE_0__.BloqOrdenFraccionamientoPageRoutingModule
        ],
        declarations: [_bloq_orden_fraccionamiento_page__WEBPACK_IMPORTED_MODULE_1__.BloqOrdenFraccionamientoPage]
    })
], BloqOrdenFraccionamientoPageModule);



/***/ }),

/***/ 3156:
/*!*******************************************************************************!*\
  !*** ./src/app/bloq-orden-fraccionamiento/bloq-orden-fraccionamiento.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloqOrdenFraccionamientoPage": () => (/* binding */ BloqOrdenFraccionamientoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_bloq_orden_fraccionamiento_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bloq-orden-fraccionamiento.page.html */ 6849);
/* harmony import */ var _bloq_orden_fraccionamiento_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bloq-orden-fraccionamiento.page.scss */ 939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalpermisos.service */ 46);
/* harmony import */ var _modalbloqordenfracionamiento_modalbloqordenfracionamiento_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modalbloqordenfracionamiento/modalbloqordenfracionamiento.page */ 348);















let BloqOrdenFraccionamientoPage = class BloqOrdenFraccionamientoPage {
    constructor(location, router, json, loadingController, navCtrl, loading, route, modalController, datepipe, menuCtrl, myapp, globalpermisos) {
        this.location = location;
        this.router = router;
        this.json = json;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.route = route;
        this.modalController = modalController;
        this.datepipe = datepipe;
        this.menuCtrl = menuCtrl;
        this.myapp = myapp;
        this.globalpermisos = globalpermisos;
        var dataobtenerordenesdefraccionamientopendientesofraccionados = {
            nombre_solicitud: 'obtenerordenesdefraccionamientopendientesofraccionados',
        };
        this.json.variasfunciones(dataobtenerordenesdefraccionamientopendientesofraccionados).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('respuesta a la solicitud variasfunciones,  obtenerordenesdefraccionamientopendientesofraccionados', res);
            this.respuestaobtenerordenesdefraccionamientopendientesynobloqueados = res;
        }));
    }
    actualizarlista() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const actualizando = yield this.loadingController.create({
                message: 'Actualizando...', spinner: 'bubbles', duration: 10000,
            });
            actualizando.present();
            var dataobtenerordenesdefraccionamientopendientesofraccionados = {
                nombre_solicitud: 'obtenerordenesdefraccionamientopendientesofraccionados',
            };
            this.json.variasfunciones(dataobtenerordenesdefraccionamientopendientesofraccionados).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log('respuesta a la solicitud variasfunciones,  obtenerordenesdefraccionamientopendientesofraccionados', res);
                this.respuestaobtenerordenesdefraccionamientopendientesynobloqueados = res;
                if (res) {
                    actualizando.dismiss();
                }
            }));
        });
    }
    ionViewDidEnter() {
        this.usuariologeado = this.globalpermisos.usuariologeado;
        if (this.usuariologeado == undefined || this.usuariologeado == null) {
            this.seccionactiva = 'no';
        }
        this.globalpermisos.mispermisosglobalesenservice;
        console.log('en la vista lo que tengo', this.permisosconsultadosencomponenteprincipalYService);
        if (this.globalpermisos.mispermisosglobalesenservice) {
            if (this.globalpermisos.mispermisosglobalesenservice['permisonumero4'] == 'si') {
                this.puedenavegaraqui = 'si';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
            else if (this.globalpermisos.mispermisosglobalesenservice['permisonumero4'] != 'si') {
                this.puedenavegaraqui = 'no';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
        }
    }
    reingresar() {
        this.router.navigate(['/login']);
        //vaciando variables usadas en esta vista
        this.seccionactiva = '';
        this.puedenavegaraqui = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    bloquear(ordenabloquear) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('se bloqueara esta orden', ordenabloquear);
            const modal = yield this.modalController.create({
                component: _modalbloqordenfracionamiento_modalbloqordenfracionamiento_page__WEBPACK_IMPORTED_MODULE_5__.ModalbloqordenfracionamientoPage,
                componentProps: {
                    cssClass: 'my-custom-class',
                    'dataparaelmodal': ordenabloquear,
                }
            });
            modal.onDidDismiss().then((data) => {
                this.actualizarlista();
            });
            console.log('enviando estos datos al modal qr', ordenabloquear);
            return yield modal.present();
        });
    }
};
BloqOrdenFraccionamientoPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent },
    { type: _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__.GlobalpermisosService }
];
BloqOrdenFraccionamientoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-bloq-orden-fraccionamiento',
        template: _raw_loader_bloq_orden_fraccionamiento_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bloq_orden_fraccionamiento_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BloqOrdenFraccionamientoPage);

4;


/***/ }),

/***/ 939:
/*!*********************************************************************************!*\
  !*** ./src/app/bloq-orden-fraccionamiento/bloq-orden-fraccionamiento.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9xLW9yZGVuLWZyYWNjaW9uYW1pZW50by5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6849:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bloq-orden-fraccionamiento/bloq-orden-fraccionamiento.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Bloqueo de órdenes de fraccionamiento</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button href=\"https://cables.cameleco.com/ayuda-bloq-orden-fraccionamiento/\" target=\"_blank\" style=\"text-transform: none; margin-right: 15px;\">Ayuda \r\n          <ion-icon  name=\"information-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n  </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid *ngIf=\"this.seccionactiva=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text  (click)=\"reingresar()\" color=\"danger\" >Sección expirada debe reingresar.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <ion-button  (click)=\"reingresar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">REINGRESAR</ion-text>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >No tiene permisos para navegar en esta sección.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='si'\">\r\n\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n<ion-card>\r\n\r\n  <ion-card-header>\r\n    <ion-card-title style=\"text-align: center;\" class=\"ion-align-items-center\">\r\n      <ion-text color=\"danger\" >Suspención de ordenes de fraccionamiento.</ion-text>\r\n    </ion-card-title>\r\n    <ion-card-subtitle style=\"text-align: center;\" class=\"ion-align-items-center\">\r\n      <ion-text color=\"danger\" >Pendientes por fraccionar:</ion-text>\r\n    </ion-card-subtitle>\r\n\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n\r\n    <ion-row style=\"border-radius: 5px;\" class=\"ion-align-items-center\">\r\n      <ion-col size=\"2\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" ><strong>Fec/Hr<br>Orden</strong></ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" ><strong>Nombre</strong></ion-text>\r\n      </ion-col>\r\n\r\n    <ion-col size=\"2\" class=\"ion-text-center\">\r\n      <ion-text color=\"danger\" ><strong>Factura</strong></ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"2\" class=\"ion-text-center\">\r\n      <ion-text color=\"danger\" ><strong>Bloquear<br>orden</strong></ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n<ion-row  class=\"ion-align-items-center\" *ngFor=\"let ordenabloquear of respuestaobtenerordenesdefraccionamientopendientesynobloqueados\">\r\n    <ion-col size=\"2\" class=\"ion-text-center\">\r\n      <ion-text color=\"danger\" >{{ordenabloquear.fecha_fraccionado}}<br>{{ordenabloquear.hora_orden}}</ion-text>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"6\" class=\"ion-text-center\">\r\n      <ion-text color=\"danger\" >{{ordenabloquear.descripcion}}</ion-text>\r\n    </ion-col>\r\n\r\n  <ion-col size=\"2\" class=\"ion-text-center\">\r\n    <ion-text color=\"danger\" >{{ordenabloquear.documento}}</ion-text>\r\n  </ion-col>\r\n  <ion-col size=\"2\" class=\"ion-text-center\">\r\n    <ion-button (click)=\"bloquear(ordenabloquear)\" size=\"small\" color=\"danger\">\r\n       <ion-icon style=\"color:white;\" name=\"lock-closed-outline\"></ion-icon><ion-text style=\"font-size: 8px; color:white;\">Bloquear<br>orden</ion-text>\r\n    </ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n  </ion-card-content>\r\n\r\n\r\n\r\n</ion-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </ion-grid>\r\n\r\n  \r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_bloq-orden-fraccionamiento_bloq-orden-fraccionamiento_module_ts.js.map