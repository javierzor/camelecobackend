(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_crear-roles_crear-roles_module_ts"],{

/***/ 9307:
/*!***********************************************************!*\
  !*** ./src/app/crear-roles/crear-roles-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearRolesPageRoutingModule": () => (/* binding */ CrearRolesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _crear_roles_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-roles.page */ 6774);




const routes = [
    {
        path: '',
        component: _crear_roles_page__WEBPACK_IMPORTED_MODULE_0__.CrearRolesPage
    }
];
let CrearRolesPageRoutingModule = class CrearRolesPageRoutingModule {
};
CrearRolesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CrearRolesPageRoutingModule);



/***/ }),

/***/ 9316:
/*!***************************************************!*\
  !*** ./src/app/crear-roles/crear-roles.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearRolesPageModule": () => (/* binding */ CrearRolesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _crear_roles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-roles-routing.module */ 9307);
/* harmony import */ var _crear_roles_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-roles.page */ 6774);







let CrearRolesPageModule = class CrearRolesPageModule {
};
CrearRolesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _crear_roles_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrearRolesPageRoutingModule
        ],
        declarations: [_crear_roles_page__WEBPACK_IMPORTED_MODULE_1__.CrearRolesPage]
    })
], CrearRolesPageModule);



/***/ }),

/***/ 6774:
/*!*************************************************!*\
  !*** ./src/app/crear-roles/crear-roles.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearRolesPage": () => (/* binding */ CrearRolesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_crear_roles_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./crear-roles.page.html */ 4144);
/* harmony import */ var _crear_roles_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-roles.page.scss */ 3890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalpermisos.service */ 46);
/* harmony import */ var _modalroles_modalroles_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modalroles/modalroles.page */ 1576);















let CrearRolesPage = class CrearRolesPage {
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
        this.consultaroles();
    }
    ionViewDidEnter() {
        this.usuariologeado = this.globalpermisos.usuariologeado;
        if (this.usuariologeado == undefined || this.usuariologeado == null) {
            this.seccionactiva = 'no';
        }
        this.globalpermisos.mispermisosglobalesenservice;
        console.log('en la vista lo que tengo', this.permisosconsultadosencomponenteprincipalYService);
        if (this.globalpermisos.mispermisosglobalesenservice) {
            if (this.globalpermisos.mispermisosglobalesenservice['permisonumero8'] == 'si') {
                this.puedenavegaraqui = 'si';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
            else if (this.globalpermisos.mispermisosglobalesenservice['permisonumero8'] != 'si') {
                this.puedenavegaraqui = 'no';
                console.log('this.puedenavegaraqui:', this.puedenavegaraqui);
            }
        }
    }
    consultaroles() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const espereporfavor = yield this.loadingController.create({
                message: 'Reconsultando Roles', spinner: 'bubbles', duration: 3000,
            });
            espereporfavor.present();
            var todoslosroles = {
                nombre_solicitud: 'todoslosroles'
            };
            this.json.variasfunciones(todoslosroles).subscribe((res) => {
                console.log('respuesta a la solicitud variasfunciones,  todoslosroles', res);
                this.todoslosroles = res;
                espereporfavor.dismiss();
            });
        });
    }
    OnChangeOFnombre(event) {
        console.log('OnChange:', event.target.value);
        this.nombre_rol = event.target.value;
    }
    OnChangeOFdescripcion(event) {
        console.log('OnChange:', event.target.value);
        this.rol_descripcion = event.target.value;
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
    borrarrol(aquitodoslosroles) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('se intentara borrar al rol:', aquitodoslosroles);
            const borrado = yield this.loadingController.create({
                message: 'rol borrado', spinner: 'bubbles', duration: 1700,
            });
            var borrardata = {
                nombre_solicitud: 'borrarrol',
                id_rol: aquitodoslosroles.id_rol
            };
            console.log('intentando enviar data:', borrardata);
            this.json.variasfunciones(borrardata).subscribe((res) => {
                console.log('respuesta a la solicitud variasfunciones,  borrarrol', res);
                this.consultaroles();
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
    guardar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const verifique = yield this.loadingController.create({
                message: 'Verifique la información ingresada', spinner: 'bubbles', duration: 1200,
            });
            var guardarrol = {
                nombre_solicitud: 'guardarrol',
                nombre_rol: this.nombre_rol,
                rol_descripcion: this.rol_descripcion
            };
            console.log('intentando enviar data:', guardarrol);
            this.json.variasfunciones(guardarrol).subscribe((res) => {
                console.log('respuesta a la solicitud variasfunciones,  guardarrol', res);
                this.respuestadeguardarrol = res;
                this.consultaroles();
                if (this.respuestadeguardarrol.id > 0) {
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
    modaldeeditar(aquitodoslosroles) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modalroles_modalroles_page__WEBPACK_IMPORTED_MODULE_5__.ModalrolesPage,
                componentProps: {
                    cssClass: 'my-custom-class',
                    'dataparaelmodal': aquitodoslosroles,
                    // 'apellidos': 'Sánchez',
                    // 'locale': 'es_ES'
                }
            });
            return yield modal.present();
        });
    }
};
CrearRolesPage.ctorParameters = () => [
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
CrearRolesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-crear-roles',
        template: _raw_loader_crear_roles_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_crear_roles_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CrearRolesPage);



/***/ }),

