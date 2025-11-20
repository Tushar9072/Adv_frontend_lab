import React, { useRef, useLayoutEffect } from "react";

const AnimateBox = () => {
  const boxRef = useRef();

  useLayoutEffect(() => {
    const box = boxRef.current;

    const startLeft = box.getBoundingClientRect().left;

    box.style.transform = `translateX(${startLeft}px)`;

    box.getBoundingClientRect();

    box.style.transition = "transform 0.5s ease";
    box.style.transform = `translateX(200px)`;
  }, []);

  return (
    <div className="p-6">
      <div
        ref={boxRef}
        className="w-20 h-20 bg-blue-600 rounded-lg"
      />
    </div>
  );
};

export default AnimateBox;
