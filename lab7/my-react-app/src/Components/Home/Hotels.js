import React, { useState } from "react";
import ViewMoreButton from "./HomeSubComponents/ViewMoreButton";
import HomeRenderHotels from "./HomeSubComponents/HomeRenderHotels";

export default function People() {
  const [viewMore, setViewMore] = useState(false);
  return (
    <section className="test-monials-section">
      <HomeRenderHotels viewMore={viewMore} />
      <ViewMoreButton viewMore={viewMore} setViewMore={setViewMore} />
    </section>
  );
}
