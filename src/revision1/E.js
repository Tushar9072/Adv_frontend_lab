import React from "react";
import F from "./F";

function E({ name }) {
  return (
    <div style={{ border: "1px solid #2196f3", padding: "10px", margin: "5px" }}>
      <h4>Component E</h4>
      <F name={name} />
    </div>
  );
}
//it contains F
export default E;
