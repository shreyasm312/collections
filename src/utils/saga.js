import { put } from "redux-saga/effects";
export function* saga(API, type, payload) {
  try {
    const response = yield API(payload);
    yield put({
      type: `${type}_SUCCESS`,
      payload: response
    });
  } catch (err) {
    yield put({
      type: `${type}_FAILURE`,
      payload: err
    });
  }
}
