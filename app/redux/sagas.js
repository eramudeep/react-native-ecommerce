import {  all } from "redux-saga/effects"
import { workerGetError } from "./saga/errorSaga"


//1 worker saga
export function* loadMenuQWorker() {

}
//2 watcher saga
export function* watchLoadMenu() {

}
//3 root saga
//single entry point to start all sagas
export default function* rootSaga() {
  yield all([
    workerGetError()
  ])
}
