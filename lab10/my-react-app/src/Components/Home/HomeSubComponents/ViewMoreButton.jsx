import React from "react";

export default function ViewMoreButton({ viewMore, setViewMore }) {
  return (
    <div id="container_button">
      <button id="view_more" onClick={() => setViewMore(!viewMore)}>
        {viewMore ? "View less" : "View more"}
      </button>
    </div>
  );
}
