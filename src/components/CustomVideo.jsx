import React, { useRef, useState } from "react";
import "../styles/custom-video-player.scss";

// import video from "../assets/video.mp4";
// import captions from "../assets/diamond-1.vtt";
import useVideoPlayer from "../hooks/useVideoPlayer";

const CustomVideo = () => {
  const [showCaptions, setShowCaptions] = useState(false); // Add state variable
  const [isHovered, setIsHovered] = useState(null);
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const videoElement = useRef(null);
  const trueElement = true;
  const falseElement = false;
  const hasSubs = false;
  // Function to toggle the captions
  const toggleCaptions = () => {
    setShowCaptions(!showCaptions);
    if (videoElement.current) {
      // Use videoElement to control the caption track
      if (showCaptions) {
        videoElement.current.textTracks[0].mode = "hidden";
      } else {
        videoElement.current.textTracks[0].mode = "showing";
      }
    }
  };
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  return (
    <div className="container">
      <div className="video-wrCustomVideoer">
        <video
          preload="true"
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
          onClick={togglePlay}
          poster="/astro/images/video-screen.jpg"
          controls={falseElement}
          className={`video ${playerState.isPlaying ? "playing" : "stopped"}`}
          playsInline // Prevent fullscreen on modern browsers
          webkit-playsinline="true"
          onMouseOver={handleMouseOver}
          onMouseOut={() => setIsHovered(null)}
        >
          <source
            type="video/mp4"
            src="https://player.vimeo.com/progressive_redirect/playback/877982802/rendition/720p/file.mp4?loc=external&signature=bc200f96f6b07e8b374c471bda8ecca669eb66eb6ebc062747d83cee4bb49933"
          />

          <track
            preload="true"
            kind="captions"
            label="Video Captions"
            srcLang="en"
            src="/astro/diamond-1.vtt"
          ></track>
        </video>
        <div className="controls" onMouseOver={handleMouseOver}>
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <i className="bx bx-play"></i>
              ) : (
                <i className="bx bx-pause"></i>
              )}
            </button>
          </div>
          {isHovered && (
            <button
              onMouseOver={handleMouseOver}
              className="mute-btn"
              onClick={toggleMute}
            >
              {!playerState.isMuted ? (
                <i className="bx bxs-volume-full"></i>
              ) : (
                <i className="bx bxs-volume-mute"></i>
              )}
            </button>
          )}
          {hasSubs && (
            <button className="caption-btn" onClick={toggleCaptions}>
              {!showCaptions ? (
                <i className="bx bx-captions"></i>
              ) : (
                <i className="bx bxs-captions"></i>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomVideo;
