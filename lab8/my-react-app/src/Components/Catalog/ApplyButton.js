import React from "react";

export default function ApplyButton({ buttonPressed }) {
  const handleButtonPressed = (event) => {
    // console.log(event.target.value);

    // filteredList = getFilteredListByCost(event.target.value);
    // console.log(filteredList);
    // passData(filteredList);
    buttonPressed(true);
    // console.log(true);
    // console.log(event.target.value);
  };

  return (
    <div id="apply">
      {/* <button id="apply_button" onClick={() => setButtonPressed(buttonPressed)}> */}
      <button id="apply_button" onClick={handleButtonPressed}>
        {/* {applyButtonPressed ? "Cancel" : "Apply"} */}
        Cancel
      </button>
    </div>
  );
}
