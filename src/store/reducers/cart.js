import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER:
      const updatedOrder = [...state.orders];
      const newOrder = { ...action.order };
      updatedOrder.push(newOrder);
      return { ...state, orders: updatedOrder };
    // state.orders.concat(newOrder),
    // ...updatedOrder};

    default:
      return state;
  }
};

export default reducer;
