import React, { useState, useEffect } from "react";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";

import Selects from "./Selects";
import ApplyButton from "./ApplyButton";

import star from "../../Img/star.png";
import Loading from "./Loading";
import { getAllHotels } from "../../Api";
import { placeOtions } from "./Selects";
import { costTypeSortingOptions } from "./Selects";
import { starsTypeSortingOptions } from "./Selects";

const catalog_id_bold = "bold";
const search_in_catalog = "block";
const width_nav = "28%";

function RenderHotels({ list }) {
  const [currentElemtent, setSelectedElement] = useState();

  const passElement = (element) => {
    setSelectedElement(element);
  };
  const listItems = list.map((element) => {
    return (
      <ul key={element.id}>
        <li>
          <img
            src={require(`../../Img/${element.image}`)}
            alt="Hotel"
            className="hotels_images"
          />
          <blockquote>{element.description}</blockquote>
          <p>{element.cost}$</p>
          <cite> &mdash; {element.name}</cite>
          <br />
          <button>
            <a href={`/Item/${element.id}`}>View more </a>
          </button>
          <div className="stars_div">
            {console.log("stars", element.count_of_stars)}
            {Array.apply(null, { length: element.count_of_stars }).map(
              (e, i) => (
                <img
                  src={star}
                  key={i}
                  alt="stars"
                  className="stars_images"></img>
              )
            )}
          </div>
        </li>
      </ul>
    );
  });
  return <div id="list_of_hotels">{listItems}</div>;
}

const Catalog = () => {
  const [list, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const [parentList, setList] = useState([]);
  useEffect(() => {
    setLoading(true);
    getAllHotels()
      .then((response) => {
        console.log("response data:" + response.data);
        setHotels(response.data);
        setList(response.data);
      })
      .then(() => {
        setTimeout(() => setLoading(false));
      });
  }, []);

  const [cancelButtonPressed, setCancelButtonPressed] = useState(false);

  const [selectedPlace, setSelectedPlace] = useState();
  const [selectedCostTypeSorting, setSelectedCostTypeSorting] = useState();
  const [selectedStarsTypeSorting, setSelectedStarsTypeSorting] = useState();

  const [inputMessage, setInputMessage] = useState();

  const passData = (filtereListFromChild) => {
    console.log("filrered", filtereListFromChild);
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
              list={list}
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
          {loading ? <Loading /> : <RenderHotels list={parentList} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
