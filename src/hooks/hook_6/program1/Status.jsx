import React from "react";
import useOnlineStatus from "./useOnlineStatus.js";

const Status = () => {
  const isOnline = useOnlineStatus();
  return (
    <div>
      <div style={{ padding: 20, fontSize: 20 }} className={"p-20 text-2xl"}>
        <h2>Online / Offline Tracker</h2>
        <p>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
      </div>
    </div>
  );
};

export default Status;
