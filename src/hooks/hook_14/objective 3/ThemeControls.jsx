import React from "react";
import { themeStore } from "../../../store/themeStore";

export default function ThemeControls() {
  return (
    <div className="flex mt-6 gap-4">
      <button
        onClick={() => themeStore.toggle()}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
      >
        Toggle Theme
      </button>

      <button
        onClick={() => themeStore.setLight()}
        className="px-4 py-2 bg-gray-200 text-black rounded-lg shadow"
      >
        Light
      </button>

      <button
        onClick={() => themeStore.setDark()}
        className="px-4 py-2 bg-gray-900 text-white rounded-lg shadow"
      >
        Dark
      </button>
    </div>
  );
}
