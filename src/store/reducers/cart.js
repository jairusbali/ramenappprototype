import * as actionTypes from "../actions/actionTypes";

// orders composed of objects {ramen:string, type: string, extras:[]}
const initialState = {
  orders: [],
  subTotal: +0,
  purchased: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER: {
      const updatedOrder = [...state.orders];
      const newOrder = { ...action.order };
      updatedOrder.push(newOrder);
      const updatedPrice = +state.subTotal + +action.orderPrice;

      return { ...state, orders: updatedOrder, subTotal: updatedPrice };
    }
    case actionTypes.REMOVE_ORDER: {
      const [currOrder] = state.orders.filter(order => {
        return order.id === action.id;
      });

      // recalculate total by removing item price
      const newTotal = state.subTotal - +currOrder.orderPrice;

      const updatedOrder = [...state.orders].filter(order => {
        return order.id !== action.id;
      });

      return { ...state, orders: updatedOrder, subTotal: newTotal };
    }
    default:
      return state;
  }
};

export default reducer;
