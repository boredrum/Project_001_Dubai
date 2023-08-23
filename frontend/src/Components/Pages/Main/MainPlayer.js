import React, { useState, useRef } from "react";
import dubaiVideo from "../../../main_player_dubaiVideo.mp4";

function MainPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div id="main_player">
      <video ref={videoRef} width="100%" height="100%">
        <source src={dubaiVideo} type="video/mp4" />
      </video>
      {isPlaying ? (
        <div className="main_player_controller" onClick={togglePlay}>
        </div>
      ) : (
        <div className="main_player_controller" onClick={togglePlay}>
          <button id="main_player_controller">
            <div id="play"></div>
          </button>
        </div>
      )}
    </div>
  );
}

export default MainPlayer;
