(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_auditoria_auditoria_module_ts"],{

/***/ 1720:
/*!*******************************************************!*\
  !*** ./src/app/auditoria/auditoria-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuditoriaPageRoutingModule": () => (/* binding */ AuditoriaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auditoria_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auditoria.page */ 2960);




const routes = [
    {
        path: '',
        component: _auditoria_page__WEBPACK_IMPORTED_MODULE_0__.AuditoriaPage
    }
];
let AuditoriaPageRoutingModule = class AuditoriaPageRoutingModule {
};
AuditoriaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuditoriaPageRoutingModule);



/***/ }),

/***/ 2478:
/*!***********************************************!*\
  !*** ./src/app/auditoria/auditoria.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuditoriaPageModule": () => (/* binding */ AuditoriaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _auditoria_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auditoria-routing.module */ 1720);
/* harmony import */ var _auditoria_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auditoria.page */ 2960);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);








let AuditoriaPageModule = class AuditoriaPageModule {
};
AuditoriaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _auditoria_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuditoriaPageRoutingModule
        ],
        declarations: [_auditoria_page__WEBPACK_IMPORTED_MODULE_1__.AuditoriaPage]
    })
], AuditoriaPageModule);



/***/ }),

/***/ 2960:
/*!*********************************************!*\
  !*** ./src/app/auditoria/auditoria.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuditoriaPage": () => (/* binding */ AuditoriaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_auditoria_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./auditoria.page.html */ 2233);
/* harmony import */ var _auditoria_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auditoria.page.scss */ 1144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalpermisos.service */ 46);














let AuditoriaPage = class AuditoriaPage {
    constructor(location, router, json, loadingController, navCtrl, loading, route, modalCtrl, datepipe, menuCtrl, myapp, globalpermisos) {
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
        this.segmentModel = "ordenesdefraccionamiento";
        this.segmentModel2 = "creados";
        this.campo1 = '';
        this.campo2 = '';
        this.campo3 = '';
        this.campo4 = '';
        this.campo5 = '';
        this.campo6 = '';
        this.campo7 = '';
        this.campo8 = '';
        this.step = '1';
        this.auditoria1alentrar();
    }
    CHANGEcampo1(event) {
        this.campo1 = event.target.value;
        this.campo2 = '';
        this.campo3 = '';
        this.campo4 = '';
        this.campo5 = '';
        this.campo6 = '';
        this.campo7 = '';
        this.campo8 = '';
        this.filterTerm = event.target.value;
    }
    CHANGEcampo2(event) {
        this.campo1 = '';
        this.campo2 = event.target.value;
        this.campo3 = '';
        this.campo4 = '';
        this.campo5 = '';
        this.campo6 = '';
        this.campo7 = '';
        this.campo8 = '';
        this.filterTerm = event.target.value;
    }
    CHANGEcampo3(event) {
        this.campo1 = '';
        this.campo2 = '';
        this.campo3 = event.target.value;
        this.campo4 = '';
        this.campo5 = '';
        this.campo6 = '';
        this.campo7 = '';
        this.campo8 = '';
        this.filterTerm = event.target.value;
    }
    CHANGEcampo4(event) {
        this.campo1 = '';
        this.campo2 = '';
        this.campo3 = '';
        this.campo4 = event.target.value;
        this.campo5 = '';
        this.campo6 = '';
        this.campo7 = '';
        this.campo8 = '';
        this.filterTerm = event.target.value;
    }
    CHANGEcampo5(event) {
        this.campo1 = '';
        this.campo2 = '';
        this.campo3 = '';
        this.campo4 = '';
        this.campo5 = event.target.value;
        this.campo6 = '';
        this.campo7 = '';
        this.campo8 = '';
        this.filterTerm = event.target.value;
    }
    CHANGEcampo6(event) {
        this.campo1 = '';
        this.campo2 = '';
        this.campo3 = '';
        this.campo4 = '';
        this.campo5 = '';
        this.campo6 = event.target.value;
        this.campo7 = '';
        this.campo8 = '';
        this.filterTerm = event.target.value;
    }
    CHANGEcampo7(event) {
        this.campo1 = '';
        this.campo2 = '';
        this.campo3 = '';
        this.campo4 = '';
        this.campo5 = '';
        this.campo6 = '';
        this.campo7 = event.target.value;
        this.campo8 = '';
        this.filterTerm = event.target.value;
    }
    CHANGEcampo8(event) {
        this.campo1 = '';
        this.campo2 = '';
        this.campo3 = '';
        this.campo4 = '';
        this.campo5 = '';
        this.campo6 = '';
        this.campo7 = '';
        this.campo8 = event.target.value;
        this.filterTerm = event.target.value;
    }
    buscar() {
        this.step = '2';
    }
    volver() {
        this.step = '1';
    }
    auditoria1alentrar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const actualizando = yield this.loadingController.create({
                message: 'Actualizando...', spinner: 'bubbles', duration: 15000,
            });
            actualizando.present();
            var dataauditoria1 = {
                nombre_solicitud: 'auditoria1',
            };
            this.json.variasfunciones(dataauditoria1).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log('respuesta a la solicitud variasfunciones,  auditoria1', res);
                this.respuestaauditoria1 = res;
                actualizando.dismiss();
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
            if (this.globalpermisos.mispermisosglobalesenservice['permisonumero7'] == 'si') {
                this.puedenavegaraqui = 'si';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
            else if (this.globalpermisos.mispermisosglobalesenservice['permisonumero7'] != 'si') {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    segmentChanged(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.campo1 = '';
            this.campo2 = '';
            this.campo3 = '';
            this.campo4 = '';
            this.campo5 = '';
            this.campo6 = '';
            this.campo7 = '';
            this.campo8 = '';
            this.step = '1';
            const actualizando = yield this.loadingController.create({
                message: 'Actualizando...', spinner: 'bubbles', duration: 15000,
            });
            console.log(this.segmentModel);
            console.log(event);
            if (this.segmentModel == 'ordenesdefraccionamiento') {
                actualizando.present();
                this.step = '1';
                var dataauditoria1 = {
                    nombre_solicitud: 'auditoria1',
                };
                this.json.variasfunciones(dataauditoria1).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('respuesta a la solicitud variasfunciones,  auditoria1', res);
                    this.respuestaauditoria1 = res;
                    actualizando.dismiss();
                }));
            }
            if (this.segmentModel == 'fraccionamientosrealizados') {
                actualizando.present();
                var dataauditoria2 = {
                    nombre_solicitud: 'auditoria2',
                };
                this.json.variasfunciones(dataauditoria2).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('respuesta a la solicitud variasfunciones,  auditoria2', res);
                    this.respuestaauditoria2 = res;
                    actualizando.dismiss();
                }));
            }
            if (this.segmentModel == 'fraccionamientossuspendidos') {
                actualizando.present();
                var dataauditoria3 = {
                    nombre_solicitud: 'auditoria3',
                };
                this.json.variasfunciones(dataauditoria3).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('respuesta a la solicitud variasfunciones,  auditoria3', res);
                    this.respuestaauditoria3 = res;
                    actualizando.dismiss();
                }));
            }
            if (this.segmentModel == 'fraccionamientosacarrete') {
                actualizando.present();
                var dataauditoriaconsultartodosfraccionados = {
                    nombre_solicitud: 'auditoriaconsultartodosfraccionados',
                };
                this.json.variasfunciones(dataauditoriaconsultartodosfraccionados).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('respuesta a la solicitud variasfunciones,  auditoriaconsultartodosfraccionados', res);
                    this.respuestaauditoriaconsultartodosfraccionados = res;
                    actualizando.dismiss();
                }));
            }
            if (this.segmentModel == 'cambiodecarreteachipa') {
                actualizando.present();
                var datacambiodecarreteachipa = {
                    nombre_solicitud: 'cambiodecarreteachipa',
                };
                this.json.variasfunciones(datacambiodecarreteachipa).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('respuesta a la solicitud variasfunciones,  cambiodecarreteachipa', res);
                    this.respuestacambiodecarreteachipa = res;
                    actualizando.dismiss();
                }));
            }
            if (this.segmentModel == 'ingresodematerial') {
                actualizando.present();
                var dataauditoriaingresomaterial = {
                    nombre_solicitud: 'auditoriaingresomaterial',
                };
                this.json.variasfunciones(dataauditoriaingresomaterial).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('respuesta a la solicitud variasfunciones,  auditoriaingresomaterial', res);
                    this.respuestaauditoriaingresomaterial = res;
                    actualizando.dismiss();
                }));
            }
            if (this.segmentModel == 'bloqueoingresodematerial') {
                actualizando.present();
                var dataauditoriabloqueoingresomaterial = {
                    nombre_solicitud: 'auditoriabloqueoingresomaterial',
                };
                this.json.variasfunciones(dataauditoriabloqueoingresomaterial).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('respuesta a la solicitud variasfunciones,  auditoriabloqueoingresomaterial', res);
                    this.respuestaauditoriabloqueoingresomaterial = res;
                    actualizando.dismiss();
                }));
            }
            if (this.segmentModel == 'entregas') {
                actualizando.present();
                var dataauditoriaentregas = {
                    nombre_solicitud: 'auditoriaentregas',
                };
                this.json.variasfunciones(dataauditoriaentregas).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('respuesta a la solicitud variasfunciones,  auditoriaentregas', res);
                    this.respuestaauditoriaentregas = res;
                    actualizando.dismiss();
                }));
            }
            if (this.segmentModel == 'novedadesenentrega') {
                actualizando.present();
                var datanovedadesenentrega = {
                    nombre_solicitud: 'novedadesenentrega',
                };
                this.json.variasfunciones(datanovedadesenentrega).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('respuesta a la solicitud variasfunciones,  novedadesenentrega', res);
                    this.respuestanovedadesenentrega = res;
                    actualizando.dismiss();
                }));
            }
            if (this.segmentModel == 'usuarios') {
                actualizando.present();
                var data = {
                    nombre_solicitud: 'auditoriausuarioscreados',
                };
                this.json.variasfunciones(data).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('respuesta a la solicitud auditoriausuarioscreados', res);
                    this.respuestaauditoriausuarioscreados = res;
                    actualizando.dismiss();
                }));
            }
        });
    }
    volverastep2() {
        console.log('volviendo a step 2');
        this.step = '2';
    }
    step3(producto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const consultando = yield this.loadingController.create({
                message: 'Consultando...', spinner: 'bubbles', duration: 15000,
            });
            console.log('producto a consultarle todos los fraccionamientos', producto);
            consultando.present();
            var dataauditoriaconsultarfraccionamientosdeuncarrete = {
                nombre_solicitud: 'auditoriaconsultarfraccionamientosdeuncarrete',
                id_material: producto.id_material
            };
            this.json.variasfunciones(dataauditoriaconsultarfraccionamientosdeuncarrete).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log('respuesta a la solicitud variasfunciones,  auditoriaconsultarfraccionamientosdeuncarrete', res);
                this.step = '3';
                this.respuestaauditoriaconsultarfraccionamientosdeuncarrete = res;
                consultando.dismiss();
            }));
        });
    }
    CHANGEauditoria4_numero_fraccionado(event) {
        console.log('event', event.target.value);
        this.auditoria4_numero_fraccionado = event.target.value;
    }
    buscarauditoria4() {
        var dataauditoria4 = {
            nombre_solicitud: 'auditoria4buscar',
            auditoria4_numero_fraccionado: this.auditoria4_numero_fraccionado
        };
        this.json.variasfunciones(dataauditoria4).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('respuesta a la solicitud variasfunciones,  auditoria4 busqueda', res);
            this.respuestaauditoria4 = res;
            if (res.length > 0) {
                this.step = '2';
            }
        }));
    }
    segmentChanged2(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.campo1 = '';
            this.campo2 = '';
            this.campo3 = '';
            this.campo4 = '';
            this.campo5 = '';
            this.campo6 = '';
            this.campo7 = '';
            this.campo8 = '';
            this.step = '1';
            const actualizando = yield this.loadingController.create({
                message: 'Actualizando...', spinner: 'bubbles', duration: 15000,
            });
            actualizando.present();
            console.log(this.segmentModel);
            console.log(event);
            if (this.segmentModel2 == 'creados') {
                var data = {
                    nombre_solicitud: 'auditoriausuarioscreados',
                };
                this.json.variasfunciones(data).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('respuesta a la solicitud auditoriausuarioscreados', res);
                    this.respuestaauditoriausuarioscreados = res;
                    actualizando.dismiss();
                }));
            }
            if (this.segmentModel2 == 'modificados') {
                var data = {
                    nombre_solicitud: 'auditoriausuariosmodificados',
                };
                this.json.variasfunciones(data).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('respuesta a la solicitud auditoriausuarioscreados', res);
                    this.respuestaauditoriausuariosmodificados = res;
                    actualizando.dismiss();
                }));
            }
            if (this.segmentModel2 == 'desactivadosactivados') {
                var data = {
                    nombre_solicitud: 'auditoriausuariosdesactivadosactivados',
                };
                this.json.variasfunciones(data).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('respuesta a la solicitud auditoriausuarioscreados', res);
                    this.respuestaauditoriausuariosdesactivadosactivados = res;
                    actualizando.dismiss();
                }));
            }
        });
    }
};
AuditoriaPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent },
    { type: _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__.GlobalpermisosService }
];
AuditoriaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-auditoria',
        template: _raw_loader_auditoria_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_auditoria_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AuditoriaPage);



