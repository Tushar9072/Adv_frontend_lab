import React, { useState, useTransition } from "react";

export default function DeferredSearch() {
  const items = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);

  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(items);

  const [isPending, startTransition] = useTransition();

  function handleChange(value) {
    setQuery(value);

    startTransition(() => {
      const result = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(result);
    });
  }

  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow w-[400px]">
      <h2 className="text-lg font-semibold mb-3 text-center">
        Deferred Search (useTransition)
      </h2>

      <input
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search..."
        className="w-full p-2 border rounded mb-3"
      />

      {isPending && <p className="text-blue-600 text-sm">Filtering…</p>}

      <ul className="h-64 overflow-auto border rounded p-2 bg-white">
        {filtered.map((item, i) => (
          <li key={i} className="border-b py-1 text-gray-700 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
