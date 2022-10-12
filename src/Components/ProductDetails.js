import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../Styles/Modal.css";

const ProductDetails = ({ cart, setCart, clickedItem, closeModal }) => {
  const [spesificProduct, setSpesificProduct] = useState([]);
  const [spesificProductSizes, setSpesificProductSizes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://frend.rest/case/products/${clickedItem}`)
      .then((response) => {
        setSpesificProduct(response.data);
        setSpesificProductSizes(response.data.sizes);
      });
  }, []);

  const sizeToggle = (
    <>
      <select name="category-list" id="category-list">
        {spesificProductSizes.map((post, index) => (
          <option value="">{post.name}</option>
        ))}
      </select>
    </>
  );

  return (
    <div className="modal">
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-closeBtn">
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <div className="modal-title">
            <h1>{spesificProduct.name}</h1>
          </div>
          <div className="modal-body">
            <p>{spesificProduct.description}</p>
            <p>{spesificProduct.price}</p>
            {sizeToggle}
          </div>
          <div className="modal-footer">
            <button
              className="modal-footer-cancelBtn"
              onClick={() => closeModal(false)}
            >
              Cancel
            </button>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
