
import React, { useReducer } from "react";

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

export default function CounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="p-6 bg-gray-100 rounded-md w-64 text-center shadow">
      <h2 className="text-xl font-semibold mb-4">Count: {state.count}</h2>

      <div className="flex justify-center gap-3">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          +
        </button>

        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          -
        </button>

        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
