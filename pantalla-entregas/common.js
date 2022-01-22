(self["webpackChunkcablescameleco"] = self["webpackChunkcablescameleco"] || []).push([["common"],{

/***/ 8225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 3150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 2954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 9461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 7330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 2377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 2954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 1269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 4981:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule),
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); };
Ng2SearchPipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-search-filter.js.map

/***/ }),

/***/ 9597:
/*!*****************************************************!*\
  !*** ./src/app/modalconsulta/modalconsulta.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalconsultaPage": () => (/* binding */ ModalconsultaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modalconsulta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modalconsulta.page.html */ 7911);
/* harmony import */ var _modalconsulta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalconsulta.page.scss */ 3328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);






let ModalconsultaPage = class ModalconsultaPage {
    constructor(modalController, navParams) {
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
};
ModalconsultaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams }
];
ModalconsultaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-modalconsulta',
        template: _raw_loader_modalconsulta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modalconsulta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalconsultaPage);



/***/ }),

/***/ 7783:
/*!***************************************************************!*\
  !*** ./src/app/modaleditarusuario/modaleditarusuario.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModaleditarusuarioPage": () => (/* binding */ ModaleditarusuarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modaleditarusuario_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modaleditarusuario.page.html */ 5661);
/* harmony import */ var _modaleditarusuario_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modaleditarusuario.page.scss */ 4742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalpermisos.service */ 46);











let ModaleditarusuarioPage = class ModaleditarusuarioPage {
    constructor(globalpermisos, loadingController, location, json, navParams, router, modalController) {
        this.globalpermisos = globalpermisos;
        this.loadingController = loadingController;
        this.location = location;
        this.json = json;
        this.router = router;
        this.modalController = modalController;
        this.traidopormodalparams = navParams.get('dataparaelmodal');
        this.nombre = this.traidopormodalparams.nombre;
        console.log('recibido por modalparams', this.traidopormodalparams);
        var datatodoslosroleseditarusuario = {
            nombre_solicitud: 'todoslosroleseditarusuario'
        };
        this.json.variasfunciones(datatodoslosroleseditarusuario).subscribe((res) => {
            console.log('respuesta a la solicitud variasfunciones,  todoslosroleseditarusuario', res);
            this.respuestatodoslosroleseditarusuario = res;
        });
    }
    CHANGEnombre(event) {
        console.log('change', event.target.value);
        this.nombre = event.target.value;
    }
    CHANGErol(event) {
        console.log('change', event.target.value);
        this.id_rol = event.target.value;
    }
    CHANGEactivo(event) {
        console.log('change', event.target.value);
        this.activo = event.target.value;
        this.activado_o_desactivado_por = this.globalpermisos.nombre;
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
    funciondismissyactualizalalistadeusuarios() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': 'actualizalalistadeusuarios'
        });
    }
    guardaredicion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.modificado_por = this.globalpermisos.nombre;
            var dataeditarusuariomodal = {
                nombre_solicitud: 'editarusuariomodal',
                id: this.traidopormodalparams.id,
                id_rol: this.id_rol,
                nombre: this.nombre,
                activo: this.activo,
                modificado_por: this.modificado_por,
                activado_o_desactivado_por: this.activado_o_desactivado_por
            };
            this.json.variasfunciones(dataeditarusuariomodal).subscribe((res) => {
                console.log('respuesta a la solicitud variasfunciones,  editarusuariomodal', res);
                this.respuestaeditarusuariomodal = res;
                if (res > 0) {
                    this.funciondismissyactualizalalistadeusuarios();
                }
            });
        });
    }
};
ModaleditarusuarioPage.ctorParameters = () => [
    { type: _globalpermisos_service__WEBPACK_IMPORTED_MODULE_3__.GlobalpermisosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
ModaleditarusuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-modaleditarusuario',
        template: _raw_loader_modaleditarusuario_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modaleditarusuario_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModaleditarusuarioPage);



/***/ }),

