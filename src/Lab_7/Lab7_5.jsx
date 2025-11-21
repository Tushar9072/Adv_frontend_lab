import React from "react";

const Lab7_5 = () => {
  return (
    <div className="flex items-center justify-center h-40">
      <div className="relative">
        <button className="px-5 py-2 bg-gray-800 text-white rounded-full">
          Inbox
        </button>

        <span
          className="
            absolute -top-2 -right-2 flex items-center justify-center
            h-6 w-6 rounded-full bg-red-500 text-xs text-white
            animate-pulse shadow-lg
          "
        >
          3
        </span>
      </div>
    </div>
  );
};

export default Lab7_5;
