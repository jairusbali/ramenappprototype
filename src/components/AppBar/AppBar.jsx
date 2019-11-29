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

import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import "./AppBar.scss";
// if (isWidthUp("xl", this.props.width)) {
//   return 4;
// }

import { Link } from "react-router-dom";
import Path from "../../constants/path";

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
        Menu: Path.MENU,
        Logout: Path.LOGOUT
      };

    case "UNAUTHENTICATED":
      return initialNavItemsState;

    case "HAS_ORDERS":
      return {
        Menu: Path.MENU,
        Checkout: Path.CHECKOUT,
        Logout: Path.LOGOUT
      };

    default:
      return state;
  }
};

const initialNavItemsState = {
  "Sign in": Path.SIGNIN,
  "Sign up": Path.SIGNUP
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

  const toolbarItems = isWidthDown("xs", props.width) ? (
    <IconButton
      onClick={() => toggleShowDrawer(!showDrawer)}
      className={classes.menuButton}
      color="inherit"
      aria-label="Menu"
    >
      <MenuIcon />
    </IconButton>
  ) : (
    Object.keys(navItemsState).map(key => (
      <Button
        className="appbar-button"
        key={key}
        component={Link}
        to={navItemsState[key]}
        color="inherit"
      >
        {key}
      </Button>
    ))
  );

  const drawer = (
    <DrawerNavigation
      navItemsState={navItemsState}
      show={showDrawer}
      toggleDrawer={toggleShowDrawer}
    />
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" className="kinton-appbar">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <img
              className="kinton-logo"
              src={process.env.PUBLIC_URL + "/assets/images/kinton_logo.png"}
              alt="kinton logo"
            />
            KINTON RAMEN
          </Typography>
          {toolbarItems}

          {drawer}
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withWidth()(withStyles(styles)(NavBar));
