import React from "react";
import SignUp from "./components/MyForm/SignUp";
import SignIn from "./components/MyForm/SignIn";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import OrderLayout from "./components/OrderLayout/OrderLayout";

import Logout from "./components/Logout/Logout";
import CheckoutSummary from "./containers/CheckoutSummary/CheckoutSummary";

import Checkout from "./containers/Checkout/Checkout";

import { connect } from "react-redux";

const app = props => {
  const routes = props.isAuthenticated ? (
    <Switch>
      <Route path="/" exact strict component={OrderLayout} />
      <Route path="/order" exact strict component={OrderLayout} />

      <Route path="/logout" exact component={Logout} />

      {props.hasOrders ? (
        <Route path="/orders/checkout" exact component={Checkout} />
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
        hasOrder={props.hasOrder}
      />
      {routes}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.idToken !== null,
    hasOrder: state.cart.orders.length > 0
  };
};

export default connect(mapStateToProps)(app);
