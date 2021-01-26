webpackHotUpdate_N_E("pages/posts",{

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"./node_modules/gray-matter/index.js\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/jennyly/repos/site/pages/posts.js\";\n\n\n\n\nfunction Blog(_ref) {\n  var _this = this;\n\n  var data = _ref.data,\n      title = _ref.title,\n      description = _ref.description;\n  var RealData = data.map(function (blog) {\n    return gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(blog);\n  });\n  var ListItems = RealData.map(function (listItem) {\n    return listItem.data;\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: \"posts-list\",\n        children: ListItems.map(function (blog, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              href: \"/posts/\".concat(blog.slug),\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                className: \"posts-title\",\n                children: blog.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 16,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 15,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: blog.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 18,\n              columnNumber: 17\n            }, _this)]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 4\n    }, this)\n  }, void 0, false);\n}\n\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanM/NmFkOSJdLCJuYW1lcyI6WyJCbG9nIiwiZGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJSZWFsRGF0YSIsIm1hcCIsImJsb2ciLCJtYXR0ZXIiLCJMaXN0SXRlbXMiLCJsaXN0SXRlbSIsImkiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsT0FBNEM7QUFBQTs7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTtBQUMxQyxNQUFNQyxRQUFRLEdBQUdILElBQUksQ0FBQ0ksR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSxXQUFVQyxrREFBTSxDQUFDRCxJQUFELENBQWhCO0FBQUEsR0FBVCxDQUFqQjtBQUNBLE1BQU1FLFNBQVMsR0FBR0osUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0ksUUFBRDtBQUFBLFdBQWNBLFFBQVEsQ0FBQ1IsSUFBdkI7QUFBQSxHQUFiLENBQWxCO0FBRUQsc0JBQ0M7QUFBQSwyQkFDQztBQUFBLDZCQUNLO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUEsa0JBQ0dPLFNBQVMsQ0FBQ0gsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0ksQ0FBUDtBQUFBLDhCQUNiO0FBQUEsb0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxtQkFBWUosSUFBSSxDQUFDSyxJQUFqQixDQUFWO0FBQUEscUNBQ0U7QUFBSSx5QkFBUyxFQUFDLGFBQWQ7QUFBQSwwQkFBNkJMLElBQUksQ0FBQ0o7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJSTtBQUFBLHdCQUFJSSxJQUFJLENBQUNIO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBLGFBQVNPLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYTtBQUFBLFNBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUREO0FBZ0JBOztLQXBCUVYsSTs7QUE2Q01BLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gQmxvZyh7IGRhdGEsIHRpdGxlLCBkZXNjcmlwdGlvbiB9KSB7XG4gIGNvbnN0IFJlYWxEYXRhID0gZGF0YS5tYXAoKGJsb2cpID0+IG1hdHRlcihibG9nKSk7XG4gIGNvbnN0IExpc3RJdGVtcyA9IFJlYWxEYXRhLm1hcCgobGlzdEl0ZW0pID0+IGxpc3RJdGVtLmRhdGEpO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJwb3N0cy1saXN0XCI+XG4gICAgICAgICAge0xpc3RJdGVtcy5tYXAoKGJsb2csIGkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7YmxvZy5zbHVnfWB9PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwb3N0cy10aXRsZVwiPntibG9nLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8cD57YmxvZy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcblx0Y29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhgJHtwcm9jZXNzLmN3ZCgpfS9jb250ZW50YCwgXCJ1dGYtOFwiKTtcblxuXHRjb25zdCBibG9ncyA9IGZpbGVzLmZpbHRlcigoZm4pID0+IGZuLmVuZHNXaXRoKFwiLm1kXCIpKTtcblxuXHRjb25zdCBkYXRhID0gYmxvZ3MubWFwKChibG9nKSA9PiB7XG5cdFx0Y29uc3QgcGF0aD1gJHtwcm9jZXNzLmN3ZCgpfS9jb250ZW50LyR7YmxvZ31gO1xuXHRcdGNvbnN0IHJhd0NvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwge1xuXHRcdFx0ZW5jb2Rpbmc6IFwidXRmLThcIixcblx0XHR9KTtcblx0XHRyZXR1cm4gcmF3Q29udGVudDtcblx0fSlcblxuXHRyZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgdGl0bGU6IFwiSmVubnkgTHlcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcInBlcnNvbmFsIGJsb2dcIixcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts.js\n");

/***/ })

})