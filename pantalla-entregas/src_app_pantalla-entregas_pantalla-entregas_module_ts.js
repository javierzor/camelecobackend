(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_pantalla-entregas_pantalla-entregas_module_ts"],{

/***/ 7872:
/*!***********************************************************************!*\
  !*** ./src/app/pantalla-entregas/pantalla-entregas-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PantallaEntregasPageRoutingModule": () => (/* binding */ PantallaEntregasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pantalla_entregas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantalla-entregas.page */ 5116);




const routes = [
    {
        path: '',
        component: _pantalla_entregas_page__WEBPACK_IMPORTED_MODULE_0__.PantallaEntregasPage
    }
];
let PantallaEntregasPageRoutingModule = class PantallaEntregasPageRoutingModule {
};
PantallaEntregasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PantallaEntregasPageRoutingModule);



/***/ }),

/***/ 1185:
/*!***************************************************************!*\
  !*** ./src/app/pantalla-entregas/pantalla-entregas.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PantallaEntregasPageModule": () => (/* binding */ PantallaEntregasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _pantalla_entregas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pantalla-entregas-routing.module */ 7872);
/* harmony import */ var _pantalla_entregas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pantalla-entregas.page */ 5116);







let PantallaEntregasPageModule = class PantallaEntregasPageModule {
};
PantallaEntregasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pantalla_entregas_routing_module__WEBPACK_IMPORTED_MODULE_0__.PantallaEntregasPageRoutingModule
        ],
        declarations: [_pantalla_entregas_page__WEBPACK_IMPORTED_MODULE_1__.PantallaEntregasPage]
    })
], PantallaEntregasPageModule);



/***/ }),

/***/ 5116:
/*!*************************************************************!*\
  !*** ./src/app/pantalla-entregas/pantalla-entregas.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PantallaEntregasPage": () => (/* binding */ PantallaEntregasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pantalla_entregas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pantalla-entregas.page.html */ 2708);
/* harmony import */ var _pantalla_entregas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pantalla-entregas.page.scss */ 2326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalpermisos.service */ 46);














let PantallaEntregasPage = class PantallaEntregasPage {
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
        var datapantallaentregas = {
            nombre_solicitud: 'pantallaentregas'
        };
        this.json.variasfunciones(datapantallaentregas).subscribe((res) => {
            console.log('respuesta de pantallaentregas', res);
            this.respuestapantallaentregas = res;
        });
    }
    ionViewDidEnter() {
        this.usuariologeado = this.globalpermisos.usuariologeado;
        if (this.usuariologeado == undefined || this.usuariologeado == null) {
            this.menuCtrl.enable(false);
            this.seccionactiva = 'no';
        }
        this.globalpermisos.mispermisosglobalesenservice;
        console.log('en la vista lo que tengo', this.permisosconsultadosencomponenteprincipalYService);
        if (this.globalpermisos.mispermisosglobalesenservice) {
            if (this.globalpermisos.mispermisosglobalesenservice['permisonumero12'] == 'si') {
                this.puedenavegaraqui = 'si';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
            else if (this.globalpermisos.mispermisosglobalesenservice['permisonumero12'] != 'si') {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
};
PantallaEntregasPage.ctorParameters = () => [
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
PantallaEntregasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-pantalla-entregas',
        template: _raw_loader_pantalla_entregas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pantalla_entregas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PantallaEntregasPage);



/***/ }),

/***/ 2326:
/*!***************************************************************!*\
  !*** ./src/app/pantalla-entregas/pantalla-entregas.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYW50YWxsYS1lbnRyZWdhcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 2708:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pantalla-entregas/pantalla-entregas.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Pantalla de Entregas</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button href=\"https://cables.cameleco.com/ayuda-pantalla-entregas/\" target=\"_blank\" style=\"text-transform: none; margin-right: 15px;\">Ayuda \r\n          <ion-icon  name=\"information-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n  </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- <ion-grid *ngIf=\"this.seccionactiva=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text  (click)=\"reingresar()\" color=\"danger\" >Sección expirada debe reingresar.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <ion-button  (click)=\"reingresar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">REINGRESAR</ion-text>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >No tiene permisos para navegar en esta sección.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n\r\n\r\n  <!-- <ion-grid *ngIf=\"this.puedenavegaraqui=='si'\"> -->\r\n    <ion-grid>\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n\r\n        <h1 style=\"text-align: center; font-family:PeaceSans; color:#ff0110; line-height:0%; \">CAMELECO <br>\r\n        \r\n          <h6 style=\"text-align: center; color:#303030; font-size: small;\">\r\n            www.cameleco.com\r\n          </h6>\r\n        \r\n        </h1>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"border-radius: 6px; background-color:#C4C4C4;\" class=\"ion-align-items-center\">\r\n      <ion-col size=\"2.5\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Documento</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"4.5\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Nombre</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"2.5\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Cantidad</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"2.5\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Estado</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngFor=\"let pantallaentregas of respuestapantallaentregas\"  class=\"ion-align-items-center\">\r\n      <ion-col size=\"2.5\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >{{pantallaentregas.documento}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"4.5\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >{{pantallaentregas.descripcion}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"2.5\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >{{pantallaentregas.metrosafraccionar}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"2.5\" class=\"ion-text-center\">\r\n        <ion-text *ngIf=\"pantallaentregas.estado=='Entregado'\" color=\"danger\" >Entregado</ion-text>\r\n        <ion-text *ngIf=\"pantallaentregas.estado!='Entregado'\" color=\"danger\" >{{pantallaentregas.estado}}</ion-text>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n  \r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pantalla-entregas_pantalla-entregas_module_ts.js.map