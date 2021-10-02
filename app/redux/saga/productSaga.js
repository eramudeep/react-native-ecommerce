import { put, takeLatest } from 'redux-saga/effects'
import { GET_PRODUCTS,SET_PRODUCTS } from '../productAction'
import RequestMake from '../../utils/RequestMake'
 import {PRODUCTS_BY_CATEGORY} from '../../utils/ApiList'
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