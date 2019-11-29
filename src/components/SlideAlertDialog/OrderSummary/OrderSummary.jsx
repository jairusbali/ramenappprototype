import React from "react";

import { priceMapping } from "../../../CentralMenu/CentralMenu";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  orderSummary: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyContent: "space-between",
    span: {
      display: "block"
    },

    "&:nth-child(even)": {
      textAlign: "right"
    }
  }
};

/**
 *
 * @param {ramen, noodle, extras} props
 *
 *
 *
 */

const orderSummary = props => {
  const { classes } = props;

  const extraItemsPrices = props.extras.map(item => {
    return priceMapping[item];
  });

  const extrasTotalPrice = extraItemsPrices.reduce((a, b) => {
    return a + b;
  }, 0);

  const totalPrice = (priceMapping[props.ramen] + extrasTotalPrice).toFixed(2);

  const content = (
    <div className={classes.orderSummary}>
      <div>
        <div>{props.ramen}</div>
        <div>{props.noodle}</div>
        {props.extras.length > 0
          ? props.extras.map(item => {
              return <div key={item}>{item}</div>;
            })
          : null}
        <div>
          <strong>Price</strong>
        </div>
      </div>
      <div>
        <div>{priceMapping[props.ramen]}</div>
        <div>{priceMapping[props.noodle]}</div>
        {props.extras.length > 0
          ? props.extras.map(item => {
              return <div key={item}>{priceMapping[item]}</div>;
            })
          : null}
        <div>
          <strong>${totalPrice}</strong>
        </div>
      </div>
    </div>
  );

  return content;
};

export default withStyles(styles)(orderSummary);
