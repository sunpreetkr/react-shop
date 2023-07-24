import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsList from "./containers/ProductsList/ProductsList";
import SearchResultLoader from "./components/SearchResultLoader";

import App from "./App";
import Home from "./containers/Home/Home";
import ProductPage from "./containers/ProductPage/ProductPage";
import Cart from "./containers/Cart";
import { getProducts } from "./services/prodcart-service";

library.add(faHeart);

const AppRouter = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
		setProducts(await getProducts());
	};

  // Fetch products data (example using useEffect)
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="/search/:searchTerm" element={<SearchResultLoader products={products} />} />
          <Route path="products/:productId" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppRouter />);