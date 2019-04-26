import React from "react";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const logout = props => {
  props.logout();

  return <Redirect to="/" />;
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(logout);