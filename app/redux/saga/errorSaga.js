import { put, takeLatest } from 'redux-saga/effects'
import {  SET_ERROR } from '../actionTypes';
export function* workerGetError(action) {
  if (action) {
      const {error}=action.payload
  
    yield put({ type: "SET_ERROR_SUCCESS", payload: error })
  }
}
export function* watcherGetError() {
  yield takeLatest(SET_ERROR,workerGetError)
}