(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_bloq-ingreso-material_bloq-ingreso-material_module_ts"],{

/***/ 8349:
/*!*******************************************************************************!*\
  !*** ./src/app/bloq-ingreso-material/bloq-ingreso-material-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloqIngresoMaterialPageRoutingModule": () => (/* binding */ BloqIngresoMaterialPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _bloq_ingreso_material_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloq-ingreso-material.page */ 7218);




const routes = [
    {
        path: '',
        component: _bloq_ingreso_material_page__WEBPACK_IMPORTED_MODULE_0__.BloqIngresoMaterialPage
    }
];
let BloqIngresoMaterialPageRoutingModule = class BloqIngresoMaterialPageRoutingModule {
};
BloqIngresoMaterialPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BloqIngresoMaterialPageRoutingModule);



/***/ }),

/***/ 3597:
/*!***********************************************************************!*\
  !*** ./src/app/bloq-ingreso-material/bloq-ingreso-material.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloqIngresoMaterialPageModule": () => (/* binding */ BloqIngresoMaterialPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _bloq_ingreso_material_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloq-ingreso-material-routing.module */ 8349);
/* harmony import */ var _bloq_ingreso_material_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bloq-ingreso-material.page */ 7218);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);








let BloqIngresoMaterialPageModule = class BloqIngresoMaterialPageModule {
};
BloqIngresoMaterialPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _bloq_ingreso_material_routing_module__WEBPACK_IMPORTED_MODULE_0__.BloqIngresoMaterialPageRoutingModule
        ],
        declarations: [_bloq_ingreso_material_page__WEBPACK_IMPORTED_MODULE_1__.BloqIngresoMaterialPage]
    })
], BloqIngresoMaterialPageModule);



/***/ }),

/***/ 7218:
/*!*********************************************************************!*\
  !*** ./src/app/bloq-ingreso-material/bloq-ingreso-material.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloqIngresoMaterialPage": () => (/* binding */ BloqIngresoMaterialPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_bloq_ingreso_material_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bloq-ingreso-material.page.html */ 7985);
/* harmony import */ var _bloq_ingreso_material_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bloq-ingreso-material.page.scss */ 2799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalpermisos.service */ 46);
/* harmony import */ var _modalbloqingresomaterial_modalbloqingresomaterial_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modalbloqingresomaterial/modalbloqingresomaterial.page */ 1142);















