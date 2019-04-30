import React, { Component } from "react";

import Modal from "@material-ui/core/Modal";

const modal = props => {
  return (
    <Modal>
      <div> {props.children}</div>
    </Modal>
  );
};

export default modal;
