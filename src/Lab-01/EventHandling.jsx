import React from "react";

function EventHandling() {
  
  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <div>
      <h2>React Event Handling Example</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default EventHandling;
