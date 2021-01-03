module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/register.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/InputField.tsx":
/*!***************************************!*\
  !*** ./src/components/InputField.tsx ***!
  \***************************************/
/*! exports provided: InputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputField\", function() { return InputField; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/kevin/Documents/RedditClone/client/src/components/InputField.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst InputField = props => {\n  const [field, {\n    error\n  }] = Object(formik__WEBPACK_IMPORTED_MODULE_2__[\"useField\"])(props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"FormControl\"], {\n    isRequired: true,\n    isInvalid: !!error,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"FormLabel\"], {\n      htmlFor: field.name,\n      children: props.label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], _objectSpread(_objectSpread({}, field), {}, {\n      type: props.type,\n      id: field.name,\n      placeholder: props.placeholder\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined), error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"FormErrorMessage\"], {\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 16\n    }, undefined) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbnB1dEZpZWxkLnRzeD9jOTJkIl0sIm5hbWVzIjpbIklucHV0RmllbGQiLCJwcm9wcyIsImZpZWxkIiwiZXJyb3IiLCJ1c2VGaWVsZCIsIm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQVFPLE1BQU1BLFVBQXFDLEdBQUlDLEtBQUQsSUFBVztBQUM5RCxRQUFNLENBQUNDLEtBQUQsRUFBUTtBQUFFQztBQUFGLEdBQVIsSUFBcUJDLHVEQUFRLENBQUNILEtBQUQsQ0FBbkM7QUFFQSxzQkFDRSxxRUFBQyw0REFBRDtBQUFhLGNBQVUsRUFBRSxJQUF6QjtBQUErQixhQUFTLEVBQUUsQ0FBQyxDQUFDRSxLQUE1QztBQUFBLDRCQUNFLHFFQUFDLDBEQUFEO0FBQVcsYUFBTyxFQUFFRCxLQUFLLENBQUNHLElBQTFCO0FBQUEsZ0JBQWlDSixLQUFLLENBQUNLO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxzREFBRCxrQ0FBV0osS0FBWDtBQUFrQixVQUFJLEVBQUVELEtBQUssQ0FBQ00sSUFBOUI7QUFBb0MsUUFBRSxFQUFFTCxLQUFLLENBQUNHLElBQTlDO0FBQW9ELGlCQUFXLEVBQUVKLEtBQUssQ0FBQ087QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdHTCxLQUFLLGdCQUFHLHFFQUFDLGlFQUFEO0FBQUEsZ0JBQW1CQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFILEdBQWtELElBSDFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0FWTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0lucHV0RmllbGQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1FcnJvck1lc3NhZ2UsXG4gIEZvcm1MYWJlbCxcbiAgSW5wdXQsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCBSZWFjdCwgeyBJbnB1dEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgSW5wdXRGaWVsZFByb3BzID0gSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiAmIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IElucHV0RmllbGQ6IFJlYWN0LkZDPElucHV0RmllbGRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2ZpZWxkLCB7IGVycm9yIH1dID0gdXNlRmllbGQocHJvcHMpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250cm9sIGlzUmVxdWlyZWQ9e3RydWV9IGlzSW52YWxpZD17ISFlcnJvcn0+XG4gICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9e2ZpZWxkLm5hbWV9Pntwcm9wcy5sYWJlbH08L0Zvcm1MYWJlbD5cbiAgICAgIDxJbnB1dCB7Li4uZmllbGR9IHR5cGU9e3Byb3BzLnR5cGV9IGlkPXtmaWVsZC5uYW1lfSBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9IC8+XG4gICAgICB7ZXJyb3IgPyA8Rm9ybUVycm9yTWVzc2FnZT57ZXJyb3J9PC9Gb3JtRXJyb3JNZXNzYWdlPiA6IG51bGx9XG4gICAgPC9Gb3JtQ29udHJvbD5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/InputField.tsx\n");

/***/ }),

