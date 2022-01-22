(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["default-src_app_modalsolicitudfracionamiento_modalsolicitudfracionamiento_page_ts"],{

/***/ 4264:
/*!***********************************************************************************!*\
  !*** ./src/app/modalsolicitudfracionamiento/modalsolicitudfracionamiento.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalsolicitudfracionamientoPage": () => (/* binding */ ModalsolicitudfracionamientoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modalsolicitudfracionamiento_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modalsolicitudfracionamiento.page.html */ 640);
/* harmony import */ var _modalsolicitudfracionamiento_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalsolicitudfracionamiento.page.scss */ 164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalpermisos.service */ 46);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);









let ModalsolicitudfracionamientoPage = class ModalsolicitudfracionamientoPage {
    constructor(loadingController, datepipe, modalController, navParams, json, globalpermisos) {
        this.loadingController = loadingController;
        this.datepipe = datepipe;
        this.modalController = modalController;
        this.json = json;
        this.globalpermisos = globalpermisos;
        this.activarbotonaceptar = 'no';
        this.yaapretoaceptar = 'no';
        this.traidopormodalparams = navParams.get('dataparaelmodal');
        console.log('recibido por modalparams', this.traidopormodalparams);
    }
    ngOnInit() {
    }
    ONCHANGEdocumento(event) {
        console.log('Onchange', event.target.value);
        this.documento = event.target.value;
    }
    ONCHANGEmetrosafraccionar(event) {
        console.log('Onchange', event.target.value);
        this.metrosafraccionar = event.target.value;
    }
    ONCHANGEobservacion(event) {
        console.log('Onchange', event.target.value);
        this.observacion = event.target.value;
    }
    ONCHANGEverificarcampos() {
        if (this.documento != null && this.metrosafraccionar != null && this.documento != undefined && this.metrosafraccionar != undefined && this.documento != '' && this.metrosafraccionar != '') {
            this.activarbotonaceptar = 'si';
        }
        else {
            this.activarbotonaceptar = 'no';
        }
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    dismissystep1() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': 'step1'
        });
    }
    aceptar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.yaapretoaceptar = 'si';
        });
    }
    noconfirmar() {
        this.activarbotonaceptar = 'si';
        this.yaapretoaceptar = 'no';
    }
    confirmar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const exitoso = yield this.loadingController.create({
                message: 'Solicitud de Fraccionamiento ordenada exitosamente.', spinner: 'bubbles', duration: 2000,
            });
            this.fecha_orden = new Date();
            let fecha_orden_arreglada = this.datepipe.transform(this.fecha_orden, 'yyyy-MM-dd');
            let hora_orden_arreglada = this.datepipe.transform(this.fecha_orden, 'hh:mm');
            this.user_nombre = this.globalpermisos.nombre;
            this.user_id = this.globalpermisos.id_usuario;
            this.bodega = this.globalpermisos.bodega;
            var datasolicitudfraccionamiento = {
                nombre_solicitud: 'solicitudfraccionamiento',
                documento: this.documento,
                metrosafraccionar: this.metrosafraccionar,
                observacion: this.observacion,
                nombre_solicitador: this.user_nombre,
                user_id_solicitador: this.user_id,
                id_material: this.traidopormodalparams.id,
                bodega: this.bodega,
                carreteorrollo: this.traidopormodalparams.carreteorrollo,
                descripcion: this.traidopormodalparams.descripcion,
                fecha_ingreso_material: this.traidopormodalparams.fecha_autogenerada,
                fecha_orden: fecha_orden_arreglada,
                metrosencarrete: this.traidopormodalparams.metrosencarrete,
                numerodenotadeentrada: this.traidopormodalparams.numerodenotadeentrada,
                producto: this.traidopormodalparams.producto,
                referencia: this.traidopormodalparams.referencia,
                hora_orden: hora_orden_arreglada
            };
            this.json.variasfunciones(datasolicitudfraccionamiento).subscribe((res) => {
                if (res.id > 0) {
                    console.log('res de datasolicitudfraccionamiento', res);
                    exitoso.present();
                    this.modalController.dismiss({
                        'dismissed': 'step1'
                    });
                }
            });
        });
    }
};
ModalsolicitudfracionamientoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService },
    { type: _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__.GlobalpermisosService }
];
ModalsolicitudfracionamientoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-modalsolicitudfracionamiento',
        template: _raw_loader_modalsolicitudfracionamiento_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modalsolicitudfracionamiento_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalsolicitudfracionamientoPage);



/***/ }),

