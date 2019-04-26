import React from "react";
import SignUp from "./components/MyForm/SignUp";
import SignIn from "./components/MyForm/SignIn";
import NavBar from "./components/NavBar/NavBar";

import { Route, Switch } from "react-router-dom";
import OrderLayout from "./components/OrderLayout/OrderLayout";

import Logout from "./components/Logout/Logout";

import { connect } from "react-redux";

const app = props => {
  const routes = props.isAuthenticated ? (
    <Switch>
      <Route path="/order-menu" exact component={OrderLayout} />
      <Route path="/logout" component={Logout} />
      <Route path="/signup" component={SignUp} />

      <Route path="/signin" component={SignIn} />

      <Route
        path="*"
        render={() => <h1 style={{ textAlign: "center" }}>Page not found</h1>}
      />
    </Switch>
  ) : (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route
        path="*"
        render={() => <h1 style={{ textAlign: "center" }}>Page not found</h1>}
      />
      />
    </Switch>
  );

  return (
    <>
      <NavBar isAuthenticated={props.isAuthenticated} />
      {routes}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.idToken !== null
  };
};

export default connect(mapStateToProps)(app);
