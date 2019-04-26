import * as actionTypes from "./actionTypes";

export const fetchOrdersInit = () => {
  return {
    type: actionTypes.ORDERS_INIT
  };
};

export const fetchOrdersSuccess = data => {
  return {
    type: actionTypes.ORDERS_SUCCESS,
    orders: data
  };
};

export const fetchOrdersFail = err => {
  return {
    type: actionTypes.ORDERS_FAIL,
    error: err
  };
};
