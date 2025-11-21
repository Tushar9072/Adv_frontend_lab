import React from "react";

const Lab7_2 = () => {
  return (
    <div className="max-w-sm mx-auto">
      <div className="group border rounded-lg p-4 shadow-sm bg-white cursor-pointer">
        <h2 className="font-semibold text-lg mb-2">Hover the card</h2>
        <p className="text-gray-600">Some always-visible content.</p>

        <p
          className="
            mt-3 text-sm text-blue-600
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        >
          🎉 Hidden text appears on hover!
        </p>
      </div>
    </div>
  );
};

export default Lab7_2;
