(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_woo5gi_Desktop_GraphQL_GraphQl_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_woo5gi_Desktop_GraphQL_GraphQl_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_woo5gi_Desktop_GraphQL_GraphQl_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_woo5gi_Desktop_GraphQL_GraphQl_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_woo5gi_Desktop_GraphQL_GraphQl_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?ab5b1");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query/hydration */ "./node_modules/react-query/es/hydration/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\woo5gi\\Desktop\\\uC774\uC57C\uAE30\\GraphQL\\GraphQl\\client\\pages\\_app.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_woo5gi_Desktop_GraphQL_GraphQl_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var App = function App(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var clientRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);

  var getClient = function getClient() {
    if (!clientRef.current) clientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false
        }
      }
    });
    return clientRef.current;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClientProvider, {
    client: getClient(),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_query_hydration__WEBPACK_IMPORTED_MODULE_7__.Hydrate, {
      state: pageProps.dehydratedState,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(App, "67t0qiuNMBMd6ZM7Z7JwZpgZZRM=");

_c = App;

App.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_woo5gi_Desktop_GraphQL_GraphQl_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_woo5gi_Desktop_GraphQL_GraphQl_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref2) {
    var _Component$getInitial;

    var ctx, Component, pageProps;
    return C_Users_woo5gi_Desktop_GraphQL_GraphQl_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx, Component = _ref2.Component;
            _context.next = 3;
            return (_Component$getInitial = Component.getInitialProps) === null || _Component$getInitial === void 0 ? void 0 : _Component$getInitial.call(Component, ctx);

          case 3:
            pageProps = _context.sent;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./index.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./pages/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./index.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./pages/index.scss",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./index.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./pages/index.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./pages/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./pages/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n}\n\n#__next {\n  margin: 10px;\n}\n\nh1 {\n  text-align: center;\n  margin: 20px 0;\n}\n\n.messages {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.messages__input {\n  display: -moz-box;\n  display: flex;\n  width: 80%;\n  max-width: 700px;\n  min-width: 400px;\n  margin: 0 auto 10px;\n}\n.messages__input > * {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.messages__input textarea {\n  padding: 10px;\n  -moz-box-flex: 1;\n       flex-grow: 1;\n}\n.messages__input button {\n  margin-left: 5px;\n  width: 60px;\n}\n.messages__item {\n  position: relative;\n  margin: 10px 0;\n  padding: 15px 15px 5px;\n  border-radius: 5px;\n  border: solid 1px #aaa;\n}\n.messages__item h3 {\n  font-size: 0.85em;\n  margin: 0 0 10px;\n}\n.messages__item sub {\n  font-weight: normal;\n  margin-left: 5px;\n  vertical-align: baseline;\n}\n.messages__item p {\n  margin: 10px 0;\n}\n.messages__item:hover .messages__buttons {\n  display: block;\n}\n.messages__item .messages__input {\n  width: 100%;\n}\n.messages__buttons {\n  display: none;\n  position: absolute;\n  text-align: right;\n  right: 10px;\n  bottom: 10px;\n}", "",{"version":3,"sources":["webpack://index.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;AACF;;AACA;EACE,YAAA;AAEF;;AAAA;EACE,kBAAA;EACA,cAAA;AAGF;;AADA;EACE,gBAAA;EACA,UAAA;EACA,SAAA;AAIF;AAHE;EACE,iBAAA;EAAA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AAKJ;AAJI;EACE,8BAAA;KAAA,2BAAA;UAAA,sBAAA;AAMN;AAJI;EACE,aAAA;EACA,gBAAA;OAAA,YAAA;AAMN;AAJI;EACE,gBAAA;EACA,WAAA;AAMN;AAHE;EACE,kBAAA;EACA,cAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;AAKJ;AAJI;EACE,iBAAA;EACA,gBAAA;AAMN;AAJI;EACE,mBAAA;EACA,gBAAA;EACA,wBAAA;AAMN;AAJI;EACE,cAAA;AAMN;AAJI;EACE,cAAA;AAMN;AAJI;EACE,WAAA;AAMN;AAHE;EACE,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;AAKJ","sourcesContent":["body {\n  margin: 0;\n}\n#__next {\n  margin: 10px;\n}\nh1 {\n  text-align: center;\n  margin: 20px 0;\n}\n.messages {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  &__input {\n    display: flex;\n    width: 80%;\n    max-width: 700px;\n    min-width: 400px;\n    margin: 0 auto 10px;\n    > * {\n      box-sizing: border-box;\n    }\n    textarea {\n      padding: 10px;\n      flex-grow: 1;\n    }\n    button {\n      margin-left: 5px;\n      width: 60px;\n    }\n  }\n  &__item {\n    position: relative;\n    margin: 10px 0;\n    padding: 15px 15px 5px;\n    border-radius: 5px;\n    border: solid 1px #aaa;\n    h3 {\n      font-size: 0.85em;\n      margin: 0 0 10px;\n    }\n    sub {\n      font-weight: normal;\n      margin-left: 5px;\n      vertical-align: baseline;\n    }\n    p {\n      margin: 10px 0;\n    }\n    &:hover .messages__buttons {\n      display: block;\n    }\n    .messages__input {\n      width: 100%;\n    }\n  }\n  &__buttons {\n    display: none;\n    position: absolute;\n    text-align: right;\n    right: 10px;\n    bottom: 10px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/react-query/es/core/focusManager.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-query/es/core/focusManager.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusManager": function() { return /* binding */ focusManager; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribable */ "./node_modules/react-query/es/core/subscribable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/react-query/es/core/utils.js");




var FocusManager = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(FocusManager, _Subscribable);

  function FocusManager() {
    return _Subscribable.apply(this, arguments) || this;
  }

  var _proto = FocusManager.prototype;

  _proto.onSubscribe = function onSubscribe() {
    if (!this.removeEventListener) {
      this.setDefaultEventListener();
    }
  };

  _proto.setEventListener = function setEventListener(setup) {
    var _this = this;

    if (this.removeEventListener) {
      this.removeEventListener();
    }

    this.removeEventListener = setup(function (focused) {
      if (typeof focused === 'boolean') {
        _this.setFocused(focused);
      } else {
        _this.onFocus();
      }
    });
  };

  _proto.setFocused = function setFocused(focused) {
    this.focused = focused;

    if (focused) {
      this.onFocus();
    }
  };

  _proto.onFocus = function onFocus() {
    this.listeners.forEach(function (listener) {
      listener();
    });
  };

  _proto.isFocused = function isFocused() {
    if (typeof this.focused === 'boolean') {
      return this.focused;
    } // document global can be unavailable in react native


    if (typeof document === 'undefined') {
      return true;
    }

    return [undefined, 'visible', 'prerender'].includes(document.visibilityState);
  };

  _proto.setDefaultEventListener = function setDefaultEventListener() {
    var _window;

    if (!_utils__WEBPACK_IMPORTED_MODULE_1__.isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
      this.setEventListener(function (onFocus) {
        var listener = function listener() {
          return onFocus();
        }; // Listen to visibillitychange and focus


        window.addEventListener('visibilitychange', listener, false);
        window.addEventListener('focus', listener, false);
        return function () {
          // Be sure to unsubscribe if a new handler is set
          window.removeEventListener('visibilitychange', listener);
          window.removeEventListener('focus', listener);
        };
      });
    }
  };

  return FocusManager;
}(_subscribable__WEBPACK_IMPORTED_MODULE_2__.Subscribable);

var focusManager = new FocusManager();

/***/ }),

/***/ "./node_modules/react-query/es/core/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-query/es/core/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelledError": function() { return /* reexport safe */ _retryer__WEBPACK_IMPORTED_MODULE_0__.CancelledError; },
/* harmony export */   "QueryCache": function() { return /* reexport safe */ _queryCache__WEBPACK_IMPORTED_MODULE_1__.QueryCache; },
/* harmony export */   "QueryClient": function() { return /* reexport safe */ _queryClient__WEBPACK_IMPORTED_MODULE_2__.QueryClient; },
/* harmony export */   "QueryObserver": function() { return /* reexport safe */ _queryObserver__WEBPACK_IMPORTED_MODULE_3__.QueryObserver; },
/* harmony export */   "QueriesObserver": function() { return /* reexport safe */ _queriesObserver__WEBPACK_IMPORTED_MODULE_4__.QueriesObserver; },
/* harmony export */   "InfiniteQueryObserver": function() { return /* reexport safe */ _infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_5__.InfiniteQueryObserver; },
/* harmony export */   "MutationCache": function() { return /* reexport safe */ _mutationCache__WEBPACK_IMPORTED_MODULE_6__.MutationCache; },
/* harmony export */   "MutationObserver": function() { return /* reexport safe */ _mutationObserver__WEBPACK_IMPORTED_MODULE_7__.MutationObserver; },
/* harmony export */   "setLogger": function() { return /* reexport safe */ _logger__WEBPACK_IMPORTED_MODULE_8__.setLogger; },
/* harmony export */   "notifyManager": function() { return /* reexport safe */ _notifyManager__WEBPACK_IMPORTED_MODULE_9__.notifyManager; },
/* harmony export */   "focusManager": function() { return /* reexport safe */ _focusManager__WEBPACK_IMPORTED_MODULE_10__.focusManager; },
/* harmony export */   "onlineManager": function() { return /* reexport safe */ _onlineManager__WEBPACK_IMPORTED_MODULE_11__.onlineManager; },
/* harmony export */   "hashQueryKey": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_12__.hashQueryKey; },
/* harmony export */   "isError": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_12__.isError; },
/* harmony export */   "isCancelledError": function() { return /* reexport safe */ _retryer__WEBPACK_IMPORTED_MODULE_0__.isCancelledError; }
/* harmony export */ });
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retryer */ "./node_modules/react-query/es/core/retryer.js");
/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryCache */ "./node_modules/react-query/es/core/queryCache.js");
/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queryClient */ "./node_modules/react-query/es/core/queryClient.js");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryObserver */ "./node_modules/react-query/es/core/queryObserver.js");
/* harmony import */ var _queriesObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queriesObserver */ "./node_modules/react-query/es/core/queriesObserver.js");
/* harmony import */ var _infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infiniteQueryObserver */ "./node_modules/react-query/es/core/infiniteQueryObserver.js");
/* harmony import */ var _mutationCache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mutationCache */ "./node_modules/react-query/es/core/mutationCache.js");
/* harmony import */ var _mutationObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mutationObserver */ "./node_modules/react-query/es/core/mutationObserver.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger */ "./node_modules/react-query/es/core/logger.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notifyManager */ "./node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./focusManager */ "./node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./onlineManager */ "./node_modules/react-query/es/core/onlineManager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./node_modules/react-query/es/core/utils.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./types */ "./node_modules/react-query/es/core/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_13__) if(["default","CancelledError","QueryCache","QueryClient","QueryObserver","QueriesObserver","InfiniteQueryObserver","MutationCache","MutationObserver","setLogger","notifyManager","focusManager","onlineManager","hashQueryKey","isError","isCancelledError"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types__WEBPACK_IMPORTED_MODULE_13__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);













 // Types



/***/ }),

/***/ "./node_modules/react-query/es/core/infiniteQueryBehavior.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-query/es/core/infiniteQueryBehavior.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "infiniteQueryBehavior": function() { return /* binding */ infiniteQueryBehavior; },
/* harmony export */   "getNextPageParam": function() { return /* binding */ getNextPageParam; },
/* harmony export */   "getPreviousPageParam": function() { return /* binding */ getPreviousPageParam; },
/* harmony export */   "hasNextPage": function() { return /* binding */ hasNextPage; },
/* harmony export */   "hasPreviousPage": function() { return /* binding */ hasPreviousPage; }
/* harmony export */ });
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retryer */ "./node_modules/react-query/es/core/retryer.js");

function infiniteQueryBehavior() {
  return {
    onFetch: function onFetch(context) {
      context.fetchFn = function () {
        var _context$fetchOptions, _context$fetchOptions2, _context$state$data, _context$state$data2;

        var fetchMore = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.fetchMore;
        var pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
        var isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'forward';
        var isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === 'backward';
        var oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
        var oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
        var newPageParams = oldPageParams;
        var cancelled = false; // Get query function

        var queryFn = context.options.queryFn || function () {
          return Promise.reject('Missing queryFn');
        }; // Create function to fetch a page


        var fetchPage = function fetchPage(pages, manual, param, previous) {
          if (cancelled) {
            return Promise.reject('Cancelled');
          }

          if (typeof param === 'undefined' && !manual && pages.length) {
            return Promise.resolve(pages);
          }

          var queryFnContext = {
            queryKey: context.queryKey,
            pageParam: param
          };
          var queryFnResult = queryFn(queryFnContext);
          var promise = Promise.resolve(queryFnResult).then(function (page) {
            newPageParams = previous ? [param].concat(newPageParams) : [].concat(newPageParams, [param]);
            return previous ? [page].concat(pages) : [].concat(pages, [page]);
          });

          if ((0,_retryer__WEBPACK_IMPORTED_MODULE_0__.isCancelable)(queryFnResult)) {
            var promiseAsAny = promise;
            promiseAsAny.cancel = queryFnResult.cancel;
          }

          return promise;
        };

        var promise; // Fetch first page?

        if (!oldPages.length) {
          promise = fetchPage([]);
        } // Fetch next page?
        else if (isFetchingNextPage) {
            var manual = typeof pageParam !== 'undefined';
            var param = manual ? pageParam : getNextPageParam(context.options, oldPages);
            promise = fetchPage(oldPages, manual, param);
          } // Fetch previous page?
          else if (isFetchingPreviousPage) {
              var _manual = typeof pageParam !== 'undefined';

              var _param = _manual ? pageParam : getPreviousPageParam(context.options, oldPages);

              promise = fetchPage(oldPages, _manual, _param, true);
            } // Refetch pages
            else {
                (function () {
                  newPageParams = [];
                  var manual = typeof context.options.getNextPageParam === 'undefined'; // Fetch first page

                  promise = fetchPage([], manual, oldPageParams[0]); // Fetch remaining pages

                  var _loop = function _loop(i) {
                    promise = promise.then(function (pages) {
                      var param = manual ? oldPageParams[i] : getNextPageParam(context.options, pages);
                      return fetchPage(pages, manual, param);
                    });
                  };

                  for (var i = 1; i < oldPages.length; i++) {
                    _loop(i);
                  }
                })();
              }

        var finalPromise = promise.then(function (pages) {
          return {
            pages: pages,
            pageParams: newPageParams
          };
        });
        var finalPromiseAsAny = finalPromise;

        finalPromiseAsAny.cancel = function () {
          cancelled = true;

          if ((0,_retryer__WEBPACK_IMPORTED_MODULE_0__.isCancelable)(promise)) {
            promise.cancel();
          }
        };

        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
}
/**
 * Checks if there is a next page.
 * Returns `undefined` if it cannot be determined.
 */

function hasNextPage(options, pages) {
  if (options.getNextPageParam && Array.isArray(pages)) {
    var nextPageParam = getNextPageParam(options, pages);
    return typeof nextPageParam !== 'undefined' && nextPageParam !== null && nextPageParam !== false;
  }
}
/**
 * Checks if there is a previous page.
 * Returns `undefined` if it cannot be determined.
 */

function hasPreviousPage(options, pages) {
  if (options.getPreviousPageParam && Array.isArray(pages)) {
    var previousPageParam = getPreviousPageParam(options, pages);
    return typeof previousPageParam !== 'undefined' && previousPageParam !== null && previousPageParam !== false;
  }
}

/***/ }),

/***/ "./node_modules/react-query/es/core/infiniteQueryObserver.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-query/es/core/infiniteQueryObserver.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfiniteQueryObserver": function() { return /* binding */ InfiniteQueryObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryObserver */ "./node_modules/react-query/es/core/queryObserver.js");
/* harmony import */ var _infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infiniteQueryBehavior */ "./node_modules/react-query/es/core/infiniteQueryBehavior.js");




var InfiniteQueryObserver = /*#__PURE__*/function (_QueryObserver) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(InfiniteQueryObserver, _QueryObserver);

  // Type override
  // Type override
  // Type override
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  function InfiniteQueryObserver(client, options) {
    return _QueryObserver.call(this, client, options) || this;
  }

  var _proto = InfiniteQueryObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    _QueryObserver.prototype.bindMethods.call(this);

    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  };

  _proto.setOptions = function setOptions(options) {
    _QueryObserver.prototype.setOptions.call(this, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options, {
      behavior: (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.infiniteQueryBehavior)()
    }));
  };

  _proto.getOptimisticResult = function getOptimisticResult(options) {
    options.behavior = (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.infiniteQueryBehavior)();
    return _QueryObserver.prototype.getOptimisticResult.call(this, options);
  };

  _proto.fetchNextPage = function fetchNextPage(options) {
    return this.fetch({
      cancelRefetch: true,
      throwOnError: options == null ? void 0 : options.throwOnError,
      meta: {
        fetchMore: {
          direction: 'forward',
          pageParam: options == null ? void 0 : options.pageParam
        }
      }
    });
  };

  _proto.fetchPreviousPage = function fetchPreviousPage(options) {
    return this.fetch({
      cancelRefetch: true,
      throwOnError: options == null ? void 0 : options.throwOnError,
      meta: {
        fetchMore: {
          direction: 'backward',
          pageParam: options == null ? void 0 : options.pageParam
        }
      }
    });
  };

  _proto.createResult = function createResult(query, options) {
    var _state$data, _state$data2, _state$fetchMeta, _state$fetchMeta$fetc, _state$fetchMeta2, _state$fetchMeta2$fet;

    var state = query.state;

    var result = _QueryObserver.prototype.createResult.call(this, query, options);

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, result, {
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.hasNextPage)(options, (_state$data = state.data) == null ? void 0 : _state$data.pages),
      hasPreviousPage: (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_2__.hasPreviousPage)(options, (_state$data2 = state.data) == null ? void 0 : _state$data2.pages),
      isFetchingNextPage: state.isFetching && ((_state$fetchMeta = state.fetchMeta) == null ? void 0 : (_state$fetchMeta$fetc = _state$fetchMeta.fetchMore) == null ? void 0 : _state$fetchMeta$fetc.direction) === 'forward',
      isFetchingPreviousPage: state.isFetching && ((_state$fetchMeta2 = state.fetchMeta) == null ? void 0 : (_state$fetchMeta2$fet = _state$fetchMeta2.fetchMore) == null ? void 0 : _state$fetchMeta2$fet.direction) === 'backward'
    });
  };

  return InfiniteQueryObserver;
}(_queryObserver__WEBPACK_IMPORTED_MODULE_3__.QueryObserver);

/***/ }),

/***/ "./node_modules/react-query/es/core/logger.js":
/*!****************************************************!*\
  !*** ./node_modules/react-query/es/core/logger.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLogger": function() { return /* binding */ getLogger; },
/* harmony export */   "setLogger": function() { return /* binding */ setLogger; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/react-query/es/core/utils.js");
 // TYPES

// FUNCTIONS
var logger = console || {
  error: _utils__WEBPACK_IMPORTED_MODULE_0__.noop,
  warn: _utils__WEBPACK_IMPORTED_MODULE_0__.noop,
  log: _utils__WEBPACK_IMPORTED_MODULE_0__.noop
};
function getLogger() {
  return logger;
}
function setLogger(newLogger) {
  logger = newLogger;
}

/***/ }),

/***/ "./node_modules/react-query/es/core/mutation.js":
/*!******************************************************!*\
  !*** ./node_modules/react-query/es/core/mutation.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mutation": function() { return /* binding */ Mutation; },
/* harmony export */   "getDefaultState": function() { return /* binding */ getDefaultState; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./node_modules/react-query/es/core/logger.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifyManager */ "./node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retryer */ "./node_modules/react-query/es/core/retryer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/react-query/es/core/utils.js");




 // TYPES

// CLASS
var Mutation = /*#__PURE__*/function () {
  function Mutation(config) {
    this.options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, config.defaultOptions, config.options);
    this.mutationId = config.mutationId;
    this.mutationCache = config.mutationCache;
    this.observers = [];
    this.state = config.state || getDefaultState();
  }

  var _proto = Mutation.prototype;

  _proto.setState = function setState(state) {
    this.dispatch({
      type: 'setState',
      state: state
    });
  };

  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  };

  _proto.removeObserver = function removeObserver(observer) {
    this.observers = this.observers.filter(function (x) {
      return x !== observer;
    });
  };

  _proto.cancel = function cancel() {
    if (this.retryer) {
      this.retryer.cancel();
      return this.retryer.promise.then(_utils__WEBPACK_IMPORTED_MODULE_1__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_1__.noop);
    }

    return Promise.resolve();
  };

  _proto.continue = function _continue() {
    if (this.retryer) {
      this.retryer.continue();
      return this.retryer.promise;
    }

    return this.execute();
  };

  _proto.execute = function execute() {
    var _this = this;

    var data;
    var restored = this.state.status === 'loading';
    var promise = Promise.resolve();

    if (!restored) {
      this.dispatch({
        type: 'loading',
        variables: this.options.variables
      });
      promise = promise.then(function () {
        return _this.options.onMutate == null ? void 0 : _this.options.onMutate(_this.state.variables);
      }).then(function (context) {
        if (context !== _this.state.context) {
          _this.dispatch({
            type: 'loading',
            context: context,
            variables: _this.state.variables
          });
        }
      });
    }

    return promise.then(function () {
      return _this.executeMutation();
    }).then(function (result) {
      data = result; // Notify cache callback

      _this.mutationCache.config.onSuccess == null ? void 0 : _this.mutationCache.config.onSuccess(data, _this.state.variables, _this.state.context, _this);
    }).then(function () {
      return _this.options.onSuccess == null ? void 0 : _this.options.onSuccess(data, _this.state.variables, _this.state.context);
    }).then(function () {
      return _this.options.onSettled == null ? void 0 : _this.options.onSettled(data, null, _this.state.variables, _this.state.context);
    }).then(function () {
      _this.dispatch({
        type: 'success',
        data: data
      });

      return data;
    }).catch(function (error) {
      // Notify cache callback
      _this.mutationCache.config.onError == null ? void 0 : _this.mutationCache.config.onError(error, _this.state.variables, _this.state.context, _this); // Log error

      (0,_logger__WEBPACK_IMPORTED_MODULE_2__.getLogger)().error(error);
      return Promise.resolve().then(function () {
        return _this.options.onError == null ? void 0 : _this.options.onError(error, _this.state.variables, _this.state.context);
      }).then(function () {
        return _this.options.onSettled == null ? void 0 : _this.options.onSettled(undefined, error, _this.state.variables, _this.state.context);
      }).then(function () {
        _this.dispatch({
          type: 'error',
          error: error
        });

        throw error;
      });
    });
  };

  _proto.executeMutation = function executeMutation() {
    var _this2 = this,
        _this$options$retry;

    this.retryer = new _retryer__WEBPACK_IMPORTED_MODULE_3__.Retryer({
      fn: function fn() {
        if (!_this2.options.mutationFn) {
          return Promise.reject('No mutationFn found');
        }

        return _this2.options.mutationFn(_this2.state.variables);
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: 'failed'
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: 'pause'
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: 'continue'
        });
      },
      retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
      retryDelay: this.options.retryDelay
    });
    return this.retryer.promise;
  };

  _proto.dispatch = function dispatch(action) {
    var _this3 = this;

    this.state = reducer(this.state, action);
    _notifyManager__WEBPACK_IMPORTED_MODULE_4__.notifyManager.batch(function () {
      _this3.observers.forEach(function (observer) {
        observer.onMutationUpdate(action);
      });

      _this3.mutationCache.notify(_this3);
    });
  };

  return Mutation;
}();
function getDefaultState() {
  return {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    isPaused: false,
    status: 'idle',
    variables: undefined
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'failed':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        failureCount: state.failureCount + 1
      });

    case 'pause':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        isPaused: true
      });

    case 'continue':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        isPaused: false
      });

    case 'loading':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        context: action.context,
        data: undefined,
        error: null,
        isPaused: false,
        status: 'loading',
        variables: action.variables
      });

    case 'success':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        data: action.data,
        error: null,
        status: 'success',
        isPaused: false
      });

    case 'error':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
        data: undefined,
        error: action.error,
        failureCount: state.failureCount + 1,
        isPaused: false,
        status: 'error'
      });

    case 'setState':
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, action.state);

    default:
      return state;
  }
}

/***/ }),

/***/ "./node_modules/react-query/es/core/mutationCache.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-query/es/core/mutationCache.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationCache": function() { return /* binding */ MutationCache; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyManager */ "./node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutation */ "./node_modules/react-query/es/core/mutation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/react-query/es/core/utils.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "./node_modules/react-query/es/core/subscribable.js");




 // TYPES

// CLASS
var MutationCache = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(MutationCache, _Subscribable);

  function MutationCache(config) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.mutations = [];
    _this.mutationId = 0;
    return _this;
  }

  var _proto = MutationCache.prototype;

  _proto.build = function build(client, options, state) {
    var mutation = new _mutation__WEBPACK_IMPORTED_MODULE_1__.Mutation({
      mutationCache: this,
      mutationId: ++this.mutationId,
      options: client.defaultMutationOptions(options),
      state: state,
      defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : undefined
    });
    this.add(mutation);
    return mutation;
  };

  _proto.add = function add(mutation) {
    this.mutations.push(mutation);
    this.notify(mutation);
  };

  _proto.remove = function remove(mutation) {
    this.mutations = this.mutations.filter(function (x) {
      return x !== mutation;
    });
    mutation.cancel();
    this.notify(mutation);
  };

  _proto.clear = function clear() {
    var _this2 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      _this2.mutations.forEach(function (mutation) {
        _this2.remove(mutation);
      });
    });
  };

  _proto.getAll = function getAll() {
    return this.mutations;
  };

  _proto.find = function find(filters) {
    if (typeof filters.exact === 'undefined') {
      filters.exact = true;
    }

    return this.mutations.find(function (mutation) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.matchMutation)(filters, mutation);
    });
  };

  _proto.findAll = function findAll(filters) {
    return this.mutations.filter(function (mutation) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.matchMutation)(filters, mutation);
    });
  };

  _proto.notify = function notify(mutation) {
    var _this3 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      _this3.listeners.forEach(function (listener) {
        listener(mutation);
      });
    });
  };

  _proto.onFocus = function onFocus() {
    this.resumePausedMutations();
  };

  _proto.onOnline = function onOnline() {
    this.resumePausedMutations();
  };

  _proto.resumePausedMutations = function resumePausedMutations() {
    var pausedMutations = this.mutations.filter(function (x) {
      return x.state.isPaused;
    });
    return _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      return pausedMutations.reduce(function (promise, mutation) {
        return promise.then(function () {
          return mutation.continue().catch(_utils__WEBPACK_IMPORTED_MODULE_3__.noop);
        });
      }, Promise.resolve());
    });
  };

  return MutationCache;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "./node_modules/react-query/es/core/mutationObserver.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-query/es/core/mutationObserver.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationObserver": function() { return /* binding */ MutationObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _mutation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutation */ "./node_modules/react-query/es/core/mutation.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager */ "./node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "./node_modules/react-query/es/core/subscribable.js");





// CLASS
var MutationObserver = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(MutationObserver, _Subscribable);

  function MutationObserver(client, options) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.client = client;

    _this.setOptions(options);

    _this.bindMethods();

    _this.updateResult();

    return _this;
  }

  var _proto = MutationObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  };

  _proto.setOptions = function setOptions(options) {
    this.options = this.client.defaultMutationOptions(options);
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      var _this$currentMutation;

      (_this$currentMutation = this.currentMutation) == null ? void 0 : _this$currentMutation.removeObserver(this);
    }
  };

  _proto.onMutationUpdate = function onMutationUpdate(action) {
    this.updateResult(); // Determine which callbacks to trigger

    var notifyOptions = {
      listeners: true
    };

    if (action.type === 'success') {
      notifyOptions.onSuccess = true;
    } else if (action.type === 'error') {
      notifyOptions.onError = true;
    }

    this.notify(notifyOptions);
  };

  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };

  _proto.reset = function reset() {
    this.currentMutation = undefined;
    this.updateResult();
    this.notify({
      listeners: true
    });
  };

  _proto.mutate = function mutate(variables, options) {
    this.mutateOptions = options;

    if (this.currentMutation) {
      this.currentMutation.removeObserver(this);
    }

    this.currentMutation = this.client.getMutationCache().build(this.client, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.options, {
      variables: typeof variables !== 'undefined' ? variables : this.options.variables
    }));
    this.currentMutation.addObserver(this);
    return this.currentMutation.execute();
  };

  _proto.updateResult = function updateResult() {
    var state = this.currentMutation ? this.currentMutation.state : (0,_mutation__WEBPACK_IMPORTED_MODULE_2__.getDefaultState)();
    this.currentResult = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
      isLoading: state.status === 'loading',
      isSuccess: state.status === 'success',
      isError: state.status === 'error',
      isIdle: state.status === 'idle',
      mutate: this.mutate,
      reset: this.reset
    });
  };

  _proto.notify = function notify(options) {
    var _this2 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      // First trigger the mutate callbacks
      if (_this2.mutateOptions) {
        if (options.onSuccess) {
          _this2.mutateOptions.onSuccess == null ? void 0 : _this2.mutateOptions.onSuccess(_this2.currentResult.data, _this2.currentResult.variables, _this2.currentResult.context);
          _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(_this2.currentResult.data, null, _this2.currentResult.variables, _this2.currentResult.context);
        } else if (options.onError) {
          _this2.mutateOptions.onError == null ? void 0 : _this2.mutateOptions.onError(_this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
          _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(undefined, _this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
        }
      } // Then trigger the listeners


      if (options.listeners) {
        _this2.listeners.forEach(function (listener) {
          listener(_this2.currentResult);
        });
      }
    });
  };

  return MutationObserver;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "./node_modules/react-query/es/core/notifyManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-query/es/core/notifyManager.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notifyManager": function() { return /* binding */ notifyManager; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/react-query/es/core/utils.js");
 // TYPES

// CLASS
var NotifyManager = /*#__PURE__*/function () {
  function NotifyManager() {
    this.queue = [];
    this.transactions = 0;

    this.notifyFn = function (callback) {
      callback();
    };

    this.batchNotifyFn = function (callback) {
      callback();
    };
  }

  var _proto = NotifyManager.prototype;

  _proto.batch = function batch(callback) {
    this.transactions++;
    var result = callback();
    this.transactions--;

    if (!this.transactions) {
      this.flush();
    }

    return result;
  };

  _proto.schedule = function schedule(callback) {
    var _this = this;

    if (this.transactions) {
      this.queue.push(callback);
    } else {
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.scheduleMicrotask)(function () {
        _this.notifyFn(callback);
      });
    }
  }
  /**
   * All calls to the wrapped function will be batched.
   */
  ;

  _proto.batchCalls = function batchCalls(callback) {
    var _this2 = this;

    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this2.schedule(function () {
        callback.apply(void 0, args);
      });
    };
  };

  _proto.flush = function flush() {
    var _this3 = this;

    var queue = this.queue;
    this.queue = [];

    if (queue.length) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.scheduleMicrotask)(function () {
        _this3.batchNotifyFn(function () {
          queue.forEach(function (callback) {
            _this3.notifyFn(callback);
          });
        });
      });
    }
  }
  /**
   * Use this method to set a custom notify function.
   * This can be used to for example wrap notifications with `React.act` while running tests.
   */
  ;

  _proto.setNotifyFunction = function setNotifyFunction(fn) {
    this.notifyFn = fn;
  }
  /**
   * Use this method to set a custom function to batch notifications together into a single tick.
   * By default React Query will use the batch function provided by ReactDOM or React Native.
   */
  ;

  _proto.setBatchNotifyFunction = function setBatchNotifyFunction(fn) {
    this.batchNotifyFn = fn;
  };

  return NotifyManager;
}(); // SINGLETON


var notifyManager = new NotifyManager();

/***/ }),

/***/ "./node_modules/react-query/es/core/onlineManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-query/es/core/onlineManager.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onlineManager": function() { return /* binding */ onlineManager; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribable */ "./node_modules/react-query/es/core/subscribable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/react-query/es/core/utils.js");




var OnlineManager = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(OnlineManager, _Subscribable);

  function OnlineManager() {
    return _Subscribable.apply(this, arguments) || this;
  }

  var _proto = OnlineManager.prototype;

  _proto.onSubscribe = function onSubscribe() {
    if (!this.removeEventListener) {
      this.setDefaultEventListener();
    }
  };

  _proto.setEventListener = function setEventListener(setup) {
    var _this = this;

    if (this.removeEventListener) {
      this.removeEventListener();
    }

    this.removeEventListener = setup(function (online) {
      if (typeof online === 'boolean') {
        _this.setOnline(online);
      } else {
        _this.onOnline();
      }
    });
  };

  _proto.setOnline = function setOnline(online) {
    this.online = online;

    if (online) {
      this.onOnline();
    }
  };

  _proto.onOnline = function onOnline() {
    this.listeners.forEach(function (listener) {
      listener();
    });
  };

  _proto.isOnline = function isOnline() {
    if (typeof this.online === 'boolean') {
      return this.online;
    }

    if (typeof navigator === 'undefined' || typeof navigator.onLine === 'undefined') {
      return true;
    }

    return navigator.onLine;
  };

  _proto.setDefaultEventListener = function setDefaultEventListener() {
    var _window;

    if (!_utils__WEBPACK_IMPORTED_MODULE_1__.isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
      this.setEventListener(function (onOnline) {
        var listener = function listener() {
          return onOnline();
        }; // Listen to online


        window.addEventListener('online', listener, false);
        window.addEventListener('offline', listener, false);
        return function () {
          // Be sure to unsubscribe if a new handler is set
          window.removeEventListener('online', listener);
          window.removeEventListener('offline', listener);
        };
      });
    }
  };

  return OnlineManager;
}(_subscribable__WEBPACK_IMPORTED_MODULE_2__.Subscribable);

var onlineManager = new OnlineManager();

/***/ }),

/***/ "./node_modules/react-query/es/core/queriesObserver.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-query/es/core/queriesObserver.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueriesObserver": function() { return /* binding */ QueriesObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/react-query/es/core/utils.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyManager */ "./node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _queryObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryObserver */ "./node_modules/react-query/es/core/queryObserver.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "./node_modules/react-query/es/core/subscribable.js");





var QueriesObserver = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(QueriesObserver, _Subscribable);

  function QueriesObserver(client, queries) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.queries = [];
    _this.result = [];
    _this.observers = [];
    _this.observersMap = {};

    if (queries) {
      _this.setQueries(queries);
    }

    return _this;
  }

  var _proto = QueriesObserver.prototype;

  _proto.onSubscribe = function onSubscribe() {
    var _this2 = this;

    if (this.listeners.length === 1) {
      this.observers.forEach(function (observer) {
        observer.subscribe(function (result) {
          _this2.onUpdate(observer, result);
        });
      });
    }
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      this.destroy();
    }
  };

  _proto.destroy = function destroy() {
    this.listeners = [];
    this.observers.forEach(function (observer) {
      observer.destroy();
    });
  };

  _proto.setQueries = function setQueries(queries, notifyOptions) {
    this.queries = queries;
    this.updateObservers(notifyOptions);
  };

  _proto.getCurrentResult = function getCurrentResult() {
    return this.result;
  };

  _proto.getOptimisticResult = function getOptimisticResult(queries) {
    var _this3 = this;

    return queries.map(function (options) {
      var defaultedOptions = _this3.client.defaultQueryObserverOptions(options);

      return _this3.getObserver(defaultedOptions).getOptimisticResult(defaultedOptions);
    });
  };

  _proto.getObserver = function getObserver(options) {
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    return this.observersMap[defaultedOptions.queryHash] || new _queryObserver__WEBPACK_IMPORTED_MODULE_1__.QueryObserver(this.client, defaultedOptions);
  };

  _proto.updateObservers = function updateObservers(notifyOptions) {
    var _this4 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      var hasIndexChange = false;
      var prevObservers = _this4.observers;
      var prevOberversMap = _this4.observersMap;
      var newResult = [];
      var newObservers = [];
      var newObserversMap = {};

      _this4.queries.forEach(function (options, i) {
        var defaultedOptions = _this4.client.defaultQueryObserverOptions(options);

        var queryHash = defaultedOptions.queryHash;

        var observer = _this4.getObserver(defaultedOptions);

        if (prevOberversMap[queryHash]) {
          observer.setOptions(defaultedOptions, notifyOptions);
        }

        if (observer !== prevObservers[i]) {
          hasIndexChange = true;
        }

        newObservers.push(observer);
        newResult.push(observer.getCurrentResult());
        newObserversMap[queryHash] = observer;
      });

      if (prevObservers.length === newObservers.length && !hasIndexChange) {
        return;
      }

      _this4.observers = newObservers;
      _this4.observersMap = newObserversMap;
      _this4.result = newResult;

      if (!_this4.hasListeners()) {
        return;
      }

      (0,_utils__WEBPACK_IMPORTED_MODULE_3__.difference)(prevObservers, newObservers).forEach(function (observer) {
        observer.destroy();
      });
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__.difference)(newObservers, prevObservers).forEach(function (observer) {
        observer.subscribe(function (result) {
          _this4.onUpdate(observer, result);
        });
      });

      _this4.notify();
    });
  };

  _proto.onUpdate = function onUpdate(observer, result) {
    var index = this.observers.indexOf(observer);

    if (index !== -1) {
      this.result = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.replaceAt)(this.result, index, result);
      this.notify();
    }
  };

  _proto.notify = function notify() {
    var _this5 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(function () {
      _this5.listeners.forEach(function (listener) {
        listener(_this5.result);
      });
    });
  };

  return QueriesObserver;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "./node_modules/react-query/es/core/query.js":
/*!***************************************************!*\
  !*** ./node_modules/react-query/es/core/query.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": function() { return /* binding */ Query; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/react-query/es/core/utils.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifyManager */ "./node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger */ "./node_modules/react-query/es/core/logger.js");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retryer */ "./node_modules/react-query/es/core/retryer.js");




 // TYPES

// CLASS
var Query = /*#__PURE__*/function () {
  function Query(config) {
    this.defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.cache = config.cache;
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.initialState = config.state || this.getDefaultState(this.options);
    this.state = this.initialState;
    this.scheduleGc();
  }

  var _proto = Query.prototype;

  _proto.setOptions = function setOptions(options) {
    var _this$options$cacheTi;

    this.options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.defaultOptions, options); // Default to 5 minutes if not cache time is set

    this.cacheTime = Math.max(this.cacheTime || 0, (_this$options$cacheTi = this.options.cacheTime) != null ? _this$options$cacheTi : 5 * 60 * 1000);
  };

  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };

  _proto.scheduleGc = function scheduleGc() {
    var _this = this;

    this.clearGcTimeout();

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isValidTimeout)(this.cacheTime)) {
      this.gcTimeout = setTimeout(function () {
        _this.optionalRemove();
      }, this.cacheTime);
    }
  };

  _proto.clearGcTimeout = function clearGcTimeout() {
    clearTimeout(this.gcTimeout);
    this.gcTimeout = undefined;
  };

  _proto.optionalRemove = function optionalRemove() {
    if (!this.observers.length && !this.state.isFetching) {
      this.cache.remove(this);
    }
  };

  _proto.setData = function setData(updater, options) {
    var _this$options$isDataE, _this$options;

    var prevData = this.state.data; // Get the new data

    var data = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.functionalUpdate)(updater, prevData); // Use prev data if an isDataEqual function is defined and returns `true`

    if ((_this$options$isDataE = (_this$options = this.options).isDataEqual) == null ? void 0 : _this$options$isDataE.call(_this$options, prevData, data)) {
      data = prevData;
    } else if (this.options.structuralSharing !== false) {
      // Structurally share data between prev and new data if needed
      data = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.replaceEqualDeep)(prevData, data);
    } // Set data and mark it as cached


    this.dispatch({
      data: data,
      type: 'success',
      dataUpdatedAt: options == null ? void 0 : options.updatedAt
    });
    return data;
  };

  _proto.setState = function setState(state, setStateOptions) {
    this.dispatch({
      type: 'setState',
      state: state,
      setStateOptions: setStateOptions
    });
  };

  _proto.cancel = function cancel(options) {
    var _this$retryer;

    var promise = this.promise;
    (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
    return promise ? promise.then(_utils__WEBPACK_IMPORTED_MODULE_1__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_1__.noop) : Promise.resolve();
  };

  _proto.destroy = function destroy() {
    this.clearGcTimeout();
    this.cancel({
      silent: true
    });
  };

  _proto.reset = function reset() {
    this.destroy();
    this.setState(this.initialState);
  };

  _proto.isActive = function isActive() {
    return this.observers.some(function (observer) {
      return observer.options.enabled !== false;
    });
  };

  _proto.isFetching = function isFetching() {
    return this.state.isFetching;
  };

  _proto.isStale = function isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function (observer) {
      return observer.getCurrentResult().isStale;
    });
  };

  _proto.isStaleByTime = function isStaleByTime(staleTime) {
    if (staleTime === void 0) {
      staleTime = 0;
    }

    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0,_utils__WEBPACK_IMPORTED_MODULE_1__.timeUntilStale)(this.state.dataUpdatedAt, staleTime);
  };

  _proto.onFocus = function onFocus() {
    var _this$retryer2;

    var observer = this.observers.find(function (x) {
      return x.shouldFetchOnWindowFocus();
    });

    if (observer) {
      observer.refetch();
    } // Continue fetch if currently paused


    (_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2.continue();
  };

  _proto.onOnline = function onOnline() {
    var _this$retryer3;

    var observer = this.observers.find(function (x) {
      return x.shouldFetchOnReconnect();
    });

    if (observer) {
      observer.refetch();
    } // Continue fetch if currently paused


    (_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3.continue();
  };

  _proto.addObserver = function addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer); // Stop the query from being garbage collected

      this.clearGcTimeout();
      this.cache.notify({
        type: 'observerAdded',
        query: this,
        observer: observer
      });
    }
  };

  _proto.removeObserver = function removeObserver(observer) {
    if (this.observers.indexOf(observer) !== -1) {
      this.observers = this.observers.filter(function (x) {
        return x !== observer;
      });

      if (!this.observers.length) {
        // If the transport layer does not support cancellation
        // we'll let the query continue so the result can be cached
        if (this.retryer) {
          if (this.retryer.isTransportCancelable) {
            this.retryer.cancel({
              revert: true
            });
          } else {
            this.retryer.cancelRetry();
          }
        }

        if (this.cacheTime) {
          this.scheduleGc();
        } else {
          this.cache.remove(this);
        }
      }

      this.cache.notify({
        type: 'observerRemoved',
        query: this,
        observer: observer
      });
    }
  };

  _proto.getObserversCount = function getObserversCount() {
    return this.observers.length;
  };

  _proto.invalidate = function invalidate() {
    if (!this.state.isInvalidated) {
      this.dispatch({
        type: 'invalidate'
      });
    }
  };

  _proto.fetch = function fetch(options, fetchOptions) {
    var _this2 = this,
        _this$options$behavio,
        _context$fetchOptions;

    if (this.state.isFetching) {
      if (this.state.dataUpdatedAt && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) {
        // Silently cancel current fetch if the user wants to cancel refetches
        this.cancel({
          silent: true
        });
      } else if (this.promise) {
        // Return current promise if we are already fetching
        return this.promise;
      }
    } // Update config if passed, otherwise the config from the last execution is used


    if (options) {
      this.setOptions(options);
    } // Use the options from the first observer with a query function if no function is found.
    // This can happen when the query is hydrated or created with setQueryData.


    if (!this.options.queryFn) {
      var observer = this.observers.find(function (x) {
        return x.options.queryFn;
      });

      if (observer) {
        this.setOptions(observer.options);
      }
    }

    var queryKey = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.ensureQueryKeyArray)(this.queryKey); // Create query function context

    var queryFnContext = {
      queryKey: queryKey,
      pageParam: undefined
    }; // Create fetch function

    var fetchFn = function fetchFn() {
      return _this2.options.queryFn ? _this2.options.queryFn(queryFnContext) : Promise.reject('Missing queryFn');
    }; // Trigger behavior hook


    var context = {
      fetchOptions: fetchOptions,
      options: this.options,
      queryKey: queryKey,
      state: this.state,
      fetchFn: fetchFn
    };

    if ((_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch) {
      var _this$options$behavio2;

      (_this$options$behavio2 = this.options.behavior) == null ? void 0 : _this$options$behavio2.onFetch(context);
    } // Store state in case the current fetch needs to be reverted


    this.revertState = this.state; // Set to fetching state if not already in it

    if (!this.state.isFetching || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
      var _context$fetchOptions2;

      this.dispatch({
        type: 'fetch',
        meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
      });
    } // Try to fetch the data


    this.retryer = new _retryer__WEBPACK_IMPORTED_MODULE_2__.Retryer({
      fn: context.fetchFn,
      onSuccess: function onSuccess(data) {
        _this2.setData(data); // Notify cache callback


        _this2.cache.config.onSuccess == null ? void 0 : _this2.cache.config.onSuccess(data, _this2); // Remove query after fetching if cache time is 0

        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onError: function onError(error) {
        // Optimistically update state if needed
        if (!((0,_retryer__WEBPACK_IMPORTED_MODULE_2__.isCancelledError)(error) && error.silent)) {
          _this2.dispatch({
            type: 'error',
            error: error
          });
        }

        if (!(0,_retryer__WEBPACK_IMPORTED_MODULE_2__.isCancelledError)(error)) {
          // Notify cache callback
          _this2.cache.config.onError == null ? void 0 : _this2.cache.config.onError(error, _this2); // Log error

          (0,_logger__WEBPACK_IMPORTED_MODULE_3__.getLogger)().error(error);
        } // Remove query after fetching if cache time is 0


        if (_this2.cacheTime === 0) {
          _this2.optionalRemove();
        }
      },
      onFail: function onFail() {
        _this2.dispatch({
          type: 'failed'
        });
      },
      onPause: function onPause() {
        _this2.dispatch({
          type: 'pause'
        });
      },
      onContinue: function onContinue() {
        _this2.dispatch({
          type: 'continue'
        });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay
    });
    this.promise = this.retryer.promise;
    return this.promise;
  };

  _proto.dispatch = function dispatch(action) {
    var _this3 = this;

    this.state = this.reducer(this.state, action);
    _notifyManager__WEBPACK_IMPORTED_MODULE_4__.notifyManager.batch(function () {
      _this3.observers.forEach(function (observer) {
        observer.onQueryUpdate(action);
      });

      _this3.cache.notify({
        query: _this3,
        type: 'queryUpdated',
        action: action
      });
    });
  };

  _proto.getDefaultState = function getDefaultState(options) {
    var data = typeof options.initialData === 'function' ? options.initialData() : options.initialData;
    var hasInitialData = typeof options.initialData !== 'undefined';
    var initialDataUpdatedAt = hasInitialData ? typeof options.initialDataUpdatedAt === 'function' ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    var hasData = typeof data !== 'undefined';
    return {
      data: data,
      dataUpdateCount: 0,
      dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchMeta: null,
      isFetching: false,
      isInvalidated: false,
      isPaused: false,
      status: hasData ? 'success' : 'idle'
    };
  };

  _proto.reducer = function reducer(state, action) {
    var _action$meta, _action$dataUpdatedAt;

    switch (action.type) {
      case 'failed':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          fetchFailureCount: state.fetchFailureCount + 1
        });

      case 'pause':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          isPaused: true
        });

      case 'continue':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          isPaused: false
        });

      case 'fetch':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          fetchFailureCount: 0,
          fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
          isFetching: true,
          isPaused: false,
          status: !state.dataUpdatedAt ? 'loading' : state.status
        });

      case 'success':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          data: action.data,
          dataUpdateCount: state.dataUpdateCount + 1,
          dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
          error: null,
          fetchFailureCount: 0,
          isFetching: false,
          isInvalidated: false,
          isPaused: false,
          status: 'success'
        });

      case 'error':
        var error = action.error;

        if ((0,_retryer__WEBPACK_IMPORTED_MODULE_2__.isCancelledError)(error) && error.revert && this.revertState) {
          return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.revertState);
        }

        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          error: error,
          errorUpdateCount: state.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: state.fetchFailureCount + 1,
          isFetching: false,
          isPaused: false,
          status: 'error'
        });

      case 'invalidate':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, {
          isInvalidated: true
        });

      case 'setState':
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, state, action.state);

      default:
        return state;
    }
  };

  return Query;
}();

/***/ }),

/***/ "./node_modules/react-query/es/core/queryCache.js":
/*!********************************************************!*\
  !*** ./node_modules/react-query/es/core/queryCache.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryCache": function() { return /* binding */ QueryCache; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/react-query/es/core/utils.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query */ "./node_modules/react-query/es/core/query.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager */ "./node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribable */ "./node_modules/react-query/es/core/subscribable.js");





// CLASS
var QueryCache = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(QueryCache, _Subscribable);

  function QueryCache(config) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.config = config || {};
    _this.queries = [];
    _this.queriesMap = {};
    return _this;
  }

  var _proto = QueryCache.prototype;

  _proto.build = function build(client, options, state) {
    var _options$queryHash;

    var queryKey = options.queryKey;
    var queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : (0,_utils__WEBPACK_IMPORTED_MODULE_1__.hashQueryKeyByOptions)(queryKey, options);
    var query = this.get(queryHash);

    if (!query) {
      query = new _query__WEBPACK_IMPORTED_MODULE_2__.Query({
        cache: this,
        queryKey: queryKey,
        queryHash: queryHash,
        options: client.defaultQueryOptions(options),
        state: state,
        defaultOptions: client.getQueryDefaults(queryKey)
      });
      this.add(query);
    }

    return query;
  };

  _proto.add = function add(query) {
    if (!this.queriesMap[query.queryHash]) {
      this.queriesMap[query.queryHash] = query;
      this.queries.push(query);
      this.notify({
        type: 'queryAdded',
        query: query
      });
    }
  };

  _proto.remove = function remove(query) {
    var queryInMap = this.queriesMap[query.queryHash];

    if (queryInMap) {
      query.destroy();
      this.queries = this.queries.filter(function (x) {
        return x !== query;
      });

      if (queryInMap === query) {
        delete this.queriesMap[query.queryHash];
      }

      this.notify({
        type: 'queryRemoved',
        query: query
      });
    }
  };

  _proto.clear = function clear() {
    var _this2 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this2.queries.forEach(function (query) {
        _this2.remove(query);
      });
    });
  };

  _proto.get = function get(queryHash) {
    return this.queriesMap[queryHash];
  };

  _proto.getAll = function getAll() {
    return this.queries;
  };

  _proto.find = function find(arg1, arg2) {
    var _parseFilterArgs = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs[0];

    if (typeof filters.exact === 'undefined') {
      filters.exact = true;
    }

    return this.queries.find(function (query) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.matchQuery)(filters, query);
    });
  };

  _proto.findAll = function findAll(arg1, arg2) {
    var _parseFilterArgs2 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs2[0];

    return filters ? this.queries.filter(function (query) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.matchQuery)(filters, query);
    }) : this.queries;
  };

  _proto.notify = function notify(event) {
    var _this3 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this3.listeners.forEach(function (listener) {
        listener(event);
      });
    });
  };

  _proto.onFocus = function onFocus() {
    var _this4 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this4.queries.forEach(function (query) {
        query.onFocus();
      });
    });
  };

  _proto.onOnline = function onOnline() {
    var _this5 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(function () {
      _this5.queries.forEach(function (query) {
        query.onOnline();
      });
    });
  };

  return QueryCache;
}(_subscribable__WEBPACK_IMPORTED_MODULE_4__.Subscribable);

/***/ }),

/***/ "./node_modules/react-query/es/core/queryClient.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-query/es/core/queryClient.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryClient": function() { return /* binding */ QueryClient; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/react-query/es/core/utils.js");
/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryCache */ "./node_modules/react-query/es/core/queryCache.js");
/* harmony import */ var _mutationCache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutationCache */ "./node_modules/react-query/es/core/mutationCache.js");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusManager */ "./node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onlineManager */ "./node_modules/react-query/es/core/onlineManager.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifyManager */ "./node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infiniteQueryBehavior */ "./node_modules/react-query/es/core/infiniteQueryBehavior.js");







 // TYPES

// CLASS
var QueryClient = /*#__PURE__*/function () {
  function QueryClient(config) {
    if (config === void 0) {
      config = {};
    }

    this.queryCache = config.queryCache || new _queryCache__WEBPACK_IMPORTED_MODULE_1__.QueryCache();
    this.mutationCache = config.mutationCache || new _mutationCache__WEBPACK_IMPORTED_MODULE_2__.MutationCache();
    this.defaultOptions = config.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
  }

  var _proto = QueryClient.prototype;

  _proto.mount = function mount() {
    var _this = this;

    this.unsubscribeFocus = _focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.subscribe(function () {
      if (_focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.isFocused() && _onlineManager__WEBPACK_IMPORTED_MODULE_4__.onlineManager.isOnline()) {
        _this.mutationCache.onFocus();

        _this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = _onlineManager__WEBPACK_IMPORTED_MODULE_4__.onlineManager.subscribe(function () {
      if (_focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.isFocused() && _onlineManager__WEBPACK_IMPORTED_MODULE_4__.onlineManager.isOnline()) {
        _this.mutationCache.onOnline();

        _this.queryCache.onOnline();
      }
    });
  };

  _proto.unmount = function unmount() {
    var _this$unsubscribeFocu, _this$unsubscribeOnli;

    (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
    (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
  };

  _proto.isFetching = function isFetching(arg1, arg2) {
    var _parseFilterArgs = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs[0];

    filters.fetching = true;
    return this.queryCache.findAll(filters).length;
  };

  _proto.isMutating = function isMutating(filters) {
    return this.mutationCache.findAll((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, filters, {
      fetching: true
    })).length;
  };

  _proto.getQueryData = function getQueryData(queryKey, filters) {
    var _this$queryCache$find;

    return (_this$queryCache$find = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find.state.data;
  };

  _proto.setQueryData = function setQueryData(queryKey, updater, options) {
    var parsedOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(queryKey);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(updater, options);
  };

  _proto.setQueriesData = function setQueriesData(queryKeyOrFilters, updater, options) {
    var _this2 = this;

    return _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this2.getQueryCache().findAll(queryKeyOrFilters).map(function (_ref) {
        var queryKey = _ref.queryKey;
        return [queryKey, _this2.setQueryData(queryKey, updater, options)];
      });
    });
  };

  _proto.getQueryState = function getQueryState(queryKey, filters) {
    var _this$queryCache$find2;

    return (_this$queryCache$find2 = this.queryCache.find(queryKey, filters)) == null ? void 0 : _this$queryCache$find2.state;
  };

  _proto.removeQueries = function removeQueries(arg1, arg2) {
    var _parseFilterArgs2 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2),
        filters = _parseFilterArgs2[0];

    var queryCache = this.queryCache;
    _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      queryCache.findAll(filters).forEach(function (query) {
        queryCache.remove(query);
      });
    });
  };

  _proto.resetQueries = function resetQueries(arg1, arg2, arg3) {
    var _this3 = this;

    var _parseFilterArgs3 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs3[0],
        options = _parseFilterArgs3[1];

    var queryCache = this.queryCache;

    var refetchFilters = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, filters, {
      active: true
    });

    return _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      queryCache.findAll(filters).forEach(function (query) {
        query.reset();
      });
      return _this3.refetchQueries(refetchFilters, options);
    });
  };

  _proto.cancelQueries = function cancelQueries(arg1, arg2, arg3) {
    var _this4 = this;

    var _parseFilterArgs4 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs4[0],
        _parseFilterArgs4$ = _parseFilterArgs4[1],
        cancelOptions = _parseFilterArgs4$ === void 0 ? {} : _parseFilterArgs4$;

    if (typeof cancelOptions.revert === 'undefined') {
      cancelOptions.revert = true;
    }

    var promises = _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this4.queryCache.findAll(filters).map(function (query) {
        return query.cancel(cancelOptions);
      });
    });
    return Promise.all(promises).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.invalidateQueries = function invalidateQueries(arg1, arg2, arg3) {
    var _ref2,
        _filters$refetchActiv,
        _filters$refetchInact,
        _this5 = this;

    var _parseFilterArgs5 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs5[0],
        options = _parseFilterArgs5[1];

    var refetchFilters = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, filters, {
      // if filters.refetchActive is not provided and filters.active is explicitly false,
      // e.g. invalidateQueries({ active: false }), we don't want to refetch active queries
      active: (_ref2 = (_filters$refetchActiv = filters.refetchActive) != null ? _filters$refetchActiv : filters.active) != null ? _ref2 : true,
      inactive: (_filters$refetchInact = filters.refetchInactive) != null ? _filters$refetchInact : false
    });

    return _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      _this5.queryCache.findAll(filters).forEach(function (query) {
        query.invalidate();
      });

      return _this5.refetchQueries(refetchFilters, options);
    });
  };

  _proto.refetchQueries = function refetchQueries(arg1, arg2, arg3) {
    var _this6 = this;

    var _parseFilterArgs6 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseFilterArgs)(arg1, arg2, arg3),
        filters = _parseFilterArgs6[0],
        options = _parseFilterArgs6[1];

    var promises = _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this6.queryCache.findAll(filters).map(function (query) {
        return query.fetch();
      });
    });
    var promise = Promise.all(promises).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);

    if (!(options == null ? void 0 : options.throwOnError)) {
      promise = promise.catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
    }

    return promise;
  };

  _proto.fetchQuery = function fetchQuery(arg1, arg2, arg3) {
    var parsedOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(arg1, arg2, arg3);
    var defaultedOptions = this.defaultQueryOptions(parsedOptions); // https://github.com/tannerlinsley/react-query/issues/652

    if (typeof defaultedOptions.retry === 'undefined') {
      defaultedOptions.retry = false;
    }

    var query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  };

  _proto.prefetchQuery = function prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.fetchInfiniteQuery = function fetchInfiniteQuery(arg1, arg2, arg3) {
    var parsedOptions = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.parseQueryArgs)(arg1, arg2, arg3);
    parsedOptions.behavior = (0,_infiniteQueryBehavior__WEBPACK_IMPORTED_MODULE_7__.infiniteQueryBehavior)();
    return this.fetchQuery(parsedOptions);
  };

  _proto.prefetchInfiniteQuery = function prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.cancelMutations = function cancelMutations() {
    var _this7 = this;

    var promises = _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      return _this7.mutationCache.getAll().map(function (mutation) {
        return mutation.cancel();
      });
    });
    return Promise.all(promises).then(_utils__WEBPACK_IMPORTED_MODULE_5__.noop).catch(_utils__WEBPACK_IMPORTED_MODULE_5__.noop);
  };

  _proto.resumePausedMutations = function resumePausedMutations() {
    return this.getMutationCache().resumePausedMutations();
  };

  _proto.executeMutation = function executeMutation(options) {
    return this.mutationCache.build(this, options).execute();
  };

  _proto.getQueryCache = function getQueryCache() {
    return this.queryCache;
  };

  _proto.getMutationCache = function getMutationCache() {
    return this.mutationCache;
  };

  _proto.getDefaultOptions = function getDefaultOptions() {
    return this.defaultOptions;
  };

  _proto.setDefaultOptions = function setDefaultOptions(options) {
    this.defaultOptions = options;
  };

  _proto.setQueryDefaults = function setQueryDefaults(queryKey, options) {
    var result = this.queryDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(queryKey) === (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(x.queryKey);
    });

    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({
        queryKey: queryKey,
        defaultOptions: options
      });
    }
  };

  _proto.getQueryDefaults = function getQueryDefaults(queryKey) {
    var _this$queryDefaults$f;

    return queryKey ? (_this$queryDefaults$f = this.queryDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.partialMatchKey)(queryKey, x.queryKey);
    })) == null ? void 0 : _this$queryDefaults$f.defaultOptions : undefined;
  };

  _proto.setMutationDefaults = function setMutationDefaults(mutationKey, options) {
    var result = this.mutationDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(mutationKey) === (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKey)(x.mutationKey);
    });

    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({
        mutationKey: mutationKey,
        defaultOptions: options
      });
    }
  };

  _proto.getMutationDefaults = function getMutationDefaults(mutationKey) {
    var _this$mutationDefault;

    return mutationKey ? (_this$mutationDefault = this.mutationDefaults.find(function (x) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.partialMatchKey)(mutationKey, x.mutationKey);
    })) == null ? void 0 : _this$mutationDefault.defaultOptions : undefined;
  };

  _proto.defaultQueryOptions = function defaultQueryOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }

    var defaultedOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.defaultOptions.queries, this.getQueryDefaults(options == null ? void 0 : options.queryKey), options, {
      _defaulted: true
    });

    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.hashQueryKeyByOptions)(defaultedOptions.queryKey, defaultedOptions);
    }

    return defaultedOptions;
  };

  _proto.defaultQueryObserverOptions = function defaultQueryObserverOptions(options) {
    return this.defaultQueryOptions(options);
  };

  _proto.defaultMutationOptions = function defaultMutationOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, this.defaultOptions.mutations, this.getMutationDefaults(options == null ? void 0 : options.mutationKey), options, {
      _defaulted: true
    });
  };

  _proto.clear = function clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  };

  return QueryClient;
}();

/***/ }),

/***/ "./node_modules/react-query/es/core/queryObserver.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-query/es/core/queryObserver.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryObserver": function() { return /* binding */ QueryObserver; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/react-query/es/core/utils.js");
/* harmony import */ var _notifyManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifyManager */ "./node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusManager */ "./node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _subscribable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscribable */ "./node_modules/react-query/es/core/subscribable.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ "./node_modules/react-query/es/core/logger.js");
/* harmony import */ var _retryer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retryer */ "./node_modules/react-query/es/core/retryer.js");








var QueryObserver = /*#__PURE__*/function (_Subscribable) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(QueryObserver, _Subscribable);

  function QueryObserver(client, options) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.options = options;
    _this.trackedProps = [];
    _this.previousSelectError = null;

    _this.bindMethods();

    _this.setOptions(options);

    return _this;
  }

  var _proto = QueryObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    this.remove = this.remove.bind(this);
    this.refetch = this.refetch.bind(this);
  };

  _proto.onSubscribe = function onSubscribe() {
    if (this.listeners.length === 1) {
      this.currentQuery.addObserver(this);

      if (shouldFetchOnMount(this.currentQuery, this.options)) {
        this.executeFetch();
      }

      this.updateTimers();
    }
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      this.destroy();
    }
  };

  _proto.shouldFetchOnReconnect = function shouldFetchOnReconnect() {
    return _shouldFetchOnReconnect(this.currentQuery, this.options);
  };

  _proto.shouldFetchOnWindowFocus = function shouldFetchOnWindowFocus() {
    return _shouldFetchOnWindowFocus(this.currentQuery, this.options);
  };

  _proto.destroy = function destroy() {
    this.listeners = [];
    this.clearTimers();
    this.currentQuery.removeObserver(this);
  };

  _proto.setOptions = function setOptions(options, notifyOptions) {
    var prevOptions = this.options;
    var prevQuery = this.currentQuery;
    this.options = this.client.defaultQueryObserverOptions(options);

    if (typeof this.options.enabled !== 'undefined' && typeof this.options.enabled !== 'boolean') {
      throw new Error('Expected enabled to be a boolean');
    } // Keep previous query key if the user does not supply one


    if (!this.options.queryKey) {
      this.options.queryKey = prevOptions.queryKey;
    }

    this.updateQuery();
    var mounted = this.hasListeners(); // Fetch if there are subscribers

    if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
      this.executeFetch();
    } // Update result


    this.updateResult(notifyOptions); // Update stale interval if needed

    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
      this.updateStaleTimeout();
    } // Update refetch interval if needed


    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.refetchInterval !== prevOptions.refetchInterval)) {
      this.updateRefetchInterval();
    }
  };

  _proto.getOptimisticResult = function getOptimisticResult(options) {
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return this.createResult(query, defaultedOptions);
  };

  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };

  _proto.trackResult = function trackResult(result) {
    var _this2 = this;

    var trackedResult = {};
    Object.keys(result).forEach(function (key) {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: function get() {
          var typedKey = key;

          if (!_this2.trackedProps.includes(typedKey)) {
            _this2.trackedProps.push(typedKey);
          }

          return result[typedKey];
        }
      });
    });
    return trackedResult;
  };

  _proto.getNextResult = function getNextResult(options) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var unsubscribe = _this3.subscribe(function (result) {
        if (!result.isFetching) {
          unsubscribe();

          if (result.isError && (options == null ? void 0 : options.throwOnError)) {
            reject(result.error);
          } else {
            resolve(result);
          }
        }
      });
    });
  };

  _proto.getCurrentQuery = function getCurrentQuery() {
    return this.currentQuery;
  };

  _proto.remove = function remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  };

  _proto.refetch = function refetch(options) {
    return this.fetch(options);
  };

  _proto.fetchOptimistic = function fetchOptimistic(options) {
    var _this4 = this;

    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return query.fetch().then(function () {
      return _this4.createResult(query, defaultedOptions);
    });
  };

  _proto.fetch = function fetch(fetchOptions) {
    var _this5 = this;

    return this.executeFetch(fetchOptions).then(function () {
      _this5.updateResult();

      return _this5.currentResult;
    });
  };

  _proto.executeFetch = function executeFetch(fetchOptions) {
    // Make sure we reference the latest query as the current one might have been removed
    this.updateQuery(); // Fetch

    var promise = this.currentQuery.fetch(this.options, fetchOptions);

    if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
      promise = promise.catch(_utils__WEBPACK_IMPORTED_MODULE_2__.noop);
    }

    return promise;
  };

  _proto.updateStaleTimeout = function updateStaleTimeout() {
    var _this6 = this;

    this.clearStaleTimeout();

    if (_utils__WEBPACK_IMPORTED_MODULE_2__.isServer || this.currentResult.isStale || !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isValidTimeout)(this.options.staleTime)) {
      return;
    }

    var time = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.timeUntilStale)(this.currentResult.dataUpdatedAt, this.options.staleTime); // The timeout is sometimes triggered 1 ms before the stale time expiration.
    // To mitigate this issue we always add 1 ms to the timeout.

    var timeout = time + 1;
    this.staleTimeoutId = setTimeout(function () {
      if (!_this6.currentResult.isStale) {
        _this6.updateResult();
      }
    }, timeout);
  };

  _proto.updateRefetchInterval = function updateRefetchInterval() {
    var _this7 = this;

    this.clearRefetchInterval();

    if (_utils__WEBPACK_IMPORTED_MODULE_2__.isServer || this.options.enabled === false || !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isValidTimeout)(this.options.refetchInterval)) {
      return;
    }

    this.refetchIntervalId = setInterval(function () {
      if (_this7.options.refetchIntervalInBackground || _focusManager__WEBPACK_IMPORTED_MODULE_3__.focusManager.isFocused()) {
        _this7.executeFetch();
      }
    }, this.options.refetchInterval);
  };

  _proto.updateTimers = function updateTimers() {
    this.updateStaleTimeout();
    this.updateRefetchInterval();
  };

  _proto.clearTimers = function clearTimers() {
    this.clearStaleTimeout();
    this.clearRefetchInterval();
  };

  _proto.clearStaleTimeout = function clearStaleTimeout() {
    clearTimeout(this.staleTimeoutId);
    this.staleTimeoutId = undefined;
  };

  _proto.clearRefetchInterval = function clearRefetchInterval() {
    clearInterval(this.refetchIntervalId);
    this.refetchIntervalId = undefined;
  };

  _proto.createResult = function createResult(query, options) {
    var prevQuery = this.currentQuery;
    var prevOptions = this.options;
    var prevResult = this.currentResult;
    var prevResultState = this.currentResultState;
    var prevResultOptions = this.currentResultOptions;
    var queryChange = query !== prevQuery;
    var queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
    var prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
    var state = query.state;
    var dataUpdatedAt = state.dataUpdatedAt,
        error = state.error,
        errorUpdatedAt = state.errorUpdatedAt,
        isFetching = state.isFetching,
        status = state.status;
    var isPreviousData = false;
    var isPlaceholderData = false;
    var data; // Optimistically set result in fetching state if needed

    if (options.optimisticResults) {
      var mounted = this.hasListeners();
      var fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      var fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);

      if (fetchOnMount || fetchOptionally) {
        isFetching = true;

        if (!dataUpdatedAt) {
          status = 'loading';
        }
      }
    } // Keep previous data if needed


    if (options.keepPreviousData && !state.dataUpdateCount && (prevQueryResult == null ? void 0 : prevQueryResult.isSuccess) && status !== 'error') {
      data = prevQueryResult.data;
      dataUpdatedAt = prevQueryResult.dataUpdatedAt;
      status = prevQueryResult.status;
      isPreviousData = true;
    } // Select data if needed
    else if (options.select && typeof state.data !== 'undefined') {
        // Memoize select result
        if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === (prevResultOptions == null ? void 0 : prevResultOptions.select) && !this.previousSelectError) {
          data = prevResult.data;
        } else {
          try {
            data = options.select(state.data);

            if (options.structuralSharing !== false) {
              data = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.replaceEqualDeep)(prevResult == null ? void 0 : prevResult.data, data);
            }

            this.previousSelectError = null;
          } catch (selectError) {
            (0,_logger__WEBPACK_IMPORTED_MODULE_4__.getLogger)().error(selectError);
            error = selectError;
            this.previousSelectError = selectError;
            errorUpdatedAt = Date.now();
            status = 'error';
          }
        }
      } // Use query data
      else {
          data = state.data;
        } // Show placeholder data if needed


    if (typeof options.placeholderData !== 'undefined' && typeof data === 'undefined' && status === 'loading') {
      var placeholderData; // Memoize placeholder data

      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === 'function' ? options.placeholderData() : options.placeholderData;

        if (options.select && typeof placeholderData !== 'undefined') {
          try {
            placeholderData = options.select(placeholderData);

            if (options.structuralSharing !== false) {
              placeholderData = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.replaceEqualDeep)(prevResult == null ? void 0 : prevResult.data, placeholderData);
            }

            this.previousSelectError = null;
          } catch (selectError) {
            (0,_logger__WEBPACK_IMPORTED_MODULE_4__.getLogger)().error(selectError);
            error = selectError;
            this.previousSelectError = selectError;
            errorUpdatedAt = Date.now();
            status = 'error';
          }
        }
      }

      if (typeof placeholderData !== 'undefined') {
        status = 'success';
        data = placeholderData;
        isPlaceholderData = true;
      }
    }

    var result = {
      status: status,
      isLoading: status === 'loading',
      isSuccess: status === 'success',
      isError: status === 'error',
      isIdle: status === 'idle',
      data: data,
      dataUpdatedAt: dataUpdatedAt,
      error: error,
      errorUpdatedAt: errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching: isFetching,
      isLoadingError: status === 'error' && state.dataUpdatedAt === 0,
      isPlaceholderData: isPlaceholderData,
      isPreviousData: isPreviousData,
      isRefetchError: status === 'error' && state.dataUpdatedAt !== 0,
      isStale: isStale(query, options),
      refetch: this.refetch,
      remove: this.remove
    };
    return result;
  };

  _proto.shouldNotifyListeners = function shouldNotifyListeners(result, prevResult) {
    if (!prevResult) {
      return true;
    }

    if (result === prevResult) {
      return false;
    }

    var _this$options = this.options,
        notifyOnChangeProps = _this$options.notifyOnChangeProps,
        notifyOnChangePropsExclusions = _this$options.notifyOnChangePropsExclusions;

    if (!notifyOnChangeProps && !notifyOnChangePropsExclusions) {
      return true;
    }

    if (notifyOnChangeProps === 'tracked' && !this.trackedProps.length) {
      return true;
    }

    var includedProps = notifyOnChangeProps === 'tracked' ? this.trackedProps : notifyOnChangeProps;
    return Object.keys(result).some(function (key) {
      var typedKey = key;
      var changed = result[typedKey] !== prevResult[typedKey];
      var isIncluded = includedProps == null ? void 0 : includedProps.some(function (x) {
        return x === key;
      });
      var isExcluded = notifyOnChangePropsExclusions == null ? void 0 : notifyOnChangePropsExclusions.some(function (x) {
        return x === key;
      });
      return changed && !isExcluded && (!includedProps || isIncluded);
    });
  };

  _proto.updateResult = function updateResult(notifyOptions) {
    var prevResult = this.currentResult;
    this.currentResult = this.createResult(this.currentQuery, this.options);
    this.currentResultState = this.currentQuery.state;
    this.currentResultOptions = this.options; // Only notify if something has changed

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.shallowEqualObjects)(this.currentResult, prevResult)) {
      return;
    } // Determine which callbacks to trigger


    var defaultNotifyOptions = {
      cache: true
    };

    if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && this.shouldNotifyListeners(this.currentResult, prevResult)) {
      defaultNotifyOptions.listeners = true;
    }

    this.notify((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, defaultNotifyOptions, notifyOptions));
  };

  _proto.updateQuery = function updateQuery() {
    var query = this.client.getQueryCache().build(this.client, this.options);

    if (query === this.currentQuery) {
      return;
    }

    var prevQuery = this.currentQuery;
    this.currentQuery = query;
    this.currentQueryInitialState = query.state;
    this.previousQueryResult = this.currentResult;

    if (this.hasListeners()) {
      prevQuery == null ? void 0 : prevQuery.removeObserver(this);
      query.addObserver(this);
    }
  };

  _proto.onQueryUpdate = function onQueryUpdate(action) {
    var notifyOptions = {};

    if (action.type === 'success') {
      notifyOptions.onSuccess = true;
    } else if (action.type === 'error' && !(0,_retryer__WEBPACK_IMPORTED_MODULE_5__.isCancelledError)(action.error)) {
      notifyOptions.onError = true;
    }

    this.updateResult(notifyOptions);

    if (this.hasListeners()) {
      this.updateTimers();
    }
  };

  _proto.notify = function notify(notifyOptions) {
    var _this8 = this;

    _notifyManager__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(function () {
      // First trigger the configuration callbacks
      if (notifyOptions.onSuccess) {
        _this8.options.onSuccess == null ? void 0 : _this8.options.onSuccess(_this8.currentResult.data);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(_this8.currentResult.data, null);
      } else if (notifyOptions.onError) {
        _this8.options.onError == null ? void 0 : _this8.options.onError(_this8.currentResult.error);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(undefined, _this8.currentResult.error);
      } // Then trigger the listeners


      if (notifyOptions.listeners) {
        _this8.listeners.forEach(function (listener) {
          listener(_this8.currentResult);
        });
      } // Then the cache listeners


      if (notifyOptions.cache) {
        _this8.client.getQueryCache().notify({
          query: _this8.currentQuery,
          type: 'observerResultsUpdated'
        });
      }
    });
  };

  return QueryObserver;
}(_subscribable__WEBPACK_IMPORTED_MODULE_7__.Subscribable);

function shouldLoadOnMount(query, options) {
  return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === 'error' && options.retryOnMount === false);
}

function shouldRefetchOnMount(query, options) {
  return options.enabled !== false && query.state.dataUpdatedAt > 0 && (options.refetchOnMount === 'always' || options.refetchOnMount !== false && isStale(query, options));
}

function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || shouldRefetchOnMount(query, options);
}

function _shouldFetchOnReconnect(query, options) {
  return options.enabled !== false && (options.refetchOnReconnect === 'always' || options.refetchOnReconnect !== false && isStale(query, options));
}

function _shouldFetchOnWindowFocus(query, options) {
  return options.enabled !== false && (options.refetchOnWindowFocus === 'always' || options.refetchOnWindowFocus !== false && isStale(query, options));
}

function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && isStale(query, options);
}

function isStale(query, options) {
  return query.isStaleByTime(options.staleTime);
}

/***/ }),

/***/ "./node_modules/react-query/es/core/retryer.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-query/es/core/retryer.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCancelable": function() { return /* binding */ isCancelable; },
/* harmony export */   "CancelledError": function() { return /* binding */ CancelledError; },
/* harmony export */   "isCancelledError": function() { return /* binding */ isCancelledError; },
/* harmony export */   "Retryer": function() { return /* binding */ Retryer; }
/* harmony export */ });
/* harmony import */ var _focusManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusManager */ "./node_modules/react-query/es/core/focusManager.js");
/* harmony import */ var _onlineManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onlineManager */ "./node_modules/react-query/es/core/onlineManager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/react-query/es/core/utils.js");


 // TYPES

function defaultRetryDelay(failureCount) {
  return Math.min(1000 * Math.pow(2, failureCount), 30000);
}

function isCancelable(value) {
  return typeof (value == null ? void 0 : value.cancel) === 'function';
}
var CancelledError = function CancelledError(options) {
  this.revert = options == null ? void 0 : options.revert;
  this.silent = options == null ? void 0 : options.silent;
};
function isCancelledError(value) {
  return value instanceof CancelledError;
} // CLASS

var Retryer = function Retryer(config) {
  var _this = this;

  var cancelRetry = false;
  var cancelFn;
  var continueFn;
  var promiseResolve;
  var promiseReject;

  this.cancel = function (cancelOptions) {
    return cancelFn == null ? void 0 : cancelFn(cancelOptions);
  };

  this.cancelRetry = function () {
    cancelRetry = true;
  };

  this.continue = function () {
    return continueFn == null ? void 0 : continueFn();
  };

  this.failureCount = 0;
  this.isPaused = false;
  this.isResolved = false;
  this.isTransportCancelable = false;
  this.promise = new Promise(function (outerResolve, outerReject) {
    promiseResolve = outerResolve;
    promiseReject = outerReject;
  });

  var resolve = function resolve(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onSuccess == null ? void 0 : config.onSuccess(value);
      continueFn == null ? void 0 : continueFn();
      promiseResolve(value);
    }
  };

  var reject = function reject(value) {
    if (!_this.isResolved) {
      _this.isResolved = true;
      config.onError == null ? void 0 : config.onError(value);
      continueFn == null ? void 0 : continueFn();
      promiseReject(value);
    }
  };

  var pause = function pause() {
    return new Promise(function (continueResolve) {
      continueFn = continueResolve;
      _this.isPaused = true;
      config.onPause == null ? void 0 : config.onPause();
    }).then(function () {
      continueFn = undefined;
      _this.isPaused = false;
      config.onContinue == null ? void 0 : config.onContinue();
    });
  }; // Create loop function


  var run = function run() {
    // Do nothing if already resolved
    if (_this.isResolved) {
      return;
    }

    var promiseOrValue; // Execute query

    try {
      promiseOrValue = config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    } // Create callback to cancel this fetch


    cancelFn = function cancelFn(cancelOptions) {
      if (!_this.isResolved) {
        reject(new CancelledError(cancelOptions)); // Cancel transport if supported

        if (isCancelable(promiseOrValue)) {
          try {
            promiseOrValue.cancel();
          } catch (_unused) {}
        }
      }
    }; // Check if the transport layer support cancellation


    _this.isTransportCancelable = isCancelable(promiseOrValue);
    Promise.resolve(promiseOrValue).then(resolve).catch(function (error) {
      var _config$retry, _config$retryDelay;

      // Stop if the fetch is already resolved
      if (_this.isResolved) {
        return;
      } // Do we need to retry the request?


      var retry = (_config$retry = config.retry) != null ? _config$retry : 3;
      var retryDelay = (_config$retryDelay = config.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
      var delay = typeof retryDelay === 'function' ? retryDelay(_this.failureCount, error) : retryDelay;
      var shouldRetry = retry === true || typeof retry === 'number' && _this.failureCount < retry || typeof retry === 'function' && retry(_this.failureCount, error);

      if (cancelRetry || !shouldRetry) {
        // We are done if the query does not need to be retried
        reject(error);
        return;
      }

      _this.failureCount++; // Notify on fail

      config.onFail == null ? void 0 : config.onFail(_this.failureCount, error); // Delay

      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sleep)(delay) // Pause if the document is not visible or when the device is offline
      .then(function () {
        if (!_focusManager__WEBPACK_IMPORTED_MODULE_1__.focusManager.isFocused() || !_onlineManager__WEBPACK_IMPORTED_MODULE_2__.onlineManager.isOnline()) {
          return pause();
        }
      }).then(function () {
        if (cancelRetry) {
          reject(error);
        } else {
          run();
        }
      });
    });
  }; // Start loop


  run();
};

/***/ }),

/***/ "./node_modules/react-query/es/core/subscribable.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-query/es/core/subscribable.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subscribable": function() { return /* binding */ Subscribable; }
/* harmony export */ });
var Subscribable = /*#__PURE__*/function () {
  function Subscribable() {
    this.listeners = [];
  }

  var _proto = Subscribable.prototype;

  _proto.subscribe = function subscribe(listener) {
    var _this = this;

    var callback = listener || function () {
      return undefined;
    };

    this.listeners.push(callback);
    this.onSubscribe();
    return function () {
      _this.listeners = _this.listeners.filter(function (x) {
        return x !== callback;
      });

      _this.onUnsubscribe();
    };
  };

  _proto.hasListeners = function hasListeners() {
    return this.listeners.length > 0;
  };

  _proto.onSubscribe = function onSubscribe() {// Do nothing
  };

  _proto.onUnsubscribe = function onUnsubscribe() {// Do nothing
  };

  return Subscribable;
}();

/***/ }),

/***/ "./node_modules/react-query/es/core/types.js":
/*!***************************************************!*\
  !*** ./node_modules/react-query/es/core/types.js ***!
  \***************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-query/es/core/utils.js":
/*!***************************************************!*\
  !*** ./node_modules/react-query/es/core/utils.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isServer": function() { return /* binding */ isServer; },
/* harmony export */   "noop": function() { return /* binding */ noop; },
/* harmony export */   "functionalUpdate": function() { return /* binding */ functionalUpdate; },
/* harmony export */   "isValidTimeout": function() { return /* binding */ isValidTimeout; },
/* harmony export */   "ensureQueryKeyArray": function() { return /* binding */ ensureQueryKeyArray; },
/* harmony export */   "difference": function() { return /* binding */ difference; },
/* harmony export */   "replaceAt": function() { return /* binding */ replaceAt; },
/* harmony export */   "timeUntilStale": function() { return /* binding */ timeUntilStale; },
/* harmony export */   "parseQueryArgs": function() { return /* binding */ parseQueryArgs; },
/* harmony export */   "parseMutationArgs": function() { return /* binding */ parseMutationArgs; },
/* harmony export */   "parseFilterArgs": function() { return /* binding */ parseFilterArgs; },
/* harmony export */   "mapQueryStatusFilter": function() { return /* binding */ mapQueryStatusFilter; },
/* harmony export */   "matchQuery": function() { return /* binding */ matchQuery; },
/* harmony export */   "matchMutation": function() { return /* binding */ matchMutation; },
/* harmony export */   "hashQueryKeyByOptions": function() { return /* binding */ hashQueryKeyByOptions; },
/* harmony export */   "hashQueryKey": function() { return /* binding */ hashQueryKey; },
/* harmony export */   "stableValueHash": function() { return /* binding */ stableValueHash; },
/* harmony export */   "partialMatchKey": function() { return /* binding */ partialMatchKey; },
/* harmony export */   "partialDeepEqual": function() { return /* binding */ partialDeepEqual; },
/* harmony export */   "replaceEqualDeep": function() { return /* binding */ replaceEqualDeep; },
/* harmony export */   "shallowEqualObjects": function() { return /* binding */ shallowEqualObjects; },
/* harmony export */   "isPlainObject": function() { return /* binding */ isPlainObject; },
/* harmony export */   "isQueryKey": function() { return /* binding */ isQueryKey; },
/* harmony export */   "isError": function() { return /* binding */ isError; },
/* harmony export */   "sleep": function() { return /* binding */ sleep; },
/* harmony export */   "scheduleMicrotask": function() { return /* binding */ scheduleMicrotask; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");

// TYPES
// UTILS
var isServer = typeof window === 'undefined';
function noop() {
  return undefined;
}
function functionalUpdate(updater, input) {
  return typeof updater === 'function' ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === 'number' && value >= 0 && value !== Infinity;
}
function ensureQueryKeyArray(value) {
  return Array.isArray(value) ? value : [value];
}
function difference(array1, array2) {
  return array1.filter(function (x) {
    return array2.indexOf(x) === -1;
  });
}
function replaceAt(array, index, value) {
  var copy = array.slice(0);
  copy[index] = value;
  return copy;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }

  if (typeof arg2 === 'function') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg3, {
      queryKey: arg1,
      queryFn: arg2
    });
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
    queryKey: arg1
  });
}
function parseMutationArgs(arg1, arg2, arg3) {
  if (isQueryKey(arg1)) {
    if (typeof arg2 === 'function') {
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg3, {
        mutationKey: arg1,
        mutationFn: arg2
      });
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
      mutationKey: arg1
    });
  }

  if (typeof arg1 === 'function') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
      mutationFn: arg1
    });
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg1);
}
function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, arg2, {
    queryKey: arg1
  }), arg3] : [arg1 || {}, arg2];
}
function mapQueryStatusFilter(active, inactive) {
  if (active === true && inactive === true || active == null && inactive == null) {
    return 'all';
  } else if (active === false && inactive === false) {
    return 'none';
  } else {
    // At this point, active|inactive can only be true|false or false|true
    // so, when only one value is provided, the missing one has to be the negated value
    var isActive = active != null ? active : !inactive;
    return isActive ? 'active' : 'inactive';
  }
}
function matchQuery(filters, query) {
  var active = filters.active,
      exact = filters.exact,
      fetching = filters.fetching,
      inactive = filters.inactive,
      predicate = filters.predicate,
      queryKey = filters.queryKey,
      stale = filters.stale;

  if (isQueryKey(queryKey)) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }

  var queryStatusFilter = mapQueryStatusFilter(active, inactive);

  if (queryStatusFilter === 'none') {
    return false;
  } else if (queryStatusFilter !== 'all') {
    var isActive = query.isActive();

    if (queryStatusFilter === 'active' && !isActive) {
      return false;
    }

    if (queryStatusFilter === 'inactive' && isActive) {
      return false;
    }
  }

  if (typeof stale === 'boolean' && query.isStale() !== stale) {
    return false;
  }

  if (typeof fetching === 'boolean' && query.isFetching() !== fetching) {
    return false;
  }

  if (predicate && !predicate(query)) {
    return false;
  }

  return true;
}
function matchMutation(filters, mutation) {
  var exact = filters.exact,
      fetching = filters.fetching,
      predicate = filters.predicate,
      mutationKey = filters.mutationKey;

  if (isQueryKey(mutationKey)) {
    if (!mutation.options.mutationKey) {
      return false;
    }

    if (exact) {
      if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }

  if (typeof fetching === 'boolean' && mutation.state.status === 'loading' !== fetching) {
    return false;
  }

  if (predicate && !predicate(mutation)) {
    return false;
  }

  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  var hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
  return hashFn(queryKey);
}
/**
 * Default query keys hash function.
 */

function hashQueryKey(queryKey) {
  var asArray = ensureQueryKeyArray(queryKey);
  return stableValueHash(asArray);
}
/**
 * Hashes the value into a stable hash.
 */

function stableValueHash(value) {
  return JSON.stringify(value, function (_, val) {
    return isPlainObject(val) ? Object.keys(val).sort().reduce(function (result, key) {
      result[key] = val[key];
      return result;
    }, {}) : val;
  });
}
/**
 * Checks if key `b` partially matches with key `a`.
 */

function partialMatchKey(a, b) {
  return partialDeepEqual(ensureQueryKeyArray(a), ensureQueryKeyArray(b));
}
/**
 * Checks if `b` partially matches with `a`.
 */

function partialDeepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    return !Object.keys(b).some(function (key) {
      return !partialDeepEqual(a[key], b[key]);
    });
  }

  return false;
}
/**
 * This function returns `a` if `b` is deeply equal.
 * If not, it will replace any deeply equal children of `b` with those of `a`.
 * This can be used for structural sharing between JSON values for example.
 */

function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }

  var array = Array.isArray(a) && Array.isArray(b);

  if (array || isPlainObject(a) && isPlainObject(b)) {
    var aSize = array ? a.length : Object.keys(a).length;
    var bItems = array ? b : Object.keys(b);
    var bSize = bItems.length;
    var copy = array ? [] : {};
    var equalItems = 0;

    for (var i = 0; i < bSize; i++) {
      var key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);

      if (copy[key] === a[key]) {
        equalItems++;
      }
    }

    return aSize === bSize && equalItems === aSize ? a : copy;
  }

  return b;
}
/**
 * Shallow compare objects. Only works with objects that always have the same properties.
 */

function shallowEqualObjects(a, b) {
  if (a && !b || b && !a) {
    return false;
  }

  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
} // Copied from: https://github.com/jonschlinkert/is-plain-object

function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  } // If has modified constructor


  var ctor = o.constructor;

  if (typeof ctor === 'undefined') {
    return true;
  } // If has modified prototype


  var prot = ctor.prototype;

  if (!hasObjectPrototype(prot)) {
    return false;
  } // If constructor does not have an Object-specific method


  if (!prot.hasOwnProperty('isPrototypeOf')) {
    return false;
  } // Most likely a plain Object


  return true;
}

function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isQueryKey(value) {
  return typeof value === 'string' || Array.isArray(value);
}
function isError(value) {
  return value instanceof Error;
}
function sleep(timeout) {
  return new Promise(function (resolve) {
    setTimeout(resolve, timeout);
  });
}
/**
 * Schedules a microtask.
 * This can be useful to schedule state updates after rendering.
 */

function scheduleMicrotask(callback) {
  Promise.resolve().then(callback).catch(function (error) {
    return setTimeout(function () {
      throw error;
    });
  });
}

/***/ }),

/***/ "./node_modules/react-query/es/hydration/hydration.js":
/*!************************************************************!*\
  !*** ./node_modules/react-query/es/hydration/hydration.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dehydrate": function() { return /* binding */ dehydrate; },
/* harmony export */   "hydrate": function() { return /* binding */ hydrate; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


// TYPES
// FUNCTIONS
function dehydrateMutation(mutation) {
  return {
    mutationKey: mutation.options.mutationKey,
    state: mutation.state
  };
} // Most config is not dehydrated but instead meant to configure again when
// consuming the de/rehydrated data, typically with useQuery on the client.
// Sometimes it might make sense to prefetch data on the server and include
// in the html-payload, but not consume it on the initial render.


function dehydrateQuery(query) {
  return {
    state: query.state,
    queryKey: query.queryKey,
    queryHash: query.queryHash
  };
}

function defaultShouldDehydrateMutation(mutation) {
  return mutation.state.isPaused;
}

function defaultShouldDehydrateQuery(query) {
  return query.state.status === 'success';
}

function dehydrate(client, options) {
  var _options, _options2;

  options = options || {};
  var mutations = [];
  var queries = [];

  if (((_options = options) == null ? void 0 : _options.dehydrateMutations) !== false) {
    var shouldDehydrateMutation = options.shouldDehydrateMutation || defaultShouldDehydrateMutation;
    client.getMutationCache().getAll().forEach(function (mutation) {
      if (shouldDehydrateMutation(mutation)) {
        mutations.push(dehydrateMutation(mutation));
      }
    });
  }

  if (((_options2 = options) == null ? void 0 : _options2.dehydrateQueries) !== false) {
    var shouldDehydrateQuery = options.shouldDehydrateQuery || defaultShouldDehydrateQuery;
    client.getQueryCache().getAll().forEach(function (query) {
      if (shouldDehydrateQuery(query)) {
        queries.push(dehydrateQuery(query));
      }
    });
  }

  return {
    mutations: mutations,
    queries: queries
  };
}
function hydrate(client, dehydratedState, options) {
  if (typeof dehydratedState !== 'object' || dehydratedState === null) {
    return;
  }

  var mutationCache = client.getMutationCache();
  var queryCache = client.getQueryCache();
  var mutations = dehydratedState.mutations || [];
  var queries = dehydratedState.queries || [];
  mutations.forEach(function (dehydratedMutation) {
    var _options$defaultOptio;

    mutationCache.build(client, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options == null ? void 0 : (_options$defaultOptio = options.defaultOptions) == null ? void 0 : _options$defaultOptio.mutations, {
      mutationKey: dehydratedMutation.mutationKey
    }), dehydratedMutation.state);
  });
  queries.forEach(function (dehydratedQuery) {
    var _options$defaultOptio2;

    var query = queryCache.get(dehydratedQuery.queryHash); // Do not hydrate if an existing query exists with newer data

    if (query) {
      if (query.state.dataUpdatedAt < dehydratedQuery.state.dataUpdatedAt) {
        query.setState(dehydratedQuery.state);
      }

      return;
    } // Restore query


    queryCache.build(client, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, options == null ? void 0 : (_options$defaultOptio2 = options.defaultOptions) == null ? void 0 : _options$defaultOptio2.queries, {
      queryKey: dehydratedQuery.queryKey,
      queryHash: dehydratedQuery.queryHash
    }), dehydratedQuery.state);
  });
}

/***/ }),

/***/ "./node_modules/react-query/es/hydration/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-query/es/hydration/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dehydrate": function() { return /* reexport safe */ _hydration__WEBPACK_IMPORTED_MODULE_0__.dehydrate; },
/* harmony export */   "hydrate": function() { return /* reexport safe */ _hydration__WEBPACK_IMPORTED_MODULE_0__.hydrate; },
/* harmony export */   "useHydrate": function() { return /* reexport safe */ _react__WEBPACK_IMPORTED_MODULE_1__.useHydrate; },
/* harmony export */   "Hydrate": function() { return /* reexport safe */ _react__WEBPACK_IMPORTED_MODULE_1__.Hydrate; }
/* harmony export */ });
/* harmony import */ var _hydration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hydration */ "./node_modules/react-query/es/hydration/hydration.js");
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "./node_modules/react-query/es/hydration/react.js");

 // Types

/***/ }),

/***/ "./node_modules/react-query/es/hydration/react.js":
/*!********************************************************!*\
  !*** ./node_modules/react-query/es/hydration/react.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHydrate": function() { return /* binding */ useHydrate; },
/* harmony export */   "Hydrate": function() { return /* binding */ Hydrate; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?ab5b1");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _hydration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hydration */ "./node_modules/react-query/es/hydration/hydration.js");



function useHydrate(state, options) {
  var queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  var optionsRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(options);
  optionsRef.current = options; // Running hydrate again with the same queries is safe,
  // it wont overwrite or initialize existing queries,
  // relying on useMemo here is only a performance optimization.
  // hydrate can and should be run *during* render here for SSR to work properly

  react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    if (state) {
      (0,_hydration__WEBPACK_IMPORTED_MODULE_2__.hydrate)(queryClient, state, optionsRef.current);
    }
  }, [queryClient, state]);
}
var Hydrate = function Hydrate(_ref) {
  var children = _ref.children,
      options = _ref.options,
      state = _ref.state;
  useHydrate(state, options);
  return children;
};

/***/ }),

/***/ "./node_modules/react-query/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-query/es/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/react-query/es/core/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _core__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _core__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "./node_modules/react-query/es/react/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _react__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./node_modules/react-query/es/react/QueryClientProvider.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-query/es/react/QueryClientProvider.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueryClient": function() { return /* binding */ useQueryClient; },
/* harmony export */   "QueryClientProvider": function() { return /* binding */ QueryClientProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?ab5b1");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var defaultContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(undefined);
var QueryClientSharingContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(false); // if contextSharing is on, we share the first and at least one
// instance of the context across the window
// to ensure that if React Query is used across
// different bundles or microfrontends they will
// all use the same **instance** of context, regardless
// of module scoping.

function getQueryClientContext(contextSharing) {
  if (contextSharing && typeof window !== 'undefined') {
    if (!window.ReactQueryClientContext) {
      window.ReactQueryClientContext = defaultContext;
    }

    return window.ReactQueryClientContext;
  }

  return defaultContext;
}

var useQueryClient = function useQueryClient() {
  var queryClient = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(getQueryClientContext(react__WEBPACK_IMPORTED_MODULE_0___default().useContext(QueryClientSharingContext)));

  if (!queryClient) {
    throw new Error('No QueryClient set, use QueryClientProvider to set one');
  }

  return queryClient;
};
var QueryClientProvider = function QueryClientProvider(_ref) {
  var client = _ref.client,
      _ref$contextSharing = _ref.contextSharing,
      contextSharing = _ref$contextSharing === void 0 ? false : _ref$contextSharing,
      children = _ref.children;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    client.mount();
    return function () {
      client.unmount();
    };
  }, [client]);
  var Context = getQueryClientContext(contextSharing);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QueryClientSharingContext.Provider, {
    value: contextSharing
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: client
  }, children));
};

/***/ }),

/***/ "./node_modules/react-query/es/react/QueryErrorResetBoundary.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-query/es/react/QueryErrorResetBoundary.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueryErrorResetBoundary": function() { return /* binding */ useQueryErrorResetBoundary; },
/* harmony export */   "QueryErrorResetBoundary": function() { return /* binding */ QueryErrorResetBoundary; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?ab5b1");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // CONTEXT

function createValue() {
  var _isReset = false;
  return {
    clearReset: function clearReset() {
      _isReset = false;
    },
    reset: function reset() {
      _isReset = true;
    },
    isReset: function isReset() {
      return _isReset;
    }
  };
}

var QueryErrorResetBoundaryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(createValue()); // HOOK

var useQueryErrorResetBoundary = function useQueryErrorResetBoundary() {
  return react__WEBPACK_IMPORTED_MODULE_0___default().useContext(QueryErrorResetBoundaryContext);
}; // COMPONENT

var QueryErrorResetBoundary = function QueryErrorResetBoundary(_ref) {
  var children = _ref.children;
  var value = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {
    return createValue();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QueryErrorResetBoundaryContext.Provider, {
    value: value
  }, typeof children === 'function' ? children(value) : children);
};

/***/ }),

/***/ "./node_modules/react-query/es/react/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-query/es/react/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryClientProvider": function() { return /* reexport safe */ _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider; },
/* harmony export */   "useQueryClient": function() { return /* reexport safe */ _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__.useQueryClient; },
/* harmony export */   "QueryErrorResetBoundary": function() { return /* reexport safe */ _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_3__.QueryErrorResetBoundary; },
/* harmony export */   "useQueryErrorResetBoundary": function() { return /* reexport safe */ _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_3__.useQueryErrorResetBoundary; },
/* harmony export */   "useIsFetching": function() { return /* reexport safe */ _useIsFetching__WEBPACK_IMPORTED_MODULE_4__.useIsFetching; },
/* harmony export */   "useIsMutating": function() { return /* reexport safe */ _useIsMutating__WEBPACK_IMPORTED_MODULE_5__.useIsMutating; },
/* harmony export */   "useMutation": function() { return /* reexport safe */ _useMutation__WEBPACK_IMPORTED_MODULE_6__.useMutation; },
/* harmony export */   "useQuery": function() { return /* reexport safe */ _useQuery__WEBPACK_IMPORTED_MODULE_7__.useQuery; },
/* harmony export */   "useQueries": function() { return /* reexport safe */ _useQueries__WEBPACK_IMPORTED_MODULE_8__.useQueries; },
/* harmony export */   "useInfiniteQuery": function() { return /* reexport safe */ _useInfiniteQuery__WEBPACK_IMPORTED_MODULE_9__.useInfiniteQuery; }
/* harmony export */ });
/* harmony import */ var _setBatchUpdatesFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBatchUpdatesFn */ "./node_modules/react-query/es/react/setBatchUpdatesFn.js");
/* harmony import */ var _setLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLogger */ "./node_modules/react-query/es/react/setLogger.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryClientProvider */ "./node_modules/react-query/es/react/QueryClientProvider.js");
/* harmony import */ var _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryErrorResetBoundary */ "./node_modules/react-query/es/react/QueryErrorResetBoundary.js");
/* harmony import */ var _useIsFetching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useIsFetching */ "./node_modules/react-query/es/react/useIsFetching.js");
/* harmony import */ var _useIsMutating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useIsMutating */ "./node_modules/react-query/es/react/useIsMutating.js");
/* harmony import */ var _useMutation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useMutation */ "./node_modules/react-query/es/react/useMutation.js");
/* harmony import */ var _useQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useQuery */ "./node_modules/react-query/es/react/useQuery.js");
/* harmony import */ var _useQueries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useQueries */ "./node_modules/react-query/es/react/useQueries.js");
/* harmony import */ var _useInfiniteQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useInfiniteQuery */ "./node_modules/react-query/es/react/useInfiniteQuery.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./types */ "./node_modules/react-query/es/react/types.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_10__) if(["default","QueryClientProvider","useQueryClient","QueryErrorResetBoundary","useQueryErrorResetBoundary","useIsFetching","useIsMutating","useMutation","useQuery","useQueries","useInfiniteQuery"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types__WEBPACK_IMPORTED_MODULE_10__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// Side effects









 // Types



/***/ }),

/***/ "./node_modules/react-query/es/react/logger.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-query/es/react/logger.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": function() { return /* binding */ logger; }
/* harmony export */ });
var logger = console;

/***/ }),

/***/ "./node_modules/react-query/es/react/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-query/es/react/reactBatchedUpdates.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unstable_batchedUpdates": function() { return /* binding */ unstable_batchedUpdates; }
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

var unstable_batchedUpdates = (react_dom__WEBPACK_IMPORTED_MODULE_0___default().unstable_batchedUpdates);

/***/ }),

/***/ "./node_modules/react-query/es/react/setBatchUpdatesFn.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-query/es/react/setBatchUpdatesFn.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./node_modules/react-query/es/core/index.js");
/* harmony import */ var _reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactBatchedUpdates */ "./node_modules/react-query/es/react/reactBatchedUpdates.js");


_core__WEBPACK_IMPORTED_MODULE_0__.notifyManager.setBatchNotifyFunction(_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates);

/***/ }),

/***/ "./node_modules/react-query/es/react/setLogger.js":
/*!********************************************************!*\
  !*** ./node_modules/react-query/es/react/setLogger.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./node_modules/react-query/es/core/index.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./node_modules/react-query/es/react/logger.js");



if (_logger__WEBPACK_IMPORTED_MODULE_0__.logger) {
  (0,_core__WEBPACK_IMPORTED_MODULE_1__.setLogger)(_logger__WEBPACK_IMPORTED_MODULE_0__.logger);
}

/***/ }),

/***/ "./node_modules/react-query/es/react/types.js":
/*!****************************************************!*\
  !*** ./node_modules/react-query/es/react/types.js ***!
  \****************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-query/es/react/useBaseQuery.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-query/es/react/useBaseQuery.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBaseQuery": function() { return /* binding */ useBaseQuery; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?ab5b1");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "./node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryErrorResetBoundary */ "./node_modules/react-query/es/react/QueryErrorResetBoundary.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "./node_modules/react-query/es/react/QueryClientProvider.js");




function useBaseQuery(options, Observer) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),
      forceUpdate = _React$useState[1];

  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  var errorResetBoundary = (0,_QueryErrorResetBoundary__WEBPACK_IMPORTED_MODULE_2__.useQueryErrorResetBoundary)();
  var defaultedOptions = queryClient.defaultQueryObserverOptions(options); // Make sure results are optimistically set in fetching state before subscribing or updating options

  defaultedOptions.optimisticResults = true; // Include callbacks in batch renders

  if (defaultedOptions.onError) {
    defaultedOptions.onError = _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(defaultedOptions.onError);
  }

  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(defaultedOptions.onSuccess);
  }

  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(defaultedOptions.onSettled);
  }

  if (defaultedOptions.suspense) {
    // Always set stale time when using suspense to prevent
    // fetching again when directly mounting after suspending
    if (typeof defaultedOptions.staleTime !== 'number') {
      defaultedOptions.staleTime = 1000;
    }
  }

  if (defaultedOptions.suspense || defaultedOptions.useErrorBoundary) {
    // Prevent retrying failed query if the error boundary has not been reset yet
    if (!errorResetBoundary.isReset()) {
      defaultedOptions.retryOnMount = false;
    }
  }

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(function () {
    return new Observer(queryClient, defaultedOptions);
  }),
      observer = _React$useState2[0];

  var result = observer.getOptimisticResult(defaultedOptions);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    errorResetBoundary.clearReset();
    var unsubscribe = observer.subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    })); // Update result to make sure we did not miss any query updates
    // between creating the observer and subscribing to it.

    observer.updateResult();
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [errorResetBoundary, observer]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setOptions(defaultedOptions, {
      listeners: false
    });
  }, [defaultedOptions, observer]); // Handle suspense

  if (defaultedOptions.suspense && result.isLoading) {
    throw observer.fetchOptimistic(defaultedOptions).then(function (_ref) {
      var data = _ref.data;
      defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
    }).catch(function (error) {
      errorResetBoundary.clearReset();
      defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(undefined, error);
    });
  } // Handle error boundary


  if ((defaultedOptions.suspense || defaultedOptions.useErrorBoundary) && result.isError && !result.isFetching) {
    throw result.error;
  } // Handle result property usage tracking


  if (defaultedOptions.notifyOnChangeProps === 'tracked') {
    result = observer.trackResult(result);
  }

  return result;
}

/***/ }),

/***/ "./node_modules/react-query/es/react/useInfiniteQuery.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-query/es/react/useInfiniteQuery.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInfiniteQuery": function() { return /* binding */ useInfiniteQuery; }
/* harmony export */ });
/* harmony import */ var _core_infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/infiniteQueryObserver */ "./node_modules/react-query/es/core/infiniteQueryObserver.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils */ "./node_modules/react-query/es/core/utils.js");
/* harmony import */ var _useBaseQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBaseQuery */ "./node_modules/react-query/es/react/useBaseQuery.js");


 // HOOK

function useInfiniteQuery(arg1, arg2, arg3) {
  var options = (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.parseQueryArgs)(arg1, arg2, arg3);
  return (0,_useBaseQuery__WEBPACK_IMPORTED_MODULE_1__.useBaseQuery)(options, _core_infiniteQueryObserver__WEBPACK_IMPORTED_MODULE_2__.InfiniteQueryObserver);
}

/***/ }),

/***/ "./node_modules/react-query/es/react/useIsFetching.js":
/*!************************************************************!*\
  !*** ./node_modules/react-query/es/react/useIsFetching.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsFetching": function() { return /* binding */ useIsFetching; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?ab5b1");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "./node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "./node_modules/react-query/es/core/utils.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "./node_modules/react-query/es/react/QueryClientProvider.js");




function useIsFetching(arg1, arg2) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);
  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();

  var _parseFilterArgs = (0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.parseFilterArgs)(arg1, arg2),
      filters = _parseFilterArgs[0];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(queryClient.isFetching(filters)),
      isFetching = _React$useState[0],
      setIsFetching = _React$useState[1];

  var filtersRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(filters);
  filtersRef.current = filters;
  var isFetchingRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(isFetching);
  isFetchingRef.current = isFetching;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = queryClient.getQueryCache().subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        var newIsFetching = queryClient.isFetching(filtersRef.current);

        if (isFetchingRef.current !== newIsFetching) {
          setIsFetching(newIsFetching);
        }
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [queryClient]);
  return isFetching;
}

/***/ }),

/***/ "./node_modules/react-query/es/react/useIsMutating.js":
/*!************************************************************!*\
  !*** ./node_modules/react-query/es/react/useIsMutating.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsMutating": function() { return /* binding */ useIsMutating; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?ab5b1");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/notifyManager */ "./node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "./node_modules/react-query/es/react/QueryClientProvider.js");



function useIsMutating(filters) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);
  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(queryClient.isMutating(filters)),
      isMutating = _React$useState[0],
      setIsMutating = _React$useState[1];

  var filtersRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(filters);
  filtersRef.current = filters;
  var isMutatingRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(isMutating);
  isMutatingRef.current = isMutating;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = queryClient.getMutationCache().subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        var newIsMutating = queryClient.isMutating(filtersRef.current);

        if (isMutatingRef.current !== newIsMutating) {
          setIsMutating(newIsMutating);
        }
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [queryClient]);
  return isMutating;
}

/***/ }),

/***/ "./node_modules/react-query/es/react/useMutation.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-query/es/react/useMutation.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMutation": function() { return /* binding */ useMutation; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?ab5b1");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/notifyManager */ "./node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "./node_modules/react-query/es/core/utils.js");
/* harmony import */ var _core_mutationObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/mutationObserver */ "./node_modules/react-query/es/core/mutationObserver.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryClientProvider */ "./node_modules/react-query/es/react/QueryClientProvider.js");






function useMutation(arg1, arg2, arg3) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(false);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0),
      forceUpdate = _React$useState[1];

  var options = (0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.parseMutationArgs)(arg1, arg2, arg3);
  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  var obsRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();

  if (!obsRef.current) {
    obsRef.current = new _core_mutationObserver__WEBPACK_IMPORTED_MODULE_4__.MutationObserver(queryClient, options);
  } else {
    obsRef.current.setOptions(options);
  }

  var currentResult = obsRef.current.getCurrentResult();
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = obsRef.current.subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_5__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, []);
  var mutate = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function (variables, mutateOptions) {
    obsRef.current.mutate(variables, mutateOptions).catch(_core_utils__WEBPACK_IMPORTED_MODULE_2__.noop);
  }, []);

  if (currentResult.error && obsRef.current.options.useErrorBoundary) {
    throw currentResult.error;
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, currentResult, {
    mutate: mutate,
    mutateAsync: currentResult.mutate
  });
}

/***/ }),

/***/ "./node_modules/react-query/es/react/useQueries.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-query/es/react/useQueries.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQueries": function() { return /* binding */ useQueries; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?ab5b1");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_notifyManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/notifyManager */ "./node_modules/react-query/es/core/notifyManager.js");
/* harmony import */ var _core_queriesObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/queriesObserver */ "./node_modules/react-query/es/core/queriesObserver.js");
/* harmony import */ var _QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider */ "./node_modules/react-query/es/react/QueryClientProvider.js");




function useQueries(queries) {
  var mountedRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),
      forceUpdate = _React$useState[1];

  var queryClient = (0,_QueryClientProvider__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  var defaultedQueries = queries.map(function (options) {
    var defaultedOptions = queryClient.defaultQueryObserverOptions(options); // Make sure the results are already in fetching state before subscribing or updating options

    defaultedOptions.optimisticResults = true;
    return defaultedOptions;
  });

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(function () {
    return new _core_queriesObserver__WEBPACK_IMPORTED_MODULE_2__.QueriesObserver(queryClient, defaultedQueries);
  }),
      observer = _React$useState2[0];

  var result = observer.getOptimisticResult(defaultedQueries);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = observer.subscribe(_core_notifyManager__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [observer]);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setQueries(defaultedQueries, {
      listeners: false
    });
  }, [defaultedQueries, observer]);
  return result;
}

/***/ }),

/***/ "./node_modules/react-query/es/react/useQuery.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-query/es/react/useQuery.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQuery": function() { return /* binding */ useQuery; }
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./node_modules/react-query/es/core/index.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils */ "./node_modules/react-query/es/core/utils.js");
/* harmony import */ var _useBaseQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBaseQuery */ "./node_modules/react-query/es/react/useBaseQuery.js");


 // HOOK

function useQuery(arg1, arg2, arg3) {
  var parsedOptions = (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.parseQueryArgs)(arg1, arg2, arg3);
  return (0,_useBaseQuery__WEBPACK_IMPORTED_MODULE_1__.useBaseQuery)(parsedOptions, _core__WEBPACK_IMPORTED_MODULE_2__.QueryObserver);
}

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js?ab5b1");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js?8d990"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguc2Nzcz8zOGRmIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5zY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9mb2N1c01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9pbmZpbml0ZVF1ZXJ5QmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL2luZmluaXRlUXVlcnlPYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvbG9nZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9tdXRhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvbXV0YXRpb25DYWNoZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvbXV0YXRpb25PYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvbm90aWZ5TWFuYWdlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvb25saW5lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvcXVlcmllc09ic2VydmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvY29yZS9xdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvcXVlcnlDYWNoZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvcXVlcnlDbGllbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3F1ZXJ5T2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3JldHJ5ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9jb3JlL3N1YnNjcmliYWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL2NvcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9oeWRyYXRpb24vaHlkcmF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvaHlkcmF0aW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvaHlkcmF0aW9uL3JlYWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC9RdWVyeUNsaWVudFByb3ZpZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3JlYWN0QmF0Y2hlZFVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC9zZXRCYXRjaFVwZGF0ZXNGbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3NldExvZ2dlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZUJhc2VRdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZUluZmluaXRlUXVlcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1xdWVyeS9lcy9yZWFjdC91c2VJc0ZldGNoaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlSXNNdXRhdGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZU11dGF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcXVlcnkvZXMvcmVhY3QvdXNlUXVlcmllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXF1ZXJ5L2VzL3JlYWN0L3VzZVF1ZXJ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnRSZWYiLCJ1c2VSZWYiLCJnZXRDbGllbnQiLCJjdXJyZW50IiwiUXVlcnlDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsImRlaHlkcmF0ZWRTdGF0ZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN4QyxN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QTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNULEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7Ozs7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QUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxR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LFNBQVM7QUFDbEM7QUFDQSxhQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkNBQTJDOztBQUUzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLGNBQWM7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2xyQ2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsRUFBRSx1SkFBc0U7QUFDeEUiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXF1ZXJ5J1xuaW1wb3J0IHsgSHlkcmF0ZSB9IGZyb20gJ3JlYWN0LXF1ZXJ5L2h5ZHJhdGlvbidcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGNsaWVudFJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBnZXRDbGllbnQgPSAoKSA9PiB7XG4gICAgaWYgKCFjbGllbnRSZWYuY3VycmVudClcbiAgICAgIGNsaWVudFJlZi5jdXJyZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcbiAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICBxdWVyaWVzOiB7XG4gICAgICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgcmV0dXJuIGNsaWVudFJlZi5jdXJyZW50XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17Z2V0Q2xpZW50KCl9PlxuICAgICAgPEh5ZHJhdGUgc3RhdGU9e3BhZ2VQcm9wcy5kZWh5ZHJhdGVkU3RhdGV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0h5ZHJhdGU+XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICApXG59XG5cbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHgsIENvbXBvbmVudCB9KSA9PiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM/LihjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMl0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzNdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVs0XSEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbNF0hLi9pbmRleC5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMl0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzNdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVs0XSEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9aWQrJyAnK2NvdW50LnRvU3RyaW5nKCk7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyOmlkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSk7fSk7aWYodHlwZW9mIG9wdGlvbnMuaW5zZXJ0PT09J2Z1bmN0aW9uJyl7b3B0aW9ucy5pbnNlcnQoc3R5bGUpO31lbHNle2NvbnN0IHRhcmdldD1nZXRUYXJnZXQob3B0aW9ucy5pbnNlcnR8fCdoZWFkJyk7aWYoIXRhcmdldCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt9dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTt9cmV0dXJuIHN0eWxlO31mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpey8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuaWYoc3R5bGUucGFyZW50Tm9kZT09PW51bGwpe3JldHVybiBmYWxzZTt9c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7fS8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL2NvbnN0IHJlcGxhY2VUZXh0PWZ1bmN0aW9uIHJlcGxhY2VUZXh0KCl7Y29uc3QgdGV4dFN0b3JlPVtdO3JldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LHJlcGxhY2VtZW50KXt0ZXh0U3RvcmVbaW5kZXhdPXJlcGxhY2VtZW50O3JldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO307fSgpO2Z1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsaW5kZXgscmVtb3ZlLG9iail7Y29uc3QgY3NzPXJlbW92ZT8nJzpvYmoubWVkaWE/J0BtZWRpYSAnK29iai5tZWRpYSsnIHsnK29iai5jc3MrJ30nOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9J1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJytidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpKycgKi8nO30vLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PWNzczt9ZWxzZXt3aGlsZShzdHlsZS5maXJzdENoaWxkKXtzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTt9c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7fX1sZXQgc2luZ2xldG9uPW51bGw7bGV0IHNpbmdsZXRvbkNvdW50ZXI9MDtmdW5jdGlvbiBhZGRTdHlsZShvYmosb3B0aW9ucyl7bGV0IHN0eWxlO2xldCB1cGRhdGU7bGV0IHJlbW92ZTtpZihvcHRpb25zLnNpbmdsZXRvbil7Y29uc3Qgc3R5bGVJbmRleD1zaW5nbGV0b25Db3VudGVyKys7c3R5bGU9c2luZ2xldG9ufHwoc2luZ2xldG9uPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7dXBkYXRlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsZmFsc2UpO3JlbW92ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LHRydWUpO31lbHNle3N0eWxlPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTt1cGRhdGU9YXBwbHlUb1RhZy5iaW5kKG51bGwsc3R5bGUsb3B0aW9ucyk7cmVtb3ZlPWZ1bmN0aW9uKCl7cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTt9O311cGRhdGUob2JqKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKXtpZihuZXdPYmope2lmKG5ld09iai5jc3M9PT1vYmouY3NzJiZuZXdPYmoubWVkaWE9PT1vYmoubWVkaWEmJm5ld09iai5zb3VyY2VNYXA9PT1vYmouc291cmNlTWFwKXtyZXR1cm47fXVwZGF0ZShvYmo9bmV3T2JqKTt9ZWxzZXtyZW1vdmUoKTt9fTt9bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24obGlzdCxvcHRpb25zKXtvcHRpb25zPW9wdGlvbnN8fHt9Oy8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuaWYoIW9wdGlvbnMuc2luZ2xldG9uJiZ0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24hPT0nYm9vbGVhbicpe29wdGlvbnMuc2luZ2xldG9uPWlzT2xkSUUoKTt9bGlzdD1saXN0fHxbXTtsZXQgbGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpO3JldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCl7bmV3TGlzdD1uZXdMaXN0fHxbXTtpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkhPT0nW29iamVjdCBBcnJheV0nKXtyZXR1cm47fWZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07fWNvbnN0IG5ld0xhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obmV3TGlzdCxvcHRpb25zKTtmb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtpZihzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcz09PTApe3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7c3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LDEpO319bGFzdElkZW50aWZpZXJzPW5ld0xhc3RJZGVudGlmaWVyczt9O307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNfX25leHQge1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLm1lc3NhZ2VzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ubWVzc2FnZXNfX2lucHV0IHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XFxufVxcbi5tZXNzYWdlc19faW5wdXQgPiAqIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm1lc3NhZ2VzX19pbnB1dCB0ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgLW1vei1ib3gtZmxleDogMTtcXG4gICAgICAgZmxleC1ncm93OiAxO1xcbn1cXG4ubWVzc2FnZXNfX2lucHV0IGJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcbi5tZXNzYWdlc19faXRlbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBhZGRpbmc6IDE1cHggMTVweCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjYWFhO1xcbn1cXG4ubWVzc2FnZXNfX2l0ZW0gaDMge1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBtYXJnaW46IDAgMCAxMHB4O1xcbn1cXG4ubWVzc2FnZXNfX2l0ZW0gc3ViIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4ubWVzc2FnZXNfX2l0ZW0gcCB7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuLm1lc3NhZ2VzX19pdGVtOmhvdmVyIC5tZXNzYWdlc19fYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1lc3NhZ2VzX19pdGVtIC5tZXNzYWdlc19faW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tZXNzYWdlc19fYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICByaWdodDogMTBweDtcXG4gIGJvdHRvbTogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFJRjtBQUhFO0VBQ0UsaUJBQUE7RUFBQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUtKO0FBSkk7RUFDRSw4QkFBQTtLQUFBLDJCQUFBO1VBQUEsc0JBQUE7QUFNTjtBQUpJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO09BQUEsWUFBQTtBQU1OO0FBSkk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFNTjtBQUhFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBS0o7QUFKSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFNTjtBQUpJO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBTU47QUFKSTtFQUNFLGNBQUE7QUFNTjtBQUpJO0VBQ0UsY0FBQTtBQU1OO0FBSkk7RUFDRSxXQUFBO0FBTU47QUFIRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFLSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuI19fbmV4dCB7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG4ubWVzc2FnZXMge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICAmX19pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XFxuICAgID4gKiB7XFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgfVxcbiAgICB0ZXh0YXJlYSB7XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxuICAgIH1cXG4gICAgYnV0dG9uIHtcXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICB9XFxuICB9XFxuICAmX19pdGVtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjYWFhO1xcbiAgICBoMyB7XFxuICAgICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgICAgbWFyZ2luOiAwIDAgMTBweDtcXG4gICAgfVxcbiAgICBzdWIge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgIH1cXG4gICAgcCB7XFxuICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIH1cXG4gICAgJjpob3ZlciAubWVzc2FnZXNfX2J1dHRvbnMge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC5tZXNzYWdlc19faW5wdXQge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICB9XFxuICAmX19idXR0b25zIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGJvdHRvbTogMTBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAnLi9zdWJzY3JpYmFibGUnO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICcuL3V0aWxzJztcblxudmFyIEZvY3VzTWFuYWdlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N1YnNjcmliYWJsZSkge1xuICBfaW5oZXJpdHNMb29zZShGb2N1c01hbmFnZXIsIF9TdWJzY3JpYmFibGUpO1xuXG4gIGZ1bmN0aW9uIEZvY3VzTWFuYWdlcigpIHtcbiAgICByZXR1cm4gX1N1YnNjcmliYWJsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRm9jdXNNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25TdWJzY3JpYmUgPSBmdW5jdGlvbiBvblN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5zZXREZWZhdWx0RXZlbnRMaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2V0RXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHNldEV2ZW50TGlzdGVuZXIoc2V0dXApIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyID0gc2V0dXAoZnVuY3Rpb24gKGZvY3VzZWQpIHtcbiAgICAgIGlmICh0eXBlb2YgZm9jdXNlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIF90aGlzLnNldEZvY3VzZWQoZm9jdXNlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5vbkZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnNldEZvY3VzZWQgPSBmdW5jdGlvbiBzZXRGb2N1c2VkKGZvY3VzZWQpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmb2N1c2VkO1xuXG4gICAgaWYgKGZvY3VzZWQpIHtcbiAgICAgIHRoaXMub25Gb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25Gb2N1cyA9IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmlzRm9jdXNlZCA9IGZ1bmN0aW9uIGlzRm9jdXNlZCgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZm9jdXNlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb2N1c2VkO1xuICAgIH0gLy8gZG9jdW1lbnQgZ2xvYmFsIGNhbiBiZSB1bmF2YWlsYWJsZSBpbiByZWFjdCBuYXRpdmVcblxuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBbdW5kZWZpbmVkLCAndmlzaWJsZScsICdwcmVyZW5kZXInXS5pbmNsdWRlcyhkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUpO1xuICB9O1xuXG4gIF9wcm90by5zZXREZWZhdWx0RXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHNldERlZmF1bHRFdmVudExpc3RlbmVyKCkge1xuICAgIHZhciBfd2luZG93O1xuXG4gICAgaWYgKCFpc1NlcnZlciAmJiAoKF93aW5kb3cgPSB3aW5kb3cpID09IG51bGwgPyB2b2lkIDAgOiBfd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpKSB7XG4gICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXIoZnVuY3Rpb24gKG9uRm9jdXMpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIG9uRm9jdXMoKTtcbiAgICAgICAgfTsgLy8gTGlzdGVuIHRvIHZpc2liaWxsaXR5Y2hhbmdlIGFuZCBmb2N1c1xuXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEJlIHN1cmUgdG8gdW5zdWJzY3JpYmUgaWYgYSBuZXcgaGFuZGxlciBpcyBzZXRcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGxpc3RlbmVyKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEZvY3VzTWFuYWdlcjtcbn0oU3Vic2NyaWJhYmxlKTtcblxuZXhwb3J0IHZhciBmb2N1c01hbmFnZXIgPSBuZXcgRm9jdXNNYW5hZ2VyKCk7IiwiZXhwb3J0IHsgQ2FuY2VsbGVkRXJyb3IgfSBmcm9tICcuL3JldHJ5ZXInO1xuZXhwb3J0IHsgUXVlcnlDYWNoZSB9IGZyb20gJy4vcXVlcnlDYWNoZSc7XG5leHBvcnQgeyBRdWVyeUNsaWVudCB9IGZyb20gJy4vcXVlcnlDbGllbnQnO1xuZXhwb3J0IHsgUXVlcnlPYnNlcnZlciB9IGZyb20gJy4vcXVlcnlPYnNlcnZlcic7XG5leHBvcnQgeyBRdWVyaWVzT2JzZXJ2ZXIgfSBmcm9tICcuL3F1ZXJpZXNPYnNlcnZlcic7XG5leHBvcnQgeyBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIgfSBmcm9tICcuL2luZmluaXRlUXVlcnlPYnNlcnZlcic7XG5leHBvcnQgeyBNdXRhdGlvbkNhY2hlIH0gZnJvbSAnLi9tdXRhdGlvbkNhY2hlJztcbmV4cG9ydCB7IE11dGF0aW9uT2JzZXJ2ZXIgfSBmcm9tICcuL211dGF0aW9uT2JzZXJ2ZXInO1xuZXhwb3J0IHsgc2V0TG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuZXhwb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5leHBvcnQgeyBmb2N1c01hbmFnZXIgfSBmcm9tICcuL2ZvY3VzTWFuYWdlcic7XG5leHBvcnQgeyBvbmxpbmVNYW5hZ2VyIH0gZnJvbSAnLi9vbmxpbmVNYW5hZ2VyJztcbmV4cG9ydCB7IGhhc2hRdWVyeUtleSwgaXNFcnJvciB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IHsgaXNDYW5jZWxsZWRFcnJvciB9IGZyb20gJy4vcmV0cnllcic7IC8vIFR5cGVzXG5cbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnOyIsImltcG9ydCB7IGlzQ2FuY2VsYWJsZSB9IGZyb20gJy4vcmV0cnllcic7XG5leHBvcnQgZnVuY3Rpb24gaW5maW5pdGVRdWVyeUJlaGF2aW9yKCkge1xuICByZXR1cm4ge1xuICAgIG9uRmV0Y2g6IGZ1bmN0aW9uIG9uRmV0Y2goY29udGV4dCkge1xuICAgICAgY29udGV4dC5mZXRjaEZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2NvbnRleHQkZmV0Y2hPcHRpb25zLCBfY29udGV4dCRmZXRjaE9wdGlvbnMyLCBfY29udGV4dCRzdGF0ZSRkYXRhLCBfY29udGV4dCRzdGF0ZSRkYXRhMjtcblxuICAgICAgICB2YXIgZmV0Y2hNb3JlID0gKF9jb250ZXh0JGZldGNoT3B0aW9ucyA9IGNvbnRleHQuZmV0Y2hPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogKF9jb250ZXh0JGZldGNoT3B0aW9uczIgPSBfY29udGV4dCRmZXRjaE9wdGlvbnMubWV0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jb250ZXh0JGZldGNoT3B0aW9uczIuZmV0Y2hNb3JlO1xuICAgICAgICB2YXIgcGFnZVBhcmFtID0gZmV0Y2hNb3JlID09IG51bGwgPyB2b2lkIDAgOiBmZXRjaE1vcmUucGFnZVBhcmFtO1xuICAgICAgICB2YXIgaXNGZXRjaGluZ05leHRQYWdlID0gKGZldGNoTW9yZSA9PSBudWxsID8gdm9pZCAwIDogZmV0Y2hNb3JlLmRpcmVjdGlvbikgPT09ICdmb3J3YXJkJztcbiAgICAgICAgdmFyIGlzRmV0Y2hpbmdQcmV2aW91c1BhZ2UgPSAoZmV0Y2hNb3JlID09IG51bGwgPyB2b2lkIDAgOiBmZXRjaE1vcmUuZGlyZWN0aW9uKSA9PT0gJ2JhY2t3YXJkJztcbiAgICAgICAgdmFyIG9sZFBhZ2VzID0gKChfY29udGV4dCRzdGF0ZSRkYXRhID0gY29udGV4dC5zdGF0ZS5kYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2NvbnRleHQkc3RhdGUkZGF0YS5wYWdlcykgfHwgW107XG4gICAgICAgIHZhciBvbGRQYWdlUGFyYW1zID0gKChfY29udGV4dCRzdGF0ZSRkYXRhMiA9IGNvbnRleHQuc3RhdGUuZGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jb250ZXh0JHN0YXRlJGRhdGEyLnBhZ2VQYXJhbXMpIHx8IFtdO1xuICAgICAgICB2YXIgbmV3UGFnZVBhcmFtcyA9IG9sZFBhZ2VQYXJhbXM7XG4gICAgICAgIHZhciBjYW5jZWxsZWQgPSBmYWxzZTsgLy8gR2V0IHF1ZXJ5IGZ1bmN0aW9uXG5cbiAgICAgICAgdmFyIHF1ZXJ5Rm4gPSBjb250ZXh0Lm9wdGlvbnMucXVlcnlGbiB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdNaXNzaW5nIHF1ZXJ5Rm4nKTtcbiAgICAgICAgfTsgLy8gQ3JlYXRlIGZ1bmN0aW9uIHRvIGZldGNoIGEgcGFnZVxuXG5cbiAgICAgICAgdmFyIGZldGNoUGFnZSA9IGZ1bmN0aW9uIGZldGNoUGFnZShwYWdlcywgbWFudWFsLCBwYXJhbSwgcHJldmlvdXMpIHtcbiAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ0NhbmNlbGxlZCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICd1bmRlZmluZWQnICYmICFtYW51YWwgJiYgcGFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBhZ2VzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcXVlcnlGbkNvbnRleHQgPSB7XG4gICAgICAgICAgICBxdWVyeUtleTogY29udGV4dC5xdWVyeUtleSxcbiAgICAgICAgICAgIHBhZ2VQYXJhbTogcGFyYW1cbiAgICAgICAgICB9O1xuICAgICAgICAgIHZhciBxdWVyeUZuUmVzdWx0ID0gcXVlcnlGbihxdWVyeUZuQ29udGV4dCk7XG4gICAgICAgICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUocXVlcnlGblJlc3VsdCkudGhlbihmdW5jdGlvbiAocGFnZSkge1xuICAgICAgICAgICAgbmV3UGFnZVBhcmFtcyA9IHByZXZpb3VzID8gW3BhcmFtXS5jb25jYXQobmV3UGFnZVBhcmFtcykgOiBbXS5jb25jYXQobmV3UGFnZVBhcmFtcywgW3BhcmFtXSk7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMgPyBbcGFnZV0uY29uY2F0KHBhZ2VzKSA6IFtdLmNvbmNhdChwYWdlcywgW3BhZ2VdKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChpc0NhbmNlbGFibGUocXVlcnlGblJlc3VsdCkpIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlQXNBbnkgPSBwcm9taXNlO1xuICAgICAgICAgICAgcHJvbWlzZUFzQW55LmNhbmNlbCA9IHF1ZXJ5Rm5SZXN1bHQuY2FuY2VsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBwcm9taXNlOyAvLyBGZXRjaCBmaXJzdCBwYWdlP1xuXG4gICAgICAgIGlmICghb2xkUGFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcHJvbWlzZSA9IGZldGNoUGFnZShbXSk7XG4gICAgICAgIH0gLy8gRmV0Y2ggbmV4dCBwYWdlP1xuICAgICAgICBlbHNlIGlmIChpc0ZldGNoaW5nTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgIHZhciBtYW51YWwgPSB0eXBlb2YgcGFnZVBhcmFtICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgICAgIHZhciBwYXJhbSA9IG1hbnVhbCA/IHBhZ2VQYXJhbSA6IGdldE5leHRQYWdlUGFyYW0oY29udGV4dC5vcHRpb25zLCBvbGRQYWdlcyk7XG4gICAgICAgICAgICBwcm9taXNlID0gZmV0Y2hQYWdlKG9sZFBhZ2VzLCBtYW51YWwsIHBhcmFtKTtcbiAgICAgICAgICB9IC8vIEZldGNoIHByZXZpb3VzIHBhZ2U/XG4gICAgICAgICAgZWxzZSBpZiAoaXNGZXRjaGluZ1ByZXZpb3VzUGFnZSkge1xuICAgICAgICAgICAgICB2YXIgX21hbnVhbCA9IHR5cGVvZiBwYWdlUGFyYW0gIT09ICd1bmRlZmluZWQnO1xuXG4gICAgICAgICAgICAgIHZhciBfcGFyYW0gPSBfbWFudWFsID8gcGFnZVBhcmFtIDogZ2V0UHJldmlvdXNQYWdlUGFyYW0oY29udGV4dC5vcHRpb25zLCBvbGRQYWdlcyk7XG5cbiAgICAgICAgICAgICAgcHJvbWlzZSA9IGZldGNoUGFnZShvbGRQYWdlcywgX21hbnVhbCwgX3BhcmFtLCB0cnVlKTtcbiAgICAgICAgICAgIH0gLy8gUmVmZXRjaCBwYWdlc1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIG5ld1BhZ2VQYXJhbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgIHZhciBtYW51YWwgPSB0eXBlb2YgY29udGV4dC5vcHRpb25zLmdldE5leHRQYWdlUGFyYW0gPT09ICd1bmRlZmluZWQnOyAvLyBGZXRjaCBmaXJzdCBwYWdlXG5cbiAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBmZXRjaFBhZ2UoW10sIG1hbnVhbCwgb2xkUGFnZVBhcmFtc1swXSk7IC8vIEZldGNoIHJlbWFpbmluZyBwYWdlc1xuXG4gICAgICAgICAgICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHBhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbWFudWFsID8gb2xkUGFnZVBhcmFtc1tpXSA6IGdldE5leHRQYWdlUGFyYW0oY29udGV4dC5vcHRpb25zLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUGFnZShwYWdlcywgbWFudWFsLCBwYXJhbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBvbGRQYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBfbG9vcChpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZpbmFsUHJvbWlzZSA9IHByb21pc2UudGhlbihmdW5jdGlvbiAocGFnZXMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZXM6IHBhZ2VzLFxuICAgICAgICAgICAgcGFnZVBhcmFtczogbmV3UGFnZVBhcmFtc1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZmluYWxQcm9taXNlQXNBbnkgPSBmaW5hbFByb21pc2U7XG5cbiAgICAgICAgZmluYWxQcm9taXNlQXNBbnkuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoaXNDYW5jZWxhYmxlKHByb21pc2UpKSB7XG4gICAgICAgICAgICBwcm9taXNlLmNhbmNlbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZmluYWxQcm9taXNlO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dFBhZ2VQYXJhbShvcHRpb25zLCBwYWdlcykge1xuICByZXR1cm4gb3B0aW9ucy5nZXROZXh0UGFnZVBhcmFtID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmdldE5leHRQYWdlUGFyYW0ocGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0sIHBhZ2VzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmV2aW91c1BhZ2VQYXJhbShvcHRpb25zLCBwYWdlcykge1xuICByZXR1cm4gb3B0aW9ucy5nZXRQcmV2aW91c1BhZ2VQYXJhbSA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5nZXRQcmV2aW91c1BhZ2VQYXJhbShwYWdlc1swXSwgcGFnZXMpO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBuZXh0IHBhZ2UuXG4gKiBSZXR1cm5zIGB1bmRlZmluZWRgIGlmIGl0IGNhbm5vdCBiZSBkZXRlcm1pbmVkLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNOZXh0UGFnZShvcHRpb25zLCBwYWdlcykge1xuICBpZiAob3B0aW9ucy5nZXROZXh0UGFnZVBhcmFtICYmIEFycmF5LmlzQXJyYXkocGFnZXMpKSB7XG4gICAgdmFyIG5leHRQYWdlUGFyYW0gPSBnZXROZXh0UGFnZVBhcmFtKG9wdGlvbnMsIHBhZ2VzKTtcbiAgICByZXR1cm4gdHlwZW9mIG5leHRQYWdlUGFyYW0gIT09ICd1bmRlZmluZWQnICYmIG5leHRQYWdlUGFyYW0gIT09IG51bGwgJiYgbmV4dFBhZ2VQYXJhbSAhPT0gZmFsc2U7XG4gIH1cbn1cbi8qKlxuICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgcHJldmlvdXMgcGFnZS5cbiAqIFJldHVybnMgYHVuZGVmaW5lZGAgaWYgaXQgY2Fubm90IGJlIGRldGVybWluZWQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1ByZXZpb3VzUGFnZShvcHRpb25zLCBwYWdlcykge1xuICBpZiAob3B0aW9ucy5nZXRQcmV2aW91c1BhZ2VQYXJhbSAmJiBBcnJheS5pc0FycmF5KHBhZ2VzKSkge1xuICAgIHZhciBwcmV2aW91c1BhZ2VQYXJhbSA9IGdldFByZXZpb3VzUGFnZVBhcmFtKG9wdGlvbnMsIHBhZ2VzKTtcbiAgICByZXR1cm4gdHlwZW9mIHByZXZpb3VzUGFnZVBhcmFtICE9PSAndW5kZWZpbmVkJyAmJiBwcmV2aW91c1BhZ2VQYXJhbSAhPT0gbnVsbCAmJiBwcmV2aW91c1BhZ2VQYXJhbSAhPT0gZmFsc2U7XG4gIH1cbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgUXVlcnlPYnNlcnZlciB9IGZyb20gJy4vcXVlcnlPYnNlcnZlcic7XG5pbXBvcnQgeyBoYXNOZXh0UGFnZSwgaGFzUHJldmlvdXNQYWdlLCBpbmZpbml0ZVF1ZXJ5QmVoYXZpb3IgfSBmcm9tICcuL2luZmluaXRlUXVlcnlCZWhhdmlvcic7XG5leHBvcnQgdmFyIEluZmluaXRlUXVlcnlPYnNlcnZlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1F1ZXJ5T2JzZXJ2ZXIpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW5maW5pdGVRdWVyeU9ic2VydmVyLCBfUXVlcnlPYnNlcnZlcik7XG5cbiAgLy8gVHlwZSBvdmVycmlkZVxuICAvLyBUeXBlIG92ZXJyaWRlXG4gIC8vIFR5cGUgb3ZlcnJpZGVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2VsZXNzLWNvbnN0cnVjdG9yXG4gIGZ1bmN0aW9uIEluZmluaXRlUXVlcnlPYnNlcnZlcihjbGllbnQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gX1F1ZXJ5T2JzZXJ2ZXIuY2FsbCh0aGlzLCBjbGllbnQsIG9wdGlvbnMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW5maW5pdGVRdWVyeU9ic2VydmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYmluZE1ldGhvZHMgPSBmdW5jdGlvbiBiaW5kTWV0aG9kcygpIHtcbiAgICBfUXVlcnlPYnNlcnZlci5wcm90b3R5cGUuYmluZE1ldGhvZHMuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuZmV0Y2hOZXh0UGFnZSA9IHRoaXMuZmV0Y2hOZXh0UGFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmV0Y2hQcmV2aW91c1BhZ2UgPSB0aGlzLmZldGNoUHJldmlvdXNQYWdlLmJpbmQodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLnNldE9wdGlvbnMgPSBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBfUXVlcnlPYnNlcnZlci5wcm90b3R5cGUuc2V0T3B0aW9ucy5jYWxsKHRoaXMsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBiZWhhdmlvcjogaW5maW5pdGVRdWVyeUJlaGF2aW9yKClcbiAgICB9KSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldE9wdGltaXN0aWNSZXN1bHQgPSBmdW5jdGlvbiBnZXRPcHRpbWlzdGljUmVzdWx0KG9wdGlvbnMpIHtcbiAgICBvcHRpb25zLmJlaGF2aW9yID0gaW5maW5pdGVRdWVyeUJlaGF2aW9yKCk7XG4gICAgcmV0dXJuIF9RdWVyeU9ic2VydmVyLnByb3RvdHlwZS5nZXRPcHRpbWlzdGljUmVzdWx0LmNhbGwodGhpcywgb3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLmZldGNoTmV4dFBhZ2UgPSBmdW5jdGlvbiBmZXRjaE5leHRQYWdlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5mZXRjaCh7XG4gICAgICBjYW5jZWxSZWZldGNoOiB0cnVlLFxuICAgICAgdGhyb3dPbkVycm9yOiBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnRocm93T25FcnJvcixcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgZmV0Y2hNb3JlOiB7XG4gICAgICAgICAgZGlyZWN0aW9uOiAnZm9yd2FyZCcsXG4gICAgICAgICAgcGFnZVBhcmFtOiBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnBhZ2VQYXJhbVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmZldGNoUHJldmlvdXNQYWdlID0gZnVuY3Rpb24gZmV0Y2hQcmV2aW91c1BhZ2Uob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmZldGNoKHtcbiAgICAgIGNhbmNlbFJlZmV0Y2g6IHRydWUsXG4gICAgICB0aHJvd09uRXJyb3I6IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMudGhyb3dPbkVycm9yLFxuICAgICAgbWV0YToge1xuICAgICAgICBmZXRjaE1vcmU6IHtcbiAgICAgICAgICBkaXJlY3Rpb246ICdiYWNrd2FyZCcsXG4gICAgICAgICAgcGFnZVBhcmFtOiBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnBhZ2VQYXJhbVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZVJlc3VsdCA9IGZ1bmN0aW9uIGNyZWF0ZVJlc3VsdChxdWVyeSwgb3B0aW9ucykge1xuICAgIHZhciBfc3RhdGUkZGF0YSwgX3N0YXRlJGRhdGEyLCBfc3RhdGUkZmV0Y2hNZXRhLCBfc3RhdGUkZmV0Y2hNZXRhJGZldGMsIF9zdGF0ZSRmZXRjaE1ldGEyLCBfc3RhdGUkZmV0Y2hNZXRhMiRmZXQ7XG5cbiAgICB2YXIgc3RhdGUgPSBxdWVyeS5zdGF0ZTtcblxuICAgIHZhciByZXN1bHQgPSBfUXVlcnlPYnNlcnZlci5wcm90b3R5cGUuY3JlYXRlUmVzdWx0LmNhbGwodGhpcywgcXVlcnksIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN1bHQsIHtcbiAgICAgIGZldGNoTmV4dFBhZ2U6IHRoaXMuZmV0Y2hOZXh0UGFnZSxcbiAgICAgIGZldGNoUHJldmlvdXNQYWdlOiB0aGlzLmZldGNoUHJldmlvdXNQYWdlLFxuICAgICAgaGFzTmV4dFBhZ2U6IGhhc05leHRQYWdlKG9wdGlvbnMsIChfc3RhdGUkZGF0YSA9IHN0YXRlLmRhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfc3RhdGUkZGF0YS5wYWdlcyksXG4gICAgICBoYXNQcmV2aW91c1BhZ2U6IGhhc1ByZXZpb3VzUGFnZShvcHRpb25zLCAoX3N0YXRlJGRhdGEyID0gc3RhdGUuZGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9zdGF0ZSRkYXRhMi5wYWdlcyksXG4gICAgICBpc0ZldGNoaW5nTmV4dFBhZ2U6IHN0YXRlLmlzRmV0Y2hpbmcgJiYgKChfc3RhdGUkZmV0Y2hNZXRhID0gc3RhdGUuZmV0Y2hNZXRhKSA9PSBudWxsID8gdm9pZCAwIDogKF9zdGF0ZSRmZXRjaE1ldGEkZmV0YyA9IF9zdGF0ZSRmZXRjaE1ldGEuZmV0Y2hNb3JlKSA9PSBudWxsID8gdm9pZCAwIDogX3N0YXRlJGZldGNoTWV0YSRmZXRjLmRpcmVjdGlvbikgPT09ICdmb3J3YXJkJyxcbiAgICAgIGlzRmV0Y2hpbmdQcmV2aW91c1BhZ2U6IHN0YXRlLmlzRmV0Y2hpbmcgJiYgKChfc3RhdGUkZmV0Y2hNZXRhMiA9IHN0YXRlLmZldGNoTWV0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IChfc3RhdGUkZmV0Y2hNZXRhMiRmZXQgPSBfc3RhdGUkZmV0Y2hNZXRhMi5mZXRjaE1vcmUpID09IG51bGwgPyB2b2lkIDAgOiBfc3RhdGUkZmV0Y2hNZXRhMiRmZXQuZGlyZWN0aW9uKSA9PT0gJ2JhY2t3YXJkJ1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXI7XG59KFF1ZXJ5T2JzZXJ2ZXIpOyIsImltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWxzJzsgLy8gVFlQRVNcblxuLy8gRlVOQ1RJT05TXG52YXIgbG9nZ2VyID0gY29uc29sZSB8fCB7XG4gIGVycm9yOiBub29wLFxuICB3YXJuOiBub29wLFxuICBsb2c6IG5vb3Bcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9nZ2VyKCkge1xuICByZXR1cm4gbG9nZ2VyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldExvZ2dlcihuZXdMb2dnZXIpIHtcbiAgbG9nZ2VyID0gbmV3TG9nZ2VyO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBSZXRyeWVyIH0gZnJvbSAnLi9yZXRyeWVyJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWxzJzsgLy8gVFlQRVNcblxuLy8gQ0xBU1NcbmV4cG9ydCB2YXIgTXV0YXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNdXRhdGlvbihjb25maWcpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgY29uZmlnLmRlZmF1bHRPcHRpb25zLCBjb25maWcub3B0aW9ucyk7XG4gICAgdGhpcy5tdXRhdGlvbklkID0gY29uZmlnLm11dGF0aW9uSWQ7XG4gICAgdGhpcy5tdXRhdGlvbkNhY2hlID0gY29uZmlnLm11dGF0aW9uQ2FjaGU7XG4gICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICB0aGlzLnN0YXRlID0gY29uZmlnLnN0YXRlIHx8IGdldERlZmF1bHRTdGF0ZSgpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE11dGF0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ3NldFN0YXRlJyxcbiAgICAgIHN0YXRlOiBzdGF0ZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5hZGRPYnNlcnZlciA9IGZ1bmN0aW9uIGFkZE9ic2VydmVyKG9ic2VydmVyKSB7XG4gICAgaWYgKHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpID09PSAtMSkge1xuICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIHJlbW92ZU9ic2VydmVyKG9ic2VydmVyKSB7XG4gICAgdGhpcy5vYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycy5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4ICE9PSBvYnNlcnZlcjtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aGlzLnJldHJ5ZXIpIHtcbiAgICAgIHRoaXMucmV0cnllci5jYW5jZWwoKTtcbiAgICAgIHJldHVybiB0aGlzLnJldHJ5ZXIucHJvbWlzZS50aGVuKG5vb3ApLmNhdGNoKG5vb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBfcHJvdG8uY29udGludWUgPSBmdW5jdGlvbiBfY29udGludWUoKSB7XG4gICAgaWYgKHRoaXMucmV0cnllcikge1xuICAgICAgdGhpcy5yZXRyeWVyLmNvbnRpbnVlKCk7XG4gICAgICByZXR1cm4gdGhpcy5yZXRyeWVyLnByb21pc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSgpO1xuICB9O1xuXG4gIF9wcm90by5leGVjdXRlID0gZnVuY3Rpb24gZXhlY3V0ZSgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGRhdGE7XG4gICAgdmFyIHJlc3RvcmVkID0gdGhpcy5zdGF0ZS5zdGF0dXMgPT09ICdsb2FkaW5nJztcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgaWYgKCFyZXN0b3JlZCkge1xuICAgICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdsb2FkaW5nJyxcbiAgICAgICAgdmFyaWFibGVzOiB0aGlzLm9wdGlvbnMudmFyaWFibGVzXG4gICAgICB9KTtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMub3B0aW9ucy5vbk11dGF0ZSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMub3B0aW9ucy5vbk11dGF0ZShfdGhpcy5zdGF0ZS52YXJpYWJsZXMpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICBpZiAoY29udGV4dCAhPT0gX3RoaXMuc3RhdGUuY29udGV4dCkge1xuICAgICAgICAgIF90aGlzLmRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsb2FkaW5nJyxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IF90aGlzLnN0YXRlLnZhcmlhYmxlc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5leGVjdXRlTXV0YXRpb24oKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIGRhdGEgPSByZXN1bHQ7IC8vIE5vdGlmeSBjYWNoZSBjYWxsYmFja1xuXG4gICAgICBfdGhpcy5tdXRhdGlvbkNhY2hlLmNvbmZpZy5vblN1Y2Nlc3MgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzLm11dGF0aW9uQ2FjaGUuY29uZmlnLm9uU3VjY2VzcyhkYXRhLCBfdGhpcy5zdGF0ZS52YXJpYWJsZXMsIF90aGlzLnN0YXRlLmNvbnRleHQsIF90aGlzKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5vcHRpb25zLm9uU3VjY2VzcyA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMub3B0aW9ucy5vblN1Y2Nlc3MoZGF0YSwgX3RoaXMuc3RhdGUudmFyaWFibGVzLCBfdGhpcy5zdGF0ZS5jb250ZXh0KTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5vcHRpb25zLm9uU2V0dGxlZCA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMub3B0aW9ucy5vblNldHRsZWQoZGF0YSwgbnVsbCwgX3RoaXMuc3RhdGUudmFyaWFibGVzLCBfdGhpcy5zdGF0ZS5jb250ZXh0KTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAvLyBOb3RpZnkgY2FjaGUgY2FsbGJhY2tcbiAgICAgIF90aGlzLm11dGF0aW9uQ2FjaGUuY29uZmlnLm9uRXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzLm11dGF0aW9uQ2FjaGUuY29uZmlnLm9uRXJyb3IoZXJyb3IsIF90aGlzLnN0YXRlLnZhcmlhYmxlcywgX3RoaXMuc3RhdGUuY29udGV4dCwgX3RoaXMpOyAvLyBMb2cgZXJyb3JcblxuICAgICAgZ2V0TG9nZ2VyKCkuZXJyb3IoZXJyb3IpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMub3B0aW9ucy5vbkVycm9yID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcy5vcHRpb25zLm9uRXJyb3IoZXJyb3IsIF90aGlzLnN0YXRlLnZhcmlhYmxlcywgX3RoaXMuc3RhdGUuY29udGV4dCk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcy5vcHRpb25zLm9uU2V0dGxlZCh1bmRlZmluZWQsIGVycm9yLCBfdGhpcy5zdGF0ZS52YXJpYWJsZXMsIF90aGlzLnN0YXRlLmNvbnRleHQpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICB9KTtcblxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5leGVjdXRlTXV0YXRpb24gPSBmdW5jdGlvbiBleGVjdXRlTXV0YXRpb24oKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXMsXG4gICAgICAgIF90aGlzJG9wdGlvbnMkcmV0cnk7XG5cbiAgICB0aGlzLnJldHJ5ZXIgPSBuZXcgUmV0cnllcih7XG4gICAgICBmbjogZnVuY3Rpb24gZm4oKSB7XG4gICAgICAgIGlmICghX3RoaXMyLm9wdGlvbnMubXV0YXRpb25Gbikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnTm8gbXV0YXRpb25GbiBmb3VuZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF90aGlzMi5vcHRpb25zLm11dGF0aW9uRm4oX3RoaXMyLnN0YXRlLnZhcmlhYmxlcyk7XG4gICAgICB9LFxuICAgICAgb25GYWlsOiBmdW5jdGlvbiBvbkZhaWwoKSB7XG4gICAgICAgIF90aGlzMi5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ2ZhaWxlZCdcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb25QYXVzZTogZnVuY3Rpb24gb25QYXVzZSgpIHtcbiAgICAgICAgX3RoaXMyLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAncGF1c2UnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9uQ29udGludWU6IGZ1bmN0aW9uIG9uQ29udGludWUoKSB7XG4gICAgICAgIF90aGlzMi5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ2NvbnRpbnVlJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICByZXRyeTogKF90aGlzJG9wdGlvbnMkcmV0cnkgPSB0aGlzLm9wdGlvbnMucmV0cnkpICE9IG51bGwgPyBfdGhpcyRvcHRpb25zJHJldHJ5IDogMCxcbiAgICAgIHJldHJ5RGVsYXk6IHRoaXMub3B0aW9ucy5yZXRyeURlbGF5XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucmV0cnllci5wcm9taXNlO1xuICB9O1xuXG4gIF9wcm90by5kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHJlZHVjZXIodGhpcy5zdGF0ZSwgYWN0aW9uKTtcbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIub25NdXRhdGlvblVwZGF0ZShhY3Rpb24pO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzMy5tdXRhdGlvbkNhY2hlLm5vdGlmeShfdGhpczMpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBNdXRhdGlvbjtcbn0oKTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0U3RhdGUoKSB7XG4gIHJldHVybiB7XG4gICAgY29udGV4dDogdW5kZWZpbmVkLFxuICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBmYWlsdXJlQ291bnQ6IDAsXG4gICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgIHN0YXR1czogJ2lkbGUnLFxuICAgIHZhcmlhYmxlczogdW5kZWZpbmVkXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnZmFpbGVkJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZmFpbHVyZUNvdW50OiBzdGF0ZS5mYWlsdXJlQ291bnQgKyAxXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BhdXNlJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNQYXVzZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnY29udGludWUnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1BhdXNlZDogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnbG9hZGluZyc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbnRleHQ6IGFjdGlvbi5jb250ZXh0LFxuICAgICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBpc1BhdXNlZDogZmFsc2UsXG4gICAgICAgIHN0YXR1czogJ2xvYWRpbmcnLFxuICAgICAgICB2YXJpYWJsZXM6IGFjdGlvbi52YXJpYWJsZXNcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgIGlzUGF1c2VkOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICBjYXNlICdlcnJvcic6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgZmFpbHVyZUNvdW50OiBzdGF0ZS5mYWlsdXJlQ291bnQgKyAxLFxuICAgICAgICBpc1BhdXNlZDogZmFsc2UsXG4gICAgICAgIHN0YXR1czogJ2Vycm9yJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdzZXRTdGF0ZSc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBhY3Rpb24uc3RhdGUpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBNdXRhdGlvbiB9IGZyb20gJy4vbXV0YXRpb24nO1xuaW1wb3J0IHsgbWF0Y2hNdXRhdGlvbiwgbm9vcCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAnLi9zdWJzY3JpYmFibGUnOyAvLyBUWVBFU1xuXG4vLyBDTEFTU1xuZXhwb3J0IHZhciBNdXRhdGlvbkNhY2hlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3Vic2NyaWJhYmxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKE11dGF0aW9uQ2FjaGUsIF9TdWJzY3JpYmFibGUpO1xuXG4gIGZ1bmN0aW9uIE11dGF0aW9uQ2FjaGUoY29uZmlnKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfU3Vic2NyaWJhYmxlLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XG4gICAgX3RoaXMubXV0YXRpb25zID0gW107XG4gICAgX3RoaXMubXV0YXRpb25JZCA9IDA7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE11dGF0aW9uQ2FjaGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5idWlsZCA9IGZ1bmN0aW9uIGJ1aWxkKGNsaWVudCwgb3B0aW9ucywgc3RhdGUpIHtcbiAgICB2YXIgbXV0YXRpb24gPSBuZXcgTXV0YXRpb24oe1xuICAgICAgbXV0YXRpb25DYWNoZTogdGhpcyxcbiAgICAgIG11dGF0aW9uSWQ6ICsrdGhpcy5tdXRhdGlvbklkLFxuICAgICAgb3B0aW9uczogY2xpZW50LmRlZmF1bHRNdXRhdGlvbk9wdGlvbnMob3B0aW9ucyksXG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBkZWZhdWx0T3B0aW9uczogb3B0aW9ucy5tdXRhdGlvbktleSA/IGNsaWVudC5nZXRNdXRhdGlvbkRlZmF1bHRzKG9wdGlvbnMubXV0YXRpb25LZXkpIDogdW5kZWZpbmVkXG4gICAgfSk7XG4gICAgdGhpcy5hZGQobXV0YXRpb24pO1xuICAgIHJldHVybiBtdXRhdGlvbjtcbiAgfTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKG11dGF0aW9uKSB7XG4gICAgdGhpcy5tdXRhdGlvbnMucHVzaChtdXRhdGlvbik7XG4gICAgdGhpcy5ub3RpZnkobXV0YXRpb24pO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUobXV0YXRpb24pIHtcbiAgICB0aGlzLm11dGF0aW9ucyA9IHRoaXMubXV0YXRpb25zLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHggIT09IG11dGF0aW9uO1xuICAgIH0pO1xuICAgIG11dGF0aW9uLmNhbmNlbCgpO1xuICAgIHRoaXMubm90aWZ5KG11dGF0aW9uKTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLm11dGF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgICBfdGhpczIucmVtb3ZlKG11dGF0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nZXRBbGwgPSBmdW5jdGlvbiBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25zO1xuICB9O1xuXG4gIF9wcm90by5maW5kID0gZnVuY3Rpb24gZmluZChmaWx0ZXJzKSB7XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXJzLmV4YWN0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZmlsdGVycy5leGFjdCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25zLmZpbmQoZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICByZXR1cm4gbWF0Y2hNdXRhdGlvbihmaWx0ZXJzLCBtdXRhdGlvbik7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmZpbmRBbGwgPSBmdW5jdGlvbiBmaW5kQWxsKGZpbHRlcnMpIHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgcmV0dXJuIG1hdGNoTXV0YXRpb24oZmlsdGVycywgbXV0YXRpb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkobXV0YXRpb24pIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcihtdXRhdGlvbik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ub25Gb2N1cyA9IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5yZXN1bWVQYXVzZWRNdXRhdGlvbnMoKTtcbiAgfTtcblxuICBfcHJvdG8ub25PbmxpbmUgPSBmdW5jdGlvbiBvbk9ubGluZSgpIHtcbiAgICB0aGlzLnJlc3VtZVBhdXNlZE11dGF0aW9ucygpO1xuICB9O1xuXG4gIF9wcm90by5yZXN1bWVQYXVzZWRNdXRhdGlvbnMgPSBmdW5jdGlvbiByZXN1bWVQYXVzZWRNdXRhdGlvbnMoKSB7XG4gICAgdmFyIHBhdXNlZE11dGF0aW9ucyA9IHRoaXMubXV0YXRpb25zLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHguc3RhdGUuaXNQYXVzZWQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHBhdXNlZE11dGF0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHByb21pc2UsIG11dGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBtdXRhdGlvbi5jb250aW51ZSgpLmNhdGNoKG5vb3ApO1xuICAgICAgICB9KTtcbiAgICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTXV0YXRpb25DYWNoZTtcbn0oU3Vic2NyaWJhYmxlKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFN0YXRlIH0gZnJvbSAnLi9tdXRhdGlvbic7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJhYmxlJztcbi8vIENMQVNTXG5leHBvcnQgdmFyIE11dGF0aW9uT2JzZXJ2ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9TdWJzY3JpYmFibGUpIHtcbiAgX2luaGVyaXRzTG9vc2UoTXV0YXRpb25PYnNlcnZlciwgX1N1YnNjcmliYWJsZSk7XG5cbiAgZnVuY3Rpb24gTXV0YXRpb25PYnNlcnZlcihjbGllbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9TdWJzY3JpYmFibGUuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIF90aGlzLmNsaWVudCA9IGNsaWVudDtcblxuICAgIF90aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICBfdGhpcy5iaW5kTWV0aG9kcygpO1xuXG4gICAgX3RoaXMudXBkYXRlUmVzdWx0KCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gTXV0YXRpb25PYnNlcnZlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmJpbmRNZXRob2RzID0gZnVuY3Rpb24gYmluZE1ldGhvZHMoKSB7XG4gICAgdGhpcy5tdXRhdGUgPSB0aGlzLm11dGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLnNldE9wdGlvbnMgPSBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmNsaWVudC5kZWZhdWx0TXV0YXRpb25PcHRpb25zKG9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5vblVuc3Vic2NyaWJlID0gZnVuY3Rpb24gb25VbnN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgdmFyIF90aGlzJGN1cnJlbnRNdXRhdGlvbjtcblxuICAgICAgKF90aGlzJGN1cnJlbnRNdXRhdGlvbiA9IHRoaXMuY3VycmVudE11dGF0aW9uKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkY3VycmVudE11dGF0aW9uLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25NdXRhdGlvblVwZGF0ZSA9IGZ1bmN0aW9uIG9uTXV0YXRpb25VcGRhdGUoYWN0aW9uKSB7XG4gICAgdGhpcy51cGRhdGVSZXN1bHQoKTsgLy8gRGV0ZXJtaW5lIHdoaWNoIGNhbGxiYWNrcyB0byB0cmlnZ2VyXG5cbiAgICB2YXIgbm90aWZ5T3B0aW9ucyA9IHtcbiAgICAgIGxpc3RlbmVyczogdHJ1ZVxuICAgIH07XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgbm90aWZ5T3B0aW9ucy5vblN1Y2Nlc3MgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIG5vdGlmeU9wdGlvbnMub25FcnJvciA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5ub3RpZnkobm90aWZ5T3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEN1cnJlbnRSZXN1bHQgPSBmdW5jdGlvbiBnZXRDdXJyZW50UmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRSZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdGhpcy5jdXJyZW50TXV0YXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51cGRhdGVSZXN1bHQoKTtcbiAgICB0aGlzLm5vdGlmeSh7XG4gICAgICBsaXN0ZW5lcnM6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ubXV0YXRlID0gZnVuY3Rpb24gbXV0YXRlKHZhcmlhYmxlcywgb3B0aW9ucykge1xuICAgIHRoaXMubXV0YXRlT3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50TXV0YXRpb24pIHtcbiAgICAgIHRoaXMuY3VycmVudE11dGF0aW9uLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudE11dGF0aW9uID0gdGhpcy5jbGllbnQuZ2V0TXV0YXRpb25DYWNoZSgpLmJ1aWxkKHRoaXMuY2xpZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICB2YXJpYWJsZXM6IHR5cGVvZiB2YXJpYWJsZXMgIT09ICd1bmRlZmluZWQnID8gdmFyaWFibGVzIDogdGhpcy5vcHRpb25zLnZhcmlhYmxlc1xuICAgIH0pKTtcbiAgICB0aGlzLmN1cnJlbnRNdXRhdGlvbi5hZGRPYnNlcnZlcih0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50TXV0YXRpb24uZXhlY3V0ZSgpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVSZXN1bHQgPSBmdW5jdGlvbiB1cGRhdGVSZXN1bHQoKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5jdXJyZW50TXV0YXRpb24gPyB0aGlzLmN1cnJlbnRNdXRhdGlvbi5zdGF0ZSA6IGdldERlZmF1bHRTdGF0ZSgpO1xuICAgIHRoaXMuY3VycmVudFJlc3VsdCA9IF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5zdGF0dXMgPT09ICdsb2FkaW5nJyxcbiAgICAgIGlzU3VjY2Vzczogc3RhdGUuc3RhdHVzID09PSAnc3VjY2VzcycsXG4gICAgICBpc0Vycm9yOiBzdGF0ZS5zdGF0dXMgPT09ICdlcnJvcicsXG4gICAgICBpc0lkbGU6IHN0YXRlLnN0YXR1cyA9PT0gJ2lkbGUnLFxuICAgICAgbXV0YXRlOiB0aGlzLm11dGF0ZSxcbiAgICAgIHJlc2V0OiB0aGlzLnJlc2V0XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeShvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEZpcnN0IHRyaWdnZXIgdGhlIG11dGF0ZSBjYWxsYmFja3NcbiAgICAgIGlmIChfdGhpczIubXV0YXRlT3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucy5vblN1Y2Nlc3MpIHtcbiAgICAgICAgICBfdGhpczIubXV0YXRlT3B0aW9ucy5vblN1Y2Nlc3MgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzMi5tdXRhdGVPcHRpb25zLm9uU3VjY2VzcyhfdGhpczIuY3VycmVudFJlc3VsdC5kYXRhLCBfdGhpczIuY3VycmVudFJlc3VsdC52YXJpYWJsZXMsIF90aGlzMi5jdXJyZW50UmVzdWx0LmNvbnRleHQpO1xuICAgICAgICAgIF90aGlzMi5tdXRhdGVPcHRpb25zLm9uU2V0dGxlZCA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMyLm11dGF0ZU9wdGlvbnMub25TZXR0bGVkKF90aGlzMi5jdXJyZW50UmVzdWx0LmRhdGEsIG51bGwsIF90aGlzMi5jdXJyZW50UmVzdWx0LnZhcmlhYmxlcywgX3RoaXMyLmN1cnJlbnRSZXN1bHQuY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5vbkVycm9yKSB7XG4gICAgICAgICAgX3RoaXMyLm11dGF0ZU9wdGlvbnMub25FcnJvciA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMyLm11dGF0ZU9wdGlvbnMub25FcnJvcihfdGhpczIuY3VycmVudFJlc3VsdC5lcnJvciwgX3RoaXMyLmN1cnJlbnRSZXN1bHQudmFyaWFibGVzLCBfdGhpczIuY3VycmVudFJlc3VsdC5jb250ZXh0KTtcbiAgICAgICAgICBfdGhpczIubXV0YXRlT3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzMi5tdXRhdGVPcHRpb25zLm9uU2V0dGxlZCh1bmRlZmluZWQsIF90aGlzMi5jdXJyZW50UmVzdWx0LmVycm9yLCBfdGhpczIuY3VycmVudFJlc3VsdC52YXJpYWJsZXMsIF90aGlzMi5jdXJyZW50UmVzdWx0LmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9IC8vIFRoZW4gdHJpZ2dlciB0aGUgbGlzdGVuZXJzXG5cblxuICAgICAgaWYgKG9wdGlvbnMubGlzdGVuZXJzKSB7XG4gICAgICAgIF90aGlzMi5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICBsaXN0ZW5lcihfdGhpczIuY3VycmVudFJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBNdXRhdGlvbk9ic2VydmVyO1xufShTdWJzY3JpYmFibGUpOyIsImltcG9ydCB7IHNjaGVkdWxlTWljcm90YXNrIH0gZnJvbSAnLi91dGlscyc7IC8vIFRZUEVTXG5cbi8vIENMQVNTXG52YXIgTm90aWZ5TWFuYWdlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vdGlmeU1hbmFnZXIoKSB7XG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgIHRoaXMudHJhbnNhY3Rpb25zID0gMDtcblxuICAgIHRoaXMubm90aWZ5Rm4gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfTtcblxuICAgIHRoaXMuYmF0Y2hOb3RpZnlGbiA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE5vdGlmeU1hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5iYXRjaCA9IGZ1bmN0aW9uIGJhdGNoKGNhbGxiYWNrKSB7XG4gICAgdGhpcy50cmFuc2FjdGlvbnMrKztcbiAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2soKTtcbiAgICB0aGlzLnRyYW5zYWN0aW9ucy0tO1xuXG4gICAgaWYgKCF0aGlzLnRyYW5zYWN0aW9ucykge1xuICAgICAgdGhpcy5mbHVzaCgpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLnNjaGVkdWxlID0gZnVuY3Rpb24gc2NoZWR1bGUoY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMudHJhbnNhY3Rpb25zKSB7XG4gICAgICB0aGlzLnF1ZXVlLnB1c2goY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2hlZHVsZU1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLm5vdGlmeUZuKGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQWxsIGNhbGxzIHRvIHRoZSB3cmFwcGVkIGZ1bmN0aW9uIHdpbGwgYmUgYmF0Y2hlZC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYmF0Y2hDYWxscyA9IGZ1bmN0aW9uIGJhdGNoQ2FsbHMoY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2suYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgcXVldWUgPSB0aGlzLnF1ZXVlO1xuICAgIHRoaXMucXVldWUgPSBbXTtcblxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgIHNjaGVkdWxlTWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLmJhdGNoTm90aWZ5Rm4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBfdGhpczMubm90aWZ5Rm4oY2FsbGJhY2spO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBhIGN1c3RvbSBub3RpZnkgZnVuY3Rpb24uXG4gICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gZm9yIGV4YW1wbGUgd3JhcCBub3RpZmljYXRpb25zIHdpdGggYFJlYWN0LmFjdGAgd2hpbGUgcnVubmluZyB0ZXN0cy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0Tm90aWZ5RnVuY3Rpb24gPSBmdW5jdGlvbiBzZXROb3RpZnlGdW5jdGlvbihmbikge1xuICAgIHRoaXMubm90aWZ5Rm4gPSBmbjtcbiAgfVxuICAvKipcbiAgICogVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBhIGN1c3RvbSBmdW5jdGlvbiB0byBiYXRjaCBub3RpZmljYXRpb25zIHRvZ2V0aGVyIGludG8gYSBzaW5nbGUgdGljay5cbiAgICogQnkgZGVmYXVsdCBSZWFjdCBRdWVyeSB3aWxsIHVzZSB0aGUgYmF0Y2ggZnVuY3Rpb24gcHJvdmlkZWQgYnkgUmVhY3RET00gb3IgUmVhY3QgTmF0aXZlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRCYXRjaE5vdGlmeUZ1bmN0aW9uID0gZnVuY3Rpb24gc2V0QmF0Y2hOb3RpZnlGdW5jdGlvbihmbikge1xuICAgIHRoaXMuYmF0Y2hOb3RpZnlGbiA9IGZuO1xuICB9O1xuXG4gIHJldHVybiBOb3RpZnlNYW5hZ2VyO1xufSgpOyAvLyBTSU5HTEVUT05cblxuXG5leHBvcnQgdmFyIG5vdGlmeU1hbmFnZXIgPSBuZXcgTm90aWZ5TWFuYWdlcigpOyIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAnLi9zdWJzY3JpYmFibGUnO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICcuL3V0aWxzJztcblxudmFyIE9ubGluZU1hbmFnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9TdWJzY3JpYmFibGUpIHtcbiAgX2luaGVyaXRzTG9vc2UoT25saW5lTWFuYWdlciwgX1N1YnNjcmliYWJsZSk7XG5cbiAgZnVuY3Rpb24gT25saW5lTWFuYWdlcigpIHtcbiAgICByZXR1cm4gX1N1YnNjcmliYWJsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gT25saW5lTWFuYWdlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uU3Vic2NyaWJlID0gZnVuY3Rpb24gb25TdWJzY3JpYmUoKSB7XG4gICAgaWYgKCF0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuc2V0RGVmYXVsdEV2ZW50TGlzdGVuZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNldEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBzZXRFdmVudExpc3RlbmVyKHNldHVwKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHNldHVwKGZ1bmN0aW9uIChvbmxpbmUpIHtcbiAgICAgIGlmICh0eXBlb2Ygb25saW5lID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgX3RoaXMuc2V0T25saW5lKG9ubGluZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5vbk9ubGluZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5zZXRPbmxpbmUgPSBmdW5jdGlvbiBzZXRPbmxpbmUob25saW5lKSB7XG4gICAgdGhpcy5vbmxpbmUgPSBvbmxpbmU7XG5cbiAgICBpZiAob25saW5lKSB7XG4gICAgICB0aGlzLm9uT25saW5lKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vbk9ubGluZSA9IGZ1bmN0aW9uIG9uT25saW5lKCkge1xuICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5pc09ubGluZSA9IGZ1bmN0aW9uIGlzT25saW5lKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5vbmxpbmUgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIHRoaXMub25saW5lO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgbmF2aWdhdG9yLm9uTGluZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBuYXZpZ2F0b3Iub25MaW5lO1xuICB9O1xuXG4gIF9wcm90by5zZXREZWZhdWx0RXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHNldERlZmF1bHRFdmVudExpc3RlbmVyKCkge1xuICAgIHZhciBfd2luZG93O1xuXG4gICAgaWYgKCFpc1NlcnZlciAmJiAoKF93aW5kb3cgPSB3aW5kb3cpID09IG51bGwgPyB2b2lkIDAgOiBfd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpKSB7XG4gICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXIoZnVuY3Rpb24gKG9uT25saW5lKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgICAgIHJldHVybiBvbk9ubGluZSgpO1xuICAgICAgICB9OyAvLyBMaXN0ZW4gdG8gb25saW5lXG5cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEJlIHN1cmUgdG8gdW5zdWJzY3JpYmUgaWYgYSBuZXcgaGFuZGxlciBpcyBzZXRcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb25saW5lJywgbGlzdGVuZXIpO1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgbGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBPbmxpbmVNYW5hZ2VyO1xufShTdWJzY3JpYmFibGUpO1xuXG5leHBvcnQgdmFyIG9ubGluZU1hbmFnZXIgPSBuZXcgT25saW5lTWFuYWdlcigpOyIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgZGlmZmVyZW5jZSwgcmVwbGFjZUF0IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IFF1ZXJ5T2JzZXJ2ZXIgfSBmcm9tICcuL3F1ZXJ5T2JzZXJ2ZXInO1xuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAnLi9zdWJzY3JpYmFibGUnO1xuZXhwb3J0IHZhciBRdWVyaWVzT2JzZXJ2ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9TdWJzY3JpYmFibGUpIHtcbiAgX2luaGVyaXRzTG9vc2UoUXVlcmllc09ic2VydmVyLCBfU3Vic2NyaWJhYmxlKTtcblxuICBmdW5jdGlvbiBRdWVyaWVzT2JzZXJ2ZXIoY2xpZW50LCBxdWVyaWVzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfU3Vic2NyaWJhYmxlLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgX3RoaXMucXVlcmllcyA9IFtdO1xuICAgIF90aGlzLnJlc3VsdCA9IFtdO1xuICAgIF90aGlzLm9ic2VydmVycyA9IFtdO1xuICAgIF90aGlzLm9ic2VydmVyc01hcCA9IHt9O1xuXG4gICAgaWYgKHF1ZXJpZXMpIHtcbiAgICAgIF90aGlzLnNldFF1ZXJpZXMocXVlcmllcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFF1ZXJpZXNPYnNlcnZlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uU3Vic2NyaWJlID0gZnVuY3Rpb24gb25TdWJzY3JpYmUoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5saXN0ZW5lcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIF90aGlzMi5vblVwZGF0ZShvYnNlcnZlciwgcmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm9uVW5zdWJzY3JpYmUgPSBmdW5jdGlvbiBvblVuc3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy5saXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIG9ic2VydmVyLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uc2V0UXVlcmllcyA9IGZ1bmN0aW9uIHNldFF1ZXJpZXMocXVlcmllcywgbm90aWZ5T3B0aW9ucykge1xuICAgIHRoaXMucXVlcmllcyA9IHF1ZXJpZXM7XG4gICAgdGhpcy51cGRhdGVPYnNlcnZlcnMobm90aWZ5T3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEN1cnJlbnRSZXN1bHQgPSBmdW5jdGlvbiBnZXRDdXJyZW50UmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0T3B0aW1pc3RpY1Jlc3VsdCA9IGZ1bmN0aW9uIGdldE9wdGltaXN0aWNSZXN1bHQocXVlcmllcykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHF1ZXJpZXMubWFwKGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IF90aGlzMy5jbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgICByZXR1cm4gX3RoaXMzLmdldE9ic2VydmVyKGRlZmF1bHRlZE9wdGlvbnMpLmdldE9wdGltaXN0aWNSZXN1bHQoZGVmYXVsdGVkT3B0aW9ucyk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldE9ic2VydmVyID0gZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gdGhpcy5jbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLm9ic2VydmVyc01hcFtkZWZhdWx0ZWRPcHRpb25zLnF1ZXJ5SGFzaF0gfHwgbmV3IFF1ZXJ5T2JzZXJ2ZXIodGhpcy5jbGllbnQsIGRlZmF1bHRlZE9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVPYnNlcnZlcnMgPSBmdW5jdGlvbiB1cGRhdGVPYnNlcnZlcnMobm90aWZ5T3B0aW9ucykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaGFzSW5kZXhDaGFuZ2UgPSBmYWxzZTtcbiAgICAgIHZhciBwcmV2T2JzZXJ2ZXJzID0gX3RoaXM0Lm9ic2VydmVycztcbiAgICAgIHZhciBwcmV2T2JlcnZlcnNNYXAgPSBfdGhpczQub2JzZXJ2ZXJzTWFwO1xuICAgICAgdmFyIG5ld1Jlc3VsdCA9IFtdO1xuICAgICAgdmFyIG5ld09ic2VydmVycyA9IFtdO1xuICAgICAgdmFyIG5ld09ic2VydmVyc01hcCA9IHt9O1xuXG4gICAgICBfdGhpczQucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb25zLCBpKSB7XG4gICAgICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gX3RoaXM0LmNsaWVudC5kZWZhdWx0UXVlcnlPYnNlcnZlck9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIHF1ZXJ5SGFzaCA9IGRlZmF1bHRlZE9wdGlvbnMucXVlcnlIYXNoO1xuXG4gICAgICAgIHZhciBvYnNlcnZlciA9IF90aGlzNC5nZXRPYnNlcnZlcihkZWZhdWx0ZWRPcHRpb25zKTtcblxuICAgICAgICBpZiAocHJldk9iZXJ2ZXJzTWFwW3F1ZXJ5SGFzaF0pIHtcbiAgICAgICAgICBvYnNlcnZlci5zZXRPcHRpb25zKGRlZmF1bHRlZE9wdGlvbnMsIG5vdGlmeU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9ic2VydmVyICE9PSBwcmV2T2JzZXJ2ZXJzW2ldKSB7XG4gICAgICAgICAgaGFzSW5kZXhDaGFuZ2UgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3T2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgICAgICBuZXdSZXN1bHQucHVzaChvYnNlcnZlci5nZXRDdXJyZW50UmVzdWx0KCkpO1xuICAgICAgICBuZXdPYnNlcnZlcnNNYXBbcXVlcnlIYXNoXSA9IG9ic2VydmVyO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChwcmV2T2JzZXJ2ZXJzLmxlbmd0aCA9PT0gbmV3T2JzZXJ2ZXJzLmxlbmd0aCAmJiAhaGFzSW5kZXhDaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpczQub2JzZXJ2ZXJzID0gbmV3T2JzZXJ2ZXJzO1xuICAgICAgX3RoaXM0Lm9ic2VydmVyc01hcCA9IG5ld09ic2VydmVyc01hcDtcbiAgICAgIF90aGlzNC5yZXN1bHQgPSBuZXdSZXN1bHQ7XG5cbiAgICAgIGlmICghX3RoaXM0Lmhhc0xpc3RlbmVycygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZGlmZmVyZW5jZShwcmV2T2JzZXJ2ZXJzLCBuZXdPYnNlcnZlcnMpLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLmRlc3Ryb3koKTtcbiAgICAgIH0pO1xuICAgICAgZGlmZmVyZW5jZShuZXdPYnNlcnZlcnMsIHByZXZPYnNlcnZlcnMpLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgX3RoaXM0Lm9uVXBkYXRlKG9ic2VydmVyLCByZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpczQubm90aWZ5KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUob2JzZXJ2ZXIsIHJlc3VsdCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5yZXN1bHQgPSByZXBsYWNlQXQodGhpcy5yZXN1bHQsIGluZGV4LCByZXN1bHQpO1xuICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM1Lmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcihfdGhpczUucmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBRdWVyaWVzT2JzZXJ2ZXI7XG59KFN1YnNjcmliYWJsZSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBmdW5jdGlvbmFsVXBkYXRlLCBpc1ZhbGlkVGltZW91dCwgbm9vcCwgcmVwbGFjZUVxdWFsRGVlcCwgdGltZVVudGlsU3RhbGUsIGVuc3VyZVF1ZXJ5S2V5QXJyYXkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHsgUmV0cnllciwgaXNDYW5jZWxsZWRFcnJvciB9IGZyb20gJy4vcmV0cnllcic7IC8vIFRZUEVTXG5cbi8vIENMQVNTXG5leHBvcnQgdmFyIFF1ZXJ5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUXVlcnkoY29uZmlnKSB7XG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IGNvbmZpZy5kZWZhdWx0T3B0aW9ucztcbiAgICB0aGlzLnNldE9wdGlvbnMoY29uZmlnLm9wdGlvbnMpO1xuICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgdGhpcy5jYWNoZSA9IGNvbmZpZy5jYWNoZTtcbiAgICB0aGlzLnF1ZXJ5S2V5ID0gY29uZmlnLnF1ZXJ5S2V5O1xuICAgIHRoaXMucXVlcnlIYXNoID0gY29uZmlnLnF1ZXJ5SGFzaDtcbiAgICB0aGlzLmluaXRpYWxTdGF0ZSA9IGNvbmZpZy5zdGF0ZSB8fCB0aGlzLmdldERlZmF1bHRTdGF0ZSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZTtcbiAgICB0aGlzLnNjaGVkdWxlR2MoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBRdWVyeS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNldE9wdGlvbnMgPSBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMkb3B0aW9ucyRjYWNoZVRpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpOyAvLyBEZWZhdWx0IHRvIDUgbWludXRlcyBpZiBub3QgY2FjaGUgdGltZSBpcyBzZXRcblxuICAgIHRoaXMuY2FjaGVUaW1lID0gTWF0aC5tYXgodGhpcy5jYWNoZVRpbWUgfHwgMCwgKF90aGlzJG9wdGlvbnMkY2FjaGVUaSA9IHRoaXMub3B0aW9ucy5jYWNoZVRpbWUpICE9IG51bGwgPyBfdGhpcyRvcHRpb25zJGNhY2hlVGkgOiA1ICogNjAgKiAxMDAwKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnM7XG4gIH07XG5cbiAgX3Byb3RvLnNjaGVkdWxlR2MgPSBmdW5jdGlvbiBzY2hlZHVsZUdjKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLmNsZWFyR2NUaW1lb3V0KCk7XG5cbiAgICBpZiAoaXNWYWxpZFRpbWVvdXQodGhpcy5jYWNoZVRpbWUpKSB7XG4gICAgICB0aGlzLmdjVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5vcHRpb25hbFJlbW92ZSgpO1xuICAgICAgfSwgdGhpcy5jYWNoZVRpbWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2xlYXJHY1RpbWVvdXQgPSBmdW5jdGlvbiBjbGVhckdjVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5nY1RpbWVvdXQpO1xuICAgIHRoaXMuZ2NUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5vcHRpb25hbFJlbW92ZSA9IGZ1bmN0aW9uIG9wdGlvbmFsUmVtb3ZlKCkge1xuICAgIGlmICghdGhpcy5vYnNlcnZlcnMubGVuZ3RoICYmICF0aGlzLnN0YXRlLmlzRmV0Y2hpbmcpIHtcbiAgICAgIHRoaXMuY2FjaGUucmVtb3ZlKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2V0RGF0YSA9IGZ1bmN0aW9uIHNldERhdGEodXBkYXRlciwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyRvcHRpb25zJGlzRGF0YUUsIF90aGlzJG9wdGlvbnM7XG5cbiAgICB2YXIgcHJldkRhdGEgPSB0aGlzLnN0YXRlLmRhdGE7IC8vIEdldCB0aGUgbmV3IGRhdGFcblxuICAgIHZhciBkYXRhID0gZnVuY3Rpb25hbFVwZGF0ZSh1cGRhdGVyLCBwcmV2RGF0YSk7IC8vIFVzZSBwcmV2IGRhdGEgaWYgYW4gaXNEYXRhRXF1YWwgZnVuY3Rpb24gaXMgZGVmaW5lZCBhbmQgcmV0dXJucyBgdHJ1ZWBcblxuICAgIGlmICgoX3RoaXMkb3B0aW9ucyRpc0RhdGFFID0gKF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMpLmlzRGF0YUVxdWFsKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9ucyRpc0RhdGFFLmNhbGwoX3RoaXMkb3B0aW9ucywgcHJldkRhdGEsIGRhdGEpKSB7XG4gICAgICBkYXRhID0gcHJldkRhdGE7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc3RydWN0dXJhbFNoYXJpbmcgIT09IGZhbHNlKSB7XG4gICAgICAvLyBTdHJ1Y3R1cmFsbHkgc2hhcmUgZGF0YSBiZXR3ZWVuIHByZXYgYW5kIG5ldyBkYXRhIGlmIG5lZWRlZFxuICAgICAgZGF0YSA9IHJlcGxhY2VFcXVhbERlZXAocHJldkRhdGEsIGRhdGEpO1xuICAgIH0gLy8gU2V0IGRhdGEgYW5kIG1hcmsgaXQgYXMgY2FjaGVkXG5cblxuICAgIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgIGRhdGFVcGRhdGVkQXQ6IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMudXBkYXRlZEF0XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgX3Byb3RvLnNldFN0YXRlID0gZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUsIHNldFN0YXRlT3B0aW9ucykge1xuICAgIHRoaXMuZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ3NldFN0YXRlJyxcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIHNldFN0YXRlT3B0aW9uczogc2V0U3RhdGVPcHRpb25zXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbChvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJHJldHJ5ZXI7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcbiAgICAoX3RoaXMkcmV0cnllciA9IHRoaXMucmV0cnllcikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHJldHJ5ZXIuY2FuY2VsKG9wdGlvbnMpO1xuICAgIHJldHVybiBwcm9taXNlID8gcHJvbWlzZS50aGVuKG5vb3ApLmNhdGNoKG5vb3ApIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHRoaXMuY2xlYXJHY1RpbWVvdXQoKTtcbiAgICB0aGlzLmNhbmNlbCh7XG4gICAgICBzaWxlbnQ6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuaW5pdGlhbFN0YXRlKTtcbiAgfTtcblxuICBfcHJvdG8uaXNBY3RpdmUgPSBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnMuc29tZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybiBvYnNlcnZlci5vcHRpb25zLmVuYWJsZWQgIT09IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5pc0ZldGNoaW5nID0gZnVuY3Rpb24gaXNGZXRjaGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc0ZldGNoaW5nO1xuICB9O1xuXG4gIF9wcm90by5pc1N0YWxlID0gZnVuY3Rpb24gaXNTdGFsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc0ludmFsaWRhdGVkIHx8ICF0aGlzLnN0YXRlLmRhdGFVcGRhdGVkQXQgfHwgdGhpcy5vYnNlcnZlcnMuc29tZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybiBvYnNlcnZlci5nZXRDdXJyZW50UmVzdWx0KCkuaXNTdGFsZTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uaXNTdGFsZUJ5VGltZSA9IGZ1bmN0aW9uIGlzU3RhbGVCeVRpbWUoc3RhbGVUaW1lKSB7XG4gICAgaWYgKHN0YWxlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGFsZVRpbWUgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzSW52YWxpZGF0ZWQgfHwgIXRoaXMuc3RhdGUuZGF0YVVwZGF0ZWRBdCB8fCAhdGltZVVudGlsU3RhbGUodGhpcy5zdGF0ZS5kYXRhVXBkYXRlZEF0LCBzdGFsZVRpbWUpO1xuICB9O1xuXG4gIF9wcm90by5vbkZvY3VzID0gZnVuY3Rpb24gb25Gb2N1cygpIHtcbiAgICB2YXIgX3RoaXMkcmV0cnllcjI7XG5cbiAgICB2YXIgb2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmVycy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geC5zaG91bGRGZXRjaE9uV2luZG93Rm9jdXMoKTtcbiAgICB9KTtcblxuICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgb2JzZXJ2ZXIucmVmZXRjaCgpO1xuICAgIH0gLy8gQ29udGludWUgZmV0Y2ggaWYgY3VycmVudGx5IHBhdXNlZFxuXG5cbiAgICAoX3RoaXMkcmV0cnllcjIgPSB0aGlzLnJldHJ5ZXIpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRyZXRyeWVyMi5jb250aW51ZSgpO1xuICB9O1xuXG4gIF9wcm90by5vbk9ubGluZSA9IGZ1bmN0aW9uIG9uT25saW5lKCkge1xuICAgIHZhciBfdGhpcyRyZXRyeWVyMztcblxuICAgIHZhciBvYnNlcnZlciA9IHRoaXMub2JzZXJ2ZXJzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4LnNob3VsZEZldGNoT25SZWNvbm5lY3QoKTtcbiAgICB9KTtcblxuICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgb2JzZXJ2ZXIucmVmZXRjaCgpO1xuICAgIH0gLy8gQ29udGludWUgZmV0Y2ggaWYgY3VycmVudGx5IHBhdXNlZFxuXG5cbiAgICAoX3RoaXMkcmV0cnllcjMgPSB0aGlzLnJldHJ5ZXIpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRyZXRyeWVyMy5jb250aW51ZSgpO1xuICB9O1xuXG4gIF9wcm90by5hZGRPYnNlcnZlciA9IGZ1bmN0aW9uIGFkZE9ic2VydmVyKG9ic2VydmVyKSB7XG4gICAgaWYgKHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpID09PSAtMSkge1xuICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7IC8vIFN0b3AgdGhlIHF1ZXJ5IGZyb20gYmVpbmcgZ2FyYmFnZSBjb2xsZWN0ZWRcblxuICAgICAgdGhpcy5jbGVhckdjVGltZW91dCgpO1xuICAgICAgdGhpcy5jYWNoZS5ub3RpZnkoe1xuICAgICAgICB0eXBlOiAnb2JzZXJ2ZXJBZGRlZCcsXG4gICAgICAgIHF1ZXJ5OiB0aGlzLFxuICAgICAgICBvYnNlcnZlcjogb2JzZXJ2ZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlT2JzZXJ2ZXIgPSBmdW5jdGlvbiByZW1vdmVPYnNlcnZlcihvYnNlcnZlcikge1xuICAgIGlmICh0aGlzLm9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4ICE9PSBvYnNlcnZlcjtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICAvLyBJZiB0aGUgdHJhbnNwb3J0IGxheWVyIGRvZXMgbm90IHN1cHBvcnQgY2FuY2VsbGF0aW9uXG4gICAgICAgIC8vIHdlJ2xsIGxldCB0aGUgcXVlcnkgY29udGludWUgc28gdGhlIHJlc3VsdCBjYW4gYmUgY2FjaGVkXG4gICAgICAgIGlmICh0aGlzLnJldHJ5ZXIpIHtcbiAgICAgICAgICBpZiAodGhpcy5yZXRyeWVyLmlzVHJhbnNwb3J0Q2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5yZXRyeWVyLmNhbmNlbCh7XG4gICAgICAgICAgICAgIHJldmVydDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmV0cnllci5jYW5jZWxSZXRyeSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNhY2hlVGltZSkge1xuICAgICAgICAgIHRoaXMuc2NoZWR1bGVHYygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FjaGUucmVtb3ZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2FjaGUubm90aWZ5KHtcbiAgICAgICAgdHlwZTogJ29ic2VydmVyUmVtb3ZlZCcsXG4gICAgICAgIHF1ZXJ5OiB0aGlzLFxuICAgICAgICBvYnNlcnZlcjogb2JzZXJ2ZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0T2JzZXJ2ZXJzQ291bnQgPSBmdW5jdGlvbiBnZXRPYnNlcnZlcnNDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZlcnMubGVuZ3RoO1xuICB9O1xuXG4gIF9wcm90by5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNJbnZhbGlkYXRlZCkge1xuICAgICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdpbnZhbGlkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5mZXRjaCA9IGZ1bmN0aW9uIGZldGNoKG9wdGlvbnMsIGZldGNoT3B0aW9ucykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzLFxuICAgICAgICBfdGhpcyRvcHRpb25zJGJlaGF2aW8sXG4gICAgICAgIF9jb250ZXh0JGZldGNoT3B0aW9ucztcblxuICAgIGlmICh0aGlzLnN0YXRlLmlzRmV0Y2hpbmcpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGFVcGRhdGVkQXQgJiYgKGZldGNoT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogZmV0Y2hPcHRpb25zLmNhbmNlbFJlZmV0Y2gpKSB7XG4gICAgICAgIC8vIFNpbGVudGx5IGNhbmNlbCBjdXJyZW50IGZldGNoIGlmIHRoZSB1c2VyIHdhbnRzIHRvIGNhbmNlbCByZWZldGNoZXNcbiAgICAgICAgdGhpcy5jYW5jZWwoe1xuICAgICAgICAgIHNpbGVudDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9taXNlKSB7XG4gICAgICAgIC8vIFJldHVybiBjdXJyZW50IHByb21pc2UgaWYgd2UgYXJlIGFscmVhZHkgZmV0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgICAgIH1cbiAgICB9IC8vIFVwZGF0ZSBjb25maWcgaWYgcGFzc2VkLCBvdGhlcndpc2UgdGhlIGNvbmZpZyBmcm9tIHRoZSBsYXN0IGV4ZWN1dGlvbiBpcyB1c2VkXG5cblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgfSAvLyBVc2UgdGhlIG9wdGlvbnMgZnJvbSB0aGUgZmlyc3Qgb2JzZXJ2ZXIgd2l0aCBhIHF1ZXJ5IGZ1bmN0aW9uIGlmIG5vIGZ1bmN0aW9uIGlzIGZvdW5kLlxuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiB3aGVuIHRoZSBxdWVyeSBpcyBoeWRyYXRlZCBvciBjcmVhdGVkIHdpdGggc2V0UXVlcnlEYXRhLlxuXG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5xdWVyeUZuKSB7XG4gICAgICB2YXIgb2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmVycy5maW5kKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4Lm9wdGlvbnMucXVlcnlGbjtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKG9ic2VydmVyLm9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBxdWVyeUtleSA9IGVuc3VyZVF1ZXJ5S2V5QXJyYXkodGhpcy5xdWVyeUtleSk7IC8vIENyZWF0ZSBxdWVyeSBmdW5jdGlvbiBjb250ZXh0XG5cbiAgICB2YXIgcXVlcnlGbkNvbnRleHQgPSB7XG4gICAgICBxdWVyeUtleTogcXVlcnlLZXksXG4gICAgICBwYWdlUGFyYW06IHVuZGVmaW5lZFxuICAgIH07IC8vIENyZWF0ZSBmZXRjaCBmdW5jdGlvblxuXG4gICAgdmFyIGZldGNoRm4gPSBmdW5jdGlvbiBmZXRjaEZuKCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5vcHRpb25zLnF1ZXJ5Rm4gPyBfdGhpczIub3B0aW9ucy5xdWVyeUZuKHF1ZXJ5Rm5Db250ZXh0KSA6IFByb21pc2UucmVqZWN0KCdNaXNzaW5nIHF1ZXJ5Rm4nKTtcbiAgICB9OyAvLyBUcmlnZ2VyIGJlaGF2aW9yIGhvb2tcblxuXG4gICAgdmFyIGNvbnRleHQgPSB7XG4gICAgICBmZXRjaE9wdGlvbnM6IGZldGNoT3B0aW9ucyxcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgIHF1ZXJ5S2V5OiBxdWVyeUtleSxcbiAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgZmV0Y2hGbjogZmV0Y2hGblxuICAgIH07XG5cbiAgICBpZiAoKF90aGlzJG9wdGlvbnMkYmVoYXZpbyA9IHRoaXMub3B0aW9ucy5iZWhhdmlvcikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnMkYmVoYXZpby5vbkZldGNoKSB7XG4gICAgICB2YXIgX3RoaXMkb3B0aW9ucyRiZWhhdmlvMjtcblxuICAgICAgKF90aGlzJG9wdGlvbnMkYmVoYXZpbzIgPSB0aGlzLm9wdGlvbnMuYmVoYXZpb3IpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRvcHRpb25zJGJlaGF2aW8yLm9uRmV0Y2goY29udGV4dCk7XG4gICAgfSAvLyBTdG9yZSBzdGF0ZSBpbiBjYXNlIHRoZSBjdXJyZW50IGZldGNoIG5lZWRzIHRvIGJlIHJldmVydGVkXG5cblxuICAgIHRoaXMucmV2ZXJ0U3RhdGUgPSB0aGlzLnN0YXRlOyAvLyBTZXQgdG8gZmV0Y2hpbmcgc3RhdGUgaWYgbm90IGFscmVhZHkgaW4gaXRcblxuICAgIGlmICghdGhpcy5zdGF0ZS5pc0ZldGNoaW5nIHx8IHRoaXMuc3RhdGUuZmV0Y2hNZXRhICE9PSAoKF9jb250ZXh0JGZldGNoT3B0aW9ucyA9IGNvbnRleHQuZmV0Y2hPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogX2NvbnRleHQkZmV0Y2hPcHRpb25zLm1ldGEpKSB7XG4gICAgICB2YXIgX2NvbnRleHQkZmV0Y2hPcHRpb25zMjtcblxuICAgICAgdGhpcy5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdmZXRjaCcsXG4gICAgICAgIG1ldGE6IChfY29udGV4dCRmZXRjaE9wdGlvbnMyID0gY29udGV4dC5mZXRjaE9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfY29udGV4dCRmZXRjaE9wdGlvbnMyLm1ldGFcbiAgICAgIH0pO1xuICAgIH0gLy8gVHJ5IHRvIGZldGNoIHRoZSBkYXRhXG5cblxuICAgIHRoaXMucmV0cnllciA9IG5ldyBSZXRyeWVyKHtcbiAgICAgIGZuOiBjb250ZXh0LmZldGNoRm4sXG4gICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIF90aGlzMi5zZXREYXRhKGRhdGEpOyAvLyBOb3RpZnkgY2FjaGUgY2FsbGJhY2tcblxuXG4gICAgICAgIF90aGlzMi5jYWNoZS5jb25maWcub25TdWNjZXNzID09IG51bGwgPyB2b2lkIDAgOiBfdGhpczIuY2FjaGUuY29uZmlnLm9uU3VjY2VzcyhkYXRhLCBfdGhpczIpOyAvLyBSZW1vdmUgcXVlcnkgYWZ0ZXIgZmV0Y2hpbmcgaWYgY2FjaGUgdGltZSBpcyAwXG5cbiAgICAgICAgaWYgKF90aGlzMi5jYWNoZVRpbWUgPT09IDApIHtcbiAgICAgICAgICBfdGhpczIub3B0aW9uYWxSZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgLy8gT3B0aW1pc3RpY2FsbHkgdXBkYXRlIHN0YXRlIGlmIG5lZWRlZFxuICAgICAgICBpZiAoIShpc0NhbmNlbGxlZEVycm9yKGVycm9yKSAmJiBlcnJvci5zaWxlbnQpKSB7XG4gICAgICAgICAgX3RoaXMyLmRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNDYW5jZWxsZWRFcnJvcihlcnJvcikpIHtcbiAgICAgICAgICAvLyBOb3RpZnkgY2FjaGUgY2FsbGJhY2tcbiAgICAgICAgICBfdGhpczIuY2FjaGUuY29uZmlnLm9uRXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzMi5jYWNoZS5jb25maWcub25FcnJvcihlcnJvciwgX3RoaXMyKTsgLy8gTG9nIGVycm9yXG5cbiAgICAgICAgICBnZXRMb2dnZXIoKS5lcnJvcihlcnJvcik7XG4gICAgICAgIH0gLy8gUmVtb3ZlIHF1ZXJ5IGFmdGVyIGZldGNoaW5nIGlmIGNhY2hlIHRpbWUgaXMgMFxuXG5cbiAgICAgICAgaWYgKF90aGlzMi5jYWNoZVRpbWUgPT09IDApIHtcbiAgICAgICAgICBfdGhpczIub3B0aW9uYWxSZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRmFpbDogZnVuY3Rpb24gb25GYWlsKCkge1xuICAgICAgICBfdGhpczIuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdmYWlsZWQnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9uUGF1c2U6IGZ1bmN0aW9uIG9uUGF1c2UoKSB7XG4gICAgICAgIF90aGlzMi5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ3BhdXNlJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvbkNvbnRpbnVlOiBmdW5jdGlvbiBvbkNvbnRpbnVlKCkge1xuICAgICAgICBfdGhpczIuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdjb250aW51ZSdcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcmV0cnk6IGNvbnRleHQub3B0aW9ucy5yZXRyeSxcbiAgICAgIHJldHJ5RGVsYXk6IGNvbnRleHQub3B0aW9ucy5yZXRyeURlbGF5XG4gICAgfSk7XG4gICAgdGhpcy5wcm9taXNlID0gdGhpcy5yZXRyeWVyLnByb21pc2U7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgfTtcblxuICBfcHJvdG8uZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLnJlZHVjZXIodGhpcy5zdGF0ZSwgYWN0aW9uKTtcbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIub25RdWVyeVVwZGF0ZShhY3Rpb24pO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzMy5jYWNoZS5ub3RpZnkoe1xuICAgICAgICBxdWVyeTogX3RoaXMzLFxuICAgICAgICB0eXBlOiAncXVlcnlVcGRhdGVkJyxcbiAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nZXREZWZhdWx0U3RhdGUgPSBmdW5jdGlvbiBnZXREZWZhdWx0U3RhdGUob3B0aW9ucykge1xuICAgIHZhciBkYXRhID0gdHlwZW9mIG9wdGlvbnMuaW5pdGlhbERhdGEgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLmluaXRpYWxEYXRhKCkgOiBvcHRpb25zLmluaXRpYWxEYXRhO1xuICAgIHZhciBoYXNJbml0aWFsRGF0YSA9IHR5cGVvZiBvcHRpb25zLmluaXRpYWxEYXRhICE9PSAndW5kZWZpbmVkJztcbiAgICB2YXIgaW5pdGlhbERhdGFVcGRhdGVkQXQgPSBoYXNJbml0aWFsRGF0YSA/IHR5cGVvZiBvcHRpb25zLmluaXRpYWxEYXRhVXBkYXRlZEF0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5pbml0aWFsRGF0YVVwZGF0ZWRBdCgpIDogb3B0aW9ucy5pbml0aWFsRGF0YVVwZGF0ZWRBdCA6IDA7XG4gICAgdmFyIGhhc0RhdGEgPSB0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBkYXRhVXBkYXRlQ291bnQ6IDAsXG4gICAgICBkYXRhVXBkYXRlZEF0OiBoYXNEYXRhID8gaW5pdGlhbERhdGFVcGRhdGVkQXQgIT0gbnVsbCA/IGluaXRpYWxEYXRhVXBkYXRlZEF0IDogRGF0ZS5ub3coKSA6IDAsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIGVycm9yVXBkYXRlQ291bnQ6IDAsXG4gICAgICBlcnJvclVwZGF0ZWRBdDogMCxcbiAgICAgIGZldGNoRmFpbHVyZUNvdW50OiAwLFxuICAgICAgZmV0Y2hNZXRhOiBudWxsLFxuICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICBpc0ludmFsaWRhdGVkOiBmYWxzZSxcbiAgICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICAgIHN0YXR1czogaGFzRGF0YSA/ICdzdWNjZXNzJyA6ICdpZGxlJ1xuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnJlZHVjZXIgPSBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgICB2YXIgX2FjdGlvbiRtZXRhLCBfYWN0aW9uJGRhdGFVcGRhdGVkQXQ7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdmYWlsZWQnOlxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZmV0Y2hGYWlsdXJlQ291bnQ6IHN0YXRlLmZldGNoRmFpbHVyZUNvdW50ICsgMVxuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAncGF1c2UnOlxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNQYXVzZWQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NvbnRpbnVlJzpcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzUGF1c2VkOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZmV0Y2gnOlxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZmV0Y2hGYWlsdXJlQ291bnQ6IDAsXG4gICAgICAgICAgZmV0Y2hNZXRhOiAoX2FjdGlvbiRtZXRhID0gYWN0aW9uLm1ldGEpICE9IG51bGwgPyBfYWN0aW9uJG1ldGEgOiBudWxsLFxuICAgICAgICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgICAgICAgIHN0YXR1czogIXN0YXRlLmRhdGFVcGRhdGVkQXQgPyAnbG9hZGluZycgOiBzdGF0ZS5zdGF0dXNcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgZGF0YVVwZGF0ZUNvdW50OiBzdGF0ZS5kYXRhVXBkYXRlQ291bnQgKyAxLFxuICAgICAgICAgIGRhdGFVcGRhdGVkQXQ6IChfYWN0aW9uJGRhdGFVcGRhdGVkQXQgPSBhY3Rpb24uZGF0YVVwZGF0ZWRBdCkgIT0gbnVsbCA/IF9hY3Rpb24kZGF0YVVwZGF0ZWRBdCA6IERhdGUubm93KCksXG4gICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgZmV0Y2hGYWlsdXJlQ291bnQ6IDAsXG4gICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgaXNJbnZhbGlkYXRlZDogZmFsc2UsXG4gICAgICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHZhciBlcnJvciA9IGFjdGlvbi5lcnJvcjtcblxuICAgICAgICBpZiAoaXNDYW5jZWxsZWRFcnJvcihlcnJvcikgJiYgZXJyb3IucmV2ZXJ0ICYmIHRoaXMucmV2ZXJ0U3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMucmV2ZXJ0U3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICBlcnJvclVwZGF0ZUNvdW50OiBzdGF0ZS5lcnJvclVwZGF0ZUNvdW50ICsgMSxcbiAgICAgICAgICBlcnJvclVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgICAgICBmZXRjaEZhaWx1cmVDb3VudDogc3RhdGUuZmV0Y2hGYWlsdXJlQ291bnQgKyAxLFxuICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgIGlzUGF1c2VkOiBmYWxzZSxcbiAgICAgICAgICBzdGF0dXM6ICdlcnJvcidcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2ludmFsaWRhdGUnOlxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNJbnZhbGlkYXRlZDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnc2V0U3RhdGUnOlxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBhY3Rpb24uc3RhdGUpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBRdWVyeTtcbn0oKTsiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCB7IGhhc2hRdWVyeUtleUJ5T3B0aW9ucywgbWF0Y2hRdWVyeSwgcGFyc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBTdWJzY3JpYmFibGUgfSBmcm9tICcuL3N1YnNjcmliYWJsZSc7XG4vLyBDTEFTU1xuZXhwb3J0IHZhciBRdWVyeUNhY2hlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfU3Vic2NyaWJhYmxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKFF1ZXJ5Q2FjaGUsIF9TdWJzY3JpYmFibGUpO1xuXG4gIGZ1bmN0aW9uIFF1ZXJ5Q2FjaGUoY29uZmlnKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfU3Vic2NyaWJhYmxlLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XG4gICAgX3RoaXMucXVlcmllcyA9IFtdO1xuICAgIF90aGlzLnF1ZXJpZXNNYXAgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUXVlcnlDYWNoZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmJ1aWxkID0gZnVuY3Rpb24gYnVpbGQoY2xpZW50LCBvcHRpb25zLCBzdGF0ZSkge1xuICAgIHZhciBfb3B0aW9ucyRxdWVyeUhhc2g7XG5cbiAgICB2YXIgcXVlcnlLZXkgPSBvcHRpb25zLnF1ZXJ5S2V5O1xuICAgIHZhciBxdWVyeUhhc2ggPSAoX29wdGlvbnMkcXVlcnlIYXNoID0gb3B0aW9ucy5xdWVyeUhhc2gpICE9IG51bGwgPyBfb3B0aW9ucyRxdWVyeUhhc2ggOiBoYXNoUXVlcnlLZXlCeU9wdGlvbnMocXVlcnlLZXksIG9wdGlvbnMpO1xuICAgIHZhciBxdWVyeSA9IHRoaXMuZ2V0KHF1ZXJ5SGFzaCk7XG5cbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICBxdWVyeSA9IG5ldyBRdWVyeSh7XG4gICAgICAgIGNhY2hlOiB0aGlzLFxuICAgICAgICBxdWVyeUtleTogcXVlcnlLZXksXG4gICAgICAgIHF1ZXJ5SGFzaDogcXVlcnlIYXNoLFxuICAgICAgICBvcHRpb25zOiBjbGllbnQuZGVmYXVsdFF1ZXJ5T3B0aW9ucyhvcHRpb25zKSxcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICBkZWZhdWx0T3B0aW9uczogY2xpZW50LmdldFF1ZXJ5RGVmYXVsdHMocXVlcnlLZXkpXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWRkKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH07XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChxdWVyeSkge1xuICAgIGlmICghdGhpcy5xdWVyaWVzTWFwW3F1ZXJ5LnF1ZXJ5SGFzaF0pIHtcbiAgICAgIHRoaXMucXVlcmllc01hcFtxdWVyeS5xdWVyeUhhc2hdID0gcXVlcnk7XG4gICAgICB0aGlzLnF1ZXJpZXMucHVzaChxdWVyeSk7XG4gICAgICB0aGlzLm5vdGlmeSh7XG4gICAgICAgIHR5cGU6ICdxdWVyeUFkZGVkJyxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShxdWVyeSkge1xuICAgIHZhciBxdWVyeUluTWFwID0gdGhpcy5xdWVyaWVzTWFwW3F1ZXJ5LnF1ZXJ5SGFzaF07XG5cbiAgICBpZiAocXVlcnlJbk1hcCkge1xuICAgICAgcXVlcnkuZGVzdHJveSgpO1xuICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5xdWVyaWVzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geCAhPT0gcXVlcnk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHF1ZXJ5SW5NYXAgPT09IHF1ZXJ5KSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnF1ZXJpZXNNYXBbcXVlcnkucXVlcnlIYXNoXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5ub3RpZnkoe1xuICAgICAgICB0eXBlOiAncXVlcnlSZW1vdmVkJyxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIF90aGlzMi5yZW1vdmUocXVlcnkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldChxdWVyeUhhc2gpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyaWVzTWFwW3F1ZXJ5SGFzaF07XG4gIH07XG5cbiAgX3Byb3RvLmdldEFsbCA9IGZ1bmN0aW9uIGdldEFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyaWVzO1xuICB9O1xuXG4gIF9wcm90by5maW5kID0gZnVuY3Rpb24gZmluZChhcmcxLCBhcmcyKSB7XG4gICAgdmFyIF9wYXJzZUZpbHRlckFyZ3MgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiksXG4gICAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzWzBdO1xuXG4gICAgaWYgKHR5cGVvZiBmaWx0ZXJzLmV4YWN0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZmlsdGVycy5leGFjdCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucXVlcmllcy5maW5kKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgcmV0dXJuIG1hdGNoUXVlcnkoZmlsdGVycywgcXVlcnkpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5maW5kQWxsID0gZnVuY3Rpb24gZmluZEFsbChhcmcxLCBhcmcyKSB7XG4gICAgdmFyIF9wYXJzZUZpbHRlckFyZ3MyID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnczJbMF07XG5cbiAgICByZXR1cm4gZmlsdGVycyA/IHRoaXMucXVlcmllcy5maWx0ZXIoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gbWF0Y2hRdWVyeShmaWx0ZXJzLCBxdWVyeSk7XG4gICAgfSkgOiB0aGlzLnF1ZXJpZXM7XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeShldmVudCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5vbkZvY3VzID0gZnVuY3Rpb24gb25Gb2N1cygpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM0LnF1ZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcXVlcnkub25Gb2N1cygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLm9uT25saW5lID0gZnVuY3Rpb24gb25PbmxpbmUoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNS5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHF1ZXJ5Lm9uT25saW5lKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gUXVlcnlDYWNoZTtcbn0oU3Vic2NyaWJhYmxlKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IGhhc2hRdWVyeUtleSwgbm9vcCwgcGFyc2VGaWx0ZXJBcmdzLCBwYXJzZVF1ZXJ5QXJncywgcGFydGlhbE1hdGNoS2V5LCBoYXNoUXVlcnlLZXlCeU9wdGlvbnMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFF1ZXJ5Q2FjaGUgfSBmcm9tICcuL3F1ZXJ5Q2FjaGUnO1xuaW1wb3J0IHsgTXV0YXRpb25DYWNoZSB9IGZyb20gJy4vbXV0YXRpb25DYWNoZSc7XG5pbXBvcnQgeyBmb2N1c01hbmFnZXIgfSBmcm9tICcuL2ZvY3VzTWFuYWdlcic7XG5pbXBvcnQgeyBvbmxpbmVNYW5hZ2VyIH0gZnJvbSAnLi9vbmxpbmVNYW5hZ2VyJztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgaW5maW5pdGVRdWVyeUJlaGF2aW9yIH0gZnJvbSAnLi9pbmZpbml0ZVF1ZXJ5QmVoYXZpb3InOyAvLyBUWVBFU1xuXG4vLyBDTEFTU1xuZXhwb3J0IHZhciBRdWVyeUNsaWVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFF1ZXJ5Q2xpZW50KGNvbmZpZykge1xuICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkge1xuICAgICAgY29uZmlnID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyeUNhY2hlID0gY29uZmlnLnF1ZXJ5Q2FjaGUgfHwgbmV3IFF1ZXJ5Q2FjaGUoKTtcbiAgICB0aGlzLm11dGF0aW9uQ2FjaGUgPSBjb25maWcubXV0YXRpb25DYWNoZSB8fCBuZXcgTXV0YXRpb25DYWNoZSgpO1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBjb25maWcuZGVmYXVsdE9wdGlvbnMgfHwge307XG4gICAgdGhpcy5xdWVyeURlZmF1bHRzID0gW107XG4gICAgdGhpcy5tdXRhdGlvbkRlZmF1bHRzID0gW107XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUXVlcnlDbGllbnQucHJvdG90eXBlO1xuXG4gIF9wcm90by5tb3VudCA9IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlRm9jdXMgPSBmb2N1c01hbmFnZXIuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChmb2N1c01hbmFnZXIuaXNGb2N1c2VkKCkgJiYgb25saW5lTWFuYWdlci5pc09ubGluZSgpKSB7XG4gICAgICAgIF90aGlzLm11dGF0aW9uQ2FjaGUub25Gb2N1cygpO1xuXG4gICAgICAgIF90aGlzLnF1ZXJ5Q2FjaGUub25Gb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudW5zdWJzY3JpYmVPbmxpbmUgPSBvbmxpbmVNYW5hZ2VyLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZm9jdXNNYW5hZ2VyLmlzRm9jdXNlZCgpICYmIG9ubGluZU1hbmFnZXIuaXNPbmxpbmUoKSkge1xuICAgICAgICBfdGhpcy5tdXRhdGlvbkNhY2hlLm9uT25saW5lKCk7XG5cbiAgICAgICAgX3RoaXMucXVlcnlDYWNoZS5vbk9ubGluZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCgpIHtcbiAgICB2YXIgX3RoaXMkdW5zdWJzY3JpYmVGb2N1LCBfdGhpcyR1bnN1YnNjcmliZU9ubGk7XG5cbiAgICAoX3RoaXMkdW5zdWJzY3JpYmVGb2N1ID0gdGhpcy51bnN1YnNjcmliZUZvY3VzKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkdW5zdWJzY3JpYmVGb2N1LmNhbGwodGhpcyk7XG4gICAgKF90aGlzJHVuc3Vic2NyaWJlT25saSA9IHRoaXMudW5zdWJzY3JpYmVPbmxpbmUpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyR1bnN1YnNjcmliZU9ubGkuY2FsbCh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8uaXNGZXRjaGluZyA9IGZ1bmN0aW9uIGlzRmV0Y2hpbmcoYXJnMSwgYXJnMikge1xuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnc1swXTtcblxuICAgIGZpbHRlcnMuZmV0Y2hpbmcgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5Q2FjaGUuZmluZEFsbChmaWx0ZXJzKS5sZW5ndGg7XG4gIH07XG5cbiAgX3Byb3RvLmlzTXV0YXRpbmcgPSBmdW5jdGlvbiBpc011dGF0aW5nKGZpbHRlcnMpIHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvbkNhY2hlLmZpbmRBbGwoX2V4dGVuZHMoe30sIGZpbHRlcnMsIHtcbiAgICAgIGZldGNoaW5nOiB0cnVlXG4gICAgfSkpLmxlbmd0aDtcbiAgfTtcblxuICBfcHJvdG8uZ2V0UXVlcnlEYXRhID0gZnVuY3Rpb24gZ2V0UXVlcnlEYXRhKHF1ZXJ5S2V5LCBmaWx0ZXJzKSB7XG4gICAgdmFyIF90aGlzJHF1ZXJ5Q2FjaGUkZmluZDtcblxuICAgIHJldHVybiAoX3RoaXMkcXVlcnlDYWNoZSRmaW5kID0gdGhpcy5xdWVyeUNhY2hlLmZpbmQocXVlcnlLZXksIGZpbHRlcnMpKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcXVlcnlDYWNoZSRmaW5kLnN0YXRlLmRhdGE7XG4gIH07XG5cbiAgX3Byb3RvLnNldFF1ZXJ5RGF0YSA9IGZ1bmN0aW9uIHNldFF1ZXJ5RGF0YShxdWVyeUtleSwgdXBkYXRlciwgb3B0aW9ucykge1xuICAgIHZhciBwYXJzZWRPcHRpb25zID0gcGFyc2VRdWVyeUFyZ3MocXVlcnlLZXkpO1xuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gdGhpcy5kZWZhdWx0UXVlcnlPcHRpb25zKHBhcnNlZE9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5Q2FjaGUuYnVpbGQodGhpcywgZGVmYXVsdGVkT3B0aW9ucykuc2V0RGF0YSh1cGRhdGVyLCBvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0UXVlcmllc0RhdGEgPSBmdW5jdGlvbiBzZXRRdWVyaWVzRGF0YShxdWVyeUtleU9yRmlsdGVycywgdXBkYXRlciwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5nZXRRdWVyeUNhY2hlKCkuZmluZEFsbChxdWVyeUtleU9yRmlsdGVycykubWFwKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBxdWVyeUtleSA9IF9yZWYucXVlcnlLZXk7XG4gICAgICAgIHJldHVybiBbcXVlcnlLZXksIF90aGlzMi5zZXRRdWVyeURhdGEocXVlcnlLZXksIHVwZGF0ZXIsIG9wdGlvbnMpXTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nZXRRdWVyeVN0YXRlID0gZnVuY3Rpb24gZ2V0UXVlcnlTdGF0ZShxdWVyeUtleSwgZmlsdGVycykge1xuICAgIHZhciBfdGhpcyRxdWVyeUNhY2hlJGZpbmQyO1xuXG4gICAgcmV0dXJuIChfdGhpcyRxdWVyeUNhY2hlJGZpbmQyID0gdGhpcy5xdWVyeUNhY2hlLmZpbmQocXVlcnlLZXksIGZpbHRlcnMpKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcXVlcnlDYWNoZSRmaW5kMi5zdGF0ZTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlUXVlcmllcyA9IGZ1bmN0aW9uIHJlbW92ZVF1ZXJpZXMoYXJnMSwgYXJnMikge1xuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzMiA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3MyWzBdO1xuXG4gICAgdmFyIHF1ZXJ5Q2FjaGUgPSB0aGlzLnF1ZXJ5Q2FjaGU7XG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBxdWVyeUNhY2hlLmZpbmRBbGwoZmlsdGVycykuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcXVlcnlDYWNoZS5yZW1vdmUocXVlcnkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc2V0UXVlcmllcyA9IGZ1bmN0aW9uIHJlc2V0UXVlcmllcyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgX3BhcnNlRmlsdGVyQXJnczMgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiwgYXJnMyksXG4gICAgICAgIGZpbHRlcnMgPSBfcGFyc2VGaWx0ZXJBcmdzM1swXSxcbiAgICAgICAgb3B0aW9ucyA9IF9wYXJzZUZpbHRlckFyZ3MzWzFdO1xuXG4gICAgdmFyIHF1ZXJ5Q2FjaGUgPSB0aGlzLnF1ZXJ5Q2FjaGU7XG5cbiAgICB2YXIgcmVmZXRjaEZpbHRlcnMgPSBfZXh0ZW5kcyh7fSwgZmlsdGVycywge1xuICAgICAgYWN0aXZlOiB0cnVlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBxdWVyeUNhY2hlLmZpbmRBbGwoZmlsdGVycykuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcXVlcnkucmVzZXQoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF90aGlzMy5yZWZldGNoUXVlcmllcyhyZWZldGNoRmlsdGVycywgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbFF1ZXJpZXMgPSBmdW5jdGlvbiBjYW5jZWxRdWVyaWVzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzNCA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyLCBhcmczKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3M0WzBdLFxuICAgICAgICBfcGFyc2VGaWx0ZXJBcmdzNCQgPSBfcGFyc2VGaWx0ZXJBcmdzNFsxXSxcbiAgICAgICAgY2FuY2VsT3B0aW9ucyA9IF9wYXJzZUZpbHRlckFyZ3M0JCA9PT0gdm9pZCAwID8ge30gOiBfcGFyc2VGaWx0ZXJBcmdzNCQ7XG5cbiAgICBpZiAodHlwZW9mIGNhbmNlbE9wdGlvbnMucmV2ZXJ0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY2FuY2VsT3B0aW9ucy5yZXZlcnQgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBwcm9taXNlcyA9IG5vdGlmeU1hbmFnZXIuYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzNC5xdWVyeUNhY2hlLmZpbmRBbGwoZmlsdGVycykubWFwKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICByZXR1cm4gcXVlcnkuY2FuY2VsKGNhbmNlbE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKG5vb3ApLmNhdGNoKG5vb3ApO1xuICB9O1xuXG4gIF9wcm90by5pbnZhbGlkYXRlUXVlcmllcyA9IGZ1bmN0aW9uIGludmFsaWRhdGVRdWVyaWVzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgX3JlZjIsXG4gICAgICAgIF9maWx0ZXJzJHJlZmV0Y2hBY3RpdixcbiAgICAgICAgX2ZpbHRlcnMkcmVmZXRjaEluYWN0LFxuICAgICAgICBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIF9wYXJzZUZpbHRlckFyZ3M1ID0gcGFyc2VGaWx0ZXJBcmdzKGFyZzEsIGFyZzIsIGFyZzMpLFxuICAgICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnczVbMF0sXG4gICAgICAgIG9wdGlvbnMgPSBfcGFyc2VGaWx0ZXJBcmdzNVsxXTtcblxuICAgIHZhciByZWZldGNoRmlsdGVycyA9IF9leHRlbmRzKHt9LCBmaWx0ZXJzLCB7XG4gICAgICAvLyBpZiBmaWx0ZXJzLnJlZmV0Y2hBY3RpdmUgaXMgbm90IHByb3ZpZGVkIGFuZCBmaWx0ZXJzLmFjdGl2ZSBpcyBleHBsaWNpdGx5IGZhbHNlLFxuICAgICAgLy8gZS5nLiBpbnZhbGlkYXRlUXVlcmllcyh7IGFjdGl2ZTogZmFsc2UgfSksIHdlIGRvbid0IHdhbnQgdG8gcmVmZXRjaCBhY3RpdmUgcXVlcmllc1xuICAgICAgYWN0aXZlOiAoX3JlZjIgPSAoX2ZpbHRlcnMkcmVmZXRjaEFjdGl2ID0gZmlsdGVycy5yZWZldGNoQWN0aXZlKSAhPSBudWxsID8gX2ZpbHRlcnMkcmVmZXRjaEFjdGl2IDogZmlsdGVycy5hY3RpdmUpICE9IG51bGwgPyBfcmVmMiA6IHRydWUsXG4gICAgICBpbmFjdGl2ZTogKF9maWx0ZXJzJHJlZmV0Y2hJbmFjdCA9IGZpbHRlcnMucmVmZXRjaEluYWN0aXZlKSAhPSBudWxsID8gX2ZpbHRlcnMkcmVmZXRjaEluYWN0IDogZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNS5xdWVyeUNhY2hlLmZpbmRBbGwoZmlsdGVycykuZm9yRWFjaChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcXVlcnkuaW52YWxpZGF0ZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfdGhpczUucmVmZXRjaFF1ZXJpZXMocmVmZXRjaEZpbHRlcnMsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZWZldGNoUXVlcmllcyA9IGZ1bmN0aW9uIHJlZmV0Y2hRdWVyaWVzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgIHZhciBfcGFyc2VGaWx0ZXJBcmdzNiA9IHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyLCBhcmczKSxcbiAgICAgICAgZmlsdGVycyA9IF9wYXJzZUZpbHRlckFyZ3M2WzBdLFxuICAgICAgICBvcHRpb25zID0gX3BhcnNlRmlsdGVyQXJnczZbMV07XG5cbiAgICB2YXIgcHJvbWlzZXMgPSBub3RpZnlNYW5hZ2VyLmJhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczYucXVlcnlDYWNoZS5maW5kQWxsKGZpbHRlcnMpLm1hcChmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5LmZldGNoKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKG5vb3ApO1xuXG4gICAgaWYgKCEob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy50aHJvd09uRXJyb3IpKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS5jYXRjaChub29wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICBfcHJvdG8uZmV0Y2hRdWVyeSA9IGZ1bmN0aW9uIGZldGNoUXVlcnkoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIHZhciBwYXJzZWRPcHRpb25zID0gcGFyc2VRdWVyeUFyZ3MoYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSB0aGlzLmRlZmF1bHRRdWVyeU9wdGlvbnMocGFyc2VkT3B0aW9ucyk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YW5uZXJsaW5zbGV5L3JlYWN0LXF1ZXJ5L2lzc3Vlcy82NTJcblxuICAgIGlmICh0eXBlb2YgZGVmYXVsdGVkT3B0aW9ucy5yZXRyeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMucmV0cnkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJ5Q2FjaGUuYnVpbGQodGhpcywgZGVmYXVsdGVkT3B0aW9ucyk7XG4gICAgcmV0dXJuIHF1ZXJ5LmlzU3RhbGVCeVRpbWUoZGVmYXVsdGVkT3B0aW9ucy5zdGFsZVRpbWUpID8gcXVlcnkuZmV0Y2goZGVmYXVsdGVkT3B0aW9ucykgOiBQcm9taXNlLnJlc29sdmUocXVlcnkuc3RhdGUuZGF0YSk7XG4gIH07XG5cbiAgX3Byb3RvLnByZWZldGNoUXVlcnkgPSBmdW5jdGlvbiBwcmVmZXRjaFF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICByZXR1cm4gdGhpcy5mZXRjaFF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpLnRoZW4obm9vcCkuY2F0Y2gobm9vcCk7XG4gIH07XG5cbiAgX3Byb3RvLmZldGNoSW5maW5pdGVRdWVyeSA9IGZ1bmN0aW9uIGZldGNoSW5maW5pdGVRdWVyeShhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgdmFyIHBhcnNlZE9wdGlvbnMgPSBwYXJzZVF1ZXJ5QXJncyhhcmcxLCBhcmcyLCBhcmczKTtcbiAgICBwYXJzZWRPcHRpb25zLmJlaGF2aW9yID0gaW5maW5pdGVRdWVyeUJlaGF2aW9yKCk7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2hRdWVyeShwYXJzZWRPcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8ucHJlZmV0Y2hJbmZpbml0ZVF1ZXJ5ID0gZnVuY3Rpb24gcHJlZmV0Y2hJbmZpbml0ZVF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICByZXR1cm4gdGhpcy5mZXRjaEluZmluaXRlUXVlcnkoYXJnMSwgYXJnMiwgYXJnMykudGhlbihub29wKS5jYXRjaChub29wKTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsTXV0YXRpb25zID0gZnVuY3Rpb24gY2FuY2VsTXV0YXRpb25zKCkge1xuICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2VzID0gbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXM3Lm11dGF0aW9uQ2FjaGUuZ2V0QWxsKCkubWFwKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgICByZXR1cm4gbXV0YXRpb24uY2FuY2VsKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4obm9vcCkuY2F0Y2gobm9vcCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc3VtZVBhdXNlZE11dGF0aW9ucyA9IGZ1bmN0aW9uIHJlc3VtZVBhdXNlZE11dGF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRNdXRhdGlvbkNhY2hlKCkucmVzdW1lUGF1c2VkTXV0YXRpb25zKCk7XG4gIH07XG5cbiAgX3Byb3RvLmV4ZWN1dGVNdXRhdGlvbiA9IGZ1bmN0aW9uIGV4ZWN1dGVNdXRhdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25DYWNoZS5idWlsZCh0aGlzLCBvcHRpb25zKS5leGVjdXRlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFF1ZXJ5Q2FjaGUgPSBmdW5jdGlvbiBnZXRRdWVyeUNhY2hlKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5Q2FjaGU7XG4gIH07XG5cbiAgX3Byb3RvLmdldE11dGF0aW9uQ2FjaGUgPSBmdW5jdGlvbiBnZXRNdXRhdGlvbkNhY2hlKCkge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uQ2FjaGU7XG4gIH07XG5cbiAgX3Byb3RvLmdldERlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdE9wdGlvbnM7XG4gIH07XG5cbiAgX3Byb3RvLnNldERlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zO1xuICB9O1xuXG4gIF9wcm90by5zZXRRdWVyeURlZmF1bHRzID0gZnVuY3Rpb24gc2V0UXVlcnlEZWZhdWx0cyhxdWVyeUtleSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLnF1ZXJ5RGVmYXVsdHMuZmluZChmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIGhhc2hRdWVyeUtleShxdWVyeUtleSkgPT09IGhhc2hRdWVyeUtleSh4LnF1ZXJ5S2V5KTtcbiAgICB9KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJlc3VsdC5kZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucXVlcnlEZWZhdWx0cy5wdXNoKHtcbiAgICAgICAgcXVlcnlLZXk6IHF1ZXJ5S2V5LFxuICAgICAgICBkZWZhdWx0T3B0aW9uczogb3B0aW9uc1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRRdWVyeURlZmF1bHRzID0gZnVuY3Rpb24gZ2V0UXVlcnlEZWZhdWx0cyhxdWVyeUtleSkge1xuICAgIHZhciBfdGhpcyRxdWVyeURlZmF1bHRzJGY7XG5cbiAgICByZXR1cm4gcXVlcnlLZXkgPyAoX3RoaXMkcXVlcnlEZWZhdWx0cyRmID0gdGhpcy5xdWVyeURlZmF1bHRzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwYXJ0aWFsTWF0Y2hLZXkocXVlcnlLZXksIHgucXVlcnlLZXkpO1xuICAgIH0pKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkcXVlcnlEZWZhdWx0cyRmLmRlZmF1bHRPcHRpb25zIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5zZXRNdXRhdGlvbkRlZmF1bHRzID0gZnVuY3Rpb24gc2V0TXV0YXRpb25EZWZhdWx0cyhtdXRhdGlvbktleSwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLm11dGF0aW9uRGVmYXVsdHMuZmluZChmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIGhhc2hRdWVyeUtleShtdXRhdGlvbktleSkgPT09IGhhc2hRdWVyeUtleSh4Lm11dGF0aW9uS2V5KTtcbiAgICB9KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJlc3VsdC5kZWZhdWx0T3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubXV0YXRpb25EZWZhdWx0cy5wdXNoKHtcbiAgICAgICAgbXV0YXRpb25LZXk6IG11dGF0aW9uS2V5LFxuICAgICAgICBkZWZhdWx0T3B0aW9uczogb3B0aW9uc1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXRNdXRhdGlvbkRlZmF1bHRzID0gZnVuY3Rpb24gZ2V0TXV0YXRpb25EZWZhdWx0cyhtdXRhdGlvbktleSkge1xuICAgIHZhciBfdGhpcyRtdXRhdGlvbkRlZmF1bHQ7XG5cbiAgICByZXR1cm4gbXV0YXRpb25LZXkgPyAoX3RoaXMkbXV0YXRpb25EZWZhdWx0ID0gdGhpcy5tdXRhdGlvbkRlZmF1bHRzLmZpbmQoZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwYXJ0aWFsTWF0Y2hLZXkobXV0YXRpb25LZXksIHgubXV0YXRpb25LZXkpO1xuICAgIH0pKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkbXV0YXRpb25EZWZhdWx0LmRlZmF1bHRPcHRpb25zIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5kZWZhdWx0UXVlcnlPcHRpb25zID0gZnVuY3Rpb24gZGVmYXVsdFF1ZXJ5T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuX2RlZmF1bHRlZCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRlZE9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucy5xdWVyaWVzLCB0aGlzLmdldFF1ZXJ5RGVmYXVsdHMob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5xdWVyeUtleSksIG9wdGlvbnMsIHtcbiAgICAgIF9kZWZhdWx0ZWQ6IHRydWVcbiAgICB9KTtcblxuICAgIGlmICghZGVmYXVsdGVkT3B0aW9ucy5xdWVyeUhhc2ggJiYgZGVmYXVsdGVkT3B0aW9ucy5xdWVyeUtleSkge1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5xdWVyeUhhc2ggPSBoYXNoUXVlcnlLZXlCeU9wdGlvbnMoZGVmYXVsdGVkT3B0aW9ucy5xdWVyeUtleSwgZGVmYXVsdGVkT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRlZE9wdGlvbnM7XG4gIH07XG5cbiAgX3Byb3RvLmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyA9IGZ1bmN0aW9uIGRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFF1ZXJ5T3B0aW9ucyhvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uZGVmYXVsdE11dGF0aW9uT3B0aW9ucyA9IGZ1bmN0aW9uIGRlZmF1bHRNdXRhdGlvbk9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLl9kZWZhdWx0ZWQpIHtcbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucy5tdXRhdGlvbnMsIHRoaXMuZ2V0TXV0YXRpb25EZWZhdWx0cyhvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLm11dGF0aW9uS2V5KSwgb3B0aW9ucywge1xuICAgICAgX2RlZmF1bHRlZDogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHRoaXMucXVlcnlDYWNoZS5jbGVhcigpO1xuICAgIHRoaXMubXV0YXRpb25DYWNoZS5jbGVhcigpO1xuICB9O1xuXG4gIHJldHVybiBRdWVyeUNsaWVudDtcbn0oKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZVwiO1xuaW1wb3J0IHsgaXNTZXJ2ZXIsIGlzVmFsaWRUaW1lb3V0LCBub29wLCByZXBsYWNlRXF1YWxEZWVwLCBzaGFsbG93RXF1YWxPYmplY3RzLCB0aW1lVW50aWxTdGFsZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4vbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBmb2N1c01hbmFnZXIgfSBmcm9tICcuL2ZvY3VzTWFuYWdlcic7XG5pbXBvcnQgeyBTdWJzY3JpYmFibGUgfSBmcm9tICcuL3N1YnNjcmliYWJsZSc7XG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyBpc0NhbmNlbGxlZEVycm9yIH0gZnJvbSAnLi9yZXRyeWVyJztcbmV4cG9ydCB2YXIgUXVlcnlPYnNlcnZlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N1YnNjcmliYWJsZSkge1xuICBfaW5oZXJpdHNMb29zZShRdWVyeU9ic2VydmVyLCBfU3Vic2NyaWJhYmxlKTtcblxuICBmdW5jdGlvbiBRdWVyeU9ic2VydmVyKGNsaWVudCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1N1YnNjcmliYWJsZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIF90aGlzLnRyYWNrZWRQcm9wcyA9IFtdO1xuICAgIF90aGlzLnByZXZpb3VzU2VsZWN0RXJyb3IgPSBudWxsO1xuXG4gICAgX3RoaXMuYmluZE1ldGhvZHMoKTtcblxuICAgIF90aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUXVlcnlPYnNlcnZlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmJpbmRNZXRob2RzID0gZnVuY3Rpb24gYmluZE1ldGhvZHMoKSB7XG4gICAgdGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVmZXRjaCA9IHRoaXMucmVmZXRjaC5iaW5kKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5vblN1YnNjcmliZSA9IGZ1bmN0aW9uIG9uU3Vic2NyaWJlKCkge1xuICAgIGlmICh0aGlzLmxpc3RlbmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuY3VycmVudFF1ZXJ5LmFkZE9ic2VydmVyKHRoaXMpO1xuXG4gICAgICBpZiAoc2hvdWxkRmV0Y2hPbk1vdW50KHRoaXMuY3VycmVudFF1ZXJ5LCB0aGlzLm9wdGlvbnMpKSB7XG4gICAgICAgIHRoaXMuZXhlY3V0ZUZldGNoKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlVGltZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5vblVuc3Vic2NyaWJlID0gZnVuY3Rpb24gb25VbnN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zaG91bGRGZXRjaE9uUmVjb25uZWN0ID0gZnVuY3Rpb24gc2hvdWxkRmV0Y2hPblJlY29ubmVjdCgpIHtcbiAgICByZXR1cm4gX3Nob3VsZEZldGNoT25SZWNvbm5lY3QodGhpcy5jdXJyZW50UXVlcnksIHRoaXMub3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLnNob3VsZEZldGNoT25XaW5kb3dGb2N1cyA9IGZ1bmN0aW9uIHNob3VsZEZldGNoT25XaW5kb3dGb2N1cygpIHtcbiAgICByZXR1cm4gX3Nob3VsZEZldGNoT25XaW5kb3dGb2N1cyh0aGlzLmN1cnJlbnRRdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLmNsZWFyVGltZXJzKCk7XG4gICAgdGhpcy5jdXJyZW50UXVlcnkucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLnNldE9wdGlvbnMgPSBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMsIG5vdGlmeU9wdGlvbnMpIHtcbiAgICB2YXIgcHJldk9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgdmFyIHByZXZRdWVyeSA9IHRoaXMuY3VycmVudFF1ZXJ5O1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuY2xpZW50LmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmVuYWJsZWQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuZW5hYmxlZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGVuYWJsZWQgdG8gYmUgYSBib29sZWFuJyk7XG4gICAgfSAvLyBLZWVwIHByZXZpb3VzIHF1ZXJ5IGtleSBpZiB0aGUgdXNlciBkb2VzIG5vdCBzdXBwbHkgb25lXG5cblxuICAgIGlmICghdGhpcy5vcHRpb25zLnF1ZXJ5S2V5KSB7XG4gICAgICB0aGlzLm9wdGlvbnMucXVlcnlLZXkgPSBwcmV2T3B0aW9ucy5xdWVyeUtleTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgdmFyIG1vdW50ZWQgPSB0aGlzLmhhc0xpc3RlbmVycygpOyAvLyBGZXRjaCBpZiB0aGVyZSBhcmUgc3Vic2NyaWJlcnNcblxuICAgIGlmIChtb3VudGVkICYmIHNob3VsZEZldGNoT3B0aW9uYWxseSh0aGlzLmN1cnJlbnRRdWVyeSwgcHJldlF1ZXJ5LCB0aGlzLm9wdGlvbnMsIHByZXZPcHRpb25zKSkge1xuICAgICAgdGhpcy5leGVjdXRlRmV0Y2goKTtcbiAgICB9IC8vIFVwZGF0ZSByZXN1bHRcblxuXG4gICAgdGhpcy51cGRhdGVSZXN1bHQobm90aWZ5T3B0aW9ucyk7IC8vIFVwZGF0ZSBzdGFsZSBpbnRlcnZhbCBpZiBuZWVkZWRcblxuICAgIGlmIChtb3VudGVkICYmICh0aGlzLmN1cnJlbnRRdWVyeSAhPT0gcHJldlF1ZXJ5IHx8IHRoaXMub3B0aW9ucy5lbmFibGVkICE9PSBwcmV2T3B0aW9ucy5lbmFibGVkIHx8IHRoaXMub3B0aW9ucy5zdGFsZVRpbWUgIT09IHByZXZPcHRpb25zLnN0YWxlVGltZSkpIHtcbiAgICAgIHRoaXMudXBkYXRlU3RhbGVUaW1lb3V0KCk7XG4gICAgfSAvLyBVcGRhdGUgcmVmZXRjaCBpbnRlcnZhbCBpZiBuZWVkZWRcblxuXG4gICAgaWYgKG1vdW50ZWQgJiYgKHRoaXMuY3VycmVudFF1ZXJ5ICE9PSBwcmV2UXVlcnkgfHwgdGhpcy5vcHRpb25zLmVuYWJsZWQgIT09IHByZXZPcHRpb25zLmVuYWJsZWQgfHwgdGhpcy5vcHRpb25zLnJlZmV0Y2hJbnRlcnZhbCAhPT0gcHJldk9wdGlvbnMucmVmZXRjaEludGVydmFsKSkge1xuICAgICAgdGhpcy51cGRhdGVSZWZldGNoSW50ZXJ2YWwoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldE9wdGltaXN0aWNSZXN1bHQgPSBmdW5jdGlvbiBnZXRPcHRpbWlzdGljUmVzdWx0KG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IHRoaXMuY2xpZW50LmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKTtcbiAgICB2YXIgcXVlcnkgPSB0aGlzLmNsaWVudC5nZXRRdWVyeUNhY2hlKCkuYnVpbGQodGhpcy5jbGllbnQsIGRlZmF1bHRlZE9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlc3VsdChxdWVyeSwgZGVmYXVsdGVkT3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEN1cnJlbnRSZXN1bHQgPSBmdW5jdGlvbiBnZXRDdXJyZW50UmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRSZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLnRyYWNrUmVzdWx0ID0gZnVuY3Rpb24gdHJhY2tSZXN1bHQocmVzdWx0KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgdHJhY2tlZFJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHJhY2tlZFJlc3VsdCwga2V5LCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHZhciB0eXBlZEtleSA9IGtleTtcblxuICAgICAgICAgIGlmICghX3RoaXMyLnRyYWNrZWRQcm9wcy5pbmNsdWRlcyh0eXBlZEtleSkpIHtcbiAgICAgICAgICAgIF90aGlzMi50cmFja2VkUHJvcHMucHVzaCh0eXBlZEtleSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFt0eXBlZEtleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmFja2VkUmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5nZXROZXh0UmVzdWx0ID0gZnVuY3Rpb24gZ2V0TmV4dFJlc3VsdChvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHVuc3Vic2NyaWJlID0gX3RoaXMzLnN1YnNjcmliZShmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmICghcmVzdWx0LmlzRmV0Y2hpbmcpIHtcbiAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdC5pc0Vycm9yICYmIChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnRocm93T25FcnJvcikpIHtcbiAgICAgICAgICAgIHJlamVjdChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0Q3VycmVudFF1ZXJ5ID0gZnVuY3Rpb24gZ2V0Q3VycmVudFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRRdWVyeTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgIHRoaXMuY2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5yZW1vdmUodGhpcy5jdXJyZW50UXVlcnkpO1xuICB9O1xuXG4gIF9wcm90by5yZWZldGNoID0gZnVuY3Rpb24gcmVmZXRjaChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2gob3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLmZldGNoT3B0aW1pc3RpYyA9IGZ1bmN0aW9uIGZldGNoT3B0aW1pc3RpYyhvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgZGVmYXVsdGVkT3B0aW9ucyA9IHRoaXMuY2xpZW50LmRlZmF1bHRRdWVyeU9ic2VydmVyT3B0aW9ucyhvcHRpb25zKTtcbiAgICB2YXIgcXVlcnkgPSB0aGlzLmNsaWVudC5nZXRRdWVyeUNhY2hlKCkuYnVpbGQodGhpcy5jbGllbnQsIGRlZmF1bHRlZE9wdGlvbnMpO1xuICAgIHJldHVybiBxdWVyeS5mZXRjaCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzNC5jcmVhdGVSZXN1bHQocXVlcnksIGRlZmF1bHRlZE9wdGlvbnMpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5mZXRjaCA9IGZ1bmN0aW9uIGZldGNoKGZldGNoT3B0aW9ucykge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHRoaXMuZXhlY3V0ZUZldGNoKGZldGNoT3B0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczUudXBkYXRlUmVzdWx0KCk7XG5cbiAgICAgIHJldHVybiBfdGhpczUuY3VycmVudFJlc3VsdDtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZXhlY3V0ZUZldGNoID0gZnVuY3Rpb24gZXhlY3V0ZUZldGNoKGZldGNoT3B0aW9ucykge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSByZWZlcmVuY2UgdGhlIGxhdGVzdCBxdWVyeSBhcyB0aGUgY3VycmVudCBvbmUgbWlnaHQgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7IC8vIEZldGNoXG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY3VycmVudFF1ZXJ5LmZldGNoKHRoaXMub3B0aW9ucywgZmV0Y2hPcHRpb25zKTtcblxuICAgIGlmICghKGZldGNoT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogZmV0Y2hPcHRpb25zLnRocm93T25FcnJvcikpIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLmNhdGNoKG5vb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVTdGFsZVRpbWVvdXQgPSBmdW5jdGlvbiB1cGRhdGVTdGFsZVRpbWVvdXQoKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICB0aGlzLmNsZWFyU3RhbGVUaW1lb3V0KCk7XG5cbiAgICBpZiAoaXNTZXJ2ZXIgfHwgdGhpcy5jdXJyZW50UmVzdWx0LmlzU3RhbGUgfHwgIWlzVmFsaWRUaW1lb3V0KHRoaXMub3B0aW9ucy5zdGFsZVRpbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRpbWUgPSB0aW1lVW50aWxTdGFsZSh0aGlzLmN1cnJlbnRSZXN1bHQuZGF0YVVwZGF0ZWRBdCwgdGhpcy5vcHRpb25zLnN0YWxlVGltZSk7IC8vIFRoZSB0aW1lb3V0IGlzIHNvbWV0aW1lcyB0cmlnZ2VyZWQgMSBtcyBiZWZvcmUgdGhlIHN0YWxlIHRpbWUgZXhwaXJhdGlvbi5cbiAgICAvLyBUbyBtaXRpZ2F0ZSB0aGlzIGlzc3VlIHdlIGFsd2F5cyBhZGQgMSBtcyB0byB0aGUgdGltZW91dC5cblxuICAgIHZhciB0aW1lb3V0ID0gdGltZSArIDE7XG4gICAgdGhpcy5zdGFsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpczYuY3VycmVudFJlc3VsdC5pc1N0YWxlKSB7XG4gICAgICAgIF90aGlzNi51cGRhdGVSZXN1bHQoKTtcbiAgICAgIH1cbiAgICB9LCB0aW1lb3V0KTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlUmVmZXRjaEludGVydmFsID0gZnVuY3Rpb24gdXBkYXRlUmVmZXRjaEludGVydmFsKCkge1xuICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgdGhpcy5jbGVhclJlZmV0Y2hJbnRlcnZhbCgpO1xuXG4gICAgaWYgKGlzU2VydmVyIHx8IHRoaXMub3B0aW9ucy5lbmFibGVkID09PSBmYWxzZSB8fCAhaXNWYWxpZFRpbWVvdXQodGhpcy5vcHRpb25zLnJlZmV0Y2hJbnRlcnZhbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlZmV0Y2hJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzNy5vcHRpb25zLnJlZmV0Y2hJbnRlcnZhbEluQmFja2dyb3VuZCB8fCBmb2N1c01hbmFnZXIuaXNGb2N1c2VkKCkpIHtcbiAgICAgICAgX3RoaXM3LmV4ZWN1dGVGZXRjaCgpO1xuICAgICAgfVxuICAgIH0sIHRoaXMub3B0aW9ucy5yZWZldGNoSW50ZXJ2YWwpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVUaW1lcnMgPSBmdW5jdGlvbiB1cGRhdGVUaW1lcnMoKSB7XG4gICAgdGhpcy51cGRhdGVTdGFsZVRpbWVvdXQoKTtcbiAgICB0aGlzLnVwZGF0ZVJlZmV0Y2hJbnRlcnZhbCgpO1xuICB9O1xuXG4gIF9wcm90by5jbGVhclRpbWVycyA9IGZ1bmN0aW9uIGNsZWFyVGltZXJzKCkge1xuICAgIHRoaXMuY2xlYXJTdGFsZVRpbWVvdXQoKTtcbiAgICB0aGlzLmNsZWFyUmVmZXRjaEludGVydmFsKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyU3RhbGVUaW1lb3V0ID0gZnVuY3Rpb24gY2xlYXJTdGFsZVRpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhbGVUaW1lb3V0SWQpO1xuICAgIHRoaXMuc3RhbGVUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyUmVmZXRjaEludGVydmFsID0gZnVuY3Rpb24gY2xlYXJSZWZldGNoSW50ZXJ2YWwoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnJlZmV0Y2hJbnRlcnZhbElkKTtcbiAgICB0aGlzLnJlZmV0Y2hJbnRlcnZhbElkID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVSZXN1bHQgPSBmdW5jdGlvbiBjcmVhdGVSZXN1bHQocXVlcnksIG9wdGlvbnMpIHtcbiAgICB2YXIgcHJldlF1ZXJ5ID0gdGhpcy5jdXJyZW50UXVlcnk7XG4gICAgdmFyIHByZXZPcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIHZhciBwcmV2UmVzdWx0ID0gdGhpcy5jdXJyZW50UmVzdWx0O1xuICAgIHZhciBwcmV2UmVzdWx0U3RhdGUgPSB0aGlzLmN1cnJlbnRSZXN1bHRTdGF0ZTtcbiAgICB2YXIgcHJldlJlc3VsdE9wdGlvbnMgPSB0aGlzLmN1cnJlbnRSZXN1bHRPcHRpb25zO1xuICAgIHZhciBxdWVyeUNoYW5nZSA9IHF1ZXJ5ICE9PSBwcmV2UXVlcnk7XG4gICAgdmFyIHF1ZXJ5SW5pdGlhbFN0YXRlID0gcXVlcnlDaGFuZ2UgPyBxdWVyeS5zdGF0ZSA6IHRoaXMuY3VycmVudFF1ZXJ5SW5pdGlhbFN0YXRlO1xuICAgIHZhciBwcmV2UXVlcnlSZXN1bHQgPSBxdWVyeUNoYW5nZSA/IHRoaXMuY3VycmVudFJlc3VsdCA6IHRoaXMucHJldmlvdXNRdWVyeVJlc3VsdDtcbiAgICB2YXIgc3RhdGUgPSBxdWVyeS5zdGF0ZTtcbiAgICB2YXIgZGF0YVVwZGF0ZWRBdCA9IHN0YXRlLmRhdGFVcGRhdGVkQXQsXG4gICAgICAgIGVycm9yID0gc3RhdGUuZXJyb3IsXG4gICAgICAgIGVycm9yVXBkYXRlZEF0ID0gc3RhdGUuZXJyb3JVcGRhdGVkQXQsXG4gICAgICAgIGlzRmV0Y2hpbmcgPSBzdGF0ZS5pc0ZldGNoaW5nLFxuICAgICAgICBzdGF0dXMgPSBzdGF0ZS5zdGF0dXM7XG4gICAgdmFyIGlzUHJldmlvdXNEYXRhID0gZmFsc2U7XG4gICAgdmFyIGlzUGxhY2Vob2xkZXJEYXRhID0gZmFsc2U7XG4gICAgdmFyIGRhdGE7IC8vIE9wdGltaXN0aWNhbGx5IHNldCByZXN1bHQgaW4gZmV0Y2hpbmcgc3RhdGUgaWYgbmVlZGVkXG5cbiAgICBpZiAob3B0aW9ucy5vcHRpbWlzdGljUmVzdWx0cykge1xuICAgICAgdmFyIG1vdW50ZWQgPSB0aGlzLmhhc0xpc3RlbmVycygpO1xuICAgICAgdmFyIGZldGNoT25Nb3VudCA9ICFtb3VudGVkICYmIHNob3VsZEZldGNoT25Nb3VudChxdWVyeSwgb3B0aW9ucyk7XG4gICAgICB2YXIgZmV0Y2hPcHRpb25hbGx5ID0gbW91bnRlZCAmJiBzaG91bGRGZXRjaE9wdGlvbmFsbHkocXVlcnksIHByZXZRdWVyeSwgb3B0aW9ucywgcHJldk9wdGlvbnMpO1xuXG4gICAgICBpZiAoZmV0Y2hPbk1vdW50IHx8IGZldGNoT3B0aW9uYWxseSkge1xuICAgICAgICBpc0ZldGNoaW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIWRhdGFVcGRhdGVkQXQpIHtcbiAgICAgICAgICBzdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIEtlZXAgcHJldmlvdXMgZGF0YSBpZiBuZWVkZWRcblxuXG4gICAgaWYgKG9wdGlvbnMua2VlcFByZXZpb3VzRGF0YSAmJiAhc3RhdGUuZGF0YVVwZGF0ZUNvdW50ICYmIChwcmV2UXVlcnlSZXN1bHQgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZRdWVyeVJlc3VsdC5pc1N1Y2Nlc3MpICYmIHN0YXR1cyAhPT0gJ2Vycm9yJykge1xuICAgICAgZGF0YSA9IHByZXZRdWVyeVJlc3VsdC5kYXRhO1xuICAgICAgZGF0YVVwZGF0ZWRBdCA9IHByZXZRdWVyeVJlc3VsdC5kYXRhVXBkYXRlZEF0O1xuICAgICAgc3RhdHVzID0gcHJldlF1ZXJ5UmVzdWx0LnN0YXR1cztcbiAgICAgIGlzUHJldmlvdXNEYXRhID0gdHJ1ZTtcbiAgICB9IC8vIFNlbGVjdCBkYXRhIGlmIG5lZWRlZFxuICAgIGVsc2UgaWYgKG9wdGlvbnMuc2VsZWN0ICYmIHR5cGVvZiBzdGF0ZS5kYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBNZW1vaXplIHNlbGVjdCByZXN1bHRcbiAgICAgICAgaWYgKHByZXZSZXN1bHQgJiYgc3RhdGUuZGF0YSA9PT0gKHByZXZSZXN1bHRTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogcHJldlJlc3VsdFN0YXRlLmRhdGEpICYmIG9wdGlvbnMuc2VsZWN0ID09PSAocHJldlJlc3VsdE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZSZXN1bHRPcHRpb25zLnNlbGVjdCkgJiYgIXRoaXMucHJldmlvdXNTZWxlY3RFcnJvcikge1xuICAgICAgICAgIGRhdGEgPSBwcmV2UmVzdWx0LmRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRhdGEgPSBvcHRpb25zLnNlbGVjdChzdGF0ZS5kYXRhKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3RydWN0dXJhbFNoYXJpbmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGRhdGEgPSByZXBsYWNlRXF1YWxEZWVwKHByZXZSZXN1bHQgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZSZXN1bHQuZGF0YSwgZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNTZWxlY3RFcnJvciA9IG51bGw7XG4gICAgICAgICAgfSBjYXRjaCAoc2VsZWN0RXJyb3IpIHtcbiAgICAgICAgICAgIGdldExvZ2dlcigpLmVycm9yKHNlbGVjdEVycm9yKTtcbiAgICAgICAgICAgIGVycm9yID0gc2VsZWN0RXJyb3I7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzU2VsZWN0RXJyb3IgPSBzZWxlY3RFcnJvcjtcbiAgICAgICAgICAgIGVycm9yVXBkYXRlZEF0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdlcnJvcic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIFVzZSBxdWVyeSBkYXRhXG4gICAgICBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gc3RhdGUuZGF0YTtcbiAgICAgICAgfSAvLyBTaG93IHBsYWNlaG9sZGVyIGRhdGEgaWYgbmVlZGVkXG5cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wbGFjZWhvbGRlckRhdGEgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyAmJiBzdGF0dXMgPT09ICdsb2FkaW5nJykge1xuICAgICAgdmFyIHBsYWNlaG9sZGVyRGF0YTsgLy8gTWVtb2l6ZSBwbGFjZWhvbGRlciBkYXRhXG5cbiAgICAgIGlmICgocHJldlJlc3VsdCA9PSBudWxsID8gdm9pZCAwIDogcHJldlJlc3VsdC5pc1BsYWNlaG9sZGVyRGF0YSkgJiYgb3B0aW9ucy5wbGFjZWhvbGRlckRhdGEgPT09IChwcmV2UmVzdWx0T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcHJldlJlc3VsdE9wdGlvbnMucGxhY2Vob2xkZXJEYXRhKSkge1xuICAgICAgICBwbGFjZWhvbGRlckRhdGEgPSBwcmV2UmVzdWx0LmRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZWhvbGRlckRhdGEgPSB0eXBlb2Ygb3B0aW9ucy5wbGFjZWhvbGRlckRhdGEgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnBsYWNlaG9sZGVyRGF0YSgpIDogb3B0aW9ucy5wbGFjZWhvbGRlckRhdGE7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2VsZWN0ICYmIHR5cGVvZiBwbGFjZWhvbGRlckRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyRGF0YSA9IG9wdGlvbnMuc2VsZWN0KHBsYWNlaG9sZGVyRGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnN0cnVjdHVyYWxTaGFyaW5nICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlckRhdGEgPSByZXBsYWNlRXF1YWxEZWVwKHByZXZSZXN1bHQgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZSZXN1bHQuZGF0YSwgcGxhY2Vob2xkZXJEYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1NlbGVjdEVycm9yID0gbnVsbDtcbiAgICAgICAgICB9IGNhdGNoIChzZWxlY3RFcnJvcikge1xuICAgICAgICAgICAgZ2V0TG9nZ2VyKCkuZXJyb3Ioc2VsZWN0RXJyb3IpO1xuICAgICAgICAgICAgZXJyb3IgPSBzZWxlY3RFcnJvcjtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNTZWxlY3RFcnJvciA9IHNlbGVjdEVycm9yO1xuICAgICAgICAgICAgZXJyb3JVcGRhdGVkQXQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgc3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBwbGFjZWhvbGRlckRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHN0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgICAgZGF0YSA9IHBsYWNlaG9sZGVyRGF0YTtcbiAgICAgICAgaXNQbGFjZWhvbGRlckRhdGEgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgIGlzTG9hZGluZzogc3RhdHVzID09PSAnbG9hZGluZycsXG4gICAgICBpc1N1Y2Nlc3M6IHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnLFxuICAgICAgaXNFcnJvcjogc3RhdHVzID09PSAnZXJyb3InLFxuICAgICAgaXNJZGxlOiBzdGF0dXMgPT09ICdpZGxlJyxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBkYXRhVXBkYXRlZEF0OiBkYXRhVXBkYXRlZEF0LFxuICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgZXJyb3JVcGRhdGVkQXQ6IGVycm9yVXBkYXRlZEF0LFxuICAgICAgZmFpbHVyZUNvdW50OiBzdGF0ZS5mZXRjaEZhaWx1cmVDb3VudCxcbiAgICAgIGlzRmV0Y2hlZDogc3RhdGUuZGF0YVVwZGF0ZUNvdW50ID4gMCB8fCBzdGF0ZS5lcnJvclVwZGF0ZUNvdW50ID4gMCxcbiAgICAgIGlzRmV0Y2hlZEFmdGVyTW91bnQ6IHN0YXRlLmRhdGFVcGRhdGVDb3VudCA+IHF1ZXJ5SW5pdGlhbFN0YXRlLmRhdGFVcGRhdGVDb3VudCB8fCBzdGF0ZS5lcnJvclVwZGF0ZUNvdW50ID4gcXVlcnlJbml0aWFsU3RhdGUuZXJyb3JVcGRhdGVDb3VudCxcbiAgICAgIGlzRmV0Y2hpbmc6IGlzRmV0Y2hpbmcsXG4gICAgICBpc0xvYWRpbmdFcnJvcjogc3RhdHVzID09PSAnZXJyb3InICYmIHN0YXRlLmRhdGFVcGRhdGVkQXQgPT09IDAsXG4gICAgICBpc1BsYWNlaG9sZGVyRGF0YTogaXNQbGFjZWhvbGRlckRhdGEsXG4gICAgICBpc1ByZXZpb3VzRGF0YTogaXNQcmV2aW91c0RhdGEsXG4gICAgICBpc1JlZmV0Y2hFcnJvcjogc3RhdHVzID09PSAnZXJyb3InICYmIHN0YXRlLmRhdGFVcGRhdGVkQXQgIT09IDAsXG4gICAgICBpc1N0YWxlOiBpc1N0YWxlKHF1ZXJ5LCBvcHRpb25zKSxcbiAgICAgIHJlZmV0Y2g6IHRoaXMucmVmZXRjaCxcbiAgICAgIHJlbW92ZTogdGhpcy5yZW1vdmVcbiAgICB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLnNob3VsZE5vdGlmeUxpc3RlbmVycyA9IGZ1bmN0aW9uIHNob3VsZE5vdGlmeUxpc3RlbmVycyhyZXN1bHQsIHByZXZSZXN1bHQpIHtcbiAgICBpZiAoIXByZXZSZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IHByZXZSZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgbm90aWZ5T25DaGFuZ2VQcm9wcyA9IF90aGlzJG9wdGlvbnMubm90aWZ5T25DaGFuZ2VQcm9wcyxcbiAgICAgICAgbm90aWZ5T25DaGFuZ2VQcm9wc0V4Y2x1c2lvbnMgPSBfdGhpcyRvcHRpb25zLm5vdGlmeU9uQ2hhbmdlUHJvcHNFeGNsdXNpb25zO1xuXG4gICAgaWYgKCFub3RpZnlPbkNoYW5nZVByb3BzICYmICFub3RpZnlPbkNoYW5nZVByb3BzRXhjbHVzaW9ucykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5vdGlmeU9uQ2hhbmdlUHJvcHMgPT09ICd0cmFja2VkJyAmJiAhdGhpcy50cmFja2VkUHJvcHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgaW5jbHVkZWRQcm9wcyA9IG5vdGlmeU9uQ2hhbmdlUHJvcHMgPT09ICd0cmFja2VkJyA/IHRoaXMudHJhY2tlZFByb3BzIDogbm90aWZ5T25DaGFuZ2VQcm9wcztcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzdWx0KS5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciB0eXBlZEtleSA9IGtleTtcbiAgICAgIHZhciBjaGFuZ2VkID0gcmVzdWx0W3R5cGVkS2V5XSAhPT0gcHJldlJlc3VsdFt0eXBlZEtleV07XG4gICAgICB2YXIgaXNJbmNsdWRlZCA9IGluY2x1ZGVkUHJvcHMgPT0gbnVsbCA/IHZvaWQgMCA6IGluY2x1ZGVkUHJvcHMuc29tZShmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geCA9PT0ga2V5O1xuICAgICAgfSk7XG4gICAgICB2YXIgaXNFeGNsdWRlZCA9IG5vdGlmeU9uQ2hhbmdlUHJvcHNFeGNsdXNpb25zID09IG51bGwgPyB2b2lkIDAgOiBub3RpZnlPbkNoYW5nZVByb3BzRXhjbHVzaW9ucy5zb21lKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4ID09PSBrZXk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjaGFuZ2VkICYmICFpc0V4Y2x1ZGVkICYmICghaW5jbHVkZWRQcm9wcyB8fCBpc0luY2x1ZGVkKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlUmVzdWx0ID0gZnVuY3Rpb24gdXBkYXRlUmVzdWx0KG5vdGlmeU9wdGlvbnMpIHtcbiAgICB2YXIgcHJldlJlc3VsdCA9IHRoaXMuY3VycmVudFJlc3VsdDtcbiAgICB0aGlzLmN1cnJlbnRSZXN1bHQgPSB0aGlzLmNyZWF0ZVJlc3VsdCh0aGlzLmN1cnJlbnRRdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmN1cnJlbnRSZXN1bHRTdGF0ZSA9IHRoaXMuY3VycmVudFF1ZXJ5LnN0YXRlO1xuICAgIHRoaXMuY3VycmVudFJlc3VsdE9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7IC8vIE9ubHkgbm90aWZ5IGlmIHNvbWV0aGluZyBoYXMgY2hhbmdlZFxuXG4gICAgaWYgKHNoYWxsb3dFcXVhbE9iamVjdHModGhpcy5jdXJyZW50UmVzdWx0LCBwcmV2UmVzdWx0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRGV0ZXJtaW5lIHdoaWNoIGNhbGxiYWNrcyB0byB0cmlnZ2VyXG5cblxuICAgIHZhciBkZWZhdWx0Tm90aWZ5T3B0aW9ucyA9IHtcbiAgICAgIGNhY2hlOiB0cnVlXG4gICAgfTtcblxuICAgIGlmICgobm90aWZ5T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogbm90aWZ5T3B0aW9ucy5saXN0ZW5lcnMpICE9PSBmYWxzZSAmJiB0aGlzLnNob3VsZE5vdGlmeUxpc3RlbmVycyh0aGlzLmN1cnJlbnRSZXN1bHQsIHByZXZSZXN1bHQpKSB7XG4gICAgICBkZWZhdWx0Tm90aWZ5T3B0aW9ucy5saXN0ZW5lcnMgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMubm90aWZ5KF9leHRlbmRzKHt9LCBkZWZhdWx0Tm90aWZ5T3B0aW9ucywgbm90aWZ5T3B0aW9ucykpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVRdWVyeSA9IGZ1bmN0aW9uIHVwZGF0ZVF1ZXJ5KCkge1xuICAgIHZhciBxdWVyeSA9IHRoaXMuY2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5idWlsZCh0aGlzLmNsaWVudCwgdGhpcy5vcHRpb25zKTtcblxuICAgIGlmIChxdWVyeSA9PT0gdGhpcy5jdXJyZW50UXVlcnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJldlF1ZXJ5ID0gdGhpcy5jdXJyZW50UXVlcnk7XG4gICAgdGhpcy5jdXJyZW50UXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLmN1cnJlbnRRdWVyeUluaXRpYWxTdGF0ZSA9IHF1ZXJ5LnN0YXRlO1xuICAgIHRoaXMucHJldmlvdXNRdWVyeVJlc3VsdCA9IHRoaXMuY3VycmVudFJlc3VsdDtcblxuICAgIGlmICh0aGlzLmhhc0xpc3RlbmVycygpKSB7XG4gICAgICBwcmV2UXVlcnkgPT0gbnVsbCA/IHZvaWQgMCA6IHByZXZRdWVyeS5yZW1vdmVPYnNlcnZlcih0aGlzKTtcbiAgICAgIHF1ZXJ5LmFkZE9ic2VydmVyKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25RdWVyeVVwZGF0ZSA9IGZ1bmN0aW9uIG9uUXVlcnlVcGRhdGUoYWN0aW9uKSB7XG4gICAgdmFyIG5vdGlmeU9wdGlvbnMgPSB7fTtcblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICBub3RpZnlPcHRpb25zLm9uU3VjY2VzcyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ2Vycm9yJyAmJiAhaXNDYW5jZWxsZWRFcnJvcihhY3Rpb24uZXJyb3IpKSB7XG4gICAgICBub3RpZnlPcHRpb25zLm9uRXJyb3IgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUmVzdWx0KG5vdGlmeU9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKCkpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZXJzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkobm90aWZ5T3B0aW9ucykge1xuICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgbm90aWZ5TWFuYWdlci5iYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBGaXJzdCB0cmlnZ2VyIHRoZSBjb25maWd1cmF0aW9uIGNhbGxiYWNrc1xuICAgICAgaWYgKG5vdGlmeU9wdGlvbnMub25TdWNjZXNzKSB7XG4gICAgICAgIF90aGlzOC5vcHRpb25zLm9uU3VjY2VzcyA9PSBudWxsID8gdm9pZCAwIDogX3RoaXM4Lm9wdGlvbnMub25TdWNjZXNzKF90aGlzOC5jdXJyZW50UmVzdWx0LmRhdGEpO1xuICAgICAgICBfdGhpczgub3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzOC5vcHRpb25zLm9uU2V0dGxlZChfdGhpczguY3VycmVudFJlc3VsdC5kYXRhLCBudWxsKTtcbiAgICAgIH0gZWxzZSBpZiAobm90aWZ5T3B0aW9ucy5vbkVycm9yKSB7XG4gICAgICAgIF90aGlzOC5vcHRpb25zLm9uRXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzOC5vcHRpb25zLm9uRXJyb3IoX3RoaXM4LmN1cnJlbnRSZXN1bHQuZXJyb3IpO1xuICAgICAgICBfdGhpczgub3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzOC5vcHRpb25zLm9uU2V0dGxlZCh1bmRlZmluZWQsIF90aGlzOC5jdXJyZW50UmVzdWx0LmVycm9yKTtcbiAgICAgIH0gLy8gVGhlbiB0cmlnZ2VyIHRoZSBsaXN0ZW5lcnNcblxuXG4gICAgICBpZiAobm90aWZ5T3B0aW9ucy5saXN0ZW5lcnMpIHtcbiAgICAgICAgX3RoaXM4Lmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVyKF90aGlzOC5jdXJyZW50UmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFRoZW4gdGhlIGNhY2hlIGxpc3RlbmVyc1xuXG5cbiAgICAgIGlmIChub3RpZnlPcHRpb25zLmNhY2hlKSB7XG4gICAgICAgIF90aGlzOC5jbGllbnQuZ2V0UXVlcnlDYWNoZSgpLm5vdGlmeSh7XG4gICAgICAgICAgcXVlcnk6IF90aGlzOC5jdXJyZW50UXVlcnksXG4gICAgICAgICAgdHlwZTogJ29ic2VydmVyUmVzdWx0c1VwZGF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBRdWVyeU9ic2VydmVyO1xufShTdWJzY3JpYmFibGUpO1xuXG5mdW5jdGlvbiBzaG91bGRMb2FkT25Nb3VudChxdWVyeSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5lbmFibGVkICE9PSBmYWxzZSAmJiAhcXVlcnkuc3RhdGUuZGF0YVVwZGF0ZWRBdCAmJiAhKHF1ZXJ5LnN0YXRlLnN0YXR1cyA9PT0gJ2Vycm9yJyAmJiBvcHRpb25zLnJldHJ5T25Nb3VudCA9PT0gZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRSZWZldGNoT25Nb3VudChxdWVyeSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5lbmFibGVkICE9PSBmYWxzZSAmJiBxdWVyeS5zdGF0ZS5kYXRhVXBkYXRlZEF0ID4gMCAmJiAob3B0aW9ucy5yZWZldGNoT25Nb3VudCA9PT0gJ2Fsd2F5cycgfHwgb3B0aW9ucy5yZWZldGNoT25Nb3VudCAhPT0gZmFsc2UgJiYgaXNTdGFsZShxdWVyeSwgb3B0aW9ucykpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRGZXRjaE9uTW91bnQocXVlcnksIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHNob3VsZExvYWRPbk1vdW50KHF1ZXJ5LCBvcHRpb25zKSB8fCBzaG91bGRSZWZldGNoT25Nb3VudChxdWVyeSwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIF9zaG91bGRGZXRjaE9uUmVjb25uZWN0KHF1ZXJ5LCBvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmVuYWJsZWQgIT09IGZhbHNlICYmIChvcHRpb25zLnJlZmV0Y2hPblJlY29ubmVjdCA9PT0gJ2Fsd2F5cycgfHwgb3B0aW9ucy5yZWZldGNoT25SZWNvbm5lY3QgIT09IGZhbHNlICYmIGlzU3RhbGUocXVlcnksIG9wdGlvbnMpKTtcbn1cblxuZnVuY3Rpb24gX3Nob3VsZEZldGNoT25XaW5kb3dGb2N1cyhxdWVyeSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5lbmFibGVkICE9PSBmYWxzZSAmJiAob3B0aW9ucy5yZWZldGNoT25XaW5kb3dGb2N1cyA9PT0gJ2Fsd2F5cycgfHwgb3B0aW9ucy5yZWZldGNoT25XaW5kb3dGb2N1cyAhPT0gZmFsc2UgJiYgaXNTdGFsZShxdWVyeSwgb3B0aW9ucykpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRGZXRjaE9wdGlvbmFsbHkocXVlcnksIHByZXZRdWVyeSwgb3B0aW9ucywgcHJldk9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuZW5hYmxlZCAhPT0gZmFsc2UgJiYgKHF1ZXJ5ICE9PSBwcmV2UXVlcnkgfHwgcHJldk9wdGlvbnMuZW5hYmxlZCA9PT0gZmFsc2UpICYmIGlzU3RhbGUocXVlcnksIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBpc1N0YWxlKHF1ZXJ5LCBvcHRpb25zKSB7XG4gIHJldHVybiBxdWVyeS5pc1N0YWxlQnlUaW1lKG9wdGlvbnMuc3RhbGVUaW1lKTtcbn0iLCJpbXBvcnQgeyBmb2N1c01hbmFnZXIgfSBmcm9tICcuL2ZvY3VzTWFuYWdlcic7XG5pbXBvcnQgeyBvbmxpbmVNYW5hZ2VyIH0gZnJvbSAnLi9vbmxpbmVNYW5hZ2VyJztcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnLi91dGlscyc7IC8vIFRZUEVTXG5cbmZ1bmN0aW9uIGRlZmF1bHRSZXRyeURlbGF5KGZhaWx1cmVDb3VudCkge1xuICByZXR1cm4gTWF0aC5taW4oMTAwMCAqIE1hdGgucG93KDIsIGZhaWx1cmVDb3VudCksIDMwMDAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2FuY2VsYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mICh2YWx1ZSA9PSBudWxsID8gdm9pZCAwIDogdmFsdWUuY2FuY2VsKSA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydCB2YXIgQ2FuY2VsbGVkRXJyb3IgPSBmdW5jdGlvbiBDYW5jZWxsZWRFcnJvcihvcHRpb25zKSB7XG4gIHRoaXMucmV2ZXJ0ID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5yZXZlcnQ7XG4gIHRoaXMuc2lsZW50ID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5zaWxlbnQ7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ2FuY2VsbGVkRXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQ2FuY2VsbGVkRXJyb3I7XG59IC8vIENMQVNTXG5cbmV4cG9ydCB2YXIgUmV0cnllciA9IGZ1bmN0aW9uIFJldHJ5ZXIoY29uZmlnKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIGNhbmNlbFJldHJ5ID0gZmFsc2U7XG4gIHZhciBjYW5jZWxGbjtcbiAgdmFyIGNvbnRpbnVlRm47XG4gIHZhciBwcm9taXNlUmVzb2x2ZTtcbiAgdmFyIHByb21pc2VSZWplY3Q7XG5cbiAgdGhpcy5jYW5jZWwgPSBmdW5jdGlvbiAoY2FuY2VsT3B0aW9ucykge1xuICAgIHJldHVybiBjYW5jZWxGbiA9PSBudWxsID8gdm9pZCAwIDogY2FuY2VsRm4oY2FuY2VsT3B0aW9ucyk7XG4gIH07XG5cbiAgdGhpcy5jYW5jZWxSZXRyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjYW5jZWxSZXRyeSA9IHRydWU7XG4gIH07XG5cbiAgdGhpcy5jb250aW51ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY29udGludWVGbiA9PSBudWxsID8gdm9pZCAwIDogY29udGludWVGbigpO1xuICB9O1xuXG4gIHRoaXMuZmFpbHVyZUNvdW50ID0gMDtcbiAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICB0aGlzLmlzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgdGhpcy5pc1RyYW5zcG9ydENhbmNlbGFibGUgPSBmYWxzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKG91dGVyUmVzb2x2ZSwgb3V0ZXJSZWplY3QpIHtcbiAgICBwcm9taXNlUmVzb2x2ZSA9IG91dGVyUmVzb2x2ZTtcbiAgICBwcm9taXNlUmVqZWN0ID0gb3V0ZXJSZWplY3Q7XG4gIH0pO1xuXG4gIHZhciByZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZSh2YWx1ZSkge1xuICAgIGlmICghX3RoaXMuaXNSZXNvbHZlZCkge1xuICAgICAgX3RoaXMuaXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICBjb25maWcub25TdWNjZXNzID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcub25TdWNjZXNzKHZhbHVlKTtcbiAgICAgIGNvbnRpbnVlRm4gPT0gbnVsbCA/IHZvaWQgMCA6IGNvbnRpbnVlRm4oKTtcbiAgICAgIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJlamVjdCA9IGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkge1xuICAgIGlmICghX3RoaXMuaXNSZXNvbHZlZCkge1xuICAgICAgX3RoaXMuaXNSZXNvbHZlZCA9IHRydWU7XG4gICAgICBjb25maWcub25FcnJvciA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLm9uRXJyb3IodmFsdWUpO1xuICAgICAgY29udGludWVGbiA9PSBudWxsID8gdm9pZCAwIDogY29udGludWVGbigpO1xuICAgICAgcHJvbWlzZVJlamVjdCh2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBwYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoY29udGludWVSZXNvbHZlKSB7XG4gICAgICBjb250aW51ZUZuID0gY29udGludWVSZXNvbHZlO1xuICAgICAgX3RoaXMuaXNQYXVzZWQgPSB0cnVlO1xuICAgICAgY29uZmlnLm9uUGF1c2UgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5vblBhdXNlKCk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBjb250aW51ZUZuID0gdW5kZWZpbmVkO1xuICAgICAgX3RoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgIGNvbmZpZy5vbkNvbnRpbnVlID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcub25Db250aW51ZSgpO1xuICAgIH0pO1xuICB9OyAvLyBDcmVhdGUgbG9vcCBmdW5jdGlvblxuXG5cbiAgdmFyIHJ1biA9IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAvLyBEbyBub3RoaW5nIGlmIGFscmVhZHkgcmVzb2x2ZWRcbiAgICBpZiAoX3RoaXMuaXNSZXNvbHZlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9taXNlT3JWYWx1ZTsgLy8gRXhlY3V0ZSBxdWVyeVxuXG4gICAgdHJ5IHtcbiAgICAgIHByb21pc2VPclZhbHVlID0gY29uZmlnLmZuKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHByb21pc2VPclZhbHVlID0gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH0gLy8gQ3JlYXRlIGNhbGxiYWNrIHRvIGNhbmNlbCB0aGlzIGZldGNoXG5cblxuICAgIGNhbmNlbEZuID0gZnVuY3Rpb24gY2FuY2VsRm4oY2FuY2VsT3B0aW9ucykge1xuICAgICAgaWYgKCFfdGhpcy5pc1Jlc29sdmVkKSB7XG4gICAgICAgIHJlamVjdChuZXcgQ2FuY2VsbGVkRXJyb3IoY2FuY2VsT3B0aW9ucykpOyAvLyBDYW5jZWwgdHJhbnNwb3J0IGlmIHN1cHBvcnRlZFxuXG4gICAgICAgIGlmIChpc0NhbmNlbGFibGUocHJvbWlzZU9yVmFsdWUpKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHByb21pc2VPclZhbHVlLmNhbmNlbCgpO1xuICAgICAgICAgIH0gY2F0Y2ggKF91bnVzZWQpIHt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9OyAvLyBDaGVjayBpZiB0aGUgdHJhbnNwb3J0IGxheWVyIHN1cHBvcnQgY2FuY2VsbGF0aW9uXG5cblxuICAgIF90aGlzLmlzVHJhbnNwb3J0Q2FuY2VsYWJsZSA9IGlzQ2FuY2VsYWJsZShwcm9taXNlT3JWYWx1ZSk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHByb21pc2VPclZhbHVlKS50aGVuKHJlc29sdmUpLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgdmFyIF9jb25maWckcmV0cnksIF9jb25maWckcmV0cnlEZWxheTtcblxuICAgICAgLy8gU3RvcCBpZiB0aGUgZmV0Y2ggaXMgYWxyZWFkeSByZXNvbHZlZFxuICAgICAgaWYgKF90aGlzLmlzUmVzb2x2ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBEbyB3ZSBuZWVkIHRvIHJldHJ5IHRoZSByZXF1ZXN0P1xuXG5cbiAgICAgIHZhciByZXRyeSA9IChfY29uZmlnJHJldHJ5ID0gY29uZmlnLnJldHJ5KSAhPSBudWxsID8gX2NvbmZpZyRyZXRyeSA6IDM7XG4gICAgICB2YXIgcmV0cnlEZWxheSA9IChfY29uZmlnJHJldHJ5RGVsYXkgPSBjb25maWcucmV0cnlEZWxheSkgIT0gbnVsbCA/IF9jb25maWckcmV0cnlEZWxheSA6IGRlZmF1bHRSZXRyeURlbGF5O1xuICAgICAgdmFyIGRlbGF5ID0gdHlwZW9mIHJldHJ5RGVsYXkgPT09ICdmdW5jdGlvbicgPyByZXRyeURlbGF5KF90aGlzLmZhaWx1cmVDb3VudCwgZXJyb3IpIDogcmV0cnlEZWxheTtcbiAgICAgIHZhciBzaG91bGRSZXRyeSA9IHJldHJ5ID09PSB0cnVlIHx8IHR5cGVvZiByZXRyeSA9PT0gJ251bWJlcicgJiYgX3RoaXMuZmFpbHVyZUNvdW50IDwgcmV0cnkgfHwgdHlwZW9mIHJldHJ5ID09PSAnZnVuY3Rpb24nICYmIHJldHJ5KF90aGlzLmZhaWx1cmVDb3VudCwgZXJyb3IpO1xuXG4gICAgICBpZiAoY2FuY2VsUmV0cnkgfHwgIXNob3VsZFJldHJ5KSB7XG4gICAgICAgIC8vIFdlIGFyZSBkb25lIGlmIHRoZSBxdWVyeSBkb2VzIG5vdCBuZWVkIHRvIGJlIHJldHJpZWRcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5mYWlsdXJlQ291bnQrKzsgLy8gTm90aWZ5IG9uIGZhaWxcblxuICAgICAgY29uZmlnLm9uRmFpbCA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLm9uRmFpbChfdGhpcy5mYWlsdXJlQ291bnQsIGVycm9yKTsgLy8gRGVsYXlcblxuICAgICAgc2xlZXAoZGVsYXkpIC8vIFBhdXNlIGlmIHRoZSBkb2N1bWVudCBpcyBub3QgdmlzaWJsZSBvciB3aGVuIHRoZSBkZXZpY2UgaXMgb2ZmbGluZVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWZvY3VzTWFuYWdlci5pc0ZvY3VzZWQoKSB8fCAhb25saW5lTWFuYWdlci5pc09ubGluZSgpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoY2FuY2VsUmV0cnkpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJ1bigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTsgLy8gU3RhcnQgbG9vcFxuXG5cbiAgcnVuKCk7XG59OyIsImV4cG9ydCB2YXIgU3Vic2NyaWJhYmxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3Vic2NyaWJhYmxlKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3Vic2NyaWJhYmxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBjYWxsYmFjayA9IGxpc3RlbmVyIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIHRoaXMub25TdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMubGlzdGVuZXJzID0gX3RoaXMubGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geCAhPT0gY2FsbGJhY2s7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMub25VbnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uIGhhc0xpc3RlbmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnMubGVuZ3RoID4gMDtcbiAgfTtcblxuICBfcHJvdG8ub25TdWJzY3JpYmUgPSBmdW5jdGlvbiBvblN1YnNjcmliZSgpIHsvLyBEbyBub3RoaW5nXG4gIH07XG5cbiAgX3Byb3RvLm9uVW5zdWJzY3JpYmUgPSBmdW5jdGlvbiBvblVuc3Vic2NyaWJlKCkgey8vIERvIG5vdGhpbmdcbiAgfTtcblxuICByZXR1cm4gU3Vic2NyaWJhYmxlO1xufSgpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuLy8gVFlQRVNcbi8vIFVUSUxTXG5leHBvcnQgdmFyIGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHtcbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmdW5jdGlvbmFsVXBkYXRlKHVwZGF0ZXIsIGlucHV0KSB7XG4gIHJldHVybiB0eXBlb2YgdXBkYXRlciA9PT0gJ2Z1bmN0aW9uJyA/IHVwZGF0ZXIoaW5wdXQpIDogdXBkYXRlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkVGltZW91dCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSA+PSAwICYmIHZhbHVlICE9PSBJbmZpbml0eTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVRdWVyeUtleUFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlKGFycmF5MSwgYXJyYXkyKSB7XG4gIHJldHVybiBhcnJheTEuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIGFycmF5Mi5pbmRleE9mKHgpID09PSAtMTtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUF0KGFycmF5LCBpbmRleCwgdmFsdWUpIHtcbiAgdmFyIGNvcHkgPSBhcnJheS5zbGljZSgwKTtcbiAgY29weVtpbmRleF0gPSB2YWx1ZTtcbiAgcmV0dXJuIGNvcHk7XG59XG5leHBvcnQgZnVuY3Rpb24gdGltZVVudGlsU3RhbGUodXBkYXRlZEF0LCBzdGFsZVRpbWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KHVwZGF0ZWRBdCArIChzdGFsZVRpbWUgfHwgMCkgLSBEYXRlLm5vdygpLCAwKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5QXJncyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gIGlmICghaXNRdWVyeUtleShhcmcxKSkge1xuICAgIHJldHVybiBhcmcxO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmcyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcmczLCB7XG4gICAgICBxdWVyeUtleTogYXJnMSxcbiAgICAgIHF1ZXJ5Rm46IGFyZzJcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJnMiwge1xuICAgIHF1ZXJ5S2V5OiBhcmcxXG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTXV0YXRpb25BcmdzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgaWYgKGlzUXVlcnlLZXkoYXJnMSkpIHtcbiAgICBpZiAodHlwZW9mIGFyZzIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJnMywge1xuICAgICAgICBtdXRhdGlvbktleTogYXJnMSxcbiAgICAgICAgbXV0YXRpb25GbjogYXJnMlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcmcyLCB7XG4gICAgICBtdXRhdGlvbktleTogYXJnMVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmcxID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcmcyLCB7XG4gICAgICBtdXRhdGlvbkZuOiBhcmcxXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGFyZzEpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRmlsdGVyQXJncyhhcmcxLCBhcmcyLCBhcmczKSB7XG4gIHJldHVybiBpc1F1ZXJ5S2V5KGFyZzEpID8gW19leHRlbmRzKHt9LCBhcmcyLCB7XG4gICAgcXVlcnlLZXk6IGFyZzFcbiAgfSksIGFyZzNdIDogW2FyZzEgfHwge30sIGFyZzJdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hcFF1ZXJ5U3RhdHVzRmlsdGVyKGFjdGl2ZSwgaW5hY3RpdmUpIHtcbiAgaWYgKGFjdGl2ZSA9PT0gdHJ1ZSAmJiBpbmFjdGl2ZSA9PT0gdHJ1ZSB8fCBhY3RpdmUgPT0gbnVsbCAmJiBpbmFjdGl2ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICdhbGwnO1xuICB9IGVsc2UgaWYgKGFjdGl2ZSA9PT0gZmFsc2UgJiYgaW5hY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuICdub25lJztcbiAgfSBlbHNlIHtcbiAgICAvLyBBdCB0aGlzIHBvaW50LCBhY3RpdmV8aW5hY3RpdmUgY2FuIG9ubHkgYmUgdHJ1ZXxmYWxzZSBvciBmYWxzZXx0cnVlXG4gICAgLy8gc28sIHdoZW4gb25seSBvbmUgdmFsdWUgaXMgcHJvdmlkZWQsIHRoZSBtaXNzaW5nIG9uZSBoYXMgdG8gYmUgdGhlIG5lZ2F0ZWQgdmFsdWVcbiAgICB2YXIgaXNBY3RpdmUgPSBhY3RpdmUgIT0gbnVsbCA/IGFjdGl2ZSA6ICFpbmFjdGl2ZTtcbiAgICByZXR1cm4gaXNBY3RpdmUgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSc7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFF1ZXJ5KGZpbHRlcnMsIHF1ZXJ5KSB7XG4gIHZhciBhY3RpdmUgPSBmaWx0ZXJzLmFjdGl2ZSxcbiAgICAgIGV4YWN0ID0gZmlsdGVycy5leGFjdCxcbiAgICAgIGZldGNoaW5nID0gZmlsdGVycy5mZXRjaGluZyxcbiAgICAgIGluYWN0aXZlID0gZmlsdGVycy5pbmFjdGl2ZSxcbiAgICAgIHByZWRpY2F0ZSA9IGZpbHRlcnMucHJlZGljYXRlLFxuICAgICAgcXVlcnlLZXkgPSBmaWx0ZXJzLnF1ZXJ5S2V5LFxuICAgICAgc3RhbGUgPSBmaWx0ZXJzLnN0YWxlO1xuXG4gIGlmIChpc1F1ZXJ5S2V5KHF1ZXJ5S2V5KSkge1xuICAgIGlmIChleGFjdCkge1xuICAgICAgaWYgKHF1ZXJ5LnF1ZXJ5SGFzaCAhPT0gaGFzaFF1ZXJ5S2V5QnlPcHRpb25zKHF1ZXJ5S2V5LCBxdWVyeS5vcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghcGFydGlhbE1hdGNoS2V5KHF1ZXJ5LnF1ZXJ5S2V5LCBxdWVyeUtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgcXVlcnlTdGF0dXNGaWx0ZXIgPSBtYXBRdWVyeVN0YXR1c0ZpbHRlcihhY3RpdmUsIGluYWN0aXZlKTtcblxuICBpZiAocXVlcnlTdGF0dXNGaWx0ZXIgPT09ICdub25lJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmIChxdWVyeVN0YXR1c0ZpbHRlciAhPT0gJ2FsbCcpIHtcbiAgICB2YXIgaXNBY3RpdmUgPSBxdWVyeS5pc0FjdGl2ZSgpO1xuXG4gICAgaWYgKHF1ZXJ5U3RhdHVzRmlsdGVyID09PSAnYWN0aXZlJyAmJiAhaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocXVlcnlTdGF0dXNGaWx0ZXIgPT09ICdpbmFjdGl2ZScgJiYgaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHN0YWxlID09PSAnYm9vbGVhbicgJiYgcXVlcnkuaXNTdGFsZSgpICE9PSBzdGFsZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZmV0Y2hpbmcgPT09ICdib29sZWFuJyAmJiBxdWVyeS5pc0ZldGNoaW5nKCkgIT09IGZldGNoaW5nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHByZWRpY2F0ZSAmJiAhcHJlZGljYXRlKHF1ZXJ5KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoTXV0YXRpb24oZmlsdGVycywgbXV0YXRpb24pIHtcbiAgdmFyIGV4YWN0ID0gZmlsdGVycy5leGFjdCxcbiAgICAgIGZldGNoaW5nID0gZmlsdGVycy5mZXRjaGluZyxcbiAgICAgIHByZWRpY2F0ZSA9IGZpbHRlcnMucHJlZGljYXRlLFxuICAgICAgbXV0YXRpb25LZXkgPSBmaWx0ZXJzLm11dGF0aW9uS2V5O1xuXG4gIGlmIChpc1F1ZXJ5S2V5KG11dGF0aW9uS2V5KSkge1xuICAgIGlmICghbXV0YXRpb24ub3B0aW9ucy5tdXRhdGlvbktleSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChleGFjdCkge1xuICAgICAgaWYgKGhhc2hRdWVyeUtleShtdXRhdGlvbi5vcHRpb25zLm11dGF0aW9uS2V5KSAhPT0gaGFzaFF1ZXJ5S2V5KG11dGF0aW9uS2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghcGFydGlhbE1hdGNoS2V5KG11dGF0aW9uLm9wdGlvbnMubXV0YXRpb25LZXksIG11dGF0aW9uS2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgZmV0Y2hpbmcgPT09ICdib29sZWFuJyAmJiBtdXRhdGlvbi5zdGF0ZS5zdGF0dXMgPT09ICdsb2FkaW5nJyAhPT0gZmV0Y2hpbmcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocHJlZGljYXRlICYmICFwcmVkaWNhdGUobXV0YXRpb24pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gaGFzaFF1ZXJ5S2V5QnlPcHRpb25zKHF1ZXJ5S2V5LCBvcHRpb25zKSB7XG4gIHZhciBoYXNoRm4gPSAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5xdWVyeUtleUhhc2hGbikgfHwgaGFzaFF1ZXJ5S2V5O1xuICByZXR1cm4gaGFzaEZuKHF1ZXJ5S2V5KTtcbn1cbi8qKlxuICogRGVmYXVsdCBxdWVyeSBrZXlzIGhhc2ggZnVuY3Rpb24uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hRdWVyeUtleShxdWVyeUtleSkge1xuICB2YXIgYXNBcnJheSA9IGVuc3VyZVF1ZXJ5S2V5QXJyYXkocXVlcnlLZXkpO1xuICByZXR1cm4gc3RhYmxlVmFsdWVIYXNoKGFzQXJyYXkpO1xufVxuLyoqXG4gKiBIYXNoZXMgdGhlIHZhbHVlIGludG8gYSBzdGFibGUgaGFzaC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhYmxlVmFsdWVIYXNoKHZhbHVlKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgZnVuY3Rpb24gKF8sIHZhbCkge1xuICAgIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbCkgPyBPYmplY3Qua2V5cyh2YWwpLnNvcnQoKS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbFtrZXldO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCB7fSkgOiB2YWw7XG4gIH0pO1xufVxuLyoqXG4gKiBDaGVja3MgaWYga2V5IGBiYCBwYXJ0aWFsbHkgbWF0Y2hlcyB3aXRoIGtleSBgYWAuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpYWxNYXRjaEtleShhLCBiKSB7XG4gIHJldHVybiBwYXJ0aWFsRGVlcEVxdWFsKGVuc3VyZVF1ZXJ5S2V5QXJyYXkoYSksIGVuc3VyZVF1ZXJ5S2V5QXJyYXkoYikpO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgYGJgIHBhcnRpYWxseSBtYXRjaGVzIHdpdGggYGFgLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aWFsRGVlcEVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYSAhPT0gdHlwZW9mIGIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gIU9iamVjdC5rZXlzKGIpLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuICFwYXJ0aWFsRGVlcEVxdWFsKGFba2V5XSwgYltrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGBhYCBpZiBgYmAgaXMgZGVlcGx5IGVxdWFsLlxuICogSWYgbm90LCBpdCB3aWxsIHJlcGxhY2UgYW55IGRlZXBseSBlcXVhbCBjaGlsZHJlbiBvZiBgYmAgd2l0aCB0aG9zZSBvZiBgYWAuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIGZvciBzdHJ1Y3R1cmFsIHNoYXJpbmcgYmV0d2VlbiBKU09OIHZhbHVlcyBmb3IgZXhhbXBsZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUVxdWFsRGVlcChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KGEpICYmIEFycmF5LmlzQXJyYXkoYik7XG5cbiAgaWYgKGFycmF5IHx8IGlzUGxhaW5PYmplY3QoYSkgJiYgaXNQbGFpbk9iamVjdChiKSkge1xuICAgIHZhciBhU2l6ZSA9IGFycmF5ID8gYS5sZW5ndGggOiBPYmplY3Qua2V5cyhhKS5sZW5ndGg7XG4gICAgdmFyIGJJdGVtcyA9IGFycmF5ID8gYiA6IE9iamVjdC5rZXlzKGIpO1xuICAgIHZhciBiU2l6ZSA9IGJJdGVtcy5sZW5ndGg7XG4gICAgdmFyIGNvcHkgPSBhcnJheSA/IFtdIDoge307XG4gICAgdmFyIGVxdWFsSXRlbXMgPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiU2l6ZTsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gYXJyYXkgPyBpIDogYkl0ZW1zW2ldO1xuICAgICAgY29weVtrZXldID0gcmVwbGFjZUVxdWFsRGVlcChhW2tleV0sIGJba2V5XSk7XG5cbiAgICAgIGlmIChjb3B5W2tleV0gPT09IGFba2V5XSkge1xuICAgICAgICBlcXVhbEl0ZW1zKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFTaXplID09PSBiU2l6ZSAmJiBlcXVhbEl0ZW1zID09PSBhU2l6ZSA/IGEgOiBjb3B5O1xuICB9XG5cbiAgcmV0dXJuIGI7XG59XG4vKipcbiAqIFNoYWxsb3cgY29tcGFyZSBvYmplY3RzLiBPbmx5IHdvcmtzIHdpdGggb2JqZWN0cyB0aGF0IGFsd2F5cyBoYXZlIHRoZSBzYW1lIHByb3BlcnRpZXMuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbE9iamVjdHMoYSwgYikge1xuICBpZiAoYSAmJiAhYiB8fCBiICYmICFhKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0gLy8gQ29waWVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLXBsYWluLW9iamVjdFxuXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvKSB7XG4gIGlmICghaGFzT2JqZWN0UHJvdG90eXBlKG8pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIElmIGhhcyBtb2RpZmllZCBjb25zdHJ1Y3RvclxuXG5cbiAgdmFyIGN0b3IgPSBvLmNvbnN0cnVjdG9yO1xuXG4gIGlmICh0eXBlb2YgY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBJZiBoYXMgbW9kaWZpZWQgcHJvdG90eXBlXG5cblxuICB2YXIgcHJvdCA9IGN0b3IucHJvdG90eXBlO1xuXG4gIGlmICghaGFzT2JqZWN0UHJvdG90eXBlKHByb3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIElmIGNvbnN0cnVjdG9yIGRvZXMgbm90IGhhdmUgYW4gT2JqZWN0LXNwZWNpZmljIG1ldGhvZFxuXG5cbiAgaWYgKCFwcm90Lmhhc093blByb3BlcnR5KCdpc1Byb3RvdHlwZU9mJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gTW9zdCBsaWtlbHkgYSBwbGFpbiBPYmplY3RcblxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBoYXNPYmplY3RQcm90b3R5cGUobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUXVlcnlLZXkodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBFcnJvcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzbGVlcCh0aW1lb3V0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZW91dCk7XG4gIH0pO1xufVxuLyoqXG4gKiBTY2hlZHVsZXMgYSBtaWNyb3Rhc2suXG4gKiBUaGlzIGNhbiBiZSB1c2VmdWwgdG8gc2NoZWR1bGUgc3RhdGUgdXBkYXRlcyBhZnRlciByZW5kZXJpbmcuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlTWljcm90YXNrKGNhbGxiYWNrKSB7XG4gIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oY2FsbGJhY2spLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0pO1xuICB9KTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcblxuLy8gVFlQRVNcbi8vIEZVTkNUSU9OU1xuZnVuY3Rpb24gZGVoeWRyYXRlTXV0YXRpb24obXV0YXRpb24pIHtcbiAgcmV0dXJuIHtcbiAgICBtdXRhdGlvbktleTogbXV0YXRpb24ub3B0aW9ucy5tdXRhdGlvbktleSxcbiAgICBzdGF0ZTogbXV0YXRpb24uc3RhdGVcbiAgfTtcbn0gLy8gTW9zdCBjb25maWcgaXMgbm90IGRlaHlkcmF0ZWQgYnV0IGluc3RlYWQgbWVhbnQgdG8gY29uZmlndXJlIGFnYWluIHdoZW5cbi8vIGNvbnN1bWluZyB0aGUgZGUvcmVoeWRyYXRlZCBkYXRhLCB0eXBpY2FsbHkgd2l0aCB1c2VRdWVyeSBvbiB0aGUgY2xpZW50LlxuLy8gU29tZXRpbWVzIGl0IG1pZ2h0IG1ha2Ugc2Vuc2UgdG8gcHJlZmV0Y2ggZGF0YSBvbiB0aGUgc2VydmVyIGFuZCBpbmNsdWRlXG4vLyBpbiB0aGUgaHRtbC1wYXlsb2FkLCBidXQgbm90IGNvbnN1bWUgaXQgb24gdGhlIGluaXRpYWwgcmVuZGVyLlxuXG5cbmZ1bmN0aW9uIGRlaHlkcmF0ZVF1ZXJ5KHF1ZXJ5KSB7XG4gIHJldHVybiB7XG4gICAgc3RhdGU6IHF1ZXJ5LnN0YXRlLFxuICAgIHF1ZXJ5S2V5OiBxdWVyeS5xdWVyeUtleSxcbiAgICBxdWVyeUhhc2g6IHF1ZXJ5LnF1ZXJ5SGFzaFxuICB9O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0U2hvdWxkRGVoeWRyYXRlTXV0YXRpb24obXV0YXRpb24pIHtcbiAgcmV0dXJuIG11dGF0aW9uLnN0YXRlLmlzUGF1c2VkO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0U2hvdWxkRGVoeWRyYXRlUXVlcnkocXVlcnkpIHtcbiAgcmV0dXJuIHF1ZXJ5LnN0YXRlLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVoeWRyYXRlKGNsaWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMsIF9vcHRpb25zMjtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG11dGF0aW9ucyA9IFtdO1xuICB2YXIgcXVlcmllcyA9IFtdO1xuXG4gIGlmICgoKF9vcHRpb25zID0gb3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9vcHRpb25zLmRlaHlkcmF0ZU11dGF0aW9ucykgIT09IGZhbHNlKSB7XG4gICAgdmFyIHNob3VsZERlaHlkcmF0ZU11dGF0aW9uID0gb3B0aW9ucy5zaG91bGREZWh5ZHJhdGVNdXRhdGlvbiB8fCBkZWZhdWx0U2hvdWxkRGVoeWRyYXRlTXV0YXRpb247XG4gICAgY2xpZW50LmdldE11dGF0aW9uQ2FjaGUoKS5nZXRBbGwoKS5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgaWYgKHNob3VsZERlaHlkcmF0ZU11dGF0aW9uKG11dGF0aW9uKSkge1xuICAgICAgICBtdXRhdGlvbnMucHVzaChkZWh5ZHJhdGVNdXRhdGlvbihtdXRhdGlvbikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCgoX29wdGlvbnMyID0gb3B0aW9ucykgPT0gbnVsbCA/IHZvaWQgMCA6IF9vcHRpb25zMi5kZWh5ZHJhdGVRdWVyaWVzKSAhPT0gZmFsc2UpIHtcbiAgICB2YXIgc2hvdWxkRGVoeWRyYXRlUXVlcnkgPSBvcHRpb25zLnNob3VsZERlaHlkcmF0ZVF1ZXJ5IHx8IGRlZmF1bHRTaG91bGREZWh5ZHJhdGVRdWVyeTtcbiAgICBjbGllbnQuZ2V0UXVlcnlDYWNoZSgpLmdldEFsbCgpLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICBpZiAoc2hvdWxkRGVoeWRyYXRlUXVlcnkocXVlcnkpKSB7XG4gICAgICAgIHF1ZXJpZXMucHVzaChkZWh5ZHJhdGVRdWVyeShxdWVyeSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtdXRhdGlvbnM6IG11dGF0aW9ucyxcbiAgICBxdWVyaWVzOiBxdWVyaWVzXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZShjbGllbnQsIGRlaHlkcmF0ZWRTdGF0ZSwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRlaHlkcmF0ZWRTdGF0ZSAhPT0gJ29iamVjdCcgfHwgZGVoeWRyYXRlZFN0YXRlID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG11dGF0aW9uQ2FjaGUgPSBjbGllbnQuZ2V0TXV0YXRpb25DYWNoZSgpO1xuICB2YXIgcXVlcnlDYWNoZSA9IGNsaWVudC5nZXRRdWVyeUNhY2hlKCk7XG4gIHZhciBtdXRhdGlvbnMgPSBkZWh5ZHJhdGVkU3RhdGUubXV0YXRpb25zIHx8IFtdO1xuICB2YXIgcXVlcmllcyA9IGRlaHlkcmF0ZWRTdGF0ZS5xdWVyaWVzIHx8IFtdO1xuICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZGVoeWRyYXRlZE11dGF0aW9uKSB7XG4gICAgdmFyIF9vcHRpb25zJGRlZmF1bHRPcHRpbztcblxuICAgIG11dGF0aW9uQ2FjaGUuYnVpbGQoY2xpZW50LCBfZXh0ZW5kcyh7fSwgb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogKF9vcHRpb25zJGRlZmF1bHRPcHRpbyA9IG9wdGlvbnMuZGVmYXVsdE9wdGlvbnMpID09IG51bGwgPyB2b2lkIDAgOiBfb3B0aW9ucyRkZWZhdWx0T3B0aW8ubXV0YXRpb25zLCB7XG4gICAgICBtdXRhdGlvbktleTogZGVoeWRyYXRlZE11dGF0aW9uLm11dGF0aW9uS2V5XG4gICAgfSksIGRlaHlkcmF0ZWRNdXRhdGlvbi5zdGF0ZSk7XG4gIH0pO1xuICBxdWVyaWVzLmZvckVhY2goZnVuY3Rpb24gKGRlaHlkcmF0ZWRRdWVyeSkge1xuICAgIHZhciBfb3B0aW9ucyRkZWZhdWx0T3B0aW8yO1xuXG4gICAgdmFyIHF1ZXJ5ID0gcXVlcnlDYWNoZS5nZXQoZGVoeWRyYXRlZFF1ZXJ5LnF1ZXJ5SGFzaCk7IC8vIERvIG5vdCBoeWRyYXRlIGlmIGFuIGV4aXN0aW5nIHF1ZXJ5IGV4aXN0cyB3aXRoIG5ld2VyIGRhdGFcblxuICAgIGlmIChxdWVyeSkge1xuICAgICAgaWYgKHF1ZXJ5LnN0YXRlLmRhdGFVcGRhdGVkQXQgPCBkZWh5ZHJhdGVkUXVlcnkuc3RhdGUuZGF0YVVwZGF0ZWRBdCkge1xuICAgICAgICBxdWVyeS5zZXRTdGF0ZShkZWh5ZHJhdGVkUXVlcnkuc3RhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBSZXN0b3JlIHF1ZXJ5XG5cblxuICAgIHF1ZXJ5Q2FjaGUuYnVpbGQoY2xpZW50LCBfZXh0ZW5kcyh7fSwgb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogKF9vcHRpb25zJGRlZmF1bHRPcHRpbzIgPSBvcHRpb25zLmRlZmF1bHRPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogX29wdGlvbnMkZGVmYXVsdE9wdGlvMi5xdWVyaWVzLCB7XG4gICAgICBxdWVyeUtleTogZGVoeWRyYXRlZFF1ZXJ5LnF1ZXJ5S2V5LFxuICAgICAgcXVlcnlIYXNoOiBkZWh5ZHJhdGVkUXVlcnkucXVlcnlIYXNoXG4gICAgfSksIGRlaHlkcmF0ZWRRdWVyeS5zdGF0ZSk7XG4gIH0pO1xufSIsImV4cG9ydCB7IGRlaHlkcmF0ZSwgaHlkcmF0ZSB9IGZyb20gJy4vaHlkcmF0aW9uJztcbmV4cG9ydCB7IHVzZUh5ZHJhdGUsIEh5ZHJhdGUgfSBmcm9tICcuL3JlYWN0JzsgLy8gVHlwZXMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBoeWRyYXRlIH0gZnJvbSAnLi9oeWRyYXRpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUh5ZHJhdGUoc3RhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgdmFyIG9wdGlvbnNSZWYgPSBSZWFjdC51c2VSZWYob3B0aW9ucyk7XG4gIG9wdGlvbnNSZWYuY3VycmVudCA9IG9wdGlvbnM7IC8vIFJ1bm5pbmcgaHlkcmF0ZSBhZ2FpbiB3aXRoIHRoZSBzYW1lIHF1ZXJpZXMgaXMgc2FmZSxcbiAgLy8gaXQgd29udCBvdmVyd3JpdGUgb3IgaW5pdGlhbGl6ZSBleGlzdGluZyBxdWVyaWVzLFxuICAvLyByZWx5aW5nIG9uIHVzZU1lbW8gaGVyZSBpcyBvbmx5IGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uLlxuICAvLyBoeWRyYXRlIGNhbiBhbmQgc2hvdWxkIGJlIHJ1biAqZHVyaW5nKiByZW5kZXIgaGVyZSBmb3IgU1NSIHRvIHdvcmsgcHJvcGVybHlcblxuICBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIGh5ZHJhdGUocXVlcnlDbGllbnQsIHN0YXRlLCBvcHRpb25zUmVmLmN1cnJlbnQpO1xuICAgIH1cbiAgfSwgW3F1ZXJ5Q2xpZW50LCBzdGF0ZV0pO1xufVxuZXhwb3J0IHZhciBIeWRyYXRlID0gZnVuY3Rpb24gSHlkcmF0ZShfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICB1c2VIeWRyYXRlKHN0YXRlLCBvcHRpb25zKTtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufTsiLCJleHBvcnQgKiBmcm9tICcuL2NvcmUnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWFjdCc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBkZWZhdWx0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG52YXIgUXVlcnlDbGllbnRTaGFyaW5nQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KGZhbHNlKTsgLy8gaWYgY29udGV4dFNoYXJpbmcgaXMgb24sIHdlIHNoYXJlIHRoZSBmaXJzdCBhbmQgYXQgbGVhc3Qgb25lXG4vLyBpbnN0YW5jZSBvZiB0aGUgY29udGV4dCBhY3Jvc3MgdGhlIHdpbmRvd1xuLy8gdG8gZW5zdXJlIHRoYXQgaWYgUmVhY3QgUXVlcnkgaXMgdXNlZCBhY3Jvc3Ncbi8vIGRpZmZlcmVudCBidW5kbGVzIG9yIG1pY3JvZnJvbnRlbmRzIHRoZXkgd2lsbFxuLy8gYWxsIHVzZSB0aGUgc2FtZSAqKmluc3RhbmNlKiogb2YgY29udGV4dCwgcmVnYXJkbGVzc1xuLy8gb2YgbW9kdWxlIHNjb3BpbmcuXG5cbmZ1bmN0aW9uIGdldFF1ZXJ5Q2xpZW50Q29udGV4dChjb250ZXh0U2hhcmluZykge1xuICBpZiAoY29udGV4dFNoYXJpbmcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoIXdpbmRvdy5SZWFjdFF1ZXJ5Q2xpZW50Q29udGV4dCkge1xuICAgICAgd2luZG93LlJlYWN0UXVlcnlDbGllbnRDb250ZXh0ID0gZGVmYXVsdENvbnRleHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbmRvdy5SZWFjdFF1ZXJ5Q2xpZW50Q29udGV4dDtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0Q29udGV4dDtcbn1cblxuZXhwb3J0IHZhciB1c2VRdWVyeUNsaWVudCA9IGZ1bmN0aW9uIHVzZVF1ZXJ5Q2xpZW50KCkge1xuICB2YXIgcXVlcnlDbGllbnQgPSBSZWFjdC51c2VDb250ZXh0KGdldFF1ZXJ5Q2xpZW50Q29udGV4dChSZWFjdC51c2VDb250ZXh0KFF1ZXJ5Q2xpZW50U2hhcmluZ0NvbnRleHQpKSk7XG5cbiAgaWYgKCFxdWVyeUNsaWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gUXVlcnlDbGllbnQgc2V0LCB1c2UgUXVlcnlDbGllbnRQcm92aWRlciB0byBzZXQgb25lJyk7XG4gIH1cblxuICByZXR1cm4gcXVlcnlDbGllbnQ7XG59O1xuZXhwb3J0IHZhciBRdWVyeUNsaWVudFByb3ZpZGVyID0gZnVuY3Rpb24gUXVlcnlDbGllbnRQcm92aWRlcihfcmVmKSB7XG4gIHZhciBjbGllbnQgPSBfcmVmLmNsaWVudCxcbiAgICAgIF9yZWYkY29udGV4dFNoYXJpbmcgPSBfcmVmLmNvbnRleHRTaGFyaW5nLFxuICAgICAgY29udGV4dFNoYXJpbmcgPSBfcmVmJGNvbnRleHRTaGFyaW5nID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkY29udGV4dFNoYXJpbmcsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgY2xpZW50Lm1vdW50KCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsaWVudC51bm1vdW50KCk7XG4gICAgfTtcbiAgfSwgW2NsaWVudF0pO1xuICB2YXIgQ29udGV4dCA9IGdldFF1ZXJ5Q2xpZW50Q29udGV4dChjb250ZXh0U2hhcmluZyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChRdWVyeUNsaWVudFNoYXJpbmdDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRTaGFyaW5nXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY2xpZW50XG4gIH0sIGNoaWxkcmVuKSk7XG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7IC8vIENPTlRFWFRcblxuZnVuY3Rpb24gY3JlYXRlVmFsdWUoKSB7XG4gIHZhciBfaXNSZXNldCA9IGZhbHNlO1xuICByZXR1cm4ge1xuICAgIGNsZWFyUmVzZXQ6IGZ1bmN0aW9uIGNsZWFyUmVzZXQoKSB7XG4gICAgICBfaXNSZXNldCA9IGZhbHNlO1xuICAgIH0sXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgX2lzUmVzZXQgPSB0cnVlO1xuICAgIH0sXG4gICAgaXNSZXNldDogZnVuY3Rpb24gaXNSZXNldCgpIHtcbiAgICAgIHJldHVybiBfaXNSZXNldDtcbiAgICB9XG4gIH07XG59XG5cbnZhciBRdWVyeUVycm9yUmVzZXRCb3VuZGFyeUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChjcmVhdGVWYWx1ZSgpKTsgLy8gSE9PS1xuXG5leHBvcnQgdmFyIHVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5ID0gZnVuY3Rpb24gdXNlUXVlcnlFcnJvclJlc2V0Qm91bmRhcnkoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5Q29udGV4dCk7XG59OyAvLyBDT01QT05FTlRcblxuZXhwb3J0IHZhciBRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSA9IGZ1bmN0aW9uIFF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5KF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdmFyIHZhbHVlID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZhbHVlKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5Q29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB2YWx1ZVxuICB9LCB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih2YWx1ZSkgOiBjaGlsZHJlbik7XG59OyIsIi8vIFNpZGUgZWZmZWN0c1xuaW1wb3J0ICcuL3NldEJhdGNoVXBkYXRlc0ZuJztcbmltcG9ydCAnLi9zZXRMb2dnZXInO1xuZXhwb3J0IHsgUXVlcnlDbGllbnRQcm92aWRlciwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICcuL1F1ZXJ5Q2xpZW50UHJvdmlkZXInO1xuZXhwb3J0IHsgUXVlcnlFcnJvclJlc2V0Qm91bmRhcnksIHVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5IH0gZnJvbSAnLi9RdWVyeUVycm9yUmVzZXRCb3VuZGFyeSc7XG5leHBvcnQgeyB1c2VJc0ZldGNoaW5nIH0gZnJvbSAnLi91c2VJc0ZldGNoaW5nJztcbmV4cG9ydCB7IHVzZUlzTXV0YXRpbmcgfSBmcm9tICcuL3VzZUlzTXV0YXRpbmcnO1xuZXhwb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICcuL3VzZU11dGF0aW9uJztcbmV4cG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnLi91c2VRdWVyeSc7XG5leHBvcnQgeyB1c2VRdWVyaWVzIH0gZnJvbSAnLi91c2VRdWVyaWVzJztcbmV4cG9ydCB7IHVzZUluZmluaXRlUXVlcnkgfSBmcm9tICcuL3VzZUluZmluaXRlUXVlcnknOyAvLyBUeXBlc1xuXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJzsiLCJleHBvcnQgdmFyIGxvZ2dlciA9IGNvbnNvbGU7IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5leHBvcnQgdmFyIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzID0gUmVhY3RET00udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM7IiwiaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgfSBmcm9tICcuL3JlYWN0QmF0Y2hlZFVwZGF0ZXMnO1xubm90aWZ5TWFuYWdlci5zZXRCYXRjaE5vdGlmeUZ1bmN0aW9uKHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKTsiLCJpbXBvcnQgeyBzZXRMb2dnZXIgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcblxuaWYgKGxvZ2dlcikge1xuICBzZXRMb2dnZXIobG9nZ2VyKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4uL2NvcmUvbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyB1c2VRdWVyeUVycm9yUmVzZXRCb3VuZGFyeSB9IGZyb20gJy4vUXVlcnlFcnJvclJlc2V0Qm91bmRhcnknO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICcuL1F1ZXJ5Q2xpZW50UHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhc2VRdWVyeShvcHRpb25zLCBPYnNlcnZlcikge1xuICB2YXIgbW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKDApLFxuICAgICAgZm9yY2VVcGRhdGUgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgdmFyIGVycm9yUmVzZXRCb3VuZGFyeSA9IHVzZVF1ZXJ5RXJyb3JSZXNldEJvdW5kYXJ5KCk7XG4gIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gcXVlcnlDbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpOyAvLyBNYWtlIHN1cmUgcmVzdWx0cyBhcmUgb3B0aW1pc3RpY2FsbHkgc2V0IGluIGZldGNoaW5nIHN0YXRlIGJlZm9yZSBzdWJzY3JpYmluZyBvciB1cGRhdGluZyBvcHRpb25zXG5cbiAgZGVmYXVsdGVkT3B0aW9ucy5vcHRpbWlzdGljUmVzdWx0cyA9IHRydWU7IC8vIEluY2x1ZGUgY2FsbGJhY2tzIGluIGJhdGNoIHJlbmRlcnNcblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5vbkVycm9yKSB7XG4gICAgZGVmYXVsdGVkT3B0aW9ucy5vbkVycm9yID0gbm90aWZ5TWFuYWdlci5iYXRjaENhbGxzKGRlZmF1bHRlZE9wdGlvbnMub25FcnJvcik7XG4gIH1cblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5vblN1Y2Nlc3MpIHtcbiAgICBkZWZhdWx0ZWRPcHRpb25zLm9uU3VjY2VzcyA9IG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhkZWZhdWx0ZWRPcHRpb25zLm9uU3VjY2Vzcyk7XG4gIH1cblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5vblNldHRsZWQpIHtcbiAgICBkZWZhdWx0ZWRPcHRpb25zLm9uU2V0dGxlZCA9IG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhkZWZhdWx0ZWRPcHRpb25zLm9uU2V0dGxlZCk7XG4gIH1cblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgIC8vIEFsd2F5cyBzZXQgc3RhbGUgdGltZSB3aGVuIHVzaW5nIHN1c3BlbnNlIHRvIHByZXZlbnRcbiAgICAvLyBmZXRjaGluZyBhZ2FpbiB3aGVuIGRpcmVjdGx5IG1vdW50aW5nIGFmdGVyIHN1c3BlbmRpbmdcbiAgICBpZiAodHlwZW9mIGRlZmF1bHRlZE9wdGlvbnMuc3RhbGVUaW1lICE9PSAnbnVtYmVyJykge1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5zdGFsZVRpbWUgPSAxMDAwO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkZWZhdWx0ZWRPcHRpb25zLnN1c3BlbnNlIHx8IGRlZmF1bHRlZE9wdGlvbnMudXNlRXJyb3JCb3VuZGFyeSkge1xuICAgIC8vIFByZXZlbnQgcmV0cnlpbmcgZmFpbGVkIHF1ZXJ5IGlmIHRoZSBlcnJvciBib3VuZGFyeSBoYXMgbm90IGJlZW4gcmVzZXQgeWV0XG4gICAgaWYgKCFlcnJvclJlc2V0Qm91bmRhcnkuaXNSZXNldCgpKSB7XG4gICAgICBkZWZhdWx0ZWRPcHRpb25zLnJldHJ5T25Nb3VudCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2ZXIocXVlcnlDbGllbnQsIGRlZmF1bHRlZE9wdGlvbnMpO1xuICB9KSxcbiAgICAgIG9ic2VydmVyID0gX1JlYWN0JHVzZVN0YXRlMlswXTtcblxuICB2YXIgcmVzdWx0ID0gb2JzZXJ2ZXIuZ2V0T3B0aW1pc3RpY1Jlc3VsdChkZWZhdWx0ZWRPcHRpb25zKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIGVycm9yUmVzZXRCb3VuZGFyeS5jbGVhclJlc2V0KCk7XG4gICAgdmFyIHVuc3Vic2NyaWJlID0gb2JzZXJ2ZXIuc3Vic2NyaWJlKG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGZvcmNlVXBkYXRlKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcmV0dXJuIHggKyAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSk7IC8vIFVwZGF0ZSByZXN1bHQgdG8gbWFrZSBzdXJlIHdlIGRpZCBub3QgbWlzcyBhbnkgcXVlcnkgdXBkYXRlc1xuICAgIC8vIGJldHdlZW4gY3JlYXRpbmcgdGhlIG9ic2VydmVyIGFuZCBzdWJzY3JpYmluZyB0byBpdC5cblxuICAgIG9ic2VydmVyLnVwZGF0ZVJlc3VsdCgpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW2Vycm9yUmVzZXRCb3VuZGFyeSwgb2JzZXJ2ZXJdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBEbyBub3Qgbm90aWZ5IG9uIHVwZGF0ZXMgYmVjYXVzZSBvZiBjaGFuZ2VzIGluIHRoZSBvcHRpb25zIGJlY2F1c2VcbiAgICAvLyB0aGVzZSBjaGFuZ2VzIHNob3VsZCBhbHJlYWR5IGJlIHJlZmxlY3RlZCBpbiB0aGUgb3B0aW1pc3RpYyByZXN1bHQuXG4gICAgb2JzZXJ2ZXIuc2V0T3B0aW9ucyhkZWZhdWx0ZWRPcHRpb25zLCB7XG4gICAgICBsaXN0ZW5lcnM6IGZhbHNlXG4gICAgfSk7XG4gIH0sIFtkZWZhdWx0ZWRPcHRpb25zLCBvYnNlcnZlcl0pOyAvLyBIYW5kbGUgc3VzcGVuc2VcblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5zdXNwZW5zZSAmJiByZXN1bHQuaXNMb2FkaW5nKSB7XG4gICAgdGhyb3cgb2JzZXJ2ZXIuZmV0Y2hPcHRpbWlzdGljKGRlZmF1bHRlZE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBkYXRhID0gX3JlZi5kYXRhO1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5vblN1Y2Nlc3MgPT0gbnVsbCA/IHZvaWQgMCA6IGRlZmF1bHRlZE9wdGlvbnMub25TdWNjZXNzKGRhdGEpO1xuICAgICAgZGVmYXVsdGVkT3B0aW9ucy5vblNldHRsZWQgPT0gbnVsbCA/IHZvaWQgMCA6IGRlZmF1bHRlZE9wdGlvbnMub25TZXR0bGVkKGRhdGEsIG51bGwpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgZXJyb3JSZXNldEJvdW5kYXJ5LmNsZWFyUmVzZXQoKTtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMub25FcnJvciA9PSBudWxsID8gdm9pZCAwIDogZGVmYXVsdGVkT3B0aW9ucy5vbkVycm9yKGVycm9yKTtcbiAgICAgIGRlZmF1bHRlZE9wdGlvbnMub25TZXR0bGVkID09IG51bGwgPyB2b2lkIDAgOiBkZWZhdWx0ZWRPcHRpb25zLm9uU2V0dGxlZCh1bmRlZmluZWQsIGVycm9yKTtcbiAgICB9KTtcbiAgfSAvLyBIYW5kbGUgZXJyb3IgYm91bmRhcnlcblxuXG4gIGlmICgoZGVmYXVsdGVkT3B0aW9ucy5zdXNwZW5zZSB8fCBkZWZhdWx0ZWRPcHRpb25zLnVzZUVycm9yQm91bmRhcnkpICYmIHJlc3VsdC5pc0Vycm9yICYmICFyZXN1bHQuaXNGZXRjaGluZykge1xuICAgIHRocm93IHJlc3VsdC5lcnJvcjtcbiAgfSAvLyBIYW5kbGUgcmVzdWx0IHByb3BlcnR5IHVzYWdlIHRyYWNraW5nXG5cblxuICBpZiAoZGVmYXVsdGVkT3B0aW9ucy5ub3RpZnlPbkNoYW5nZVByb3BzID09PSAndHJhY2tlZCcpIHtcbiAgICByZXN1bHQgPSBvYnNlcnZlci50cmFja1Jlc3VsdChyZXN1bHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgeyBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIgfSBmcm9tICcuLi9jb3JlL2luZmluaXRlUXVlcnlPYnNlcnZlcic7XG5pbXBvcnQgeyBwYXJzZVF1ZXJ5QXJncyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgdXNlQmFzZVF1ZXJ5IH0gZnJvbSAnLi91c2VCYXNlUXVlcnknOyAvLyBIT09LXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbmZpbml0ZVF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgdmFyIG9wdGlvbnMgPSBwYXJzZVF1ZXJ5QXJncyhhcmcxLCBhcmcyLCBhcmczKTtcbiAgcmV0dXJuIHVzZUJhc2VRdWVyeShvcHRpb25zLCBJbmZpbml0ZVF1ZXJ5T2JzZXJ2ZXIpO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IHBhcnNlRmlsdGVyQXJncyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICcuL1F1ZXJ5Q2xpZW50UHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzRmV0Y2hpbmcoYXJnMSwgYXJnMikge1xuICB2YXIgbW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIHZhciBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cbiAgdmFyIF9wYXJzZUZpbHRlckFyZ3MgPSBwYXJzZUZpbHRlckFyZ3MoYXJnMSwgYXJnMiksXG4gICAgICBmaWx0ZXJzID0gX3BhcnNlRmlsdGVyQXJnc1swXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUocXVlcnlDbGllbnQuaXNGZXRjaGluZyhmaWx0ZXJzKSksXG4gICAgICBpc0ZldGNoaW5nID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0SXNGZXRjaGluZyA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgZmlsdGVyc1JlZiA9IFJlYWN0LnVzZVJlZihmaWx0ZXJzKTtcbiAgZmlsdGVyc1JlZi5jdXJyZW50ID0gZmlsdGVycztcbiAgdmFyIGlzRmV0Y2hpbmdSZWYgPSBSZWFjdC51c2VSZWYoaXNGZXRjaGluZyk7XG4gIGlzRmV0Y2hpbmdSZWYuY3VycmVudCA9IGlzRmV0Y2hpbmc7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgbW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBxdWVyeUNsaWVudC5nZXRRdWVyeUNhY2hlKCkuc3Vic2NyaWJlKG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHZhciBuZXdJc0ZldGNoaW5nID0gcXVlcnlDbGllbnQuaXNGZXRjaGluZyhmaWx0ZXJzUmVmLmN1cnJlbnQpO1xuXG4gICAgICAgIGlmIChpc0ZldGNoaW5nUmVmLmN1cnJlbnQgIT09IG5ld0lzRmV0Y2hpbmcpIHtcbiAgICAgICAgICBzZXRJc0ZldGNoaW5nKG5ld0lzRmV0Y2hpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW3F1ZXJ5Q2xpZW50XSk7XG4gIHJldHVybiBpc0ZldGNoaW5nO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub3RpZnlNYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS9ub3RpZnlNYW5hZ2VyJztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAnLi9RdWVyeUNsaWVudFByb3ZpZGVyJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VJc011dGF0aW5nKGZpbHRlcnMpIHtcbiAgdmFyIG1vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICB2YXIgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShxdWVyeUNsaWVudC5pc011dGF0aW5nKGZpbHRlcnMpKSxcbiAgICAgIGlzTXV0YXRpbmcgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRJc011dGF0aW5nID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBmaWx0ZXJzUmVmID0gUmVhY3QudXNlUmVmKGZpbHRlcnMpO1xuICBmaWx0ZXJzUmVmLmN1cnJlbnQgPSBmaWx0ZXJzO1xuICB2YXIgaXNNdXRhdGluZ1JlZiA9IFJlYWN0LnVzZVJlZihpc011dGF0aW5nKTtcbiAgaXNNdXRhdGluZ1JlZi5jdXJyZW50ID0gaXNNdXRhdGluZztcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBtb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHZhciB1bnN1YnNjcmliZSA9IHF1ZXJ5Q2xpZW50LmdldE11dGF0aW9uQ2FjaGUoKS5zdWJzY3JpYmUobm90aWZ5TWFuYWdlci5iYXRjaENhbGxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgdmFyIG5ld0lzTXV0YXRpbmcgPSBxdWVyeUNsaWVudC5pc011dGF0aW5nKGZpbHRlcnNSZWYuY3VycmVudCk7XG5cbiAgICAgICAgaWYgKGlzTXV0YXRpbmdSZWYuY3VycmVudCAhPT0gbmV3SXNNdXRhdGluZykge1xuICAgICAgICAgIHNldElzTXV0YXRpbmcobmV3SXNNdXRhdGluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbcXVlcnlDbGllbnRdKTtcbiAgcmV0dXJuIGlzTXV0YXRpbmc7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm90aWZ5TWFuYWdlciB9IGZyb20gJy4uL2NvcmUvbm90aWZ5TWFuYWdlcic7XG5pbXBvcnQgeyBub29wLCBwYXJzZU11dGF0aW9uQXJncyB9IGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgTXV0YXRpb25PYnNlcnZlciB9IGZyb20gJy4uL2NvcmUvbXV0YXRpb25PYnNlcnZlcic7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJy4vUXVlcnlDbGllbnRQcm92aWRlcic7XG5leHBvcnQgZnVuY3Rpb24gdXNlTXV0YXRpb24oYXJnMSwgYXJnMiwgYXJnMykge1xuICB2YXIgbW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKDApLFxuICAgICAgZm9yY2VVcGRhdGUgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIG9wdGlvbnMgPSBwYXJzZU11dGF0aW9uQXJncyhhcmcxLCBhcmcyLCBhcmczKTtcbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgdmFyIG9ic1JlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGlmICghb2JzUmVmLmN1cnJlbnQpIHtcbiAgICBvYnNSZWYuY3VycmVudCA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHF1ZXJ5Q2xpZW50LCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBvYnNSZWYuY3VycmVudC5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZXN1bHQgPSBvYnNSZWYuY3VycmVudC5nZXRDdXJyZW50UmVzdWx0KCk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgbW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBvYnNSZWYuY3VycmVudC5zdWJzY3JpYmUobm90aWZ5TWFuYWdlci5iYXRjaENhbGxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgZm9yY2VVcGRhdGUoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICByZXR1cm4geCArIDE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbW91bnRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgdmFyIG11dGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YXJpYWJsZXMsIG11dGF0ZU9wdGlvbnMpIHtcbiAgICBvYnNSZWYuY3VycmVudC5tdXRhdGUodmFyaWFibGVzLCBtdXRhdGVPcHRpb25zKS5jYXRjaChub29wKTtcbiAgfSwgW10pO1xuXG4gIGlmIChjdXJyZW50UmVzdWx0LmVycm9yICYmIG9ic1JlZi5jdXJyZW50Lm9wdGlvbnMudXNlRXJyb3JCb3VuZGFyeSkge1xuICAgIHRocm93IGN1cnJlbnRSZXN1bHQuZXJyb3I7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGN1cnJlbnRSZXN1bHQsIHtcbiAgICBtdXRhdGU6IG11dGF0ZSxcbiAgICBtdXRhdGVBc3luYzogY3VycmVudFJlc3VsdC5tdXRhdGVcbiAgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vdGlmeU1hbmFnZXIgfSBmcm9tICcuLi9jb3JlL25vdGlmeU1hbmFnZXInO1xuaW1wb3J0IHsgUXVlcmllc09ic2VydmVyIH0gZnJvbSAnLi4vY29yZS9xdWVyaWVzT2JzZXJ2ZXInO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICcuL1F1ZXJ5Q2xpZW50UHJvdmlkZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1ZXJpZXMocXVlcmllcykge1xuICB2YXIgbW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKDApLFxuICAgICAgZm9yY2VVcGRhdGUgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgdmFyIGRlZmF1bHRlZFF1ZXJpZXMgPSBxdWVyaWVzLm1hcChmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0ZWRPcHRpb25zID0gcXVlcnlDbGllbnQuZGVmYXVsdFF1ZXJ5T2JzZXJ2ZXJPcHRpb25zKG9wdGlvbnMpOyAvLyBNYWtlIHN1cmUgdGhlIHJlc3VsdHMgYXJlIGFscmVhZHkgaW4gZmV0Y2hpbmcgc3RhdGUgYmVmb3JlIHN1YnNjcmliaW5nIG9yIHVwZGF0aW5nIG9wdGlvbnNcblxuICAgIGRlZmF1bHRlZE9wdGlvbnMub3B0aW1pc3RpY1Jlc3VsdHMgPSB0cnVlO1xuICAgIHJldHVybiBkZWZhdWx0ZWRPcHRpb25zO1xuICB9KTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFF1ZXJpZXNPYnNlcnZlcihxdWVyeUNsaWVudCwgZGVmYXVsdGVkUXVlcmllcyk7XG4gIH0pLFxuICAgICAgb2JzZXJ2ZXIgPSBfUmVhY3QkdXNlU3RhdGUyWzBdO1xuXG4gIHZhciByZXN1bHQgPSBvYnNlcnZlci5nZXRPcHRpbWlzdGljUmVzdWx0KGRlZmF1bHRlZFF1ZXJpZXMpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgdmFyIHVuc3Vic2NyaWJlID0gb2JzZXJ2ZXIuc3Vic2NyaWJlKG5vdGlmeU1hbmFnZXIuYmF0Y2hDYWxscyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGZvcmNlVXBkYXRlKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcmV0dXJuIHggKyAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbb2JzZXJ2ZXJdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBEbyBub3Qgbm90aWZ5IG9uIHVwZGF0ZXMgYmVjYXVzZSBvZiBjaGFuZ2VzIGluIHRoZSBvcHRpb25zIGJlY2F1c2VcbiAgICAvLyB0aGVzZSBjaGFuZ2VzIHNob3VsZCBhbHJlYWR5IGJlIHJlZmxlY3RlZCBpbiB0aGUgb3B0aW1pc3RpYyByZXN1bHQuXG4gICAgb2JzZXJ2ZXIuc2V0UXVlcmllcyhkZWZhdWx0ZWRRdWVyaWVzLCB7XG4gICAgICBsaXN0ZW5lcnM6IGZhbHNlXG4gICAgfSk7XG4gIH0sIFtkZWZhdWx0ZWRRdWVyaWVzLCBvYnNlcnZlcl0pO1xuICByZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCB7IFF1ZXJ5T2JzZXJ2ZXIgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IHBhcnNlUXVlcnlBcmdzIH0gZnJvbSAnLi4vY29yZS91dGlscyc7XG5pbXBvcnQgeyB1c2VCYXNlUXVlcnkgfSBmcm9tICcuL3VzZUJhc2VRdWVyeSc7IC8vIEhPT0tcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1ZXJ5KGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgdmFyIHBhcnNlZE9wdGlvbnMgPSBwYXJzZVF1ZXJ5QXJncyhhcmcxLCBhcmcyLCBhcmczKTtcbiAgcmV0dXJuIHVzZUJhc2VRdWVyeShwYXJzZWRPcHRpb25zLCBRdWVyeU9ic2VydmVyKTtcbn0iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==