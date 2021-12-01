import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('authToken') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/auth" />
      )
    }
  />
);

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.any,
};
