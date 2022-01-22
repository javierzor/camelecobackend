(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_crear-usuarios_crear-usuarios_module_ts"],{

/***/ 6051:
/*!*****************************************************************!*\
  !*** ./src/app/crear-usuarios/crear-usuarios-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearUsuariosPageRoutingModule": () => (/* binding */ CrearUsuariosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _crear_usuarios_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-usuarios.page */ 2686);




const routes = [
    {
        path: '',
        component: _crear_usuarios_page__WEBPACK_IMPORTED_MODULE_0__.CrearUsuariosPage
    }
];
let CrearUsuariosPageRoutingModule = class CrearUsuariosPageRoutingModule {
};
CrearUsuariosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CrearUsuariosPageRoutingModule);



/***/ }),

/***/ 8040:
/*!*********************************************************!*\
  !*** ./src/app/crear-usuarios/crear-usuarios.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearUsuariosPageModule": () => (/* binding */ CrearUsuariosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _crear_usuarios_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-usuarios-routing.module */ 6051);
/* harmony import */ var _crear_usuarios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-usuarios.page */ 2686);







let CrearUsuariosPageModule = class CrearUsuariosPageModule {
};
CrearUsuariosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _crear_usuarios_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrearUsuariosPageRoutingModule
        ],
        declarations: [_crear_usuarios_page__WEBPACK_IMPORTED_MODULE_1__.CrearUsuariosPage]
    })
], CrearUsuariosPageModule);



/***/ }),

/***/ 2686:
/*!*******************************************************!*\
  !*** ./src/app/crear-usuarios/crear-usuarios.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearUsuariosPage": () => (/* binding */ CrearUsuariosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_crear_usuarios_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./crear-usuarios.page.html */ 6555);
/* harmony import */ var _crear_usuarios_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-usuarios.page.scss */ 7833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalpermisos.service */ 46);
/* harmony import */ var _modalroles_modalroles_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modalroles/modalroles.page */ 1576);
/* harmony import */ var _modaleditarusuario_modaleditarusuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modaleditarusuario/modaleditarusuario.page */ 7783);
















