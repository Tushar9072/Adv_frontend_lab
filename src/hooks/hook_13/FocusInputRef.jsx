import React, { useRef } from "react";

export default function FocusInputRef() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-4">
        useRef - Focus Input
      </h2>

      <input
        ref={inputRef}
        className="w-full border p-3 rounded mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
        placeholder="Click the button to focus me"
      />

      <button
        onClick={handleFocus}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
      >
        Focus Input
      </button>
    </div>
  );
}
