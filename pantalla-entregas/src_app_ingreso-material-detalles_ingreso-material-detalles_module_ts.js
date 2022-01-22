(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_ingreso-material-detalles_ingreso-material-detalles_module_ts"],{

/***/ 512:
/*!***************************************************************************************!*\
  !*** ./src/app/ingreso-material-detalles/ingreso-material-detalles-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoMaterialDetallesPageRoutingModule": () => (/* binding */ IngresoMaterialDetallesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ingreso_material_detalles_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingreso-material-detalles.page */ 6669);




const routes = [
    {
        path: '',
        component: _ingreso_material_detalles_page__WEBPACK_IMPORTED_MODULE_0__.IngresoMaterialDetallesPage
    }
];
let IngresoMaterialDetallesPageRoutingModule = class IngresoMaterialDetallesPageRoutingModule {
};
IngresoMaterialDetallesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IngresoMaterialDetallesPageRoutingModule);



/***/ }),

/***/ 1443:
/*!*******************************************************************************!*\
  !*** ./src/app/ingreso-material-detalles/ingreso-material-detalles.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoMaterialDetallesPageModule": () => (/* binding */ IngresoMaterialDetallesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ingreso_material_detalles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingreso-material-detalles-routing.module */ 512);
/* harmony import */ var _ingreso_material_detalles_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingreso-material-detalles.page */ 6669);
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-qrcode2 */ 8920);








let IngresoMaterialDetallesPageModule = class IngresoMaterialDetallesPageModule {
};
IngresoMaterialDetallesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            ngx_qrcode2__WEBPACK_IMPORTED_MODULE_4__.NgxQRCodeModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ingreso_material_detalles_routing_module__WEBPACK_IMPORTED_MODULE_0__.IngresoMaterialDetallesPageRoutingModule
        ],
        declarations: [_ingreso_material_detalles_page__WEBPACK_IMPORTED_MODULE_1__.IngresoMaterialDetallesPage]
    })
], IngresoMaterialDetallesPageModule);



/***/ }),

/***/ 6669:
/*!*****************************************************************************!*\
  !*** ./src/app/ingreso-material-detalles/ingreso-material-detalles.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoMaterialDetallesPage": () => (/* binding */ IngresoMaterialDetallesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ingreso_material_detalles_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ingreso-material-detalles.page.html */ 9358);
/* harmony import */ var _ingreso_material_detalles_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingreso-material-detalles.page.scss */ 5252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modalqr_modalqr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modalqr/modalqr.page */ 3490);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 2760);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globalpermisos.service */ 46);














