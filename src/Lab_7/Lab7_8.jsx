import React, { useEffect, useState } from "react";

const TEXT = "Typing effect in Tailwind + React";

const Lab7_8 = () => {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setVisibleText(TEXT.slice(0, i + 1));
      i++;
      if (i === TEXT.length) clearInterval(id);
    }, 80);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center h-40 bg-gray-900">
      <p className="text-green-300 font-mono text-lg">
        {visibleText}
        <span className="border-r-2 border-green-300 ml-1 animate-pulse" />
      </p>
    </div>
  );
};

export default Lab7_8;