/***/ 3890:
/*!***************************************************!*\
  !*** ./src/app/crear-roles/crear-roles.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".my-custom-class .modal-wrapper {\n  height: 20%;\n  top: 80%;\n  position: absolute;\n  display: block;\n}\n\n.my-custom-class {\n  --background: rgba(34, 34, 34, 0.521);\n  --width: 10%;\n  --max-width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWFyLXJvbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBSUM7RUFDSSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURMIiwiZmlsZSI6ImNyZWFyLXJvbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jdXN0b20tY2xhc3MgLm1vZGFsLXdyYXBwZXIge1xyXG5cclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgdG9wOiA4MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7ICBcclxuIH1cclxuIFxyXG4gXHJcbiAubXktY3VzdG9tLWNsYXNzIHtcclxuICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMzQsIDM0LCAzNCwgMC41MjEpO1xyXG4gICAgIC0td2lkdGg6IDEwJTtcclxuICAgICAtLW1heC13aWR0aDogMTAlO1xyXG4gICB9Il19 */");

/***/ }),

/***/ 4144:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crear-roles/crear-roles.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Creación de Roles</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button href=\"https://cables.cameleco.com/ayuda-crear-roles/\" target=\"_blank\" style=\"text-transform: none; margin-right: 15px;\">Ayuda \r\n          <ion-icon  name=\"information-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n  </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid *ngIf=\"this.seccionactiva=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text  (click)=\"reingresar()\" color=\"danger\" >Sección expirada debe reingresar.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <ion-button  (click)=\"reingresar()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">REINGRESAR</ion-text>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='no'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >No tiene permisos para navegar en esta sección.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid *ngIf=\"this.puedenavegaraqui=='si'\">\r\n\r\n\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Bienvenido.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title>Crear un Rol</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Nombre:</ion-label>\r\n              <ion-input (ionChange)=\"OnChangeOFnombre($event)\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Descripcion:</ion-label>\r\n              <ion-input (ionChange)=\"OnChangeOFdescripcion($event)\"></ion-input>\r\n            </ion-item>            \r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <ion-button [disabled]=\"!this.nombre_rol||!this.rol_descripcion||this.nombre_rol==null||this.rol_descripcion==null||this.nombre_rol==undefined||this.rol_descripcion==undefined||this.nombre_rol==''||this.rol_descripcion==''\" (click)=\"guardar()\">Crear</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n\r\n\r\n\r\n<ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\" class=\"ion-text-center\">\r\n    <ion-text color=\"danger\" >A continuación se listan los roles.</ion-text>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n\r\n<ion-row class=\"ion-align-items-center ion-no-padding\" no-padding>\r\n  <ion-col style=\"text-align: center;\" size=\"3\" class=\"ion-no-padding\" no-padding>\r\n    <ion-text style=\"font-size:small\" color=\"danger\" >Nombre Rol</ion-text>\r\n  </ion-col>\r\n  <ion-col style=\"text-align: center;\" size=\"3\" class=\"ion-no-padding\" no-padding>\r\n    <ion-text style=\"font-size:small\" color=\"danger\" >Desc. Rol</ion-text>\r\n  </ion-col>\r\n  <ion-col style=\"text-align: center;\" size=\"3\" class=\"ion-no-padding\" no-padding>\r\n    <ion-text style=\"font-size:small\" color=\"danger\" >ver/Editar<br>Permisos</ion-text>\r\n  </ion-col>\r\n  <ion-col style=\"text-align: center;\" size=\"3\" class=\"ion-no-padding\" no-padding>\r\n    <ion-text style=\"font-size:small\" color=\"danger\" >Eliminar</ion-text>\r\n  </ion-col>\r\n\r\n</ion-row>\r\n\r\n<ion-row style=\"text-align: center; align-items: center; align-self: center; align-content: center;\" *ngFor=\"let aquitodoslosroles of this.todoslosroles let i= index\" class=\"ion-align-items-center ion-no-padding\" >\r\n  <ion-col style=\"text-align: center;\" size=\"3\"  class=\"ion-no-padding\" no-padding>\r\n    <ion-card class=\"ion-no-padding\" no-padding>\r\n      <ion-text >{{aquitodoslosroles.nombre_rol}}</ion-text>\r\n    </ion-card>\r\n  </ion-col>\r\n  <ion-col style=\"text-align: center;\" size=\"3\"  class=\"ion-no-padding\" no-padding>\r\n    <ion-card class=\"ion-no-padding\" no-padding>\r\n      <ion-input >{{aquitodoslosroles.rol_descripcion}} </ion-input>\r\n    </ion-card>\r\n  </ion-col>\r\n\r\n  <ion-col style=\"text-align: center; align-items: center; align-self: center; align-content: center;\" size=\"3\"  class=\"ion-no-padding\" no-padding>\r\n    <ion-button (click)=\"modaldeeditar(aquitodoslosroles)\">Permisos</ion-button>\r\n  </ion-col>\r\n  <ion-col style=\"text-align: center;\" size=\"3\" class=\"ion-no-padding\" no-padding>\r\n    <a style=\"cursor: pointer;\" (click)=\"borrarrol(aquitodoslosroles)\">\r\n      <ion-icon color=\"danger\" name=\"close-outline\"></ion-icon> \r\n    </a>    \r\n  </ion-col>\r\n\r\n\r\n</ion-row>\r\n\r\n  </ion-grid>\r\n\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_crear-roles_crear-roles_module_ts.js.map