let CrearUsuariosPage = class CrearUsuariosPage {
    constructor(modalController, location, router, json, loadingController, navCtrl, loading, route, modalCtrl, datepipe, menuCtrl, myapp, globalpermisos) {
        this.modalController = modalController;
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
        var data = {
            nombre_solicitud: 'todoslosroles'
        };
        this.json.variasfunciones(data).subscribe((res) => {
            console.log('respuesta a la solicitud variasfunciones,  todoslosroles', res);
            this.rolestraidos = res;
        });
        this.consultausuarios();
    } //cierre del dom
    consultausuarios() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const espereporfavor = yield this.loadingController.create({
                message: 'Reconsultando usuarios', spinner: 'bubbles', duration: 5000,
            });
            espereporfavor.present();
            var todoslosusuarios = {
                nombre_solicitud: 'todoslosusuarios'
            };
            this.json.variasfunciones(todoslosusuarios).subscribe((res) => {
                console.log('respuesta a la solicitud variasfunciones,  todoslosusuarios', res);
                this.todoslosusuarios = res;
                espereporfavor.dismiss();
            });
        });
    }
    OnChangeOFcodigo(event) {
        console.log('OnChange:', event.target.value);
        this.codigo_empleado = event.target.value;
    }
    OnChangeOFidentificacion(event) {
        console.log('OnChange:', event.target.value);
        this.identificacion = event.target.value;
    }
    OnChangeOFnombre(event) {
        console.log('OnChange:', event.target.value);
        this.nombre = event.target.value;
    }
    OnChangeOFdependencia(event) {
        console.log('OnChange:', event.target.value);
        this.dependencia = event.target.value;
    }
    OnChangeOFactivo(event) {
        console.log('OnChange:', event.detail.checked);
        this.checkactivo = event.detail.checked;
        if (this.checkactivo == true) {
            this.activo = '1';
        }
        if (this.checkactivo == false) {
            this.activo = '0';
        }
    }
    OnChangeOFrol(event) {
        console.log('OnChange:', event.target.value);
        this.id_rol = event.target.value;
    }
    iraeditar(aquitodoslosusuarios, i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('se editara al usuario', aquitodoslosusuarios);
            const modal = yield this.modalController.create({
                component: _modaleditarusuario_modaleditarusuario_page__WEBPACK_IMPORTED_MODULE_6__.ModaleditarusuarioPage,
                componentProps: {
                    cssClass: 'my-custom-class',
                    'dataparaelmodal': aquitodoslosusuarios,
                }
            });
            modal.onDidDismiss().then((data) => {
                console.log('data', data['data']);
                console.log('data dismissed', data['data'].dismissed);
                if (data['data'].dismissed == 'actualizalalistadeusuarios') {
                    this.consultausuarios();
                }
            });
            console.log('enviando estos datos al modal qr', aquitodoslosusuarios);
            return yield modal.present();
        });
    }
    borrar(aquitodoslosusuarios, i) {
        console.log('se borrara al usuario', aquitodoslosusuarios);
    }
    ionViewDidEnter() {
        this.usuariologeado = this.globalpermisos.usuariologeado;
        if (this.usuariologeado == undefined || this.usuariologeado == null) {
            this.seccionactiva = 'no';
        }
        this.globalpermisos.mispermisosglobalesenservice;
        console.log('en la vista lo que tengo', this.permisosconsultadosencomponenteprincipalYService);
        if (this.globalpermisos.mispermisosglobalesenservice) {
            if (this.globalpermisos.mispermisosglobalesenservice['permisonumero9'] == 'si') {
                this.puedenavegaraqui = 'si';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
            else if (this.globalpermisos.mispermisosglobalesenservice['permisonumero9'] != 'si') {
                this.puedenavegaraqui = 'no';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
        }
    }
    cancelar() {
        this.router.navigate(['/home']);
    }
    reingresar() {
        this.router.navigate(['/login']);
        //vaciando variables usadas en esta vista
        this.seccionactiva = '';
        this.puedenavegaraqui = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    guardar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const verifique = yield this.loadingController.create({
                message: 'Verifique la información ingresada', spinner: 'bubbles', duration: 1200,
            });
            var guardarusuario = {
                nombre_solicitud: 'guardarusuario',
                codigo_empleado: this.codigo_empleado,
                identificacion: this.identificacion,
                nombre: this.nombre,
                dependencia: this.dependencia,
                activo: this.activo,
                id_rol: this.id_rol,
                creado_por: this.globalpermisos.nombre
            };
            console.log('intentando enviar data:', guardarusuario);
            this.json.variasfunciones(guardarusuario).subscribe((res) => {
                console.log('respuesta a la solicitud variasfunciones,  guardarusuario', res);
                this.respuestadeguardarusuario = res;
                this.consultausuarios();
                if (this.respuestadeguardarusuario.id > 0) {
                    console.log('Guardado');
                }
            } //cierrran las lecturas de res
            , //separador de lecturas
            //separador de lecturas
            err => {
                verifique.present();
            } //cierran las lecturas de err
            ); //cierra la suscripcion
        });
    }
    borrarusuario(aquitodoslosusuarios) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('se intentara borrar al usuario:', aquitodoslosusuarios);
            const borrado = yield this.loadingController.create({
                message: 'Usuario borrado', spinner: 'bubbles', duration: 1700,
            });
            var borrardata = {
                nombre_solicitud: 'borrarusuario',
                id: aquitodoslosusuarios.id
            };
            console.log('intentando enviar data:', borrardata);
            this.json.variasfunciones(borrardata).subscribe((res) => {
                console.log('respuesta a la solicitud variasfunciones,  borrarusuario', res);
                this.consultausuarios();
                if (res) {
                    console.log('borrado');
                    borrado.present();
                }
            } //cierrran las lecturas de res
            , //separador de lecturas
            //separador de lecturas
            err => {
            } //cierran las lecturas de err
            ); //cierra la suscripcion
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modalroles_modalroles_page__WEBPACK_IMPORTED_MODULE_5__.ModalrolesPage,
                componentProps: {
                    'nombre': 'Aitor',
                    'apellidos': 'Sánchez',
                    'locale': 'es_ES'
                }
            });
            return yield modal.present();
        });
    }
};
CrearUsuariosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent },
    { type: _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__.GlobalpermisosService }
];
CrearUsuariosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-crear-usuarios',
        template: _raw_loader_crear_usuarios_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_crear_usuarios_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CrearUsuariosPage);



/***/ }),