let BloqIngresoMaterialPage = class BloqIngresoMaterialPage {
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
        this.apretoelbotonbuscar = 'no';
        var dataconsultaringresosdematerialnobloqueados = {
            nombre_solicitud: 'obteneringresomaterialnobloqueados'
        };
        this.json.variasfunciones(dataconsultaringresosdematerialnobloqueados).subscribe((res) => {
            this.ingresodematerialnobloqueados = res;
            console.log('ingresos de material No bloqueados:', this.ingresodematerialnobloqueados);
        });
    }
    CHANGEterminosdefiltro(event) {
        this.filterTerm = event.target.value;
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
            if (this.globalpermisos.mispermisosglobalesenservice['permisonumero5'] == 'si') {
                this.puedenavegaraqui = 'si';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
            else if (this.globalpermisos.mispermisosglobalesenservice['permisonumero5'] != 'si') {
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
    CLICKapretoelbotonbuscar() {
        this.apretoelbotonbuscar = 'si';
    }
    CLICKapretoelbotonvolver() {
        this.filterTerm = '';
        this.apretoelbotonbuscar = 'no';
    }
    bloquear(producto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('consultar productos de ', producto);
            const modal = yield this.modalController.create({
                component: _modalbloqingresomaterial_modalbloqingresomaterial_page__WEBPACK_IMPORTED_MODULE_5__.ModalbloqingresomaterialPage,
                componentProps: {
                    cssClass: 'my-custom-class',
                    'dataparaelmodal': producto,
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
BloqIngresoMaterialPage.ctorParameters = () => [
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
BloqIngresoMaterialPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-bloq-ingreso-material',
        template: _raw_loader_bloq_ingreso_material_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bloq_ingreso_material_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BloqIngresoMaterialPage);



/***/ }),

/***/ 2799:
/*!***********************************************************************!*\
  !*** ./src/app/bloq-ingreso-material/bloq-ingreso-material.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9xLWluZ3Jlc28tbWF0ZXJpYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 7985:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bloq-ingreso-material/bloq-ingreso-material.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Bloqueo de ingreso de material</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button href=\"https://cables.cameleco.com/ayuda-bloq-ingreso-material/\" target=\"_blank\" style=\"text-transform: none; margin-right: 15px;\">Ayuda \r\n          <ion-icon  name=\"information-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n  </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid *ngIf=\"this.seccionactiva=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text  (click)=\"reingresar()\" color=\"danger\" >Sección expirada debe reingresar.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <ion-button  (click)=\"reingresar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">REINGRESAR</ion-text>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >No tiene permisos para navegar en esta sección.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='si'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Bienvenido.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\">\r\n\r\n\r\n        <ion-row  *ngIf=\"this.apretoelbotonbuscar=='no'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"2\" class=\"ion-text-center\">\r\n            <label>Nº Carrete</label><br>\r\n            <ion-input (keyup.enter)=\"CLICKapretoelbotonbuscar()\" (ionChange)=\"CHANGEterminosdefiltro($event)\" placeholder=\"nº Carrete\" style=\"background-color: #e4e4e4;\"></ion-input>\r\n          </ion-col>\r\n    \r\n          <ion-col size=\"2.5\" class=\"ion-text-center\">\r\n            <label>Codigo</label><br>\r\n            <ion-input (keyup.enter)=\"CLICKapretoelbotonbuscar()\" (ionChange)=\"CHANGEterminosdefiltro($event)\" placeholder=\"Codigo\" style=\"background-color: #e4e4e4;\"></ion-input>\r\n          </ion-col>\r\n    \r\n        <ion-col size=\"2.5\" class=\"ion-text-center\">\r\n          <label>Doc. Referencia</label><br>\r\n          <ion-input (keyup.enter)=\"CLICKapretoelbotonbuscar()\" (ionChange)=\"CHANGEterminosdefiltro($event)\" placeholder=\"Doc. Referencia\" style=\"background-color: #e4e4e4;\"></ion-input>\r\n        </ion-col>\r\n        <ion-col size=\"3.5\" class=\"ion-text-center\">\r\n          <label>Nombre</label><br>\r\n          <ion-input (keyup.enter)=\"CLICKapretoelbotonbuscar()\" (ionChange)=\"CHANGEterminosdefiltro($event)\" placeholder=\"Nombre\" style=\"background-color: #e4e4e4;\"></ion-input>\r\n        </ion-col>\r\n  \r\n        <!-- <ion-col size=\"2\" class=\"ion-text-center\">\r\n          <ion-text style=\"color:#303030;\">Fecha Ingreso</ion-text>\r\n        </ion-col> -->\r\n  \r\n      <ion-col size=\"1.5\" class=\"ion-text-center\"><br>\r\n        <ion-button (click)=\"CLICKapretoelbotonbuscar()\">Buscar</ion-button>\r\n      </ion-col>\r\n      </ion-row>\r\n\r\n            <ion-row  *ngIf=\"this.apretoelbotonbuscar=='si'\" class=\"ion-align-items-center\">\r\n              <ion-col size=\"9\">\r\n                <ion-searchbar *ngIf=\"this.apretoelbotonbuscar=='ocultarsiempre'\" placeholder=\"Buscar...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar>\r\n              </ion-col>\r\n              <ion-col size=\"3\">\r\n                <ion-button (click)=\"CLICKapretoelbotonvolver()\">Volver</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <section *ngIf=\"this.apretoelbotonbuscar=='si'\" >\r\n\r\n            <ion-row class=\"ion-align-items-center\">\r\n              <ion-col size=\"2\" class=\"ion-text-center\">\r\n                <ion-text style=\"color:#303030;\">Nº Carrete</ion-text>\r\n              </ion-col>\r\n        \r\n              <ion-col size=\"2.5\" class=\"ion-text-center\">\r\n                <ion-text style=\"color:#303030;\">Código</ion-text>\r\n              </ion-col>\r\n        \r\n            <ion-col size=\"2.5\" class=\"ion-text-center\">\r\n              <ion-text style=\"color:#303030;\">Doc. Referencia</ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"3.5\" class=\"ion-text-center\">\r\n              <ion-text style=\"color:#303030;\">Nombre</ion-text>\r\n            </ion-col>\r\n      \r\n            <!-- <ion-col size=\"2\" class=\"ion-text-center\">\r\n              <ion-text style=\"color:#303030;\">Fecha Ingreso</ion-text>\r\n            </ion-col> -->\r\n      \r\n          <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n            <ion-text style=\"color:#303030;\">Accion</ion-text>\r\n          </ion-col>\r\n          </ion-row>\r\n\r\n\r\n          \r\n\r\n            <ion-list class=\"ion-align-items-center\">\r\n                <!-- <ion-item > -->\r\n                  <ion-row style=\"border-bottom: 1px solid #151515 !important; border-top: 1px solid #151515 !important;\" *ngFor=\"let producto of ingresodematerialnobloqueados | filter:filterTerm\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                    <ion-col style=\"text-align: center;\" size=\"2\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                      <ion-text *ngIf=\"producto.id>0&&producto.id<10\" color=\"danger\" style=\"color:danger\">0000000{{producto.id}}</ion-text>\r\n                      <ion-text *ngIf=\"producto.id>10&&producto.id<100\" color=\"danger\" style=\"color:danger\">000000{{producto.id}}</ion-text>\r\n                      <ion-text *ngIf=\"producto.id>100&&producto.id<1000\" color=\"danger\" style=\"color:danger\">00000{{producto.id}}</ion-text>\r\n                      <ion-text *ngIf=\"producto.id>1000&&producto.id<10000\" color=\"danger\" style=\"color:danger\">0000{{producto.id}}</ion-text>\r\n                      <ion-text *ngIf=\"producto.id>10000&&producto.id<100000\" color=\"danger\" style=\"color:danger\">000{{producto.id}}</ion-text>\r\n                    </ion-col>\r\n                    <ion-col style=\"text-align: center;\" size=\"2.5\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                      <ion-text color=\"danger\" style=\"color:danger\">{{producto.producto}}</ion-text>\r\n                    </ion-col>\r\n                    <ion-col style=\"text-align: center;\" size=\"2.5\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                      <ion-text color=\"danger\" style=\"color:danger\">{{producto.numerodenotadeentrada}}</ion-text>\r\n                    </ion-col>\r\n                    <ion-col style=\"text-align: center;\" size=\"3.5\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                      <ion-text color=\"danger\" style=\"color:danger\">{{producto.descripcion}}</ion-text>\r\n                    </ion-col>\r\n                    <!-- <ion-col style=\"text-align: center;\" size=\"2\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                      <ion-text color=\"danger\" style=\"color:danger\">{{producto.fecha_autogenerada}}</ion-text>\r\n                    </ion-col> -->\r\n                    <ion-col style=\"text-align: center;\" size=\"1.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                      <ion-button (click)=\"bloquear(producto)\" size=\"small\">\r\n                      <ion-icon style=\"font-size: x-large; border-radius: 5px; color:white;\" name=\"lock-closed-outline\" item-right></ion-icon><ion-text style=\"font-size: 9px; color:white;\">Bloquear</ion-text>\r\n                    </ion-button>\r\n                    </ion-col>\r\n                    \r\n\r\n                  </ion-row>\r\n                <!-- </ion-item> -->\r\n              </ion-list>\r\n\r\n            </section>\r\n\r\n      </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  </ion-grid>\r\n\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_bloq-ingreso-material_bloq-ingreso-material_module_ts.js.map