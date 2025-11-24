import React from "react";

function DisplayBox({ isDisplay }) {
  return (
    <div>
      {isDisplay && <h2>This element is visible because isDisplay = true</h2>}
    </div>
  );
}

export default DisplayBox;
