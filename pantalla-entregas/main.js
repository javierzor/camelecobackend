(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: '',
        redirectTo: 'pantalla-entregas',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then(m => m.FolderPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'ingreso-material',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_ingreso-material_ingreso-material_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ingreso-material/ingreso-material.module */ 603)).then(m => m.IngresoMaterialPageModule)
    },
    {
        path: 'consulta',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_consulta_consulta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./consulta/consulta.module */ 6372)).then(m => m.ConsultaPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule)
    },
    {
        path: 'solicitud-fraccionamiento',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modalsolicitudfracionamiento_modalsolicitudfracionamiento_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_solicitud-fraccionamiento_solicitud-fraccionamiento_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./solicitud-fraccionamiento/solicitud-fraccionamiento.module */ 3498)).then(m => m.SolicitudFraccionamientoPageModule)
    },
    {
        path: 'bloq-orden-fraccionamiento',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modalbloqordenfracionamiento_modalbloqordenfracionamiento_page_ts"), __webpack_require__.e("src_app_bloq-orden-fraccionamiento_bloq-orden-fraccionamiento_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bloq-orden-fraccionamiento/bloq-orden-fraccionamiento.module */ 8253)).then(m => m.BloqOrdenFraccionamientoPageModule)
    },
    {
        path: 'bloq-ingreso-material',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modalbloqingresomaterial_modalbloqingresomaterial_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_bloq-ingreso-material_bloq-ingreso-material_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bloq-ingreso-material/bloq-ingreso-material.module */ 3597)).then(m => m.BloqIngresoMaterialPageModule)
    },
    {
        path: 'fraccionamiento',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_fraccionamiento_fraccionamiento_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./fraccionamiento/fraccionamiento.module */ 5846)).then(m => m.FraccionamientoPageModule)
    },
    {
        path: 'auditoria',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_auditoria_auditoria_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auditoria/auditoria.module */ 2478)).then(m => m.AuditoriaPageModule)
    },
    {
        path: 'crear-roles',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_crear-roles_crear-roles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./crear-roles/crear-roles.module */ 9316)).then(m => m.CrearRolesPageModule)
    },
    {
        path: 'crear-usuarios',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_crear-usuarios_crear-usuarios_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./crear-usuarios/crear-usuarios.module */ 8040)).then(m => m.CrearUsuariosPageModule)
    },
    {
        path: 'crear-referencias',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_crear-referencias_crear-referencias_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./crear-referencias/crear-referencias.module */ 3192)).then(m => m.CrearReferenciasPageModule)
    },
    {
        path: 'de-carrete-a-otro',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modaldecarreteaotro_modaldecarreteaotro_page_ts"), __webpack_require__.e("src_app_de-carrete-a-otro_de-carrete-a-otro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./de-carrete-a-otro/de-carrete-a-otro.module */ 3897)).then(m => m.DeCarreteAOtroPageModule)
    },
    {
        path: 'pantalla-entregas',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pantalla-entregas_pantalla-entregas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pantalla-entregas/pantalla-entregas.module */ 1185)).then(m => m.PantallaEntregasPageModule)
    },
    {
        path: 'entregas',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modalentregas_modalentregas_page_ts"), __webpack_require__.e("src_app_entregas_entregas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./entregas/entregas.module */ 9237)).then(m => m.EntregasPageModule)
    },
    {
        path: 'novedades-supervisor',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modalnovedadessupervisor_modalnovedadessupervisor_page_ts"), __webpack_require__.e("src_app_novedades-supervisor_novedades-supervisor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./novedades-supervisor/novedades-supervisor.module */ 3867)).then(m => m.NovedadesSupervisorPageModule)
    },
    {
        path: 'modalroles',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modalroles_modalroles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modalroles/modalroles.module */ 3552)).then(m => m.ModalrolesPageModule)
    },
    {
        path: 'ingreso-material-detalles',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-qrcode2___ivy_ngcc___fesm2015_ngx-qrcode2_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_ingreso-material-detalles_ingreso-material-detalles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ingreso-material-detalles/ingreso-material-detalles.module */ 1443)).then(m => m.IngresoMaterialDetallesPageModule)
    },
    {
        path: 'modalqr',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-qrcode2___ivy_ngcc___fesm2015_ngx-qrcode2_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modalqr_modalqr_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modalqr/modalqr.module */ 2761)).then(m => m.ModalqrPageModule)
    },
    {
        path: 'modalconsulta',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modalconsulta_modalconsulta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modalconsulta/modalconsulta.module */ 1337)).then(m => m.ModalconsultaPageModule)
    },
    {
        path: 'modalbloqingresomaterial',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modalbloqingresomaterial_modalbloqingresomaterial_page_ts"), __webpack_require__.e("src_app_modalbloqingresomaterial_modalbloqingresomaterial_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modalbloqingresomaterial/modalbloqingresomaterial.module */ 6697)).then(m => m.ModalbloqingresomaterialPageModule)
    },
    {
        path: 'modalsolicitudfracionamiento',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modalsolicitudfracionamiento_modalsolicitudfracionamiento_page_ts"), __webpack_require__.e("src_app_modalsolicitudfracionamiento_modalsolicitudfracionamiento_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modalsolicitudfracionamiento/modalsolicitudfracionamiento.module */ 2289)).then(m => m.ModalsolicitudfracionamientoPageModule)
    },
    {
        path: 'modalbloqordenfracionamiento',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modalbloqordenfracionamiento_modalbloqordenfracionamiento_page_ts"), __webpack_require__.e("src_app_modalbloqordenfracionamiento_modalbloqordenfracionamiento_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modalbloqordenfracionamiento/modalbloqordenfracionamiento.module */ 5582)).then(m => m.ModalbloqordenfracionamientoPageModule)
    },
    {
        path: 'modalfraccionamientoqr',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-qrcode2___ivy_ngcc___fesm2015_ngx-qrcode2_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modalfraccionamientoqr_modalfraccionamientoqr_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modalfraccionamientoqr/modalfraccionamientoqr.module */ 8786)).then(m => m.ModalfraccionamientoqrPageModule)
    },
    {
        path: 'modalentregas',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modalentregas_modalentregas_page_ts"), __webpack_require__.e("src_app_modalentregas_modalentregas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modalentregas/modalentregas.module */ 3440)).then(m => m.ModalentregasPageModule)
    },
    {
        path: 'modalsobremodalentregas',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modalsobremodalentregas_modalsobremodalentregas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modalsobremodalentregas/modalsobremodalentregas.module */ 5699)).then(m => m.ModalsobremodalentregasPageModule)
    },
    {
        path: 'modalnovedadessupervisor',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modalnovedadessupervisor_modalnovedadessupervisor_page_ts"), __webpack_require__.e("src_app_modalnovedadessupervisor_modalnovedadessupervisor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modalnovedadessupervisor/modalnovedadessupervisor.module */ 5023)).then(m => m.ModalnovedadessupervisorPageModule)
    },
    {
        path: 'modaleditarusuario',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modaleditarusuario_modaleditarusuario_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modaleditarusuario/modaleditarusuario.module */ 7487)).then(m => m.ModaleditarusuarioPageModule)
    },
    {
        path: 'modaldecarreteaotro',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modaldecarreteaotro_modaldecarreteaotro_page_ts"), __webpack_require__.e("src_app_modaldecarreteaotro_modaldecarreteaotro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modaldecarreteaotro/modaldecarreteaotro.module */ 3146)).then(m => m.ModaldecarreteaotroPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json.service */ 6987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globalpermisos.service */ 46);








