import axios from "axios";
import { useState, useEffect } from "react";
import List from "./Components/List";
import Navbar from "./Components/Navbar";

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
      <List products={allProducts} />
    </>
  );
}

export default App;