let IngresoMaterialDetallesPage = class IngresoMaterialDetallesPage {
    //finalizan las variables del qr generador/scanner
    constructor(barcodeScanner, location, router, json, loadingController, navCtrl, loading, route, modalCtrl, datepipe, modalController, globalpermisos) {
        this.barcodeScanner = barcodeScanner;
        this.location = location;
        this.router = router;
        this.json = json;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.datepipe = datepipe;
        this.modalController = modalController;
        this.globalpermisos = globalpermisos;
        //inician las variables del qr generador/scanner
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
        this.desactivarboton = 'si';
        this.route.params.subscribe(params => {
            this.productoquellega = params;
            if (this.productoquellega.descripcion != null && this.productoquellega.descripcion != undefined) {
                //llego un producto
                console.log('this.productoquellega', this.productoquellega);
            }
            else {
                this.router.navigate(['/ingreso-material']);
            }
        });
    }
    ionViewDidEnter() {
        this.usuariologeado = this.globalpermisos.usuariologeado;
        if (this.usuariologeado == undefined || this.usuariologeado == null) {
            this.seccionactiva = 'no';
        }
    }
    ngOnInit() {
    }
    ONCHANGEcarreteorrollo(event) {
        console.log('Change Event', event.target.value);
        this.carreteorrollo = event.target.value;
    }
    ONCHANGEnumerodenotadeentrada(event) {
        console.log('Change Event', event.target.value);
        this.numerodenotadeentrada = event.target.value;
    }
    ONCHANGEnetrosencarrete(event) {
        console.log('Change Event', event.target.value);
        this.metrosencarrete = event.target.value;
    }
    guardardataymodalimprimirqr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            //RECOLECCION DE DATOS NECESARIOS.
            this.fecha_autogenerada = new Date();
            let fecha_autogenerada_arreglada = this.datepipe.transform(this.fecha_autogenerada, 'yyyy-MM-dd');
            this.nombre_user = this.globalpermisos.nombre;
            this.id_user = this.globalpermisos.id_usuario;
            this.bodega = this.globalpermisos.bodega;
            //PREPARACION DE VARIABLE QUE VIAJARA.
            var guardarcaretedbperoenlasiguientepagina = {
                nombre_solicitud: 'guardar_ingreso_material',
                tipo_de_qr: 'ingreso-material',
                bodega: this.bodega,
                referencia: this.productoquellega.referencia,
                producto: this.productoquellega.producto,
                descripcion: this.productoquellega.descripcion,
                carreteorrollo: this.carreteorrollo,
                numerodenotadeentrada: this.numerodenotadeentrada,
                metrosencarrete: this.metrosencarrete,
                fecha_autogenerada: fecha_autogenerada_arreglada,
                nombre_user: this.nombre_user,
                id_user: this.id_user,
                createdCode: 'sinqr'
            };
            //PREPARACION DE VARIABLE QUE VIAJARA.
            var guardarcaretedb = {
                nombre_solicitud: 'guardar_ingreso_material',
                tipo_de_qr: 'ingreso-material',
                createdCode: 'sinqr'
            };
            if (this.id_user && this.carreteorrollo && this.numerodenotadeentrada && this.metrosencarrete && this.carreteorrollo != '' && this.numerodenotadeentrada != '' && this.metrosencarrete != '' && this.id_user != null && this.id_user != undefined) {
                this.json.variasfunciones(guardarcaretedb).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('res guardar_ingreso_material solo la generacion de id', res);
                    if (res.id > 0) {
                        if (res.id < 10) {
                            guardarcaretedbperoenlasiguientepagina.createdCode = '0000000' + res.id;
                        }
                        if (res.id > 10 && res.id < 100) {
                            guardarcaretedbperoenlasiguientepagina.createdCode = '000000' + res.id;
                        }
                        if (res.id > 100 && res.id < 1000) {
                            guardarcaretedbperoenlasiguientepagina.createdCode = '00000' + res.id;
                        }
                        if (res.id > 1000 && res.id < 10000) {
                            guardarcaretedbperoenlasiguientepagina.createdCode = '0000' + res.id;
                        }
                        if (res.id > 10000 && res.id < 100000) {
                            guardarcaretedbperoenlasiguientepagina.createdCode = '000' + res.id;
                        }
                        const modal = yield this.modalController.create({
                            component: _modalqr_modalqr_page__WEBPACK_IMPORTED_MODULE_3__.ModalqrPage,
                            componentProps: {
                                cssClass: 'my-custom-class',
                                'dataparaelmodal': guardarcaretedbperoenlasiguientepagina,
                            }
                        });
                        console.log('enviando estos datos al modal qr ya que alla se guardara', guardarcaretedbperoenlasiguientepagina);
                        return yield modal.present();
                    }
                })); //cierre de la suscripcion del servicio JSON.
            } //finaliza el if que verifica que se guarde solo si reyeno los campos obligatorios. (si parte el boton)
        });
    }
    reingresar() {
        this.router.navigate(['/login']);
    }
    activarboton() {
        if (this.carreteorrollo && this.numerodenotadeentrada && this.metrosencarrete && this.carreteorrollo != '' && this.numerodenotadeentrada != '' && this.metrosencarrete != '') {
            this.desactivarboton = 'no';
        }
        else {
            this.desactivarboton = 'si';
        }
    }
    volver() {
        this.location.back();
    }
    // scan(){
    //   this.barcodeScanner.scan().then(barcodeData => {
    //     console.log('Barcode data', barcodeData);
    //     alert("encode success: " + barcodeData);
    //    }).catch(err => {
    //        console.log('Error', err);
    //    });
    // }
    //empiezan los generador y scaner standar
    createCode() {
        this.createdCode = this.qrData;
        console.log(this.createdCode);
    }
    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.scannedCode = barcodeData.text;
        });
    }
};
IngresoMaterialDetallesPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _globalpermisos_service__WEBPACK_IMPORTED_MODULE_5__.GlobalpermisosService }
];
IngresoMaterialDetallesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-ingreso-material-detalles',
        template: _raw_loader_ingreso_material_detalles_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ingreso_material_detalles_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IngresoMaterialDetallesPage);



/***/ }),

