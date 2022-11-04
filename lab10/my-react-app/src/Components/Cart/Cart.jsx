import React, { useState, useEffect } from "react";

import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const cart_id_bold = "bold";

function Cart() {
  const hotelsInCart = useSelector((state) => state.hotelsInCart);

  // });
  console.log("hotelsInCart:", hotelsInCart);

  return (
    <div>
      <NavBar bold_cart={cart_id_bold} />
      <div className="main">
        <div className="caption_div">
          <p className="caption">Shopping Cart</p>
        </div>

        {/* {cartHotels.map((hotel) => (
          <CartItem key={hotel.id} hotel={hotel} />
        ))} */}
        {console.log("hotelsInCart before rendering", hotelsInCart)}
        {hotelsInCart === undefined || hotelsInCart.length === 0 ? (
          <div className="empty_cart">
            The Cart is empty now, try to add some hotels in catalog
          </div>
        ) : (
          <RenderCart hotelsInCart={hotelsInCart} />
          // {cartHotels.map((hotel) => (
          //   <CartItem key={hotel.id} hotel={hotel} />
          // ))}
        )}
        <div className="pre_footer_buttons">
          <button>
            <Link to="/catalog" style={{ textDecoration: "none" }}>
              <p>Back to Catalog</p>
            </Link>
          </button>
          <button>
            <Link to="/catalog" style={{ textDecoration: "none" }}>
              <p>Continue</p>
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function RenderCart({ hotelsInCart }) {
  console.log("cart hotels ", hotelsInCart);
  return (
    <div className="item_carts_div">
      {/* {h !== undefined && ( */}
      {hotelsInCart.map((hotel) => (
        <CartItem key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}
export default Cart;
