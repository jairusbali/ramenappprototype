import * as actionTypes from "./actionTypes";

export const addOrder = (order, orderPrice) => {
  return {
    type: actionTypes.ADD_ORDER,
    order: order,
    orderPrice: orderPrice
  };
};
