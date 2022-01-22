(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_de-carrete-a-otro_de-carrete-a-otro_module_ts"],{

/***/ 1469:
/*!***********************************************************************!*\
  !*** ./src/app/de-carrete-a-otro/de-carrete-a-otro-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeCarreteAOtroPageRoutingModule": () => (/* binding */ DeCarreteAOtroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _de_carrete_a_otro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./de-carrete-a-otro.page */ 8642);




const routes = [
    {
        path: '',
        component: _de_carrete_a_otro_page__WEBPACK_IMPORTED_MODULE_0__.DeCarreteAOtroPage
    }
];
let DeCarreteAOtroPageRoutingModule = class DeCarreteAOtroPageRoutingModule {
};
DeCarreteAOtroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DeCarreteAOtroPageRoutingModule);



/***/ }),

/***/ 3897:
/*!***************************************************************!*\
  !*** ./src/app/de-carrete-a-otro/de-carrete-a-otro.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeCarreteAOtroPageModule": () => (/* binding */ DeCarreteAOtroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _de_carrete_a_otro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./de-carrete-a-otro-routing.module */ 1469);
/* harmony import */ var _de_carrete_a_otro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./de-carrete-a-otro.page */ 8642);







let DeCarreteAOtroPageModule = class DeCarreteAOtroPageModule {
};
DeCarreteAOtroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _de_carrete_a_otro_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeCarreteAOtroPageRoutingModule
        ],
        declarations: [_de_carrete_a_otro_page__WEBPACK_IMPORTED_MODULE_1__.DeCarreteAOtroPage]
    })
], DeCarreteAOtroPageModule);



/***/ }),

/***/ 8642:
/*!*************************************************************!*\
  !*** ./src/app/de-carrete-a-otro/de-carrete-a-otro.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeCarreteAOtroPage": () => (/* binding */ DeCarreteAOtroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_de_carrete_a_otro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./de-carrete-a-otro.page.html */ 2506);
/* harmony import */ var _de_carrete_a_otro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./de-carrete-a-otro.page.scss */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalpermisos.service */ 46);
/* harmony import */ var _modaldecarreteaotro_modaldecarreteaotro_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modaldecarreteaotro/modaldecarreteaotro.page */ 2148);















let DeCarreteAOtroPage = class DeCarreteAOtroPage {
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
            if (this.globalpermisos.mispermisosglobalesenservice['permisonumero11'] == 'si') {
                this.puedenavegaraqui = 'si';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
            else if (this.globalpermisos.mispermisosglobalesenservice['permisonumero11'] != 'si') {
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
    ONCHANGEcodigo(event) {
        this.dataempieza = event.target.value;
    }
    ONCHANGEcarreteochipa(event) {
        this.numero_fraccionado = event.target.value;
    }
    continuar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const verifiqueconexion = yield this.loadingController.create({
                message: 'Porfavor verifique su conexion..', spinner: 'bubbles', duration: 1400,
            });
            const espereporfavor = yield this.loadingController.create({
                message: 'Verificando, espere porfavor...', spinner: 'bubbles', duration: 25000,
            });
            const exitoso = yield this.loadingController.create({
                message: 'Verificación exitosa accediendo.', spinner: 'bubbles', duration: 1200,
            });
            const error = yield this.loadingController.create({
                message: 'Verifique su información porfavor...', spinner: 'bubbles', duration: 1700,
            });
            espereporfavor.present();
            var data = {
                codigo_qr_acceso: this.dataempieza
            };
            this.json.empieza(data).subscribe((res) => {
                console.log('respuesta de Json empieza:', res);
                this.quieroaccederporfavordigamelarespuestadelaconsulta = res;
                if (res.length == '0') {
                    console.log('El usuario no existe');
                    espereporfavor.dismiss();
                    error.present();
                }
                if (res.length > 0 && res[0].activo > 0) {
                    console.log('el usuario fue registrado previamente');
                    this.step = '2';
                    espereporfavor.dismiss();
                    // exitoso.present();
                }
                else {
                    espereporfavor.dismiss();
                    verifiqueconexion.present();
                }
            });
        });
    }
    abrirmodalcarrete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const verifiqueconexion = yield this.loadingController.create({
                message: 'Porfavor verifique su conexion..', spinner: 'bubbles', duration: 1400,
            });
            const espereporfavor = yield this.loadingController.create({
                message: 'Verificando, espere porfavor...', spinner: 'bubbles', duration: 25000,
            });
            const exitoso = yield this.loadingController.create({
                message: 'Verificación exitosa accediendo.', spinner: 'bubbles', duration: 1200,
            });
            const error = yield this.loadingController.create({
                message: 'Verifique su información...', spinner: 'bubbles', duration: 1700,
            });
            espereporfavor.present();
            var datadecarreteachipaconsultarcodigo = {
                nombre_solicitud: 'decarreteachipaconsultarcodigo',
                numero_fraccionado: this.numero_fraccionado,
            };
            this.json.variasfunciones(datadecarreteachipaconsultarcodigo).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log('respuesta a la solicitud variasfunciones,  decarreteachipaconsultarcodigo', res);
                this.respuestadecarreteachipaconsultarcodigo = res[0];
                if (!this.respuestadecarreteachipaconsultarcodigo) {
                    espereporfavor.dismiss();
                    error.present();
                }
                if (res[0].id_inutilizado > 0) {
                    espereporfavor.dismiss();
                    exitoso.present();
                    const modal = yield this.modalController.create({
                        component: _modaldecarreteaotro_modaldecarreteaotro_page__WEBPACK_IMPORTED_MODULE_5__.ModaldecarreteaotroPage,
                        componentProps: {
                            cssClass: 'my-custom-class',
                            'dataparaelmodal': this.respuestadecarreteachipaconsultarcodigo,
                        }
                    });
                    modal.onDidDismiss().then((data) => {
                        console.log('data', data['data']);
                        console.log('data dismissed', data['data'].dismissed);
                        if (data['data'].dismissed == 'volverastep1') {
                            // this.consultausuarios()
                            this.step == '1';
                        }
                    });
                    console.log('enviando estos datos al modal qr', this.respuestadecarreteachipaconsultarcodigo);
                    return yield modal.present();
                }
                else if (!this.respuestadecarreteachipaconsultarcodigo) {
                    espereporfavor.dismiss();
                    error.present();
                }
                else {
                    espereporfavor.dismiss();
                    error.present();
                    console.log('verifique');
                }
            }));
        });
    }
};
DeCarreteAOtroPage.ctorParameters = () => [
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
DeCarreteAOtroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-de-carrete-a-otro',
        template: _raw_loader_de_carrete_a_otro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_de_carrete_a_otro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DeCarreteAOtroPage);