/***/ 5252:
/*!*******************************************************************************!*\
  !*** ./src/app/ingreso-material-detalles/ingreso-material-detalles.page.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmdyZXNvLW1hdGVyaWFsLWRldGFsbGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 9358:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ingreso-material-detalles/ingreso-material-detalles.page.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Ingreso de Material imprimir</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"this.seccionactiva=='no'\">\r\n    <ion-grid>\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n                <ion-button  (click)=\"reingresar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\"><ion-icon name=\"arrow-back-outline\"></ion-icon>Volver</ion-text>\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"this.seccionactiva!='no'\">\r\n\r\n\r\n  \r\n  <ion-grid (ionChange)=\"activarboton()\">\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-button  (click)=\"volver()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\"><ion-icon name=\"arrow-back-outline\"></ion-icon>Volver</ion-text>\r\n        </ion-button>\r\n        <br>\r\n        <ion-text color=\"danger\" style=\"text-align: center;\">Ingreso de carretes / rollos</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n\r\n  <ion-card>\r\n    <!-- <ion-card-header style=\"text-align: center;\">Ingreso de carretes / rollos</ion-card-header> -->\r\n    <ion-card-content>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-card-title style=\"text-align: center;\">Referencia:</ion-card-title><br>\r\n          <ion-card-subtitle style=\"text-align: center;\">{{this.productoquellega.referencia}}</ion-card-subtitle>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-card-title style=\"text-align: center;\">Codigo:</ion-card-title><br>\r\n          <ion-card-subtitle style=\"text-align: center;\">{{this.productoquellega.producto}}</ion-card-subtitle>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-card-title style=\"text-align: center;\">Nombre:</ion-card-title><br>\r\n          <ion-card-subtitle style=\"text-align: center;\">{{this.productoquellega.descripcion}}</ion-card-subtitle>\r\n        </ion-col>\r\n      </ion-row>\r\n      \r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n\r\n          <ion-list>\r\n            <ion-radio-group  (ionChange)=\"ONCHANGEcarreteorrollo($event)\">\r\n              <ion-list-header>\r\n                <ion-label><strong>Carrete/Rollo:</strong></ion-label>\r\n              </ion-list-header>\r\n          \r\n              <ion-item>\r\n                <ion-label>Carrete</ion-label>\r\n                <ion-radio slot=\"start\" value=\"Carrete\"></ion-radio>\r\n              </ion-item>\r\n          \r\n              <ion-item>\r\n                <ion-label>Rollo</ion-label>\r\n                <ion-radio slot=\"start\" value=\"Rollo\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-list>\r\n\r\n        <!-- <ion-item >\r\n          <ion-label position=\"floating\">Carrete/Rollo:</ion-label><br>\r\n          <ion-select (ionChange)=\"ONCHANGEcarreteorrollo($event)\" interface=\"popover\">\r\n            <ion-select-option value=\"Carrete\">Carrete</ion-select-option>\r\n            <ion-select-option value=\"Rollo\">Rollo</ion-select-option>\r\n          </ion-select>\r\n        </ion-item> -->\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Numero de nota de entrada:</ion-label><br>\r\n          <ion-input (ionChange)=\"ONCHANGEnumerodenotadeentrada($event)\" type=\"number\" style=\" border-radius: 5px; background-color: #10101030;\"></ion-input>\r\n        </ion-item>      \r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Metros en carrete:</ion-label><br>\r\n          <ion-input (ionChange)=\"ONCHANGEnetrosencarrete($event)\" type=\"number\" style=\" border-radius: 5px; background-color: #10101030;\"></ion-input>\r\n        </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-button *ngIf=\"this.desactivarboton!='si'\"  (click)=\"guardardataymodalimprimirqr()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\"><ion-icon style=\"font-size: small;\" name=\"qr-code-outline\"></ion-icon>Imprimir QR</ion-text>\r\n        </ion-button>\r\n        <ion-button *ngIf=\"this.desactivarboton=='si'\" disabled (click)=\"guardardataymodalimprimirqr()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\"><ion-icon style=\"font-size: small;\" name=\"qr-code-outline\"></ion-icon>Imprimir QR</ion-text>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-card>\r\n\r\n<!-- Codigo qr Oficial -->\r\n\r\n  <!-- <ion-row>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-input style=\"background-color:red\" type=\"text\" placeholder=\"My QR data\" [(ngModel)]=\"qrData\">\r\n    </ion-input>\r\n\r\n    <button ion-button full icon-left (click)=\"createCode()\">\r\n        <ion-icon name=\"barcode\"></ion-icon>Create\r\n    </button>\r\n    <button ion-button full icon-left (click)=\"scanCode()\">\r\n        <ion-icon name=\"qr-scanner\"></ion-icon>Scan Code\r\n    </button>\r\n\r\n    <ion-card *ngIf=\"createdCode\">\r\n        <ngx-qrcode [value]=\"createdCode\">\r\n        </ngx-qrcode>\r\n\r\n        <ion-card-content>\r\n            Value: {{ createdCode }}\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card *ngIf=\"scannedCode\">\r\n        <ion-card-content>\r\n            Result from scan: {{ scannedCode }}\r\n        </ion-card-content>\r\n    </ion-card>\r\n</div>\r\n\r\n</ion-row> -->\r\n\r\n<!-- Codigo QR Oficial -->\r\n\r\n</ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_ingreso-material-detalles_ingreso-material-detalles_module_ts.js.map