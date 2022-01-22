(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["default-src_app_modalbloqordenfracionamiento_modalbloqordenfracionamiento_page_ts"],{

/***/ 348:
/*!***********************************************************************************!*\
  !*** ./src/app/modalbloqordenfracionamiento/modalbloqordenfracionamiento.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalbloqordenfracionamientoPage": () => (/* binding */ ModalbloqordenfracionamientoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modalbloqordenfracionamiento_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modalbloqordenfracionamiento.page.html */ 1231);
/* harmony import */ var _modalbloqordenfracionamiento_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalbloqordenfracionamiento.page.scss */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalpermisos.service */ 46);








let ModalbloqordenfracionamientoPage = class ModalbloqordenfracionamientoPage {
    constructor(globalpermisos, modalController, navParams, json) {
        this.globalpermisos = globalpermisos;
        this.modalController = modalController;
        this.json = json;
        this.apretobotonaceptar = 'no';
        this.apretobotonaceptar = 'no';
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
    ONCHANGEobservacion(event) {
        this.observacion = event.target.value;
    }
    aceptar() {
        this.apretobotonaceptar = 'si';
    }
    noconfirmar() {
        this.apretobotonaceptar = 'no';
    }
    confirmar() {
        this.user_nombre_bloqueador = this.globalpermisos.nombre;
        var databloquearordenfraccionamiento = {
            nombre_solicitud: 'bloquearordenfraccionamiento',
            id_inutilizado: this.traidopormodalparams.id_inutilizado,
            bloqueo_observacion: this.observacion,
            user_nombre_bloqueador: this.user_nombre_bloqueador
        };
        this.json.variasfunciones(databloquearordenfraccionamiento).subscribe((res) => {
            if (res > 0) {
                console.log('res de borrar', res);
                this.modalController.dismiss({
                    'dismissed': true
                });
            }
        });
    }
};
ModalbloqordenfracionamientoPage.ctorParameters = () => [
    { type: _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__.GlobalpermisosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService }
];
ModalbloqordenfracionamientoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-modalbloqordenfracionamiento',
        template: _raw_loader_modalbloqordenfracionamiento_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modalbloqordenfracionamiento_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalbloqordenfracionamientoPage);



/***/ }),

