import React, { useaddressFormState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { TextValidator } from "react-material-ui-form-validator";

import { CheckoutContext } from "../Checkout";

function AddressForm() {
  const [addressFormState, addressFormDispatch] = useContext(CheckoutContext);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Delivery address
      </Typography>

      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextValidator
            required
            id="firstName"
            name="firstName"
            label="First name"
            validators={["required", "lettersOnly"]}
            errorMessages={[
              "this field is required",
              "Contains an invalid character"
            ]}
            fullWidth
            autoComplete="fname"
            onChange={e =>
              addressFormDispatch({
                type: "field",
                name: e.target.name,
                value: e.target.value
              })
            }
            value={addressFormState.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextValidator
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            validators={["required", "lettersOnly"]}
            errorMessages={[
              "this field is required",
              "Contains an invalid character"
            ]}
            autoComplete="lname"
            onChange={e =>
              addressFormDispatch({
                type: "field",
                name: e.target.name,
                value: e.target.value
              })
            }
            value={addressFormState.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextValidator
            required
            id="address1"
            name="address1"
            validators={["required"]}
            errorMessages={["this field is required"]}
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
            onChange={e =>
              addressFormDispatch({
                type: "field",
                name: e.target.name,
                value: e.target.value
              })
            }
            value={addressFormState.address1}
          />
        </Grid>
        <Grid item xs={12}>
          <TextValidator
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextValidator
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
            validators={["required", "lettersOnly"]}
            errorMessages={[
              "this field is required",
              "Contains an invalid character"
            ]}
            onChange={e =>
              addressFormDispatch({
                type: "field",
                name: e.target.name,
                value: e.target.value
              })
            }
            value={addressFormState.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextValidator
            id="state"
            name="state"
            label="State/Province/Region"
            validators={["required", "lettersOnly"]}
            errorMessages={[
              "this field is required",
              "Contains an invalid character"
            ]}
            fullWidth
            onChange={e =>
              addressFormDispatch({
                type: "field",
                name: e.target.name,
                value: e.target.value
              })
            }
            value={addressFormState.state}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextValidator
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
            validators={["required"]}
            errorMessages={["this field is required"]}
            onChange={e =>
              addressFormDispatch({
                type: "field",
                name: e.target.name,
                value: e.target.value
              })
            }
            value={addressFormState.zip}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextValidator
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
            validators={["required", "lettersOnly"]}
            errorMessages={[
              "this field is required",
              "Contains an invalid character"
            ]}
            onChange={e =>
              addressFormDispatch({
                type: "field",
                name: e.target.name,
                value: e.target.value
              })
            }
            value={addressFormState.country}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;
