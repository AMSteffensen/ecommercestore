import React from "react";

const List = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((products, i) => (
          <>
            <div class="product" key={i}>
              <div className="product-description">
                <h3 class="product-title"> {products.name}</h3>
                <p class="procut-price">{products.price}</p>
              </div>
              <img class="product-image" src={products.images[0]}></img>
              <button class="product-button">Add to cart</button>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default List;
