"use client";

import useSWR from "swr";

import VideoPlayer from "../VideoPlayer/VideoPlayer";
import styles from "./live.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Live = () => {
  const { data, error, isLoading } = useSWR("/api/live", fetcher);

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className={styles.wrapper}>
      <VideoPlayer videosrc={data.YoutubeLink} />
      <div className={styles.detailsWrapper}>
        <h1 className={styles.title}>{data.title}</h1>
        <div>
          <p className={styles.preacher}>{data.preacher}</p>
          <p className={styles.info}>{`Info: ${data.desc}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Live;
