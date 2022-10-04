import React from "react";
import hotel from "../Img/Hotel-PNG.png";
import video from "../Img/gallery.png";

export default function Hero() {
  return (
    <section class="hero">
      <div class="container">
        <div class="left-col">
          <p class="sub-head">Travel conveniently with us</p>
          <h1>a website, where you can rent a hotel easily</h1>

          <div class="hero">
            <a href="#" class="primery">
              Find hotel
            </a>
            <a href="#" class="gallery">
              <img src={video} alt="gallery img" />
              Watch the gallery
            </a>
          </div>
        </div>

        <img src={hotel} alt="Hotel img" class="hero-img" />
      </div>
    </section>
  );
}
