
import React, { useState } from "react";
import { addToCartAPI } from "../../api/mockApi";

export default function CartButton() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    const optimisticCount = count + 1;

    setCount(optimisticCount);
    setLoading(true);

    addToCartAPI(optimisticCount)
      .then((serverCount) => {
        setCount(serverCount); // sync with server
      })
      .catch(() => {
        alert("Failed to update cart. Reverting.");
        setCount(count); // revert to old value
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between w-48">
        <span className="text-xl font-semibold">Cart: {count}</span>
        <button
          onClick={handleAddToCart}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </div>
    </div>
  );
}
