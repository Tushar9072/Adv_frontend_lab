import React, { useState } from "react";
import B from "./B";

function A({ name, setName }) {
  const [textboxValue, setTextboxValue] = useState("");

  return (
    <div style={{ border: "1px solid #795548", padding: "10px", margin: "5px" }}>
      <h4>Component A</h4>
      <input
        type="text"
        placeholder="Enter name"
        value={textboxValue}
        onChange={(e) => setTextboxValue(e.target.value)}
      />
      <B name={name} setName={setName} textboxValue={textboxValue} />
    </div>
  );
}
//contains B + textbox
export default A;
