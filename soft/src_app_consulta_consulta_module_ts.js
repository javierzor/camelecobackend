(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_consulta_consulta_module_ts"],{

/***/ 1508:
/*!*****************************************************!*\
  !*** ./src/app/consulta/consulta-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaPageRoutingModule": () => (/* binding */ ConsultaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _consulta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consulta.page */ 9894);




const routes = [
    {
        path: '',
        component: _consulta_page__WEBPACK_IMPORTED_MODULE_0__.ConsultaPage
    }
];
let ConsultaPageRoutingModule = class ConsultaPageRoutingModule {
};
ConsultaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConsultaPageRoutingModule);



/***/ }),

/***/ 6372:
/*!*********************************************!*\
  !*** ./src/app/consulta/consulta.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaPageModule": () => (/* binding */ ConsultaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _consulta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consulta-routing.module */ 1508);
/* harmony import */ var _consulta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consulta.page */ 9894);







let ConsultaPageModule = class ConsultaPageModule {
};
ConsultaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _consulta_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConsultaPageRoutingModule
        ],
        declarations: [_consulta_page__WEBPACK_IMPORTED_MODULE_1__.ConsultaPage]
    })
], ConsultaPageModule);



/***/ }),

/***/ 9894:
/*!*******************************************!*\
  !*** ./src/app/consulta/consulta.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaPage": () => (/* binding */ ConsultaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./consulta.page.html */ 7980);
/* harmony import */ var _consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consulta.page.scss */ 638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalpermisos.service */ 46);
/* harmony import */ var _modalconsulta_modalconsulta_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modalconsulta/modalconsulta.page */ 9597);















let ConsultaPage = class ConsultaPage {
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
        this.codigo = '';
        this.nombre = '';
        this.referencia = '';
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.usuariologeado = this.globalpermisos.usuariologeado;
        if (this.usuariologeado == undefined || this.usuariologeado == null) {
            this.seccionactiva = 'no';
        }
        this.globalpermisos.mispermisosglobalesenservice;
        console.log('en la vista lo que tengo', this.permisosconsultadosencomponenteprincipalYService);
        if (this.globalpermisos.mispermisosglobalesenservice) {
            if (this.globalpermisos.mispermisosglobalesenservice['permisonumero2'] == 'si') {
                this.puedenavegaraqui = 'si';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
            else if (this.globalpermisos.mispermisosglobalesenservice['permisonumero2'] != 'si') {
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
    ONCHANGEreferencia(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('OnChange valor', event.target.value);
            this.referencia = event.target.value;
            if (this.referencia) {
                this.codigo = '';
                this.nombre = '';
            }
        });
    }
    ONCHANGEcodigo(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('OnChange valor', event.target.value);
            this.codigo = event.target.value;
            if (this.codigo) {
                this.nombre = '';
                this.referencia = '';
            }
        });
    }
    ONCHANGEnombre(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('OnChange valor', event.target.value);
            this.nombre = event.target.value;
            if (this.nombre) {
                this.codigo = '';
                this.referencia = '';
            }
        });
    }
    buscarporreferencia() {
        console.log('buscando por referencia');
        var dataconsultar = {
            nombre_solicitud: 'buscarconsulta',
            referencia: this.referencia
        };
        this.json.variasfunciones(dataconsultar).subscribe((res) => {
            console.log('respuesta a la solicitud variasfunciones,  buscarconsulta', res);
            this.respuestabusqueda = res;
        }); //cierrran las lecturas de res
    }
    buscarporcodigo() {
        console.log('buscando por codigo');
        var dataconsultar = {
            nombre_solicitud: 'buscarconsulta',
            producto: this.codigo
        };
        this.json.variasfunciones(dataconsultar).subscribe((res) => {
            console.log('respuesta a la solicitud variasfunciones,  buscarconsulta', res);
            this.respuestabusqueda = res;
        }); //cierrran las lecturas de res
    }
    buscarpornombre() {
        console.log('buscando por nombre');
        var dataconsultar = {
            nombre_solicitud: 'buscarconsulta',
            descripcion: this.nombre
        };
        this.json.variasfunciones(dataconsultar).subscribe((res) => {
            console.log('respuesta a la solicitud variasfunciones,  buscarconsulta', res);
            this.respuestabusqueda = res;
        }); //cierrran las lecturas de res
    }
    consultaringresomaterial(producto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('consultar productos de ', producto);
            var dataconsultaringresomaterial = {
                nombre_solicitud: 'obteneringresomaterialdeunproducto',
                producto: producto.producto
            };
            this.json.variasfunciones(dataconsultaringresomaterial).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log('respuesta a la solicitud variasfunciones,  buscarconsulta', res);
                this.respuestabusquedaingresomaterialdeunproducto = res;
                const modal = yield this.modalController.create({
                    component: _modalconsulta_modalconsulta_page__WEBPACK_IMPORTED_MODULE_5__.ModalconsultaPage,
                    componentProps: {
                        cssClass: 'my-custom-class',
                        'dataparaelmodal': this.respuestabusquedaingresomaterialdeunproducto,
                    }
                });
                console.log('enviando estos datos al modal qr', this.respuestabusquedaingresomaterialdeunproducto);
                return yield modal.present();
            })); //cierrran las lecturas de res
        });
    }
    cerrar() {
        this.respuestabusqueda = undefined;
    }
};
ConsultaPage.ctorParameters = () => [
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
ConsultaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-consulta',
        template: _raw_loader_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConsultaPage);



