import React from "react";
import C from "./C";

function B({ name, setName, textboxValue }) {
  const handleClick = () => {
    setName(textboxValue); // Update App state with value from A's textbox
  };

  return (
    <div style={{ border: "1px solid #9c27b0", padding: "10px", margin: "5px" }}>
      <h4>Component B</h4>
      <button onClick={handleClick}>Update Name in App</button>
      <C name={name} />
    </div>
  );
}
//contains c + button to update app state
export default B;
