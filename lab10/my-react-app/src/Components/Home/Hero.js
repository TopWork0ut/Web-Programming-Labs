import React from "react";
import hotel from "../../Img/Hotel-PNG.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="left-col">
          <p className="sub-head">Travel conveniently with us</p>
          <h1>
            a website, where you <br /> can easily and quickly <br />
            rent a great hotel by yourself
          </h1>

          <div className="hero"></div>
        </div>

        <img src={hotel} alt="Hotel img" className="hero-img" />
      </div>
    </section>
  );
}
