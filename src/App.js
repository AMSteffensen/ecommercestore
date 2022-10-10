import axios from "axios";
import { useState, useEffect } from "react";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import "./Styles/main.css";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("https://frend.rest/case/products").then((response) => {
      console.log("promise fulfilled");
      setAllProducts(response.data);
    });
  }, []);

  return (
    <>
      <Navbar cartItems={cartItems} />
      <div className="container">
        <List
          products={allProducts}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      </div>
    </>
  );
}

export default App;
