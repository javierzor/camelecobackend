(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["default-src_app_modalnovedadessupervisor_modalnovedadessupervisor_page_ts"],{

/***/ 1418:
/*!***************************************************************************!*\
  !*** ./src/app/modalnovedadessupervisor/modalnovedadessupervisor.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalnovedadessupervisorPage": () => (/* binding */ ModalnovedadessupervisorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modalnovedadessupervisor_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modalnovedadessupervisor.page.html */ 374);
/* harmony import */ var _modalnovedadessupervisor_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalnovedadessupervisor.page.scss */ 2259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalpermisos.service */ 46);










let ModalnovedadessupervisorPage = class ModalnovedadessupervisorPage {
    constructor(globalpermisos, location, json, modalController, navParams, router) {
        this.globalpermisos = globalpermisos;
        this.location = location;
        this.json = json;
        this.modalController = modalController;
        this.router = router;
        this.apretoparaentregar = 'no';
        this.apretovolverafracciona = 'no';
        this.traidopormodalparams = navParams.get('dataparaelmodal');
        console.log('recibido por modalparams', this.traidopormodalparams);
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    dismissyactualiza() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': 'atualiza'
        });
    }
    ngOnInit() {
    }
    paraentrega() {
        this.apretoparaentregar = 'si';
        this.apretovolverafracciona = 'no';
    }
    volverafracciona() {
        this.apretovolverafracciona = 'si';
        this.apretoparaentregar = 'no';
    }
    confirmarvolverafracciona() {
        var datanovedadesvolverafracciona = {
            id_inutilizado: this.traidopormodalparams.id_inutilizado,
            nombre_solicitud: 'novedadesvolverafracciona'
        };
        this.json.variasfunciones(datanovedadesvolverafracciona).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('respuesta a la solicitud variasfunciones,  novedadesvolverafracciona', res);
            this.respuestanovedadesvolverafracciona = res;
            if (res > 0) {
                this.dismissyactualiza();
            }
        }));
    }
    CHANGEnovedad(event) {
        console.log('evento', event.target.value);
        this.observacion_atencion_novedad = event.target.value;
    }
    confirmarparaentrega() {
        var datanovedadesentregarordenconnovedad = {
            nombre_solicitud: 'novedadesentregarordenconnovedad',
            observa_entrega_con_novedad: this.observacion_atencion_novedad,
            id_inutilizado: this.traidopormodalparams.id_inutilizado,
            operario_entrega_con_novedad: this.globalpermisos.nombre
        };
        this.json.variasfunciones(datanovedadesentregarordenconnovedad).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('respuesta a la solicitud variasfunciones,  novedadesentregarordenconnovedad', res);
            this.respuestaentregarorden = res;
            if (res > 0) {
                this.dismissyactualiza();
            }
        }));
    }
    noconfirmarvolverafracciona() {
        this.apretovolverafracciona = 'no';
        this.apretoparaentregar = 'no';
    }
    noconfirmarparaentrega() {
        this.apretovolverafracciona = 'no';
        this.apretoparaentregar = 'no';
    }
};
ModalnovedadessupervisorPage.ctorParameters = () => [
    { type: _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__.GlobalpermisosService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
ModalnovedadessupervisorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-modalnovedadessupervisor',
        template: _raw_loader_modalnovedadessupervisor_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modalnovedadessupervisor_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalnovedadessupervisorPage);



/***/ }),

