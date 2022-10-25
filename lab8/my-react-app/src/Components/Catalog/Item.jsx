import React from "react";
import NavBar from "../Home/NavBar";
import Footer from "../Home/Footer";
import star from "../../Img/star.png";
import { list } from "./Catalog";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const bold_catalog = "bold";

const Item = () => {
  const { ItemID } = useParams();
  const [posts, setPosts] = useState([]);

  console.log(ItemID);
  console.log(list);
  const hotel = list.find((item) => {
    return item.id == ItemID;
  });

  console.log(hotel);
  return (
    <div>
      <NavBar bold_catalog={bold_catalog} />
      <div className="main">
        <div className="main_container">
          <div className="inner">
            <div className="leftDiv">
              <img src={hotel.image} alt="" />
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
                      className="stars_images_item"></img>
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
                <a href="/catalog">Go back</a>
              </button>
              <button>
                <a href="">Add to cart</a>
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
