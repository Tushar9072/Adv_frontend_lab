    import React from "react";

const Lab7_7 = () => {
  return (
    <div className="flex items-center justify-center h-40">
      <button className="flex flex-col items-center">
        <svg
          className="w-10 h-10 text-blue-600 animate-bounce"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 2a1 1 0 011 1v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 116.707 9.293L9 11.586V3a1 1 0 011-1z" />
          <path d="M4 15a1 1 0 000 2h12a1 1 0 100-2H4z" />
        </svg>
        <span className="mt-2 text-sm text-gray-700">Download</span>
      </button>
    </div>
  );
};

export default Lab7_7;
