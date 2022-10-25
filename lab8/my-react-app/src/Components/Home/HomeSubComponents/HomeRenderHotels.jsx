import React from "react";
// import { list } from "../../Catalog/Catalog";
// import { viewMore } from "./ViewMoreButton";
import person1 from "../../../Img/person1.jpg";
import person2 from "../../../Img/person2.jpg";
import person3 from "../../../Img/person3.jpg";
import person4 from "../../../Img/person4.jpg";
import person5 from "../../../Img/person5.jpg";
import person6 from "../../../Img/person6.jpg";

export const list = [
  {
    id: 1,
    name: "Oliveriaa",
    image: person1,
    description:
      "Excellent hotel with excellent location at the center, extremely comfortable. Upon arrival we were welcomed by the friendly reception staff.",
  },
  {
    id: 2,
    name: "Victoria la pice",
    image: person2,
    description:
      "Hotel Clark is perfectly situated in downtown Budapest, looking onto the Chain Bridge; one of the most emblematic historic sights of the city",
  },
  {
    id: 3,
    name: "Line-quine",
    image: person3,
    description:
      "The newly renovated Hotel Victoria is located in the heart of historical downtown of Budapest, on the Buda side.",
  },
  {
    id: 4,
    name: "MonoBahm",
    image: person4,
    description:
      "Great hotel with excellent location at the center, extremely comfortable. Upon arrival we were welcomed by the friendly reception staff.",
  },
  {
    id: 5,
    name: "Line-quine",
    image: person5,
    description:
      "The newly renovated Hotel Victoria is located in the heart of historical downtown of Budapest, on the Buda side.",
  },
  {
    id: 6,
    name: "MonoBahm",
    image: person6,
    description:
      "Great hotel with excellent location at the center, extremely comfortable. Upon arrival we were welcomed by the friendly reception staff.",
  },
];

function RenderHomeHotels({ list, viewMore }) {
  // const [viewMore, setViewMore] = useState(false);
  let numOfPrintedHotels;
  {
    viewMore ? (numOfPrintedHotels = 6) : (numOfPrintedHotels = 3);
  }
  const listItems = list.slice(0, numOfPrintedHotels).map((element) => {
    return (
      <ul key={element.id}>
        <li>
          <img src={element.image} alt="Hotel" />
          <blockquote>{element.description}</blockquote>
          <cite> &mdash; {element.name}</cite>
        </li>
      </ul>
    );
  });
  // return <div id="list_of_hotels">{listItems}</div>;
  return <div className="container">{listItems}</div>;
}

export default function HomeRenderHotels({ viewMore }) {
  return (
    // <div className="container">
    <RenderHomeHotels list={list} viewMore={viewMore} />
    // </div>
  );
}
