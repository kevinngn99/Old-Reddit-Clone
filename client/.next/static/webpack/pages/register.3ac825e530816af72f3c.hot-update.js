webpackHotUpdate_N_E("pages/register",{

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/InputField */ \"./src/components/InputField.tsx\");\n/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Wrapper */ \"./src/components/Wrapper.tsx\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/kevin/Documents/RedditClone/client/src/pages/register.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar REGISTER_MUTATION = \"\\nmutation Register($username: String!, $email: String!, $password: String!) {\\n  register(options: { username: $username, email: $email, password: $password }) {\\n    errors {\\n      field\\n      message\\n    }\\n    user {\\n      id\\n      username\\n    }\\n  }\\n}\\n\";\n\nvar Register = function Register(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_ref);\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n\n  var _useMutation = Object(urql__WEBPACK_IMPORTED_MODULE_10__[\"useMutation\"])(REGISTER_MUTATION),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useMutation, 2),\n      register = _useMutation2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_components_Wrapper__WEBPACK_IMPORTED_MODULE_12__[\"Wrapper\"], {\n    variant: \"small\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_6__[\"Formik\"], {\n      initialValues: {\n        username: \"\",\n        email: \"\",\n        password: \"\"\n      },\n      onSubmit: /*#__PURE__*/function () {\n        var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, _ref2) {\n          var _response$data, _response$data2;\n\n          var setErrors, response, errorMap;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  setErrors = _ref2.setErrors;\n                  _context.next = 3;\n                  return register(values);\n\n                case 3:\n                  response = _context.sent;\n\n                  if ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.register.errors) {\n                    errorMap = {};\n                    response.data.register.errors.forEach(function (_ref4) {\n                      var field = _ref4.field,\n                          message = _ref4.message;\n                      errorMap[field] = message;\n                    });\n                    setErrors(errorMap);\n                  } else if ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.register.user) {\n                    router.push(\"/\");\n                  }\n\n                case 5:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function (_x, _x2) {\n          return _ref3.apply(this, arguments);\n        };\n      }(),\n      children: function children(_ref5) {\n        var isSubmitting = _ref5.isSubmitting;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_6__[\"Form\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_components_InputField__WEBPACK_IMPORTED_MODULE_11__[\"InputField\"], {\n            name: \"email\",\n            placeholder: \"email\",\n            label: \"Email\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n            mt: 4,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_components_InputField__WEBPACK_IMPORTED_MODULE_11__[\"InputField\"], {\n              name: \"username\",\n              placeholder: \"username\",\n              label: \"Username\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n            mt: 4,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_components_InputField__WEBPACK_IMPORTED_MODULE_11__[\"InputField\"], {\n              name: \"password\",\n              placeholder: \"password\",\n              label: \"Password\",\n              type: \"password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n            mt: 4,\n            type: \"submit\",\n            colorScheme: \"teal\",\n            isLoading: isSubmitting,\n            children: \"Sign Up\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Register, \"3Y2IB4m+UYV1HXJySrXdKuse7lw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"], urql__WEBPACK_IMPORTED_MODULE_10__[\"useMutation\"]];\n});\n\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_7__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_13__[\"createUrqlClient\"])(Register));\n\nvar _c;\n\n$RefreshReg$(_c, \"Register\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeD9hNjdmIl0sIm5hbWVzIjpbIlJFR0lTVEVSX01VVEFUSU9OIiwiUmVnaXN0ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VNdXRhdGlvbiIsInJlZ2lzdGVyIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwidmFsdWVzIiwic2V0RXJyb3JzIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3JzIiwiZXJyb3JNYXAiLCJmb3JFYWNoIiwiZmllbGQiLCJtZXNzYWdlIiwidXNlciIsInB1c2giLCJpc1N1Ym1pdHRpbmciLCJ3aXRoVXJxbENsaWVudCIsImNyZWF0ZVVycWxDbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsaUJBQWlCLCtRQUF2Qjs7QUFlQSxJQUFNQyxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxPQUFRO0FBQUE7O0FBQUE7O0FBQ2hELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGdELHFCQUUzQkMseURBQVcsQ0FBQ0osaUJBQUQsQ0FGZ0I7QUFBQTtBQUFBLE1BRXZDSyxRQUZ1Qzs7QUFJaEQsc0JBQ0UscUVBQUMsNERBQUQ7QUFBUyxXQUFPLEVBQUMsT0FBakI7QUFBQSwyQkFDRSxxRUFBQyw2Q0FBRDtBQUNFLG1CQUFhLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRSxFQUFaO0FBQWdCQyxhQUFLLEVBQUUsRUFBdkI7QUFBMkJDLGdCQUFRLEVBQUU7QUFBckMsT0FEakI7QUFFRSxjQUFRO0FBQUEscU1BQUUsaUJBQU9DLE1BQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlCQywyQkFBakIsU0FBaUJBLFNBQWpCO0FBQUE7QUFBQSx5QkFDZUwsUUFBUSxDQUFDSSxNQUFELENBRHZCOztBQUFBO0FBQ0ZFLDBCQURFOztBQUVSLHdDQUFJQSxRQUFRLENBQUNDLElBQWIsbURBQUksZUFBZVAsUUFBZixDQUF3QlEsTUFBNUIsRUFBb0M7QUFDNUJDLDRCQUQ0QixHQUNPLEVBRFA7QUFHbENILDRCQUFRLENBQUNDLElBQVQsQ0FBY1AsUUFBZCxDQUF1QlEsTUFBdkIsQ0FBOEJFLE9BQTlCLENBQXNDLGlCQUF3QjtBQUFBLDBCQUFyQkMsS0FBcUIsU0FBckJBLEtBQXFCO0FBQUEsMEJBQWRDLE9BQWMsU0FBZEEsT0FBYztBQUM1REgsOEJBQVEsQ0FBQ0UsS0FBRCxDQUFSLEdBQWtCQyxPQUFsQjtBQUNELHFCQUZEO0FBSUFQLDZCQUFTLENBQUNJLFFBQUQsQ0FBVDtBQUNELG1CQVJELE1BUU8sdUJBQUlILFFBQVEsQ0FBQ0MsSUFBYixvREFBSSxnQkFBZVAsUUFBZixDQUF3QmEsSUFBNUIsRUFBa0M7QUFDdkNoQiwwQkFBTSxDQUFDaUIsSUFBUCxDQUFZLEdBQVo7QUFDRDs7QUFaTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRlY7QUFBQSxnQkFpQkc7QUFBQSxZQUFHQyxZQUFILFNBQUdBLFlBQUg7QUFBQSw0QkFDQyxxRUFBQywyQ0FBRDtBQUFBLGtDQUNFLHFFQUFDLGtFQUFEO0FBQ0UsZ0JBQUksRUFBQyxPQURQO0FBRUUsdUJBQVcsRUFBQyxPQUZkO0FBR0UsaUJBQUssRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRSxxRUFBQyxvREFBRDtBQUFLLGNBQUUsRUFBRSxDQUFUO0FBQUEsbUNBQ0UscUVBQUMsa0VBQUQ7QUFDRSxrQkFBSSxFQUFDLFVBRFA7QUFFRSx5QkFBVyxFQUFDLFVBRmQ7QUFHRSxtQkFBSyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFhRSxxRUFBQyxvREFBRDtBQUFLLGNBQUUsRUFBRSxDQUFUO0FBQUEsbUNBQ0UscUVBQUMsa0VBQUQ7QUFDRSxrQkFBSSxFQUFDLFVBRFA7QUFFRSx5QkFBVyxFQUFDLFVBRmQ7QUFHRSxtQkFBSyxFQUFDLFVBSFI7QUFJRSxrQkFBSSxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkYsZUFxQkUscUVBQUMsdURBQUQ7QUFDRSxjQUFFLEVBQUUsQ0FETjtBQUVFLGdCQUFJLEVBQUMsUUFGUDtBQUdFLHVCQUFXLEVBQUMsTUFIZDtBQUlFLHFCQUFTLEVBQUVBLFlBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQUFBO0FBakJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzREQsQ0ExREQ7O0dBQU1uQixRO1VBQ1dFLHFELEVBQ01DLGlEOzs7S0FGakJILFE7QUE0RFNvQiwrSEFBYyxDQUFDQyx5RUFBRCxDQUFkLENBQWlDckIsUUFBakMsQ0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9yZWdpc3Rlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvblxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tIFwibmV4dC11cnFsXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcInVycWxcIjtcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvV3JhcHBlclwiO1xuaW1wb3J0IHsgY3JlYXRlVXJxbENsaWVudCB9IGZyb20gXCIuLi91dGlscy9jcmVhdGVVcnFsQ2xpZW50XCI7XG5cbmludGVyZmFjZSByZWdpc3RlclByb3BzIHt9XG5cbmNvbnN0IFJFR0lTVEVSX01VVEFUSU9OID0gYFxubXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuICByZWdpc3RlcihvcHRpb25zOiB7IHVzZXJuYW1lOiAkdXNlcm5hbWUsIGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQgfSkge1xuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgICB1c2VyIHtcbiAgICAgIGlkXG4gICAgICB1c2VybmFtZVxuICAgIH1cbiAgfVxufVxuYDtcblxuY29uc3QgUmVnaXN0ZXI6IFJlYWN0LkZDPHJlZ2lzdGVyUHJvcHM+ID0gKHt9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbLCByZWdpc3Rlcl0gPSB1c2VNdXRhdGlvbihSRUdJU1RFUl9NVVRBVElPTik7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciB2YXJpYW50PVwic21hbGxcIj5cbiAgICAgIDxGb3JtaWtcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogXCJcIiwgZW1haWw6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH19XG4gICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldEVycm9ycyB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZWdpc3Rlcih2YWx1ZXMpO1xuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhPy5yZWdpc3Rlci5lcnJvcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG5cbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEucmVnaXN0ZXIuZXJyb3JzLmZvckVhY2goKHsgZmllbGQsIG1lc3NhZ2UgfSkgPT4ge1xuICAgICAgICAgICAgICBlcnJvck1hcFtmaWVsZF0gPSBtZXNzYWdlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNldEVycm9ycyhlcnJvck1hcCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhPy5yZWdpc3Rlci51c2VyKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcbiAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Qm94IG10PXs0fT5cbiAgICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IG10PXs0fT5cbiAgICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgbXQ9ezR9XG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cInRlYWxcIlxuICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCkoUmVnaXN0ZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ })

})