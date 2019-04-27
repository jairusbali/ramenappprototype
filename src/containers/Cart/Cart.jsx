import React, { useState, useEffect } from "react";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import SlideAlertDialog from "../../components/SlideAlertDialog/SlideAlertDialog";

import { withStyles } from "@material-ui/core";

import OrderSummary from "../../components/SlideAlertDialog/OrderSummary/OrderSummary";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import { priceMapping } from "../../CentralMenu/CentralMenu";

const styles = theme => ({
  fab: {
    margin: 0,
    top: "auto",
    left: "auto",
    bottom: 30,
    right: 30,
    position: "fixed"
  }
});

const cart = props => {
  const [openDialogConfirmation, setOpenDialogConfirmation] = useState(false);

  useEffect(() => {
    setOpenDialogConfirmation(false);
  }, []);

  // user must at least choose a ramen and noodle type before
  // they can add an order to the cart
  const enableAddOrder = props.ramen !== null && props.noodle !== null;

  const { classes, ...other } = props;

  const orderToAdd = {
    ramen: props.ramen,
    noodle: props.noodle,
    extras: props.extras
  };
  const extraItemsPrices = props.extras.map(item => {
    return priceMapping[item];
  });
  const extrasTotalPrice = extraItemsPrices.reduce((a, b) => {
    return a + b;
  }, 0);

  const singleOrderTotalPrice =
    priceMapping[orderToAdd.ramen] + extrasTotalPrice;

  const toggleConfirmationDialog = () => {
    setOpenDialogConfirmation(!openDialogConfirmation);
  };

  const addOrderToCart = (newOrder, newOrderPrice) => {
    props.addOrder(newOrder, newOrderPrice);
    setOpenDialogConfirmation(!openDialogConfirmation);
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
        show={openDialogConfirmation}
        okAction={() =>
          addOrderToCart(orderToAdd, singleOrderTotalPrice.toFixed(2))
        }
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
    addOrder: (order, price) => dispatch(actions.addOrder(order, price))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(cart));
