webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateDummyPost\", function() { return generateDummyPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POSTS_REQUEST\", function() { return LOAD_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POSTS_SUCCESS\", function() { return LOAD_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POSTS_FAILURE\", function() { return LOAD_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_REQUEST\", function() { return REMOVE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_SUCCESS\", function() { return REMOVE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_FAILURE\", function() { return REMOVE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.legacy-esm.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ \"./node_modules/faker/index.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar initialState = {\n  mainPosts: [],\n  imagePaths: [],\n  hasMorePosts: true,\n  loadPostsLoading: false,\n  loadPostsDone: false,\n  loadPostsError: null,\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  removePostLoading: false,\n  removePostDone: false,\n  removePostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n};\nvar generateDummyPost = function generateDummyPost(number) {\n  return Array(number).fill().map(function () {\n    return {\n      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n      User: {\n        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()\n      },\n      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),\n      Images: [{\n        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n        src: \"https://loremflickr.com/1280/720\"\n      }],\n      Comments: [{\n        User: {\n          id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n          nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()\n        },\n        content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()\n      }]\n    };\n  });\n};\nvar LOAD_POSTS_REQUEST = \"LOAD_POSTS_REQUEST\";\nvar LOAD_POSTS_SUCCESS = \"LOAD_POSTS_SUCCESS\";\nvar LOAD_POSTS_FAILURE = \"LOAD_POSTS_FAILURE\";\nvar ADD_POST_REQUEST = \"ADD_POST_REQUEST\";\nvar ADD_POST_SUCCESS = \"ADD_POST_SUCCESS\";\nvar ADD_POST_FAILURE = \"ADD_POST_FAILURE\";\nvar REMOVE_POST_REQUEST = \"REMOVE_POST_REQUEST\";\nvar REMOVE_POST_SUCCESS = \"REMOVE_POST_SUCCESS\";\nvar REMOVE_POST_FAILURE = \"REMOVE_POST_FAILURE\";\nvar ADD_COMMENT_REQUEST = \"ADD_COMMENT_REQUEST\";\nvar ADD_COMMENT_SUCCESS = \"ADD_COMMENT_SUCCESS\";\nvar ADD_COMMENT_FAILURE = \"ADD_COMMENT_FAILURE\";\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\nvar dummyPost = function dummyPost(data) {\n  return {\n    id: data.id,\n    content: data.content,\n    User: {\n      id: 1,\n      nickname: \"수인\"\n    },\n    Images: [],\n    Comments: []\n  };\n};\nvar dummyComment = function dummyComment(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: \"수인\"\n    }\n  };\n};\n\n// reducer 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  return Object(immer__WEBPACK_IMPORTED_MODULE_1__[\"produce\"])(state, function (draft) {\n    switch (action.type) {\n      case LOAD_POSTS_REQUEST:\n        draft.loadPostsLoading = true;\n        draft.loadPostsDone = false;\n        draft.loadPostsError = null;\n        break;\n      case LOAD_POSTS_SUCCESS:\n        draft.loadPostsLoading = false;\n        draft.loadPostsDone = true;\n        draft.mainPosts = action.data.concat(draft.mainPosts);\n        draft.hasMorePosts = draft.mainPosts.length < 50;\n        break;\n      case LOAD_POSTS_FAILURE:\n        draft.loadPostsLoading = false;\n        draft.loadPostsError = action.error;\n        break;\n      case ADD_POST_REQUEST:\n        draft.addPostLoading = true;\n        draft.addPostDone = false;\n        draft.addPostError = null;\n        break;\n      case ADD_POST_SUCCESS:\n        draft.addPostLoading = false;\n        draft.addPostDone = true;\n        draft.mainPosts.unshift(dummyPost(action.data)); // dummyPost를 앞에 붙여야 게시물 제일 앞에 올라감.\n        break;\n      case ADD_POST_FAILURE:\n        draft.addPostLoading = false;\n        draft.addPostError = action.error;\n        break;\n      case REMOVE_POST_REQUEST:\n        draft.removePostLoading = true;\n        draft.removePostDone = false;\n        draft.removePostError = null;\n        break;\n      case REMOVE_POST_SUCCESS:\n        draft.removePostLoading = false;\n        draft.removePostDone = true;\n        draft.mainPosts = draft.mainPosts.filter(function (v) {\n          return v.id !== action.data;\n        });\n        break;\n      case REMOVE_POST_FAILURE:\n        draft.removePostLoading = false;\n        draft.removePostError = action.error;\n        break;\n      case ADD_COMMENT_REQUEST:\n        draft.addCommentLoading = true;\n        draft.addCommentDone = false;\n        draft.addCommentError = null;\n        break;\n      case ADD_COMMENT_SUCCESS:\n        {\n          var post = draft.mainPosts.find(function (v) {\n            return v.id === action.data.postId;\n          });\n          post.Comments.unshift(dummyComment(action.data.content));\n          draft.addCommentLoading = false;\n          draft.addCommentDone = true;\n          break;\n          // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);\n          // const post = { ...state.mainPosts[postIndex] };\n          // post.Comments = [dummyComment(action.data.content), ...post.Comments];\n          // const mainPosts = [...state.mainPosts];\n          // mainPosts[postIndex] = post;\n          // return {\n          //   ...state,\n          //   mainPosts,\n          //   addCommentLoading: false,\n          //   addCommentDone: true,\n          // };\n        }\n      case ADD_COMMENT_FAILURE:\n        draft.addCommentLoading = false;\n        draft.addCommentError = action.error;\n        break;\n      default:\n        break;\n    }\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwicG9zdCIsImZpbmQiLCJwb3N0SWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ0U7QUFDTjtBQUVuQixJQUFNQSxZQUFZLEdBQUc7RUFDMUJDLFNBQVMsRUFBRSxFQUFFO0VBQ2JDLFVBQVUsRUFBRSxFQUFFO0VBQ2RDLFlBQVksRUFBRSxJQUFJO0VBQ2xCQyxnQkFBZ0IsRUFBRSxLQUFLO0VBQ3ZCQyxhQUFhLEVBQUUsS0FBSztFQUNwQkMsY0FBYyxFQUFFLElBQUk7RUFDcEJDLGNBQWMsRUFBRSxLQUFLO0VBQ3JCQyxXQUFXLEVBQUUsS0FBSztFQUNsQkMsWUFBWSxFQUFFLElBQUk7RUFDbEJDLGlCQUFpQixFQUFFLEtBQUs7RUFDeEJDLGNBQWMsRUFBRSxLQUFLO0VBQ3JCQyxlQUFlLEVBQUUsSUFBSTtFQUNyQkMsaUJBQWlCLEVBQUUsS0FBSztFQUN4QkMsY0FBYyxFQUFFLEtBQUs7RUFDckJDLGVBQWUsRUFBRTtBQUNuQixDQUFDO0FBRU0sSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBSUMsTUFBTTtFQUFBLE9BQ3RDQyxLQUFLLENBQUNELE1BQU0sQ0FBQyxDQUNWRSxJQUFJLENBQUMsQ0FBQyxDQUNOQyxHQUFHLENBQUM7SUFBQSxPQUFPO01BQ1ZDLEVBQUUsRUFBRUMsOENBQU8sQ0FBQ0MsUUFBUSxDQUFDLENBQUM7TUFDdEJDLElBQUksRUFBRTtRQUNKSCxFQUFFLEVBQUVDLDhDQUFPLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCRSxRQUFRLEVBQUVDLDRDQUFLLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxDQUFDO01BQ2hDLENBQUM7TUFDREMsT0FBTyxFQUFFSCw0Q0FB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QTtVQUNBO1FBQ0Y7TUFDQSxLQUFLaUMsbUJBQW1CO1FBQ3RCYyxLQUFLLENBQUNoRCxpQkFBaUIsR0FBRyxLQUFLO1FBQy9CZ0QsS0FBSyxDQUFDOUMsZUFBZSxHQUFHNEMsTUFBTSxDQUFDSSxLQUFLO1FBQ3BDO01BQ0Y7UUFDRTtJQUNKO0VBQ0YsQ0FBQyxDQUFDO0FBQUE7QUFFV1Qsc0VBQU8sRUFBQyIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tIFwic2hvcnRpZFwiO1xuaW1wb3J0IHsgcHJvZHVjZSB9IGZyb20gXCJpbW1lclwiO1xuaW1wb3J0IGZha2VyIGZyb20gXCJmYWtlclwiO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtYWluUG9zdHM6IFtdLFxuICBpbWFnZVBhdGhzOiBbXSxcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT5cbiAgQXJyYXkobnVtYmVyKVxuICAgIC5maWxsKClcbiAgICAubWFwKCgpID0+ICh7XG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgVXNlcjoge1xuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxuICAgICAgSW1hZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgIHNyYzogXCJodHRwczovL2xvcmVtZmxpY2tyLmNvbS8xMjgwLzcyMFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIENvbW1lbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pKTtcblxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxuICBkYXRhLFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXG4gIGRhdGEsXG59KTtcblxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XG4gIGlkOiBkYXRhLmlkLFxuICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXG4gIFVzZXI6IHtcbiAgICBpZDogMSxcbiAgICBuaWNrbmFtZTogXCLsiJjsnbhcIixcbiAgfSxcbiAgSW1hZ2VzOiBbXSxcbiAgQ29tbWVudHM6IFtdLFxufSk7XG5cbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICBjb250ZW50OiBkYXRhLFxuICBVc2VyOiB7XG4gICAgaWQ6IDEsXG4gICAgbmlja25hbWU6IFwi7IiY7J24XCIsXG4gIH0sXG59KTtcblxuLy8gcmVkdWNlciDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOu2iOuzgOyEseydgCDsp4DtgqTrqbTshJwpXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+XG4gIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpOyAvLyBkdW1teVBvc3Trpbwg7JWe7JeQIOu2meyXrOyVvCDqsozsi5zrrLwg7KCc7J28IOyVnuyXkCDsmKzrnbzqsJAuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xuICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgICAgLy8gY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcbiAgICAgICAgLy8gY29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcbiAgICAgICAgLy8gcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xuICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcbiAgICAgICAgLy8gbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xuICAgICAgICAvLyByZXR1cm4ge1xuICAgICAgICAvLyAgIC4uLnN0YXRlLFxuICAgICAgICAvLyAgIG1haW5Qb3N0cyxcbiAgICAgICAgLy8gICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gICAgICAgIC8vICAgYWRkQ29tbWVudERvbmU6IHRydWUsXG4gICAgICAgIC8vIH07XG4gICAgICB9XG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})