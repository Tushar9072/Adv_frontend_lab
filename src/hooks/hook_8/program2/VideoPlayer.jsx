import React, { forwardRef, useRef, useImperativeHandle } from "react";

const VideoPlayer = forwardRef((props, ref) => {
  const videoRef = useRef();

  
  useImperativeHandle(ref, () => ({
    playVideo() {
      videoRef.current.play();
    },
    pauseVideo() {
      videoRef.current.pause();
    }
  }));

  return (
    <video
      ref={videoRef}
      className="w-full rounded-lg border"
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      controls={false}
    />
  );
});

export default VideoPlayer;
