import axios from "axios";

export const getAllHotels = async () => {
  return await axios.get("http://localhost:8080/hotels");
};

export const getSortedHotels = async (typeOfSorting, typeOfDirection) => {
  return (
    await axios.get("http://localhost:8080/hotels/sort/", {
      params: {
        typeOfSorting: typeOfSorting,
        typeOfDirection: typeOfDirection,
      },
    })
  ).data;
};

export const getHotelsByPlace = async (place) => {
  return (
    await axios.get("http://localhost:8080/hotels/sort-by-place/", {
      params: { place: place },
    })
  ).data;
};

export const getHotelsById = async (id) => {
  return (await axios.get("http://localhost:8080/hotels/" + id)).data;
};
