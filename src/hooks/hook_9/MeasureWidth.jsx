import React, { useRef, useLayoutEffect, useState } from "react";

const MeasureWidth = () => {
  const titleRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const w = titleRef.current.offsetWidth;
    setWidth(w);
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 
        ref={titleRef} 
        className="text-3xl font-bold bg-gray-100 p-2 rounded"
      >
        Hello Students!
      </h1>

      <p className="text-lg">
        Width: <span className="font-semibold">{width}px</span>
      </p>
    </div>
  );
};

export default MeasureWidth;
