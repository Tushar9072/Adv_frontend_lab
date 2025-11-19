import React, { useEffect, useState } from "react";

export default function AutoCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold">Auto Counter</h1>
      <p className="text-xl text-gray-700 mt-4">{count}</p>
    </div>
  );
}
