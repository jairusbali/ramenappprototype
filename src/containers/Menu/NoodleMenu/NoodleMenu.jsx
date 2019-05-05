import React from "react";

import { noodleOptions } from "../../../CentralMenu/CentralMenu";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import GridListItem from "../../../components/GridListItems/GridListItems";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const ramenMenu = props => {
  const { classes } = props;
  const noodleType = Object.keys(noodleOptions);

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h3">
        Noodle Type
      </Typography>
      <GridListItem
        options={noodleType}
        choice={props.noodleChoice}
        choiceHandler={props.noodleChoiceHandler}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    noodleChoice: state.menu.noodle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    noodleChoiceHandler: noodle => dispatch(actions.addNoodleType(noodle))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ramenMenu));
