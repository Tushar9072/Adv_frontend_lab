import React from "react";
import { counterStore } from "../../../store/counterStore";

export default function CounterControls() {
  return (
    <div className="flex items-center gap-4 mt-4">
      <button
        onClick={() => counterStore.increment()}
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow"
      >
        + Increment
      </button>

      <button
        onClick={() => counterStore.decrement()}
        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow"
      >
        - Decrement
      </button>

      <button
        onClick={() => counterStore.reset()}
        className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow"
      >
        Reset
      </button>
    </div>
  );
}
