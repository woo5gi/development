(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\study\\Api_Project\\local-api\\client\\components\\MsgInput.js";


const MsgInput = ({
  mutate,
  text = '',
  id = undefined
}) => {
  const textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    textRef.current.value = '';
    mutate(text, id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    className: "messages__input",
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
      ref: textRef,
      defaultValue: text,
      placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "submit",
      children: "\uC644\uB8CC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MsgInput);

/***/ }),

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");


var _jsxFileName = "D:\\study\\Api_Project\\local-api\\client\\components\\MsgItem.js";
 //데이터 업데이트용

const MsgItem = ({
  id,
  userId,
  timestamp,
  text,
  onUpdate,
  onDelete,
  startEdit,
  isEditing,
  myId,
  user
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
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
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
      mutate: onUpdate,
      text: text,
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined)
  }, void 0, false) : text, myId === userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "messages__buttons",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: startEdit,
      children: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: onDelete,
      children: "\uC0AD\uC81C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (MsgItem);

/***/ }),

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetcher */ "./fetcher.js");
/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ "./hooks/useInfiniteScroll.js");


var _jsxFileName = "D:\\study\\Api_Project\\local-api\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const UserIds = ['roy', 'jay']; //랜덤하게 아이디 생성

const getRandomUserId = () => UserIds[Math.round(Math.random())]; // const originalMsgs = Array(50).fill(0).map((_,i) => ({
//   id: i + 1,
//   userId:getRandomUserId(),
//   timestamp: 1234567890123 + i * 1000 * 60,
//   text: `${i+1} mock text`
// })).reverse()
// console.log(JSON.stringify(originalMsgs))


const MsgList = ({
  smsgs,
  users
}) => {
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(smsgs);
  const userId = query.userId || query.userid || '';
  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: hasNext,
    1: setHasNext
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__.default)(fetchMoreEl); // const onCreate = async text => {
  //   const newMsg ={
  //     id: msgs.length + 1,
  //     userId: getRandomUserId(),
  //     timestamp: Date.now(),
  //     text: `${msgs.length+ 1} ${text}`,
  //   }

  const onCreate = async text => {
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('post', '/messages', {
      text,
      userId
    });
    if (!newMsg) throw Error('something wrong');
    setMsgs(msgs => [newMsg, ...msgs]);
  }; // input으로 입력한 데이터 저장
  // setMsgs(msgs => ([newMsg, ...msgs]))
  // console.log(newMsg);


  const onUpdate = async (text, id) => {
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('put', `/messages/${id}`, {
      text,
      userId
    });
    if (!newMsg) throw Error('something wrong');
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, newMsg);
      return newMsgs;
    });
    doneEdit();
  };

  const doneEdit = () => setEditingId(null);

  const getMessages = async () => {
    var _msgs;

    const newMsgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('get', '/messages', {
      params: {
        cursor: ((_msgs = msgs[msgs.length - 1]) === null || _msgs === void 0 ? void 0 : _msgs.id) || ''
      }
    });

    if (newMsgs.length === 0) {
      setHasNext(false);
      return;
    }

    setMsgs(msgs => [...msgs, ...newMsgs]);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (intersecting && hasNext) getMessages();
  }, [intersecting]);

  const onDelete = async id => {
    const receivedId = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('delete', `/messages/${id}`, {
      params: {
        userId
      }
    });
    console.log(typeof receivedId, typeof id);
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === receivedId + '');
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_4__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 18
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "message",
      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id,
        onDelete: () => onDelete(x.id),
        myId: userId,
        user: users[x.userId]
      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (MsgList);

/***/ }),

/***/ "./fetcher.js":
/*!********************!*\
  !*** ./fetcher.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = 'http://localhost:8000';

const fetcher = async (method, url, ...rest) => {
  const res = await (axios__WEBPACK_IMPORTED_MODULE_0___default())[method](url, ...rest);
  return res.data;
};

/* harmony default export */ __webpack_exports__["default"] = (fetcher);

/***/ }),

/***/ "./hooks/useInfiniteScroll.js":
/*!************************************!*\
  !*** ./hooks/useInfiniteScroll.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInfiniteScroll = targetEl => {
  const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: intersecting,
    1: setIntersecting
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const getObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(entries => setIntersecting(entries.some(entry => entry.isIntersecting)));
    }

    return observerRef.current;
  }, [observerRef.current]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (targetEl.current) getObserver().observe(targetEl.current);
    return () => {
      getObserver().disconnect();
    };
  }, [targetEl.current]);
  return intersecting;
};

/* harmony default export */ __webpack_exports__["default"] = (useInfiniteScroll);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MsgList */ "./components/MsgList.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetcher */ "./fetcher.js");


