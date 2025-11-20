import React, { useState, useTransition } from "react";

export default function SlowListRenderer() {
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  function generateList() {
    startTransition(() => {
      const hugeList = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
      setItems(hugeList);
    });
  }

  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow w-[400px]">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Slow List Rendering (useTransition)
      </h2>

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded mb-3"
        onClick={generateList}
      >
        Generate 10,000 Items
      </button>

      {isPending && (
        <p className="text-blue-600 text-sm animate-pulse mb-2">
          Rendering…
        </p>
      )}

      <ul className="h-64 overflow-auto bg-white border rounded p-2 text-sm text-gray-700">
        {items.map((item, i) => (
          <li key={i} className="border-b py-1">{item}</li>
        ))}
      </ul>
    </div>
  );
}
