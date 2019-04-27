import * as actionTypes from "../actions/actionTypes";

// orders composed of objects {ramen:string, type: string, extras:[]}
const initialState = {
  orders: [],
  subTotal: +0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER:
      const updatedOrder = [...state.orders];
      const newOrder = { ...action.order };
      updatedOrder.push(newOrder);
      console.log(updatedOrder);

      const updatedPrice = +state.subTotal + +action.orderPrice;

      console.log(updatedPrice);
      return { orders: updatedOrder, subTotal: updatedPrice };
    // state.orders.concat(newOrder),
    // ...updatedOrder};

    default:
      return state;
  }
};

export default reducer;