/***/ 9430:
/*!***********************************************************************!*\
  !*** ./src/app/modalfraccionamientoqr/modalfraccionamientoqr.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalfraccionamientoqrPage": () => (/* binding */ ModalfraccionamientoqrPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modalfraccionamientoqr_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modalfraccionamientoqr.page.html */ 6127);
/* harmony import */ var _modalfraccionamientoqr_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalfraccionamientoqr.page.scss */ 5442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _awesome_cordova_plugins_printer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/printer/ngx */ 7015);







let ModalfraccionamientoqrPage = class ModalfraccionamientoqrPage {
    constructor(printer, modalController, navParams) {
        this.printer = printer;
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
    cortarydescontardelcarrete() {
        this.printer.print();
    }
};
ModalfraccionamientoqrPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_printer_ngx__WEBPACK_IMPORTED_MODULE_2__.Printer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams }
];
ModalfraccionamientoqrPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-modalfraccionamientoqr',
        template: _raw_loader_modalfraccionamientoqr_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modalfraccionamientoqr_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalfraccionamientoqrPage);



/***/ }),

/***/ 3490:
/*!*****************************************!*\
  !*** ./src/app/modalqr/modalqr.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalqrPage": () => (/* binding */ ModalqrPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modalqr_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modalqr.page.html */ 2491);
/* harmony import */ var _modalqr_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalqr.page.scss */ 8476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);
/* harmony import */ var _awesome_cordova_plugins_printer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/printer/ngx */ 7015);









let ModalqrPage = class ModalqrPage {
    constructor(printer, loadingController, json, router, modalController, navParams) {
        this.printer = printer;
        this.loadingController = loadingController;
        this.json = json;
        this.router = router;
        this.modalController = modalController;
        this.traidopormodalparams = navParams.get('dataparaelmodal');
        console.log('recibido por modalparams', this.traidopormodalparams);
    }
    ngOnInit() {
    }
    dismiss() {
        this.router.navigate(['/ingreso-material']);
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    imprimir() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const guardandoespere = yield this.loadingController.create({
                message: 'Guardando la información, porfavor espere...', spinner: 'bubbles', duration: 15000,
            });
            const materialingresado = yield this.loadingController.create({
                message: 'Material ingresado', spinner: 'bubbles', duration: 1200,
            });
            // guardandoespere.present();
            var updatearelingresodematerialenelmodal = {
                nombre_solicitud: 'updatearelingresodematerialenelmodal',
                tipo_de_qr: 'ingreso-material',
                bodega: this.traidopormodalparams.bodega,
                id: this.traidopormodalparams.createdCode,
                referencia: this.traidopormodalparams.referencia,
                producto: this.traidopormodalparams.producto,
                descripcion: this.traidopormodalparams.descripcion,
                carreteorrollo: this.traidopormodalparams.carreteorrollo,
                numerodenotadeentrada: this.traidopormodalparams.numerodenotadeentrada,
                metrosencarrete: this.traidopormodalparams.metrosencarrete,
                fecha_autogenerada: this.traidopormodalparams.fecha_autogenerada_arreglada,
                nombre_user: this.traidopormodalparams.nombre_user,
                id_user: this.traidopormodalparams.id_user,
                createdCode: this.traidopormodalparams.createdCode
            };
            this.json.variasfunciones(updatearelingresodematerialenelmodal).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                //  guardandoespere.dismiss();
                console.log('respuesta del ingreso de material (pero en el modal), ingreso de material', res);
                if (res > 0) {
                    // materialingresado.present();
                    this.printer.print();
                    this.dismiss();
                }
            }));
        });
    }
};
ModalqrPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_printer_ngx__WEBPACK_IMPORTED_MODULE_3__.Printer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams }
];
ModalqrPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-modalqr',
        template: _raw_loader_modalqr_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modalqr_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalqrPage);



/***/ }),

/***/ 1576:
/*!***********************************************!*\
  !*** ./src/app/modalroles/modalroles.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalrolesPage": () => (/* binding */ ModalrolesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modalroles_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modalroles.page.html */ 7312);
/* harmony import */ var _modalroles_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalroles.page.scss */ 2222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json.service */ 6987);








