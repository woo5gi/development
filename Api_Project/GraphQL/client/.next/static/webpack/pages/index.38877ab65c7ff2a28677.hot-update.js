self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fetcher */ "./fetcher.js");
/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ "./hooks/useInfiniteScroll.js");
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "D:\\study\\Api_Project\\local-api\\client\\components\\MsgList.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // const MsgList = ({ smsgs, users }) => {
//   const {
//     query: { userId = '' },
//   } = useRouter()
//   const [msgs, setMsgs] = useState(smsgs)
//   const [editingId, setEditingId] = useState(null)
//   const [hasNext, setHasNext] = useState(true)
//   const fetchMoreEl = useRef(null)
//   const intersecting = useInfiniteScroll(fetchMoreEl)
//   const onCreate = async text => {
//     const newMsg = await fetcher('post', '/messages', { text, userId })
//     if (!newMsg) throw Error('something wrong')
//     setMsgs(msgs => [newMsg, ...msgs])
//   }
//   const onUpdate = async (text, id) => {
//     const newMsg = await fetcher('put', `/messages/${id}`, { text, userId })
//     if (!newMsg) throw Error('something wrong')
//     setMsgs(msgs => {
//       const targetIndex = msgs.findIndex(msg => msg.id === id)
//       if (targetIndex < 0) return msgs
//       const newMsgs = [...msgs]
//       newMsgs.splice(targetIndex, 1, newMsg)
//       return newMsgs
//     })
//     doneEdit()
//   }
//   const onDelete = async id => {
//     const receivedId = await fetcher('delete', `/messages/${id}`, { params: { userId } })
//     setMsgs(msgs => {
//       const targetIndex = msgs.findIndex(msg => msg.id === receivedId + '')
//       if (targetIndex < 0) return msgs
//       const newMsgs = [...msgs]
//       newMsgs.splice(targetIndex, 1)
//       return newMsgs
//     })
//   }
//   const doneEdit = () => setEditingId(null)
//   const getMessages = async () => {
//     const newMsgs = await fetcher('get', '/messages', { params: { cursor: msgs[msgs.length - 1]?.id || '' } })
//     if (newMsgs.length === 0) {
//       setHasNext(false)
//       return
//     }
//     setMsgs(msgs => [...msgs, ...newMsgs])
//   }
//   useEffect(() => {
//     if (intersecting && hasNext) getMessages()
//   }, [intersecting])
//   console.log({ intersecting, hasNext, msgs })
//   return (
//     <>
//       <MsgInput mutate={onCreate} />
//       <ul className="messages">
//         {msgs.map(x => (
//           <MsgItem
//             key={x.id}
//             {...x}
//             onUpdate={onUpdate}
//             onDelete={() => onDelete(x.id)}
//             startEdit={() => setEditingId(x.id)}
//             isEditing={editingId === x.id}
//             myId={userId}
//             user={users[x.userId]}
//           />
//         ))}
//       </ul>
//       <div ref={fetchMoreEl} />
//     </>
//   )
// }
// export default MsgList

var UserIds = ['roy', 'jay']; //랜덤하게 아이디 생성

var getRandomUserId = function getRandomUserId() {
  return UserIds[Math.round(Math.random())];
}; // const originalMsgs = Array(50).fill(0).map((_,i) => ({
//   id: i + 1,
//   userId:getRandomUserId(),
//   timestamp: 1234567890123 + i * 1000 * 60,
//   text: `${i+1} mock text`
// })).reverse()
// console.log(JSON.stringify(originalMsgs))


