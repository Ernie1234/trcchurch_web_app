"use client";

import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.css";

function VideoPlayer({ videosrc }) {
  return (
    <div className={styles.videoplayerWrapper}>
      <ReactPlayer
        width="100%"
        height="100%"
        url={videosrc}
        type="video/mp4"
        controls={true}
        light={false}
        pip={true}
      />
    </div>
  );
}

export default VideoPlayer;
