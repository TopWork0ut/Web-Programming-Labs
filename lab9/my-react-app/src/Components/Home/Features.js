import React from "react";
import reception from "../../Img/reception.jpg";

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <ul>
          <li>Big list of hotels</li>
          <li>24/7 rentint supprot</li>
          <li>Real time collaboration</li>
          <li>Convenient user interface</li>
          <li>Fast announcement</li>
          <li>Photo gallery</li>
        </ul>
        <img src={reception} alt="phone" />
      </div>
    </section>
  );
}
