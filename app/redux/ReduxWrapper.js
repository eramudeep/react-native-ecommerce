import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser, logoutUser} from './authAction';

export const mapStateToProps = (state) => ({
 auth:{ ...state.auth},
});

export const mapDispatchToProps = {
  loginUser$: loginUser,
  logoutUser$: logoutUser,
};

export const hocComponentName = (WrappedComponent) => {
  const hocComponent = ({...props}) => <WrappedComponent {...props} />;

  hocComponent.propTypes = {};

  return hocComponent;
};

export default (ReduxWrapper) =>
  connect(mapStateToProps, mapDispatchToProps)(hocComponentName(ReduxWrapper));