/***/ "./src/components/Wrapper.tsx":
/*!************************************!*\
  !*** ./src/components/Wrapper.tsx ***!
  \************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/kevin/Documents/RedditClone/client/src/components/Wrapper.tsx\";\n\nconst Wrapper = ({\n  children,\n  variant = \"regular\"\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    mt: 10,\n    mx: \"auto\",\n    maxW: variant === \"regular\" ? \"800px\" : \"400px\",\n    w: \"100%\",\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XcmFwcGVyLnRzeD9iODdiIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJjaGlsZHJlbiIsInZhcmlhbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFPTyxNQUFNQSxPQUErQixHQUFHLENBQUM7QUFDOUNDLFVBRDhDO0FBRTlDQyxTQUFPLEdBQUc7QUFGb0MsQ0FBRCxLQUd6QztBQUNKLHNCQUNFLHFFQUFDLG9EQUFEO0FBQ0UsTUFBRSxFQUFFLEVBRE47QUFFRSxNQUFFLEVBQUMsTUFGTDtBQUdFLFFBQUksRUFBRUEsT0FBTyxLQUFLLFNBQVosR0FBd0IsT0FBeEIsR0FBa0MsT0FIMUM7QUFJRSxLQUFDLEVBQUMsTUFKSjtBQUFBLGNBTUdEO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUQsQ0FkTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1dyYXBwZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XG4gIHZhcmlhbnQ/OiBcInNtYWxsXCIgfCBcInJlZ3VsYXJcIjtcbiAgLy8/IG1lYW5zIG9wdGlvbmFsXG59XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyOiBSZWFjdC5GQzxXcmFwcGVyUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHZhcmlhbnQgPSBcInJlZ3VsYXJcIixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBtdD17MTB9XG4gICAgICBteD1cImF1dG9cIlxuICAgICAgbWF4Vz17dmFyaWFudCA9PT0gXCJyZWd1bGFyXCIgPyBcIjgwMHB4XCIgOiBcIjQwMHB4XCJ9XG4gICAgICB3PVwiMTAwJVwiXG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQm94PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Wrapper.tsx\n");

/***/ }),

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-urql */ \"next-urql\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_urql__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! urql */ \"urql\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/InputField */ \"./src/components/InputField.tsx\");\n/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Wrapper */ \"./src/components/Wrapper.tsx\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n\nvar _jsxFileName = \"/home/kevin/Documents/RedditClone/client/src/pages/register.tsx\";\n\n\n\n\n\n\n\n\n\nconst REGISTER_MUTATION = `\nmutation Register($username: String!, $email: String!, $password: String!) {\n  register(options: { username: $username, email: $email, password: $password }) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      username\n    }\n  }\n}\n`;\n\nconst Register = ({}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  const [, register] = Object(urql__WEBPACK_IMPORTED_MODULE_6__[\"useMutation\"])(REGISTER_MUTATION);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Wrapper__WEBPACK_IMPORTED_MODULE_8__[\"Wrapper\"], {\n    variant: \"small\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_2__[\"Formik\"], {\n      initialValues: {\n        username: \"\",\n        email: \"\",\n        password: \"\"\n      },\n      onSubmit: async (values, {\n        setErrors\n      }) => {\n        var _response$data, _response$data2;\n\n        const response = await register(values);\n\n        if ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.register.errors) {\n          const errorMap = {};\n          response.data.register.errors.forEach(({\n            field,\n            message\n          }) => {\n            errorMap[field] = message;\n          });\n          setErrors(errorMap);\n        } else if ((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.register.user) {\n          router.push(\"/\");\n        }\n      },\n      children: ({\n        isSubmitting\n      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_InputField__WEBPACK_IMPORTED_MODULE_7__[\"InputField\"], {\n          name: \"email\",\n          placeholder: \"email\",\n          label: \"Email\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          mt: 4,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_InputField__WEBPACK_IMPORTED_MODULE_7__[\"InputField\"], {\n            name: \"username\",\n            placeholder: \"username\",\n            label: \"Username\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          mt: 4,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_InputField__WEBPACK_IMPORTED_MODULE_7__[\"InputField\"], {\n            name: \"password\",\n            placeholder: \"password\",\n            label: \"Password\",\n            type: \"password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          mt: 4,\n          type: \"submit\",\n          colorScheme: \"teal\",\n          isLoading: isSubmitting,\n          children: \"Sign Up\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_3__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_9__[\"createUrqlClient\"])(Register));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4P2E2N2YiXSwibmFtZXMiOlsiUkVHSVNURVJfTVVUQVRJT04iLCJSZWdpc3RlciIsInJvdXRlciIsInVzZVJvdXRlciIsInJlZ2lzdGVyIiwidXNlTXV0YXRpb24iLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJzZXRFcnJvcnMiLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvcnMiLCJlcnJvck1hcCIsImZvckVhY2giLCJmaWVsZCIsIm1lc3NhZ2UiLCJ1c2VyIiwicHVzaCIsImlzU3VibWl0dGluZyIsIndpdGhVcnFsQ2xpZW50IiwiY3JlYXRlVXJxbENsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxNQUFNQSxpQkFBaUIsR0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWJBOztBQWVBLE1BQU1DLFFBQWlDLEdBQUcsQ0FBQyxFQUFELEtBQVE7QUFDaEQsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU0sR0FBR0MsUUFBSCxJQUFlQyx3REFBVyxDQUFDTCxpQkFBRCxDQUFoQztBQUVBLHNCQUNFLHFFQUFDLDJEQUFEO0FBQVMsV0FBTyxFQUFDLE9BQWpCO0FBQUEsMkJBQ0UscUVBQUMsNkNBQUQ7QUFDRSxtQkFBYSxFQUFFO0FBQUVNLGdCQUFRLEVBQUUsRUFBWjtBQUFnQkMsYUFBSyxFQUFFLEVBQXZCO0FBQTJCQyxnQkFBUSxFQUFFO0FBQXJDLE9BRGpCO0FBRUUsY0FBUSxFQUFFLE9BQU9DLE1BQVAsRUFBZTtBQUFFQztBQUFGLE9BQWYsS0FBaUM7QUFBQTs7QUFDekMsY0FBTUMsUUFBUSxHQUFHLE1BQU1QLFFBQVEsQ0FBQ0ssTUFBRCxDQUEvQjs7QUFDQSw4QkFBSUUsUUFBUSxDQUFDQyxJQUFiLG1EQUFJLGVBQWVSLFFBQWYsQ0FBd0JTLE1BQTVCLEVBQW9DO0FBQ2xDLGdCQUFNQyxRQUFnQyxHQUFHLEVBQXpDO0FBRUFILGtCQUFRLENBQUNDLElBQVQsQ0FBY1IsUUFBZCxDQUF1QlMsTUFBdkIsQ0FBOEJFLE9BQTlCLENBQXNDLENBQUM7QUFBRUMsaUJBQUY7QUFBU0M7QUFBVCxXQUFELEtBQXdCO0FBQzVESCxvQkFBUSxDQUFDRSxLQUFELENBQVIsR0FBa0JDLE9BQWxCO0FBQ0QsV0FGRDtBQUlBUCxtQkFBUyxDQUFDSSxRQUFELENBQVQ7QUFDRCxTQVJELE1BUU8sdUJBQUlILFFBQVEsQ0FBQ0MsSUFBYixvREFBSSxnQkFBZVIsUUFBZixDQUF3QmMsSUFBNUIsRUFBa0M7QUFDdkNoQixnQkFBTSxDQUFDaUIsSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLE9BZkg7QUFBQSxnQkFpQkcsQ0FBQztBQUFFQztBQUFGLE9BQUQsa0JBQ0MscUVBQUMsMkNBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxpRUFBRDtBQUNFLGNBQUksRUFBQyxPQURQO0FBRUUscUJBQVcsRUFBQyxPQUZkO0FBR0UsZUFBSyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU1FLHFFQUFDLG9EQUFEO0FBQUssWUFBRSxFQUFFLENBQVQ7QUFBQSxpQ0FDRSxxRUFBQyxpRUFBRDtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLHVCQUFXLEVBQUMsVUFGZDtBQUdFLGlCQUFLLEVBQUM7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQWFFLHFFQUFDLG9EQUFEO0FBQUssWUFBRSxFQUFFLENBQVQ7QUFBQSxpQ0FDRSxxRUFBQyxpRUFBRDtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLHVCQUFXLEVBQUMsVUFGZDtBQUdFLGlCQUFLLEVBQUMsVUFIUjtBQUlFLGdCQUFJLEVBQUM7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiRixlQXFCRSxxRUFBQyx1REFBRDtBQUNFLFlBQUUsRUFBRSxDQUROO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxxQkFBVyxFQUFDLE1BSGQ7QUFJRSxtQkFBUyxFQUFFQSxZQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXNERCxDQTFERDs7QUE0RGVDLCtIQUFjLENBQUNDLHdFQUFELENBQWQsQ0FBaUNyQixRQUFqQyxDQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gXCJuZXh0LXVycWxcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwidXJxbFwiO1xuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0lucHV0RmllbGRcIjtcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9XcmFwcGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVVcnFsQ2xpZW50IH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZVVycWxDbGllbnRcIjtcblxuaW50ZXJmYWNlIHJlZ2lzdGVyUHJvcHMge31cblxuY29uc3QgUkVHSVNURVJfTVVUQVRJT04gPSBgXG5tdXRhdGlvbiBSZWdpc3RlcigkdXNlcm5hbWU6IFN0cmluZyEsICRlbWFpbDogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIHJlZ2lzdGVyKG9wdGlvbnM6IHsgdXNlcm5hbWU6ICR1c2VybmFtZSwgZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCB9KSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgaWRcbiAgICAgIHVzZXJuYW1lXG4gICAgfVxuICB9XG59XG5gO1xuXG5jb25zdCBSZWdpc3RlcjogUmVhY3QuRkM8cmVnaXN0ZXJQcm9wcz4gPSAoe30pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFssIHJlZ2lzdGVyXSA9IHVzZU11dGF0aW9uKFJFR0lTVEVSX01VVEFUSU9OKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIHZhcmlhbnQ9XCJzbWFsbFwiPlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHVzZXJuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfX1cbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHsgc2V0RXJyb3JzIH0pID0+IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlZ2lzdGVyKHZhbHVlcyk7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGE/LnJlZ2lzdGVyLmVycm9ycykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5yZWdpc3Rlci5lcnJvcnMuZm9yRWFjaCgoeyBmaWVsZCwgbWVzc2FnZSB9KSA9PiB7XG4gICAgICAgICAgICAgIGVycm9yTWFwW2ZpZWxkXSA9IG1lc3NhZ2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0RXJyb3JzKGVycm9yTWFwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGE/LnJlZ2lzdGVyLnVzZXIpIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxuICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCb3ggbXQ9ezR9PlxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3ggbXQ9ezR9PlxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBtdD17NH1cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwidGVhbFwiXG4gICAgICAgICAgICAgIGlzTG9hZGluZz17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjcmVhdGVVcnFsQ2xpZW50KShSZWdpc3Rlcik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ }),

