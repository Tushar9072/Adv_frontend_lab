import React, { useState, useCallback } from "react";
// import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked from child!");
  }, []); // reference stays same

  console.log("Parent rendered");

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      {/* <Child onButtonClick={handleClick} /> */}
    </div>
  );
}

export default Parent;
