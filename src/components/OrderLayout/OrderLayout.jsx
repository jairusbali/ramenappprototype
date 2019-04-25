import React, { Component } from "react";

import Menu from "../../containers/Menu/Menu";
import Cart from "../../containers/Cart/Cart";

const orderLayout = () => {
  return (
    <>
      <Menu />
      <Cart />
    </>
  );
};

export default orderLayout;
