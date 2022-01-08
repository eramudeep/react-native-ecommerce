import {combineReducers} from 'redux';
import cart from './cart';
import error from './error';
import products from './products';
import auth from './auth';
import wishList from './wishList';

export default combineReducers({
  error,
  cart,
  products,
  auth,
  wishList
});
