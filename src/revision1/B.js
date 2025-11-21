import React, { useState } from "react";
import C from "./C";

function B({ name, setName }) {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setName(inputValue); // update state in App
    setInputValue(""); // clear input
  };

  return (
    <div style={{ border: "1px solid #9c27b0", padding: "10px", margin: "5px" }}>
      <h4>Component B</h4>
      <input
        type="text"
        placeholder="Enter name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick} style={{ marginLeft: "10px" }}>
        Update Name
      </button>
      <C name={name} />
    </div>
  );
}
//Contains C + Textbox + Button to update state
export default B;
