import React from "react";
import B from "./B";

function A({ name, setName }) {
  return (
    <div style={{ border: "1px solid #795548", padding: "10px", margin: "5px" }}>
      <h4>Component A</h4>
      <B name={name} setName={setName} />
    </div>
  );
}
//contains A
export default A;
