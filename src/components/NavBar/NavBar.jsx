import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function navBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            KINTON RAMEN
          </Typography>

          {props.isAuthenticated ? (
            <Button component={Link} to="/logout" color="inherit">
              Logout
            </Button>
          ) : (
            <>
              <Button component={Link} to="/signin" color="inherit">
                SignIn
              </Button>
              <Button component={Link} to="/signup" color="inherit">
                Sign up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

navBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(navBar);
