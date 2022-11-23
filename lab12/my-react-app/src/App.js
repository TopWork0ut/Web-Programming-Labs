import "./App.css";
import "./Catalog.css";
import "./Cart.css";
import "./Item.css";

import React, { useEffect, useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Components/Home/Home";
import Catalog from "./Components/Catalog/Catalog";
import Cart from "./Components/Cart/Cart";
import SuccessfulOperation from "./Components/Cart/CartSuccessfulOperation";
import CartCheckout from "./Components/Cart/CartCheckout";
import Item from "./Components/Catalog/Item";
import Register from "./Components/Account/Registration";
import LogIn from "./Components/Account/LogIn";
import { AuthContext } from "./Authentification";

function App() {
  const { isAuthentificated } = useContext(AuthContext);

  return (
    <Routes>
      {console.log("isAuthentificated", isAuthentificated)}
      {console.log("email ", localStorage.getItem("email"))}

      <Route exact path="/" element={<Register />} />
      <Route path="/login" element={<LogIn />} />
      <Route
        path="/home"
        element={isAuthentificated ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/catalog"
        element={isAuthentificated ? <Catalog /> : <Navigate to="/login" />}
      />
      <Route
        path="/cart"
        element={isAuthentificated ? <Cart /> : <Navigate to="/login" />}
      />
      <Route
        path="/cart/checkout"
        element={
          isAuthentificated ? <CartCheckout /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/cart/success"
        element={
          isAuthentificated ? <SuccessfulOperation /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/Item/:ItemID"
        element={isAuthentificated ? <Item /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
