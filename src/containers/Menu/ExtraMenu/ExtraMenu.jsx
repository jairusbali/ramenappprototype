import React from "react";

import { additionalToppingsOptions } from "../../../CentralMenu/CentralMenu";

import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import GridCheckboxList from "../../../components/GridCheckboxList/GridCheckboxList";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const extraMenu = props => {
  return (
    <div className={props.classes.root}>
      <Typography variant="h5" component="h3">
        Extra
      </Typography>
      <GridCheckboxList
        options={additionalToppingsOptions}
        checkedAction={props.toggleExtraItem}
        checkedItems={props.checkedExtras}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    checkedExtras: state.menu.extras
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleExtraItem: extra => dispatch(actions.toggleExtraItem(extra))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(extraMenu));
