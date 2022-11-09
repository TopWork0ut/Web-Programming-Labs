const hotels = {
  hotelsInCart: [],
};

export function hotelsReducer(state = hotels, action) {
  if (action.type === "ADD_HOTEL") {
    const stateHotels = [...state.hotelsInCart];

    let isInArray = false;

    for (let i = 0; i < stateHotels.length; i++) {
      if (stateHotels[i].id === action.hotel.id) {
        if (stateHotels.length > 0)
          alert(action.hotel.name + " is already in your cart");
        isInArray = true;
        break;
      }
    }

    if (isInArray === false) {
      stateHotels.push(action.hotel);
    }
    return { ...state, hotelsInCart: stateHotels };
  } else if (action.type === "REMOVE_HOTEL") {
    console.log("removed");
    const arrayWithOutRemovedElements = state.hotelsInCart.filter(
      (hotel) => hotel.id !== action.hotel.id
    );
    return { hotelsInCart: arrayWithOutRemovedElements };
  }
  return state;
}
