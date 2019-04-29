import * as actionTypes from "../actions/actionTypes";

const initialState = {
  sending: false,
  purchased: false
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
        purchased: true
      };
    }

    case actionTypes.SEND_ORDERS_FAIL: {
      return {
        ...state,
        sending: false
      };
    }

    default:
      return state;
  }
};

export default reducer;
