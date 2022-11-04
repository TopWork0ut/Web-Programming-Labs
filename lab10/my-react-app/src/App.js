import "./App.css";
import "./Catalog.css";
import "./Cart.css";
import "./Item.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Catalog from "./Components/Catalog/Catalog";
import Cart from "./Components/Cart/Cart";
import Item from "./Components/Catalog/Item";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Item/:ItemID" element={<Item />} />
    </Routes>
    // <Quotes />
  );
}

export default App;
