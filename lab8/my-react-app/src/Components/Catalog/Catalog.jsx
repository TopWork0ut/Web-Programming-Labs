import React, { useState } from "react";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";

import Selects from "./Selects";
import ApplyButton from "./ApplyButton";

import hotel1 from "../../Img/hotel1.jpg";
import hotel2 from "../../Img/hotel2.jpg";
import hotel3 from "../../Img/hotel3.jpg";
import hotel4 from "../../Img/hotel4.jpeg";
import star from "../../Img/star.png";

import { placeOtions } from "./Selects";
import { costTypeSortingOptions } from "./Selects";
import { starsTypeSortingOptions } from "./Selects";

const catalog_id_bold = "bold";
const search_in_catalog = "block";
const width_nav = "28%";

export const list = [
  {
    id: 1,
    name: "Oliveriaa",
    image: hotel1,
    description:
      "Excellent hotel with excellent location at the center, extremely comfortable. Upon arrival we were welcomed by the friendly reception staff.",
    cost: 1231,
    countOfStars: 4,
    place: "Beach",
  },
  {
    id: 2,
    name: "Victoria la pice",
    image: hotel2,
    description:
      "Hotel Clark is perfectly situated in downtown Budapest, looking onto the Chain Bridge; one of the most emblematic historic sights of the city",
    cost: 972,
    countOfStars: 2,
    place: "Mountains",
  },
  {
    id: 3,
    name: "Line-quine",
    image: hotel3,
    description:
      "The newly renovated Hotel Victoria is located in the heart of historical downtown of Budapest, on the Buda side.",
    cost: 1799,
    countOfStars: 5,
    place: "Beach",
  },
  {
    id: 4,
    name: "MonoBahm",
    image: hotel4,
    description:
      "Great hotel with excellent location at the center, extremely comfortable. Upon arrival we were welcomed by the friendly reception staff.",
    cost: 829,
    countOfStars: 3,
    place: "Beach",
  },
];

function RenderHotels({ list }) {
  console.log("Rendering objects");
  // let a;
  const [currentElemtent, setSelectedElement] = useState();

  const passElement = (element) => {
    setSelectedElement(element);
  };
  // const navigation = useNavigation();
  const listItems = list.map((element) => {
    return (
      <ul key={element.id}>
        <li>
          <img src={element.image} alt="Hotel" className="hotels_images" />
          <blockquote>{element.description}</blockquote>
          <p>{element.cost}$</p>
          <cite> &mdash; {element.name}</cite>
          <br />

          <button>
            <a href={`/Item/${element.id}`}>View more </a>
          </button>

          <div className="stars_div">
            {Array.apply(null, { length: element.countOfStars }).map((e, i) => (
              <img
                src={star}
                key={i}
                alt="stars"
                className="stars_images"></img>
            ))}
          </div>
        </li>
      </ul>
    );
  });
  return <div id="list_of_hotels">{listItems}</div>;
}

const Catalog = () => {
  const [parentList, setList] = useState(list);
  // const [filteredList, setFilteredList] = useState(list);
  const [cancelButtonPressed, setCancelButtonPressed] = useState(false);

  const [selectedPlace, setSelectedPlace] = useState();
  const [selectedCostTypeSorting, setSelectedCostTypeSorting] = useState();
  const [selectedStarsTypeSorting, setSelectedStarsTypeSorting] = useState();

  const [inputMessage, setInputMessage] = useState();

  const passData = (filtereListFromChild) => {
    setList(filtereListFromChild);
  };

  const buttonPressed = (pressed) => {
    setCancelButtonPressed(pressed);
    setSelectedPlace(placeOtions[0].value);
    setSelectedCostTypeSorting(costTypeSortingOptions[0].value);
    setSelectedStarsTypeSorting(starsTypeSortingOptions[0].value);
    setInputMessage("");
    setList(list);
    pressed = !pressed;
  };

  const [inputText, setInputText] = useState();

  const passInputText = (InputTextFromNavBar) => {
    setInputText(InputTextFromNavBar);
    console.log("Input text" + " " + inputText + " " + InputTextFromNavBar);
    // if (applyButtonPressed === true) {
    setList(searchHotelByName(InputTextFromNavBar));
  };

  function searchHotelByName(input) {
    const filteredData = list.filter((foundHotels) => {
      if (input.trim().length === 0) {
        return foundHotels;
      } else {
        return foundHotels.name.toLowerCase().includes(input);
      }
    });
    return filteredData;
  }

  return (
    <div>
      <NavBar
        bold_catalog={catalog_id_bold}
        search_in_catalog={search_in_catalog}
        width_nav={width_nav}
        passInputText={passInputText}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
      />
      <div id="filters">
        <div id="container">
          <div className="filer_container">
            <Selects
              passData={passData}
              list={parentList}
              selectedPlace={selectedPlace}
              setSelectedPlace={setSelectedPlace}
              selectedCostTypeSorting={selectedCostTypeSorting}
              setSelectedCostTypeSorting={setSelectedCostTypeSorting}
              selectedStarsTypeSorting={selectedStarsTypeSorting}
              setSelectedStarsTypeSorting={setSelectedStarsTypeSorting}
            />
            <ApplyButton
              buttonPressed={buttonPressed}
              setCancelButtonPressed={setCancelButtonPressed}
            />
          </div>
          <RenderHotels list={parentList} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
