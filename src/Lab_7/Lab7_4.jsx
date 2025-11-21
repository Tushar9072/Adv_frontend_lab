import React, { useState } from "react";

const Lab7_4 = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex">
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <p>Some nav links / content here…</p>
      </div>

      <div className="flex-1 flex items-start justify-center p-6 ml-0 md:ml-0">
        <button
          onClick={() => setOpen(!open)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow
                     hover:bg-blue-600 transition-colors"
        >
          {open ? "Hide Sidebar" : "Show Sidebar"}
        </button>
      </div>
    </div>
  );
};

export default Lab7_4;