let ModalrolesPage = class ModalrolesPage {
    constructor(loadingController, json, modalController, navParams) {
        this.loadingController = loadingController;
        this.json = json;
        this.modalController = modalController;
        var dataconocertodoslospermisosparaagregarunoaunrol = {
            nombre_solicitud: 'conocertodoslospermisosparaagregarunoaunrol',
        };
        this.json.variasfunciones(dataconocertodoslospermisosparaagregarunoaunrol).subscribe((res) => {
            this.respuestaconocertodoslospermisosparaagregarunoaunrol = res;
            console.log('conocertodoslospermisosparaagregarunoaunrol', this.respuestaconocertodoslospermisosparaagregarunoaunrol);
        });
        this.traidopormodalparams = navParams.get('dataparaelmodal');
        console.log('recibido por modalparams', this.traidopormodalparams);
        this.id_rol_traido = this.traidopormodalparams.id_rol;
        var permisosdeesterol = {
            nombre_solicitud: 'conocerpermisosdeunrol',
            id_rol: this.traidopormodalparams.id_rol
        };
        this.json.variasfunciones(permisosdeesterol).subscribe((res) => {
            this.esteroltieneestospermisosactualmente = res;
            console.log(this.esteroltieneestospermisosactualmente);
        });
    }
    actualizarlistaderolesdespuesdeborrar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const borrado = yield this.loadingController.create({
                message: 'Actualizando Roles', spinner: 'bubbles', duration: 1100,
            });
            borrado.present();
            this.id_rol_traido = this.traidopormodalparams.id_rol;
            var permisosdeesterol = {
                nombre_solicitud: 'conocerpermisosdeunrol',
                id_rol: this.traidopormodalparams.id_rol
            };
            this.json.variasfunciones(permisosdeesterol).subscribe((res) => {
                this.esteroltieneestospermisosactualmente = res;
                console.log(this.esteroltieneestospermisosactualmente);
                borrado.dismiss();
            });
        });
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
    OnChangeOFpermiso(event) {
        console.log('OnChange:', event.target.value);
        this.permisoaagregar = event.target.value;
        this.permisosagregarsplit = this.permisoaagregar.split(',');
        console.log('permisoaagregar con split:', this.permisosagregarsplit);
        console.log('id_permiso:', this.permisosagregarsplit[0]);
        console.log('nombre_permiso:', this.permisosagregarsplit[1]);
    }
    agregar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const borrado = yield this.loadingController.create({
                message: 'Rol agregado', spinner: 'bubbles', duration: 1300,
            });
            var dataagregarpermiso = {
                nombre_solicitud: 'agregarpermisosaunrol',
                id_rol: this.id_rol_traido,
                id_permiso: this.permisosagregarsplit[0],
                nombre_permiso: this.permisosagregarsplit[1]
            };
            this.json.variasfunciones(dataagregarpermiso).subscribe((res) => {
                console.log(res);
                if (res) {
                    console.log('agregado');
                    borrado.present();
                    this.actualizarlistaderolesdespuesdeborrar();
                }
            });
        });
    }
    borrar(tienestospermisos) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('se intentara borrar al usuario:', tienestospermisos);
            const borrado = yield this.loadingController.create({
                message: 'el permiso ha sido borrado de este rol', spinner: 'bubbles', duration: 2500,
            });
            var borrarroldata = {
                nombre_solicitud: 'borrarpermisoderol',
                id_rol: this.id_rol_traido,
                id_permiso: tienestospermisos.id_permiso
            };
            console.log('intentando enviar data:', borrarroldata);
            this.json.variasfunciones(borrarroldata).subscribe((res) => {
                console.log('respuesta a la solicitud variasfunciones,  borrarpermisoderol', res);
                if (res) {
                    console.log('borrado');
                    borrado.present();
                    this.actualizarlistaderolesdespuesdeborrar();
                }
            } //cierrran las lecturas de res
            , //separador de lecturas
            //separador de lecturas
            err => {
            } //cierran las lecturas de err
            ); //cierra la suscripcion
        });
    }
};
ModalrolesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _json_service__WEBPACK_IMPORTED_MODULE_2__.JsonService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams }
];
ModalrolesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-modalroles',
        template: _raw_loader_modalroles_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modalroles_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalrolesPage);



