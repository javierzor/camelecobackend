(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_solicitud-fraccionamiento_solicitud-fraccionamiento_module_ts"],{

/***/ 5301:
/*!***************************************************************************************!*\
  !*** ./src/app/solicitud-fraccionamiento/solicitud-fraccionamiento-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudFraccionamientoPageRoutingModule": () => (/* binding */ SolicitudFraccionamientoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _solicitud_fraccionamiento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solicitud-fraccionamiento.page */ 2094);




const routes = [
    {
        path: '',
        component: _solicitud_fraccionamiento_page__WEBPACK_IMPORTED_MODULE_0__.SolicitudFraccionamientoPage
    }
];
let SolicitudFraccionamientoPageRoutingModule = class SolicitudFraccionamientoPageRoutingModule {
};
SolicitudFraccionamientoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SolicitudFraccionamientoPageRoutingModule);



/***/ }),

/***/ 3498:
/*!*******************************************************************************!*\
  !*** ./src/app/solicitud-fraccionamiento/solicitud-fraccionamiento.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudFraccionamientoPageModule": () => (/* binding */ SolicitudFraccionamientoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _solicitud_fraccionamiento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solicitud-fraccionamiento-routing.module */ 5301);
/* harmony import */ var _solicitud_fraccionamiento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solicitud-fraccionamiento.page */ 2094);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);








let SolicitudFraccionamientoPageModule = class SolicitudFraccionamientoPageModule {
};
SolicitudFraccionamientoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _solicitud_fraccionamiento_routing_module__WEBPACK_IMPORTED_MODULE_0__.SolicitudFraccionamientoPageRoutingModule
        ],
        declarations: [_solicitud_fraccionamiento_page__WEBPACK_IMPORTED_MODULE_1__.SolicitudFraccionamientoPage]
    })
], SolicitudFraccionamientoPageModule);



/***/ }),

/***/ 2094:
/*!*****************************************************************************!*\
  !*** ./src/app/solicitud-fraccionamiento/solicitud-fraccionamiento.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudFraccionamientoPage": () => (/* binding */ SolicitudFraccionamientoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_solicitud_fraccionamiento_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./solicitud-fraccionamiento.page.html */ 6542);
/* harmony import */ var _solicitud_fraccionamiento_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solicitud-fraccionamiento.page.scss */ 335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalpermisos.service */ 46);
/* harmony import */ var _modalsolicitudfracionamiento_modalsolicitudfracionamiento_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modalsolicitudfracionamiento/modalsolicitudfracionamiento.page */ 4264);















let SolicitudFraccionamientoPage = class SolicitudFraccionamientoPage {
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
        this.campo1 = '';
        this.campo2 = '';
        this.campo3 = '';
        this.step = '1';
        var dataconsultaringresosdematerialnobloqueados = {
            nombre_solicitud: 'obteneringresomaterialnobloqueados'
        };
        this.json.variasfunciones(dataconsultaringresosdematerialnobloqueados).subscribe((res) => {
            this.ingresodematerialnobloqueados = res;
            console.log('ingresos de material No bloqueados:', this.ingresodematerialnobloqueados);
        });
    }
    CHANGEcampo1(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.campo1 = event.target.value;
            this.campo2 = '';
            this.campo3 = '';
            this.filterTerm = event.target.value;
        });
    }
    CHANGEcampo2(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.campo2 = event.target.value;
            ;
            this.campo1 = '';
            this.campo3 = '';
            this.filterTerm = event.target.value;
        });
    }
    CHANGEcampo3(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    temporalvercariable() {
        console.log('event', this.filterTerm);
    }
    actualizarlista() {
        var dataconsultaringresosdematerialnobloqueados = {
            nombre_solicitud: 'obteneringresomaterialnobloqueados'
        };
        this.json.variasfunciones(dataconsultaringresosdematerialnobloqueados).subscribe((res) => {
            this.ingresodematerialnobloqueados = res;
            console.log('ingresos de material No bloqueados:', this.ingresodematerialnobloqueados);
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
            if (this.globalpermisos.mispermisosglobalesenservice['permisonumero3'] == 'si') {
                this.puedenavegaraqui = 'si';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
            else if (this.globalpermisos.mispermisosglobalesenservice['permisonumero3'] != 'si') {
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
    solicitar(producto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modalsolicitudfracionamiento_modalsolicitudfracionamiento_page__WEBPACK_IMPORTED_MODULE_5__.ModalsolicitudfracionamientoPage,
                componentProps: {
                    cssClass: 'my-custom-class',
                    'dataparaelmodal': producto,
                }
            });
            modal.onDidDismiss().then((data) => {
                console.log('data', data['data']);
                console.log('data dismissed', data['data'].dismissed);
                if (data['data'].dismissed == 'step1') {
                    this.step = '1';
                    this.campo1 = '';
                    this.campo2 = '';
                    this.campo3 = '';
                    this.filterTerm = '';
                }
            });
            modal.onDidDismiss().then((data) => {
                this.actualizarlista();
            });
            console.log('enviando estos datos al modal qr', producto);
            return yield modal.present();
        });
    }
};
SolicitudFraccionamientoPage.ctorParameters = () => [
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
SolicitudFraccionamientoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-solicitud-fraccionamiento',
        template: _raw_loader_solicitud_fraccionamiento_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_solicitud_fraccionamiento_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SolicitudFraccionamientoPage);



/***/ }),

