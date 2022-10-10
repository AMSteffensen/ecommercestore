import React from "react";
import AddToCart from "./AddToCart";

const Item = ({ name, category, setCartItems, cartItems, price, images }) => {
  return (
    <div>
      <div className="product">
        <div className="product-description">
          <h3 className="product-title"> {name}</h3>
          <p className="procut-price">{price}</p>
          <p className="procut-category">{category}</p>
        </div>
        <img className="product-image" src={images[0]}></img>
        <AddToCart setCartItems={setCartItems} cartItems={cartItems} />
      </div>
    </div>
  );
};

export default Item;
