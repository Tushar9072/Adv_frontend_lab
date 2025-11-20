import React from "react";
import { useSyncExternalStore } from "react";
import { windowWidthStore } from "../../store/windowWidthStore";

export default function WindowWidthDisplay() {
  const width = useSyncExternalStore(
    windowWidthStore.subscribe,
    windowWidthStore.getSnapshot,
    windowWidthStore.getServerSnapshot
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-8 text-center">
        <h1 className="text-2xl font-semibold mb-4">Window Width Tracker</h1>
        <p className="text-xl font-bold text-blue-600">
          Current Width: {width}px
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Resize the window to see updates instantly.
        </p>
      </div>
    </div>
  );
}
