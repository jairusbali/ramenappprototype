import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const styles = theme => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class CheckboxList extends React.Component {
  getGridListCols = () => {
    if (isWidthUp("xl", this.props.width)) {
      return 4;
    }

    if (isWidthUp("lg", this.props.width)) {
      return 4;
    }

    if (isWidthUp("md", this.props.width)) {
      return 3;
    }
    // xs
    return 2;
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList
          className={classes.gridList}
          cols={this.getGridListCols()}
          cellHeight="auto"
        >
          {this.props.options.map(value => (
            <GridListTile key={value.primary} cols={1}>
              <ListItem
                key={value.primary}
                role={undefined}
                dense
                button
                onClick={() => this.props.checkedAction(value.primary)}
              >
                <Checkbox
                  checked={
                    this.props.checkedItems.indexOf(value.primary) !== -1
                  }
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText
                  primary={value.primary}
                  secondary={value.secondary}
                />
              </ListItem>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withWidth()(CheckboxList));
