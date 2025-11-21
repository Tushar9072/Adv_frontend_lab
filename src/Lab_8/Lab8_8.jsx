import React from "react";

const Lab8_8 = () => {
  return (
    <div className="p-10 flex items-center justify-center bg-slate-100">
      <div
        className="
          group w-64 h-40 bg-white rounded-xl shadow-lg
          flex flex-col items-center justify-center text-center
          transition-transform duration-300
          [perspective:800px]
        "
      >
        <div
          className="
            w-full h-full flex flex-col items-center justify-center px-4
            rounded-xl
            bg-gradient-to-br from-indigo-500 to-sky-400 text-white
            transition-transform duration-300
            group-hover:-rotate-x-6 group-hover:rotate-y-6
          "
        >
          <h3 className="text-lg font-semibold mb-1">3D Tilt Card</h3>
          <p className="text-sm text-indigo-100">
            Move your mouse over this card.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lab8_8;
