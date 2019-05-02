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
import PaymentForm from "./CheckoutSteps/PaymentForm";
import Review from "./CheckoutSteps/Review";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

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

const steps = ["Shipping address", "Payment details", "Review your order"];

const checkoutReducer = (state, action) => {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.name]: action.payload
      };

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

const CheckoutContext = React.createContext();

const Checkout = props => {
  const [activeStep, setActiveStep] = useState(0);
  const validatorFormRef = useRef(null);

  const [state, dispatch] = useReducer(
    checkoutReducer,
    addressFormInitialState
  );

  const handleNext = event => {
    event.preventDefault();
    console.log(validatorFormRef);
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

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = step => {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <AddressForm />;
      case 2:
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

  return (
    <CheckoutContext.Provider value={dispatch}>
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
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
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
              )}
            </React.Fragment>
          </Paper>
        </main>
      </ValidatorForm>
    </CheckoutContext.Provider>
  );
};

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Checkout);
