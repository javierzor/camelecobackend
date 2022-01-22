(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["default-src_app_modaldecarreteaotro_modaldecarreteaotro_page_ts"],{

/***/ 2148:
/*!*****************************************************************!*\
  !*** ./src/app/modaldecarreteaotro/modaldecarreteaotro.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModaldecarreteaotroPage": () => (/* binding */ ModaldecarreteaotroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modaldecarreteaotro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modaldecarreteaotro.page.html */ 7291);
/* harmony import */ var _modaldecarreteaotro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modaldecarreteaotro.page.scss */ 1430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalpermisos.service */ 46);









let ModaldecarreteaotroPage = class ModaldecarreteaotroPage {
    constructor(loadingController, globalpermisos, modalController, navParams, json) {
        this.loadingController = loadingController;
        this.globalpermisos = globalpermisos;
        this.modalController = modalController;
        this.json = json;
        this.step = '1';
        this.traidopormodalparams = navParams.get('dataparaelmodal');
        console.log('recibido por modalparams', this.traidopormodalparams);
    }
    ngOnInit() {
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    funciondismissyvolverastep1() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': 'volverastep1'
        });
    }
    CHANGEcodigosupervisor(event) {
        console.log('cgange', event.target.value);
        this.codigo_qr_acceso = event.target.value;
    }
    verificarsupervisor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const verificando = yield this.loadingController.create({
                message: 'Verificando, espere...', spinner: 'bubbles', duration: 15000,
            });
            const fallo = yield this.loadingController.create({
                message: 'Ingrese el codigo del supervisor!', spinner: 'bubbles', duration: 1200,
            });
            const informacionfalsa = yield this.loadingController.create({
                message: 'Incorrecto porfavor verifique!', spinner: 'bubbles', duration: 1200,
            });
            verificando.present();
            var data = {
                codigo_qr_acceso: this.codigo_qr_acceso
            };
            this.json.empieza(data).subscribe((res) => {
                this.quieroaccederporfavordigamelarespuestadelaconsultadelsupervisor = res[0];
                console.log('respuesta de Json quieroaccederporfavordigamelarespuestadelaconsultadelsupervisor empieza:', this.quieroaccederporfavordigamelarespuestadelaconsultadelsupervisor);
                if (this.quieroaccederporfavordigamelarespuestadelaconsultadelsupervisor == undefined || this.quieroaccederporfavordigamelarespuestadelaconsultadelsupervisor == null) {
                    verificando.dismiss();
                    informacionfalsa.present();
                }
                if (this.quieroaccederporfavordigamelarespuestadelaconsultadelsupervisor.id_rol == '4') {
                    verificando.dismiss();
                    console.log('paso el supervisor');
                    this.step = '3';
                }
                else {
                    verificando.dismiss();
                    fallo.present();
                }
                //   //consultar permisos de supervisor
                //     var dataconsultarpermisosidroldecarreteaotro = {
                //       nombre_solicitud: 'consultarpermisosidroldecarreteaotro',
                //       id_rol:this.quieroaccederporfavordigamelarespuestadelaconsultadelsupervisor.id_rol,
                //     };
                //     this.json.variasfunciones(dataconsultarpermisosidroldecarreteaotro).subscribe(async (res: any ) =>{
                //       console.log('respuesta a la solicitud variasfunciones,  consultarpermisosidroldecarreteaotro', res);
                //       this.respuestaconsultarpermisosidroldecarreteaotro=res;
                //         //termina la consulta de supervisor
                // });
            });
        });
    }
    autorizar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('autorizando cambio de almacenaje');
            const exitoso = yield this.loadingController.create({
                message: 'Cambio exitoso!.', spinner: 'bubbles', duration: 1500,
            });
            const yafuecambiado = yield this.loadingController.create({
                message: 'Este registro ya ha sido cambiado de carrete a chipa anteriormente!.', spinner: 'bubbles', duration: 2500,
            });
            var dataautorizarcambiodecarrete = {
                nombre_solicitud: 'autorizarcambiodecarrete',
                id_inutilizado: this.traidopormodalparams.id_inutilizado,
                nombre_cambio_almacenaje: this.globalpermisos.nombre,
                carreteorrollo: 'Chipa'
            };
            this.json.variasfunciones(dataautorizarcambiodecarrete).subscribe((res) => {
                console.log('res autorizarcambiodecarrete', res);
                if (res > 0) {
                    exitoso.present();
                    this.funciondismissyvolverastep1();
                }
                else if (res == 0) {
                    yafuecambiado.present();
                    this.funciondismissyvolverastep1();
                }
            });
        });
    }
};
ModaldecarreteaotroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__.GlobalpermisosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService }
];
ModaldecarreteaotroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-modaldecarreteaotro',
        template: _raw_loader_modaldecarreteaotro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modaldecarreteaotro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModaldecarreteaotroPage);