/***/ }),

/***/ 638:
/*!*********************************************!*\
  !*** ./src/app/consulta/consulta.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25zdWx0YS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 7980:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/consulta/consulta.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Consulta</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n          <ion-button href=\"https://cables.cameleco.com/ayuda-consulta-2/\" target=\"_blank\" style=\"text-transform: none; margin-right: 15px;\">Ayuda \r\n              <ion-icon  name=\"information-circle-outline\"></ion-icon>\r\n          </ion-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid *ngIf=\"this.seccionactiva=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text  (click)=\"reingresar()\" color=\"danger\" >Sección expirada debe reingresar.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <ion-button  (click)=\"reingresar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">REINGRESAR</ion-text>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >No tiene permisos para navegar en esta sección.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='si'\">\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Busqueda de productos.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"3\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Referencia.</ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Código.</ion-text>\r\n      </ion-col>\r\n\r\n    <ion-col size=\"6\" class=\"ion-text-center\">\r\n      <ion-text color=\"danger\" >Nombre.</ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"3\" class=\"ion-text-center\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Referencia:</ion-label>\r\n          <ion-input style=\"border: solid 1px #ff011030;\" (keyup.enter)=\"buscarporreferencia()\" value=\"{{this.referencia}}\" (ionChange)=\"ONCHANGEreferencia($event)\"></ion-input>\r\n        </ion-item>      \r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\" class=\"ion-text-center\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Codigo:</ion-label>\r\n          <ion-input style=\"border: solid 1px #ff011030;\" (keyup.enter)=\"buscarporcodigo()\" value=\"{{this.codigo}}\" (ionChange)=\"ONCHANGEcodigo($event)\"></ion-input>\r\n        </ion-item>      \r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" class=\"ion-text-center\">\r\n        <ion-item>\r\n        <ion-label position=\"floating\">Nombre:</ion-label>\r\n        <ion-input style=\"border: solid 1px #ff011030;\" (keyup.enter)=\"buscarpornombre()\" value=\"{{this.nombre}}\" (ionChange)=\"ONCHANGEnombre($event)\"></ion-input>\r\n        </ion-item>      \r\n      </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <ion-button *ngIf=\"this.referencia&&this.codigo==''&&this.nombre==''\" (click)=\"buscarporreferencia()\" color=\"danger\" >Buscar</ion-button>\r\n      <ion-button *ngIf=\"this.codigo&&this.referencia==''&&this.nombre==''\" (click)=\"buscarporcodigo()\" color=\"danger\" >Buscar</ion-button>\r\n      <ion-button *ngIf=\"this.nombre&&this.codigo==''&&this.referencia==''\" (click)=\"buscarpornombre()\" color=\"danger\" >Buscar</ion-button>\r\n\r\n      <ion-button disabled *ngIf=\"this.referencia==''&&this.codigo==''&&this.nombre==''\" color=\"danger\" >Buscar</ion-button>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\">\r\n          <ion-list class=\"ion-align-items-center\">\r\n              <!-- <ion-item > -->\r\n                <ion-row style=\"border-bottom: 1px solid #151515 !important; border-top: 1px solid #151515 !important;\" *ngFor=\"let producto of respuestabusqueda\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger; font-size: small;\">{{producto.referencia}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger; font-size: small;\">{{producto.producto}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger; font-size: small;\">{{producto.descripcion}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                    <ion-button (click)=\"consultaringresomaterial(producto)\" size=\"small\">\r\n                    <ion-icon style=\"font-size: x-large; border-radius: 5px; color:white;\" name=\"clipboard-outline\" item-right></ion-icon><ion-text style=\"font-size:small; color:white;\">Consultar</ion-text>\r\n                  </ion-button>\r\n                  </ion-col>\r\n                  \r\n                </ion-row>\r\n              <!-- </ion-item> -->\r\n            </ion-list>\r\n    </ion-col>\r\n</ion-row>\r\n\r\n\r\n<ion-row style=\"justify-content: center;align-items: center;\" *ngIf=\"this.respuestabusqueda!=undefined&&this.respuestabusqueda!=null&&this.respuestabusqueda''\" class=\"ion-align-items-center\">\r\n\r\n\r\n    <ion-button (click)=\"cerrar()\" >Cerrar\r\n      <ion-icon name=\"close-outline\"></ion-icon>\r\n    </ion-button>\r\n</ion-row>\r\n\r\n\r\n  </ion-grid>\r\n\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_consulta_consulta_module_ts.js.map