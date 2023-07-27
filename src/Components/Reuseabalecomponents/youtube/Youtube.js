import React from "react";
import YouTube from "react-youtube";

const Youtube = ({ videoId }) => {
  const opts = {
    width: "100%",
    height: "590",
    playerVars: {},
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} className="youtube-video" />
    </div>
  );
};

export default Youtube;
