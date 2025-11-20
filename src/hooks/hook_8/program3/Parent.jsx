import React, { useRef } from "react";
import MyForm from "./MyForm";

const Parent = () => {
  const formRef = useRef();

  return (
    <div className="p-6 space-y-4 max-w-md mx-auto">

      <MyForm ref={formRef} />

      <button
        onClick={() => formRef.current.resetForm()}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Reset Form
      </button>
    </div>
  );
};

export default Parent;
