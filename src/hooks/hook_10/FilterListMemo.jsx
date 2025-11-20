import React, { useState, useMemo } from "react";

const FilterListMemo = () => {
  const [search, setSearch] = useState("");

  const items = Array.from({ length: 5000 }, (_, i) => `Item ${i}`);

  const filteredItems = useMemo(() => {
    console.log("Filtering...");
    return items.filter(item =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]); 

  return (
    <div className="p-6 space-y-4 max-w-md mx-auto">

      <input
        type="text"
        className="border p-2 rounded w-full"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="h-64 overflow-y-auto border rounded p-3 bg-gray-50">
        {filteredItems.map((item) => (
          <p key={item} className="p-1 border-b">
            {item}
          </p>
        ))}
      </div>

      <p className="text-sm text-gray-500">
        (Check console → “Filtering…” runs only when search changes)
      </p>
    </div>
  );
};

export default FilterListMemo;
