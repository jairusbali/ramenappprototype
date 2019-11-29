import React, { useState } from "react";

import OrderLayout from "./components/OrderLayout/OrderLayout";

import Checkout from "./containers/CheckoutSummary/CheckoutSummary";

const CartTest = () => {
  const [checkoutState, setCheckoutState] = useState(false);

  return (
    <div>
      <h1>Navbar here</h1>

      <button onClick={() => setCheckoutState(!checkoutState)}>Checkout</button>
      {checkoutState ? <Checkout /> : <OrderLayout />}
    </div>
  );
};

export default CartTest;
