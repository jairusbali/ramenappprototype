import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: 2
  }
});

class TextFields extends React.Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container justify="center">
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="user@email.com"
            className={classes.textField}
            margin="normal"
            type="email"
          />

          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Password"
            className={classes.textField}
            margin="normal"
            type="password"
          />
        </Grid>
        <Grid container justify="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Primary
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Secondary
          </Button>
        </Grid>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
