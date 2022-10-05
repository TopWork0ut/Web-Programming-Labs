import React from "react";
import person1 from "../Img/person1.jpeg";
import person2 from "../Img/person2.jpg";
import person3 from "../Img/person3.jpg";

export default function People() {
  return (
    <section class="test-monials-section">
      <div class="container">
        <ul>
          <li>
            <img src={person1} alt="Person 1" />
            <blockquote>
              "The HotelSeeker has really automated some of our journeys
              processes. We now spend less time finding hotels. It’s making very
              easy for us. Thanks to its scheduling feature, we don’t need to
              waste time by seeking some hotels."
            </blockquote>
            <cite> &mdash; Oliver Mauti</cite>
          </li>

          <li>
            <img src={person2} alt="Person 2" />
            <blockquote>
              "This website allows me to find any hotel from my smartphone where
              I want and when I want to. The interface is easy to navigate and I
              find everything I need quickly. I can’t wait for my new trip!"
            </blockquote>
            <cite> &mdash; Kindi Rouse</cite>
          </li>

          <li>
            <img src={person3} alt="Person 3" />
            <blockquote>
              "The HotelSeeker is an excellent webstite. All functions are
              convenient and made me feel very comfortable. I’m also very
              satisfied with the final result!."
            </blockquote>
            <cite> &mdash; Dwaine Jons</cite>
          </li>
        </ul>
      </div>
    </section>
  );
}
