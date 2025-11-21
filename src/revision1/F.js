import React from "react";

function F({ name }) {
  return (
    <div style={{ border: "1px solid #f44336", padding: "10px", margin: "5px" }}>
      <h4>Component F</h4>
      <p>Name from App: {name}</p>
    </div>
  );
}
//Displays the name from app.js
export default F;
