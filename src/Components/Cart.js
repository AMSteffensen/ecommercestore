import React from "react";

import { AiFillShopping } from "react-icons/ai";

const Cart = ({ cart, setOpenCart }) => {
  return (
    <>
      <button
        className="open-modal-btn"
        onClick={() => {
          setOpenCart(true);
        }}
      >
        {cart.length} <AiFillShopping />
      </button>
    </>
  );
};

export default Cart;
