import React from "react";
import SignUp from "./components/AuthForms/SignUp";
import SignIn from "./components/AuthForms/SignIn";
import NavBar from "./components/AppBar/AppBar";
import Path from "./constants/path";

import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import OrderLayout from "./components/OrderLayout/OrderLayout";

import Logout from "./components/Logout/Logout";

import Checkout from "./containers/Checkout/Checkout";

import { connect } from "react-redux";

import * as actions from "./store/actions/index";

const app = props => {
  // skip login step if there is a valid token id in localStorage
  if (localStorage.getItem("token") && !props.isAuthenticated)
    props.validUserAlreadyLoggedIn();

  const routes = props.isAuthenticated ? (
    <Switch>
      <Route path={Path.HOME} exact strict component={OrderLayout} />
      <Route path={Path.MENU} exact strict component={OrderLayout} />

      <Route path={Path.LOGOUT} exact component={Logout} />

      {props.hasOrders ? (
        <Route path={Path.CHECKOUT} exact component={Checkout} />
      ) : null}

      {/* {props.hasOrders ? (
        <Route path="/orders/history" exact component={OrdersHistory} />
      ) : null} */}

      <Redirect to={Path.HOME} component={OrderLayout} />
    </Switch>
  ) : (
    <Switch>
      <Route path={Path.SIGNUP} component={SignUp} />
      <Route path={Path.SIGNIN} component={SignIn} />
      <Redirect to={Path.SIGNUP} component={SignUp} />
    </Switch>
  );

  return (
    <>
      <NavBar
        isAuthenticated={props.isAuthenticated}
        hasOrders={props.hasOrders}
      />
      {routes}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.idToken !== null,
    hasOrders: state.cart.orders.length > 0,
    idToken: state.auth.idToken,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    validUserAlreadyLoggedIn: () => dispatch(actions.validUserAlreadyLoggedIn())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(app);
