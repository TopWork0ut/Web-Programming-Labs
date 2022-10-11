import React from "react";
import hotel1 from "../../Img/hotel1.jpg";
import hotel2 from "../../Img/hotel2.jpg";
import hotel3 from "../../Img/hotel3.jpg";

import ViewMoreButton from "./HomeSubComponents/ViewMoreButton";

export default function People() {
  return (
    <section class="test-monials-section">
      <div class="container">
        <ul>
          <li>
            <img src={hotel1} alt="Hotel 1" />
            <blockquote>
              "Excellent hotel with excellent location at the center, extremely
              comfortable. Upon arrival we were welcomed by the friendly
              reception staff."
            </blockquote>
            <cite> &mdash; Oliveriaa</cite>
          </li>

          <li>
            <img src={hotel2} alt="Hotel 2" />
            <blockquote>
              "Hotel Clark is perfectly situated in downtown Budapest, looking
              onto the Chain Bridge; one of the most emblematic historic sights
              of the city."
            </blockquote>
            <cite> &mdash; Victoria la pice</cite>
          </li>

          <li>
            <img src={hotel3} alt="Hotel 3" />
            <blockquote>
              "The newly renovated Hotel Victoria is located in the heart of
              historical downtown of Budapest, on the Buda side, directly on the
              riverside of the Danube."
            </blockquote>
            <cite> &mdash; Line-quine</cite>
          </li>
        </ul>
      </div>
      <ViewMoreButton />
    </section>
  );
}
