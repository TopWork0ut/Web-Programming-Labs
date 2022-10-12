import React from "react";
import hotel from "../../Img/Hotel-PNG.png";

export default function Hero() {
  return (
    <section class="hero">
      <div class="container">
        <div class="left-col">
          <p class="sub-head">Travel conveniently with us</p>
          <h1>
            a website, where you <br /> can easily and quickly <br />
            rent a great hotel by yourself
          </h1>

          <div class="hero"></div>
        </div>

        <img src={hotel} alt="Hotel img" class="hero-img" />
      </div>
    </section>
  );
}
