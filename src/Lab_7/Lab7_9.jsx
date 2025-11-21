import React, { useEffect, useState } from "react";

const Lab7_9 = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="h-64 flex items-center justify-center bg-gray-100">
      <div
        className={`
          max-w-md p-6 rounded-lg shadow bg-white text-center
          transform transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <h2 className="text-xl font-semibold mb-2">Fade-in Section</h2>
        <p className="text-gray-600">
          This content smoothly fades in when the page loads.
        </p>
      </div>
    </div>
  );
};

export default Lab7_9;
