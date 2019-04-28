import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { Grid, Paper } from "@material-ui/core";

import { priceMapping } from "../../CentralMenu/CentralMenu";

import { connect } from "react-redux";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import CheckoutCustomerForm from "./CheckoutCustomerForm/CheckoutCustomerForm";

import * as actions from "../../store/actions/index";

import idGenerator from "react-id-generator";

const TAX_RATE = 0.07;
const DELIVERY_RATE = 8.95;

const styles = theme => ({
  spacer: {
    padding: theme.spacing.unit
  }
});

const calculateTaxes = totalPrice => {
  return (totalPrice * TAX_RATE).toFixed(2);
};

const calculateTotalCost = totalPrice => {
  return (totalPrice * TAX_RATE + totalPrice + DELIVERY_RATE).toFixed(2);
};

function checkoutSummary(props) {
  const { classes, orders } = props;

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Grid container>
          {/* Grid headers */}
          <Grid item xs={3} />
          <Grid item xs={3}>
            Ramen
          </Grid>
          <Grid item xs={3}>
            Extras
          </Grid>
          <Grid item xs={3}>
            Price
          </Grid>

          {/* row ramen/noodle */}
          {orders.map(({ ramen, noodle, extras, id }) => (
            <React.Fragment key={id}>
              <Grid item xs={3}>
                <DeleteForeverIcon
                  onClick={() => props.removeOrderById(id)}
                  className={classes.icon}
                />
              </Grid>
              <Grid item xs={3}>
                {ramen + " " + noodle}
              </Grid>

              <Grid item xs={3} />
              <Grid item xs={3}>
                {priceMapping[ramen]}
              </Grid>
              {/* rows for extra toppings */}
              {extras.map(extra => (
                <React.Fragment key={idGenerator()}>
                  <Grid item xs={3} />
                  <Grid item xs={3} />
                  <Grid item xs={3}>
                    {extra}
                  </Grid>
                  <Grid item xs={3}>
                    {priceMapping[extra]}
                  </Grid>
                </React.Fragment>
              ))}
              {/* spacer row */}
              <Grid item xs={12} className={classes.spacer} />
            </React.Fragment>
          ))}

          {/* rows for costs */}
          {props.subTotal > 0 ? (
            <React.Fragment>
              <Grid item xs={3} />
              <Grid item xs={3} />
              <Grid item xs={3}>
                Subtotal
              </Grid>
              <Grid item xs={3}>
                {props.subTotal}
              </Grid>

              <Grid item xs={3} />
              <Grid item xs={3} />
              <Grid item xs={3}>
                Delivery charges
              </Grid>
              <Grid item xs={3}>
                {DELIVERY_RATE}
              </Grid>

              <Grid item xs={3} />
              <Grid item xs={3} />
              <Grid item xs={3}>
                Taxes
              </Grid>
              <Grid item xs={3}>
                {calculateTaxes(props.subTotal)}
              </Grid>

              <Grid item xs={3} />
              <Grid item xs={3} />
              <Grid item xs={3}>
                Total
              </Grid>
              <Grid item xs={3}>
                {calculateTotalCost(props.subTotal)}
              </Grid>
            </React.Fragment>
          ) : null}
        </Grid>
        {/* end container */}
      </Paper>
      <Paper>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12} style={{ padding: "100px" }}>
            <CheckoutCustomerForm />
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

checkoutSummary.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    orders: state.cart.orders,
    subTotal: state.cart.subTotal,
    token: state.auth.idToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeOrderById: id => dispatch(actions.removeOrder(id)),
    submitOrders: (token, orderData) =>
      dispatch(actions.submitOrders(token, orderData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(checkoutSummary));