let AppComponent = class AppComponent {
    constructor(globalpermisos, loadingController, json, router) {
        this.globalpermisos = globalpermisos;
        this.loadingController = loadingController;
        this.json = json;
        this.router = router;
        this.appPages = [
            // { title: 'Home', url: 'home', icon: 'planet' },
            { title: 'Ingreso de Material', url: 'ingreso-material', icon: 'add' },
            { title: 'Consulta', url: 'consulta', icon: 'search' },
            { title: 'Solicitud de Fraccionamiento', url: 'solicitud-fraccionamiento', icon: 'archive' },
            { title: 'Bloqueo de Ordenes de fraccionamiento', url: 'bloq-orden-fraccionamiento', icon: 'trash' },
            { title: 'Bloqueo de ingreso de material', url: 'bloq-ingreso-material', icon: 'stop-circle' },
            { title: 'Fraccionamiento', url: 'fraccionamiento', icon: 'cut' },
            { title: 'Auditoria', url: 'auditoria', icon: 'clipboard' },
            { title: 'Creación de Roles', url: 'crear-roles', icon: 'enter' },
            { title: 'Creación de usuarios', url: 'crear-usuarios', icon: 'person-add' },
            { title: 'Creación de referencias', url: 'crear-referencias', icon: 'duplicate' },
            { title: 'Cambio de carrete a Chipa', url: 'de-carrete-a-otro', icon: 'at-circle' },
            { title: 'Pantalla de entregas', url: 'pantalla-entregas', icon: 'checkbox' },
            { title: 'Entregas', url: 'entregas', icon: 'laptop' },
            { title: 'Novedades Supervisor', url: 'novedades-supervisor', icon: 'newspaper' },
        ];
        this.permisos = [];
        this.permisosconsultados = [];
        this.distribuirlotraidodellogin();
    }
    salir() {
        localStorage.clear(); //limpiando cache
        this.router.navigate(['/login']);
    }
    distribuirlotraidodellogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const espereporfavor = yield this.loadingController.create({
                message: 'Porvafor espere...', spinner: 'bubbles', duration: 1000,
            });
            espereporfavor.present();
            this.traidodelloginporelservicio = this.globalpermisos.usuariologeado;
            var data = {
                codigo_qr_acceso: this.traidodelloginporelservicio
            };
            this.json.empieza(data).subscribe((res) => {
                console.log('respuesta de Json empieza en Componente Ppal:', res);
                this.jsonempiezaencompomenteppal = res[0];
                if (res.length == '0') {
                    console.log('El usuario no existe o esta inactivo en el sistema');
                }
                if (res.length > 0 && res[0].activo > 0) {
                    var data = { id_rol: this.jsonempiezaencompomenteppal.id_rol };
                    console.log('el usuario existe y esta activo en el sistema');
                    this.json.rol(data).subscribe((res) => {
                        console.log('respuesta de rol permisos: json.rol en Componente Ppal ', res);
                        this.userinfo = res['detalles'];
                        this.permisos = res['suspermisos'];
                        //reseteando variable para reutilziacion
                        this.permisosconsultados = [];
                        //mapeando la matriz
                        if (this.permisos) {
                            for (var i = 0; i < this.permisos.length; i++) {
                                if (this.permisos[i][0].id_permiso == '1') {
                                    this.permisosconsultados['permisonumero1'] = 'si';
                                }
                                if (this.permisos[i][0].id_permiso == '2') {
                                    this.permisosconsultados['permisonumero2'] = 'si';
                                }
                                if (this.permisos[i][0].id_permiso == '3') {
                                    this.permisosconsultados['permisonumero3'] = 'si';
                                }
                                if (this.permisos[i][0].id_permiso == '4') {
                                    this.permisosconsultados['permisonumero4'] = 'si';
                                }
                                if (this.permisos[i][0].id_permiso == '5') {
                                    this.permisosconsultados['permisonumero5'] = 'si';
                                }
                                if (this.permisos[i][0].id_permiso == '6') {
                                    this.permisosconsultados['permisonumero6'] = 'si';
                                }
                                if (this.permisos[i][0].id_permiso == '7') {
                                    this.permisosconsultados['permisonumero7'] = 'si';
                                }
                                if (this.permisos[i][0].id_permiso == '8') {
                                    this.permisosconsultados['permisonumero8'] = 'si';
                                }
                                if (this.permisos[i][0].id_permiso == '9') {
                                    this.permisosconsultados['permisonumero9'] = 'si';
                                }
                                if (this.permisos[i][0].id_permiso == '10') {
                                    this.permisosconsultados['permisonumero10'] = 'si';
                                }
                                if (this.permisos[i][0].id_permiso == '11') {
                                    this.permisosconsultados['permisonumero11'] = 'si';
                                }
                                if (this.permisos[i][0].id_permiso == '11') {
                                    this.permisosconsultados['permisonumero11'] = 'si';
                                }
                                if (this.permisos[i][0].id_permiso == '12') {
                                    this.permisosconsultados['permisonumero12'] = 'si';
                                }
                                if (this.permisos[i][0].id_permiso == '13') {
                                    this.permisosconsultados['permisonumero13'] = 'si';
                                }
                                if (this.permisos[i][0].id_permiso == '14') {
                                    this.permisosconsultados['permisonumero14'] = 'si';
                                }
                            }
                            this.globalpermisos.mispermisosglobalesenservice = this.permisosconsultados;
                            console.log('permisos', this.globalpermisos.mispermisosglobalesenservice);
                        }
                    }); //cierra la consulta delos permisos
                }
            }); //termina la consulta de intento de login  
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__.GlobalpermisosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json.service */ 6987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 2760);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ 138);
/* harmony import */ var _awesome_cordova_plugins_printer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/printer/ngx */ 7015);












