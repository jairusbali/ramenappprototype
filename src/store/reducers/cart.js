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
      console.log(updatedOrder);

      const updatedPrice = +state.subTotal + +action.orderPrice;

      console.log(updatedPrice);
      return { ...state, orders: updatedOrder, subTotal: updatedPrice };
      // state.orders.concat(newOrder),
      // ...updatedOrder};
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
