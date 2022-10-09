import axios from "axios";
import { useState, useEffect } from "react";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import "./Styles/main.css";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("https://frend.rest/case/products").then((response) => {
      console.log("promise fulfilled");
      setAllProducts(response.data);
    });
  }, []);

  console.log(allProducts);

  return (
    <>
      <Navbar />
      <div className="container">
        <List products={allProducts} />
      </div>
    </>
  );
}

export default App;
