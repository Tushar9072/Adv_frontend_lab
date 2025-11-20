import React, { forwardRef, useRef, useImperativeHandle } from "react";

const MyForm = forwardRef((props, ref) => {
  const nameRef = useRef();
  const emailRef = useRef();

  // Expose reset method to parent
  useImperativeHandle(ref, () => ({
    resetForm() {
      nameRef.current.value = "";
      emailRef.current.value = "";
    },
  }));

  return (
    <div className="space-y-4">
      <input
        ref={nameRef}
        type="text"
        className="border p-2 rounded w-full"
        placeholder="Enter name"
      />

      <input
        ref={emailRef}
        type="email"
        className="border p-2 rounded w-full"
        placeholder="Enter email"
      />
    </div>
  );
});

export default MyForm;
