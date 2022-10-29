import React from "react";

export default function ApplyButton({ buttonPressed }) {
  const handleButtonPressed = (event) => {
    buttonPressed(true);
  };

  return (
    <div id="apply">
      <button id="apply_button" onClick={handleButtonPressed}>
        Cancel
      </button>
    </div>
  );
}
