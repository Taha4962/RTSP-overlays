import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url, overlays }) => {
  return (
    <div className="video-container">
      <ReactPlayer
        url={url}
        controls={true}
        playing={false}
        width="100%"
        height="100%"
      />

      {overlays.map((overlay, index) => (
        <div
          key={index}
          className="overlay"
          style={{
            position: "absolute",
            top: overlay.position.top,
            left: overlay.position.left,
            width: overlay.size.width,
            height: overlay.size.height,
          }}
        >
          {overlay.content}
        </div>
      ))}
    </div>
  );
};

export default VideoPlayer;
