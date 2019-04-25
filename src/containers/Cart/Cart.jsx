import React, { useState, useEffect } from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import SlideAlertDialog from "../../components/SlideAlertDialog/SlideAlertDialog";

import { withStyles } from "@material-ui/core";

import OrderSummary from "./OrderSummary/OrderSummary";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
const styles = theme => ({
  fab: {
    margin: 0,
    top: "auto",
    left: "auto",
    bottom: 30,
    right: 30,
    position: "fixed"
  }
  // ,
  // orderConfirmation: {
  //   p: {
  //     margin: 0,
  //     padding: 0
  //   }
  // }
});

const cart = props => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(false);
  }, []);

  const enableAddOrder = props.ramen !== null && props.noodle !== null;

  const { classes, ...other } = props;

  const orderToAdd = {
    ramen: props.ramen,
    noodle: props.noodle,
    extras: props.extras
  };

  const toggleConfirmationDialog = () => {
    setState(!state);
  };

  const addOrderToCart = newOrder => {
    props.addOrder(newOrder);
    setState(!state);
  };
  const title = "Add the following to your order?";
  const content = <OrderSummary {...other} />;

  return (
    <>
      <Fab
        onClick={() => toggleConfirmationDialog()}
        color="primary"
        aria-label="Add"
        disabled={!enableAddOrder}
        className={classes.fab}
      >
        <AddIcon />
      </Fab>

      <SlideAlertDialog
        {...props}
        title={title}
        content={content}
        show={state}
        okAction={() => addOrderToCart(orderToAdd)}
        cancelAction={() => toggleConfirmationDialog()}
      />
    </>
  );
};
const mapStateToProps = state => {
  return {
    ramen: state.menu.ramen,
    noodle: state.menu.noodle,
    extras: state.menu.extras,
    orders: state.cart.orders,
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addOrder: order => dispatch(actions.addOrder(order))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(cart));
