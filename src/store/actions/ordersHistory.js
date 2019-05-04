import * as actionTypes from "./actionTypes";
import axios from "../../axios-ramen";

export const fetchOrdersHistoryInit = () => {
  return {
    type: actionTypes.FETCH_ORDERS_HISTORY_INIT
  };
};

export const fetchOrdersHistorySuccess = history => {
  return {
    type: actionTypes.FETCH_ORDERS_HISTORY_SUCCESS,
    ordersHistory: history
  };
};

export const fetchOrdersHistoryFail = err => {
  return {
    type: actionTypes.FETCH_ORDERS_HISTORY_FAIL,
    error: err
  };
};

export const fetchOrdersHistory = (token, userId) => {
  return dispatch => {
    dispatch(fetchOrdersHistoryInit());

    axios
      .get(
        "/orders.json?auth=" +
          token +
          '&orderBy="userId"&equalTo="' +
          userId +
          '"'
      )
      .then(response => {
        dispatch(fetchOrdersHistorySuccess(response.data));
      })
      .catch(err => {
        dispatch(fetchOrdersHistoryFail(err));
      });
  };
};
