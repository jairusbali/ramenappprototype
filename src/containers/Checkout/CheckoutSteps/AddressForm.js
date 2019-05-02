import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import { lettersOnly } from "./EntryValidation";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

function AddressForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
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
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;
