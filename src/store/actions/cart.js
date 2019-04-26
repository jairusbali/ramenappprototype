import * as actionTypes from "./actionTypes";

export const addOrder = (order, orderPrice) => {
  return {
    type: actionTypes.ADD_ORDER,
    order: order,
    orderPrice: orderPrice
  };
};

export const removeOrder = id => {
  return {
    type: actionTypes.REMOVE_ORDER,
    id: id
  };
};