/***/ 335:
/*!*******************************************************************************!*\
  !*** ./src/app/solicitud-fraccionamiento/solicitud-fraccionamiento.page.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2xpY2l0dWQtZnJhY2Npb25hbWllbnRvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 6542:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/solicitud-fraccionamiento/solicitud-fraccionamiento.page.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Solicitud de fraccionamiento</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button href=\"https://cables.cameleco.com/ayuda-solicitud-fraccionamiento/\" target=\"_blank\" style=\"text-transform: none; margin-right: 15px;\">Ayuda \r\n          <ion-icon  name=\"information-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n  </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid *ngIf=\"this.seccionactiva=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text  (click)=\"reingresar()\" color=\"danger\" >Sección expirada debe reingresar.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <ion-button  (click)=\"reingresar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">REINGRESAR</ion-text>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >No tiene permisos para navegar en esta sección.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='si'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Busqueda de productos.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n      <ion-col size=\"3\" class=\"ion-text-center\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Referencia</ion-label>\r\n          <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo1}}\" (input)=\"CHANGEcampo1($event)\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"ion-text-center\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Codigo</ion-label>\r\n          <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo2}}\" (input)=\"CHANGEcampo2($event)\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-center\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nombre:</ion-label>\r\n          <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo3}}\" (input)=\"CHANGEcampo3($event)\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n      <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n          <ion-button [disabled]=\"    \r\n          this.campo1==''&&\r\n          this.campo2==''&&\r\n          this.campo3==''\r\n          \" (click)=\"buscar()\">Buscar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    <ion-row *ngIf=\"this.step=='2'\" class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <!-- <ion-searchbar placeholder=\"Buscar...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar> -->\r\n            <ion-button (click)=\"volver()\"><ion-icon name=\"arrow-back-outline\"></ion-icon>volver</ion-button>\r\n\r\n            <ion-row class=\"ion-align-items-center\">\r\n              <ion-col size=\"2\" class=\"ion-text-center\">\r\n                \r\n                <ion-text >Referencia</ion-text>\r\n              </ion-col>\r\n        \r\n\r\n        \r\n            <ion-col size=\"2.5\" class=\"ion-text-center\">\r\n              <ion-text >Codigo</ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"ion-text-center\">\r\n              <ion-text >Nombre</ion-text>\r\n            </ion-col>\r\n      \r\n\r\n      \r\n          <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n            <ion-text >Accion</ion-text>\r\n          </ion-col>\r\n          </ion-row>\r\n\r\n\r\n            <ion-list class=\"ion-align-items-center\">\r\n                  <ion-row style=\"border-bottom: 1px solid #151515 !important; border-top: 1px solid #151515 !important;\" *ngFor=\"let producto of ingresodematerialnobloqueados | filter:filterTerm; let i = index\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                    \r\n                    <ion-col style=\"text-align: center;\" size=\"2\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                      <ion-text color=\"danger\" style=\"color:danger; font-size:small;\">{{producto.referencia}}</ion-text>\r\n                    </ion-col>\r\n                    <ion-col style=\"text-align: center;\" size=\"2.5\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                      <ion-text color=\"danger\" style=\"color:danger; font-size:small;\">{{producto.producto}}</ion-text>\r\n                    </ion-col>\r\n\r\n                    <!-- <ion-col style=\"text-align: center;\" size=\"2.5\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                      <ion-text *ngIf=\"producto.id>0&&producto.id<10\" color=\"danger\" style=\"color:danger\">0000000{{producto.id}}</ion-text>\r\n                      <ion-text *ngIf=\"producto.id>10&&producto.id<100\" color=\"danger\" style=\"color:danger\">000000{{producto.id}}</ion-text>\r\n                      <ion-text *ngIf=\"producto.id>100&&producto.id<1000\" color=\"danger\" style=\"color:danger\">00000{{producto.id}}</ion-text>\r\n                      <ion-text *ngIf=\"producto.id>1000&&producto.id<10000\" color=\"danger\" style=\"color:danger\">0000{{producto.id}}</ion-text>\r\n                      <ion-text *ngIf=\"producto.id>10000&&producto.id<100000\" color=\"danger\" style=\"color:danger\">000{{producto.id}}</ion-text>\r\n                    </ion-col> -->\r\n\r\n                    <ion-col style=\"text-align: center;\" size=\"6\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                      <ion-text color=\"danger\" style=\"color:danger; font-size:small;\">{{producto.descripcion}}</ion-text>\r\n                    </ion-col>\r\n\r\n                    <ion-col style=\"text-align: center;\" size=\"1.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                      <ion-button (click)=\"solicitar(producto)\" size=\"small\">\r\n                      <ion-icon style=\"font-size: x-large; border-radius: 5px; color:white;\" name=\"cut-outline\" item-right></ion-icon><ion-text style=\"font-size: 9px; color:white;\">Fraccionar</ion-text>\r\n                    </ion-button>\r\n                    </ion-col>\r\n                    \r\n                  </ion-row>\r\n\r\n                  <ion-row>\r\n                  </ion-row>\r\n\r\n              </ion-list>\r\n      </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  </ion-grid>\r\n\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_solicitud-fraccionamiento_solicitud-fraccionamiento_module_ts.js.map