import React from "react";
import "../Styles/Modal.css";

const Modal = ({ cart, setCart, closeModal }) => {
  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };
  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));
  return (
    <div className="modal">
      <div className="modal-background">
        <div className="modal-container">
          <button className="modal-closeBtn" onClick={() => closeModal(false)}>
            X
          </button>
          <div className="modal-title">
            <h1>Shopping cart</h1>
          </div>
          <div className="modal-body">
            <p>Shopping items</p>
            {cartItems}
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

export default Modal;
