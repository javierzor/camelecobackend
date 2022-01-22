(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["default-src_app_modalentregas_modalentregas_page_ts"],{

/***/ 8551:
/*!*****************************************************!*\
  !*** ./src/app/modalentregas/modalentregas.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalentregasPage": () => (/* binding */ ModalentregasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modalentregas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modalentregas.page.html */ 6484);
/* harmony import */ var _modalentregas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalentregas.page.scss */ 983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modalsobremodalentregas_modalsobremodalentregas_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modalsobremodalentregas/modalsobremodalentregas.page */ 7116);







let ModalentregasPage = class ModalentregasPage {
    constructor(navParams, modalController) {
        this.modalController = modalController;
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
    dismissyactualiza() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': 'actualizalalista'
        });
    }
    entregarboton() {
        this.traidopormodalparams.tipodemodal = 'entregar';
        this.abrirmodalsobremodalentregas();
    }
    novedadboton() {
        this.traidopormodalparams.tipodemodal = 'novedad';
        this.abrirmodalsobremodalentregas();
    }
    abrirmodalsobremodalentregas() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            //empieza el modal
            const modal = yield this.modalController.create({
                component: _modalsobremodalentregas_modalsobremodalentregas_page__WEBPACK_IMPORTED_MODULE_2__.ModalsobremodalentregasPage,
                componentProps: {
                    cssClass: 'my-custom-class',
                    'dataparaelmodal': this.traidopormodalparams,
                },
                id: 'segundomodal'
            });
            modal.onDidDismiss().then((data) => {
                console.log('data', data['data']);
                if (data['data'].dismissed == 'cierraelmodalanteriortambien') {
                    console.log('se cerro el modal pero se guardo en la DB, SE CERRARA TAMBIEN ESTE MODAL tambien');
                    this.modalController.dismiss(undefined, undefined, 'primermodal');
                }
            });
            console.log('enviando estos datos al modal qr', this.traidopormodalparams);
            return yield modal.present();
            //termina el modal
        });
    }
};
ModalentregasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
ModalentregasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-modalentregas',
        template: _raw_loader_modalentregas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modalentregas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalentregasPage);



/***/ }),

/***/ 7116:
/*!*************************************************************************!*\
  !*** ./src/app/modalsobremodalentregas/modalsobremodalentregas.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalsobremodalentregasPage": () => (/* binding */ ModalsobremodalentregasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modalsobremodalentregas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modalsobremodalentregas.page.html */ 8494);
/* harmony import */ var _modalsobremodalentregas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalsobremodalentregas.page.scss */ 8831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalpermisos.service */ 46);










let ModalsobremodalentregasPage = class ModalsobremodalentregasPage {
    constructor(globalpermisos, location, json, navParams, modalController, router) {
        this.globalpermisos = globalpermisos;
        this.location = location;
        this.json = json;
        this.modalController = modalController;
        this.router = router;
        this.tipo_novedad = '';
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
    dismissyacualiza() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': 'cierraelmodalanteriortambien'
        });
    }
    ONCHANGEtipo_novedad(event) {
        console.log('ONCHANGE', event.target.value);
        this.tipo_novedad = event.target.value;
    }
    aceptarentregar() {
        var dataentregarorden = {
            id_inutilizado: this.traidopormodalparams.id_inutilizado,
            nombre_solicitud: 'entregarorden'
        };
        this.json.variasfunciones(dataentregarorden).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('respuesta a la solicitud variasfunciones,  entregarorden', res);
            this.respuestaentregarorden = res;
            if (res > 0) {
                // this.router.navigate(['/entregas']);
                this.dismissyacualiza();
            }
        }));
    }
    aceptarentregarnovedad() {
        var datanovedadorden = {
            operario_entrega: this.globalpermisos.nombre,
            id_inutilizado: this.traidopormodalparams.id_inutilizado,
            nombre_solicitud: 'novedadorden',
            tipo_novedad: this.tipo_novedad
        };
        this.json.variasfunciones(datanovedadorden).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('respuesta a la solicitud variasfunciones,  novedadorden', res);
            this.respuestanovedadorden = res;
            if (res > 0) {
                // this.router.navigate(['/entregas']);
                // this.router.navigate(['/entregas']);
                this.dismissyacualiza();
            }
        }));
    }
};
ModalsobremodalentregasPage.ctorParameters = () => [
    { type: _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__.GlobalpermisosService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
ModalsobremodalentregasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-modalsobremodalentregas',
        template: _raw_loader_modalsobremodalentregas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modalsobremodalentregas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalsobremodalentregasPage);



/***/ }),