/***/ }),

/***/ 1144:
/*!***********************************************!*\
  !*** ./src/app/auditoria/auditoria.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdWRpdG9yaWEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 2233:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auditoria/auditoria.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Auditoria</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button href=\"https://cables.cameleco.com/ayuda-auditoria/\" target=\"_blank\" style=\"text-transform: none; margin-right: 15px;\">Ayuda \r\n          <ion-icon  name=\"information-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n  </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid *ngIf=\"this.seccionactiva=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text  (click)=\"reingresar()\" color=\"danger\" >Sección expirada debe reingresar.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <ion-button  (click)=\"reingresar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">REINGRESAR</ion-text>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >No tiene permisos para navegar en esta sección.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='si'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Bienvenido.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\"  \r\n    value=\"ordenesdefraccionamiento\"\r\n    scrollable=\"true\"\r\n    mode=\"ios\"\r\n    [(ngModel)]=\"segmentModel\" \r\n    (ionChange)=\"segmentChanged($event)\"\r\n    >\r\n\r\n    <ion-row>\r\n\r\n      <ion-col size=\"12\">\r\n\r\n        <ion-segment-button [disabled]=\"segmentModel=='ordenesdefraccionamiento'\" value=\"ordenesdefraccionamiento\">\r\n          <ion-button [disabled]=\"segmentModel=='ordenesdefraccionamiento'\" > \r\n             <ion-label>Ordenes de<br>fraccionamiento</ion-label>\r\n          </ion-button>\r\n        </ion-segment-button>\r\n\r\n        <ion-segment-button [disabled]=\"segmentModel=='fraccionamientosrealizados'\" value=\"fraccionamientosrealizados\">\r\n          <ion-button [disabled]=\"segmentModel=='fraccionamientosrealizados'\"> \r\n          <ion-label>Fraccionamientos<br> realizados</ion-label>\r\n          </ion-button>\r\n        </ion-segment-button>\r\n\r\n\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n\r\n  \r\n\r\n    <ion-row>\r\n\r\n      <ion-col size=\"12\">\r\n\r\n\r\n        <ion-segment-button [disabled]=\"segmentModel=='fraccionamientossuspendidos'\" value=\"fraccionamientossuspendidos\">\r\n         <ion-button [disabled]=\"segmentModel=='fraccionamientossuspendidos'\"> \r\n            <ion-label>Fraccionamientos<br>Suspendidos</ion-label> \r\n         </ion-button>\r\n        </ion-segment-button>\r\n\r\n\r\n        <ion-segment-button [disabled]=\"segmentModel=='fraccionamientosacarrete'\" value=\"fraccionamientosacarrete\">\r\n          <ion-button [disabled]=\"segmentModel=='fraccionamientosacarrete'\"> \r\n          <ion-label>Fraccionamientos<br> a carrete</ion-label>\r\n          </ion-button>\r\n        </ion-segment-button>\r\n\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n\r\n\r\n    <ion-row>\r\n\r\n      <ion-col size=\"12\">\r\n\r\n        <ion-segment-button [disabled]=\"segmentModel=='cambiodecarreteachipa'\" value=\"cambiodecarreteachipa\">\r\n          <ion-button [disabled]=\"segmentModel=='cambiodecarreteachipa'\"> \r\n          <ion-label>Cambio de carrete a chipa</ion-label>\r\n          </ion-button>\r\n        </ion-segment-button>\r\n\r\n\r\n\r\n        <ion-segment-button [disabled]=\"segmentModel=='ingresodematerial'\" value=\"ingresodematerial\">\r\n          <ion-button [disabled]=\"segmentModel=='ingresodematerial'\"> \r\n          <ion-label>Ingreso de material</ion-label>\r\n          </ion-button>\r\n        </ion-segment-button>\r\n\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n\r\n      <ion-col size=\"12\">\r\n\r\n\r\n        <ion-segment-button [disabled]=\"segmentModel=='bloqueoingresodematerial'\" value=\"bloqueoingresodematerial\">\r\n          <ion-button [disabled]=\"segmentModel=='bloqueoingresodematerial'\"> \r\n          <ion-label>Bloqueo ingreso de material</ion-label>\r\n          </ion-button>\r\n        </ion-segment-button>\r\n\r\n\r\n        <ion-segment-button [disabled]=\"segmentModel=='entregas'\" value=\"entregas\">\r\n          <ion-button [disabled]=\"segmentModel=='entregas'\" > \r\n          <ion-label>Entregas</ion-label>\r\n          </ion-button>\r\n        </ion-segment-button>\r\n\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n\r\n      <ion-col size=\"12\">\r\n\r\n\r\n        <ion-segment-button [disabled]=\"segmentModel=='novedadesenentrega'\" value=\"novedadesenentrega\">\r\n          <ion-button [disabled]=\"segmentModel=='novedadesenentrega'\">\r\n          <ion-label>Novedades en entregas</ion-label>\r\n          </ion-button>\r\n        </ion-segment-button>\r\n\r\n\r\n        <ion-segment-button  [disabled]=\"segmentModel=='usuarios'\" value=\"usuarios\">\r\n          <ion-button  [disabled]=\"segmentModel=='usuarios'\"> \r\n          <ion-label>Usuarios</ion-label>\r\n          </ion-button>\r\n        </ion-segment-button>\r\n\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n\r\n      \r\n  \r\n\r\n    \r\n  </ion-segment>\r\n\r\n    <ion-card style=\"background-color:#f2f2f2;\" *ngIf=\"this.segmentModel=='ordenesdefraccionamiento'\">\r\n      <ion-card-header>\r\n        <ion-card-title>Pendientes para fraccionar</ion-card-title>\r\n      </ion-card-header>\r\n    \r\n      <ion-card-content>\r\n\r\n        <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>Referencia</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo1}}\" (input)=\"CHANGEcampo1($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>Codigo</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo2}}\" (input)=\"CHANGEcampo2($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>Nombre:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo3}}\" (input)=\"CHANGEcampo3($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p style=\"font-size: small;\">Documento de<br>Referencia:</p>\r\n              <ion-item>\r\n                <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo4}}\" (input)=\"CHANGEcampo4($event)\"></ion-input>\r\n              </ion-item>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p style=\"font-size: small;\">Nro orden<br>fraccionamiento</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo5}}\" (input)=\"CHANGEcampo5($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>Por operario</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo6}}\" (input)=\"CHANGEcampo6($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>Fecha inicio:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo7}}\" (input)=\"CHANGEcampo7($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>fecha final:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo8}}\" (input)=\"CHANGEcampo8($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n          <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button\r\n              [disabled]=\"  \r\n              \r\n              this.campo1==''\r\n              &&this.campo2==''\r\n              &&this.campo3==''\r\n              &&this.campo4==''\r\n              &&this.campo5==''\r\n              &&this.campo6==''\r\n              &&this.campo7==''\r\n              &&this.campo8==''\r\n              \r\n              \"\r\n               (click)=\"buscar()\">Buscar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        <ion-row *ngIf=\"this.step=='2'\" class=\"ion-align-items-center\">        \r\n          <ion-col size=\"12\" class=\"ion-text-center\">\r\n\r\n            <ion-button (click)=\"volver()\"><ion-icon name=\"arrow-back-outline\"></ion-icon>volver</ion-button>\r\n                <!-- <ion-searchbar placeholder=\"Buscar...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar> -->\r\n    \r\n              <ion-row style=\"text-align: center;\">\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Hora<br>orden</ion-text></ion-col>\r\n                <ion-col size=\"1.5\" style=\"font-size:small;\"><ion-text>Numero <br>de orden</ion-text></ion-col>\r\n                <ion-col size=\"4.5\" style=\"font-size:small;\"><ion-text>Nombre</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Factura</ion-text></ion-col>\r\n                <ion-col size=\"1.5\" style=\"font-size:small;\"><ion-text>Metros</ion-text></ion-col>\r\n                <ion-col size=\"2.5\" style=\"font-size:small;\"><ion-text>operario</ion-text></ion-col>\r\n              </ion-row>\r\n\r\n                <ion-list style=\"text-align: center;\" class=\"ion-align-items-center\">\r\n                    <!-- <ion-item > -->\r\n                      <ion-row style=\"border-bottom: 1px solid #151515 !important; border-top: 1px solid #151515 !important;\" *ngFor=\"let producto of respuestaauditoria1 | filter:filterTerm\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                        <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                          <ion-text color=\"danger\" style=\"color:danger\">{{producto.fecha_orden}}<br>{{producto.hora_orden}}</ion-text>\r\n                        </ion-col>\r\n                        <ion-col size=\"1.5\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n\r\n                          <ion-text *ngIf=\"producto.id_inutilizado>0&&producto.id_inutilizado<10\" color=\"danger\" style=\"color:danger\">0000000{{producto.id_inutilizado}}</ion-text>\r\n                          <ion-text *ngIf=\"producto.id_inutilizado>10&&producto.id_inutilizado<100\" color=\"danger\" style=\"color:danger\">000000{{producto.id_inutilizado}}</ion-text>\r\n                          <ion-text *ngIf=\"producto.id_inutilizado>100&&producto.id_inutilizado<1000\" color=\"danger\" style=\"color:danger\">00000{{producto.id_inutilizado}}</ion-text>\r\n                          <ion-text *ngIf=\"producto.id_inutilizado>1000&&producto.id_inutilizado<10000\" color=\"danger\" style=\"color:danger\">0000{{producto.id_inutilizado}}</ion-text>\r\n                          <ion-text *ngIf=\"producto.id_inutilizado>10000&&producto.id_inutilizado<100000\" color=\"danger\" style=\"color:danger\">000{{producto.id_inutilizado}}</ion-text>\r\n      \r\n                        </ion-col>\r\n                        <ion-col size=\"4.5\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                          <ion-text color=\"danger\" style=\"color:danger\">{{producto.descripcion}}</ion-text>\r\n                        </ion-col>\r\n                        <ion-col size=\"1.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                          <ion-text color=\"danger\" style=\"color:danger\">{{producto.documento}}</ion-text>\r\n                        </ion-col>\r\n                        <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                          <ion-text color=\"danger\" style=\"color:danger\">{{producto.metrosafraccionar}}</ion-text>\r\n                        </ion-col>\r\n                        <ion-col size=\"2.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                          <ion-text color=\"danger\" style=\"color:danger\">{{producto.nombre_ordenador}}</ion-text>\r\n                        </ion-col>\r\n                        \r\n                      </ion-row>\r\n                    <!--  -->\r\n                  </ion-list>\r\n          </ion-col>\r\n      </ion-row>\r\n\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card *ngIf=\"this.segmentModel=='fraccionamientosrealizados'\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Listado de ordenes de fraccionamiento</ion-card-subtitle>\r\n        <ion-card-title>Fraccionamientos Realizados</ion-card-title>\r\n      </ion-card-header>\r\n    \r\n      <ion-card-content>\r\n\r\n        <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>Referencia</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo1}}\" (input)=\"CHANGEcampo1($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>Codigo</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo2}}\" (input)=\"CHANGEcampo2($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>Nombre:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo3}}\" (input)=\"CHANGEcampo3($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p style=\"font-size: small;\">Documento de<br>Referencia:</p>\r\n              <ion-item>\r\n                <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo4}}\" (input)=\"CHANGEcampo4($event)\"></ion-input>\r\n              </ion-item>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p style=\"font-size: small;\">Nro orden<br>fraccionamiento</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo5}}\" (input)=\"CHANGEcampo5($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>Por operario</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo6}}\" (input)=\"CHANGEcampo6($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>Fecha inicio:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo7}}\" (input)=\"CHANGEcampo7($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>fecha final:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo8}}\" (input)=\"CHANGEcampo8($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n          <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button\r\n              [disabled]=\"  \r\n              \r\n              this.campo1==''\r\n              &&this.campo2==''\r\n              &&this.campo3==''\r\n              &&this.campo4==''\r\n              &&this.campo5==''\r\n              &&this.campo6==''\r\n              &&this.campo7==''\r\n              &&this.campo8==''\r\n              \r\n              \"\r\n               (click)=\"buscar()\">Buscar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        <ion-row  *ngIf=\"this.step=='2'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button (click)=\"volver()\"><ion-icon name=\"arrow-back-outline\"></ion-icon>volver</ion-button>\r\n                <!-- <ion-searchbar placeholder=\"Buscar...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar> -->\r\n    \r\n              <ion-row style=\"text-align: center;\">\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Hora<br>orden</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Numero <br>de orden</ion-text></ion-col>\r\n                <ion-col size=\"3.5\" style=\"font-size:small;\"><ion-text>Nombre</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Factura</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Metros</ion-text></ion-col>\r\n                <ion-col size=\"2.5\" style=\"font-size:small;\"><ion-text>operario</ion-text></ion-col>\r\n                <ion-col size=\"2\" style=\"font-size:small;\"><ion-text>ordenado<br>por</ion-text></ion-col>\r\n\r\n              </ion-row>\r\n\r\n                <ion-list style=\"text-align: center;\" class=\"ion-align-items-center\">\r\n                    <!-- <ion-item > -->\r\n                      <ion-row style=\"border-bottom: 1px solid #151515 !important; border-top: 1px solid #151515 !important;\" *ngFor=\"let producto of respuestaauditoria2 | filter:filterTerm\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                        <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                          <ion-text color=\"danger\" style=\"color:danger\">{{producto.fecha_orden}}<br>{{producto.hora_orden}}</ion-text>\r\n                        </ion-col>\r\n                        <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n\r\n                          <ion-text *ngIf=\"producto.id_inutilizado>0&&producto.id_inutilizado<10\" color=\"danger\" style=\"color:danger\">0000000{{producto.id_inutilizado}}</ion-text>\r\n                          <ion-text *ngIf=\"producto.id_inutilizado>10&&producto.id_inutilizado<100\" color=\"danger\" style=\"color:danger\">000000{{producto.id_inutilizado}}</ion-text>\r\n                          <ion-text *ngIf=\"producto.id_inutilizado>100&&producto.id_inutilizado<1000\" color=\"danger\" style=\"color:danger\">00000{{producto.id_inutilizado}}</ion-text>\r\n                          <ion-text *ngIf=\"producto.id_inutilizado>1000&&producto.id_inutilizado<10000\" color=\"danger\" style=\"color:danger\">0000{{producto.id_inutilizado}}</ion-text>\r\n                          <ion-text *ngIf=\"producto.id_inutilizado>10000&&producto.id_inutilizado<100000\" color=\"danger\" style=\"color:danger\">000{{producto.id_inutilizado}}</ion-text>\r\n      \r\n                        </ion-col>\r\n                        <ion-col size=\"3.5\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                          <ion-text color=\"danger\" style=\"color:danger\">{{producto.descripcion}}</ion-text>\r\n                        </ion-col>\r\n                        <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                          <ion-text color=\"danger\" style=\"color:danger\">{{producto.documento}}</ion-text>\r\n                        </ion-col>\r\n                        <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                          <ion-text color=\"danger\" style=\"color:danger\">{{producto.metrosafraccionar}}</ion-text>\r\n                        </ion-col>\r\n                        <ion-col size=\"2.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                          <ion-text color=\"danger\" style=\"color:danger\">{{producto.operario_fraccionado}}</ion-text>\r\n                        </ion-col>\r\n                        <ion-col size=\"2\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                          <ion-text color=\"danger\" style=\"color:danger\">{{producto.nombre_ordenador}}</ion-text>\r\n                        </ion-col>\r\n                        \r\n                      </ion-row>\r\n                    <!--  -->\r\n                  </ion-list>\r\n          </ion-col>\r\n      </ion-row>\r\n\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n    <ion-card *ngIf=\"this.segmentModel=='fraccionamientossuspendidos'\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Listado de ordenes de fraccionamiento</ion-card-subtitle>\r\n        <ion-card-title>Fraccionamientos suspendidos</ion-card-title>\r\n      </ion-card-header>\r\n    \r\n      <ion-card-content>\r\n\r\n\r\n        <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>Referencia</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo1}}\" (input)=\"CHANGEcampo1($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>Codigo</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo2}}\" (input)=\"CHANGEcampo2($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>Nombre:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo3}}\" (input)=\"CHANGEcampo3($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p style=\"font-size: small;\">Documento de<br>Referencia:</p>\r\n              <ion-item>\r\n                <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo4}}\" (input)=\"CHANGEcampo4($event)\"></ion-input>\r\n              </ion-item>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p style=\"font-size: small;\">Nro orden<br>fraccionamiento</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo5}}\" (input)=\"CHANGEcampo5($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>Por operario</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo6}}\" (input)=\"CHANGEcampo6($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>Fecha inicio:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo7}}\" (input)=\"CHANGEcampo7($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n            \r\n              <p>fecha final:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo8}}\" (input)=\"CHANGEcampo8($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n          <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button\r\n              [disabled]=\"  \r\n              \r\n              this.campo1==''\r\n              &&this.campo2==''\r\n              &&this.campo3==''\r\n              &&this.campo4==''\r\n              &&this.campo5==''\r\n              &&this.campo6==''\r\n              &&this.campo7==''\r\n              &&this.campo8==''\r\n              \r\n              \"\r\n               (click)=\"buscar()\">Buscar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n        <ion-row *ngIf=\"this.step=='2'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button (click)=\"volver()\"><ion-icon name=\"arrow-back-outline\"></ion-icon>volver</ion-button>\r\n                <!-- <ion-searchbar placeholder=\"Buscar...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar> -->\r\n    \r\n              <ion-row style=\"text-align: center;\">\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Hora<br>orden</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Numero <br>de orden</ion-text></ion-col>\r\n                <ion-col size=\"3\" style=\"font-size:small;\"><ion-text>Nombre</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Factura</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Metros</ion-text></ion-col>\r\n                <ion-col size=\"1.5\" style=\"font-size:small;\"><ion-text>operario</ion-text></ion-col>\r\n                <ion-col size=\"1.5\" style=\"font-size:small;\"><ion-text>ordenado<br>por</ion-text></ion-col>\r\n                <ion-col size=\"2\" style=\"font-size:small;\"><ion-text>suspendido<br>por</ion-text></ion-col>\r\n               </ion-row>\r\n\r\n        <ion-list style=\"text-align: center;\" class=\"ion-align-items-center\">\r\n              <ion-row style=\"border-bottom: 1px solid #151515 !important; border-top: 1px solid #151515 !important;\" *ngFor=\"let producto of respuestaauditoria3 | filter:filterTerm\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.fecha_orden}}<br>{{producto.hora_orden}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>0&&producto.id_inutilizado<10\" color=\"danger\" style=\"color:danger\">0000000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>10&&producto.id_inutilizado<100\" color=\"danger\" style=\"color:danger\">000000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>100&&producto.id_inutilizado<1000\" color=\"danger\" style=\"color:danger\">00000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>1000&&producto.id_inutilizado<10000\" color=\"danger\" style=\"color:danger\">0000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>10000&&producto.id_inutilizado<100000\" color=\"danger\" style=\"color:danger\">000{{producto.id_inutilizado}}</ion-text>\r\n\r\n                </ion-col>\r\n                <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.descripcion}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.documento}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.metrosafraccionar}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.operario_fraccionado}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.nombre_ordenador}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.user_nombre_bloqueador}}</ion-text>\r\n                </ion-col>\r\n                \r\n              </ion-row>\r\n          </ion-list>\r\n       </ion-col>\r\n     </ion-row>\r\n\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n    <ion-card *ngIf=\"this.segmentModel=='fraccionamientosacarrete'\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Auditoria de procesos por fraccionamientos a carrete</ion-card-subtitle>\r\n        <!-- <ion-card-title>Fraccionamientos suspendidos</ion-card-title> -->\r\n      </ion-card-header>\r\n    \r\n      <ion-card-content>\r\n\r\n        <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p style=\"font-size: small;\">Nombre</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo5}}\" (input)=\"CHANGEcampo5($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Código:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo6}}\" (input)=\"CHANGEcampo6($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Fecha:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo7}}\" (input)=\"CHANGEcampo7($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Operario:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo8}}\" (input)=\"CHANGEcampo8($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n          <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button\r\n              [disabled]=\"\r\n              this.campo1==''\r\n              &&this.campo2==''\r\n              &&this.campo3==''\r\n              &&this.campo4==''\r\n              &&this.campo5==''\r\n              &&this.campo6==''\r\n              &&this.campo7==''\r\n              &&this.campo8==''\r\n              \"\r\n               (click)=\"buscar()\">Buscar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n\r\n\r\n\r\n        <ion-row *ngIf=\"this.step=='2'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button (click)=\"volver()\"><ion-icon style=\"color:orange;\" name=\"arrow-back-outline\"></ion-icon>volver</ion-button>\r\n                <!-- <ion-searchbar placeholder=\"Buscar...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar> -->\r\n    \r\n              <ion-row style=\"text-align: center;\">\r\n                <!-- <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>ID <br>de Carrete</ion-text></ion-col> -->\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Codigo<br>Carrete</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Referencia</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Código</ion-text></ion-col>\r\n                <ion-col size=\"2.5\" style=\"font-size:small;\"><ion-text>Nombre</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Metros en<br>carrete</ion-text></ion-col>\r\n                <ion-col size=\"1.5\" style=\"font-size:small;\"><ion-text>Carrete<br>o rollo</ion-text></ion-col>\r\n                <ion-col size=\"2.5\" style=\"font-size:small;\"><ion-text>Bodega</ion-text></ion-col>\r\n                <ion-col size=\"1.5\" style=\"font-size:small;\"><ion-text> </ion-text></ion-col>\r\n               </ion-row>\r\n\r\n        <ion-list style=\"text-align: center;\" class=\"ion-align-items-center\">\r\n              <ion-row style=\"border-bottom: 1px solid #151515 !important; border-top: 1px solid #151515 !important;\" *ngFor=\"let producto of respuestaauditoriaconsultartodosfraccionados | filter:filterTerm\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n\r\n\r\n                <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>0&&producto.id_inutilizado<10\" color=\"danger\" style=\"color:danger\">0000000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>10&&producto.id_inutilizado<100\" color=\"danger\" style=\"color:danger\">000000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>100&&producto.id_inutilizado<1000\" color=\"danger\" style=\"color:danger\">00000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>1000&&producto.id_inutilizado<10000\" color=\"danger\" style=\"color:danger\">0000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>10000&&producto.id_inutilizado<100000\" color=\"danger\" style=\"color:danger\">000{{producto.id_inutilizado}}</ion-text>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.referencia}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.numero_fraccionado}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"2.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.descripcion}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.metrosencarrete}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.carreteorrollo}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"2.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.bodega}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1.5\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-button (click)=\"step3(producto)\" color=\"primary\"><ion-icon style=\"color:white;\" name=\"document-text-outline\"></ion-icon></ion-button>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n          </ion-list>\r\n       </ion-col>\r\n     </ion-row>\r\n\r\n     <ion-row *ngIf=\"this.step=='3'\" class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n\r\n            <ion-button (click)=\"volverastep2()\"><ion-icon style=\"color:green;\" name=\"arrow-back-outline\"></ion-icon>volver</ion-button>\r\n\r\n          <ion-row style=\"text-align: center;\">\r\n            <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Codigo<br>Carrete</ion-text></ion-col>\r\n            <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Referencia</ion-text></ion-col>\r\n            <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Código</ion-text></ion-col>\r\n            <ion-col size=\"3.5\" style=\"font-size:small;\"><ion-text>Nombre</ion-text></ion-col>\r\n            <ion-col size=\"1.5\" style=\"font-size:small;\"><ion-text>Metros<br>Inicio</ion-text></ion-col>\r\n            <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Metros en<br>carrete</ion-text></ion-col>\r\n            <ion-col size=\"1.5\" style=\"font-size:small;\"><ion-text>Carrete<br>o rollo</ion-text></ion-col>\r\n            <ion-col size=\"1.5\" style=\"font-size:small;\"><ion-text>Bodega</ion-text></ion-col>\r\n          </ion-row>\r\n\r\n          <ion-list style=\"text-align: center;\" class=\"ion-align-items-center\">\r\n                <ion-row style=\"border-bottom: 1px solid #151515 !important; border-top: 1px solid #151515 !important;\" *ngFor=\"let producto of respuestaauditoriaconsultarfraccionamientosdeuncarrete | filter:filterTerm\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n\r\n\r\n                  <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                    <ion-text *ngIf=\"producto.id_inutilizado>0&&producto.id_inutilizado<10\" color=\"danger\" style=\"color:danger\">0000000{{producto.id_inutilizado}}</ion-text>\r\n                    <ion-text *ngIf=\"producto.id_inutilizado>10&&producto.id_inutilizado<100\" color=\"danger\" style=\"color:danger\">000000{{producto.id_inutilizado}}</ion-text>\r\n                    <ion-text *ngIf=\"producto.id_inutilizado>100&&producto.id_inutilizado<1000\" color=\"danger\" style=\"color:danger\">00000{{producto.id_inutilizado}}</ion-text>\r\n                    <ion-text *ngIf=\"producto.id_inutilizado>1000&&producto.id_inutilizado<10000\" color=\"danger\" style=\"color:danger\">0000{{producto.id_inutilizado}}</ion-text>\r\n                    <ion-text *ngIf=\"producto.id_inutilizado>10000&&producto.id_inutilizado<100000\" color=\"danger\" style=\"color:danger\">000{{producto.id_inutilizado}}</ion-text>\r\n                  </ion-col>\r\n\r\n                  <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.referencia}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.numero_fraccionado}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"3.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.descripcion}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"1.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.metrosencarrete}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.metrosafraccionar}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"1.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                   <ion-text color=\"danger\" style=\"color:danger\">{{producto.carreteorrollo}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"1.5\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.bodega}}</ion-text>\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n            </ion-list>\r\n\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n        \r\n\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n\r\n    <ion-card *ngIf=\"this.segmentModel=='cambiodecarreteachipa'\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Busqueda de auditoria por cambios de Carrete a Chipa</ion-card-subtitle>\r\n      </ion-card-header>\r\n    \r\n      <ion-card-content>\r\n\r\n        <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p style=\"font-size: small;\">Nombre</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo5}}\" (input)=\"CHANGEcampo5($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Código:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo6}}\" (input)=\"CHANGEcampo6($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Fecha:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo7}}\" (input)=\"CHANGEcampo7($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Operario:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo8}}\" (input)=\"CHANGEcampo8($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n          <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button\r\n              [disabled]=\"  \r\n              this.campo1==''\r\n              &&this.campo2==''\r\n              &&this.campo3==''\r\n              &&this.campo4==''\r\n              &&this.campo5==''\r\n              &&this.campo6==''\r\n              &&this.campo7==''\r\n              &&this.campo8==''\r\n              \"\r\n               (click)=\"buscar()\">Buscar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n\r\n\r\n\r\n        <ion-row *ngIf=\"this.step=='2'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button (click)=\"volver()\"><ion-icon name=\"arrow-back-outline\"></ion-icon>volver</ion-button>\r\n                <!-- <ion-searchbar placeholder=\"Buscar...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar> -->\r\n    \r\n              <ion-row style=\"text-align: center;\">\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Fecha/<br>Hora</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>ID <br>de Carrete</ion-text></ion-col>\r\n                <ion-col size=\"1.5\" style=\"font-size:small;\"><ion-text>Referencia</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Codigo</ion-text></ion-col>\r\n                <ion-col size=\"3\" style=\"font-size:small;\"><ion-text>Nombre</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Metros</ion-text></ion-col>\r\n                <ion-col size=\"1.5\" style=\"font-size:small;\"><ion-text>Operario<br>ordena</ion-text></ion-col>\r\n                <ion-col size=\"2\" style=\"font-size:small;\"><ion-text>Supervisor<br>Autoriza</ion-text></ion-col>\r\n               </ion-row>\r\n\r\n        <ion-list style=\"text-align: center;\" class=\"ion-align-items-center\">\r\n              <ion-row style=\"border-bottom: 1px solid #151515 !important; border-top: 1px solid #151515 !important;\" *ngFor=\"let producto of respuestacambiodecarreteachipa | filter:filterTerm\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.fecha_orden}}<br>{{producto.hora_orden}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>0&&producto.id_inutilizado<10\" color=\"danger\" style=\"color:danger\">0000000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>10&&producto.id_inutilizado<100\" color=\"danger\" style=\"color:danger\">000000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>100&&producto.id_inutilizado<1000\" color=\"danger\" style=\"color:danger\">00000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>1000&&producto.id_inutilizado<10000\" color=\"danger\" style=\"color:danger\">0000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>10000&&producto.id_inutilizado<100000\" color=\"danger\" style=\"color:danger\">000{{producto.id_inutilizado}}</ion-text>\r\n\r\n                </ion-col>\r\n                <ion-col size=\"1.5\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.referencia}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.numero_fraccionado}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"3\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.descripcion}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.metrosencarrete}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.nombre_ordenador}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.cambiado_observacion}}</ion-text>\r\n                </ion-col>\r\n                \r\n              </ion-row>\r\n          </ion-list>\r\n       </ion-col>\r\n     </ion-row>\r\n\r\n        \r\n\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n\r\n\r\n    <ion-card *ngIf=\"this.segmentModel=='ingresodematerial'\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Busqueda de auditoria por ingreso de material</ion-card-subtitle>\r\n      </ion-card-header>\r\n    \r\n      <ion-card-content>\r\n\r\n        <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p style=\"font-size: small;\">Nombre</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo5}}\" (input)=\"CHANGEcampo5($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Código:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo6}}\" (input)=\"CHANGEcampo6($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Fecha:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo7}}\" (input)=\"CHANGEcampo7($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Operario:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo8}}\" (input)=\"CHANGEcampo8($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n          <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button\r\n              [disabled]=\"  \r\n              this.campo1==''\r\n              &&this.campo2==''\r\n              &&this.campo3==''\r\n              &&this.campo4==''\r\n              &&this.campo5==''\r\n              &&this.campo6==''\r\n              &&this.campo7==''\r\n              &&this.campo8==''\r\n              \"\r\n               (click)=\"buscar()\">Buscar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n\r\n\r\n\r\n        <ion-row *ngIf=\"this.step=='2'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button (click)=\"volver()\"><ion-icon name=\"arrow-back-outline\"></ion-icon>volver</ion-button>\r\n                <!-- <ion-searchbar placeholder=\"Buscar...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar> -->\r\n    \r\n              <ion-row style=\"text-align: center;\">\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>ID <br>de Carrete</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Carrete <br>o tramo</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Referencia</ion-text></ion-col>\r\n                <ion-col size=\"2.5\" style=\"font-size:small;\"><ion-text>Codigo</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Doc Ref.<br>ingreso</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Metros<br>Iniciales</ion-text></ion-col>\r\n                <ion-col size=\"2\" style=\"font-size:small;\"><ion-text>Operario</ion-text></ion-col>\r\n                <ion-col size=\"1.5\" style=\"font-size:small;\"><ion-text>Observación</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Fecha/<br>Hora</ion-text></ion-col>\r\n               </ion-row>\r\n\r\n        <ion-list style=\"text-align: center;\" class=\"ion-align-items-center\">\r\n              <ion-row style=\"border-bottom: 1px solid #151515 !important; border-top: 1px solid #151515 !important;\" *ngFor=\"let producto of respuestaauditoriaingresomaterial | filter:filterTerm\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n\r\n                <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text *ngIf=\"producto.id>0&&producto.id<10\" color=\"danger\" style=\"color:danger\">0000000{{producto.id}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id>10&&producto.id<100\" color=\"danger\" style=\"color:danger\">000000{{producto.id}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id>100&&producto.id<1000\" color=\"danger\" style=\"color:danger\">00000{{producto.id}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id>1000&&producto.id<10000\" color=\"danger\" style=\"color:danger\">0000{{producto.id}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id>10000&&producto.id<100000\" color=\"danger\" style=\"color:danger\">000{{producto.id}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.referencia}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.producto}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"2.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.descripcion}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.numerodenotadeentrada}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.metrosencarrete}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.nombre_user}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.observacion}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.fecha_autogenerada}}</ion-text>\r\n                </ion-col>\r\n                \r\n\r\n\r\n              </ion-row>\r\n          </ion-list>\r\n       </ion-col>\r\n     </ion-row>\r\n\r\n        \r\n\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n\r\n    <ion-card *ngIf=\"this.segmentModel=='bloqueoingresodematerial'\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Busqueda de auditoria por bloqueo de ingreso de material</ion-card-subtitle>\r\n      </ion-card-header>\r\n    \r\n      <ion-card-content>\r\n\r\n        <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p style=\"font-size: small;\">Nombre</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo5}}\" (input)=\"CHANGEcampo5($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Código:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo6}}\" (input)=\"CHANGEcampo6($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Fecha:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo7}}\" (input)=\"CHANGEcampo7($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Operario:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo8}}\" (input)=\"CHANGEcampo8($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n          <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button\r\n              [disabled]=\"  \r\n              this.campo1==''\r\n              &&this.campo2==''\r\n              &&this.campo3==''\r\n              &&this.campo4==''\r\n              &&this.campo5==''\r\n              &&this.campo6==''\r\n              &&this.campo7==''\r\n              &&this.campo8==''\r\n              \"\r\n               (click)=\"buscar()\">Buscar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n\r\n\r\n\r\n        <ion-row *ngIf=\"this.step=='2'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button (click)=\"volver()\"><ion-icon name=\"arrow-back-outline\"></ion-icon>volver</ion-button>\r\n                <!-- <ion-searchbar placeholder=\"Buscar...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar> -->\r\n    \r\n              <ion-row style=\"text-align: center;\">\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>ID <br>de Carrete</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Carrete <br>o tramo</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Referencia</ion-text></ion-col>\r\n                <ion-col size=\"2.5\" style=\"font-size:small;\"><ion-text>Codigo</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Doc Ref.<br>ingreso</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Metros<br>Iniciales</ion-text></ion-col>\r\n                <ion-col size=\"2\" style=\"font-size:small;\"><ion-text>Operario</ion-text></ion-col>\r\n                <ion-col size=\"1.5\" style=\"font-size:small;\"><ion-text>Observación</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Fecha/<br>Hora</ion-text></ion-col>\r\n               </ion-row>\r\n\r\n        <ion-list style=\"text-align: center;\" class=\"ion-align-items-center\">\r\n              <ion-row style=\"border-bottom: 1px solid #151515 !important; border-top: 1px solid #151515 !important;\" *ngFor=\"let producto of respuestaauditoriabloqueoingresomaterial | filter:filterTerm\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n\r\n                <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text *ngIf=\"producto.id>0&&producto.id<10\" color=\"danger\" style=\"color:danger\">0000000{{producto.id}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id>10&&producto.id<100\" color=\"danger\" style=\"color:danger\">000000{{producto.id}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id>100&&producto.id<1000\" color=\"danger\" style=\"color:danger\">00000{{producto.id}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id>1000&&producto.id<10000\" color=\"danger\" style=\"color:danger\">0000{{producto.id}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id>10000&&producto.id<100000\" color=\"danger\" style=\"color:danger\">000{{producto.id}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.referencia}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.producto}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"2.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.descripcion}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.numerodenotadeentrada}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.metrosencarrete}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.nombre_user}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.observacion}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.fecha_autogenerada}}</ion-text>\r\n                </ion-col>\r\n                \r\n\r\n\r\n              </ion-row>\r\n          </ion-list>\r\n       </ion-col>\r\n     </ion-row>\r\n\r\n        \r\n\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n\r\n    <ion-card *ngIf=\"this.segmentModel=='entregas'\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Auditoria de procesos por entregas.</ion-card-subtitle>\r\n      </ion-card-header>\r\n    \r\n      <ion-card-content>\r\n\r\n        <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p style=\"font-size: small;\">Nombre</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo5}}\" (input)=\"CHANGEcampo5($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Código:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo6}}\" (input)=\"CHANGEcampo6($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Fecha:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo7}}\" (input)=\"CHANGEcampo7($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Operario:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo8}}\" (input)=\"CHANGEcampo8($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n          <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button\r\n              [disabled]=\"\r\n              this.campo1==''\r\n              &&this.campo2==''\r\n              &&this.campo3==''\r\n              &&this.campo4==''\r\n              &&this.campo5==''\r\n              &&this.campo6==''\r\n              &&this.campo7==''\r\n              &&this.campo8==''\r\n              \"\r\n               (click)=\"buscar()\">Buscar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n\r\n\r\n\r\n        <ion-row *ngIf=\"this.step=='2'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button (click)=\"volver()\"><ion-icon name=\"arrow-back-outline\"></ion-icon>volver</ion-button>\r\n                <!-- <ion-searchbar placeholder=\"Buscar...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar> -->\r\n    \r\n              <ion-row style=\"text-align: center;\">\r\n                <!-- <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>ID <br>de Carrete</ion-text></ion-col> -->\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Referencia</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Codigo</ion-text></ion-col>\r\n                <ion-col size=\"3.5\" style=\"font-size:small;\"><ion-text>Nombre</ion-text></ion-col>\r\n                <ion-col size=\"1.5\" style=\"font-size:small;\"><ion-text>Documento<br>referencia</ion-text></ion-col>\r\n                <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Metros</ion-text></ion-col>\r\n                <ion-col size=\"2.5\" style=\"font-size:small;\"><ion-text>Operario<br>entrega</ion-text></ion-col>\r\n                <ion-col size=\"1.5\" style=\"font-size:small;\"><ion-text>Fecha/<br>Hora</ion-text></ion-col>\r\n               </ion-row>\r\n\r\n        <ion-list style=\"text-align: center;\" class=\"ion-align-items-center\">\r\n              <ion-row style=\"border-bottom: 1px solid #151515 !important; border-top: 1px solid #151515 !important;\" *ngFor=\"let producto of respuestaauditoriaentregas | filter:filterTerm\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n\r\n                <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.referencia}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>0&&producto.id_inutilizado<10\" color=\"danger\" style=\"color:danger\">0000000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>10&&producto.id_inutilizado<100\" color=\"danger\" style=\"color:danger\">000000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>100&&producto.id_inutilizado<1000\" color=\"danger\" style=\"color:danger\">00000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>1000&&producto.id_inutilizado<10000\" color=\"danger\" style=\"color:danger\">0000{{producto.id_inutilizado}}</ion-text>\r\n                  <ion-text *ngIf=\"producto.id_inutilizado>10000&&producto.id_inutilizado<100000\" color=\"danger\" style=\"color:danger\">000{{producto.id_inutilizado}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"3.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.descripcion}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.documento}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.metrosafraccionar}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"2.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.operario_entrega}}</ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"1.5\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                  <ion-text color=\"danger\" style=\"color:danger\">{{producto.fecha_orden}}<br>{{producto.hora_orden}}</ion-text>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n          </ion-list>\r\n       </ion-col>\r\n     </ion-row>\r\n\r\n        \r\n\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n    <ion-card *ngIf=\"this.segmentModel=='novedadesenentrega'\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Auditoria de procesos por novedades de entrega.</ion-card-subtitle>\r\n      </ion-card-header>\r\n    \r\n      <ion-card-content>\r\n\r\n        <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p style=\"font-size: small;\">Nombre</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo5}}\" (input)=\"CHANGEcampo5($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Código:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo6}}\" (input)=\"CHANGEcampo6($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Fecha:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo7}}\" (input)=\"CHANGEcampo7($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-center\">\r\n              <p>Operario:</p>\r\n              <ion-item>\r\n              <ion-input (keyup.enter)=\"buscar()\" type=\"text\" value=\"{{this.campo8}}\" (input)=\"CHANGEcampo8($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n          <ion-row *ngIf=\"this.step=='1'\" class=\"ion-align-items-center\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button\r\n              [disabled]=\"  \r\n              this.campo1==''\r\n              &&this.campo2==''\r\n              &&this.campo3==''\r\n              &&this.campo4==''\r\n              &&this.campo5==''\r\n              &&this.campo6==''\r\n              &&this.campo7==''\r\n              &&this.campo8==''\r\n              \"\r\n               (click)=\"buscar()\">Buscar</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n\r\n\r\n          <ion-row *ngIf=\"this.step=='2'\" class=\"ion-align-items-center\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button (click)=\"volver()\"><ion-icon name=\"arrow-back-outline\"></ion-icon>volver</ion-button>\r\n                  <!-- <ion-searchbar placeholder=\"Buscar...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar> -->\r\n      \r\n                <ion-row style=\"text-align: center;\">\r\n                  <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Referencia</ion-text></ion-col>\r\n                  <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Codigo</ion-text></ion-col>\r\n                  <ion-col size=\"2.5\" style=\"font-size:small;\"><ion-text>Nombre</ion-text></ion-col>\r\n                  <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Documento<br>referencia</ion-text></ion-col>\r\n                  <ion-col size=\"1\" style=\"font-size:small;\"><ion-text>Metros</ion-text></ion-col>\r\n                  <ion-col size=\"1.2\" style=\"font-size:small;\"><ion-text>Operario<br>entrega</ion-text></ion-col>\r\n                  <ion-col size=\"1.1\" style=\"font-size:small;\"><ion-text>Supervisor<br>novedad</ion-text></ion-col>\r\n                  <ion-col size=\"1.2\" style=\"font-size:small;\"><ion-text>Tipo<br>novedad</ion-text></ion-col>\r\n                  <ion-col size=\"1.1\" style=\"font-size:small;\"><ion-text>Observación</ion-text></ion-col>\r\n                  <ion-col size=\"0.9\" style=\"font-size:small;\"><ion-text>Fecha/<br>Hora</ion-text></ion-col>\r\n                 </ion-row>\r\n  \r\n          <ion-list style=\"text-align: center;\" class=\"ion-align-items-center\">\r\n                <ion-row style=\"border-bottom: 1px solid #151515 !important; border-top: 1px solid #151515 !important;\" *ngFor=\"let producto of respuestanovedadesenentrega | filter:filterTerm\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n  \r\n                  <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.referencia}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"1\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                    <ion-text *ngIf=\"producto.id_inutilizado>0&&producto.id_inutilizado<10\" color=\"danger\" style=\"color:danger\">0000000{{producto.id_inutilizado}}</ion-text>\r\n                    <ion-text *ngIf=\"producto.id_inutilizado>10&&producto.id_inutilizado<100\" color=\"danger\" style=\"color:danger\">000000{{producto.id_inutilizado}}</ion-text>\r\n                    <ion-text *ngIf=\"producto.id_inutilizado>100&&producto.id_inutilizado<1000\" color=\"danger\" style=\"color:danger\">00000{{producto.id_inutilizado}}</ion-text>\r\n                    <ion-text *ngIf=\"producto.id_inutilizado>1000&&producto.id_inutilizado<10000\" color=\"danger\" style=\"color:danger\">0000{{producto.id_inutilizado}}</ion-text>\r\n                    <ion-text *ngIf=\"producto.id_inutilizado>10000&&producto.id_inutilizado<100000\" color=\"danger\" style=\"color:danger\">000{{producto.id_inutilizado}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"2.5\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.descripcion}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.documento}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.metrosafraccionar}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"1.2\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.operario_entrega}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"1.1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.operario_entrega_con_novedad}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"1.2\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.tipo_novedad}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"1.1\" class=\"ion-align-items-right ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.observa_entrega_con_novedad}}</ion-text>\r\n                  </ion-col>\r\n                  <ion-col size=\"0.9\" class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.fecha_orden}}<br>{{producto.hora_orden}}</ion-text>\r\n                  </ion-col>\r\n  \r\n                </ion-row>\r\n            </ion-list>\r\n         </ion-col>\r\n       </ion-row>\r\n  \r\n\r\n        \r\n\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n\r\n    <ion-card *ngIf=\"this.segmentModel=='usuarios'\">\r\n\r\n      <ion-segment (ionChange)=\"segmentChanged2($event)\"  \r\n      value=\"creados\"\r\n      scrollable=\"true\"\r\n      mode=\"ios\"\r\n      [(ngModel)]=\"segmentModel2\" \r\n      >\r\n    \r\n        <ion-segment-button value=\"creados\">\r\n          <ion-label>Creados</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"modificados\">\r\n          <ion-label>Modificados</ion-label>\r\n        </ion-segment-button>\r\n      <ion-segment-button value=\"desactivadosactivados\">\r\n        <ion-label>Desactivados/ Desactivados</ion-label>\r\n      </ion-segment-button>\r\n      \r\n    </ion-segment>\r\n    \r\n    <ion-card *ngIf=\"this.segmentModel2=='creados'\">\r\n\r\n\r\n      <section *ngFor=\"let usuarios of respuestaauditoriausuarioscreados\">\r\n\r\n      <ion-row>\r\n          <ion-col style=\"text-align:center;\" size=\"6\">\r\n            <ion-text color=danger>Usuario:</ion-text>\r\n\r\n          </ion-col>\r\n          <ion-col  style=\"text-align:center;\" size=\"6\">\r\n            <ion-text color=danger>Creado Por:</ion-text>\r\n          </ion-col>\r\n      </ion-row>\r\n      \r\n      <ion-row>\r\n\r\n        <ion-col  style=\"text-align:center;\" size=\"6\">\r\n          <ion-text>{{usuarios.nombre}}</ion-text>\r\n        </ion-col>\r\n        <ion-col  style=\"text-align:center;\" size=\"6\">\r\n          <ion-text>{{usuarios.creado_por}}</ion-text>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n      </section>\r\n\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"this.segmentModel2=='modificados'\">\r\n\r\n        <section *ngFor=\"let usuarios of respuestaauditoriausuariosmodificados\">\r\n\r\n\r\n        <ion-row>\r\n\r\n          <ion-col  style=\"text-align:center;\" size=\"6\">\r\n            <ion-text color=danger>Usuario:</ion-text>\r\n\r\n          </ion-col>\r\n          <ion-col  style=\"text-align:center;\" size=\"6\">\r\n            <ion-text color=danger>Modificado Por:</ion-text>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n        \r\n        <ion-row>\r\n\r\n           <ion-col  style=\"text-align:center;\" size=\"6\">\r\n            <ion-text>{{usuarios.nombre}}</ion-text>\r\n          </ion-col>\r\n          <ion-col  style=\"text-align:center;\" size=\"6\">\r\n            <ion-text>{{usuarios.modificado_por}}</ion-text>\r\n\r\n          </ion-col>\r\n          \r\n        </ion-row>\r\n\r\n        </section>  \r\n\r\n\r\n      </ion-card>\r\n\r\n          <ion-card *ngIf=\"this.segmentModel2=='desactivadosactivados'\">\r\n\r\n            <section *ngFor=\"let usuarios of respuestaauditoriausuariosdesactivadosactivados\">\r\n\r\n\r\n            <ion-row>\r\n\r\n              <ion-col  style=\"text-align:center;\" size=\"6\">\r\n                <ion-text color=danger>Usuario:</ion-text>\r\n              </ion-col>\r\n              <ion-col  style=\"text-align:center;\" size=\"6\">\r\n                <ion-text color=danger>desac/act Por:</ion-text>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n            \r\n            <ion-row>\r\n\r\n              <ion-col  style=\"text-align:center;\" size=\"6\">\r\n                <ion-text>{{usuarios.nombre}}</ion-text>\r\n              </ion-col>\r\n              <ion-col  style=\"text-align:center;\" size=\"6\">\r\n                <ion-text>{{usuarios.activado_o_desactivado_por}}</ion-text>\r\n              </ion-col>\r\n              \r\n            </ion-row>\r\n            \r\n\r\n            </section>\r\n      \r\n\r\n           </ion-card>\r\n\r\n      </ion-card>\r\n\r\n\r\n\r\n  </ion-grid>\r\n\r\n\r\n\r\n\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auditoria_auditoria_module_ts.js.map