import "./App.css";
import "./Catalog.css";
import "./Cart.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Components/Home";
import Catalog from "./Components/Catalog";
import Cart from "./Components/Cart";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
