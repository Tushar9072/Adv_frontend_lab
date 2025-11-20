import React, { useState, useTransition } from "react";

export default function TabSwitch() {
  const [tab, setTab] = useState("home");
  const [isPending, startTransition] = useTransition();

  function switchTab(name) {
    startTransition(() => {
      setTab(name);
    });
  }

  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow w-[400px]">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Tab Switching (useTransition)
      </h2>

      <div className="flex gap-3 mb-4">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded"
          onClick={() => switchTab("home")}
        >
          Home
        </button>

        <button
          className="px-3 py-1 bg-green-500 text-white rounded"
          onClick={() => switchTab("about")}
        >
          About
        </button>

        <button
          className="px-3 py-1 bg-purple-500 text-white rounded"
          onClick={() => switchTab("contact")}
        >
          Contact
        </button>
      </div>

      {isPending && <p className="text-blue-600 text-sm mb-2">Loading…</p>}

      <div className="p-4 bg-white rounded shadow text-gray-700 text-sm">
        {tab === "home" && <p>Welcome to the Home tab.</p>}
        {tab === "about" && <p>This is the About tab content.</p>}
        {tab === "contact" && <p>Contact us at email@example.com.</p>}
      </div>
    </div>
  );
}
