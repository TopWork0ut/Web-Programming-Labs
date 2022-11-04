import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import { removeHotel } from "./ReduxStore/actions";

export default function CartItem({ key, hotel }) {
  const dispatch = useDispatch();
  // const hotelsInCart = useSelector((state) => state.hotelsInCart);
  // const hotelsInCart = useSelector((state) => {
  //   console.log(state);
  //   return state.hotelsInCart;
  // });

  const removeHotelFromCart = () => {
    dispatch(removeHotel(hotel));
  };
  return (
    <div className="item_cart">
      {hotel.image !== undefined && (
        <img src={require(`../../Img/${hotel.image}`)} alt="hotel_image" />
      )}
      <div className="rightside">
        <div className="upper_details">
          <div className="name">{hotel.name}</div>

          <div className="cost_div">Cost: {hotel.cost}$</div>

          <button className="remove_button" onClick={removeHotelFromCart}>
            <p> Remove</p>
          </button>
        </div>
        <div className="description">{hotel.description}</div>
      </div>
    </div>
  );
}
