import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerNavigation from "./DrawerNavigation/DrawerNavigation";

import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
    position: "sticky",
    top: 0,
    zIndex: 99
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function NavBar(props) {
  const { classes } = props;

  const [showDrawer, toggleShowDrawer] = useState(false);

  const toolbarItems = props.isAuthenticated ? (
    <>
      <Button component={Link} to="/menu" color="inherit">
        Menu
      </Button>
      {props.hasOrders ? (
        <Button component={Link} to="/orders/checkout" color="inherit">
          Checkout
        </Button>
      ) : null}

      <Button component={Link} to="/logout" color="inherit">
        Logout
      </Button>
    </>
  ) : (
    <>
      <Button component={Link} to="/signin" color="inherit">
        SignIn
      </Button>
      <Button component={Link} to="/signup" color="inherit">
        Sign up
      </Button>
    </>
  );

  const hamburger = (
    <IconButton
      className={classes.menuButton}
      color="inherit"
      aria-label="Menu"
    >
      <MenuIcon onClick={() => toggleShowDrawer(!showDrawer)} />
    </IconButton>
  );

  const drawer = (
    <DrawerNavigation show={showDrawer} toggleDrawer={toggleShowDrawer} />
  );

  console.log(showDrawer);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            KINTON RAMEN
          </Typography>
          {toolbarItems}
          {hamburger}
          {drawer}
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