/***/ }),

/***/ 3328:
/*!*******************************************************!*\
  !*** ./src/app/modalconsulta/modalconsulta.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbGNvbnN1bHRhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 4742:
/*!*****************************************************************!*\
  !*** ./src/app/modaleditarusuario/modaleditarusuario.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbGVkaXRhcnVzdWFyaW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 5442:
/*!*************************************************************************!*\
  !*** ./src/app/modalfraccionamientoqr/modalfraccionamientoqr.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbGZyYWNjaW9uYW1pZW50b3FyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 8476:
/*!*******************************************!*\
  !*** ./src/app/modalqr/modalqr.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbHFyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2222:
/*!*************************************************!*\
  !*** ./src/app/modalroles/modalroles.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".my-custom-class .modal-wrapper {\n  height: 20%;\n  top: 80%;\n  position: absolute;\n  display: block;\n}\n\n.my-custom-class {\n  --background: rgba(34, 34, 34, 0.521);\n  --width: 10%;\n  --max-width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFscm9sZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUcsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBSDs7QUFJQTtFQUNJLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREoiLCJmaWxlIjoibW9kYWxyb2xlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY3VzdG9tLWNsYXNzIC5tb2RhbC13cmFwcGVyIHtcclxuXHJcbiAgIGhlaWdodDogMjAlO1xyXG4gICB0b3A6IDgwJTtcclxuICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgZGlzcGxheTogYmxvY2s7ICBcclxufVxyXG5cclxuXHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIDAuNTIxKTtcclxuICAgIC0td2lkdGg6IDEwJTtcclxuICAgIC0tbWF4LXdpZHRoOiAxMCU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 7911:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalconsulta/modalconsulta.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Lista de Carretes / Rollos disponibles.</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-button  (click)=\"dismiss()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">cerrar</ion-text>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\">\n          <ion-list class=\"ion-align-items-center\">\n              <!-- <ion-item > -->\n                <ion-row style=\"border-bottom: 1px solid #404040 !important; border-top: 1px solid #404040 !important;\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text style=\"font-size:small;\">Código</ion-text>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text style=\"font-size:small;\">Carrete/Rollo</ion-text>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text style=\"font-size:small;\">Metros</ion-text>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text style=\"font-size:small;\">Bodega</ion-text>\n                  </ion-col>\n\n                  \n                </ion-row>\n              <!-- </ion-item> -->\n            </ion-list>\n    </ion-col>\n</ion-row>\n\n\n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\">\n          <ion-list class=\"ion-align-items-center\">\n              <!-- <ion-item > -->\n                <ion-row style=\"border-bottom: 1px solid #151515 !important; border-top: 1px solid #151515 !important;\" *ngFor=\"let producto of traidopormodalparams\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text *ngIf=\"producto.id>0&&producto.id<10\" color=\"danger\" style=\"color:danger\">0000000{{producto.id}}</ion-text>\n                    <ion-text *ngIf=\"producto.id>10&&producto.id<100\" color=\"danger\" style=\"color:danger\">000000{{producto.id}}</ion-text>\n                    <ion-text *ngIf=\"producto.id>100&&producto.id<1000\" color=\"danger\" style=\"color:danger\">00000{{producto.id}}</ion-text>\n                    <ion-text *ngIf=\"producto.id>1000&&producto.id<10000\" color=\"danger\" style=\"color:danger\">0000{{producto.id}}</ion-text>\n                    <ion-text *ngIf=\"producto.id>10000&&producto.id<100000\" color=\"danger\" style=\"color:danger\">000{{producto.id}}</ion-text>\n\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.carreteorrollo}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text color=\"danger\" style=\"color:danger\">{{producto.metrosencarrete}}</ion-text>\n                  </ion-col>\n                  <ion-col size=\"3\" class=\"ion-align-items-center ion-no-padding\" no-padding>\n                    <ion-text *ngIf=\"producto.bodega\" color=\"danger\" style=\"color:danger\">{{producto.bodega}}</ion-text>\n                  </ion-col>\n\n                  \n                </ion-row>\n              <!-- </ion-item> -->\n            </ion-list>\n    </ion-col>\n</ion-row>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ 5661:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modaleditarusuario/modaleditarusuario.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>modaleditarusuario</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-button  (click)=\"dismiss()\" color=\"danger\" >\n          <ion-icon style=\"color:black;\" name=\"close-outline\"></ion-icon>\n          <ion-text style=\"font-weight: 500;\">cerrar</ion-text>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"3\">\n\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-center\">\n        <p>Nombre Usuario:</p><br>\n      <ion-card>\n        <ion-input value=\"{{this.nombre}}\" (ionChange)=\"CHANGEnombre($event)\"></ion-input>\n      </ion-card>\n      </ion-col>\n      <ion-col size=\"3\">\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"2.5\">\n\n      </ion-col>\n      <ion-col size=\"7\" class=\"ion-text-center\">\n      <ion-card>\n        <ion-item>\n          <ion-label>Seleccione un Rol:</ion-label>\n          <ion-select (ionChange)=\"CHANGErol($event)\" placeholder=\"Rol:\">\n            <ion-select-option *ngFor=\"let roles of this.respuestatodoslosroleseditarusuario\" value=\"{{roles.id_rol}}\">{{roles.nombre_rol}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n      </ion-card>\n      </ion-col>\n      <ion-col size=\"2.5\">\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"4\">\n\n      </ion-col>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n\n        <ion-list>\n          <ion-radio-group  (ionChange)=\"CHANGEactivo($event)\">\n            <ion-list-header>\n              <ion-label><strong>Estado:</strong></ion-label>\n            </ion-list-header>\n        \n            <ion-item>\n              <ion-label>Activo</ion-label>\n              <ion-radio slot=\"start\" value=\"1\"></ion-radio>\n            </ion-item>\n        \n            <ion-item>\n              <ion-label>Inactivo</ion-label>\n              <ion-radio slot=\"start\" value=\"0\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n\n        \n    </ion-col>\n    <ion-col size=\"4\">\n\n    </ion-col>\n</ion-row>\n\n        <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-button  (click)=\"guardaredicion()\" color=\"danger\" >\n          <ion-icon style=\"color:green;\" name=\"save-outline\"></ion-icon>          \n          <ion-text style=\"font-weight: 500;\">Guardar</ion-text>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n  </ion-grid>");

/***/ }),

