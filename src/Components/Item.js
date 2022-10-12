import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import ProductDetails from "./ProductDetails";
const Item = ({
  name,
  category,
  setCartItems,
  setOpenCart,
  setOpenDetails,
  cartItems,
  cart,
  clickedItem,
  setClickedItem,
  products,
  price,
  images,
  id,
  addToCart,
}) => {
  return (
    <div key={id}>
      <div className="product">
        <div className="product-description">
          <h3 className="product-title"> {name}</h3>
          <p className="procut-price">{price}</p>
          <p className="procut-category">{category}</p>
        </div>
        <img className="product-image" src={images[0]}></img>
        <button
          className="product-button"
          onClick={() => {
            addToCart(
              { name, category, price, images, id },
              setCartItems(cartItems + 1)
            );
          }}
        >
          Add to cart
        </button>

        {id}
        <button
          className="open-modal-btn"
          onClick={() => {
            setOpenDetails(true);
            setClickedItem(id);
          }}
        >
          More details
        </button>
      </div>
    </div>
  );
};

export default Item;
