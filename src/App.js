import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import Navbar from "./Components/Navbar";
import Item from "./Components/Item";
import "./Styles/main.css";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [sortList, setSortList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    axios.get("https://frend.rest/case/products").then((response) => {
      setAllProducts(response.data);
    });
  }, []);

  // set sortList to allProducts
  useEffect(() => {
    setSortList(allProducts);
  }, [allProducts]);

  // function to get filtered list
  const getFilteredList = () => {
    if (!selectedCategory) {
      return sortList;
    }
    return sortList.filter((product) =>
      product.categories.includes(selectedCategory)
    );
  };

  let filteredList = useMemo(getFilteredList, [selectedCategory, sortList]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <Navbar cartItems={cartItems} />
      <div className="container">
        <div className="filter-container">
          <div>Filter by Category:</div>
          <div>
            <select
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              <option value="Women">Women</option>
              <option value="Dresses">Dresses</option>
              <option value="Skirts">Skirts</option>
              <option value="Tops">Tops</option>
              <option value="Trousers">Trousers</option>
            </select>
          </div>
        </div>
        {filteredList.map((products, index) => (
          <Item
            products={allProducts}
            setCartItems={setCartItems}
            cartItems={cartItems}
            {...products}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

export default App;