var _jsxFileName = "D:\\study\\Api_Project\\local-api\\client\\pages\\index.js";



const Home = ({
  smsgs,
  users
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: "SIMPLE SNS"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_1__.default, {
    smsgs: smsgs,
    users: users
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)]
}, void 0, true);

const getServerSideProps = async () => {
  const smsgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_2__.default)('get', '/messages');
  const users = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_2__.default)('get', '/users');
  return {
    props: {
      smsgs,
      users
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vZmV0Y2hlci5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNc2dJbnB1dCIsIm11dGF0ZSIsInRleHQiLCJpZCIsInVuZGVmaW5lZCIsInRleHRSZWYiLCJ1c2VSZWYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJ2YWx1ZSIsIk1zZ0l0ZW0iLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJvblVwZGF0ZSIsIm9uRGVsZXRlIiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwibXlJZCIsInVzZXIiLCJuaWNrbmFtZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiTXNnTGlzdCIsInNtc2dzIiwidXNlcnMiLCJxdWVyeSIsInVzZVJvdXRlciIsInVzZXJpZCIsIm1zZ3MiLCJzZXRNc2dzIiwidXNlU3RhdGUiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJoYXNOZXh0Iiwic2V0SGFzTmV4dCIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwidXNlSW5maW5pdGVTY3JvbGwiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImZldGNoZXIiLCJFcnJvciIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0IiwiZ2V0TWVzc2FnZXMiLCJwYXJhbXMiLCJjdXJzb3IiLCJsZW5ndGgiLCJ1c2VFZmZlY3QiLCJyZWNlaXZlZElkIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIngiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsInJlc3QiLCJyZXMiLCJkYXRhIiwidGFyZ2V0RWwiLCJvYnNlcnZlclJlZiIsInNldEludGVyc2VjdGluZyIsImdldE9ic2VydmVyIiwidXNlQ2FsbGJhY2siLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJzb21lIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiSG9tZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDLFFBQUY7QUFBVUMsTUFBSSxHQUFHLEVBQWpCO0FBQXFCQyxJQUFFLEdBQUdDO0FBQTFCLENBQUQsS0FBMkM7QUFDMUQsUUFBTUMsT0FBTyxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBdEI7O0FBRUEsUUFBTUMsUUFBUSxHQUFHQyxDQUFDLElBQUk7QUFDcEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBRCxLQUFDLENBQUNFLGVBQUY7QUFDQSxVQUFNUixJQUFJLEdBQUdHLE9BQU8sQ0FBQ00sT0FBUixDQUFnQkMsS0FBN0I7QUFDQVAsV0FBTyxDQUFDTSxPQUFSLENBQWdCQyxLQUFoQixHQUF3QixFQUF4QjtBQUNBWCxVQUFNLENBQUNDLElBQUQsRUFB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TyxNQUFNO0FBQ1hzRSxpQkFBVyxHQUFHUSxVQUFkO0FBQ0QsS0FGRDtBQUdELEdBTlEsRUFNTixDQUFDWCxRQUFRLENBQUNuRSxPQUFWLENBTk0sQ0FBVDtBQVFBLFNBQU91QyxZQUFQO0FBQ0QsQ0F0QkQ7O0FBd0JBLCtEQUFlQyxpQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7O0FBRUEsTUFBTXVDLElBQUksR0FBRyxDQUFDO0FBQUVyRCxPQUFGO0FBQVNDO0FBQVQsQ0FBRCxrQkFDWDtBQUFBLDBCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyx3REFBRDtBQUFTLFNBQUssRUFBRUQsS0FBaEI7QUFBdUIsU0FBSyxFQUFJQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxnQkFERjs7QUFPTyxNQUFNcUQsa0JBQWtCLEdBQUcsWUFBWTtBQUM1QyxRQUFNdEQsS0FBSyxHQUFHLE1BQU1pQixpREFBTyxDQUFDLEtBQUQsRUFBUSxXQUFSLENBQTNCO0FBQ0EsUUFBTWhCLEtBQUssR0FBRyxNQUFNZ0IsaURBQU8sQ0FBQyxLQUFELEVBQVEsUUFBUixDQUEzQjtBQUNBLFNBQU87QUFDTHNDLFNBQUssRUFBRTtBQUFFdkQsV0FBRjtBQUFTQztBQUFUO0FBREYsR0FBUDtBQUdELENBTk07QUFTUCwrREFBZW9ELElBQWYsRTs7Ozs7Ozs7Ozs7QUNuQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgTXNnSW5wdXQgPSAoeyBtdXRhdGUsIHRleHQgPSAnJywgaWQgPSB1bmRlZmluZWQgfSkgPT4ge1xuICBjb25zdCB0ZXh0UmVmID0gdXNlUmVmKG51bGwpXG5cbiAgY29uc3Qgb25TdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgdGV4dCA9IHRleHRSZWYuY3VycmVudC52YWx1ZVxuICAgIHRleHRSZWYuY3VycmVudC52YWx1ZSA9ICcnXG4gICAgbXV0YXRlKHRleHQsIGlkKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJtZXNzYWdlc19faW5wdXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgPHRleHRhcmVhIHJlZj17dGV4dFJlZn0gZGVmYXVsdFZhbHVlPXt0ZXh0fSBwbGFjZWhvbGRlcj1cIuuCtOyaqeydhCDsnoXroKXtlZjshLjsmpQuXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuyZhOujjDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNc2dJbnB1dFxuIiwiaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnIC8v642w7J207YSwIOyXheuNsOydtO2KuOyaqVxuXG5jb25zdCBNc2dJdGVtID0gKHtpZCwgdXNlcklkLCB0aW1lc3RhbXAsdGV4dCwgb25VcGRhdGUsIG9uRGVsZXRlLCBzdGFydEVkaXQsIGlzRWRpdGluZywgbXlJZCwgdXNlcn0pID0+IChcbiAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pdGVtXCI+XG4gICAgPGgzPlxuICAgICAge3VzZXIubmlja25hbWV9eycgJ31cbiAgICAgIDxzdWI+XG4gICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCdrby1LUicsIHtcbiAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgICAgICAgaG91cjEyOiB0cnVlLFxuICAgICAgICB9KX1cbiAgICAgIDwvc3ViPlxuICAgIDwvaDM+XG4gICAge2lzRWRpdGluZyA/IChcbiAgICAgIDw+XG4gICAgICAgIHsvKiBpZCDripQgIG9uVXBkYXRl7ZWgIOyVhOydtOuUlCovfVxuICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPlxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIHRleHRcbiAgICApfVxuICAgIHtteUlkID09PSB1c2VySWQgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc19fYnV0dG9uc1wiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9saT5cbilcbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJ1xuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9mZXRjaGVyJ1xuaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gJy4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsJ1xuXG5jb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J11cbi8v656c642k7ZWY6rKMIOyVhOydtOuUlCDsg53shLFcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV1cblxuLy8gY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApLmZpbGwoMCkubWFwKChfLGkpID0+ICh7XG5cbi8vICAgaWQ6IGkgKyAxLFxuLy8gICB1c2VySWQ6Z2V0UmFuZG9tVXNlcklkKCksXG4vLyAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArIGkgKiAxMDAwICogNjAsXG4vLyAgIHRleHQ6IGAke2krMX0gbW9jayB0ZXh0YFxuLy8gfSkpLnJldmVyc2UoKVxuXG4vLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcmlnaW5hbE1zZ3MpKVxuXG5jb25zdCBNc2dMaXN0ID0gKHsgc21zZ3MgLCB1c2Vyc30pID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKHNtc2dzKVxuICBjb25zdCB1c2VySWQgPSBxdWVyeS51c2VySWQgfHwgcXVlcnkudXNlcmlkIHx8ICcnO1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtoYXNOZXh0LCBzZXRIYXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IGZldGNoTW9yZUVsID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IGludGVyc2VjdGluZyA9IHVzZUluZmluaXRlU2Nyb2xsKGZldGNoTW9yZUVsKVxuICAvLyBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jIHRleHQgPT4ge1xuICAvLyAgIGNvbnN0IG5ld01zZyA9e1xuICAvLyAgICAgaWQ6IG1zZ3MubGVuZ3RoICsgMSxcbiAgLy8gICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXG4gIC8vICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gIC8vICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aCsgMX0gJHt0ZXh0fWAsXG4gIC8vICAgfVxuXG4gICAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyB0ZXh0ID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwb3N0JywgJy9tZXNzYWdlcycsIHsgdGV4dCwgdXNlcklkIH0pXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKVxuICAgIHNldE1zZ3MobXNncyA9PiBbbmV3TXNnLCAuLi5tc2dzXSlcbiAgfVxuXG4gICAgLy8gaW5wdXTsnLzroZwg7J6F66Cl7ZWcIOuNsOydtO2EsCDsoIDsnqVcbiAgICAvLyBzZXRNc2dzKG1zZ3MgPT4gKFtuZXdNc2csIC4uLm1zZ3NdKSlcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdNc2cpO1xuICAgXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKVxuICAgIHNldE1zZ3MobXNncyA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKVxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3NcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpXG4gICAgICByZXR1cm4gbmV3TXNnc1xuICAgIH0pXG4gICAgZG9uZUVkaXQoKVxuICB9XG5cbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbClcbiAgXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJywgeyBwYXJhbXM6IHsgY3Vyc29yOiBtc2dzW21zZ3MubGVuZ3RoIC0gMV0/LmlkIHx8ICcnIH0gfSlcbiAgICBpZiAobmV3TXNncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEhhc05leHQoZmFsc2UpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2V0TXNncyhtc2dzID0+IFsuLi5tc2dzLCAuLi5uZXdNc2dzXSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGludGVyc2VjdGluZyAmJiBoYXNOZXh0KSBnZXRNZXNzYWdlcygpXG4gIH0sIFtpbnRlcnNlY3RpbmddKVxuXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgaWQgPT4ge1xuICAgIGNvbnN0IHJlY2VpdmVkSWQgPSBhd2FpdCBmZXRjaGVyKCdkZWxldGUnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyBwYXJhbXM6IHsgdXNlcklkIH0gfSlcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgIHJlY2VpdmVkSWQsIHR5cGVvZiBpZClcbiAgICBzZXRNc2dzKG1zZ3MgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSByZWNlaXZlZElkICsgJycpXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNnc1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpXG4gICAgICByZXR1cm4gbmV3TXNnc1xuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dXNlcklkICYmIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPn1cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlXCI+e1xuICAgICAgICBtc2dzLm1hcCh4ID0+IFxuICAgICAgICA8TXNnSXRlbSBcbiAgICAgICAga2V5PXt4LmlkfSBcbiAgICAgICAgey4uLnh9IFxuICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxuICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cbiAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxuICAgICAgICBteUlkPXt1c2VySWR9XG4gICAgICAgIHVzZXI9e3VzZXJzW3gudXNlcklkXX1cbiAgICAgICAgIC8+KVxuICAgICAgfVxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgcmVmPXtmZXRjaE1vcmVFbH0gLz5cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnXG5cbmNvbnN0IGZldGNoZXIgPSBhc3luYyAobWV0aG9kLCB1cmwsIC4uLnJlc3QpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIC4uLnJlc3QpXG4gIHJldHVybiByZXMuZGF0YVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyXG4iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHVzZUluZmluaXRlU2Nyb2xsID0gdGFyZ2V0RWwgPT4ge1xuICBjb25zdCBvYnNlcnZlclJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBbaW50ZXJzZWN0aW5nLCBzZXRJbnRlcnNlY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgZ2V0T2JzZXJ2ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFvYnNlcnZlclJlZi5jdXJyZW50KSB7XG4gICAgICBvYnNlcnZlclJlZi5jdXJyZW50ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT5cbiAgICAgICAgc2V0SW50ZXJzZWN0aW5nKGVudHJpZXMuc29tZShlbnRyeSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZykpLFxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gb2JzZXJ2ZXJSZWYuY3VycmVudFxuICB9LCBbb2JzZXJ2ZXJSZWYuY3VycmVudF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGFyZ2V0RWwuY3VycmVudCkgZ2V0T2JzZXJ2ZXIoKS5vYnNlcnZlKHRhcmdldEVsLmN1cnJlbnQpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZ2V0T2JzZXJ2ZXIoKS5kaXNjb25uZWN0KClcbiAgICB9XG4gIH0sIFt0YXJnZXRFbC5jdXJyZW50XSlcblxuICByZXR1cm4gaW50ZXJzZWN0aW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUluZmluaXRlU2Nyb2xsXG4iLCJpbXBvcnQgTXNnTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL01zZ0xpc3QnXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9mZXRjaGVyJ1xuXG5jb25zdCBIb21lID0gKHsgc21zZ3MsIHVzZXJzfSkgPT4gKFxuICA8PlxuICAgIDxoMT5TSU1QTEUgU05TPC9oMT5cbiAgICA8TXNnTGlzdCBzbXNncz17c21zZ3N9IHVzZXJzID0ge3VzZXJzfS8+XG4gIDwvPlxuKVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzbXNncyA9IGF3YWl0IGZldGNoZXIoJ2dldCcsICcvbWVzc2FnZXMnKVxuICBjb25zdCB1c2VycyA9IGF3YWl0IGZldGNoZXIoJ2dldCcsICcvdXNlcnMnKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHNtc2dzLCB1c2Vyc30sXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=