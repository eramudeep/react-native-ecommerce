import {combineReducers} from 'redux';
import cart from './cart';
import error from './error';

export default combineReducers({
  error,
  cart
});
