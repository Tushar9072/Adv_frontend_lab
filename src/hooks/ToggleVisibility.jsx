import React, { useState } from "react";

export default function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center mt-10">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        {isVisible ? "Hide" : "Show"} Paragraph
      </button>

      {isVisible && (
        <p className="mt-4 text-lg text-gray-700">
          This is the paragraph that is toggled on and off.
        </p>
      )}
    </div>
  );
}
