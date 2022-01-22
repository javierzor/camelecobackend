(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_novedades-supervisor_novedades-supervisor_module_ts"],{

/***/ 6934:
/*!*****************************************************************************!*\
  !*** ./src/app/novedades-supervisor/novedades-supervisor-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NovedadesSupervisorPageRoutingModule": () => (/* binding */ NovedadesSupervisorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _novedades_supervisor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./novedades-supervisor.page */ 2002);




const routes = [
    {
        path: '',
        component: _novedades_supervisor_page__WEBPACK_IMPORTED_MODULE_0__.NovedadesSupervisorPage
    }
];
let NovedadesSupervisorPageRoutingModule = class NovedadesSupervisorPageRoutingModule {
};
NovedadesSupervisorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NovedadesSupervisorPageRoutingModule);



/***/ }),

/***/ 3867:
/*!*********************************************************************!*\
  !*** ./src/app/novedades-supervisor/novedades-supervisor.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NovedadesSupervisorPageModule": () => (/* binding */ NovedadesSupervisorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _novedades_supervisor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./novedades-supervisor-routing.module */ 6934);
/* harmony import */ var _novedades_supervisor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./novedades-supervisor.page */ 2002);







let NovedadesSupervisorPageModule = class NovedadesSupervisorPageModule {
};
NovedadesSupervisorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _novedades_supervisor_routing_module__WEBPACK_IMPORTED_MODULE_0__.NovedadesSupervisorPageRoutingModule
        ],
        declarations: [_novedades_supervisor_page__WEBPACK_IMPORTED_MODULE_1__.NovedadesSupervisorPage]
    })
], NovedadesSupervisorPageModule);



/***/ }),

/***/ 2002:
/*!*******************************************************************!*\
  !*** ./src/app/novedades-supervisor/novedades-supervisor.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NovedadesSupervisorPage": () => (/* binding */ NovedadesSupervisorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_novedades_supervisor_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./novedades-supervisor.page.html */ 8723);
/* harmony import */ var _novedades_supervisor_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./novedades-supervisor.page.scss */ 2427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalpermisos.service */ 46);
/* harmony import */ var _modalnovedadessupervisor_modalnovedadessupervisor_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modalnovedadessupervisor/modalnovedadessupervisor.page */ 1418);















let NovedadesSupervisorPage = class NovedadesSupervisorPage {
    constructor(modalController, location, router, json, loadingController, navCtrl, loading, route, modalCtrl, datepipe, menuCtrl, myapp, globalpermisos) {
        this.modalController = modalController;
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
        var datavernovedadesdesupervisor = {
            nombre_solicitud: 'vernovedadesdesupervisor'
        };
        this.json.variasfunciones(datavernovedadesdesupervisor).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('respuesta a la solicitud vernovedadesdesupervisor', res);
            this.respuestavernovedadesdesupervisor = res;
        }));
    }
    actualizarlista() {
        var datavernovedadesdesupervisor = {
            nombre_solicitud: 'vernovedadesdesupervisor'
        };
        this.json.variasfunciones(datavernovedadesdesupervisor).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('respuesta a la solicitud vernovedadesdesupervisor', res);
            this.respuestavernovedadesdesupervisor = res;
        }));
    }
    ionViewDidEnter() {
        this.usuariologeado = this.globalpermisos.usuariologeado;
        if (this.usuariologeado == undefined || this.usuariologeado == null) {
            this.seccionactiva = 'no';
        }
        this.globalpermisos.mispermisosglobalesenservice;
        console.log('en la vista lo que tengo', this.permisosconsultadosencomponenteprincipalYService);
        if (this.globalpermisos.mispermisosglobalesenservice) {
            if (this.globalpermisos.mispermisosglobalesenservice['permisonumero14'] == 'si') {
                this.puedenavegaraqui = 'si';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
            else if (this.globalpermisos.mispermisosglobalesenservice['permisonumero14'] != 'si') {
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
    atender(novedades) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('consultar productos de ', novedades);
            const modal = yield this.modalController.create({
                component: _modalnovedadessupervisor_modalnovedadessupervisor_page__WEBPACK_IMPORTED_MODULE_5__.ModalnovedadessupervisorPage,
                componentProps: {
                    cssClass: 'my-custom-class',
                    'dataparaelmodal': novedades,
                }
            });
            modal.onDidDismiss().then((data) => {
                this.actualizarlista();
                if (data['data'].dismissed == 'acualiza') {
                    this.actualizarlista();
                }
            });
            console.log('enviando estos datos al modal qr', novedades);
            return yield modal.present();
        });
    }
};
NovedadesSupervisorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent },
    { type: _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__.GlobalpermisosService }
];
NovedadesSupervisorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-novedades-supervisor',
        template: _raw_loader_novedades_supervisor_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_novedades_supervisor_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NovedadesSupervisorPage);



