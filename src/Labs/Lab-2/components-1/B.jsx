import React, { useState } from "react";
import C from "./C";

export default function B({ name, setName }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <h3>Component B</h3>

      <input
        type="text"
        placeholder="Enter name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => setName(input)}>Set Name</button>

      <C name={name} setName={setName} />
    </div>
  );
}
