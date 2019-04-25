import React from "react";

import classes from "./Button.module.scss";

// pass buttonType as "Success" or "Danger"
// for button style

const button = props => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.clicked}
      className={[classes.Button, classes[props.buttonType]].join(" ")}
    >
      {props.children}
    </button>
  );
};

export default button;