/***/ }),

/***/ 2427:
/*!*********************************************************************!*\
  !*** ./src/app/novedades-supervisor/novedades-supervisor.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".colornuevo {\n  --ion-background-color:#d4d4d4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdmVkYWRlcy1zdXBlcnZpc29yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0oiLCJmaWxlIjoibm92ZWRhZGVzLXN1cGVydmlzb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9ybnVldm97XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkNGQ0ZDQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 8723:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/novedades-supervisor/novedades-supervisor.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Novedades Supervisor</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button href=\"https://cables.cameleco.com/ayuda-novedades-supervisor/\" target=\"_blank\" style=\"text-transform: none; margin-right: 15px;\">Ayuda \r\n          <ion-icon  name=\"information-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n  </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid *ngIf=\"this.seccionactiva=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text  (click)=\"reingresar()\" color=\"danger\" >Sección expirada debe reingresar.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <ion-button  (click)=\"reingresar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">REINGRESAR</ion-text>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >No tiene permisos para navegar en esta sección.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='si'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Bienvenido.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"border-bottom: 1px solid #303030; border-top: 1px solid #303030; text-align: center; font-size: 9px;\" no-padding class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n      <ion-col size=\"1.5\" style=\"border-left: 1px solid #303030;  border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n         <ion-text>Referencia</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"1.5\" style=\" border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n        <ion-text>Código</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n        <ion-text>Nombre</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"1.8\" style=\"border-left: 1px solid #303030;  border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n        <ion-text>Documento de<br>referencia</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"1\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n        <ion-text>Metros</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"1.4\" style=\"border-left: 1px solid #303030;  border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n        <ion-text>Tipo<br>Novedad</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"0.8\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row *ngFor=\"let novedades of this.respuestavernovedadesdesupervisor;\" style=\"border-bottom: 1px solid #303030; border-top: 1px solid #303030; background-color:#f2f2f2; text-align: center; font-size: 9px;\" no-padding class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n      <ion-col size=\"1.5\" style=\"border-left: 1px solid #303030;  border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n         <ion-text color=\"danger\">{{novedades.referencia}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"1.5\" style=\" border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n        <ion-text *ngIf=\"novedades.id_inutilizado>0&&novedades.id_inutilizado<10\" color=\"danger\" style=\"color:danger\">0000000{{novedades.id_inutilizado}}</ion-text>\r\n        <ion-text *ngIf=\"novedades.id_inutilizado>10&&novedades.id_inutilizado<100\" color=\"danger\" style=\"color:danger\">000000{{novedades.id_inutilizado}}</ion-text>\r\n        <ion-text *ngIf=\"novedades.id_inutilizado>100&&novedades.id_inutilizado<1000\" color=\"danger\" style=\"color:danger\">00000{{novedades.id_inutilizado}}</ion-text>\r\n        <ion-text *ngIf=\"novedades.id_inutilizado>1000&&novedades.id_inutilizado<10000\" color=\"danger\" style=\"color:danger\">0000{{novedades.id_inutilizado}}</ion-text>\r\n        <ion-text *ngIf=\"novedades.id_inutilizado>10000&&novedades.id_inutilizado<100000\" color=\"danger\" style=\"color:danger\">000{{novedades.id_inutilizado}}</ion-text>\r\n\r\n        <ion-text></ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n        <ion-text color=\"danger\">{{novedades.descripcion}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"1.8\" style=\"border-left: 1px solid #303030;  border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n        <ion-text color=\"danger\">{{novedades.referencia}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"1\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n        <ion-text color=\"danger\">{{novedades.metrosafraccionar}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"1.4\" style=\"border-left: 1px solid #303030;  border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n        <ion-text color=\"danger\">{{novedades.tipo_novedad}}</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"0.8\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\r\n        <ion-button (click)=\"atender(novedades)\" size=\"small\">Atender</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n  \r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_novedades-supervisor_novedades-supervisor_module_ts.js.map