/***/ 983:
/*!*******************************************************!*\
  !*** ./src/app/modalentregas/modalentregas.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbGVudHJlZ2FzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 8831:
/*!***************************************************************************!*\
  !*** ./src/app/modalsobremodalentregas/modalsobremodalentregas.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbHNvYnJlbW9kYWxlbnRyZWdhcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6484:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalentregas/modalentregas.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Entregas, Validación de la información</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class=\"ion-align-items-center\">\n\n  <ion-col size=\"12\" class=\"ion-text-center\">\n    <ion-button  (click)=\"dismiss()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Cancelar</ion-text>\n    </ion-button>\n  </ion-col>\n  </ion-row>\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      <ion-text>Referencia</ion-text>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      <ion-text>Código</ion-text>\n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-text>Nombre</ion-text>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      <ion-text>Documento<br>Referencia</ion-text>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      <ion-text>Metros</ion-text>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      <ion-text style=\"color:red;\">{{traidopormodalparams.referencia}}</ion-text>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      <ion-text style=\"color:red;\">{{traidopormodalparams.referencia}}</ion-text>\n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-text style=\"color:red;\">{{traidopormodalparams.descripcion}}</ion-text>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      <ion-text style=\"color:red;\">{{traidopormodalparams.documento}}</ion-text>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      <ion-text style=\"color:red;\">{{traidopormodalparams.metrosafraccionar}}</ion-text>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-text style=\"font-size: small;\">verifique la información y seleccione entregar o novedad segun su requerimiento.</ion-text>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      \n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-button  (click)=\"entregarboton()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Entregar</ion-text>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\" class=\"ion-text-center\">\n      <ion-button  (click)=\"novedadboton()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Novedad</ion-text>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"2\" class=\"ion-text-center\">\n      \n    </ion-col>\n  </ion-row>\n\n\n</ion-content>\n");

/***/ }),

/***/ 8494:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalsobremodalentregas/modalsobremodalentregas.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Confirme su selección:</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-text style=\"font-size: small;\">Porfavor confirme que desea enviar la siguiente información:</ion-text>\n\n  <ion-grid *ngIf=\"traidopormodalparams.tipodemodal=='entregar'\">\n    <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-text>¿Esta seguro de entregar?</ion-text><br>\n      <ion-button  (click)=\"aceptarentregar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Aceptar</ion-text>\n      </ion-button>\n      <ion-button  (click)=\"dismiss()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Cancelar</ion-text>\n      </ion-button>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"traidopormodalparams.tipodemodal=='novedad'\">\n    <ion-select placeholder=\"seleccione la novedad\" interface=\"popover\" (ionChange)=\"ONCHANGEtipo_novedad($event)\" style=\"background-color: #d4d4d4;\">\n        <ion-select-option value=\"Diferencia en cantidad(Logística)\">Diferencia en cantidad(Logística)</ion-select-option>\n        <ion-select-option value=\"Diferencia en Cantidad(Comercial)\">Diferencia en Cantidad(Comercial)</ion-select-option>\n        <ion-select-option value=\"Diferencia en Producto(Logística)\">Diferencia en Producto(Logística)</ion-select-option>\n        <ion-select-option value=\"Diferencia en Producto(Comercial)\">Diferencia en Producto(Comercial)</ion-select-option>\n    </ion-select>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-button disabled *ngIf=\"this.tipo_novedad==null||this.tipo_novedad==undefined||this.tipo_novedad==''\"  (click)=\"aceptarentregarnovedad()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Aceptar</ion-text>\n      </ion-button>\n      <ion-button *ngIf=\"this.tipo_novedad!=null&&this.tipo_novedad!=undefined&&this.tipo_novedad!=''\"  (click)=\"aceptarentregarnovedad()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Aceptar</ion-text>\n      </ion-button>\n      <ion-button  (click)=\"dismiss()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Cancelar</ion-text>\n      </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_modalentregas_modalentregas_page_ts.js.map