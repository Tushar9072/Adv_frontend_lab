import React, { useReducer } from "react";

const initialState = {
  name: "",
  age: "",
  email: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "update_field":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

export default function FormReducer() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "update_field",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Form (Reducer)</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-600 mb-1">Name</label>
          <input
            name="name"
            value={state.name}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Age</label>
          <input
            name="age"
            value={state.age}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter your age"
            type="number"
          />
        </div>


        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            name="email"
            value={state.email}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter your email"
            type="email"
          />
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Reset
        </button>

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => alert(JSON.stringify(state, null, 2))}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
