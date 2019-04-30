import * as actionTypes from "./actionTypes";
import axios from "../../axios-ramen";

export const submitOrders = (token, orderData) => {
  return dispatch => {
    dispatch(sendOrdersInit());

    axios
      .post("/orders.json?auth=" + token, orderData)
      .then(response => {
        dispatch(sendOrdersSuccess(response.data.name));
      })
      .catch(err => {
        dispatch(sendOrdersFail(err));
      });
  };
};

export const sendOrdersInit = () => {
  return {
    type: actionTypes.SEND_ORDERS_INIT
  };
};

export const sendOrdersSuccess = id => {
  return {
    type: actionTypes.SEND_ORDERS_SUCCESS,
    orderId: id
  };
};
export const sendOrdersFail = err => {
  return {
    type: actionTypes.SEND_ORDERS_FAIL,
    error: err
  };
};
