import React, { useReducer, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const initialState = {
  name: "",
  email: "",
  age: "",
  password: "",
  errors: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "FIELD_CHANGE":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function MultiFieldValidationForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  // Validation Logic
  const validate = () => {
    let errors = {};

    if (!state.name.trim()) errors.name = "Name is required";
    if (!state.email.match(/^\S+@\S+\.\S+$/))
      errors.email = "Enter a valid email";
    if (!state.age || Number(state.age) <= 0)
      errors.age = "Enter a valid age";
    if (state.password.length < 6)
      errors.password = "Password must be at least 6 characters";

    dispatch({ type: "SET_ERRORS", errors });

    return Object.keys(errors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSnackbar(true);
      dispatch({ type: "RESET" });
    }, 1500);
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Registration Form</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="font-semibold">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "FIELD_CHANGE", field: "name", value: e.target.value })
            }
          />
          {state.errors.name && (
            <p className="text-red-600 text-sm">{state.errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="font-semibold">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded mt-1"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "FIELD_CHANGE", field: "email", value: e.target.value })
            }
          />
          {state.errors.email && (
            <p className="text-red-600 text-sm">{state.errors.email}</p>
          )}
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="font-semibold">Age</label>
          <input
            type="number"
            className="w-full p-2 border rounded mt-1"
            value={state.age}
            onChange={(e) =>
              dispatch({ type: "FIELD_CHANGE", field: "age", value: e.target.value })
            }
          />
          {state.errors.age && (
            <p className="text-red-600 text-sm">{state.errors.age}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="font-semibold">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded mt-1"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "FIELD_CHANGE", field: "password", value: e.target.value })
            }
          />
          {state.errors.password && (
            <p className="text-red-600 text-sm">{state.errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-4 p-2 rounded font-bold text-white ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Snackbar */}
      <Snackbar
        open={snackbar}
        autoHideDuration={2500}
        onClose={() => setSnackbar(false)}
      >
        <Alert severity="success">Form submitted successfully!</Alert>
      </Snackbar>
    </div>
  );
}
