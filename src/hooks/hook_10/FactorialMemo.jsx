import React, { useState, useMemo } from "react";

const FactorialMemo = () => {
  const [number, setNumber] = useState(1);

  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    
    let result = 1;
    for (let i = 1; i <= number; i++) {
      for (let j = 0; j < 100000000; j++) {}
      result *= i;
    }
    return result;
  }, [number]); 

  return (
    <div className="p-6 space-y-4 max-w-sm mx-auto">

      <input
        type="number"
        className="border p-2 rounded w-full"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <div className="p-3 bg-gray-100 rounded shadow">
        <p className="text-lg font-semibold">
          Factorial: {factorial}
        </p>
      </div>

      <p className="text-gray-500 text-sm">
        (Open console to see when calculation runs)
      </p>
    </div>
  );
};

export default FactorialMemo;
