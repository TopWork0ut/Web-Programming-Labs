import "./App.css";
import "./Catalog.css";
import "./Cart.css";
import "./Item.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Catalog from "./Components/Catalog/Catalog";
import Cart from "./Components/Cart/Cart";
import SuccessfulOperation from "./Components/Cart/CartSuccessfulOperation";
import CartCheckout from "./Components/Cart/CartCheckout";
import Item from "./Components/Catalog/Item";
// import Register from "./Components/Account/Registration";
// import LogIn from "./Components/Account/LogIn";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/checkout" element={<CartCheckout />} />
      <Route path="/cart/success" element={<SuccessfulOperation />} />
      <Route path="/Item/:ItemID" element={<Item />} />
      {/* <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LogIn />} /> */}
    </Routes>
    // <Quotes />
  );
}

export default App;
