import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

const styles = {
  list: {
    width: 250,
    textAlign: "center"
  }
};

const DrawerNavigation = props => {
  const { classes } = props;
  const drawerContent = (
    <div className={classes.list}>
      <List>
        {Object.keys(props.navItemsState).map(key => (
          <ListItem
            button
            key={key}
            component={Link}
            to={props.navItemsState[key]}
          >
            <ListItemText inset primary={key} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (
    <Drawer
      anchor="right"
      open={props.show}
      onClose={() => props.toggleDrawer(!props.show)}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={() => props.toggleDrawer(false)}
        onKeyDown={() => props.toggleDrawer(false)}
      >
        {drawerContent}
      </div>
    </Drawer>
  );
};

export default withStyles(styles)(DrawerNavigation);
