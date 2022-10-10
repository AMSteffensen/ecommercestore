import React from "react";
import AddToCart from "./AddToCart";
const List = ({ products, cartItems, setCartItems }) => {
  return (
    <div>
      <ul>
        {products.map((products, i) => (
          <>
            <div className="product" key={i}>
              <div className="product-description">
                <h3 className="product-title"> {products.name}</h3>
                <p className="procut-price">{products.price}</p>
              </div>
              <img className="product-image" src={products.images[0]}></img>
              <AddToCart setCartItems={setCartItems} cartItems={cartItems} />
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default List;
