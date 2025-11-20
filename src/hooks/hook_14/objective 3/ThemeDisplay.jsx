import React from "react";
import { useSyncExternalStore } from "react";
import { themeStore } from "../../../store/themeStore";

export default function ThemeDisplay() {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot
  );

  return (
    <div
      className={`p-6 rounded-xl shadow-md w-64 text-center ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <h2 className="text-xl font-semibold mb-2">Current Theme</h2>
      <p className="text-2xl font-bold capitalize">{theme}</p>
    </div>
  );
}
