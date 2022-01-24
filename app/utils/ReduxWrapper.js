import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addToCart, removeFromCart} from '../redux/cartAction';
import {getProducts, getProductsList} from '../redux/productAction';
import {addToWishList, removeToWishList} from '../redux/wishListAction';
export const mapStateToProps = (state) => ({
  products: state.products ,
  auth: state.auth,
  cart: state.cart,
  wishList: state.wishList,
});

export const mapDispatchToProps = {
  addToCart$: addToCart,
  removeFromCart$: removeFromCart,
  getProducts$: getProducts,
  addToWishList$: addToWishList,
  removeToWishList$: removeToWishList,
  getProductsList$:getProductsList
};

export const hocComponentName = (WrappedComponent) => {
  const hocComponent = ({...props}) => <WrappedComponent {...props} />;

  hocComponent.propTypes = {};

  return hocComponent;
};

export default (ReduxWrapper) =>
  connect(mapStateToProps, mapDispatchToProps)(hocComponentName(ReduxWrapper));
