import React from "react";

const AddToCart = ({ cartItems, setCartItems }) => {
  console.log(cartItems);
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
