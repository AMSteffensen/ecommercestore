import React from "react";

import { AiFillShopping } from "react-icons/ai";

const Cart = ({ cartItems }) => {
  return (
    <div>
      {cartItems.length} <AiFillShopping />
    </div>
  );
};

export default Cart;
