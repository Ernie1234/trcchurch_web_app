"use client";

import Button1 from "../btn/Button1";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__bg}>
        <video autoPlay muted loop playsInline className={styles.banner__video}>
          <source src="/images/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.content__bg}>
        <div className={styles.content}>
          <h1 className={styles.head_primary}>
            <span className={styles.head_primary__main}>Welcome to</span>
            <span className={styles.head_primary__sub}>
              the risen christ christian centre
            </span>
          </h1>
          <Button1 title="watch messages" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
