import React, { useState, useDeferredValue } from "react";

export default function LiveTyping() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  const isUpdating = text !== deferredText;

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl">
        
        <h2 className="text-2xl font-semibold mb-4">Live Typing + Deferred Preview</h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something here..."
          rows={6}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
        ></textarea>

        <div className="mt-4 flex items-center gap-2">
          <span className="font-semibold text-gray-800">Main text:</span>
          <span className="text-gray-600">
            {text ? `"${text}"` : <em className="text-gray-400">(empty)</em>}
          </span>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-800">Preview:</span>

            {isUpdating ? (
              <span className="text-orange-500 text-sm animate-pulse">
                Preview text updating…
              </span>
            ) : (
              <span className="text-green-600 text-sm">Preview up to date</span>
            )}
          </div>

          <div className="mt-2 p-4 min-h-[80px] bg-gray-50 border border-gray-300 rounded-lg whitespace-pre-wrap text-gray-700">
            {deferredText || (
              <span className="text-gray-400">(no preview)</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
