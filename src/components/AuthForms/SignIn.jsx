import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import SlideAlertDialog from "../../components/SlideAlertDialog/SlideAlertDialog";

import CircularProgress from "@material-ui/core/CircularProgress";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

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

function signIn(props) {
  const { classes } = props;

  const [state, setState] = useState({
    formData: {
      email: "",
      password: ""
    }
  });

  const handleChange = event => {
    const { formData } = { ...state };

    formData[event.target.name] = event.target.value;
    setState({ formData });
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
    <LockOutlinedIcon />
  );

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>{isLoading}</Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {errorMessage}

        <ValidatorForm
          onSubmit={() =>
            props.onAuth(state.formData.email, state.formData.password, false)
          }
        >
          <FormControl margin="normal" required fullWidth>
            <TextValidator
              label="Email"
              onChange={handleChange}
              name="email"
              value={state.formData.email}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <TextValidator
              label="Password"
              onChange={handleChange}
              name="password"
              type="password"
              validators={["required"]}
              errorMessages={["this field is required"]}
              value={state.formData.password}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </ValidatorForm>
      </Paper>
    </main>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),

    logout: () => dispatch(actions.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(signIn));
