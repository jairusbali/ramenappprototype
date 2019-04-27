import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import {
  optionImages,
  ramenOptions,
  priceMapping
} from "../../CentralMenu/CentralMenu";

const styles = theme => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  Images: {
    "&:hover": {
      opacity: 0.9
    }
  },
  Checked: {
    opacity: 0.65
  }
});

class GridListItems extends React.Component {
  getGridListCols = () => {
    if (isWidthUp("xl", this.props.width)) {
      return 4;
    }

    if (isWidthUp("lg", this.props.width)) {
      return 4;
    }

    if (isWidthUp("md", this.props.width)) {
      return 2;
    }
    if (isWidthUp("sm", this.props.width)) {
      return 1;
    }
    // xs
    return 1;
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList
          cellHeight={400}
          className={classes.gridList}
          cols={this.getGridListCols()}
        >
          {this.props.options.map(option => (
            <GridListTile key={option} cols={option.cols || 1}>
              <img
                className={
                  option === this.props.choice
                    ? classes.Images + " " + classes.Checked
                    : classes.Images
                }
                src={optionImages[option]}
                onClick={() => this.props.choiceHandler(option)}
                alt={option}
              />

              <GridListTileBar
                title={option}
                subtitle={
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      justifyContent: "space-around"
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        widht: "100%"
                      }}
                    >
                      {ramenOptions[option]}
                    </span>
                    <span
                      style={{
                        display: "block",
                        textAlign: "right",
                        widht: "100%"
                      }}
                    >
                      {priceMapping[option]}
                    </span>
                  </div>
                }
                // actionIcon={
                //   <IconButton className={classes.icon}>
                //     <InfoIcon />
                //   </IconButton>
                // }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

GridListItems.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withWidth()(GridListItems));
