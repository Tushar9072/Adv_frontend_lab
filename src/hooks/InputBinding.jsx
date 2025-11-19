import React, { useState } from "react";

export default function InputBinding() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center mt-10 gap-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type something..."
      />

      <p className="text-lg text-gray-700">
        You typed: <span className="font-semibold">{text}</span>
      </p>
    </div>
  );
}