/***/ }),

/***/ 1430:
/*!*******************************************************************!*\
  !*** ./src/app/modaldecarreteaotro/modaldecarreteaotro.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbGRlY2FycmV0ZWFvdHJvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 7291:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modaldecarreteaotro/modaldecarreteaotro.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Cambio de tipo de almacenaje</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-grid>\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-button  (click)=\"dismiss()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Volver</ion-text>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\n    <ion-col size=\"3\" class=\"ion-text-center\">\n      <ion-text color=\"danger\" style=\"font-weight: 500;\">Referencia: </ion-text><br>\n      <ion-text>{{this.traidopormodalparams.referencia}} </ion-text>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      <ion-text color=\"danger\" style=\"font-weight: 500;\">Codigo: </ion-text><br>\n            <ion-text>{{this.traidopormodalparams.numero_fraccionado}} </ion-text>\n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-text color=\"danger\" style=\"font-weight: 500;\">Nombre: </ion-text><br>\n            <ion-text>{{this.traidopormodalparams.descripcion}} </ion-text>\n    </ion-col>\n    <ion-col size=\"3\" class=\"ion-text-center\">\n      <ion-text color=\"danger\" style=\"font-weight: 500;\">Documento de<br>referencia:</ion-text><br>\n      <ion-text>{{this.traidopormodalparams.documento}} </ion-text>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\n    <ion-col size=\"4\" class=\"ion-text-center\">\n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-card>\n          <ion-item>\n              <ion-label position=\"floating\"></ion-label>\n              <ion-input (ionChange)=\"CHANGEcodigosupervisor($event)\" color=\"danger\" >\n              </ion-input>\n          </ion-item>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-button  (click)=\"verificarsupervisor()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Verificar</ion-text>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n    <ion-row *ngIf=\"this.step=='2'\" class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-button  (click)=\"dismiss()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Volver</ion-text>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row style=\"justify-content: center;align-items: center;\" *ngIf=\"this.step=='3'\" class=\"ion-align-items-center\">\n    <ion-col size=\"6\" class=\"ion-text-center\">\n        <ion-card>\n              <ion-card-header>\n                Orden Fraccionamiento\n              </ion-card-header>\n              <ion-card-content>\n                <ion-text>Codigo: {{this.traidopormodalparams.codigo_fraccionado}} </ion-text>\n\n\n                <ion-text>Nombre: {{this.traidopormodalparams.descripcion}} </ion-text>\n    \n          <ion-text>Metros:{{this.traidopormodalparams.metrosafraccionar}} </ion-text>\n          <ion-text>Carrete </ion-text>\n\n              </ion-card-content>\n\n        </ion-card>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-center\">\n        <ion-card>\n            <ion-card-header>\n                Fraccionamiento\n              </ion-card-header>\n              <ion-card-content>\n                <ion-text>Codigo: {{this.traidopormodalparams.codigo_fraccionado}} </ion-text>\n\n\n                <ion-text>Nombre: {{this.traidopormodalparams.descripcion}} </ion-text>\n    \n          <ion-text>Metros:{{this.traidopormodalparams.metrosafraccionar}} </ion-text>\n          <ion-text>Chipa </ion-text>\n\n              </ion-card-content>\n        </ion-card>\n    </ion-col>\n</ion-row>\n\n  <ion-row style=\"justify-content: center;align-items: center;\" *ngIf=\"this.step=='3'\" class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-button  (click)=\"autorizar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\"><ion-icon style=\"color:green;\" name=\"checkmark-done-outline\"></ion-icon>AUTORIZAR</ion-text>\n      </ion-button>\n    </ion-col>\n</ion-row>\n\n</ion-grid>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_modaldecarreteaotro_modaldecarreteaotro_page_ts.js.map