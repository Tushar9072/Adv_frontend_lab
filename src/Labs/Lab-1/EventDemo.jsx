import React from "react";

export default function EventDemo() {
  function handleClick() {
    alert("Button was clicked!");
  }

  return (
    <div>
      <h2>Event Handling Demo</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