/***/ 164:
/*!*************************************************************************************!*\
  !*** ./src/app/modalsolicitudfracionamiento/modalsolicitudfracionamiento.page.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbHNvbGljaXR1ZGZyYWNpb25hbWllbnRvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 640:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalsolicitudfracionamiento/modalsolicitudfracionamiento.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Solicitar Fraccionamiento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-text>Verifique la información y agrege una observación.</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col style=\"text-align: center;\" size=\"12\">\n                <ion-row style=\"border-top: 1px solid #151515 !important;\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text style=\"font-size:small; color:#303030\">Referencia</ion-text>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text style=\"font-size:small; color:#303030\">Codigo</ion-text>\n                  </ion-col>\n                  <ion-col size=\"6\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text style=\"font-size:small; color:#303030\">Nombre</ion-text>\n                  </ion-col>     \n                </ion-row>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col style=\"text-align: center;\" size=\"12\">\n          <ion-list class=\"ion-align-items-center\">\n              <!-- <ion-item > -->\n                <ion-row style=\"border-bottom: 1px solid #151515 !important;\"  class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text color=\"danger\" style=\"color:danger\">{{traidopormodalparams.referencia}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text *ngIf=\"traidopormodalparams.id>0&&traidopormodalparams.id<10\" color=\"danger\" style=\"color:danger\">0000000{{traidopormodalparams.id}}</ion-text>\n                    <ion-text *ngIf=\"traidopormodalparams.id>10&&traidopormodalparams.id<100\" color=\"danger\" style=\"color:danger\">000000{{traidopormodalparams.id}}</ion-text>\n                    <ion-text *ngIf=\"traidopormodalparams.id>100&&traidopormodalparams.id<1000\" color=\"danger\" style=\"color:danger\">00000{{traidopormodalparams.id}}</ion-text>\n                    <ion-text *ngIf=\"traidopormodalparams.id>1000&&traidopormodalparams.id<10000\" color=\"danger\" style=\"color:danger\">0000{{traidopormodalparams.id}}</ion-text>\n                    <ion-text *ngIf=\"traidopormodalparams.id>10000&&traidopormodalparams.id<100000\" color=\"danger\" style=\"color:danger\">000{{traidopormodalparams.id}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"6\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text color=\"danger\" style=\"color:danger\">{{traidopormodalparams.descripcion}}</ion-text>\n                  </ion-col>\n\n                  \n                </ion-row>\n              <!-- </ion-item> -->\n            </ion-list>\n    </ion-col>\n</ion-row>\n\n<hr>\n\n<ion-row class=\"ion-align-items-center\">\n  <ion-col style=\"text-align: center;\" size=\"12\">\n              <ion-row class=\"ion-align-items-center ion-no-padding\" no-padding>\n                <ion-col size=\"4\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-text style=\"font-size:small; color:#303030\">Documento de<br>referencia *</ion-text>\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-text style=\"font-size:small; color:#303030\">metros de <br>Fraccionamiento *</ion-text>\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-text style=\"font-size:small; color:#303030\">Observaciones*</ion-text>\n                </ion-col> \n              </ion-row>\n  </ion-col>\n</ion-row>\n\n<ion-row class=\"ion-align-items-center\">\n  <ion-col style=\"text-align: center;\" size=\"12\">\n        <ion-list class=\"ion-align-items-center\">\n            <!-- <ion-item > -->\n              <ion-row (ionChange)=\"ONCHANGEverificarcampos()\"  class=\"ion-align-items-center ion-no-padding\" no-padding>\n                <ion-col size=\"4\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-item>\n                    <ion-label position=\"floating\">Documento referecia:</ion-label>\n                    <ion-input [disabled]=\"yaapretoaceptar=='si'\" (ionChange)=\"ONCHANGEdocumento($event)\" style=\"border-radius: 5px; background-color:#5c2d2d35;\"></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-item>\n                    <ion-label position=\"floating\">Metros:</ion-label>\n                    <ion-input [disabled]=\"yaapretoaceptar=='si'\" type=\"number\" (ionChange)=\"ONCHANGEmetrosafraccionar($event)\" style=\"border-radius: 5px; background-color:#5c2d2d35;\"></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-item>\n                    <ion-label position=\"floating\">Observaciones:</ion-label>\n                    <ion-input [disabled]=\"yaapretoaceptar=='si'\" (ionChange)=\"ONCHANGEobservacion($event)\" style=\"border-radius: 5px; background-color:#5c2d2d35;\"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            <!-- </ion-item> -->\n          </ion-list>\n  </ion-col>\n</ion-row>\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-text>¿Confirma que desea ordenar este fraccionamiento?</ion-text>\n      <ion-card *ngIf=\"this.activarbotonaceptar=='si'&&this.yaapretoaceptar=='si'\">\n        <ion-text>Verifique la información antes de confirmar...</ion-text><br>\n        <ion-button (click)=\"confirmar()\" color=\"danger\" ><ion-icon style=\" color:green;\" name=\"checkmark-done-outline\"></ion-icon><ion-text style=\"font-weight: 500;\">Confirmar</ion-text>\n        </ion-button>\n        <ion-button (click)=\"noconfirmar()\" color=\"danger\" ><ion-icon style=\" color:#303030;\" name=\"close-circle-outline\"></ion-icon><ion-text style=\"font-weight: 500;\">Modificar</ion-text>\n        </ion-button>\n        <ion-button (click)=\"dismiss()\" color=\"danger\" ><ion-icon style=\" color:#303030;\" name=\"close-circle-outline\"></ion-icon><ion-text style=\"font-weight: 500;\">Cancelar</ion-text>\n        </ion-button>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"this.yaapretoaceptar=='no'\" class=\"ion-align-items-center\">\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      \n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n\n      <ion-button disabled *ngIf=\"this.activarbotonaceptar=='no'\" color=\"danger\" ><ion-icon style=\" color:green;\" name=\"checkmark-done-outline\"></ion-icon><ion-text style=\"font-weight: 500;\">Aceptar</ion-text>\n      </ion-button>\n      <ion-button *ngIf=\"this.activarbotonaceptar=='si'\" (click)=\"aceptar()\" color=\"danger\" ><ion-icon style=\" color:green;\" name=\"checkmark-done-outline\"></ion-icon><ion-text style=\"font-weight: 500;\">Aceptar</ion-text>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-button (click)=\"dismiss()\" color=\"danger\" ><ion-icon style=\" color:#303030;\" name=\"close-circle-outline\"></ion-icon><ion-text style=\"font-weight: 500;\">Cancelar</ion-text>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      \n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_modalsolicitudfracionamiento_modalsolicitudfracionamiento_page_ts.js.map