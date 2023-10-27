import { Player } from "video-react";
import "https://video-react.js.org/assets/video-react.css";
const VideoComponent = () => {
  return (
    <Player>
      <source src="https://player.vimeo.com/progressive_redirect/playback/877982802/rendition/720p/file.mp4?loc=external&signature=bc200f96f6b07e8b374c471bda8ecca669eb66eb6ebc062747d83cee4bb49933" />
    </Player>
  );
};

export default VideoComponent;
