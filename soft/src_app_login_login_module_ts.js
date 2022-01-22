(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalpermisos.service */ 46);
var LoginPage_1;














let LoginPage = LoginPage_1 = class LoginPage {
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
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    preparardataparaintentodeLogin(event) {
        this.dataempieza = event.target.value;
        console.log('informacion tipeada=', this.dataempieza);
    }
    ONCHANGEbodega(event) {
        this.bodega = event.target.value;
        console.log('informacion tipeada=', this.bodega);
    }
    apretando_boton_login() {
        this.intentando_logear = 'si';
    }
    verificarsillenoloscampos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.bodega != null && this.bodega != undefined && this.bodega != '') {
                this.intentoLogin();
            }
            else {
                const camposobligatorios = yield this.loadingController.create({
                    message: 'Ingrese la bodega para continuar.', spinner: 'bubbles', duration: 1100,
                });
                camposobligatorios.present();
            }
        });
    }
    intentoLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const bodeganoexiste = yield this.loadingController.create({
                message: 'La bodega ingresada no existe', spinner: 'bubbles', duration: 1000,
            });
            const verifiqueconexion = yield this.loadingController.create({
                message: 'Porfavor verifique su conexion..', spinner: 'bubbles', duration: 1400,
            });
            const espereporfavor = yield this.loadingController.create({
                message: 'Verificando, espere porfavor...', spinner: 'bubbles', duration: 25000,
            });
            const exitoso = yield this.loadingController.create({
                message: 'Verificación exitosa accediendo.', spinner: 'bubbles', duration: 1200,
            });
            const error = yield this.loadingController.create({
                message: 'Verifique su información porfavor...', spinner: 'bubbles', duration: 1700,
            });
            espereporfavor.present();
            var data = {
                id_inutilizado: this.bodega,
                codigo_qr_acceso: this.dataempieza
            };
            this.json.empiezalogin(data).subscribe((res) => {
                console.log('respuesta de Json empieza:', res);
                this.quieroaccederporfavordigamelarespuestadelaconsulta = res;
                if (res.length == '0') {
                    console.log('El usuario no existe');
                    espereporfavor.dismiss();
                    error.present();
                }
                if (res.length > 0 && res[0].activo > 0) {
                    LoginPage_1.variableglobalintentodelogin = this.dataempieza;
                    this.globalpermisos.usuariologeado = this.dataempieza;
                    this.globalpermisos.id_usuario = this.quieroaccederporfavordigamelarespuestadelaconsulta['0'].id;
                    this.globalpermisos.nombre = this.quieroaccederporfavordigamelarespuestadelaconsulta['0'].nombre;
                    this.globalpermisos.bodega = this.quieroaccederporfavordigamelarespuestadelaconsulta['0'].nombre_bodega;
                    console.log('el usuario fue registrado previamente');
                    this.router.navigate(['/home', this.quieroaccederporfavordigamelarespuestadelaconsulta['0']]);
                    this.myapp.distribuirlotraidodellogin();
                    espereporfavor.dismiss();
                    // exitoso.present();
                }
                else {
                    if (res[0] == 'bodeganoexiste') {
                        espereporfavor.dismiss();
                        bodeganoexiste.present();
                    }
                    else {
                        espereporfavor.dismiss();
                        verifiqueconexion.present();
                    }
                }
            });
            //se pretende iniciar ya sea con el QR o si esta disponible el input de codigo, con el input manual
        });
    }
};
LoginPage.ctorParameters = () => [
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
LoginPage = LoginPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 1339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar style=\"text-align: center;\">\r\n      <h1 style=\"text-align: center; font-family:PeaceSans; color:#ff0110; line-height:0%; \">CAMELECO <br>\r\n        \r\n        <h6 style=\"text-align: center; color:#303030; font-size: small;\">\r\n          www.cameleco.com\r\n        </h6>\r\n      \r\n      </h1>\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n\r\n<ion-grid class=\"todocentrado\">\r\n\r\n  <ion-row style=\"justify-content: center; justify-content: center;\">\r\n<ion-text><h1 color=\"danger\">Inicio de sesión</h1></ion-text>\r\n  </ion-row>\r\n\r\n    <ion-row>\r\n\r\n        <ion-col size=\"9\">\r\n          <ion-card color=\"danger\" >\r\n            <ion-item >\r\n              <ion-label position=\"floating\">Codigo de empleado:</ion-label>\r\n              <ion-input (keyup.enter)=\"verificarsillenoloscampos()\" type=\"tel-local\" (ionChange)=\"preparardataparaintentodeLogin($event)\" color=\"danger\" ></ion-input>\r\n            </ion-item>\r\n          </ion-card>\r\n          <ion-card color=\"danger\" >\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Bodega:</ion-label>\r\n              <ion-input (keyup.enter)=\"verificarsillenoloscampos()\" type=\"tel-local\" (ionChange)=\"ONCHANGEbodega($event)\" color=\"danger\" ></ion-input>\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"3\"   class=\"ion-no-padding\" no-padding lines=\"none\">\r\n          <ion-row>\r\n            <ion-col size=\"4\">\r\n\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n                <ion-button style=\"height: 120%;\">\r\n                  <ion-icon  style=\"  font-size:48px\" name=\"qr-code\"   class=\"ion-no-padding\" no-padding lines=\"none\"></ion-icon>\r\n                </ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-button [disabled]=\"this.bodega==null||this.bodega==undefined||this.bodega==''\" (click)=\"intentoLogin()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">INGRESAR</ion-text>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n</ion-grid>\r\n\r\n\r\n\r\n\r\n\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map