import React, { useState, useEffect, useMemo } from "react";
import { getAllHotels, getSortedHotels, getHotelsByPlace } from "../../Api";

export const placeOtions = [
  { value: "Filter by place", text: "Filter by place" },
  { value: "Beach", text: "Beach" },
  { value: "Mountains", text: "Mountains" },
  { value: "Safati", text: "Safari" },
  { value: "Forests", text: "Forests" },
];

export const costTypeSortingOptions = [
  { value: "Filter by cost", text: "Filter by cost" },
  { value: "asc", text: "Ascending" },
  { value: "desc", text: "Descanding" },
];

export const starsTypeSortingOptions = [
  { value: "Filter by stars", text: "Filter by stars" },
  { value: "asc", text: "Ascending" },
  { value: "desc", text: "Descanding" },
];

export default function Selects({
  passData,
  list,
  selectedPlace,
  setSelectedPlace,
  selectedCostTypeSorting,
  setSelectedCostTypeSorting,
  selectedStarsTypeSorting,
  setSelectedStarsTypeSorting,
}) {
  const [hotelList, setHotelList] = useState([...list]);
  console.log("list in selects" + list);
  const [svt3, setSvt3] = useState(list);

  function getFilteredList(value) {
    if (!value || value === "Filter by place") {
      return list;
    }
    // let a = [];

    // getHotelsByPlace(value).then((response) => {
    //   console.log("response", response);

    //   setSvt3(response);
    //   a = response;
    // });
    // return svt3;
    return [...list].filter((item) => item.place === value);
  }
  function getFilteredListByStars(value) {
    if (!value || value === "Filter by stars") {
      return list;
    } else {
      // getSortedHotels("count_of_stars", value).then((response) => {
      //   console.log("response", response);

      //   setSvt3(response);
      // });
      // return svt3;
      if (value === "asc") {
        return [...list]
          .sort((first, second) => first.count_of_stars - second.count_of_stars)
          .filter((item) => item);
      }
      if (value === "desc") {
        return [...list]
          .sort((first, second) => second.count_of_stars - first.count_of_stars)
          .filter((item) => item);
      }
    }
  }

  function getFilteredListByCost(value) {
    if (!value || value === "Filter by cost") {
      return list;
    } else {
      // getSortedHotels("cost", value).then((response) => {
      //   console.log("response", response);

      //   setSvt3(response);
      //   // a = response;
      // });
      // return svt3;
      if (value === "asc") {
        return [...list]
          .sort((first, second) => first.cost - second.cost)
          .filter((item) => item);
      }
      if (value === "desc") {
        return [...list]
          .sort((first, second) => second.cost - first.cost)
          .filter((item) => item);
      }
    }
  }

  const handlePlaceChange = (event) => {
    setSelectedPlace(event.target.value);
    passData(getFilteredList(event.target.value));
  };

  const handleStarsChange = (event) => {
    setSelectedStarsTypeSorting(event.target.value);
    passData(getFilteredListByStars(event.target.value));
  };

  const handleCostChange = (event) => {
    setSelectedCostTypeSorting(event.target.value);
    passData(getFilteredListByCost(event.target.value));
  };

  return (
    <div id="selects">
      <select value={selectedCostTypeSorting} onChange={handleCostChange}>
        {costTypeSortingOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>

      <select value={selectedStarsTypeSorting} onChange={handleStarsChange}>
        {starsTypeSortingOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>

      <select value={selectedPlace} onChange={handlePlaceChange}>
        {placeOtions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}
