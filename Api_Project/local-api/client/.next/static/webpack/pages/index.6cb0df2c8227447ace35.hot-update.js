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
      myId = _ref.myId;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "messages__item",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: [userId, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("sub", {
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
    }, void 0, false) : text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "messages__buttons",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: startEdit,
        children: "\uC218\uC815"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: onDelete,
        children: "\uC0AD\uC81C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dJdGVtLmpzIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJvblVwZGF0ZSIsIm9uRGVsZXRlIiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwibXlJZCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQWtDO0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBRUMsRUFBRixRQUFFQSxFQUFGO0FBQUEsTUFBTUMsTUFBTixRQUFNQSxNQUFOO0FBQUEsTUFBY0MsU0FBZCxRQUFjQSxTQUFkO0FBQUEsTUFBd0JDLElBQXhCLFFBQXdCQSxJQUF4QjtBQUFBLE1BQThCQyxRQUE5QixRQUE4QkEsUUFBOUI7QUFBQSxNQUF3Q0MsUUFBeEMsUUFBd0NBLFFBQXhDO0FBQUEsTUFBa0RDLFNBQWxELFFBQWtEQSxTQUFsRDtBQUFBLE1BQTZEQyxTQUE3RCxRQUE2REEsU0FBN0Q7QUFBQSxNQUF3RUMsSUFBeEUsUUFBd0VBLElBQXhFO0FBQUEsc0JBQ2Q7QUFBSSxhQUFTLEVBQUMsZ0JBQWQ7QUFBQSw0QkFDRTtBQUFBLGlCQUNHUCxNQURILGVBRUU7QUFBQSxrQkFDRyxJQUFJUSxJQUFKLENBQVNQLFNBQVQsRUFBb0JRLGNBQXBCLENBQW1DLE9BQW5DLEVBQTRDO0FBQzNDQyxjQUFJLEVBQUUsU0FEcUM7QUFFM0NDLGVBQUssRUFBRSxTQUZvQztBQUczQ0MsYUFBRyxFQUFFLFNBSHNDO0FBSTNDQyxjQUFJLEVBQUUsU0FKcUM7QUFLM0NDLGdCQUFNLEVBQUUsU0FMbUM7QUFNM0NDLGdCQUFNLEVBQUU7QUFObUMsU0FBNUM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFjR1QsU0FBUyxnQkFDUjtBQUFBLDZCQUVFLDhEQUFDLDhDQUFEO0FBQVUsY0FBTSxFQUFFSCxRQUFsQjtBQUE0QixZQUFJLEVBQUVELElBQWxDO0FBQXdDLFVBQUUsRUFBRUg7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLHFCQURRLEdBTVJHLElBcEJKLGVBc0JFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0U7QUFBUSxlQUFPLEVBQUVHLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFRLGVBQU8sRUFBRUQsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGM7QUFBQSxDQUFoQjs7S0FBTU4sTztBQTZCTiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42Y2IwZGYyYzgyMjc0NDdhY2UzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnIC8v642w7J207YSwIOyXheuNsOydtO2KuOyaqVxuXG4vLyBjb25zdCBNc2dJdGVtID0gKHsgaWQsIHVzZXJJZCwgdGltZXN0YW1wLCB0ZXh0LCBvblVwZGF0ZSwgb25EZWxldGUsIGlzRWRpdGluZywgc3RhcnRFZGl0LCBteUlkLCB1c2VyIH0pID0+IChcbi8vICAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pdGVtXCI+XG4vLyAgICAgPGgzPlxuLy8gICAgICAge3VzZXJJZH1cbi8vICAgICAgIDxzdWI+XG4vLyAgICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCdrby1LUicsIHtcbi8vICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4vLyAgICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbi8vICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbi8vICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4vLyAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4vLyAgICAgICAgICAgaG91cjEyOiB0cnVlLFxuLy8gICAgICAgICB9KX1cbi8vICAgICAgIDwvc3ViPlxuLy8gICAgIDwvaDM+XG5cbi8vICAgICB7aXNFZGl0aW5nID8gKFxuLy8gICAgICAgPD5cbi8vICAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0gLz5cbi8vICAgICAgIDwvPlxuLy8gICAgICkgOiAoXG4vLyAgICAgICB0ZXh0XG4vLyAgICAgKX1cblxuLy8gICAgIHtteUlkID09PSB1c2VySWQgJiYgKFxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc19fYnV0dG9uc1wiPlxuLy8gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XG4vLyAgICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKX1cbi8vICAgPC9saT5cbi8vIClcblxuLy8gZXhwb3J0IGRlZmF1bHQgTXNnSXRlbVxuY29uc3QgTXNnSXRlbSA9ICh7aWQsIHVzZXJJZCwgdGltZXN0YW1wLHRleHQsIG9uVXBkYXRlLCBvbkRlbGV0ZSwgc3RhcnRFZGl0LCBpc0VkaXRpbmcsIG15SWR9KSA9PiAoXG4gIDxsaSBjbGFzc05hbWU9XCJtZXNzYWdlc19faXRlbVwiPlxuICAgIDxoMz5cbiAgICAgIHt1c2VySWR9XG4gICAgICA8c3ViPlxuICAgICAgICB7bmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygna28tS1InLCB7XG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgIGhvdXIxMjogdHJ1ZSxcbiAgICAgICAgfSl9XG4gICAgICA8L3N1Yj5cbiAgICA8L2gzPlxuICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICA8PlxuICAgICAgICB7LyogaWQg64qUICBvblVwZGF0Ze2VoCDslYTsnbTrlJQqL31cbiAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0gLz5cbiAgICAgIDwvPlxuICAgICkgOiAoXG4gICAgICB0ZXh0XG4gICAgKX1cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19idXR0b25zXCI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbilcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW0iXSwic291cmNlUm9vdCI6IiJ9