import React from "react";

export default function ViewMoreButton({ viewMore, setViewMore }) {
  // const [viewMore, setViewMore] = useState(false);

  return (
    <div id="container_button">
      <button id="view_more" onClick={() => setViewMore(!viewMore)}>
        {viewMore ? "View less" : "View more"}
      </button>
    </div>
  );
}
