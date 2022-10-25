import React, { useState, useEffect, useMemo } from "react";

export const placeOtions = [
  { value: "Filter by place", text: "Filter by place" },
  { value: "Beach", text: "Beach" },
  { value: "Mountains", text: "Mountains" },
  { value: "Safati", text: "Safari" },
  { value: "Forests", text: "Forests" },
];

export const costTypeSortingOptions = [
  { value: "Filter by cost", text: "Filter by cost" },
  { value: "Ascanding", text: "Ascanding" },
  { value: "Descanding", text: "Descanding" },
];

export const starsTypeSortingOptions = [
  { value: "Filter by stars", text: "Filter by stars" },
  { value: "Ascanding", text: "Ascanding" },
  { value: "Descanding", text: "Descanding" },
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
  const [hotelList, setHotelList] = useState(list);

  let filteredList;
  const [filtered, setfilteredList] = useState(list);

  function getFilteredList(value) {
    if (!value || value === "Filter by place") {
      setfilteredList(hotelList);
      return hotelList;
    }
    setfilteredList(hotelList.filter((item) => item.place === value));
    return hotelList.filter((item) => item.place === value);
  }

  function getFilteredListByStars(value) {
    if (!value || value === "Filter by stars") {
      // return filtered;
      setfilteredList(hotelList);
      return hotelList;
    } else {
      if (value === "Ascanding") {
        return filtered
          .sort((first, second) => first.countOfStars - second.countOfStars)
          .filter((item) => item);
      }
      if (value === "Descanding") {
        return filtered
          .sort((first, second) => second.countOfStars - first.countOfStars)
          .filter((item) => item);
      }
    }
  }

  function getFilteredListByCost(value) {
    if (!value || value === "Filter by cost") {
      setfilteredList(hotelList);
      return hotelList;
    } else {
      if (value === "Ascanding") {
        return filtered
          .sort((first, second) => first.cost - second.cost)
          .filter((item) => item);
      }
      if (value === "Descanding") {
        return filtered
          .sort((first, second) => second.cost - first.cost)
          .filter((item) => item);
      }
    }
  }

  const handlePlaceChange = (event) => {
    console.log("working");
    setSelectedPlace(event.target.value);
    filteredList = getFilteredList(event.target.value);
    passData(filteredList);
  };

  const handleStarsChange = (event) => {
    console.log(event.target.value);
    setSelectedStarsTypeSorting(event.target.value);
    filteredList = getFilteredListByStars(event.target.value);
    console.log(filteredList);
    passData(filteredList);
  };

  const handleCostChange = (event) => {
    console.log(event.target.value);
    setSelectedCostTypeSorting(event.target.value);
    filteredList = getFilteredListByCost(event.target.value);
    console.log(filteredList);
    passData(filteredList);
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
