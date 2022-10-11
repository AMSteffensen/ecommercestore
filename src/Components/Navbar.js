import React from "react";
import Cart from "./Cart";

const Navbar = ({ cart, setOpenCart, cartItems }) => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" width="50%" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <Cart cartItems={cartItems} setOpenCart={setOpenCart} cart={cart} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
