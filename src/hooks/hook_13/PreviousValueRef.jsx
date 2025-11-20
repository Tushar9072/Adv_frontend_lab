/* eslint-disable react-hooks/refs */
// src/components/PreviousValueRef.js
import React, { useRef, useState, useEffect } from "react";

export default function PreviousValueRef() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(null);

  // Update previous value on every render
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4">useRef - Previous Value</h2>

      <p className="text-center text-lg mb-4">
        // eslint-disable-next-line react-hooks/refs
        <span className="font-semibold">Prev:</span> {prevCountRef.current ?? "None"} 
        <span className="mx-2">|</span>
        <span className="font-semibold">Current:</span> {count}
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
