import React from "react";
import SignUp from "./components/AuthForms/SignUp";
import SignIn from "./components/AuthForms/SignIn";
import NavBar from "./components/AppBar/AppBar";

import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import OrderLayout from "./components/OrderLayout/OrderLayout";

import Logout from "./components/Logout/Logout";
import CheckoutSummary from "./containers/CheckoutSummary/CheckoutSummary";

import Checkout from "./containers/Checkout/Checkout";

import { connect } from "react-redux";

import * as actions from "./store/actions/index";

import axios from "./axios-ramen";

const app = props => {
  // skip login step if there is a valid token id in localStorage
  if (localStorage.getItem("token") && !props.isAuthenticated)
    props.validUserAlreadyLoggedIn();

  const routes = props.isAuthenticated ? (
    <Switch>
      <Route path="/" exact strict component={OrderLayout} />
      <Route path="/menu" exact strict component={OrderLayout} />

      <Route path="/logout" exact component={Logout} />

      {props.hasOrders ? (
        <Route path="/orders/checkout" exact component={Checkout} />
      ) : null}

      {props.hasOrders ? (
        <Route
          path="/orders/history"
          exact
          render={() => {
            return (
              <React.Fragment>
                <h1>Get history here</h1>; ;
              </React.Fragment>
            );
          }}
        />
      ) : null}

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
