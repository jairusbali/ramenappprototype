import React from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import Avatar from "@material-ui/core/Avatar";

import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import * as actions from "../../store/actions/index";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import SlideAlertDialog from "../../components/SlideAlertDialog/SlideAlertDialog";

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

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        email: "",
        password: "",
        repeatPassword: ""
      },
      submitted: false
    };
  }

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      if (value !== this.state.formData.password) {
        return false;
      }
      return true;
    });
    ValidatorForm.addValidationRule("minLenghth7Chars", value => {
      return value.length >= 7;
    });
  }

  handleChange = event => {
    const { formData } = { ...this.state };
    console.log(event.target.name, event.target.value);
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  render() {
    const { formData, submitted } = this.state;
    const { classes } = this.props;

    const authenticatedRedict = this.props.isAuthenticated ? (
      <Redirect to="/orders" />
    ) : null;

    const errorMessage = this.props.error ? (
      <SlideAlertDialog
        {...this.state.props}
        title={"Warning"}
        content={this.props.error.toString().replace("_", " ")}
        show={this.props.error != null}
        okAction={() => this.props.logout()}
        cancelAction={() => this.props.logout()}
      />
    ) : null;
    // const isLoading = this.props.loading ? (
    //   <CircularProgress className={classes.progress} />
    // ) : (
    //   <LockOutlinedIcon />
    // );

    return (
      <main className={classes.main}>
        {authenticatedRedict}
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          {errorMessage}
          <ValidatorForm
            onSubmit={() =>
              this.props.onAuth(formData.email, formData.password, true)
            }
          >
            <FormControl margin="normal" required fullWidth>
              <TextValidator
                label="Email"
                onChange={this.handleChange}
                name="email"
                value={formData.email}
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <TextValidator
                label="Password"
                onChange={this.handleChange}
                name="password"
                type="password"
                validators={["required", "minLenghth7Chars"]}
                errorMessages={[
                  "this field is required",
                  "Password needs to be at least 7 characters"
                ]}
                value={formData.password}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <TextValidator
                label="Repeat password"
                onChange={this.handleChange}
                name="repeatPassword"
                type="password"
                validators={["isPasswordMatch", "required"]}
                errorMessages={["password mismatch", "this field is required"]}
                value={formData.repeatPassword}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={submitted}
              >
                {/* {(submitted && "Your form is submitted!") ||
                  (!submitted && "Submit")} */}
                SUBMIT
              </Button>
            </FormControl>
          </ValidatorForm>
        </Paper>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    isAuthenticated: state.auth.idToken !== null,
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
)(withStyles(styles)(SignUp));