/***/ 2259:
/*!*****************************************************************************!*\
  !*** ./src/app/modalnovedadessupervisor/modalnovedadessupervisor.page.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbG5vdmVkYWRlc3N1cGVydmlzb3IucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 374:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalnovedadessupervisor/modalnovedadessupervisor.page.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Atención a la novedad</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-button  (click)=\"dismiss()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\"><ion-icon style=\"color:black;\" name=\"arrow-back-outline\"></ion-icon>Volver</ion-text>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"border-bottom: 1px solid #303030; border-top: 1px solid #303030; text-align: center; \" no-padding class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n        <ion-col size=\"3.5\" style=\"border-left: 1px solid #303030;  border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n            <ion-text>Referencia</ion-text>\n        </ion-col>\n        <ion-col size=\"3.5\" style=\" border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n            <ion-text>Código</ion-text>\n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n            <ion-text>Nombre</ion-text>\n        </ion-col>\n    </ion-row>\n\n    <ion-row  style=\"border-bottom: 1px solid #303030; border-top: 1px solid #303030; background-color:#d4d4d4; text-align: center; \" no-padding class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n        <ion-col size=\"3.5\" style=\"border-left: 1px solid #303030;  border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n          <ion-text color=\"danger\">{{this.traidopormodalparams.referencia}}</ion-text>\n        </ion-col>\n        <ion-col size=\"3.5\" style=\" border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n          <ion-text *ngIf=\"this.traidopormodalparams.id_inutilizado>0&&this.traidopormodalparams.id_inutilizado<10\" color=\"danger\" style=\"color:danger\">0000000{{this.traidopormodalparams.id_inutilizado}}</ion-text>\n          <ion-text *ngIf=\"this.traidopormodalparams.id_inutilizado>10&&this.traidopormodalparams.id_inutilizado<100\" color=\"danger\" style=\"color:danger\">000000{{this.traidopormodalparams.id_inutilizado}}</ion-text>\n          <ion-text *ngIf=\"this.traidopormodalparams.id_inutilizado>100&&this.traidopormodalparams.id_inutilizado<1000\" color=\"danger\" style=\"color:danger\">00000{{this.traidopormodalparams.id_inutilizado}}</ion-text>\n          <ion-text *ngIf=\"this.traidopormodalparams.id_inutilizado>1000&&this.traidopormodalparams.id_inutilizado<10000\" color=\"danger\" style=\"color:danger\">0000{{this.traidopormodalparams.id_inutilizado}}</ion-text>\n          <ion-text *ngIf=\"this.traidopormodalparams.id_inutilizado>10000&&this.traidopormodalparams.id_inutilizado<100000\" color=\"danger\" style=\"color:danger\">000{{this.traidopormodalparams.id_inutilizado}}</ion-text>\n\n          <ion-text></ion-text>\n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n          <ion-text color=\"danger\">{{this.traidopormodalparams.descripcion}}</ion-text>\n        </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <br>\n        <br>\n      </ion-col>\n    </ion-row>\n\n\n  <ion-row style=\"border-bottom: 1px solid #303030; border-top: 1px solid #303030; text-align: center; \" no-padding class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n      <ion-col size=\"4\" style=\"border-left: 1px solid #303030;  border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n        <ion-text>Documento de<br>referencia</ion-text>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n        <ion-text>Metros</ion-text>\n      </ion-col>\n      <ion-col size=\"4\" style=\"border-left: 1px solid #303030;  border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n        <ion-text>Tipo<br>Novedad</ion-text>\n      </ion-col>\n  </ion-row>\n\n\n  <ion-row  style=\"border-bottom: 1px solid #303030; border-top: 1px solid #303030; background-color:#d4d4d4; text-align: center; \" no-padding class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n      <ion-col size=\"4\" style=\"border-left: 1px solid #303030;  border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n          <ion-text color=\"danger\">{{this.traidopormodalparams.referencia}}</ion-text>\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n         <ion-text color=\"danger\">{{this.traidopormodalparams.metrosafraccionar}}</ion-text>\n      </ion-col>\n      <ion-col size=\"4\" style=\"border-left: 1px solid #303030;  border-right: 1px solid #303030;\" class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n         <ion-text color=\"danger\">{{this.traidopormodalparams.tipo_novedad}}</ion-text>\n      </ion-col>\n  </ion-row>\n\n  <ion-row  style=\"border-bottom: 1px solid #303030; border-top: 1px solid #303030; background-color:#d4d4d4; text-align: center; \" no-padding class=\"ion-no-border ion-no-margin ion-no-padding ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-row>\n        <ion-col size=\"4\">\n\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-card>\n          <ion-item  style=\"border-radius: 5px;\">\n            <ion-label position=\"floating\">Observación:</ion-label>\n            <ion-input style=\"color:#d4d4d456;\" (ionChange)=\"CHANGEnovedad($event)\" style=\"border-radius: 8px;\"></ion-input>\n          </ion-item>\n        </ion-card>\n        </ion-col>\n        <ion-col size=\"4\">\n          \n        </ion-col>\n      </ion-row>\n\n    </ion-col>\n</ion-row>\n\n\n  <ion-row *ngIf=\"apretovolverafracciona=='si'&&apretoparaentregar=='no'\" class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-text>¿Confirma que desea volver a fraccionar? </ion-text><br>\n      <ion-button  (click)=\"confirmarvolverafracciona()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\"><ion-icon style=\"color:green;\" name=\"checkmark-done-outline\"></ion-icon>&nbsp;Confirmar</ion-text>\n      </ion-button>&nbsp;&nbsp;\n      <ion-button  (click)=\"noconfirmarvolverafracciona()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\"><ion-icon style=\"color:black;\" name=\"close-outline\"></ion-icon>Cancelar</ion-text>\n      </ion-button>\n\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"apretovolverafracciona=='no'&&apretoparaentregar=='si'\" class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-text>¿Confirma la entrega? </ion-text><br>\n      <ion-button  (click)=\"confirmarparaentrega()\" color=\"danger\" ><ion-icon style=\"color:green;\" name=\"checkmark-done-outline\"></ion-icon><ion-text style=\"font-weight: 500;\">Confirmar</ion-text>\n      </ion-button>&nbsp;&nbsp;\n      <ion-button  (click)=\"noconfirmarparaentrega()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\"><ion-icon style=\"color:black;\" name=\"close-outline\"></ion-icon>&nbsp;Cancelar</ion-text>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row *ngIf=\"apretovolverafracciona=='no'&&apretoparaentregar=='no'\" class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-button  (click)=\"paraentrega()\" color=\"danger\" ><ion-icon style=\"color:green;\" name=\"send-outline\"></ion-icon><ion-text style=\"font-weight: 500;\">Para entrega</ion-text>\n      </ion-button>&nbsp;&nbsp;\n      <ion-button  (click)=\"volverafracciona()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\"><ion-icon style=\"color:orange;\" name=\"reload-outline\"></ion-icon>&nbsp;Volver a fracciona</ion-text>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_modalnovedadessupervisor_modalnovedadessupervisor_page_ts.js.map