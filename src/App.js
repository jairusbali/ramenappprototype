import React from "react";
import SignUp from "./components/MyForm/SignUp";
import SignIn from "./components/MyForm/SignIn";
import NavBar from "./components/NavBar/NavBar";

import { Route, Switch, Redirect } from "react-router-dom";
import OrderLayout from "./components/OrderLayout/OrderLayout";

import Logout from "./components/Logout/Logout";
import CheckoutSummary from "./containers/CheckoutSummary/CheckoutSummary";

import { connect } from "react-redux";

const app = props => {
  const routes = props.isAuthenticated ? (
    <Switch>
      <Route path="/" exact strict component={OrderLayout} />
      <Route path="/orders" exact component={OrderLayout} />

      <Route path="/logout" component={Logout} />

      <Route path="/orders/checkout" exact component={CheckoutSummary} />

      <Redirect to="/" component={OrderLayout} />
    </Switch>
  ) : (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Redirect to="/signup" component={SignUp} />
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
