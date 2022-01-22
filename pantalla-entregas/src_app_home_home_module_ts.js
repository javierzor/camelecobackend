(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 2267);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalpermisos.service */ 46);













let HomePage = class HomePage {
    constructor(globalpermisos, location, router, json, loadingController, navCtrl, loading, route, modalCtrl, datepipe, menuCtrl) {
        this.globalpermisos = globalpermisos;
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
        console.log('nombre de usuario', this.user_nombre);
        this.route.params.subscribe(params => {
            this.userinfo = params;
            console.log('userinfo route params this.userinfo=', this.userinfo);
            var data = {
                id_rol: this.userinfo.id_rol
            };
            this.json.rol(data).subscribe((res) => {
                console.log('respuesta de rol permisos: json.rol ', res);
                this.rol = res['detalles'];
                this.nombre_rol = res['detalles'].nombre_rol;
                this.rol_descripcion = res['detalles'].rol_descripcion;
                this.permisos = res['suspermisos'];
            }); //cierra la consulta delos permisos
        }); //cerrando la consulta de navegacion entre parametros.
    }
    ionViewWillEnter() {
        this.user_nombre = this.globalpermisos.nombre;
        if (!this.userinfo.id_rol) {
            console.log('el usuario tiene un rol');
            this.menuCtrl.enable(false);
        }
        else {
            this.menuCtrl.enable(true);
        }
    }
    ngOnInit() {
        // como entrando hace una consulta
        // 1) si no hay login en el storage que mande al login
        // 2) si hay login en el storage que reconsulte ese login
        // y lo intente autenticar nuevamente
        // si vuelve a logear y esta activo que lo mantenga aqui
        // si no que lo lleve al login
    }
    salir() {
        localStorage.clear(); //limpiando cache
        this.userinfo = null;
        this.router.navigate(['/login']);
    }
};
HomePage.ctorParameters = () => [
    { type: _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__.GlobalpermisosService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Home</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!this.userinfo.id_rol\">\r\n\r\n  <ion-grid  class=\"ion-no-padding\" no-padding lines=\"none\"> \r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-button   (click)=\"salir()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Debe Reingresar</ion-text>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n<ion-content *ngIf=\"this.userinfo.id_rol\">\r\n\r\n\r\n  <ion-grid  class=\"ion-no-padding\" no-padding lines=\"none\">\r\n    \r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-button *ngIf=\"this.userinfo==null\"  (click)=\"salir()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Debe Reingresar</ion-text>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"3\">\r\n     </ion-col>\r\n     <ion-col style=\"text-align: center;\" size=\"6\">\r\n      <h3 style=\"color:#757575\">¡Bienvenido!</h3>\r\n     </ion-col>\r\n     <ion-col size=\"3\">\r\n    </ion-col>\r\n   </ion-row>\r\n\r\n  <ion-row>\r\n      <ion-col size=\"1\">\r\n      </ion-col>\r\n      <ion-col style=\"text-align: left;\" size=\"10\">\r\n        <ion-text *ngIf=\"this.user_nombre!=undefined&&this.user_nombre!=null&&this.user_nombre!=''\" style=\"color: #404040;\"><ion-text ><strong style=\"border-radius: 8px; background-color: #ff0110; color: #EEEEEE;\">&nbsp;Usuario: </strong>&nbsp; {{this.user_nombre}}</ion-text><strong></strong> </ion-text>\r\n        <br>\r\n        <ion-text style=\"color: #404040;\"><ion-text ><strong style=\"border-radius: 8px; background-color: #ff0110; color: #EEEEEE;\">&nbsp;Rol: </strong>&nbsp; {{this.nombre_rol}}.</ion-text><strong></strong> </ion-text>\r\n        <br>\r\n        <ion-text style=\"color: #404040;\"><ion-text ><strong style=\"border-radius: 8px; background-color: #ff0110; color: #EEEEEE;\">&nbsp;Detalles de su rol: </strong>&nbsp; {{this.rol_descripcion}}.</ion-text><strong></strong> </ion-text>\r\n      <!-- <ion-text style=\"color: #404040\">se listaran los actuales permisos disponibles segun su Rol:</ion-text> -->\r\n      </ion-col>\r\n      <ion-col size=\"1\">\r\n      </ion-col>\r\n  </ion-row>\r\n  <!-- <ion-row  text-wrap *ngFor=\"let permisosdelusuario of permisos; let i = index\"  class=\"ion-no-padding\" no-padding lines=\"none\">\r\n      <ion-col size=\"2\" class=\"ion-no-padding\" no-padding lines=\"none\">\r\n      </ion-col>\r\n      <ion-col  class=\"item-text-wrap\" size=\"8\"  class=\"ion-no-padding\" no-padding lines=\"none\">\r\n        <ion-card >\r\n          <ion-item class=\"ion-no-padding\" no-padding lines=\"none\">\r\n              <ion-text style=\"margin-left: 15px;\" ><ion-text ><strong style=\"border-radius: 8px; background-color: #ff0110; color: #EEEEEE;\">&nbsp;Nombre: </strong>&nbsp; {{permisosdelusuario[0].permiso_nombre}}</ion-text><strong></strong> </ion-text>\r\n          </ion-item>\r\n          <ion-item  class=\"ion-no-padding\" no-padding lines=\"none\">\r\n            <ion-text  style=\" margin-left: 15px;\" ><ion-text ><strong style=\"border-radius: 8px; background-color: #ff0110; color: #EEEEEE;\">&nbsp;descripción: </strong>&nbsp; {{permisosdelusuario[0].permiso_descripcion}}</ion-text></ion-text>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"ion-no-padding\" no-padding lines=\"none\">\r\n      </ion-col>\r\n  </ion-row> -->\r\n\r\n\r\n\r\n\r\n  </ion-grid>\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map