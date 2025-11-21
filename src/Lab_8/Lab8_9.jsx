import React, { useState } from "react";

const Lab8_9 = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="p-6 flex items-center justify-center">
      <label className="flex items-center space-x-3 cursor-pointer">
        <div
          className={`
            w-12 h-7 flex items-center rounded-full p-1
            transition-colors
            ${checked ? "bg-green-500" : "bg-gray-300"}
          `}
          onClick={() => setChecked(!checked)}
        >
          <div
            className={`
              w-5 h-5 bg-white rounded-full shadow
              transform transition-transform
              ${checked ? "translate-x-5" : "translate-x-0"}
            `}
          />
        </div>
        <span className="text-sm font-medium">
          {checked ? "Enabled" : "Disabled"}
        </span>
      </label>
    </div>
  );
};

export default Lab8_9;
