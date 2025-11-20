import React from "react";
import { useSyncExternalStore } from "react";
import { counterStore } from "../../../store/counterStore";

export default function CounterDisplay() {
  const count = useSyncExternalStore(
    counterStore.subscribe,
    counterStore.getSnapshot,
    counterStore.getServerSnapshot
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow-md text-center">
      <h2 className="text-xl font-semibold mb-2">Global Count</h2>
      <p className="text-3xl font-bold text-blue-600">{count}</p>
    </div>
  );
}
