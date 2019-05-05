import React, { useState, useReducer, useEffect } from "react";
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

const navReducer = (state, action) => {
  switch (action.type) {
    case "AUTHENTICATED":
      return {
        Menu: "/menu",
        Logout: "/logout"
      };

    case "UNAUTHENTICATED":
      return initialNavItemsState;

    case "HAS_ORDERS":
      return {
        Menu: "/menu",
        Checkout: "/orders/checkout",
        Logout: "/logout"
      };

    default:
      return state;
  }
};

const initialNavItemsState = {
  "Sign in": "/signin",
  "Sign up": "/signup"
};

function NavBar(props) {
  const { classes } = props;

  const [showDrawer, toggleShowDrawer] = useState(false);

  const [navItemsState, dispatch] = useReducer(
    navReducer,
    initialNavItemsState
  );

  useEffect(() => {
    if (props.isAuthenticated) dispatch({ type: "AUTHENTICATED" });
    else dispatch({ type: "UNAUTHENTICATED" });

    if (props.hasOrders && props.isAuthenticated)
      dispatch({ type: "HAS_ORDERS" });
  }, [props.isAuthenticated, props.hasOrders]);

  const toolbarItems = Object.keys(navItemsState).map(key => (
    <Button key={key} component={Link} to={navItemsState[key]} color="inherit">
      {key}
    </Button>
  ));

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
