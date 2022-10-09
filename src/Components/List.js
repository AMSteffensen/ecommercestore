import React from "react";

const List = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((products, i) => (
          <>
            <li key={i}> {products.name}</li>
            <img class="product-image" src={products.images[0]}></img>
          </>
        ))}
      </ul>
    </div>
  );
};

export default List;
