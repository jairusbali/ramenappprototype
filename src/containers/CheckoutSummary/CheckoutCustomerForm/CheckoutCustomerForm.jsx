import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import SlideAlertDialog from "../../../components/SlideAlertDialog/SlideAlertDialog";

import CircularProgress from "@material-ui/core/CircularProgress";
import Info from "@material-ui/icons/Info";

import { connect } from "react-redux";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const orderForm = props => {
  const { classes } = props;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    deliveryMethod: ""
  });

  const handleChange = event => {
    const customerData = { ...formData };
    console.log(customerData);
    console.log(event.target.name);
    console.log(event.target.value);

    customerData[event.target.name] = event.target.value;
    setFormData(customerData);
  };

  const errorMessage = props.error ? (
    <SlideAlertDialog
      {...props}
      title={"Warning"}
      content={props.error.toString().replace("_", " ")}
      show={props.error != null}
      okAction={() => props.logout()}
      cancelAction={() => props.logout()}
    />
  ) : null;

  const isLoading = props.loading ? (
    <CircularProgress className={classes.progress} />
  ) : (
    <Info />
  );

  return (
    <div className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>{isLoading}</Avatar>
        <Typography component="h1" variant="h5">
          Delivery
        </Typography>
        {errorMessage}

        <ValidatorForm onSubmit={() => console.log("submit hit")}>
          <FormControl margin="normal" required fullWidth>
            <TextValidator
              label="First Name"
              onChange={handleChange}
              name="firstName"
              value={formData.email}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <TextValidator
              label="Last Name"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <TextValidator
              label="Address"
              onChange={handleChange}
              name="address"
              value={formData.address}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </ValidatorForm>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.orders.sending
  };
};

export default connect(mapStateToProps)(withStyles(styles)(orderForm));
