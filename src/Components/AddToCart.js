import React from "react";

const AddToCart = ({ cartItems, setCartItems }) => {
  return (
    <div>
      <button
        className="product-button"
        onClick={() => setCartItems(cartItems + 1)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