/***/ "./src/utils/createUrqlClient.ts":
/*!***************************************!*\
  !*** ./src/utils/createUrqlClient.ts ***!
  \***************************************/
/*! exports provided: createUrqlClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUrqlClient\", function() { return createUrqlClient; });\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"@urql/exchange-graphcache\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! urql */ \"urql\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urql__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst LOGIN_MUTATION = `\nmutation Login($username: String!, $password: String!) {\n  login(options: { username: $username, password: $password}) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      username\n    }\n  }\n}\n`;\nconst REGISTER_MUTATION = `\nmutation Register($username: String!, $password: String!) {\n  register(options: { username: $username, password: $password}) {\n    errors {\n      field\n      message\n    }\n    user {\n      id\n      username\n    }\n  }\n}\n`;\nconst ME_QUERY = urql__WEBPACK_IMPORTED_MODULE_1__[\"gql\"]`\n  query Me {\n    me {\n      id\n      username\n    }\n  }\n`;\nconst createUrqlClient = ssrExchange => ({\n  url: \"http://localhost:4000/graphql\",\n  fetchOptions: {\n    credentials: \"include\"\n  },\n  exchanges: [urql__WEBPACK_IMPORTED_MODULE_1__[\"dedupExchange\"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_0__[\"cacheExchange\"])({\n    updates: {\n      Mutation: {\n        logout: (result, args, cache, info) => {\n          cache.updateQuery({\n            query: ME_QUERY\n          }, data => {\n            return {\n              me: null\n            };\n          });\n        },\n        login: (result, args, cache, info) => {\n          cache.updateQuery({\n            query: ME_QUERY\n          }, data => {\n            if (result.login.errors) {\n              return {\n                me: null\n              };\n            } else {\n              return {\n                me: result.login.user\n              };\n            }\n          });\n        },\n        register: (result, args, cache, info) => {\n          cache.updateQuery({\n            query: ME_QUERY\n          }, data => {\n            if (result.register.errors) {\n              return {\n                me: null\n              };\n            } else {\n              return {\n                me: result.register.user\n              };\n            }\n          });\n        }\n      }\n    }\n  }), ssrExchange, urql__WEBPACK_IMPORTED_MODULE_1__[\"fetchExchange\"]]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY3JlYXRlVXJxbENsaWVudC50cz9mNGI2Il0sIm5hbWVzIjpbIkxPR0lOX01VVEFUSU9OIiwiUkVHSVNURVJfTVVUQVRJT04iLCJNRV9RVUVSWSIsImdxbCIsImNyZWF0ZVVycWxDbGllbnQiLCJzc3JFeGNoYW5nZSIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiZXhjaGFuZ2VzIiwiZGVkdXBFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJ1cGRhdGVzIiwiTXV0YXRpb24iLCJsb2dvdXQiLCJyZXN1bHQiLCJhcmdzIiwiY2FjaGUiLCJpbmZvIiwidXBkYXRlUXVlcnkiLCJxdWVyeSIsImRhdGEiLCJtZSIsImxvZ2luIiwiZXJyb3JzIiwidXNlciIsInJlZ2lzdGVyIiwiZmV0Y2hFeGNoYW5nZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWJBO0FBZUEsTUFBTUMsaUJBQWlCLEdBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FiQTtBQWVBLE1BQU1DLFFBQVEsR0FBR0Msd0NBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQQTtBQVNPLE1BQU1DLGdCQUFnQixHQUFJQyxXQUFELEtBQXVCO0FBQ3JEQyxLQUFHLEVBQUUsK0JBRGdEO0FBRXJEQyxjQUFZLEVBQUU7QUFDWkMsZUFBVyxFQUFFO0FBREQsR0FGdUM7QUFLckRDLFdBQVMsRUFBRSxDQUNUQyxrREFEUyxFQUVUQywrRUFBYSxDQUFDO0FBQ1pDLFdBQU8sRUFBRTtBQUNQQyxjQUFRLEVBQUU7QUFDUkMsY0FBTSxFQUFFLENBQUNDLE1BQUQsRUFBU0MsSUFBVCxFQUFlQyxLQUFmLEVBQXNCQyxJQUF0QixLQUErQjtBQUNyQ0QsZUFBSyxDQUFDRSxXQUFOLENBQWtCO0FBQUVDLGlCQUFLLEVBQUVsQjtBQUFULFdBQWxCLEVBQXdDbUIsSUFBRCxJQUFVO0FBQy9DLG1CQUFPO0FBQ0xDLGdCQUFFLEVBQUU7QUFEQyxhQUFQO0FBR0QsV0FKRDtBQUtELFNBUE87QUFRUkMsYUFBSyxFQUFFLENBQUNSLE1BQUQsRUFBU0MsSUFBVCxFQUFlQyxLQUFmLEVBQXNCQyxJQUF0QixLQUErQjtBQUNwQ0QsZUFBSyxDQUFDRSxXQUFOLENBQWtCO0FBQUVDLGlCQUFLLEVBQUVsQjtBQUFULFdBQWxCLEVBQXdDbUIsSUFBRCxJQUFVO0FBQy9DLGdCQUFJTixNQUFNLENBQUNRLEtBQVAsQ0FBYUMsTUFBakIsRUFBeUI7QUFDdkIscUJBQU87QUFDTEYsa0JBQUUsRUFBRTtBQURDLGVBQVA7QUFHRCxhQUpELE1BSU87QUFDTCxxQkFBTztBQUNMQSxrQkFBRSxFQUFFUCxNQUFNLENBQUNRLEtBQVAsQ0FBYUU7QUFEWixlQUFQO0FBR0Q7QUFDRixXQVZEO0FBV0QsU0FwQk87QUFxQlJDLGdCQUFRLEVBQUUsQ0FBQ1gsTUFBRCxFQUFTQyxJQUFULEVBQWVDLEtBQWYsRUFBc0JDLElBQXRCLEtBQStCO0FBQ3ZDRCxlQUFLLENBQUNFLFdBQU4sQ0FBa0I7QUFBRUMsaUJBQUssRUFBRWxCO0FBQVQsV0FBbEIsRUFBd0NtQixJQUFELElBQVU7QUFDL0MsZ0JBQUlOLE1BQU0sQ0FBQ1csUUFBUCxDQUFnQkYsTUFBcEIsRUFBNEI7QUFDMUIscUJBQU87QUFDTEYsa0JBQUUsRUFBRTtBQURDLGVBQVA7QUFHRCxhQUpELE1BSU87QUFDTCxxQkFBTztBQUNMQSxrQkFBRSxFQUFFUCxNQUFNLENBQUNXLFFBQVAsQ0FBZ0JEO0FBRGYsZUFBUDtBQUdEO0FBQ0YsV0FWRDtBQVdEO0FBakNPO0FBREg7QUFERyxHQUFELENBRkosRUF5Q1RwQixXQXpDUyxFQTBDVHNCLGtEQTFDUztBQUwwQyxDQUF2QixDQUF6QiIsImZpbGUiOiIuL3NyYy91dGlscy9jcmVhdGVVcnFsQ2xpZW50LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSB9IGZyb20gXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCI7XG5pbXBvcnQgeyBkZWR1cEV4Y2hhbmdlLCBmZXRjaEV4Y2hhbmdlLCBncWwgfSBmcm9tIFwidXJxbFwiO1xuXG5jb25zdCBMT0dJTl9NVVRBVElPTiA9IGBcbm11dGF0aW9uIExvZ2luKCR1c2VybmFtZTogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGxvZ2luKG9wdGlvbnM6IHsgdXNlcm5hbWU6ICR1c2VybmFtZSwgcGFzc3dvcmQ6ICRwYXNzd29yZH0pIHtcbiAgICBlcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gICAgdXNlciB7XG4gICAgICBpZFxuICAgICAgdXNlcm5hbWVcbiAgICB9XG4gIH1cbn1cbmA7XG5cbmNvbnN0IFJFR0lTVEVSX01VVEFUSU9OID0gYFxubXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgcmVnaXN0ZXIob3B0aW9uczogeyB1c2VybmFtZTogJHVzZXJuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkfSkge1xuICAgIGVycm9ycyB7XG4gICAgICBmaWVsZFxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgICB1c2VyIHtcbiAgICAgIGlkXG4gICAgICB1c2VybmFtZVxuICAgIH1cbiAgfVxufVxuYDtcblxuY29uc3QgTUVfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IE1lIHtcbiAgICBtZSB7XG4gICAgICBpZFxuICAgICAgdXNlcm5hbWVcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVcnFsQ2xpZW50ID0gKHNzckV4Y2hhbmdlOiBhbnkpID0+ICh7XG4gIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiLFxuICBmZXRjaE9wdGlvbnM6IHtcbiAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgYXMgY29uc3QsXG4gIH0sXG4gIGV4Y2hhbmdlczogW1xuICAgIGRlZHVwRXhjaGFuZ2UsXG4gICAgY2FjaGVFeGNoYW5nZSh7XG4gICAgICB1cGRhdGVzOiB7XG4gICAgICAgIE11dGF0aW9uOiB7XG4gICAgICAgICAgbG9nb3V0OiAocmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgY2FjaGUudXBkYXRlUXVlcnkoeyBxdWVyeTogTUVfUVVFUlkgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtZTogbnVsbCxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbG9naW46IChyZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBjYWNoZS51cGRhdGVRdWVyeSh7IHF1ZXJ5OiBNRV9RVUVSWSB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBtZTogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LmxvZ2luLnVzZXIsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWdpc3RlcjogKHJlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICAgIGNhY2hlLnVwZGF0ZVF1ZXJ5KHsgcXVlcnk6IE1FX1FVRVJZIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQucmVnaXN0ZXIuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIG1lOiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQucmVnaXN0ZXIudXNlcixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBzc3JFeGNoYW5nZSxcbiAgICBmZXRjaEV4Y2hhbmdlLFxuICBdLFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/createUrqlClient.ts\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "@urql/exchange-graphcache":
/*!********************************************!*\
  !*** external "@urql/exchange-graphcache" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@urql/exchange-graphcache\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCI/NGRmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@urql/exchange-graphcache\n");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIj83MGQ2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZvcm1pay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///formik\n");

/***/ }),

/***/ "next-urql":
/*!****************************!*\
  !*** external "next-urql" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-urql\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXVycWxcIj84OTdmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtdXJxbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdXJxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-urql\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "urql":
/*!***********************!*\
  !*** external "urql" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"urql\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cnFsXCI/YTY2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1cnFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///urql\n");

/***/ })

/******/ });