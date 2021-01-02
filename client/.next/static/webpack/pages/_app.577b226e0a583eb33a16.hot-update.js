webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme */ \"./src/theme.tsx\");\n\n\n\nvar _jsxFileName = \"/home/kevin/Documents/RedditClone/client/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query Me {\\n    me {\\n        id\\n        username\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nfunction customUpdateQuery(cache, queryInput, result, fn) {\n  return cache.updateQuery(queryInput, function (data) {\n    return fn(result, data);\n  });\n}\n\nvar LOGIN_MUTATION = \"\\nmutation Login($username: String!, $password: String!) {\\n  login(options: { username: $username, password: $password}) {\\n    errors {\\n      field\\n      message\\n    }\\n    user {\\n      id\\n      username\\n    }\\n  }\\n}\\n\";\nvar REGISTER_MUTATION = \"\\nmutation Register($username: String!, $password: String!) {\\n  register(options: { username: $username, password: $password}) {\\n    errors {\\n      field\\n      message\\n    }\\n    user {\\n      id\\n      username\\n    }\\n  }\\n}\\n\";\nvar ME_QUERY = Object(urql__WEBPACK_IMPORTED_MODULE_5__[\"gql\"])(_templateObject());\nvar client = Object(urql__WEBPACK_IMPORTED_MODULE_5__[\"createClient\"])({\n  url: \"http://localhost:4000/graphql\",\n  fetchOptions: {\n    credentials: \"include\"\n  },\n  exchanges: [urql__WEBPACK_IMPORTED_MODULE_5__[\"dedupExchange\"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_4__[\"cacheExchange\"])({\n    updates: {\n      Mutation: {\n        logout: function logout(result, args, cache, info) {\n          cache.updateQuery({\n            query: ME_QUERY\n          }, function (data) {\n            return {\n              me: null\n            };\n          });\n        },\n        login: function login(result, args, cache, info) {\n          cache.updateQuery({\n            query: ME_QUERY\n          }, function (data) {\n            if (result.login.errors) {\n              return {\n                me: null\n              };\n            } else {\n              return {\n                me: result.login.user\n              };\n            }\n          });\n        },\n        register: function register(result, args, cache, info) {\n          cache.updateQuery({\n            query: ME_QUERY\n          }, function (data) {\n            if (result.register.errors) {\n              return {\n                me: null\n              };\n            } else {\n              return {\n                me: result.register.user\n              };\n            }\n          });\n        }\n      }\n    }\n  }), urql__WEBPACK_IMPORTED_MODULE_5__[\"fetchExchange\"]]\n});\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(urql__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    value: client,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ChakraProvider\"], {\n      resetCSS: true,\n      theme: _theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"ColorModeProvider\"], {\n        options: {\n          useSystemColorMode: true\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 5\n  }, this);\n}\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Pzg1NDgiXSwibmFtZXMiOlsiY3VzdG9tVXBkYXRlUXVlcnkiLCJjYWNoZSIsInF1ZXJ5SW5wdXQiLCJyZXN1bHQiLCJmbiIsInVwZGF0ZVF1ZXJ5IiwiZGF0YSIsIkxPR0lOX01VVEFUSU9OIiwiUkVHSVNURVJfTVVUQVRJT04iLCJNRV9RVUVSWSIsImdxbCIsImNsaWVudCIsImNyZWF0ZUNsaWVudCIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiZXhjaGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJ1cGRhdGVzIiwiTXV0YXRpb24iLCJsb2dvdXQiLCJhcmdzIiwiaW5mbyIsInF1ZXJ5IiwibWUiLCJsb2dpbiIsImVycm9ycyIsInVzZXIiLCJyZWdpc3RlciIsImZldGNoRXhjaGFuZ2UiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwidXNlU3lzdGVtQ29sb3JNb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsaUJBQVQsQ0FBMENDLEtBQTFDLEVBQXdEQyxVQUF4RCxFQUFnRkMsTUFBaEYsRUFBNkZDLEVBQTdGLEVBQWlJO0FBQy9ILFNBQU9ILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkgsVUFBbEIsRUFBOEIsVUFBQUksSUFBSTtBQUFBLFdBQUlGLEVBQUUsQ0FBQ0QsTUFBRCxFQUFTRyxJQUFULENBQU47QUFBQSxHQUFsQyxDQUFQO0FBQ0Q7O0FBRUQsSUFBTUMsY0FBYyx3T0FBcEI7QUFlQSxJQUFNQyxpQkFBaUIsOE9BQXZCO0FBZUEsSUFBTUMsUUFBUSxHQUFHQyxnREFBSCxtQkFBZDtBQVNBLElBQU1DLE1BQU0sR0FBR0MseURBQVksQ0FBQztBQUMxQkMsS0FBRyxFQUFFLCtCQURxQjtBQUUxQkMsY0FBWSxFQUFFO0FBQ1pDLGVBQVcsRUFBRTtBQURELEdBRlk7QUFLMUJDLFdBQVMsRUFBRSxDQUFDQyxrREFBRCxFQUFnQkMsK0VBQWEsQ0FBQztBQUN2Q0MsV0FBTyxFQUFFO0FBQ1BDLGNBQVEsRUFBRTtBQUNSQyxjQUFNLEVBQUUsZ0JBQUNsQixNQUFELEVBQVNtQixJQUFULEVBQWVyQixLQUFmLEVBQXNCc0IsSUFBdEIsRUFBK0I7QUFDckN0QixlQUFLLENBQUNJLFdBQU4sQ0FBa0I7QUFBQ21CLGlCQUFLLEVBQUVmO0FBQVIsV0FBbEIsRUFBcUMsVUFBQUgsSUFBSSxFQUFJO0FBQzNDLG1CQUFPO0FBQ0xtQixnQkFBRSxFQUFFO0FBREMsYUFBUDtBQUdELFdBSkQ7QUFLRCxTQVBPO0FBUVJDLGFBQUssRUFBRSxlQUFDdkIsTUFBRCxFQUFTbUIsSUFBVCxFQUFlckIsS0FBZixFQUFzQnNCLElBQXRCLEVBQStCO0FBQ3BDdEIsZUFBSyxDQUFDSSxXQUFOLENBQWtCO0FBQUNtQixpQkFBSyxFQUFFZjtBQUFSLFdBQWxCLEVBQXFDLFVBQUFILElBQUksRUFBSTtBQUMzQyxnQkFBSUgsTUFBTSxDQUFDdUIsS0FBUCxDQUFhQyxNQUFqQixFQUF5QjtBQUN2QixxQkFBTztBQUNMRixrQkFBRSxFQUFFO0FBREMsZUFBUDtBQUdELGFBSkQsTUFLSztBQUNILHFCQUFPO0FBQ0xBLGtCQUFFLEVBQUV0QixNQUFNLENBQUN1QixLQUFQLENBQWFFO0FBRFosZUFBUDtBQUdEO0FBQ0YsV0FYRDtBQVlELFNBckJPO0FBc0JSQyxnQkFBUSxFQUFFLGtCQUFDMUIsTUFBRCxFQUFTbUIsSUFBVCxFQUFlckIsS0FBZixFQUFzQnNCLElBQXRCLEVBQStCO0FBQ3ZDdEIsZUFBSyxDQUFDSSxXQUFOLENBQWtCO0FBQUNtQixpQkFBSyxFQUFFZjtBQUFSLFdBQWxCLEVBQXFDLFVBQUFILElBQUksRUFBSTtBQUMzQyxnQkFBSUgsTUFBTSxDQUFDMEIsUUFBUCxDQUFnQkYsTUFBcEIsRUFBNEI7QUFDMUIscUJBQU87QUFDTEYsa0JBQUUsRUFBRTtBQURDLGVBQVA7QUFHRCxhQUpELE1BS0s7QUFDSCxxQkFBTztBQUNMQSxrQkFBRSxFQUFFdEIsTUFBTSxDQUFDMEIsUUFBUCxDQUFnQkQ7QUFEZixlQUFQO0FBR0Q7QUFDRixXQVhEO0FBWUQ7QUFuQ087QUFESDtBQUQ4QixHQUFELENBQTdCLEVBd0NQRSxrREF4Q087QUFMZSxDQUFELENBQTNCOztBQWdEQSxTQUFTQyxLQUFULE9BQXlDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN2QyxzQkFDRSxxRUFBQyw2Q0FBRDtBQUFVLFNBQUssRUFBRXRCLE1BQWpCO0FBQUEsMkJBQ0UscUVBQUMsK0RBQUQ7QUFBZ0IsY0FBUSxNQUF4QjtBQUF5QixXQUFLLEVBQUV1Qiw4Q0FBaEM7QUFBQSw2QkFDRSxxRUFBQyxrRUFBRDtBQUNFLGVBQU8sRUFBRTtBQUNQQyw0QkFBa0IsRUFBRTtBQURiLFNBRFg7QUFBQSwrQkFLRSxxRUFBQyxTQUFELG9CQUFlRixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztLQWRRRixLO0FBZ0JNQSxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBDb2xvck1vZGVQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBjYWNoZUV4Y2hhbmdlLCBDYWNoZSwgUXVlcnlJbnB1dCwgcXVlcnkgfSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIsIGNyZWF0ZUNsaWVudCwgZGVkdXBFeGNoYW5nZSwgZmV0Y2hFeGNoYW5nZSwgZ3FsIH0gZnJvbSBcInVycWxcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVcIjtcblxuZnVuY3Rpb24gY3VzdG9tVXBkYXRlUXVlcnk8UmVzdWx0LCBRdWVyeT4oY2FjaGU6IENhY2hlLCBxdWVyeUlucHV0OiBRdWVyeUlucHV0LCByZXN1bHQ6IGFueSwgZm46IChyOiBSZXN1bHQsIHE6IFF1ZXJ5KSA9PiBRdWVyeSkge1xuICByZXR1cm4gY2FjaGUudXBkYXRlUXVlcnkocXVlcnlJbnB1dCwgZGF0YSA9PiBmbihyZXN1bHQsIGRhdGEgYXMgYW55KSBhcyBhbnkpO1xufVxuXG5jb25zdCBMT0dJTl9NVVRBVElPTiA9IGBcbm11dGF0aW9uIExvZ2luKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGxvZ2luKG9wdGlvbnM6IHsgdXNlcm5hbWU6ICR1c2VybmFtZSwgcGFzc3dvcmQ6ICRwYXNzd29yZH0pIHtcbiAgICBlcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gICAgdXNlciB7XG4gICAgICBpZFxuICAgICAgdXNlcm5hbWVcbiAgICB9XG4gIH1cbn1cbmA7XG5cbmNvbnN0IFJFR0lTVEVSX01VVEFUSU9OID0gYFxubXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgcmVnaXN0ZXIob3B0aW9uczogeyB1c2VybmFtZTogJHVzZXJuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkfSkge1xuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgICB1c2VyIHtcbiAgICAgIGlkXG4gICAgICB1c2VybmFtZVxuICAgIH1cbiAgfVxufVxuYDtcblxuY29uc3QgTUVfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IE1lIHtcbiAgICBtZSB7XG4gICAgICAgIGlkXG4gICAgICAgIHVzZXJuYW1lXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxcIixcbiAgZmV0Y2hPcHRpb25zOiB7XG4gICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICB9LFxuICBleGNoYW5nZXM6IFtkZWR1cEV4Y2hhbmdlLCBjYWNoZUV4Y2hhbmdlKHtcbiAgICB1cGRhdGVzOiB7XG4gICAgICBNdXRhdGlvbjoge1xuICAgICAgICBsb2dvdXQ6IChyZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgY2FjaGUudXBkYXRlUXVlcnkoe3F1ZXJ5OiBNRV9RVUVSWX0sIGRhdGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbWU6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBsb2dpbjogKHJlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICBjYWNoZS51cGRhdGVRdWVyeSh7cXVlcnk6IE1FX1FVRVJZfSwgZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1lOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1lOiByZXN1bHQubG9naW4udXNlclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaXN0ZXI6IChyZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgY2FjaGUudXBkYXRlUXVlcnkoe3F1ZXJ5OiBNRV9RVUVSWX0sIGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWdpc3Rlci5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtZTogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtZTogcmVzdWx0LnJlZ2lzdGVyLnVzZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBmZXRjaEV4Y2hhbmdlXVxufSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciB2YWx1ZT17Y2xpZW50fT5cbiAgICAgIDxDaGFrcmFQcm92aWRlciByZXNldENTUyB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q29sb3JNb2RlUHJvdmlkZXJcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Db2xvck1vZGVQcm92aWRlcj5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ })

})