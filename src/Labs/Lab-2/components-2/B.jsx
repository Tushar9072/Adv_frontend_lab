import React from "react";
import C from "./C";

export default function B({ text, setName, name }) {
  return (
    <div>
      <h3>Component B</h3>

      <button onClick={() => setName(text)}>Set Name</button>

      <C name={name} setName={setName} />
    </div>
  );
}
