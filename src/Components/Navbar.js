import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <ul class="nav-links">
          <li>
            <a class="nav-links">Home</a>
          </li>
          <li>
            <a class="nav-links">ProductListing</a>
          </li>
          <li>
            <a class="nav-links">Cart</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
