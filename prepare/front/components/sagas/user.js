import { all, fork, put, delay, takeLatest } from "redux-saga/effects";

function loginAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    // const result = yield call(loginAPI, action.data);
    yield delay(1000);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  } // 성공 결과 -> result.data, 실패 결과 -> err.response.data 에 담겨있음!
}

function logoutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    // const result = yield call(logoutAPI);
    yield delay(1000);
    yield put({
      type: "LOG_OUT_SUCCESS",
      //   data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

// while (true){} 를 써야 해당 기능을 계속 사용 가능
// while (true){} 대신에 takeEvery를 사용
// takeLatest 실수로 버튼을 여러번 눌리는 경우에 맨 뒤의 요청에 해당하는 응답만 감, 요청을 취소하지는 못함
function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}
function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]); // fork - 비동기 함수 호출, call - 동기 함수 호출
}
