import React from "react";

import { ramenOptions } from "../../../CentralMenu/CentralMenu";

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
  const ramen = Object.keys(ramenOptions);

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Ramen
      </Typography>
      <GridListItem
        options={ramen}
        choice={props.ramenChoice}
        choiceHandler={props.ramenChoiceHandler}
      />
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    ramenChoice: state.menu.ramen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ramenChoiceHandler: ramen => dispatch(actions.addRamenType(ramen))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ramenMenu));
