import React from "react";

const Lab8_10 = () => {
  return (
    <div className="p-10 flex items-center justify-center">
      <div className="relative inline-block text-left group">
        {/* Button */}
        <button
          className="
            px-4 py-2 bg-gray-800 text-white rounded-md
            shadow hover:bg-gray-700
          "
        >
          Menu
        </button>

        {/* Dropdown */}
        <div
          className="
            absolute left-0 mt-2 w-40 rounded-md bg-white shadow-lg
            opacity-0 translate-y-2 pointer-events-none
            group-hover:opacity-100 group-hover:translate-y-0
            group-hover:pointer-events-auto
            transition-all duration-200
          "
        >
          <a className="block px-4 py-2 text-sm hover:bg-gray-100" href="#">
            Profile
          </a>
          <a className="block px-4 py-2 text-sm hover:bg-gray-100" href="#">
            Settings
          </a>
          <a className="block px-4 py-2 text-sm hover:bg-gray-100" href="#">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Lab8_10;
