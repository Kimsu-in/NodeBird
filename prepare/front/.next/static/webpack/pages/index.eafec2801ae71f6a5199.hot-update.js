webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n  _jsxFileName = \"/home/kimsuin/study/react/inflearn/next/nodeBird/prepare/front/components/PostCardContent.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar PostCardContent = function PostCardContent(_ref) {\n  var postData = _ref.postData;\n  // 첫 번째 게시글 #해시태그 #익스프레스\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, postData.split(/(#[^\\s#]+)/g).map(function (v) {\n    // 정규표현식 https://regexr.com/ 에서 생성 및 테스트 가능\n    if (v.match(/(#[^\\s#]+)/)) {\n      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/hashtag/\".concat(v.slice(1)),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 15\n        }\n      }, v));\n    }\n  }));\n};\n_c = PostCardContent;\nPostCardContent.propTypes = {\n  postData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCardContent);\nvar _c;\n$RefreshReg$(_c, \"PostCardContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZENvbnRlbnQuanM/ZDQ5NiJdLCJuYW1lcyI6WyJQb3N0Q2FyZENvbnRlbnQiLCJfcmVmIiwicG9zdERhdGEiLCJfX2pzeCIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJzcGxpdCIsIm1hcCIsInYiLCJtYXRjaCIsIkxpbmsiLCJocmVmIiwiY29uY2F0Iiwic2xpY2UiLCJfYyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ047QUFFN0IsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFBQyxJQUFBLEVBQXFCO0VBQUEsSUFBZkMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7RUFDakM7RUFDQSxPQUNFQyxLQUFBO0lBQUFDLE1BQUEsRUFBQUMsS0FBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ0dSLFFBQVEsQ0FBQ1MsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDQyxHQUFHLENBQUMsVUFBQ0MsQ0FBQyxFQUFLO0lBQ3hDO0lBQ0EsSUFBSUEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7TUFDekIsT0FDRVgsS0FBQSxDQUFDWSxnREFBSTtRQUFDQyxJQUFJLGNBQUFDLE1BQUEsQ0FBY0osQ0FBQyxDQUFDSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUc7UUFBQWQsTUFBQSxFQUFBQyxLQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsR0FDbkNQLEtBQUE7UUFBQUMsTUFBQSxFQUFBQyxLQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsR0FBSUcsQ0FBSyxDQUNMLENBQUM7SUFFWDtFQUNGLENBQUMsQ0FDRSxDQUFDO0FBRVYsQ0FBQztBQUFDTSxFQUFBLEdBaEJJbkIsZUFBZTtBQWtCckJBLGVBQWUsQ0FBQ29CLFNBQVMsR0FBRztFQUMxQmxCLFFBQVEsRUFBRW1CLGlEQUFTLENBQUNDLE1BQU0sQ0FBQ0M7QUFDN0IsQ0FBQztBQUVjdkIsOEVBQWUsRUFBQztBQUFBLElBQUFtQixFQUFBO0FBQUFLLFlBQUEsQ0FBQUwsRUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdENhcmRDb250ZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBQb3N0Q2FyZENvbnRlbnQgPSAoeyBwb3N0RGF0YSB9KSA9PiB7XG4gIC8vIOyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cG9zdERhdGEuc3BsaXQoLygjW15cXHMjXSspL2cpLm1hcCgodikgPT4ge1xuICAgICAgICAvLyDsoJXqt5ztkZztmITsi50gaHR0cHM6Ly9yZWdleHIuY29tLyDsl5DshJwg7IOd7ISxIOuwjyDthYzsiqTtirgg6rCA64qlXG4gICAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzI10rKS8pKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3Yuc2xpY2UoMSl9YH0+XG4gICAgICAgICAgICAgIDxhPnt2fTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBvc3RDYXJkQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIHBvc3REYXRhOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZENvbnRlbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostCardContent.js\n");

/***/ })

})