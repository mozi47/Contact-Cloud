import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const context = useContext(AuthContext);
  const { loading, isAuthenticated } = context;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated !== true && loading !== false ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
