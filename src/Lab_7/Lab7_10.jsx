import React, { useState } from "react";

const Lab7_10 = () => {
  const [ripple, setRipple] = useState(false);

  const handleClick = () => {
  setRipple(false);
  setTimeout(() => setRipple(true), 10); 
};

  return (
    <div className="flex items-center justify-center h-40">
      <button
        onClick={handleClick}
        className="relative overflow-hidden px-6 py-3 bg-indigo-600 text-white rounded-lg"
      >
        Click Ripple
        {ripple && (
          <span
            className="
              pointer-events-none absolute inset-0
              animate-ping rounded-full
              bg-white/40
            "
          />
        )}
      </button>
    </div>
  );
};

export default Lab7_10;
