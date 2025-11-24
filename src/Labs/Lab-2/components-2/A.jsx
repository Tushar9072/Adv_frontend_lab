import React, { useState } from "react";
import B from "./B";

export default function A({ name, setName }) {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>Component A</h3>

      <input
        type="text"
        placeholder="Enter name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <B text={text} setName={setName} name={name} />
    </div>
  );
}