/***/ }),

/***/ 8784:
/*!***************************************************************!*\
  !*** ./src/app/de-carrete-a-otro/de-carrete-a-otro.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZS1jYXJyZXRlLWEtb3Ryby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 2506:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/de-carrete-a-otro/de-carrete-a-otro.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Cambio de tipo de Almacenaje</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button href=\"https://cables.cameleco.com/ayuda-de-carrete-a-otro/\" target=\"_blank\" style=\"text-transform: none; margin-right: 15px;\">Ayuda \r\n          <ion-icon  name=\"information-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n  </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid *ngIf=\"this.seccionactiva=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text  (click)=\"reingresar()\" color=\"danger\" >Sección expirada debe reingresar.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <ion-button  (click)=\"reingresar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">REINGRESAR</ion-text>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >No tiene permisos para navegar en esta sección.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='si'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text *ngIf=\"this.escanearonview!='no'\" color=\"danger\" >Bienvenido escanee / Digite el codigo.</ion-text>\r\n        <ion-text *ngIf=\"this.escanearonview=='no'\" color=\"danger\" >Carrete a cambiar a Chipa</ion-text>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row style=\"justify-content: center;align-items: center;\" *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n      <p>Código de operario:</p>\r\n\r\n      <ion-card class=\"ion-text-center\">\r\n        <ion-item >\r\n          <ion-label  position=\"floating\">Ingrese Codigo:</ion-label>\r\n          <ion-input (keyup.enter)=\"continuar()\" type=\"tel-local\" (ionChange)=\"ONCHANGEcodigo($event)\" color=\"danger\" ></ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n        <ion-button (click)=\"continuar()\" >\r\n          <ion-icon name=\"qr-code-outline\"></ion-icon>\r\n        </ion-button>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row style=\"justify-content: center;align-items: center;\" *ngIf=\"this.step=='2'\" class=\"ion-align-items-center\">\r\n        <ion-card color=\"danger\" >\r\n          <ion-item >\r\n            <ion-label position=\"floating\">Codigo de Carrete/Chipa:</ion-label>\r\n            <ion-input (keyup.enter)=\"abrirmodalcarrete()\" type=\"tel-local\" (ionChange)=\"ONCHANGEcarreteochipa($event)\" color=\"danger\" ></ion-input>\r\n          </ion-item>\r\n        </ion-card>\r\n          <ion-button (click)=\"abrirmodalcarrete()\" >\r\n            <ion-icon name=\"qr-code-outline\"></ion-icon>\r\n          </ion-button>\r\n    </ion-row>\r\n    \r\n\r\n<!-- \r\n    <ion-row style=\"justify-content: center;align-items: center;\" *ngIf=\"this.step=='3'\" class=\"ion-align-items-center\">\r\n\r\n      <ion-card class=\"ion-text-center\">\r\n        <ion-item >\r\n          <ion-label  position=\"floating\">Codigo:</ion-label>\r\n          <ion-input type=\"tel-local\" (ionChange)=\"ONCHANGEcodigo($event)\" color=\"danger\" ></ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n        <ion-button (click)=\"continuar()\" >\r\n          <ion-icon name=\"qr-code-outline\"></ion-icon>\r\n        </ion-button>\r\n    </ion-row> -->\r\n\r\n\r\n  </ion-grid>\r\n\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_de-carrete-a-otro_de-carrete-a-otro_module_ts.js.map