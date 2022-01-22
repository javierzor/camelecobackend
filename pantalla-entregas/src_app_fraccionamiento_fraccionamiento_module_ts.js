(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_fraccionamiento_fraccionamiento_module_ts"],{

/***/ 3034:
/*!*******************************************************************!*\
  !*** ./src/app/fraccionamiento/fraccionamiento-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FraccionamientoPageRoutingModule": () => (/* binding */ FraccionamientoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _fraccionamiento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fraccionamiento.page */ 2868);




const routes = [
    {
        path: '',
        component: _fraccionamiento_page__WEBPACK_IMPORTED_MODULE_0__.FraccionamientoPage
    }
];
let FraccionamientoPageRoutingModule = class FraccionamientoPageRoutingModule {
};
FraccionamientoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FraccionamientoPageRoutingModule);



/***/ }),

/***/ 5846:
/*!***********************************************************!*\
  !*** ./src/app/fraccionamiento/fraccionamiento.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FraccionamientoPageModule": () => (/* binding */ FraccionamientoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _fraccionamiento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fraccionamiento-routing.module */ 3034);
/* harmony import */ var _fraccionamiento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fraccionamiento.page */ 2868);







let FraccionamientoPageModule = class FraccionamientoPageModule {
};
FraccionamientoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fraccionamiento_routing_module__WEBPACK_IMPORTED_MODULE_0__.FraccionamientoPageRoutingModule
        ],
        declarations: [_fraccionamiento_page__WEBPACK_IMPORTED_MODULE_1__.FraccionamientoPage]
    })
], FraccionamientoPageModule);



/***/ }),

/***/ 2868:
/*!*********************************************************!*\
  !*** ./src/app/fraccionamiento/fraccionamiento.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FraccionamientoPage": () => (/* binding */ FraccionamientoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_fraccionamiento_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fraccionamiento.page.html */ 2658);
/* harmony import */ var _fraccionamiento_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fraccionamiento.page.scss */ 2114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalpermisos.service */ 46);
/* harmony import */ var _modalfraccionamientoqr_modalfraccionamientoqr_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modalfraccionamientoqr/modalfraccionamientoqr.page */ 9430);















