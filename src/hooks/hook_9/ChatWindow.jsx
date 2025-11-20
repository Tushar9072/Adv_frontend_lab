import React, { useRef, useLayoutEffect } from "react";

const ChatWindow = () => {
  const chatRef = useRef();

  useLayoutEffect(() => {
    const chatDiv = chatRef.current;
    chatDiv.scrollTop = chatDiv.scrollHeight;
  }, []);

  return (
    <div className="p-6">
      <div
        ref={chatRef}
        className="h-64 overflow-y-auto border rounded p-3 space-y-2 bg-gray-100"
      >
        <p className="bg-white p-2 rounded shadow">Hello!</p>
        <p className="bg-white p-2 rounded shadow">How are you?</p>
        <p className="bg-white p-2 rounded shadow">Welcome to the chat.</p>
        <p className="bg-white p-2 rounded shadow">This is a long message...</p>
        <p className="bg-white p-2 rounded shadow">Scrolling should auto reach here.</p>
        <p className="bg-white p-2 rounded shadow">Hello!</p>
        <p className="bg-white p-2 rounded shadow">How are you?</p>
        <p className="bg-white p-2 rounded shadow">Welcome to the chat.</p>
        <p className="bg-white p-2 rounded shadow">This is a long message...</p>
        <p className="bg-white p-2 rounded shadow">Scrolling should auto reach here.</p>
        <p className="bg-white p-2 rounded shadow">Hello!</p>
        <p className="bg-white p-2 rounded shadow">How are you?</p>
        <p className="bg-white p-2 rounded shadow">Welcome to the chat.</p>
        <p className="bg-white p-2 rounded shadow">This is a long message...</p>
        <p className="bg-white p-2 rounded shadow">Scrolling should auto reach here.</p>
        <p className="bg-white p-2 rounded shadow">Hello!</p>
        <p className="bg-white p-2 rounded shadow">How are you?</p>
        <p className="bg-white p-2 rounded shadow">Welcome to the chat.</p>
        <p className="bg-white p-2 rounded shadow">This is a long message...</p>
        <p className="bg-white p-2 rounded shadow">Scrolling should auto reach here.</p>
      </div>
    </div>
  );
};

export default ChatWindow;