// import { Ng2SearchPipeModule } from 'ng2-search-filter';



let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [
            // Ng2SearchPipeModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule
        ],
        providers: [
            _awesome_cordova_plugins_printer_ngx__WEBPACK_IMPORTED_MODULE_5__.Printer,
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File,
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe,
            _json_service__WEBPACK_IMPORTED_MODULE_0__.JsonService,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 46:
/*!*******************************************!*\
  !*** ./src/app/globalpermisos.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalpermisosService": () => (/* binding */ GlobalpermisosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let GlobalpermisosService = class GlobalpermisosService {
    constructor() {
    }
};
GlobalpermisosService.ctorParameters = () => [];
GlobalpermisosService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], GlobalpermisosService);



/***/ }),

/***/ 6987:
/*!*********************************!*\
  !*** ./src/app/json.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonService": () => (/* binding */ JsonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);



let JsonService = class JsonService {
    constructor(http) {
        this.http = http;
    }
    variasfunciones(data) {
        var url = 'https://cables.cameleco.com/api/variasfunciones';
        return this.http.post(url, data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ "Content-Type": 'application/json' }) });
    }
    rol(data) {
        var url = 'https://cables.cameleco.com/api/rol';
        return this.http.post(url, data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ "Content-Type": 'application/json' }) });
    }
    empiezalogin(data) {
        var url = 'https://cables.cameleco.com/api/empiezalogin';
        return this.http.post(url, data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ "Content-Type": 'application/json' }) });
    }
    empieza(data) {
        var url = 'https://cables.cameleco.com/api/empieza';
        return this.http.post(url, data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ "Content-Type": 'application/json' }) });
    }
    prueba() {
        var url = 'https://cables.cameleco.com/api/prueba';
        return this.http.get(url);
    }
};
JsonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
JsonService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], JsonService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG5cclxuICBjb2xvcjogIzc1NzU3NTtcclxuXHJcbiAgbWluLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBjb2xvcjogIzYxNmU3ZTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gIC0tbWluLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzczODQ5YTtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW5vdGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxufVxyXG5cclxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLy8gZW1waWV6YW4gbGFzIGNsYXNlcyBwZXJzb25hbGl6YWRhcyBwLyBlc3RlIHNvZnRcclxuIl19 */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app >\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu  contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content >\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-list-header style=\"font-family:PeaceSans; color:#ff0110;\"><h1 style=\"font-family:PeaceSans;\"> CAMELECO</h1></ion-list-header>\r\n          <ion-note>www.cameleco.com</ion-note>\r\n\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item (click)=\"distribuirlotraidodellogin()\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\r\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n\r\n        <ion-list id=\"labels-list\">\r\n          <ion-list-header>Sección  Activa</ion-list-header>\r\n          <ion-item  lines=\"none\">\r\n            <ion-icon slot=\"start\" ios=\"play-skip-back-outline\" md=\"play-skip-back-outline\"></ion-icon>\r\n            <ion-label (click)=\"salir()\">Salir</ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet  id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map