import React from "react";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";

const cart_id_bold = "bold";

const Cart = () => {
  return (
    <div>
      <NavBar bold_cart={cart_id_bold} />
      <div class="main">
        <h1>Cart Page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
