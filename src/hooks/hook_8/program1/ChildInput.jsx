import React, { forwardRef, useRef, useImperativeHandle } from "react";

const ChildInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  console.log(inputRef)

    useImperativeHandle(ref, () => ({
        focusInput() {
        inputRef.current.focus();
        },
    }));

  return (
    <input
      ref={inputRef}
      type="text"
      className="border p-2 rounded w-full"
      placeholder="Type here..."
    />
  );
});

export default ChildInput;