let FraccionamientoPage = class FraccionamientoPage {
    constructor(alertController, location, router, json, loadingController, navCtrl, loading, route, modalController, datepipe, menuCtrl, myapp, globalpermisos) {
        this.alertController = alertController;
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
        var dataobtenerordenesdefraccionamientopendientesynobloqueados = {
            nombre_solicitud: 'obtenerordenesdefraccionamientopendientesynobloqueados',
        };
        this.json.variasfunciones(dataobtenerordenesdefraccionamientopendientesynobloqueados).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('respuesta a la solicitud variasfunciones,  obtenerordenesdefraccionamientopendientesynobloqueados', res);
            this.respuestaobtenerordenesdefraccionamientopendientesynobloqueados = res;
        }));
    }
    actualizarlista() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const actualizando = yield this.loadingController.create({
                message: 'Actualizando...', spinner: 'bubbles', duration: 10000,
            });
            actualizando.present();
            var dataobtenerordenesdefraccionamientopendientesynobloqueados = {
                nombre_solicitud: 'obtenerordenesdefraccionamientopendientesynobloqueados',
            };
            this.json.variasfunciones(dataobtenerordenesdefraccionamientopendientesynobloqueados).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log('respuesta a la solicitud variasfunciones,  obtenerordenesdefraccionamientopendientesynobloqueados', res);
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
            if (this.globalpermisos.mispermisosglobalesenservice['permisonumero6'] == 'si') {
                this.puedenavegaraqui = 'si';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
            else if (this.globalpermisos.mispermisosglobalesenservice['permisonumero6'] != 'si') {
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
    verificarsielcodigoescaneadoeselseleccionado(ordenafraccionar) {
    }
    ordenar(ordenafraccionar) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.nuevafecha = new Date();
            let fecha_fraccionado = this.datepipe.transform(this.nuevafecha, 'yyyy-MM-dd');
            let hora_fraccionado = this.datepipe.transform(this.nuevafecha, 'hh:mm');
            this.user_nombre = this.globalpermisos.nombre;
            this.user_id = this.globalpermisos.id_usuario;
            var datafraccionarordenfraccionamiento = {
                nombre_solicitud: 'tomarordenfraccionamiento',
                id_inutilizado: ordenafraccionar.id_inutilizado,
                nombre_ordenador: this.user_nombre,
                fecha_fraccionado: fecha_fraccionado,
                hora_fraccionado: hora_fraccionado,
                estado: 'En alistamiento'
            };
            this.json.variasfunciones(datafraccionarordenfraccionamiento).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log('respuesta a la solicitud variasfunciones,  fraccionarordenfraccionamiento', res);
                this.respuestafraccionarordenfraccionamiento = res;
                if (this.respuestafraccionarordenfraccionamiento > 0) {
                    var dataobtenerfraccionamientodespuesdefraccionar = {
                        nombre_solicitud: 'obtenerfraccionamientodespuesdefraccionar',
                        id_inutilizado: ordenafraccionar.id_inutilizado,
                    };
                    this.json.variasfunciones(dataobtenerfraccionamientodespuesdefraccionar).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        this.ordencreadaporeloperario = res[0];
                        //empieza el modal
                        const modal = yield this.modalController.create({
                            component: _modalfraccionamientoqr_modalfraccionamientoqr_page__WEBPACK_IMPORTED_MODULE_5__.ModalfraccionamientoqrPage,
                            componentProps: {
                                cssClass: 'my-custom-class',
                                'dataparaelmodal': this.ordencreadaporeloperario,
                            }
                        });
                        modal.onDidDismiss().then((data) => {
                            this.actualizarlista();
                        });
                        console.log('enviando estos datos al modal qr', this.ordencreadaporeloperario);
                        return yield modal.present();
                        //termina el modal
                    })); //cierre reconsultar fraccionamiento que se guardo con un operario.
                } //cierre condicional if
            })); //cierre envio fraccionamiento
        });
    }
    presentAlertPrompt(ordenafraccionar) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Verifique La Información:',
                message: 'Orden Frac. Nro: ' + ordenafraccionar.numero_fraccionado + '<br/> Factura:' + ordenafraccionar.numerodenotadeentrada + '  <br/> Nombre: <br\>' + ordenafraccionar.descripcion + '<br\>Observacion: ' + ordenafraccionar.observacion,
                inputs: [
                    {
                        name: 'codigoingresadoenalerta',
                        type: 'password',
                        placeholder: 'Codigo de Carrete/Chipa',
                        cssClass: 'specialClass',
                        attributes: {
                            maxlength: 9,
                            inputmode: 'decimal',
                            value: this.codigoingresadoporusuarioparaverificarqueseaelcarrete
                        },
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        },
                    },
                    {
                        text: 'Verificar',
                        handler: (alertData) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            console.log('Confirm Ok');
                            console.log(alertData.codigoingresadoenalerta);
                            if (alertData.codigoingresadoenalerta == ordenafraccionar.numero_fraccionado) {
                                console.log('Confirmado el codigo es el mismo');
                                const codigoscoinciden = yield this.loadingController.create({
                                    message: 'Verificación exitosa, Fraccionando.', spinner: 'bubbles', duration: 1000,
                                });
                                codigoscoinciden.present();
                                this.faccionar(ordenafraccionar);
                            }
                            else {
                                const incorrecto = yield this.loadingController.create({
                                    message: 'Carrete Incorrecto', spinner: 'bubbles', duration: 800,
                                });
                                this.presentAlertPrompt(ordenafraccionar);
                                incorrecto.present();
                            }
                        }),
                    },
                ],
            });
            yield alert.present();
        });
    }
    faccionar(ordenafraccionar) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.nuevafecha = new Date();
            let fecha_fraccionado = this.datepipe.transform(this.nuevafecha, 'yyyy-MM-dd');
            let hora_fraccionado = this.datepipe.transform(this.nuevafecha, 'hh:mm');
            this.user_nombre = this.globalpermisos.nombre;
            this.user_id = this.globalpermisos.id_usuario;
            var datafraccionarordenfraccionamiento = {
                nombre_solicitud: 'fraccionarordenfraccionamiento',
                id_inutilizado: ordenafraccionar.id_inutilizado,
                operario_fraccionado: this.user_nombre,
                fecha_fraccionado: fecha_fraccionado,
                hora_fraccionado: hora_fraccionado,
                estado: 'fraccionado'
            };
            this.json.variasfunciones(datafraccionarordenfraccionamiento).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log('respuesta a la solicitud variasfunciones,  fraccionarordenfraccionamiento', res);
                this.respuestafraccionarordenfraccionamiento = res;
                if (this.respuestafraccionarordenfraccionamiento > 0) {
                    var dataobtenerfraccionamientodespuesdefraccionar = {
                        nombre_solicitud: 'obtenerfraccionamientodespuesdefraccionar',
                        id_inutilizado: ordenafraccionar.id_inutilizado,
                    };
                    this.json.variasfunciones(dataobtenerfraccionamientodespuesdefraccionar).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        this.ordencreadaporeloperario = res[0];
                        //empieza el modal
                        const modal = yield this.modalController.create({
                            component: _modalfraccionamientoqr_modalfraccionamientoqr_page__WEBPACK_IMPORTED_MODULE_5__.ModalfraccionamientoqrPage,
                            componentProps: {
                                cssClass: 'my-custom-class',
                                'dataparaelmodal': this.ordencreadaporeloperario,
                            }
                        });
                        modal.onDidDismiss().then((data) => {
                            this.actualizarlista();
                        });
                        console.log('enviando estos datos al modal qr', this.ordencreadaporeloperario);
                        return yield modal.present();
                        //termina el modal
                    })); //cierre reconsultar fraccionamiento que se guardo con un operario.
                } //cierre condicional if
            })); //cierre envio fraccionamiento
        });
    }
};
FraccionamientoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
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
FraccionamientoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-fraccionamiento',
        template: _raw_loader_fraccionamiento_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fraccionamiento_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FraccionamientoPage);



