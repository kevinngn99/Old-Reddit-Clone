webpackHotUpdate_N_E("pages/register",{

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Wrapper */ \"./src/components/Wrapper.tsx\");\n/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/InputField */ \"./src/components/InputField.tsx\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n\n\n\n\nvar _jsxFileName = \"/home/kevin/Documents/RedditClone/client/src/pages/register.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar REGISTER_MUTATION = \"\\nmutation Register($username: String!, $password: String!) {\\n  register(options: { username: $username, password: $password}) {\\n    errors {\\n      field\\n      message\\n    }\\n    user {\\n      id\\n      username\\n    }\\n  }\\n}\\n\";\n\nvar Register = function Register(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useMutation = Object(urql__WEBPACK_IMPORTED_MODULE_8__[\"useMutation\"])(REGISTER_MUTATION),\n      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation, 2),\n      register = _useMutation2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Wrapper__WEBPACK_IMPORTED_MODULE_6__[\"Wrapper\"], {\n    variant: \"small\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_4__[\"Formik\"], {\n      initialValues: {\n        username: \"\",\n        password: \"\"\n      },\n      onSubmit: function onSubmit(values) {\n        return register(values);\n      },\n      children: function children(_ref2) {\n        var isSubmitting = _ref2.isSubmitting;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_4__[\"Form\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_InputField__WEBPACK_IMPORTED_MODULE_7__[\"InputField\"], {\n            name: \"username\",\n            placeholder: \"username\",\n            label: \"Username\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n            mt: 4,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_InputField__WEBPACK_IMPORTED_MODULE_7__[\"InputField\"], {\n              name: \"password\",\n              placeholder: \"password\",\n              label: \"Password\",\n              type: \"password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n            mt: 4,\n            type: \"submit\",\n            colorScheme: \"teal\",\n            isLoading: isSubmitting,\n            children: \"Register\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Register, \"7CEe8jaeeKkSxBnlwahqPb7e3aI=\", false, function () {\n  return [urql__WEBPACK_IMPORTED_MODULE_8__[\"useMutation\"]];\n});\n\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\n\nvar _c;\n\n$RefreshReg$(_c, \"Register\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeD9hNjdmIl0sIm5hbWVzIjpbIlJFR0lTVEVSX01VVEFUSU9OIiwiUmVnaXN0ZXIiLCJ1c2VNdXRhdGlvbiIsInJlZ2lzdGVyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInZhbHVlcyIsImlzU3VibWl0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxpQkFBaUIsOE9BQXZCOztBQWVBLElBQU1DLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLE9BQVE7QUFBQTs7QUFBQTs7QUFBQSxxQkFDM0JDLHdEQUFXLENBQUNGLGlCQUFELENBRGdCO0FBQUE7QUFBQSxNQUN2Q0csUUFEdUM7O0FBR2hELHNCQUNFLHFFQUFDLDJEQUFEO0FBQVMsV0FBTyxFQUFDLE9BQWpCO0FBQUEsMkJBQ0UscUVBQUMsNkNBQUQ7QUFDRSxtQkFBYSxFQUFFO0FBQUVDLGdCQUFRLEVBQUUsRUFBWjtBQUFnQkMsZ0JBQVEsRUFBRTtBQUExQixPQURqQjtBQUVFLGNBQVEsRUFBRSxrQkFBQ0MsTUFBRDtBQUFBLGVBQVlILFFBQVEsQ0FBQ0csTUFBRCxDQUFwQjtBQUFBLE9BRlo7QUFBQSxnQkFJRztBQUFBLFlBQUdDLFlBQUgsU0FBR0EsWUFBSDtBQUFBLDRCQUNDLHFFQUFDLDJDQUFEO0FBQUEsa0NBQ0UscUVBQUMsaUVBQUQ7QUFDRSxnQkFBSSxFQUFDLFVBRFA7QUFFRSx1QkFBVyxFQUFDLFVBRmQ7QUFHRSxpQkFBSyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU1FLHFFQUFDLG9EQUFEO0FBQUssY0FBRSxFQUFFLENBQVQ7QUFBQSxtQ0FDRSxxRUFBQyxpRUFBRDtBQUNFLGtCQUFJLEVBQUMsVUFEUDtBQUVFLHlCQUFXLEVBQUMsVUFGZDtBQUdFLG1CQUFLLEVBQUMsVUFIUjtBQUlFLGtCQUFJLEVBQUM7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQWNFLHFFQUFDLHVEQUFEO0FBQ0UsY0FBRSxFQUFFLENBRE47QUFFRSxnQkFBSSxFQUFDLFFBRlA7QUFHRSx1QkFBVyxFQUFDLE1BSGQ7QUFJRSxxQkFBUyxFQUFFQSxZQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQUFBO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtDRCxDQXJDRDs7R0FBTU4sUTtVQUNpQkMsZ0Q7OztLQURqQkQsUTtBQXVDU0EsdUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEZvcm1Db250cm9sLFxuICBGb3JtRXJyb3JNZXNzYWdlLFxuICBGb3JtTGFiZWwsXG4gIElucHV0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1dyYXBwZXJcIjtcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnB1dEZpZWxkXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJ1cnFsXCI7XG5cbmludGVyZmFjZSByZWdpc3RlclByb3BzIHt9XG5cbmNvbnN0IFJFR0lTVEVSX01VVEFUSU9OID0gYFxubXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgcmVnaXN0ZXIob3B0aW9uczogeyB1c2VybmFtZTogJHVzZXJuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkfSkge1xuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgICB1c2VyIHtcbiAgICAgIGlkXG4gICAgICB1c2VybmFtZVxuICAgIH1cbiAgfVxufVxuYDtcblxuY29uc3QgUmVnaXN0ZXI6IFJlYWN0LkZDPHJlZ2lzdGVyUHJvcHM+ID0gKHt9KSA9PiB7XG4gIGNvbnN0IFssIHJlZ2lzdGVyXSA9IHVzZU11dGF0aW9uKFJFR0lTVEVSX01VVEFUSU9OKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIHZhcmlhbnQ9XCJzbWFsbFwiPlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9fVxuICAgICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4gcmVnaXN0ZXIodmFsdWVzKX1cbiAgICAgID5cbiAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXG4gICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJveCBtdD17NH0+XG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG10PXs0fVxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJ0ZWFsXCJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ })

})