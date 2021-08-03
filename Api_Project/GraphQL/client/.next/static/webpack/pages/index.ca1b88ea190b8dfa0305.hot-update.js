self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\study\\Api_Project\\local-api\\client\\components\\MsgItem.js",
    _this = undefined;

 //데이터 업데이트용

var MsgItem = function MsgItem(_ref) {
  var id = _ref.id,
      userId = _ref.userId,
      timestamp = _ref.timestamp,
      text = _ref.text,
      onUpdate = _ref.onUpdate,
      onDelete = _ref.onDelete,
      startEdit = _ref.startEdit,
      isEditing = _ref.isEditing,
      myId = _ref.myId,
      user = _ref.user;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "messages__item",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: [user.nickname, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("sub", {
        children: new Date(timestamp).toLocaleString('ko-KR', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }, _this), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
        mutate: onUpdate,
        text: text,
        id: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false) : text, myId === userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "messages__buttons",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: startEdit,
        children: "\uC218\uC815"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: onDelete,
        children: "\uC0AD\uC81C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }, _this);
};

_c = MsgItem;
/* harmony default export */ __webpack_exports__["default"] = (MsgItem);

var _c;

$RefreshReg$(_c, "MsgItem");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dJdGVtLmpzIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJvblVwZGF0ZSIsIm9uRGVsZXRlIiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwibXlJZCIsInVzZXIiLCJuaWNrbmFtZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQWtDOztBQUVsQyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUVDLEVBQUYsUUFBRUEsRUFBRjtBQUFBLE1BQU1DLE1BQU4sUUFBTUEsTUFBTjtBQUFBLE1BQWNDLFNBQWQsUUFBY0EsU0FBZDtBQUFBLE1BQXdCQyxJQUF4QixRQUF3QkEsSUFBeEI7QUFBQSxNQUE4QkMsUUFBOUIsUUFBOEJBLFFBQTlCO0FBQUEsTUFBd0NDLFFBQXhDLFFBQXdDQSxRQUF4QztBQUFBLE1BQWtEQyxTQUFsRCxRQUFrREEsU0FBbEQ7QUFBQSxNQUE2REMsU0FBN0QsUUFBNkRBLFNBQTdEO0FBQUEsTUFBd0VDLElBQXhFLFFBQXdFQSxJQUF4RTtBQUFBLE1BQThFQyxJQUE5RSxRQUE4RUEsSUFBOUU7QUFBQSxzQkFDZDtBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUFBLDRCQUNFO0FBQUEsaUJBQ0dBLElBQUksQ0FBQ0MsUUFEUixFQUNrQixHQURsQixlQUVFO0FBQUEsa0JBQ0csSUFBSUMsSUFBSixDQUFTVCxTQUFULEVBQW9CVSxjQUFwQixDQUFtQyxPQUFuQyxFQUE0QztBQUMzQ0MsY0FBSSxFQUFFLFNBRHFDO0FBRTNDQyxlQUFLLEVBQUUsU0FGb0M7QUFHM0NDLGFBQUcsRUFBRSxTQUhzQztBQUkzQ0MsY0FBSSxFQUFFLFNBSnFDO0FBSzNDQyxnQkFBTSxFQUFFLFNBTG1DO0FBTTNDQyxnQkFBTSxFQUFFO0FBTm1DLFNBQTVDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBY0dYLFNBQVMsZ0JBQ1I7QUFBQSw2QkFFRSw4REFBQyw4Q0FBRDtBQUFVLGNBQU0sRUFBRUgsUUFBbEI7QUFBNEIsWUFBSSxFQUFFRCxJQUFsQztBQUF3QyxVQUFFLEVBQUVIO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixxQkFEUSxHQU1SRyxJQXBCSixFQXNCR0ssSUFBSSxLQUFLUCxNQUFULGlCQUNDO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0U7QUFBUSxlQUFPLEVBQUVLLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFRLGVBQU8sRUFBRUQsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGM7QUFBQSxDQUFoQjs7S0FBTU4sTztBQStCTiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYTFiODhlYTE5MGI4ZGZhMDMwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnIC8v642w7J207YSwIOyXheuNsOydtO2KuOyaqVxuXG5jb25zdCBNc2dJdGVtID0gKHtpZCwgdXNlcklkLCB0aW1lc3RhbXAsdGV4dCwgb25VcGRhdGUsIG9uRGVsZXRlLCBzdGFydEVkaXQsIGlzRWRpdGluZywgbXlJZCwgdXNlcn0pID0+IChcbiAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pdGVtXCI+XG4gICAgPGgzPlxuICAgICAge3VzZXIubmlja25hbWV9eycgJ31cbiAgICAgIDxzdWI+XG4gICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCdrby1LUicsIHtcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgICAgICAgaG91cjEyOiB0cnVlLFxuICAgICAgICB9KX1cbiAgICAgIDwvc3ViPlxuICAgIDwvaDM+XG4gICAge2lzRWRpdGluZyA/IChcbiAgICAgIDw+XG4gICAgICAgIHsvKiBpZCDripQgIG9uVXBkYXRl7ZWgIOyVhOydtOuUlCovfVxuICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPlxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIHRleHRcbiAgICApfVxuICAgIHtteUlkID09PSB1c2VySWQgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc19fYnV0dG9uc1wiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9saT5cbilcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW0iXSwic291cmNlUm9vdCI6IiJ9