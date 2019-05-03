import * as actionTypes from "./actionTypes";
import axios from "../../axios-ramen";

export const submitOrders = (token, orderData, deliveryData, userId) => {
  return dispatch => {
    dispatch(sendOrdersInit());

    const data = {
      userId: userId,
      submissionTime: new Date(),
      orders: { ...orderData },
      deliveryInfo: { ...deliveryData }
    };

    // To test data integrity before sending to Firebase
    // setTimeout(() => {
    //   console.log("sending", data);
    //   dispatch(sendOrdersSuccess("SUCCESS!"));
    // }, 3000);

    axios
      .post("/orders.json?auth=" + token, data)
      .then(response => {
        dispatch(sendOrdersSuccess(response.data.name));
      })
      .catch(err => {
        dispatch(sendOrdersFail(err.response.data.error));
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
    purchaseOrderId: id
  };
};
export const sendOrdersFail = err => {
  return {
    type: actionTypes.SEND_ORDERS_FAIL,
    error: err
  };
};
