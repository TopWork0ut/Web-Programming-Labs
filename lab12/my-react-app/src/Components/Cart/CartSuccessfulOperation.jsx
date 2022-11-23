import React from "react";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";
import { cart_id_bold } from "./Cart";
import { Link } from "react-router-dom";
import "./CartSuccess.css";

export default function CartSuccessfulOperation() {
  return (
    <div>
      <NavBar bold_cart={cart_id_bold} />
      <div className="success_container">
        <img src={require(`../../Img/done.png`)} alt="" />
        <h1>Success</h1>
        <p>
          Your order will be prosessed soon. Wait till out managers will call
          you.
        </p>
        <button>
          <Link to="/catalog" style={{ textDecoration: "none" }}>
            <p>Go Back to Catalog</p>
          </Link>
        </button>
      </div>

      <Footer />
    </div>
  );
}
