import React from "react";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";

import Selects from "./Selects";
import ApplyButton from "./ApplyButton";

import hotel1 from "../../Img/hotel1.jpg";
import hotel2 from "../../Img/hotel2.jpg";
import hotel3 from "../../Img/hotel3.jpg";
import hotel4 from "../../Img/hotel4.jpeg";

const catalog_id_bold = "bold";
const search_in_catalog = "block";
const width_nav = "28%";

const list = [
  {
    id: "1",
    name: "Oliveriaa",
    image: hotel1,
    description:
      "Excellent hotel with excellent location at the center, extremely comfortable. Upon arrival we were welcomed by the friendly reception staff.",
    cost: "1231$",
  },
  {
    id: "2",
    name: "Victoria la pice",
    image: hotel2,
    description:
      "Hotel Clark is perfectly situated in downtown Budapest, looking onto the Chain Bridge; one of the most emblematic historic sights of the city",
    cost: "972$",
  },
  {
    id: "3",
    name: "Line-quine",
    image: hotel3,
    description:
      "The newly renovated Hotel Victoria is located in the heart of historical downtown of Budapest, on the Buda side.",
    cost: "1799$",
  },
  {
    id: "4",
    name: "MonoBahm",
    image: hotel4,
    description:
      "Great hotel with excellent location at the center, extremely comfortable. Upon arrival we were welcomed by the friendly reception staff.",
    cost: "829$",
  },
];

function RenderHotels({ list }) {
  const listItems = list.map((element) => {
    return (
      <ul>
        <li>
          <img src={element.image} alt="Hotel 1" />
          <blockquote>{element.description}</blockquote>
          <p>{element.cost}</p>
          <cite> &mdash; {element.name}</cite>
          <br />
          <button>View more</button>
        </li>
      </ul>
    );
  });
  return <div id="list_of_hotels">{listItems}</div>;
}

const Catalog = () => {
  return (
    <div>
      <NavBar
        bold_catalog={catalog_id_bold}
        search_in_catalog={search_in_catalog}
        width_nav={width_nav}
      />
      <div id="filters">
        <div id="container">
          <div className="filer_container">
            <Selects />
            <ApplyButton />
          </div>
          <RenderHotels list={list} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
