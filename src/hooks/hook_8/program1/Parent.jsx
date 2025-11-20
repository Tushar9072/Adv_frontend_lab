import React, { useRef } from "react";
import ChildInput from "./ChildInput";

const Parent = () => {
  const childRef = useRef();

  return (
    <div className="p-6 space-y-4">
      <ChildInput ref={childRef} />

      <button
        onClick={() => childRef.current.focusInput()}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Focus Input
      </button>
    </div>
  );
};

export default Parent;