/***/ 8163:
/*!*************************************************************************************!*\
  !*** ./src/app/modalbloqordenfracionamiento/modalbloqordenfracionamiento.page.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbGJsb3FvcmRlbmZyYWNpb25hbWllbnRvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1231:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalbloqordenfracionamiento/modalbloqordenfracionamiento.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Suspención de Ordenes de Fraccionamiento.</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-text>Verifique la información y agrege una observación.</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col style=\"text-align: center;\" size=\"12\">\n                <ion-row style=\"border-top: 1px solid #151515 !important;\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text style=\"font-size:small; color:#303030\">Referencia</ion-text>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text style=\"font-size:small; color:#303030\">Código</ion-text>\n                  </ion-col>\n                  <ion-col size=\"6\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text style=\"font-size:small; color:#303030\">Nombre</ion-text>\n                  </ion-col>     \n                </ion-row>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col style=\"text-align: center;\" size=\"12\">\n          <ion-list class=\"ion-align-items-center\">\n              <!-- <ion-item > -->\n                <ion-row  class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text color=\"danger\" style=\"color:danger\">{{traidopormodalparams.referencia}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text *ngIf=\"traidopormodalparams.id_inutilizado>0&&traidopormodalparams.id_inutilizado<10\" color=\"danger\" style=\"color:danger\">0000000{{traidopormodalparams.id_inutilizado}}</ion-text>\n                    <ion-text *ngIf=\"traidopormodalparams.id_inutilizado>10&&traidopormodalparams.id_inutilizado<100\" color=\"danger\" style=\"color:danger\">000000{{traidopormodalparams.id_inutilizado}}</ion-text>\n                    <ion-text *ngIf=\"traidopormodalparams.id_inutilizado>100&&traidopormodalparams.id_inutilizado<1000\" color=\"danger\" style=\"color:danger\">00000{{traidopormodalparams.id_inutilizado}}</ion-text>\n                    <ion-text *ngIf=\"traidopormodalparams.id_inutilizado>1000&&traidopormodalparams.id_inutilizado<10000\" color=\"danger\" style=\"color:danger\">0000{{traidopormodalparams.id_inutilizado}}</ion-text>\n                    <ion-text *ngIf=\"traidopormodalparams.id_inutilizado>10000&&traidopormodalparams.id_inutilizado<100000\" color=\"danger\" style=\"color:danger\">000{{traidopormodalparams.id_inutilizado}}</ion-text>\n\n                  </ion-col>\n                  <ion-col size=\"6\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text color=\"danger\" style=\"color:danger\">{{traidopormodalparams.descripcion}}</ion-text>\n                  </ion-col>\n\n                  \n                </ion-row>\n              <!-- </ion-item> -->\n            </ion-list>\n    </ion-col>\n</ion-row>\n\n<hr>\n\n<ion-row class=\"ion-align-items-center\">\n  <ion-col style=\"text-align: center;\" size=\"12\">\n              <ion-row style=\"border-top: 1px solid #151515 !important;\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                <ion-col size=\"4\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-text style=\"font-size:small; color:#303030\">Documento de<br>referencia</ion-text>\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-text style=\"font-size:small; color:#303030\">metros de <br>fraccionamiento</ion-text>\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-text style=\"font-size:small; color:#303030\">Observaciones</ion-text>\n                </ion-col>\n              </ion-row>\n  </ion-col>\n</ion-row>\n\n<ion-row class=\"ion-align-items-center\">\n  <ion-col style=\"text-align: center;\" size=\"12\">\n        <ion-list class=\"ion-align-items-center\">\n            <!-- <ion-item > -->\n              <ion-row  class=\"ion-align-items-center ion-no-padding\" no-padding>\n                <ion-col size=\"4\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-text color=\"danger\" style=\"color:danger\">{{traidopormodalparams.documento}}</ion-text>\n\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-text color=\"danger\" style=\"color:danger\">{{traidopormodalparams.metrosencarrete}}</ion-text>\n                </ion-col>\n                <ion-col size=\"4\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-card>\n                  <ion-textarea [disabled]=\"apretobotonaceptar=='si'\" (ionChange)=\"ONCHANGEobservacion($event)\" style=\"border-radius: 5px; background-color:#c4c4c4\" color=\"danger\"></ion-textarea>\n                  </ion-card>\n                </ion-col>\n\n                \n              </ion-row>\n            <!-- </ion-item> -->\n          </ion-list>\n  </ion-col>\n</ion-row>\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-text *ngIf=\"this.apretobotonaceptar=='no'\">Ingrese los campos solicitados y precione aceptar para continuar.</ion-text>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"this.apretobotonaceptar=='si'\" class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-card>\n        <ion-text>Verifique la información ingresada y precione confirmar.</ion-text><br>\n          <ion-button (click)=\"confirmar()\"><ion-icon style=\"color:green\" name=\"checkmark-done-outline\"></ion-icon>Confirmar</ion-button>\n          <ion-button (click)=\"noconfirmar()\"><ion-icon style=\"color:orange\" name=\"create-outline\"></ion-icon>Modificar</ion-button>\n          <ion-button (click)=\"dismiss()\"><ion-icon style=\"color:black\" name=\"close-outline\"></ion-icon>Cancelar</ion-button>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n\n  \n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      \n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-button *ngIf=\"this.apretobotonaceptar=='no'\" (click)=\"aceptar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Aceptar</ion-text>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-button *ngIf=\"this.apretobotonaceptar=='no'\" (click)=\"dismiss()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Cancelar</ion-text>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      \n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_modalbloqordenfracionamiento_modalbloqordenfracionamiento_page_ts.js.map