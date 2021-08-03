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
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "D:\\study\\Api_Project\\local-api\\client\\components\\MsgList.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 // import useInfiniteScroll from '../hooks/useInfiniteScroll'
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


var MsgList = function MsgList() {
  _s();

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(),
      _useRouter$query$user = _useRouter.query.userId,
      userId = _useRouter$query$user === void 0 ? '' : _useRouter$query$user;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      msgs = _useState[0],
      setMsgs = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
      editingId = _useState2[0],
      setEditingId = _useState2[1]; // const onCreate = async text => {
  //   const newMsg ={
  //     id: msgs.length + 1,
  //     userId: getRandomUserId(),
  //     timestamp: Date.now(),
  //     text: `${msgs.length+ 1} ${text}`,
  //   }


  var onCreate = /*#__PURE__*/function () {
    var _ref = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(text) {
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
      return _ref.apply(this, arguments);
    };
  }(); // input으로 입력한 데이터 저장
  // setMsgs(msgs => ([newMsg, ...msgs]))
  // console.log(newMsg);


  var onUpdate = /*#__PURE__*/function () {
    var _ref2 = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(text, id) {
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
      return _ref2.apply(this, arguments);
    };
  }();

  var doneEdit = function doneEdit() {
    return setEditingId(null);
  };

  var getMessages = /*#__PURE__*/function () {
    var _ref3 = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var msgs;
      return D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('get', '/messages');

            case 2:
              msgs = _context3.sent;
              setMsgs(msgs);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getMessages() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    getMessages();
  }, []);

  var _onDelete = /*#__PURE__*/function () {
    var _ref4 = (0,D_study_Api_Project_local_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/D_study_Api_Project_local_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(id) {
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
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_8__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
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
          myId: userId
        }), x.id, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "KZZc5trGCKdQCk+DCEFhH//+rjY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIl0sIm5hbWVzIjpbIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJNc2dMaXN0IiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VySWQiLCJ1c2VTdGF0ZSIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJ0ZXh0IiwiZmV0Y2hlciIsIm5ld01zZyIsIkVycm9yIiwib25VcGRhdGUiLCJpZCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0IiwiZ2V0TWVzc2FnZXMiLCJ1c2VFZmZlY3QiLCJvbkRlbGV0ZSIsInBhcmFtcyIsInJlY2VpdmVkSWQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUFDLEtBQUQsRUFBUSxL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RixlQUVFO0FBQUksZUFBUyxFQUFDLFNBQWQ7QUFBQSxnQkFDRUosSUFBSSxDQUFDd0IsR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSw0QkFDViw4REFBQyw2Q0FBRCxrQ0FFSUEsQ0FGSjtBQUdBLGtCQUFRLEVBQUVoQixRQUhWO0FBSUEsbUJBQVMsRUFBRTtBQUFBLG1CQUFNTixZQUFZLENBQUNzQixDQUFDLENBQUNmLEVBQUgsQ0FBbEI7QUFBQSxXQUpYO0FBS0EsbUJBQVMsRUFBRVIsU0FBUyxLQUFLdUIsQ0FBQyxDQUFDZixFQUwzQjtBQU1BLGtCQUFRLEVBQUU7QUFBQSxtQkFBTVMsU0FBUSxDQUFDTSxDQUFDLENBQUNmLEVBQUgsQ0FBZDtBQUFBLFdBTlY7QUFPQSxjQUFJLEVBQUVaO0FBUE4sWUFDSzJCLENBQUMsQ0FBQ2YsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBVjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBa0JELENBN0VEOztHQUFNZixPO1VBQytCQyxrRDs7O0tBRC9CRCxPO0FBOEVOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE3MjliOTgyYzlkNzg2MzdlN2JkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJ1xuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9mZXRjaGVyJ1xuLy8gaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gJy4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsJ1xuXG4vLyBjb25zdCBNc2dMaXN0ID0gKHsgc21zZ3MsIHVzZXJzIH0pID0+IHtcbi8vICAgY29uc3Qge1xuLy8gICAgIHF1ZXJ5OiB7IHVzZXJJZCA9ICcnIH0sXG4vLyAgIH0gPSB1c2VSb3V0ZXIoKVxuLy8gICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShzbXNncylcbi8vICAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpXG4vLyAgIGNvbnN0IFtoYXNOZXh0LCBzZXRIYXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpXG4vLyAgIGNvbnN0IGZldGNoTW9yZUVsID0gdXNlUmVmKG51bGwpXG4vLyAgIGNvbnN0IGludGVyc2VjdGluZyA9IHVzZUluZmluaXRlU2Nyb2xsKGZldGNoTW9yZUVsKVxuXG4vLyAgIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgdGV4dCA9PiB7XG4vLyAgICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncG9zdCcsICcvbWVzc2FnZXMnLCB7IHRleHQsIHVzZXJJZCB9KVxuLy8gICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJylcbi8vICAgICBzZXRNc2dzKG1zZ3MgPT4gW25ld01zZywgLi4ubXNnc10pXG4vLyAgIH1cblxuLy8gICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xuLy8gICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KVxuLy8gICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJylcbi8vICAgICBzZXRNc2dzKG1zZ3MgPT4ge1xuLy8gICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZClcbi8vICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzXG4vLyAgICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdXG4vLyAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgbmV3TXNnKVxuLy8gICAgICAgcmV0dXJuIG5ld01zZ3Ncbi8vICAgICB9KVxuLy8gICAgIGRvbmVFZGl0KClcbi8vICAgfVxuXG4vLyAgIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgaWQgPT4ge1xuLy8gICAgIGNvbnN0IHJlY2VpdmVkSWQgPSBhd2FpdCBmZXRjaGVyKCdkZWxldGUnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyBwYXJhbXM6IHsgdXNlcklkIH0gfSlcbi8vICAgICBzZXRNc2dzKG1zZ3MgPT4ge1xuLy8gICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSByZWNlaXZlZElkICsgJycpXG4vLyAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNnc1xuLy8gICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXVxuLy8gICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpXG4vLyAgICAgICByZXR1cm4gbmV3TXNnc1xuLy8gICAgIH0pXG4vLyAgIH1cblxuLy8gICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKVxuXG4vLyAgIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xuLy8gICAgIGNvbnN0IG5ld01zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJywgeyBwYXJhbXM6IHsgY3Vyc29yOiBtc2dzW21zZ3MubGVuZ3RoIC0gMV0/LmlkIHx8ICcnIH0gfSlcbi8vICAgICBpZiAobmV3TXNncy5sZW5ndGggPT09IDApIHtcbi8vICAgICAgIHNldEhhc05leHQoZmFsc2UpXG4vLyAgICAgICByZXR1cm5cbi8vICAgICB9XG4vLyAgICAgc2V0TXNncyhtc2dzID0+IFsuLi5tc2dzLCAuLi5uZXdNc2dzXSlcbi8vICAgfVxuXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgaWYgKGludGVyc2VjdGluZyAmJiBoYXNOZXh0KSBnZXRNZXNzYWdlcygpXG4vLyAgIH0sIFtpbnRlcnNlY3RpbmddKVxuXG4vLyAgIGNvbnNvbGUubG9nKHsgaW50ZXJzZWN0aW5nLCBoYXNOZXh0LCBtc2dzIH0pXG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XG4vLyAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbi8vICAgICAgICAge21zZ3MubWFwKHggPT4gKFxuLy8gICAgICAgICAgIDxNc2dJdGVtXG4vLyAgICAgICAgICAgICBrZXk9e3guaWR9XG4vLyAgICAgICAgICAgICB7Li4ueH1cbi8vICAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbi8vICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cbi8vICAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxuLy8gICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XG4vLyAgICAgICAgICAgICBteUlkPXt1c2VySWR9XG4vLyAgICAgICAgICAgICB1c2VyPXt1c2Vyc1t4LnVzZXJJZF19XG4vLyAgICAgICAgICAgLz5cbi8vICAgICAgICAgKSl9XG4vLyAgICAgICA8L3VsPlxuLy8gICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPlxuLy8gICAgIDwvPlxuLy8gICApXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE1zZ0xpc3RcblxuY29uc3QgVXNlcklkcyA9IFsncm95JywgJ2pheSddXG4vL+uenOuNpO2VmOqyjCDslYTsnbTrlJQg7IOd7ISxXG5jb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldXG5cbi8vIGNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKS5maWxsKDApLm1hcCgoXyxpKSA9PiAoe1xuXG4vLyAgIGlkOiBpICsgMSxcbi8vICAgdXNlcklkOmdldFJhbmRvbVVzZXJJZCgpLFxuLy8gICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyBpICogMTAwMCAqIDYwLFxuLy8gICB0ZXh0OiBgJHtpKzF9IG1vY2sgdGV4dGBcbi8vIH0pKS5yZXZlcnNlKClcblxuLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkob3JpZ2luYWxNc2dzKSlcblxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgeyBxdWVyeTogeyB1c2VySWQgPSAnJyB9LH0gPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgLy8gY29uc3Qgb25DcmVhdGUgPSBhc3luYyB0ZXh0ID0+IHtcbiAgLy8gICBjb25zdCBuZXdNc2cgPXtcbiAgLy8gICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXG4gIC8vICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAvLyAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAvLyAgICAgdGV4dDogYCR7bXNncy5sZW5ndGgrIDF9ICR7dGV4dH1gLFxuICAvLyAgIH1cblxuICAgIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgdGV4dCA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncG9zdCcsICcvbWVzc2FnZXMnLCB7IHRleHQsIHVzZXJJZCB9KVxuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJylcbiAgICBzZXRNc2dzKG1zZ3MgPT4gW25ld01zZywgLi4ubXNnc10pXG4gIH1cblxuICAgIC8vIGlucHV07Jy866GcIOyeheugpe2VnCDrjbDsnbTthLAg7KCA7J6lXG4gICAgLy8gc2V0TXNncyhtc2dzID0+IChbbmV3TXNnLCAuLi5tc2dzXSkpXG4gICAgLy8gY29uc29sZS5sb2cobmV3TXNnKTtcbiAgIFxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KVxuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJylcbiAgICBzZXRNc2dzKG1zZ3MgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZClcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgbmV3TXNnKVxuICAgICAgcmV0dXJuIG5ld01zZ3NcbiAgICB9KVxuICAgIGRvbmVFZGl0KClcbiAgfVxuXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpXG4gIFxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycpXG4gICAgc2V0TXNncyhtc2dzKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRNZXNzYWdlcygpXG4gIH0sW10pXG5cbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyBpZCA9PiB7XG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoJ2RlbGV0ZScsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHBhcmFtczogeyB1c2VySWQgfSB9KVxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiAgcmVjZWl2ZWRJZCwgdHlwZW9mIGlkKVxuICAgIHNldE1zZ3MobXNncyA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IHJlY2VpdmVkSWQgKyAnJylcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSlcbiAgICAgIHJldHVybiBuZXdNc2dzXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj57XG4gICAgICAgIG1zZ3MubWFwKHggPT4gXG4gICAgICAgIDxNc2dJdGVtIFxuICAgICAgICBrZXk9e3guaWR9IFxuICAgICAgICB7Li4ueH0gXG4gICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XG4gICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxuICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XG4gICAgICAgIG15SWQ9e3VzZXJJZH1cbiAgICAgICAgIC8+KVxuICAgICAgfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=