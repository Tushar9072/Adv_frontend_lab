import React, { useState } from "react";

export default function DemoState() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-semibold mb-4">Counter: {count}</h2>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          –
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}
