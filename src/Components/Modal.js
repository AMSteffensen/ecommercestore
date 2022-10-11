import React from "react";
import "../Styles/Modal.css";

const Modal = ({ cart, setCart, closeModal }) => {
  console.log(cart);
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
          <div className="modal-closeBtn">
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <div className="modal-title">
            <h1>Product details</h1>
          </div>
          <div className="modal-body">
            <p>Product description</p>
            {cartItems}
          </div>
          <div className="modal-footer">
            <button onClick={() => closeModal(false)}>Cancel</button>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
