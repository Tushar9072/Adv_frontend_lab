import React, { useRef } from "react";
import VideoPlayer from "./VideoPlayer";

const Parent = () => {
  const videoRef = useRef();

  return (
    <div className="p-6 space-y-4 max-w-xl mx-auto">
      
      <VideoPlayer ref={videoRef} />

      <div className="flex gap-4">
        <button
          onClick={() => videoRef.current.playVideo()}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Play
        </button>

        <button
          onClick={() => videoRef.current.pauseVideo()}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Pause
        </button>
      </div>
    </div>
  );
};

export default Parent;
