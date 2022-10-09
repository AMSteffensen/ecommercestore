import React from "react";

const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <div class="logo">
          <img src="/logo.png" alt="Logo" width="50%" />
        </div>
        <ul class="nav-links">
          <li>
            <a href="/" class="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/products" class="nav-link">
              ProductListing
            </a>
          </li>
          <li>
            <a href="/cart" class="nav-link">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