var MsgList = function MsgList(_ref) {
  _s();

  var smsgs = _ref.smsgs,
      users = _ref.users;

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(smsgs),
      query = _useRouter.query;

  var userId = query.userId || query.userid || '';

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      msgs = _useState[0],
      setMsgs = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
      editingId = _useState2[0],
      setEditingId = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),
      hasNext = _useState3[0],
      setHasNext = _useState3[1];

  var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__.default)(fetchMoreEl); // const onCreate = async text => {
  //   const newMsg ={
  //     id: msgs.length + 1,
  //     userId: getRandomUserId(),
  //     timestamp: Date.now(),
  //     text: `${msgs.length+ 1} ${text}`,
  //   }

  var onCreate = /*#__PURE__*/function () {
    var _ref2 = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(text) {
      var newMsg;
      return D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('post', '/messages', {
                text: text,
                userId: userId
              });

            case 2:
              newMsg = _context.sent;

              if (newMsg) {
                _context.next = 5;
                break;
              }

              throw Error('something wrong');

            case 5:
              setMsgs(function (msgs) {
                return [newMsg].concat((0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs));
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onCreate(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // input으로 입력한 데이터 저장
  // setMsgs(msgs => ([newMsg, ...msgs]))
  // console.log(newMsg);


  var onUpdate = /*#__PURE__*/function () {
    var _ref3 = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(text, id) {
      var newMsg;
      return D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('put', "/messages/".concat(id), {
                text: text,
                userId: userId
              });

            case 2:
              newMsg = _context2.sent;

              if (newMsg) {
                _context2.next = 5;
                break;
              }

              throw Error('something wrong');

            case 5:
              setMsgs(function (msgs) {
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === id;
                });
                if (targetIndex < 0) return msgs;

                var newMsgs = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs);

                newMsgs.splice(targetIndex, 1, newMsg);
                return newMsgs;
              });
              doneEdit();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onUpdate(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var doneEdit = function doneEdit() {
    return setEditingId(null);
  };

  var getMessages = /*#__PURE__*/function () {
    var _ref4 = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var _msgs;

      var newMsgs;
      return D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('get', '/messages', {
                params: {
                  cursor: ((_msgs = msgs[msgs.length - 1]) === null || _msgs === void 0 ? void 0 : _msgs.id) || ''
                }
              });

            case 2:
              newMsgs = _context3.sent;

              if (!(newMsgs.length === 0)) {
                _context3.next = 6;
                break;
              }

              setHasNext(false);
              return _context3.abrupt("return");

            case 6:
              setMsgs(function (msgs) {
                return [].concat((0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs), (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(newMsgs));
              });

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getMessages() {
      return _ref4.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (intersecting && hasNext) getMessages();
  }, [intersecting]);

  var _onDelete = /*#__PURE__*/function () {
    var _ref5 = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(id) {
      var receivedId;
      return D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('delete', "/messages/".concat(id), {
                params: {
                  userId: userId
                }
              });

            case 2:
              receivedId = _context4.sent;
              console.log(typeof receivedId, typeof id);
              setMsgs(function (msgs) {
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === receivedId + '';
                });
                if (targetIndex < 0) return msgs;

                var newMsgs = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs);

                newMsgs.splice(targetIndex, 1);
                return newMsgs;
              });

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function onDelete(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_8__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 18
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "message",
      children: msgs.map(function (x) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread(_objectSpread({}, x), {}, {
          onUpdate: onUpdate,
          startEdit: function startEdit() {
            return setEditingId(x.id);
          },
          isEditing: editingId === x.id,
          onDelete: function onDelete() {
            return _onDelete(x.id);
          },
          myId: userId,
          user: users[x.userId]
        }), x.id, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "rhXsinqIO4JJEZ3lbrpJmHFJ5I0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__.default];
});

_c = MsgList;
/* harmony default export */ __webpack_exports__["default"] = (MsgList);

var _c;

$RefreshReg$(_c, "MsgList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIl0sIm5hbWVzIjpbIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJNc2dMaXN0Iiwic21zZ3MiLCJ1c2VycyIsInVzZVJvdXRlciIsInF1ZXJ5IiwidXNlcklkIiwidXNlcmlkIiwidXNlU3RhdGUiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImhhc05leHQiLCJzZXRIYXNOZXh0IiwiZmV0Y2hNb3JlRWwiLCJ1c2VSZWYiLCJpbnRlcnNlY3RpbmciLCJ1c2VJbmZpbml0ZVNjcm9sbCIsIm9uQ3JlYXRlIiwidGV4dCIsImZldGNoZXIiLCJuZXdNc2ciLCJFcnJvciIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsImdldE1lc3NhZ2VzIiwicGFyYW1zIiwiY3Vyc29yIiwibGVuZ3RoIiwidXNlRWZmZWN0Iiwib25EZWxldGUiLCJyZWNlaXZlZElkIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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SFY7QUFJQSxtQkFBUyxFQUFFO0FBQUEsbUJBQU1aLFlBQVksQ0FBQzhCLENBQUMsQ0FBQ2pCLEVBQUgsQ0FBbEI7QUFBQSxXQUpYO0FBS0EsbUJBQVMsRUFBRWQsU0FBUyxLQUFLK0IsQ0FBQyxDQUFDakIsRUFMM0I7QUFNQSxrQkFBUSxFQUFFO0FBQUEsbUJBQU1ZLFNBQVEsQ0FBQ0ssQ0FBQyxDQUFDakIsRUFBSCxDQUFkO0FBQUEsV0FOVjtBQU9BLGNBQUksRUFBRW5CLE1BUE47QUFRQSxjQUFJLEVBQUVILEtBQUssQ0FBQ3VDLENBQUMsQ0FBQ3BDLE1BQUg7QUFSWCxZQUNLb0MsQ0FBQyxDQUFDakIsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBVjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQWdCRTtBQUFLLFNBQUcsRUFBRVY7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUEsa0JBREY7QUFvQkQsQ0F0RkQ7O0dBQU1kLE87VUFDY0csa0QsRUFNR2MsOEQ7OztLQVBqQmpCLE87QUF1Rk4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzg4NzdhYjY1YzdmZjJhMjg2NzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCdcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSAnLi4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGwnXG5cbi8vIGNvbnN0IE1zZ0xpc3QgPSAoeyBzbXNncywgdXNlcnMgfSkgPT4ge1xuLy8gICBjb25zdCB7XG4vLyAgICAgcXVlcnk6IHsgdXNlcklkID0gJycgfSxcbi8vICAgfSA9IHVzZVJvdXRlcigpXG4vLyAgIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKHNtc2dzKVxuLy8gICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbClcbi8vICAgY29uc3QgW2hhc05leHQsIHNldEhhc05leHRdID0gdXNlU3RhdGUodHJ1ZSlcbi8vICAgY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbClcbi8vICAgY29uc3QgaW50ZXJzZWN0aW5nID0gdXNlSW5maW5pdGVTY3JvbGwoZmV0Y2hNb3JlRWwpXG5cbi8vICAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyB0ZXh0ID0+IHtcbi8vICAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwb3N0JywgJy9tZXNzYWdlcycsIHsgdGV4dCwgdXNlcklkIH0pXG4vLyAgICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKVxuLy8gICAgIHNldE1zZ3MobXNncyA9PiBbbmV3TXNnLCAuLi5tc2dzXSlcbi8vICAgfVxuXG4vLyAgIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XG4vLyAgICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pXG4vLyAgICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKVxuLy8gICAgIHNldE1zZ3MobXNncyA9PiB7XG4vLyAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKVxuLy8gICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3Ncbi8vICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cbi8vICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpXG4vLyAgICAgICByZXR1cm4gbmV3TXNnc1xuLy8gICAgIH0pXG4vLyAgICAgZG9uZUVkaXQoKVxuLy8gICB9XG5cbi8vICAgY29uc3Qgb25EZWxldGUgPSBhc3luYyBpZCA9PiB7XG4vLyAgICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoJ2RlbGV0ZScsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHBhcmFtczogeyB1c2VySWQgfSB9KVxuLy8gICAgIHNldE1zZ3MobXNncyA9PiB7XG4vLyAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IHJlY2VpdmVkSWQgKyAnJylcbi8vICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzXG4vLyAgICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdXG4vLyAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSlcbi8vICAgICAgIHJldHVybiBuZXdNc2dzXG4vLyAgICAgfSlcbi8vICAgfVxuXG4vLyAgIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpXG5cbi8vICAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgY29uc3QgbmV3TXNncyA9IGF3YWl0IGZldGNoZXIoJ2dldCcsICcvbWVzc2FnZXMnLCB7IHBhcmFtczogeyBjdXJzb3I6IG1zZ3NbbXNncy5sZW5ndGggLSAxXT8uaWQgfHwgJycgfSB9KVxuLy8gICAgIGlmIChuZXdNc2dzLmxlbmd0aCA9PT0gMCkge1xuLy8gICAgICAgc2V0SGFzTmV4dChmYWxzZSlcbi8vICAgICAgIHJldHVyblxuLy8gICAgIH1cbi8vICAgICBzZXRNc2dzKG1zZ3MgPT4gWy4uLm1zZ3MsIC4uLm5ld01zZ3NdKVxuLy8gICB9XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBpZiAoaW50ZXJzZWN0aW5nICYmIGhhc05leHQpIGdldE1lc3NhZ2VzKClcbi8vICAgfSwgW2ludGVyc2VjdGluZ10pXG5cbi8vICAgY29uc29sZS5sb2coeyBpbnRlcnNlY3RpbmcsIGhhc05leHQsIG1zZ3MgfSlcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbi8vICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuLy8gICAgICAgICB7bXNncy5tYXAoeCA9PiAoXG4vLyAgICAgICAgICAgPE1zZ0l0ZW1cbi8vICAgICAgICAgICAgIGtleT17eC5pZH1cbi8vICAgICAgICAgICAgIHsuLi54fVxuLy8gICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxuLy8gICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxuLy8gICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XG4vLyAgICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cbi8vICAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cbi8vICAgICAgICAgICAgIHVzZXI9e3VzZXJzW3gudXNlcklkXX1cbi8vICAgICAgICAgICAvPlxuLy8gICAgICAgICApKX1cbi8vICAgICAgIDwvdWw+XG4vLyAgICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+XG4vLyAgICAgPC8+XG4vLyAgIClcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgTXNnTGlzdFxuXG5jb25zdCBVc2VySWRzID0gWydyb3knLCAnamF5J11cbi8v656c642k7ZWY6rKMIOyVhOydtOuUlCDsg53shLFcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV1cblxuLy8gY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApLmZpbGwoMCkubWFwKChfLGkpID0+ICh7XG5cbi8vICAgaWQ6IGkgKyAxLFxuLy8gICB1c2VySWQ6Z2V0UmFuZG9tVXNlcklkKCksXG4vLyAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArIGkgKiAxMDAwICogNjAsXG4vLyAgIHRleHQ6IGAke2krMX0gbW9jayB0ZXh0YFxuLy8gfSkpLnJldmVyc2UoKVxuXG4vLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcmlnaW5hbE1zZ3MpKVxuXG5jb25zdCBNc2dMaXN0ID0gKHsgc21zZ3MgLCB1c2Vyc30pID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKHNtc2dzKVxuICBjb25zdCB1c2VySWQgPSBxdWVyeS51c2VySWQgfHwgcXVlcnkudXNlcmlkIHx8ICcnO1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtoYXNOZXh0LCBzZXRIYXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IGZldGNoTW9yZUVsID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IGludGVyc2VjdGluZyA9IHVzZUluZmluaXRlU2Nyb2xsKGZldGNoTW9yZUVsKVxuICAvLyBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jIHRleHQgPT4ge1xuICAvLyAgIGNvbnN0IG5ld01zZyA9e1xuICAvLyAgICAgaWQ6IG1zZ3MubGVuZ3RoICsgMSxcbiAgLy8gICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXG4gIC8vICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gIC8vICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aCsgMX0gJHt0ZXh0fWAsXG4gIC8vICAgfVxuXG4gICAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyB0ZXh0ID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwb3N0JywgJy9tZXNzYWdlcycsIHsgdGV4dCwgdXNlcklkIH0pXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKVxuICAgIHNldE1zZ3MobXNncyA9PiBbbmV3TXNnLCAuLi5tc2dzXSlcbiAgfVxuXG4gICAgLy8gaW5wdXTsnLzroZwg7J6F66Cl7ZWcIOuNsOydtO2EsCDsoIDsnqVcbiAgICAvLyBzZXRNc2dzKG1zZ3MgPT4gKFtuZXdNc2csIC4uLm1zZ3NdKSlcbiAgICAvLyBjb25zb2xlLmxvZyhuZXdNc2cpO1xuICAgXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKVxuICAgIHNldE1zZ3MobXNncyA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKVxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3NcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc11cbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpXG4gICAgICByZXR1cm4gbmV3TXNnc1xuICAgIH0pXG4gICAgZG9uZUVkaXQoKVxuICB9XG5cbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbClcbiAgXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJywgeyBwYXJhbXM6IHsgY3Vyc29yOiBtc2dzW21zZ3MubGVuZ3RoIC0gMV0/LmlkIHx8ICcnIH0gfSlcbiAgICBpZiAobmV3TXNncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEhhc05leHQoZmFsc2UpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2V0TXNncyhtc2dzID0+IFsuLi5tc2dzLCAuLi5uZXdNc2dzXSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGludGVyc2VjdGluZyAmJiBoYXNOZXh0KSBnZXRNZXNzYWdlcygpXG4gIH0sIFtpbnRlcnNlY3RpbmddKVxuXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgaWQgPT4ge1xuICAgIGNvbnN0IHJlY2VpdmVkSWQgPSBhd2FpdCBmZXRjaGVyKCdkZWxldGUnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyBwYXJhbXM6IHsgdXNlcklkIH0gfSlcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgIHJlY2VpdmVkSWQsIHR5cGVvZiBpZClcbiAgICBzZXRNc2dzKG1zZ3MgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSByZWNlaXZlZElkICsgJycpXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNnc1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpXG4gICAgICByZXR1cm4gbmV3TXNnc1xuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dXNlcklkICYmIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPn1cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlXCI+e1xuICAgICAgICBtc2dzLm1hcCh4ID0+IFxuICAgICAgICA8TXNnSXRlbSBcbiAgICAgICAga2V5PXt4LmlkfSBcbiAgICAgICAgey4uLnh9IFxuICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxuICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cbiAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxuICAgICAgICBteUlkPXt1c2VySWR9XG4gICAgICAgIHVzZXI9e3VzZXJzW3gudXNlcklkXX1cbiAgICAgICAgIC8+KVxuICAgICAgfVxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgcmVmPXtmZXRjaE1vcmVFbH0gLz5cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=