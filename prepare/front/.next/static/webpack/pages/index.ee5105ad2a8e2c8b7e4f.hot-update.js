webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n\nvar _this = undefined,\n  _jsxFileName = \"/home/kimsuin/study/react/inflearn/next/nodeBird/prepare/front/components/CommentForm.js\",\n  _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar CommentForm = function CommentForm(_ref) {\n  _s();\n  var post = _ref.post;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    var _state$user$me;\n    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;\n  });\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n      return state.post;\n    }),\n    addCommentDone = _useSelector.addCommentDone;\n  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"\"),\n    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 3),\n    commentText = _useInput2[0],\n    onChangeCommentText = _useInput2[1],\n    setCommentText = _useInput2[2];\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (addCommentDone) {\n      setCommentText(\"\");\n    }\n  }, [addCommentDone]);\n  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__[\"ADD_COMMENT_REQUEST\"],\n      data: {\n        content: commentText,\n        postId: post.id,\n        userId: id\n      }\n    });\n  }, [commentText, id]);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n    onFinish: onSubmitComment,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, {\n    style: {\n      position: \"relative\",\n      margin: 0\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"].TextArea, {\n    value: commentText,\n    onChange: onChangeCommentText,\n    rows: 4,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    style: {\n      position: \"absolute\",\n      right: 0,\n      bottom: -40,\n      zIndex: 1\n    },\n    type: \"primary\",\n    htmlType: \"submit\",\n    loading: addCommentLoading,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"\\uC090\\uC57D\")));\n};\n_s(CommentForm, \"mM6CS628luhUq9CAqU3Lfmbq6g4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n_c = CommentForm;\nCommentForm.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\nvar _c;\n$RefreshReg$(_c, \"CommentForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcz80ZDAyIl0sIm5hbWVzIjpbIkNvbW1lbnRGb3JtIiwiX3JlZiIsIl9zIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJfc3RhdGUkdXNlciRtZSIsInVzZXIiLCJtZSIsIl91c2VTZWxlY3RvciIsImFkZENvbW1lbnREb25lIiwiX3VzZUlucHV0IiwidXNlSW5wdXQiLCJfdXNlSW5wdXQyIiwiX3NsaWNlZFRvQXJyYXkiLCJjb21tZW50VGV4dCIsIm9uQ2hhbmdlQ29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsInVzZUVmZmVjdCIsIm9uU3VibWl0Q29tbWVudCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJkYXRhIiwiY29udGVudCIsInBvc3RJZCIsInVzZXJJZCIsIl9fanN4IiwiRm9ybSIsIm9uRmluaXNoIiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkl0ZW0iLCJzdHlsZSIsInBvc2l0aW9uIiwibWFyZ2luIiwiSW5wdXQiLCJUZXh0QXJlYSIsInZhbHVlIiwib25DaGFuZ2UiLCJyb3dzIiwiQnV0dG9uIiwicmlnaHQiLCJib3R0b20iLCJ6SW5kZXgiLCJodG1sVHlwZSIsImxvYWRpbmciLCJhZGRDb21tZW50TG9hZGluZyIsIl9jIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNJO0FBQ047QUFDTjtBQUNvQjtBQUNBO0FBRXZELElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBQyxJQUFBLEVBQWlCO0VBQUFDLEVBQUE7RUFB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Si9EeEQsV0FBVztBQXdDakJBLFdBQVcsQ0FBQ3lELFNBQVMsR0FBRztFQUN0QnRELElBQUksRUFBRXVELGlEQUFTLENBQUNDLE1BQU0sQ0FBQ0M7QUFDekIsQ0FBQztBQUVjNUQsMEVBQVcsRUFBQztBQUFBLElBQUF3RCxFQUFBO0FBQUFLLFlBQUEsQ0FBQUwsRUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQUREX0NPTU1FTlRfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XG5cbmNvbnN0IENvbW1lbnRGb3JtID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcbiAgY29uc3QgeyBhZGRDb21tZW50RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCBvbkNoYW5nZUNvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VJbnB1dChcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhZGRDb21tZW50RG9uZSkge1xuICAgICAgc2V0Q29tbWVudFRleHQoXCJcIik7XG4gICAgfVxuICB9LCBbYWRkQ29tbWVudERvbmVdKTtcblxuICBjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgICAgIGRhdGE6IHsgY29udGVudDogY29tbWVudFRleHQsIHBvc3RJZDogcG9zdC5pZCwgdXNlcklkOiBpZCB9LFxuICAgIH0pO1xuICB9LCBbY29tbWVudFRleHQsIGlkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRDb21tZW50fT5cbiAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgbWFyZ2luOiAwIH19PlxuICAgICAgICA8SW5wdXQuVGV4dEFyZWFcbiAgICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9XG4gICAgICAgICAgcm93cz17NH1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiAwLCBib3R0b206IC00MCwgekluZGV4OiAxIH19XG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICBsb2FkaW5nPXthZGRDb21tZW50TG9hZGluZ31cbiAgICAgICAgPlxuICAgICAgICAgIOyCkOyVvVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbkNvbW1lbnRGb3JtLnByb3BUeXBlcyA9IHtcbiAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CommentForm.js\n");

/***/ })

})