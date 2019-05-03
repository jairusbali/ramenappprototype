import React, { useContext } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import { connect } from "react-redux";

import { CheckoutContext } from "../Checkout";

const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA"
];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" }
];

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing.unit * 2
  }
});

const DELIVERY_FEE = 8.95;
const TAX_RATE = 0.13;

function Review(props) {
  const [addressFormState] = useContext(CheckoutContext);

  const { firstName, lastName, ...addressInfo } = addressFormState;

  const { classes, orders, subTotal } = props;

  const taxes = parseFloat(TAX_RATE * subTotal);
  const total = parseFloat(taxes + subTotal + DELIVERY_FEE);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary:
      </Typography>
      <List disablePadding>
        {orders.map(order => (
          <ListItem className={classes.listItem} key={order.id}>
            <ListItemText
              primary={`${order.ramen} ${order.noodle}`}
              secondary={order.extras.toString()}
            />
            <Typography variant="body2">{order.orderPrice}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Subtotal" />
          <Typography variant="subtitle1" className={classes.total}>
            {subTotal.toFixed(2)}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Delivery Fees" />
          <Typography variant="subtitle1" className={classes.total}>
            {DELIVERY_FEE}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Taxes" />
          <Typography variant="subtitle1" className={classes.total}>
            {taxes.toFixed(2)}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {total.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Delivering to:
          </Typography>
          <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>

          <Typography gutterBottom>
            {Object.values(addressInfo).join(", ")}
          </Typography>
        </Grid>
        {/* <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    orders: state.cart.orders,
    subTotal: state.cart.subTotal
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Review));
