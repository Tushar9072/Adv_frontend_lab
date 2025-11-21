import React from "react";
import D from "./D";

function C({ name }) {
  return (
    <div style={{ border: "1px solid #ff9800", padding: "10px", margin: "5px" }}>
      <h4>Component C</h4>
      <D name={name} />
    </div>
  );
}

export default C;
