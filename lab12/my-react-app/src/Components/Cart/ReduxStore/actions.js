export function addHotel(addedHotel) {
  return {
    type: "ADD_HOTEL",
    hotel: addedHotel,
  };
}

export function removeHotel(removedHotel) {
  return {
    type: "REMOVE_HOTEL",
    hotel: removedHotel,
  };
}
