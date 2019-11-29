import * as actionTypes from "../actions/actionTypes";

const initialState = {
  error: null,
  ordersHistory: null,
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_HISTORY_INIT:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.FETCH_ORDERS_HISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ordersHistory: action.ordersHistory
      };

    case actionTypes.FETCH_ORDERS_HISTORY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default reducer;
