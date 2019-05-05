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
      opacity: 0.65
    }
  },
  Checked: {
    opacity: 0.65
  }
});

const CELL_HEIGHT = 250;
const GRID_LIST_TILE_SPACING = 64;

class GridListItems extends React.Component {
  getGridListCols = () => {
    if (isWidthUp("xl", this.props.width)) {
      return 3;
    }

    if (isWidthUp("lg", this.props.width)) {
      return 3;
    }

    if (isWidthUp("md", this.props.width)) {
      return 2;
    }
    if (isWidthUp("sm", this.props.width)) {
      return 2;
    }
    // xs
    return 1;
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList
          spacing={GRID_LIST_TILE_SPACING}
          cellHeight={CELL_HEIGHT}
          className={classes.gridList}
          cols={this.getGridListCols()}
        >
          {this.props.options.map(option => (
            <GridListTile
              className={classes.GridLIstTile}
              key={option}
              cols={option.cols || 1}
            >
              <img
                className={
                  option === this.props.choice
                    ? classes.Images + " " + classes.Checked
                    : classes.Images
                }
                src={process.env.PUBLIC_URL + optionImages[option]}
                // src={require(optionImages[option])}
                onClick={() => this.props.choiceHandler(option)}
                alt={option}
              />

              <GridListTileBar
                title={option}
                subtitle={
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      justifyContent: "space-around"
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "100%"
                      }}
                    >
                      {ramenOptions[option]}
                    </span>
                    <span
                      style={{
                        display: "inline-block",
                        width: "100%"
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
