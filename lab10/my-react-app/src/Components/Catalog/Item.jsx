import React from "react";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";
import star from "../../Img/star.png";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { getHotelsById } from "../../Api";
import Loading from "../Catalog/Loading";
import { addHotel } from "../Cart/ReduxStore/actions";
import { Link } from "react-router-dom";
// import store from "../Cart/ReduxStore/store";
// import { addHotel } from "./ReduxStore/actions";

const bold_catalog = "bold";

const Item = () => {
  const [loading, setLoading] = useState(false);
  const { ItemID } = useParams();
  const [hotel, setHotel] = useState([]);

  const dispatch = useDispatch();
  const hotelsInCart = useSelector((state) => state.hotelsInCart);

  const addHotelToCart = () => {
    dispatch(addHotel(hotel));
    // dispatch({ type: "ADD_HOTEL", hotel: hotel });
    console.log("dispatch:", dispatch(addHotel(hotel)));
    // console.log("dispatch:", dispatch({ type: "ADD_HOTEL", hotel: hotel }));
    console.log("selector:", hotelsInCart);
  };

  useEffect(() => {
    setLoading(true);
    getHotelsById(ItemID)
      .then((response) => {
        console.log("response data:", response);
        setHotel(response);
      })
      .then(() => {
        setTimeout(() => setLoading(false));
      });
  }, []);

  console.log(hotel);
  return (
    <div>
      <NavBar bold_catalog={bold_catalog} />
      {/* {loading ? (
        <Loading />
      ) : (
        <RenderItem hotel={hotel} addHotelToCart={addHotelToCart} />
      )} */}
      <div className="main">
        <div className="main_container">
          <div className="inner">
            <div className="leftDiv">
              {hotel.image !== undefined && (
                <img
                  src={require(`../../Img/${hotel.image}`)}
                  alt="hotel_image"
                />
              )}
            </div>
            <div className="rightDiv">
              <div className="title">
                <p>{hotel.name}</p>
              </div>
              <div>{hotel.description}</div>
              <div className="stars_div_item">
                {Array.apply(null, { length: hotel.countOfStars }).map(
                  (e, i) => (
                    <img
                      src={star}
                      key={i}
                      alt="stars"
                      className="stars_images_item"
                    ></img>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="price">
              <p>Price: {hotel.cost}$</p>
            </div>
            <div className="buttons">
              <button>
                <Link to="/catalog" style={{ textDecoration: "none" }}>
                  <p>View more</p>
                </Link>
              </button>
              {/* <button onClick={addHotelToCart}> */}
              <button onClick={addHotelToCart}>
                {/* <a >Add to cart</a> */}
                <p>Add to cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Item;
