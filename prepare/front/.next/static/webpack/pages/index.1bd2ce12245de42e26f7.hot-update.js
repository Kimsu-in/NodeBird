webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"수인\"\n    },\n    content: \"첫 번째 게시글 #해시태그 # 익스프레스\",\n    Images: [{\n      src: \"https://loremflickr.com/1280/720\"\n    }, {\n      src: \"https://placekitten.com/640/360\"\n    }, {\n      src: \"https://placebear.com/1280/720\"\n    }],\n    Comments: [{\n      User: {\n        nickname: \"nero\"\n      },\n      content: \"배가 고파요!\"\n    }, {\n      User: {\n        nickname: \"hero\"\n      },\n      content: \"집에 가고싶어요~\"\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nvar ADD_POST = \"ADD_POST\";\nvar addPost = {\n  type: ADD_POST\n};\nvar dummyPost = {\n  id: 2,\n  content: \"더미데이터입니다.\",\n  User: {\n    id: 1,\n    nickname: \"suin\"\n  },\n  Images: [],\n  Comments: []\n};\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        // dummyPost를 앞에 붙여야 게시물 제일 앞에 올라감.\n        postAdded: true\n      });\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJfb2JqZWN0U3ByZWFkIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7RUFDMUJDLFNBQVMsRUFBRSxDQUNUO0lBQ0VDLEVBQUUsRUFBRSxDQUFDO0lBQ0xDLElBQUksRUFBRTtNQUNKRCxFQUFFLEVBQUUsQ0FBQztNQUNMRSxRQUFRLEVBQUU7SUFDWixDQUFDO0lBQ0RDLE9BQU8sRUFBRSx3QkFBd0I7SUFDakNDLE1BQU0sRUFBRSxDQUNOO01BQ0VDLEdBQUcsRUFBRTtJQUNQLENBQUMsRUFDRDtNQUNFQSxHQUFHLEVBQUU7SUFDUCxDQUFDLEVBQ0Q7TUFDRUEsR0FBRyxFQUFFO0lBQ1AsQ0FBQyxDQUNGO0lBQ0RDLFFBQVEsRUFBRSxDQUNSO01BQ0VMLElBQUksRUFBRTtRQUNKQyxRQUFRLEVBQUU7TUFDWixDQUFDO01BQ0RDLE9BQU8sRUFBRTtJQUNYLENBQUMsRUFDRDtNQUNFRixJQUFJLEVBQUU7UUFDSkMsUUFBUSxFQUFFO01BQ1osQ0FBQztNQUNEQyxPQUFPLEVBQUU7SUFDWCxDQUFDO0VBRUwsQ0FBQyxDQUNGO0VBQ0RJLFVBQVUsRUFBRSxFQUFFO0VBQ2RDLFNBQVMsRUFBRTtBQUNiLENBQUM7QUFFRCxJQUFNQyxRQUFRLEdBQUcsVUFBVTtBQUNwQixJQUFNQyxPQUFPLEdBQUc7RUFDckJDLElBQUksRUFBRUY7QUFDUixDQUFDO0FBQ0QsSUFBTUcsU0FBUyxHQUFHO0VBQ2hCWixFQUFFLEVBQUUsQ0FBQztFQUNMRyxPQUFPLEVBQUUsV0FBVztFQUNwQkYsSUFBSSxFQUFFO0lBQ0pELEVBQUUsRUFBRSxDQUFDO0lBQ0xFLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDREUsTUFBTSxFQUFFLEVBQUU7RUFDVkUsUUFBUSxFQUFFO0FBQ1osQ0FBQztBQUVELElBQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQXFDO0VBQUEsSUFBakNDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdqQixZQUFZO0VBQUEsSUFBRW9CLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUMzQyxRQUFRQyxNQUFNLENBQUNQLElBQUk7SUFDakIsS0FBS0YsUUFBUTtNQUNYLE9BQUFVLGFBQUEsQ0FBQUEsYUFBQSxLQUNLTCxLQUFLO1FBQ1JmLFNBQVMsR0FBR2EsU0FBUyxFQUFBUSxNQUFBLENBQUFDLDRGQUFBLENBQUtQLEtBQUssQ0FBQ2YsU0FBUyxFQUFDO1FBQUU7UUFDNUNTLFNBQVMsRUFBRTtNQUFJO0lBRW5CO01BQ0UsT0FBT00sS0FBSztFQUNoQjtBQUNGLENBQUM7QUFFY0Qsc0VBQU8sRUFBQyIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtYWluUG9zdHM6IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIFVzZXI6IHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5pY2tuYW1lOiBcIuyImOyduFwiLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6IFwi7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAjIOydteyKpO2UhOugiOyKpFwiLFxuICAgICAgSW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9sb3JlbWZsaWNrci5jb20vMTI4MC83MjBcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogXCJodHRwczovL3BsYWNla2l0dGVuLmNvbS82NDAvMzYwXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9wbGFjZWJlYXIuY29tLzEyODAvNzIwXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgQ29tbWVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcIm5lcm9cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IFwi67Cw6rCAIOqzoO2MjOyalCFcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcImhlcm9cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IFwi7KeR7JeQIOqwgOqzoOyLtuyWtOyalH5cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgaW1hZ2VQYXRoczogW10sXG4gIHBvc3RBZGRlZDogZmFsc2UsXG59O1xuXG5jb25zdCBBRERfUE9TVCA9IFwiQUREX1BPU1RcIjtcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xuICB0eXBlOiBBRERfUE9TVCxcbn07XG5jb25zdCBkdW1teVBvc3QgPSB7XG4gIGlkOiAyLFxuICBjb250ZW50OiBcIuuNlOuvuOuNsOydtO2EsOyeheuLiOuLpC5cIixcbiAgVXNlcjoge1xuICAgIGlkOiAxLFxuICAgIG5pY2tuYW1lOiBcInN1aW5cIixcbiAgfSxcbiAgSW1hZ2VzOiBbXSxcbiAgQ29tbWVudHM6IFtdLFxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9QT1NUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSwgLy8gZHVtbXlQb3N066W8IOyVnuyXkCDrtpnsl6zslbwg6rKM7Iuc66y8IOygnOydvCDslZ7sl5Ag7Jis65286rCQLlxuICAgICAgICBwb3N0QWRkZWQ6IHRydWUsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})