import React, { useState, useMemo } from "react";

const DerivedNameMemo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = useMemo(() => {
    console.log("Recalculating fullName...");
    return `${firstName} ${lastName}`.trim();
  }, [firstName, lastName]);

  return (
    <div className="p-6 space-y-4 max-w-md mx-auto">

      <input
        type="text"
        className="border p-2 rounded w-full"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        type="text"
        className="border p-2 rounded w-full"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <div className="p-3 bg-gray-100 rounded shadow text-lg font-semibold">
        Full Name: {fullName || "(empty)"}
      </div>

      <p className="text-gray-500 text-sm">
        (Check console — fullName recalculates only when first/last name changes)
      </p>
    </div>
  );
};

export default DerivedNameMemo;
