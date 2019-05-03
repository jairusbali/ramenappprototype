import * as actionTypes from "../actions/actionTypes";

const initialState = {
  sending: false,
  purchaseOrderId: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_ORDERS_INIT: {
      return {
        ...state,
        sending: true
      };
    }

    case actionTypes.SEND_ORDERS_SUCCESS: {
      return {
        ...state,
        sending: false,
        purchaseOrderId: action.purchaseOrderId
      };
    }

    case actionTypes.SEND_ORDERS_FAIL: {
      return {
        ...state,
        sending: false,
        error: action.error
      };
    }

    default:
      return state;
  }
};

export default reducer;
