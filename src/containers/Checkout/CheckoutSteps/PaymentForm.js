import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { CheckoutContext } from "../Checkout";

function PaymentForm() {
  const [paymentFormState, paymentFormDispatch] = useContext(CheckoutContext);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            name="cardName"
            label="Name on card"
            fullWidth
            onChange={e =>
              paymentFormDispatch({
                type: "field",
                name: e.target.name,
                value: e.target.value
              })
            }
            value={paymentFormState.cardName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            onChange={e =>
              paymentFormDispatch({
                type: "field",
                name: e.target.name,
                value: e.target.value
              })
            }
            value={paymentFormState.cardNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            card="expDate"
            label="Expiry date"
            fullWidth
            onChange={e =>
              paymentFormDispatch({
                type: "field",
                name: e.target.name,
                value: e.target.value
              })
            }
            value={paymentFormState.expDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            name="cvv"
            helperText="Last three digits on signature strip"
            fullWidth
            onChange={e =>
              paymentFormDispatch({
                type: "field",
                name: e.target.name,
                value: e.target.value
              })
            }
            value={paymentFormState.cvv}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;
