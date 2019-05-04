import React, { useEffect, useState, useRef, useReducer } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./CheckoutSteps/AddressForm";
import Review from "./CheckoutSteps/Review";
import { ValidatorForm } from "react-material-ui-form-validator";
import CircularProgress from "@material-ui/core/CircularProgress";

import { connect } from "react-redux";

import * as actions from "../../store/actions";

import { lettersOnly } from "./CheckoutSteps/EntryValidation";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

// Removed "Payment details",
const steps = ["Delivery address", "Review your order"];

const checkoutAddressFormReducer = (state, action) => {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.name]: action.value
      };

    case "reset":
      return action.payload;

    default:
      return state;
  }
};

const addressFormInitialState = {
  firstName: "",
  lastName: "",
  address1: "",
  city: "",
  state: "",
  zip: "",
  country: ""
};

export const CheckoutContext = React.createContext();

const Checkout = props => {
  const [activeStep, setActiveStep] = useState(0);
  const validatorFormRef = useRef(null);

  const [addressFormState, addressFormDispatch] = useReducer(
    checkoutAddressFormReducer,
    addressFormInitialState
  );

  // load stored data if any, on componentDidMount
  useEffect(() => {
    const data = localStorage.getItem("ramenAppAddressFormData");
    if (data) addressFormDispatch({ type: "reset", payload: JSON.parse(data) });
  }, []);

  // save to local storage
  useEffect(() => {
    localStorage.setItem(
      "ramenAppAddressFormData",
      JSON.stringify(addressFormState)
    );
  }, [addressFormState]);

  const handleNext = event => {
    event.preventDefault();

    validatorFormRef.current.isFormValid(false).then(isValid => {
      if (isValid) {
        const nextStep = activeStep + 1;
        setActiveStep(nextStep);
      }
    });
  };

  const handleBack = event => {
    event.preventDefault();
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
  };

  const getStepContent = step => {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <Review />;

      default:
        throw new Error("Unknown step");
    }
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("lettersOnly", value => {
      if (lettersOnly(value)) return false;
      return true;
    });
  }, []);

  const { classes } = props;

  const circularProgress = props.sendingOrder ? <CircularProgress /> : null;

  const confirmationPage = props.purchaseOrderId ? (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order ID is {props.purchaseOrderId.replace(/-|_/g, "")}. We have
        emailed your order confirmation, and will send you an update of the
        status of your delivery.
      </Typography>
    </React.Fragment>
  ) : null;

  if (
    activeStep === steps.length &&
    !props.purchaseOrderId &&
    !props.sendingOrder &&
    !props.checkoutError
  )
    props.submitOrders(
      props.idToken,
      props.orders,
      addressFormState,
      props.userId
    );

  const errorMessage = props.checkoutError ? (
    <h1>{props.checkoutError}</h1>
  ) : null;

  // show form buttons if user have not placed order
  const formButtons =
    activeStep < steps.length ? (
      <React.Fragment>
        {getStepContent(activeStep)}
        <div className={classes.buttons}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} className={classes.button}>
              Back
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            {activeStep === steps.length - 1 ? "Place order" : "Next"}
          </Button>
        </div>
      </React.Fragment>
    ) : null;

  return (
    <CheckoutContext.Provider value={[addressFormState, addressFormDispatch]}>
      <ValidatorForm
        ref={validatorFormRef}
        instantValidate
        onSubmit={() => console.log("submitting")}
      >
        <CssBaseline />

        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {/* here */}
            {errorMessage}
            {circularProgress}
            {confirmationPage}
            {formButtons}
          </Paper>
        </main>
      </ValidatorForm>
    </CheckoutContext.Provider>
  );
};

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    orders: state.cart.orders,
    userId: state.auth.userId,
    idToken: state.auth.idToken,
    sendingOrder: state.checkout.sending,
    purchaseOrderId: state.checkout.purchaseOrderId,
    checkoutError: state.checkout.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitOrders: (token, orders, deliveryInfo, userId) => {
      dispatch(actions.submitOrders(token, orders, deliveryInfo, userId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Checkout));
