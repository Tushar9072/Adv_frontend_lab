import React, { useState, useDeferredValue, useEffect } from "react";

export default function DeferredChat() {
  const [message, setMessage] = useState("");
  const deferredMessage = useDeferredValue(message);

  const isProcessing = message !== deferredMessage;

  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    if (!deferredMessage) return;

   
    const timer = setTimeout(() => {
      setChatLog((prev) => [
        ...prev,
        { text: deferredMessage, time: new Date().toLocaleTimeString() }
      ]);
    }, 600); 

    return () => clearTimeout(timer);
  }, [deferredMessage]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Deferred Chat Typing Simulation</h2>

        <div className="h-64 overflow-y-auto border rounded-lg p-4 bg-gray-50">
          {chatLog.length === 0 ? (
            <p className="text-gray-400">No messages yet...</p>
          ) : (
            chatLog.map((entry, i) => (
              <div key={i} className="mb-3">
                <div className="p-2 bg-blue-100 rounded-lg inline-block">
                  {entry.text}
                </div>
                <div className="text-xs text-gray-500">{entry.time}</div>
              </div>
            ))
          )}
        </div>

        {isProcessing && (
          <div className="mt-3 text-orange-500 text-sm animate-pulse">
            Processing message…
          </div>
        )}

        <div className="mt-4 flex gap-3">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            onClick={() => setMessage("")}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
