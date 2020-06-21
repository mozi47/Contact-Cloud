import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Register from "./component/Auth/Register";
import Login from "./component/Auth/Login";
import Alert from "./component/layout/Alert";
import setAuthtoken from "./utils/setAuthtoken";
import PrivateRoute from "./component/routing/PrivateRoute";

if (localStorage.token) {
  setAuthtoken(localStorage.token);
}
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Alert />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;