/***/ }),

/***/ 2114:
/*!***********************************************************!*\
  !*** ./src/app/fraccionamiento/fraccionamiento.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmFjY2lvbmFtaWVudG8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 2658:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fraccionamiento/fraccionamiento.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Fraccionamiento</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button href=\"https://cables.cameleco.com/ayuda-fraccionamiento/\" target=\"_blank\" style=\"text-transform: none; margin-right: 15px;\">Ayuda \r\n          <ion-icon  name=\"information-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n  </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid *ngIf=\"this.seccionactiva=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text  (click)=\"reingresar()\" color=\"danger\" >Sección expirada debe reingresar.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <ion-button  (click)=\"reingresar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">REINGRESAR</ion-text>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >No tiene permisos para navegar en esta sección.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='si'\">\r\n\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <ion-card-title style=\"text-align: center;\">\r\n            <ion-text color=\"danger\" >Ejecutar orden de fraccionamiento.</ion-text><br>\r\n          </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-card-subtitle style=\"text-align: center;\">\r\n          <ion-text color=\"danger\" >Pendientes por fraccionar:</ion-text>\r\n        </ion-card-subtitle>\r\n        </ion-card-content>\r\n       </ion-card>\r\n\r\n    \r\n        <ion-row style=\"border-radius: 5px;\" class=\"ion-align-items-center\">\r\n            <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n               <ion-text style=\"font-size:9px;\" color=\"danger\" ><strong>Referencia</strong></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n               <ion-text style=\"font-size:9px;\" color=\"danger\" ><strong>Codigo</strong></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"ion-text-center\">\r\n               <ion-text style=\"font-size:9px;\" color=\"danger\" ><strong>Nombre</strong></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n                <ion-text style=\"font-size:9px;\" color=\"danger\" ><strong>Documento<br>de Referencia</strong></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n                <ion-text style=\"font-size:9px;\" color=\"danger\" ><strong>metros de<br>fraccionamiento</strong></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n                <ion-text style=\"font-size:9px;\" color=\"danger\" ><strong>Observaciones</strong></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n                <ion-text style=\"font-size:9px;\" color=\"danger\" ><strong>Accion</strong></ion-text>\r\n            </ion-col>\r\n      </ion-row>\r\n\r\n\r\n      <section *ngFor=\"let ordenafraccionar of respuestaobtenerordenesdefraccionamientopendientesynobloqueados\">\r\n        <ion-row *ngIf=\"ordenafraccionar.fraccionado=='tomada'\" class=\"ion-align-items-center\" >\r\n          <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n                <ion-text color=\"danger\" >{{ordenafraccionar.referencia}}</ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n              <ion-text *ngIf=\"ordenafraccionar.id_inutilizado>0&&ordenafraccionar.id_inutilizado<10\" color=\"danger\" style=\"color:danger\">0000000{{ordenafraccionar.id_inutilizado}}</ion-text>\r\n              <ion-text *ngIf=\"ordenafraccionar.id_inutilizado>10&&ordenafraccionar.id_inutilizado<100\" color=\"danger\" style=\"color:danger\">000000{{ordenafraccionar.id_inutilizado}}</ion-text>\r\n              <ion-text *ngIf=\"ordenafraccionar.id_inutilizado>100&&ordenafraccionar.id_inutilizado<1000\" color=\"danger\" style=\"color:danger\">00000{{ordenafraccionar.id_inutilizado}}</ion-text>\r\n              <ion-text *ngIf=\"ordenafraccionar.id_inutilizado>1000&&ordenafraccionar.id_inutilizado<10000\" color=\"danger\" style=\"color:danger\">0000{{ordenafraccionar.id_inutilizado}}</ion-text>\r\n              <ion-text *ngIf=\"ordenafraccionar.id_inutilizado>10000&&ordenafraccionar.id_inutilizado<100000\" color=\"danger\" style=\"color:danger\">000{{ordenafraccionar.id_inutilizado}}</ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"ion-text-center\">\r\n               <ion-text color=\"danger\" >{{ordenafraccionar.descripcion}}</ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n               <ion-text color=\"danger\" >{{ordenafraccionar.documento}}</ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n               <ion-text color=\"danger\" >{{ordenafraccionar.metrosafraccionar}}</ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n               <ion-text color=\"danger\" >{{ordenafraccionar.observacion}}</ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n               <ion-button (click)=\"presentAlertPrompt(ordenafraccionar)\" size=\"small\" color=\"danger\">\r\n                    <ion-icon style=\"color:white;\" name=\"bag-check-outline\"></ion-icon><ion-text style=\"font-size: 8px; color:white;\">Ejecutar<br>Orden</ion-text>\r\n               </ion-button>\r\n            </ion-col>\r\n        </ion-row>    \r\n        </section>\r\n\r\n\r\n\r\n    \r\n    <section *ngFor=\"let ordenafraccionar of respuestaobtenerordenesdefraccionamientopendientesynobloqueados\">\r\n    <ion-row *ngIf=\"ordenafraccionar.fraccionado=='no'\" class=\"ion-align-items-center\" >\r\n      <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n            <ion-text color=\"danger\" >{{ordenafraccionar.referencia}}</ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n          <ion-text *ngIf=\"ordenafraccionar.id_inutilizado>0&&ordenafraccionar.id_inutilizado<10\" color=\"danger\" style=\"color:danger\">0000000{{ordenafraccionar.id_inutilizado}}</ion-text>\r\n          <ion-text *ngIf=\"ordenafraccionar.id_inutilizado>10&&ordenafraccionar.id_inutilizado<100\" color=\"danger\" style=\"color:danger\">000000{{ordenafraccionar.id_inutilizado}}</ion-text>\r\n          <ion-text *ngIf=\"ordenafraccionar.id_inutilizado>100&&ordenafraccionar.id_inutilizado<1000\" color=\"danger\" style=\"color:danger\">00000{{ordenafraccionar.id_inutilizado}}</ion-text>\r\n          <ion-text *ngIf=\"ordenafraccionar.id_inutilizado>1000&&ordenafraccionar.id_inutilizado<10000\" color=\"danger\" style=\"color:danger\">0000{{ordenafraccionar.id_inutilizado}}</ion-text>\r\n          <ion-text *ngIf=\"ordenafraccionar.id_inutilizado>10000&&ordenafraccionar.id_inutilizado<100000\" color=\"danger\" style=\"color:danger\">000{{ordenafraccionar.id_inutilizado}}</ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"ion-text-center\">\r\n           <ion-text color=\"danger\" >{{ordenafraccionar.descripcion}}</ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n           <ion-text color=\"danger\" >{{ordenafraccionar.documento}}</ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n           <ion-text color=\"danger\" >{{ordenafraccionar.metrosafraccionar}}</ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n           <ion-text color=\"danger\" >{{ordenafraccionar.observacion}}</ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"1.5\" class=\"ion-text-center\">\r\n           <ion-button (click)=\"ordenar(ordenafraccionar)\" size=\"small\" color=\"danger\">\r\n                <ion-icon style=\"color:white;\" name=\"id-card-outline\"></ion-icon><ion-text style=\"font-size: 8px; color:white;\">Ordenar</ion-text>\r\n           </ion-button>\r\n        </ion-col>\r\n    </ion-row>    \r\n    </section>\r\n    \r\n    \r\n    \r\n    \r\n\r\n  </ion-grid>\r\n\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_fraccionamiento_fraccionamiento_module_ts.js.map