/***/ 7833:
/*!*********************************************************!*\
  !*** ./src/app/crear-usuarios/crear-usuarios.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhci11c3Vhcmlvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6555:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crear-usuarios/crear-usuarios.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Creación de Usuarios</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button href=\"https://cables.cameleco.com/ayuda-crear-usuarios/\" target=\"_blank\" style=\"text-transform: none; margin-right: 15px;\">Ayuda \r\n          <ion-icon  name=\"information-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n  </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid *ngIf=\"this.seccionactiva=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text  (click)=\"reingresar()\" color=\"danger\" >Sección expirada debe reingresar.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <ion-button  (click)=\"reingresar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">REINGRESAR</ion-text>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >No tiene permisos para navegar en esta sección.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='si'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Bienvenido.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Ingreso de nuevos usuarios.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row class=\"ion-align-items-center\" class=\"ion-no-padding\" no-padding>\r\n      <ion-col size=\"2\" class=\"ion-no-padding\" no-padding>\r\n        <ion-text style=\"font-size:small\" color=\"danger\" >Codigo Empleado</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"ion-no-padding\" no-padding>\r\n        <ion-text style=\"font-size:small\" color=\"danger\" >Identificación</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"ion-no-padding\" no-padding>\r\n        <ion-text style=\"font-size:small\" color=\"danger\" >Nombre</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"ion-no-padding\" no-padding>\r\n        <ion-text style=\"font-size:small\" color=\"danger\" >Dependencia</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"ion-no-padding\" no-padding>\r\n        <ion-text style=\"font-size:small\" color=\"danger\" >Activo</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"ion-no-padding\" no-padding>\r\n        <ion-text style=\"font-size:small\" color=\"danger\" >Asignar rol *</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"2\"  class=\"ion-no-padding\" no-padding>\r\n        <ion-card class=\"ion-no-padding\" no-padding>\r\n        <ion-input placeholder=\"Obligatorio\" (ionChange)=\"OnChangeOFcodigo($event)\"></ion-input>\r\n      </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"2\"  class=\"ion-no-padding\" no-padding>\r\n        <ion-card class=\"ion-no-padding\" no-padding>\r\n          <ion-input (ionChange)=\"OnChangeOFidentificacion($event)\"></ion-input>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"2\"  class=\"ion-no-padding\" no-padding>\r\n        <ion-card class=\"ion-no-padding\" no-padding>\r\n          <ion-input (ionChange)=\"OnChangeOFnombre($event)\"></ion-input>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"2\"  class=\"ion-no-padding\" no-padding>\r\n        <ion-card class=\"ion-no-padding\" no-padding>\r\n          <ion-input (ionChange)=\"OnChangeOFdependencia($event)\"></ion-input>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"2\"  class=\"ion-no-padding\" no-padding>\r\n        <ion-checkbox (ionChange)=\"OnChangeOFactivo($event)\" ></ion-checkbox>\r\n      </ion-col>\r\n      <ion-col size=\"2\"  class=\"ion-no-padding\" no-padding>\r\n        <ion-select placeholder=\"Oligatorio\" (ionChange)=\"OnChangeOFrol($event)\">\r\n          <ion-select-option *ngFor=\"let rol of this.rolestraidos\" value=\"{{rol.id_rol}}\">{{rol.nombre_rol}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"6\" class=\"ion-text-center\">\r\n        <ion-button  (click)=\"guardar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">INGRESAR</ion-text>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-center\">\r\n        <ion-button  (click)=\"cancelar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">CANCELAR</ion-text>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n<!-- abajo empieza el listado de usuarios -->\r\n\r\n<ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\" class=\"ion-text-center\">\r\n    <ion-text color=\"danger\" >A continuación se listan los usuarios.</ion-text>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n\r\n<ion-row class=\"ion-align-items-center\" class=\"ion-no-padding\" no-padding>\r\n  <ion-col size=\"2\" class=\"ion-no-padding\" no-padding>\r\n    <ion-text style=\"font-size:small\" color=\"danger\" >Codigo Empleado</ion-text>\r\n  </ion-col>\r\n  <ion-col size=\"2\" class=\"ion-no-padding\" no-padding>\r\n    <ion-text style=\"font-size:small\" color=\"danger\" >Identificación</ion-text>\r\n  </ion-col>\r\n  <ion-col size=\"2\" class=\"ion-no-padding\" no-padding>\r\n    <ion-text style=\"font-size:small\" color=\"danger\" >Nombre</ion-text>\r\n  </ion-col>\r\n  <ion-col size=\"2\" class=\"ion-no-padding\" no-padding>\r\n    <ion-text style=\"font-size:small\" color=\"danger\" >Dependencia</ion-text>\r\n  </ion-col>\r\n  <ion-col size=\"2\" class=\"ion-no-padding\" no-padding>\r\n    <ion-text style=\"font-size:small\" color=\"danger\" >Activo</ion-text>\r\n  </ion-col>\r\n  <ion-col size=\"1.5\" class=\"ion-no-padding\" no-padding>\r\n    <ion-text style=\"font-size:small\" color=\"danger\" >Id rol</ion-text>\r\n  </ion-col>\r\n  <ion-col size=\"0.5\" class=\"ion-no-padding\" no-padding>\r\n    <ion-text style=\"font-size:small\" color=\"danger\" >E</ion-text>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<ion-row *ngFor=\"let aquitodoslosusuarios of this.todoslosusuarios let i= index\" class=\"ion-align-items-center\">\r\n  <ion-col size=\"2\"  class=\"ion-no-padding\" no-padding>\r\n    <ion-card class=\"ion-no-padding\" no-padding>\r\n    <ion-input readonly=\"true\" value=\"{{aquitodoslosusuarios.codigo_empleado}}\" ></ion-input>\r\n  </ion-card>\r\n  </ion-col>\r\n  <ion-col size=\"2\"  class=\"ion-no-padding\" no-padding>\r\n    <ion-card class=\"ion-no-padding\" no-padding>\r\n      <ion-input readonly=\"true\" value=\"{{aquitodoslosusuarios.identificacion}}\" ></ion-input>\r\n    </ion-card>\r\n  </ion-col>\r\n  <ion-col size=\"2\"  class=\"ion-no-padding\" no-padding>\r\n    <ion-card class=\"ion-no-padding\" no-padding>\r\n      <ion-input readonly=\"true\" value=\"{{aquitodoslosusuarios.nombre}}\" ></ion-input>\r\n    </ion-card>\r\n  </ion-col>\r\n  <ion-col size=\"2\"  class=\"ion-no-padding\" no-padding>\r\n    <ion-card class=\"ion-no-padding\" no-padding>\r\n      <ion-input readonly=\"true\" value=\"{{aquitodoslosusuarios.dependencia}}\" ></ion-input>\r\n    </ion-card>\r\n  </ion-col>\r\n  <ion-col size=\"2\"  class=\"ion-no-padding\" no-padding>\r\n    <ion-checkbox readonly=\"true\" checked *ngIf=\"aquitodoslosusuarios.activo=='1'\" disabled></ion-checkbox>\r\n    <ion-checkbox readonly=\"true\"  *ngIf=\"aquitodoslosusuarios.activo=='0'\" disabled></ion-checkbox>\r\n  </ion-col>\r\n  <ion-col size=\"1\"  class=\"ion-no-padding\" no-padding>\r\n    <ion-input readonly=\"true\" value=\"{{aquitodoslosusuarios.id_rol}}\" ></ion-input>\r\n  </ion-col>\r\n\r\n  <ion-col size=\"1\"  class=\"ion-no-padding\" no-padding>\r\n    <ion-button (click)=\"iraeditar(aquitodoslosusuarios, i)\">\r\n      <a style=\"cursor: pointer;\" >\r\n      <ion-icon color=\"medium\" name=\"create-outline\"></ion-icon> \r\n      </a>\r\n     </ion-button>\r\n    </ion-col>\r\n\r\n\r\n\r\n\r\n  <!-- <ion-col size=\"0.5\"  class=\"ion-no-padding\" no-padding>\r\n        <ion-row class=\"ion-no-padding\" no-padding>\r\n          <ion-col size=\"12\" class=\"ion-no-padding\" no-padding> \r\n            <ion-button>\r\n            <a style=\"cursor: pointer;\" (click)=\"iraeditar(aquitodoslosusuarios, i)\">\r\n            <ion-icon color=\"medium\" name=\"create-outline\"></ion-icon> \r\n            </a>\r\n           </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row size=\"12\" class=\"ion-no-padding\" no-padding>\r\n          <ion-col class=\"ion-no-padding\" no-padding>  \r\n            <a style=\"cursor: pointer;\" (click)=\"borrarusuario(aquitodoslosusuarios)\">\r\n              <ion-icon color=\"danger\" name=\"close-outline\"></ion-icon> \r\n            </a>          \r\n          </ion-col>\r\n        </ion-row>\r\n  </ion-col> -->\r\n</ion-row>\r\n\r\n\r\n\r\n\r\n  </ion-grid>\r\n\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_crear-usuarios_crear-usuarios_module_ts.js.map