/***/ 6127:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalfraccionamientoqr/modalfraccionamientoqr.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-button  (click)=\"dismiss()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">cerrar</ion-text>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <h2>Fraccionamiento de material</h2>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-card>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"6\" class=\"ion-text-center\">\n        <h3 color=\"danger\" style=\"font-family:PeaceSans; color:red;\">CAMELECO</h3><br>\n        <ngx-qrcode [value]=\"traidopormodalparams.numero_fraccionado\">\n        </ngx-qrcode>\n        <!-- <ion-icon style=\"font-size:256px;\" name=\"qr-code-outline\"></ion-icon> -->\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-left\">\n        <p><strong>Orden de fracc. N:</strong>{{this.traidopormodalparams.numero_fraccionado}}</p>\n        <p><strong>Documento:</strong>{{this.traidopormodalparams.documento}}</p>\n        <p><strong>Codigo:</strong>{{this.traidopormodalparams.producto}}</p>\n        <p><strong>Nombre:</strong>{{this.traidopormodalparams.descripcion}}</p>\n        <p><strong>Metros:</strong>{{this.traidopormodalparams.metrosafraccionar}}</p>\n        <p><strong>Operario:</strong>{{this.traidopormodalparams.operario_fraccionado}}</p>\n        <p><strong>Fecha, Hora:</strong>{{this.traidopormodalparams.fecha_orden}}, {{this.traidopormodalparams.hora_orden}}</p>\n\n      </ion-col>\n    </ion-row>\n   </ion-card>\n\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-button  (click)=\"cortarydescontardelcarrete()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Cortar</ion-text>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ 2491:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalqr/modalqr.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-button  (click)=\"dismiss()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">cerrar</ion-text>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <!-- comentado para que no salga en la impresion\r\n        <h2>Ingreso de material</h2> -->\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-card>\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"6\" class=\"ion-text-center\">\r\n        <h3 color=\"danger\" style=\"font-family:PeaceSans; color:red;\">CAMELECO</h3><br>\r\n        <ngx-qrcode [value]=\"traidopormodalparams.createdCode\">\r\n        </ngx-qrcode>\r\n        <!-- <ion-icon style=\"font-size:256px;\" name=\"qr-code-outline\"></ion-icon> -->\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-left\">\r\n        <p><strong>Carrete N:</strong>{{this.traidopormodalparams.createdCode}}</p>\r\n        <p><strong>Referencia:</strong>{{this.traidopormodalparams.referencia}}</p>\r\n        <p><strong>Codigo:</strong>{{this.traidopormodalparams.producto}}</p>\r\n        <p><strong>Nombre:</strong>{{this.traidopormodalparams.descripcion}}</p>\r\n        <p><strong>Numero d/nota d/Entrada:</strong>{{this.traidopormodalparams.numerodenotadeentrada}}</p>\r\n        <p><strong>Mts en carrete inicio:</strong>{{this.traidopormodalparams.metrosencarrete}}</p>\r\n        <p><strong>Operario ingreso:</strong>{{this.traidopormodalparams.nombre_user}}</p>\r\n        <p><strong>Fecha Hora:</strong>{{this.traidopormodalparams.fecha_autogenerada}}</p>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n   </ion-card>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-button  (click)=\"imprimir()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Imprimir</ion-text>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-button  (click)=\"imprimirviewcontent()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">imprimirviewcontent</ion-text>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row> -->\r\n\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 7312:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modalroles/modalroles.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Modifica los permisos de este Rol</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-text color=\"danger\" >Aquí usted Puede modificar los permisos de este Rol.</ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-button  (click)=\"dismiss()\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">Cerrar</ion-text>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"8\" class=\"ion-text-center\">\r\n        <ion-item>\r\n          <ion-select (ionChange)=\"OnChangeOFpermiso($event)\" interface=\"popover\" placeholder=\"Selec. Permiso\">\r\n            <ion-select-option *ngFor=\"let cadapermiso of respuestaconocertodoslospermisosparaagregarunoaunrol\" value=\"{{cadapermiso.id_permiso}},{{cadapermiso.permiso_nombre}}\">({{cadapermiso.id_permiso}}){{cadapermiso.permiso_nombre}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <!-- <ion-item>\r\n          <ion-label position=\"floating\">ID:</ion-label>\r\n          <ion-input (ionChange)=\"OnChangeOFpermiso($event)\"></ion-input>\r\n        </ion-item> -->\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-center\">\r\n          <ion-button  (click)=\"agregar()\" color=\"danger\" >Agregar\r\n          </ion-button>\r\n    </ion-col>\r\n</ion-row>\r\n\r\n  <ion-row *ngFor=\"let tienestospermisos of this.esteroltieneestospermisosactualmente\" class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <ion-button *ngIf=\"tienestospermisos.nombre_permiso==null||tienestospermisos.nombre_permiso==undefined\"  (click)=\"borrar(tienestospermisos)\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">{{tienestospermisos.id_permiso}}</ion-text>\r\n        &nbsp;&nbsp; <ion-icon name=\"trash-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button *ngIf=\"tienestospermisos.nombre_permiso!=null&&tienestospermisos.nombre_permiso!=undefined\"  (click)=\"borrar(tienestospermisos)\" color=\"danger\" ><ion-text style=\"font-weight: 500;\">{{tienestospermisos.nombre_permiso}}</ion-text>\r\n        &nbsp;&nbsp; <ion-icon name=\"trash-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n  \r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=common.js.map