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
// const MsgItem = ({ id, userId, timestamp, text, onUpdate, onDelete, isEditing, startEdit, myId, user }) => (
//   <li className="messages__item">
//     <h3>
//       {userId}
//       <sub>
//         {new Date(timestamp).toLocaleString('ko-KR', {
//           year: 'numeric',
//           month: 'numeric',
//           day: 'numeric',
//           hour: '2-digit',
//           minute: '2-digit',
//           hour12: true,
//         })}
//       </sub>
//     </h3>
//     {isEditing ? (
//       <>
//         <MsgInput mutate={onUpdate} text={text} id={id} />
//       </>
//     ) : (
//       text
//     )}
//     {myId === userId && (
//       <div className="messages__buttons">
//         <button onClick={startEdit}>수정</button>
//         <button onClick={onDelete}>삭제</button>
//       </div>
//     )}
//   </li>
// )
// export default MsgItem

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
        lineNumber: 41,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, _this), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
        mutate: onUpdate,
        text: text,
        id: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)
    }, void 0, false) : text, myId === userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "messages__buttons",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: startEdit,
        children: "\uC218\uC815"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: onDelete,
        children: "\uC0AD\uC81C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dJdGVtLmpzIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJvblVwZGF0ZSIsIm9uRGVsZXRlIiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwibXlJZCIsInVzZXIiLCJuaWNrbmFtZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQWtDO0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBRUMsRUFBRixRQUFFQSxFQUFGO0FBQUEsTUFBTUMsTUFBTixRQUFNQSxNQUFOO0FBQUEsTUFBY0MsU0FBZCxRQUFjQSxTQUFkO0FBQUEsTUFBd0JDLElBQXhCLFFBQXdCQSxJQUF4QjtBQUFBLE1BQThCQyxRQUE5QixRQUE4QkEsUUFBOUI7QUFBQSxNQUF3Q0MsUUFBeEMsUUFBd0NBLFFBQXhDO0FBQUEsTUFBa0RDLFNBQWxELFFBQWtEQSxTQUFsRDtBQUFBLE1BQTZEQyxTQUE3RCxRQUE2REEsU0FBN0Q7QUFBQSxNQUF3RUMsSUFBeEUsUUFBd0VBLElBQXhFO0FBQUEsTUFBOEVDLElBQTlFLFFBQThFQSxJQUE5RTtBQUFBLHNCQUNkO0FBQUksYUFBUyxFQUFDLGdCQUFkO0FBQUEsNEJBQ0U7QUFBQSxpQkFDR0EsSUFBSSxDQUFDQyxRQURSLEVBQ2tCLEdBRGxCLGVBRUU7QUFBQSxrQkFDRyxJQUFJQyxJQUFKLENBQVNULFNBQVQsRUFBb0JVLGNBQXBCLENBQW1DLE9BQW5DLEVBQTRDO0FBQzNDQyxjQUFJLEVBQUUsU0FEcUM7QUFFM0NDLGVBQUssRUFBRSxTQUZvQztBQUczQ0MsYUFBRyxFQUFFLFNBSHNDO0FBSTNDQyxjQUFJLEVBQUUsU0FKcUM7QUFLM0NDLGdCQUFNLEVBQUUsU0FMbUM7QUFNM0NDLGdCQUFNLEVBQUU7QUFObUMsU0FBNUM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFjR1gsU0FBUyxnQkFDUjtBQUFBLDZCQUVFLDhEQUFDLDhDQUFEO0FBQVUsY0FBTSxFQUFFSCxRQUFsQjtBQUE0QixZQUFJLEVBQUVELElBQWxDO0FBQXdDLFVBQUUsRUFBRUg7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLHFCQURRLEdBTVJHLElBcEJKLEVBc0JHSyxJQUFJLEtBQUtQLE1BQVQsaUJBQ0M7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw4QkFDRTtBQUFRLGVBQU8sRUFBRUssU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQVEsZUFBTyxFQUFFRCxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYztBQUFBLENBQWhCOztLQUFNTixPO0FBK0JOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRiYWJiODEyOGM2MGMwZDc0Yjc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCcgLy/rjbDsnbTthLAg7JeF642w7J207Yq47JqpXG5cbi8vIGNvbnN0IE1zZ0l0ZW0gPSAoeyBpZCwgdXNlcklkLCB0aW1lc3RhbXAsIHRleHQsIG9uVXBkYXRlLCBvbkRlbGV0ZSwgaXNFZGl0aW5nLCBzdGFydEVkaXQsIG15SWQsIHVzZXIgfSkgPT4gKFxuLy8gICA8bGkgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2l0ZW1cIj5cbi8vICAgICA8aDM+XG4vLyAgICAgICB7dXNlcklkfVxuLy8gICAgICAgPHN1Yj5cbi8vICAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2tvLUtSJywge1xuLy8gICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbi8vICAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuLy8gICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuLy8gICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0Jyxcbi8vICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0Jyxcbi8vICAgICAgICAgICBob3VyMTI6IHRydWUsXG4vLyAgICAgICAgIH0pfVxuLy8gICAgICAgPC9zdWI+XG4vLyAgICAgPC9oMz5cblxuLy8gICAgIHtpc0VkaXRpbmcgPyAoXG4vLyAgICAgICA8PlxuLy8gICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPlxuLy8gICAgICAgPC8+XG4vLyAgICAgKSA6IChcbi8vICAgICAgIHRleHRcbi8vICAgICApfVxuXG4vLyAgICAge215SWQgPT09IHVzZXJJZCAmJiAoXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19idXR0b25zXCI+XG4vLyAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRFZGl0fT7siJjsoJU8L2J1dHRvbj5cbi8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkRlbGV0ZX0+7IKt7KCcPC9idXR0b24+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApfVxuLy8gICA8L2xpPlxuLy8gKVxuXG4vLyBleHBvcnQgZGVmYXVsdCBNc2dJdGVtXG5jb25zdCBNc2dJdGVtID0gKHtpZCwgdXNlcklkLCB0aW1lc3RhbXAsdGV4dCwgb25VcGRhdGUsIG9uRGVsZXRlLCBzdGFydEVkaXQsIGlzRWRpdGluZywgbXlJZCwgdXNlcn0pID0+IChcbiAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pdGVtXCI+XG4gICAgPGgzPlxuICAgICAge3VzZXIubmlja25hbWV9eycgJ31cbiAgICAgIDxzdWI+XG4gICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCdrby1LUicsIHtcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgICAgICAgaG91cjEyOiB0cnVlLFxuICAgICAgICB9KX1cbiAgICAgIDwvc3ViPlxuICAgIDwvaDM+XG4gICAge2lzRWRpdGluZyA/IChcbiAgICAgIDw+XG4gICAgICAgIHsvKiBpZCDripQgIG9uVXBkYXRl7ZWgIOyVhOydtOuUlCovfVxuICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPlxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIHRleHRcbiAgICApfVxuICAgIHtteUlkID09PSB1c2VySWQgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc19fYnV0dG9uc1wiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9saT5cbilcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW0iXSwic291cmNlUm9vdCI6IiJ9