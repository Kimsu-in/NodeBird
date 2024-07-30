webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n  _jsxFileName = \"/home/kimsuin/study/react/inflearn/next/nodeBird/prepare/front/components/PostCardContent.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar PostCardContent = function PostCardContent(_ref) {\n  var postData = _ref.postData;\n  // 첫 번째 게시글 #해시태그 #익스프레스\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, postData.split(/(#[^\\s#]+)/g).map(function (v) {\n    // 정규표현식 https://regexr.com/ 에서 생성 및 테스트 가능\n    if (v.text(/(#[^\\s#]+)/)) {\n      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/hashtag/\".concat(v.slice(1)),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 15\n        }\n      }, v));\n    }\n  }));\n};\n_c = PostCardContent;\nPostCardContent.propTypes = {\n  postData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCardContent);\nvar _c;\n$RefreshReg$(_c, \"PostCardContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZENvbnRlbnQuanM/ZDQ5NiJdLCJuYW1lcyI6WyJQb3N0Q2FyZENvbnRlbnQiLCJfcmVmIiwicG9zdERhdGEiLCJfX2pzeCIsIl9fc2VsZiIsIl90aGlzIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJzcGxpdCIsIm1hcCIsInYiLCJ0ZXh0IiwiTGluayIsImhyZWYiLCJjb25jYXQiLCJzbGljZSIsIl9jIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUM7QUFDTjtBQUU3QixJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUFDLElBQUEsRUFBcUI7RUFBQSxJQUFmQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUNqQztFQUNBLE9BQ0VDLEtBQUE7SUFBQUMsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDR1IsUUFBUSxDQUFDUyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUNDLEdBQUcsQ0FBQyxVQUFDQyxDQUFDLEVBQUs7SUFDeEM7SUFDQSxJQUFJQSxDQUFDLENBQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtNQUN4QixPQUNFWCxLQUFBLENBQUNZLGdEQUFJO1FBQUNDLElBQUksY0FBQUMsTUFBQSxDQUFjSixDQUFDLENBQUNLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBRztRQUFBZCxNQUFBLEVBQUFDLEtBQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUNuQ1AsS0FBQTtRQUFBQyxNQUFBLEVBQUFDLEtBQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUFJRyxDQUFLLENBQ0wsQ0FBQztJQUVYO0VBQ0YsQ0FBQyxDQUNFLENBQUM7QUFFVixDQUFDO0FBQUNNLEVBQUEsR0FoQkluQixlQUFlO0FBa0JyQkEsZUFBZSxDQUFDb0IsU0FBUyxHQUFHO0VBQzFCbEIsUUFBUSxFQUFFbUIsaURBQVMsQ0FBQ0MsTUFBTSxDQUFDQztBQUM3QixDQUFDO0FBRWN2Qiw4RUFBZSxFQUFDO0FBQUEsSUFBQW1CLEVBQUE7QUFBQUssWUFBQSxDQUFBTCxFQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qb3N0Q2FyZENvbnRlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IFBvc3RDYXJkQ29udGVudCA9ICh7IHBvc3REYXRhIH0pID0+IHtcbiAgLy8g7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtwb3N0RGF0YS5zcGxpdCgvKCNbXlxccyNdKykvZykubWFwKCh2KSA9PiB7XG4gICAgICAgIC8vIOygleq3nO2RnO2YhOyLnSBodHRwczovL3JlZ2V4ci5jb20vIOyXkOyEnCDsg53shLEg67CPIO2FjOyKpO2KuCDqsIDriqVcbiAgICAgICAgaWYgKHYudGV4dCgvKCNbXlxccyNdKykvKSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt2LnNsaWNlKDEpfWB9PlxuICAgICAgICAgICAgICA8YT57dn08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Qb3N0Q2FyZENvbnRlbnQucHJvcFR5cGVzID0ge1xuICBwb3N0RGF0YTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmRDb250ZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostCardContent.js\n");

/***/ })

})