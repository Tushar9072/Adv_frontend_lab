import React from "react";
import E from "./E";

function D({ name }) {
  return (
    <div style={{ border: "1px solid #4caf50", padding: "10px", margin: "5px" }}>
      <h4>Component D</h4>
      <E name={name} />
    </div>
  );
}
//conatins E
export default D;
