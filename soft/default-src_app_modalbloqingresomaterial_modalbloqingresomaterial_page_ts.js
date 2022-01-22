(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["default-src_app_modalbloqingresomaterial_modalbloqingresomaterial_page_ts"],{

/***/ 1142:
/*!***************************************************************************!*\
  !*** ./src/app/modalbloqingresomaterial/modalbloqingresomaterial.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalbloqingresomaterialPage": () => (/* binding */ ModalbloqingresomaterialPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modalbloqingresomaterial_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modalbloqingresomaterial.page.html */ 3469);
/* harmony import */ var _modalbloqingresomaterial_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalbloqingresomaterial.page.scss */ 4403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);







let ModalbloqingresomaterialPage = class ModalbloqingresomaterialPage {
    constructor(modalController, navParams, json) {
        this.modalController = modalController;
        this.json = json;
        this.apretoelbotonaceptar = 'no';
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
    noconfirmar() {
        this.apretoelbotonaceptar = 'no';
    }
    confirmar() {
        var databloquearingresodematerial = {
            nombre_solicitud: 'bloquearingresodematerial',
            id: this.traidopormodalparams.id,
            observacion: this.observacion
        };
        this.json.variasfunciones(databloquearingresodematerial).subscribe((res) => {
            if (res > 0) {
                console.log('res de borrar', res);
                this.modalController.dismiss({
                    'dismissed': true
                });
            }
        });
    }
    aceptar() {
        this.apretoelbotonaceptar = 'si';
    }
};
ModalbloqingresomaterialPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService }
];
ModalbloqingresomaterialPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-modalbloqingresomaterial',
        template: _raw_loader_modalbloqingresomaterial_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modalbloqingresomaterial_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalbloqingresomaterialPage);



/***/ }),

/***/ 4403:
/*!*****************************************************************************!*\
  !*** ./src/app/modalbloqingresomaterial/modalbloqingresomaterial.page.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbGJsb3FpbmdyZXNvbWF0ZXJpYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 3469:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalbloqingresomaterial/modalbloqingresomaterial.page.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Suspención de materiales ingresados.</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-text>Verifique la información y agrege una observación.</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col style=\"text-align: center;\" size=\"12\">\n                <ion-row style=\" border-top: 1px solid #151515 !important;\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text style=\"font-size:small; color:#303030\">nº Carrete</ion-text>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text style=\"font-size:small; color:#303030\">Referencia</ion-text>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text style=\"font-size:small; color:#303030\">Codigo</ion-text>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text style=\"font-size:small; color:#303030\">Nombre</ion-text>\n                  </ion-col>     \n                </ion-row>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col style=\"text-align: center;\" size=\"12\">\n          <ion-list class=\"ion-align-items-center\">\n              <!-- <ion-item > -->\n                <ion-row style=\"border-bottom: 1px solid #151515 !important;\"  class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text *ngIf=\"traidopormodalparams.id>0&&traidopormodalparams.id<10\" color=\"danger\" style=\"color:danger\">0000000{{traidopormodalparams.id}}</ion-text>\n                    <ion-text *ngIf=\"traidopormodalparams.id>10&&traidopormodalparams.id<100\" color=\"danger\" style=\"color:danger\">000000{{traidopormodalparams.id}}</ion-text>\n                    <ion-text *ngIf=\"traidopormodalparams.id>100&&traidopormodalparams.id<1000\" color=\"danger\" style=\"color:danger\">00000{{traidopormodalparams.id}}</ion-text>\n                    <ion-text *ngIf=\"traidopormodalparams.id>1000&&traidopormodalparams.id<10000\" color=\"danger\" style=\"color:danger\">0000{{traidopormodalparams.id}}</ion-text>\n                    <ion-text *ngIf=\"traidopormodalparams.id>10000&&traidopormodalparams.id<100000\" color=\"danger\" style=\"color:danger\">000{{traidopormodalparams.id}}</ion-text>\n\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text color=\"danger\" style=\"color:danger\">{{traidopormodalparams.referencia}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text color=\"danger\" style=\"color:danger\">{{traidopormodalparams.producto}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text color=\"danger\" style=\"color:danger\">{{traidopormodalparams.descripcion}}</ion-text>\n                  </ion-col>\n\n                  \n                </ion-row>\n              <!-- </ion-item> -->\n            </ion-list>\n    </ion-col>\n</ion-row>\n\n<hr>\n\n<ion-row class=\"ion-align-items-center\">\n  <ion-col style=\"text-align: center;\" size=\"12\">\n              <ion-row style=\"border-top: 1px solid #151515 !important;\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-text style=\"font-size:small; color:#303030\">Documento de<br>referencia</ion-text>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-text style=\"font-size:small; color:#303030\">metros en <br>carrete/tramo</ion-text>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-text style=\"font-size:small; color:#303030\">carrete/tramo</ion-text>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-text style=\"font-size:small; color:#303030\">Observaciones</ion-text>\n                </ion-col>     \n              </ion-row>\n  </ion-col>\n</ion-row>\n\n<ion-row class=\"ion-align-items-center\">\n  <ion-col style=\"text-align: center;\" size=\"12\">\n        <ion-list class=\"ion-align-items-center\">\n              <ion-row style=\" border-bottom: 1px solid #151515 !important;\"  class=\"ion-align-items-center ion-no-padding\" no-padding>\n                <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-text color=\"danger\" style=\"color:danger\">{{traidopormodalparams.numerodenotadeentrada}}</ion-text>\n\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-text color=\"danger\" style=\"color:danger\">{{traidopormodalparams.metrosencarrete}}</ion-text>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-text color=\"danger\" style=\"color:danger\">{{traidopormodalparams.carreteorrollo}}</ion-text>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-card>\n                  <ion-textarea (keyup.enter)=\"aceptar()\" [disabled]=\"this.apretoelbotonaceptar=='si'\" (ionChange)=\"ONCHANGEobservacion($event)\" style=\"border-radius: 5px; background-color:#d4d4d4\" color=\"danger\"></ion-textarea>\n                  </ion-card>\n                </ion-col>\n              </ion-row>\n          </ion-list>\n  </ion-col>\n</ion-row>\n\n<ion-row *ngIf=\"this.apretoelbotonaceptar=='si'\" class=\"ion-align-items-center\">\n  <ion-col size=\"12\" class=\"ion-text-center\">\n    <ion-text>Confirme la información ingresada:</ion-text><br>\n    <ion-button (click)=\"confirmar()\"><ion-icon style=\"color:green\" name=\"checkmark-done-outline\"></ion-icon>Confirmar</ion-button>\n    <ion-button (click)=\"noconfirmar()\"><ion-icon style=\"color:orange\" name=\"create-outline\"></ion-icon>Modificar</ion-button>\n    <ion-button (click)=\"dismiss()\"><ion-icon style=\"color:black\" name=\"close-outline\"></ion-icon>Cancelar</ion-button>\n\n  </ion-col>\n</ion-row>\n\n\n  <ion-row *ngIf=\"this.apretoelbotonaceptar=='no'\" class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-text>Ingrese la información solicitada y precione aceptar para continuar.</ion-text>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"this.apretoelbotonaceptar=='no'\" class=\"ion-align-items-center\">\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      \n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-button  (click)=\"aceptar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Aceptar</ion-text>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-button  (click)=\"dismiss()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Cancelar</ion-text>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      \n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_modalbloqingresomaterial_modalbloqingresomaterial_page_ts.js.map