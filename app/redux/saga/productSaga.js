import { put, takeLatest } from 'redux-saga/effects'
import { GET_PRODUCTS,GET_PRODUCTS_LIST,SET_PRODUCTS, SET_PRODUCTS_LIST } from '../productAction'
import RequestMake from '../../utils/RequestMake'
 import {PRODUCTS_BY_CATEGORY, PRODUCTS_LIST} from '../../utils/ApiList'
export function* workerGetProducts(action) {
  if (action) {
      const category =action.payload
      const URL=`${PRODUCTS_BY_CATEGORY}/${category}`
      console.log({URL});
      const result = yield RequestMake(URL)      
      yield put({ type:SET_PRODUCTS, payload: result })
  }
}
export function* watcherGetProducts() {
  yield takeLatest(GET_PRODUCTS,workerGetProducts)
}



export function* workerGetProductsList(action) {
  if (action) {
      const category =action.payload
      const URL=`${PRODUCTS_LIST}`
     // console.log({URL});
      const result = yield RequestMake(URL)      
      console.log({result});
      yield put({ type:SET_PRODUCTS_LIST, payload: result })
  }
}
export function* watcherGetProductsList() {
  yield takeLatest(GET_PRODUCTS_LIST,workerGetProductsList)
}